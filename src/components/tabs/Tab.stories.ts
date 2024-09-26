import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Design System/Atoms/Tab Title",
  component: Tab,
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
type Story = StoryObj<typeof Tab>;

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
