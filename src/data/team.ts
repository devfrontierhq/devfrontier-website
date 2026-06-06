export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** 選填，例如 /Team/alice.jpg */
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "lois", name: "Lois", role: "創辦人", image: "/Team/Lois.jpg" },
  { id: "hannah", name: "Hannah", role: "共同創辦人兼開發", image: "/Team/Hannah.png" },
  { id: "eli", name: "Eli", role: "共同創辦人兼 PM", image: "/Team/Eli.jpg" },
  { id: "vic", name: "Vic", role: "共同創辦人兼行銷", image: "/Team/Vic.jpg" },
  { id: "aya", name: "Aya", role: "共同創辦人兼開發", image: "/Team/Aya.png" },
  { id: "steven", name: "Steven", role: "共同創辦人兼開發", image: "/Team/Steve.jpg" },
  { id: "angel", name: "Angel", role: "共同創辦人兼設計", image: "/Team/Angel.png" },
];
