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
import { Team, TeamMember } from "@/types/team"; // Assume these types are defined
import { Subscription } from "@/types/subscription"; // Assume these types are defined
import { User } from "@supabase/auth-js";

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
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Member" as "Admin" | "Member",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const addMember = () => {
    // In a real app, this would call an API to send an invitation
    console.log("Sending invitation to:", newMember);
    setNewMember({ name: "", email: "", role: "Member" });
  };

  const updateMember = (id: string) => {
    // In a real app, this would call an API to update the member
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, ...newMember } : member,
      ),
    );
    setEditingId(null);
    setNewMember({ name: "", email: "", role: "Member" });
  };

  const deleteMember = (id: string) => {
    // In a real app, this would call an API to remove the member or cancel the invitation
    setMembers(members.filter((member) => member.id !== id));
  };

  const acceptedMembers = members.filter(
    (member) => member.status === "accepted",
  );
  const pendingMembers = members.filter(
    (member) => member.status === "pending",
  );

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
              <Badge variant="secondary">{subscription.pricing_tier}</Badge>
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
            {acceptedMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  {editingId === member.id ? (
                    <Input
                      value={newMember.name}
                      onChange={(e) =>
                        setNewMember({ ...newMember, name: e.target.value })
                      }
                    />
                  ) : (
                    member.name
                  )}
                </TableCell>
                <TableCell>
                  {editingId === member.id ? (
                    <Input
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({ ...newMember, email: e.target.value })
                      }
                    />
                  ) : (
                    member.email
                  )}
                </TableCell>
                <TableCell>
                  {editingId === member.id ? (
                    <Select
                      value={newMember.role}
                      onValueChange={(value: "Admin" | "Member") =>
                        setNewMember({ ...newMember, role: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Member">Member</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    member.role
                  )}
                </TableCell>
                <TableCell>
                  {editingId === member.id ? (
                    <Button onClick={() => updateMember(member.id)}>
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingId(member.id);
                          setNewMember(member);
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
            placeholder="Name"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
          />
          <Input
            placeholder="Email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
          />
          <Select
            value={newMember.role}
            onValueChange={(value: "Admin" | "Member") =>
              setNewMember({ ...newMember, role: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Member">Member</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={addMember}>
            <PlusIcon className="mr-2 h-4 w-4" /> Invite Member
          </Button>
        </div>
        {pendingMembers.length > 0 && (
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
                {pendingMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteMember(member.id)}
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
