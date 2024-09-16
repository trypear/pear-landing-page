"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Team, TeamMember, TeamInvite } from "@/types/team";
import { Subscription } from "@/types/subscription";
import { User } from "@supabase/auth-js";
import { capitalizeInitial } from "@/lib/utils";
import { toast } from "sonner";

type EnterpriseDashboardProps = {
  team: Team;
  user: User;
  subscription: Subscription;
};

export default function EnterpriseDashboard({
  team,
  user,
  subscription,
}: EnterpriseDashboardProps) {
  const [teamName, setTeamName] = useState(team.name);
  const [isEditingTeamName, setIsEditingTeamName] = useState(false);
  const [members, setMembers] = useState(team.members);
  const [invites, setInvites] = useState(team.invites);
  const [newMember, setNewMember] = useState({
    email: "",
    role: "member" as "admin" | "member",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const isOwner = (memberId: string) => {
    return members.find((m) => m.id === memberId)?.role === "owner";
  };

  const isCurrentUser = (memberId: string) => {
    return memberId === user.id;
  };

  const canEditMember = (memberId: string) => {
    return !isOwner(memberId) && !isCurrentUser(memberId);
  };

  const addMember = async () => {
    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamId: team.id,
          email: newMember.email,
          role: newMember.role,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send invitation");
      }

      const newInvite: TeamInvite = {
        id: Date.now().toString(), // Temporary ID, should be replaced with the one from the server
        ...newMember,
        status: "pending",
      };
      setInvites((prevInvites) => [...(prevInvites || []), newInvite]);
      setNewMember({ email: "", role: "member" });
      // Show success message to user
      toast.success("Invitation sent successfully");
    } catch (error) {
      console.error("Error sending invitation:", error);
      // Show error message to user
      toast.error("Failed to send invitation");
    }
  };
  const updateMember = (id: string) => {
    // In a real app, this would call an API to update the member
    setMembers(
      members.map((member) =>
        member.id === id
          ? { ...member, role: newMember.role as "owner" | "admin" | "member" }
          : member,
      ),
    );
    setEditingId(null);
    setNewMember({ email: "", role: "member" });
  };

  const deleteMember = (id: string) => {
    // In a real app, this would call an API to remove the member
    setMembers(members.filter((member) => member.id !== id));
  };

  const deleteInvite = (id: string) => {
    // In a real app, this would call an API to cancel the invitation
    setInvites(invites.filter((invite) => invite.id !== id));
  };

  return (
    <div className="max-w-full overflow-auto p-4 pt-36 sm:p-8 sm:pt-24 md:p-16 md:pt-28 lg:px-32">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-3xl font-bold">
            {isEditingTeamName ? (
              <Input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="max-w-sm"
              />
            ) : (
              teamName
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditingTeamName(!isEditingTeamName)}
            >
              {isEditingTeamName ? "Save" : "Edit"}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Manage your team members and their roles
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                Enterprise -{" "}
                {subscription.pricing_tier.includes("monthly")
                  ? "Monthly"
                  : "Yearly"}
              </Badge>
              <p className="font-semibold">
                Next billing date:{" "}
                {new Date(
                  subscription.current_period_end * 1000,
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Team Members</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  {editingId === member.id ? (
                    <Select
                      value={newMember.role}
                      onValueChange={(value: "admin" | "member") =>
                        setNewMember({ ...newMember, role: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    capitalizeInitial(member.role)
                  )}
                </TableCell>
                <TableCell>
                  {editingId === member.id ? (
                    <Button onClick={() => updateMember(member.id)}>
                      Save
                    </Button>
                  ) : (
                    <>
                      {canEditMember(member.id) && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setEditingId(member.id);
                              setNewMember({
                                email: member.email,
                                role: member.role,
                              });
                            }}
                          >
                            <Pencil1Icon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteMember(member.id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Invite New Member</h2>
        <div className="mb-4 flex gap-4">
          <Input
            placeholder="Email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
          />
          <Select
            value={newMember.role}
            onValueChange={(value: "admin" | "member") =>
              setNewMember({ ...newMember, role: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={addMember}>
            <PlusIcon className="mr-2 h-4 w-4" /> Invite Member
          </Button>
        </div>

        {invites.length > 0 && (
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Pending Invitations</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invites.map((invite) => (
                  <TableRow key={invite.id}>
                    <TableCell>{invite.email}</TableCell>
                    <TableCell>{invite.role}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteInvite(invite.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
