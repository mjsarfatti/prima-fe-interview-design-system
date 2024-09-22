export type TBadge = {
  title: string;
  variant: "neutral" | "positive" | "negative";
};

export type TTab = {
  title: string;
  content: React.ReactNode;
  badge?: TBadge;
};
