export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "owner" | "admin" | "member";
}

export interface Team {
  id: string;
  name: string;
  owner_id: string;
  members: TeamMember[];
  invites?: TeamInvite[];
}

export interface TeamInvite {
  id: string;
  email: string;
  role: "admin" | "member";
  status: "pending";
}
