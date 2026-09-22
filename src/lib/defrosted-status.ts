export const DEFROSTED_TIME_ZONE = "America/New_York";

export type DefrostedStatus = "frozen" | "defrosted" | "hot" | "unknown";

export type DefrostedSnapshot = {
  status: DefrostedStatus;
  answer: "No" | "Yes" | "Unknown";
  description: string;
  evaluatedDate: string;
  timeZone: string;
  thanksgivingDate: string;
};

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

const formatDateParts = new Intl.DateTimeFormat("en-US", {
  timeZone: DEFROSTED_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function getCalendarDate(
  now: Date,
  timeZone = DEFROSTED_TIME_ZONE,
): CalendarDate {
  const formatter =
    timeZone === DEFROSTED_TIME_ZONE
      ? formatDateParts
      : new Intl.DateTimeFormat("en-US", {
          timeZone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

  const parts = formatter.formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => {
    const value = parts.find((item) => item.type === type)?.value;
    if (!value) {
      throw new Error(`Missing ${type} while formatting date`);
    }
    return Number(value);
  };

  return {
    year: part("year"),
    month: part("month"),
    day: part("day"),
  };
}

export function getThanksgivingDay(year: number): number {
  const nov1Day = new Date(Date.UTC(year, 10, 1)).getUTCDay();
  const firstThursday = nov1Day === 4 ? 1 : ((11 - nov1Day) % 7) + 1;

  return firstThursday + 21;
}

export function getDefrostedStatus(
  now: Date,
  timeZone = DEFROSTED_TIME_ZONE,
): DefrostedStatus {
  const { year, month, day } = getCalendarDate(now, timeZone);
  const thanksgivingDay = getThanksgivingDay(year);

  if (month >= 1 && month < 11) {
    return "frozen";
  }

  if (month === 11 && day <= thanksgivingDay) {
    return "defrosted";
  }

  if (month === 11 || month === 12) {
    return "hot";
  }

  return "unknown";
}

export function getDefrostedSnapshot(
  now: Date,
  timeZone = DEFROSTED_TIME_ZONE,
): DefrostedSnapshot {
  const status = getDefrostedStatus(now, timeZone);
  const calendarDate = getCalendarDate(now, timeZone);
  const thanksgivingDay = getThanksgivingDay(calendarDate.year);
  const thanksgivingDate = `${calendarDate.year}-11-${String(thanksgivingDay).padStart(2, "0")}`;

  const text =
    status === "frozen"
      ? {
          answer: "No" as const,
          description: "Mariah Carey is currently frozen.",
        }
      : status === "defrosted"
        ? {
            answer: "Yes" as const,
            description: "Mariah Carey is currently defrosted.",
          }
        : status === "hot"
          ? {
              answer: "Yes" as const,
              description: "Mariah Carey is at peak temperature.",
            }
          : {
              answer: "Unknown" as const,
              description: "We don't know.",
            };

  return {
    status,
    ...text,
    evaluatedDate: `${calendarDate.year}-${String(calendarDate.month).padStart(2, "0")}-${String(calendarDate.day).padStart(2, "0")}`,
    timeZone,
    thanksgivingDate,
  };
}
