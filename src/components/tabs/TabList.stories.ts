import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TabList } from "./TabList";

const meta: Meta<typeof TabList> = {
  title: "Design System/Molecules/Tab List",
  component: TabList,
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
type Story = StoryObj<typeof TabList>;

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
    activeTab: 0,
    setActiveTab: fn(),
  },
};

export const Underline: Story = {
  args: {
    ...Default.args,
    variant: "underline",
  },
};
