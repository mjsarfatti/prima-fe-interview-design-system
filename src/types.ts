export type BadgeType = {
  title: string;
  variant: "neutral" | "positive" | "negative";
};

export type TabType = {
  title: string;
  content: React.ReactNode;
  badge?: BadgeType;
};
