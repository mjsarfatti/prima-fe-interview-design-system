import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["neutral", "positive", "negative"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: "Neutral",
  args: {
    children: "Badge",
    variant: "neutral",
  },
};

export const Positive: Story = {
  args: {
    ...Default.args,
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    ...Default.args,
    variant: "negative",
  },
};
