export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** 選填，例如 /team/alice.jpg */
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // 在此新增成員；留空則顯示「即將公布」
];
