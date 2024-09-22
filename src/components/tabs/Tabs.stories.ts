import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Design System/Organisms/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["pill", "underline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: "Pill",
  args: {
    tabs: [
      {
        title: "Emails",
        content: "Lorem ipsum emails...",
      },
      {
        title: "Files",
        content: "Lorem ipsum files...",
        badge: {
          title: "Warning",
          variant: "negative",
        },
      },
      {
        title: "Edits",
        content: "Lorem ipsum edits...",
      },
      {
        title: "Dashboard",
        content: "Lorem ipsum dashboard...",
      },
      {
        title: "Messages",
        content: "Lorem ipsum messages...",
      },
    ],
  },
};

export const Underline: Story = {
  args: {
    ...Default.args,
    variant: "underline",
  },
};
