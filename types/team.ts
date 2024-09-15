export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Member";
  status: "pending" | "accepted";
}

export interface Team {
  id: string;
  name: string;
  owner_id: string;
  members: TeamMember[];
}
