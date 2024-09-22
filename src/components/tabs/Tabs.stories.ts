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
        content:
          "Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
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
