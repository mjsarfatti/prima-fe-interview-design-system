import type { Meta, StoryObj } from "@storybook/react";

import { TabTitlePill as TabTitle } from "./TabTitle";

const meta: Meta<typeof TabTitle> = {
  component: TabTitle,
};

export default meta;
type Story = StoryObj<typeof TabTitle>;

export const Default: Story = {
  name: "TabTitle",
  args: {
    children: "Label",
    $isSelected: false,
  },
};
