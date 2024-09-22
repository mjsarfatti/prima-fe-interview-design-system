import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TabTitle } from "./TabTitle";

const meta: Meta<typeof TabTitle> = {
  title: "Design System/Atoms/Tab Title",
  component: TabTitle,
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
type Story = StoryObj<typeof TabTitle>;

export const Default: Story = {
  name: "Pill",
  args: {
    children: "Label",
    isSelected: false,
    handleClick: fn(),
  },
};

export const Underline: Story = {
  args: {
    ...Default.args,
    variant: "underline",
  },
};
