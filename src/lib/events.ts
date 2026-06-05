export interface EventFrontmatter {
  date: Date;
  registrationUrl?: string;
  registrationOpen?: boolean;
  registrationStartsAt?: Date;
}

export type RegistrationStatus = "open" | "upcoming" | "closed";

function startOfDay(date: Date): Date {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

export function getRegistrationStatus(data: EventFrontmatter): RegistrationStatus | null {
  if (!data.registrationUrl) return null;

  const today = startOfDay(new Date());

  if (data.registrationOpen === false) return "closed";
  if (startOfDay(data.date) < today) return "closed";

  if (data.registrationStartsAt && today < startOfDay(data.registrationStartsAt)) {
    return "upcoming";
  }

  return "open";
}
