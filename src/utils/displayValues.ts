export const languages = ["en", "pt"] as const;
export type Language = (typeof languages)[number];

export const parseDisplayText = (text: string): string => {
  return text.replaceAll(/[\t\n\r]/g, "").replaceAll(/\s{2,}/g, " ");
};
