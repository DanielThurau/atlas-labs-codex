import type { Meta, StoryObj } from "@storybook/react";
import { RefreshButton } from "./RefreshButton";

const meta: Meta<typeof RefreshButton> = {
  title: "Components/RefreshButton",
  component: RefreshButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RefreshButton>;

const mockRefresh = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

const mockForceCheck = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

export const Default: Story = {
  args: {
    onRefresh: mockRefresh,
  },
};

export const WithForceCheck: Story = {
  args: {
    onRefresh: mockRefresh,
    onForceCheck: mockForceCheck,
  },
};

export const Disabled: Story = {
  args: {
    onRefresh: mockRefresh,
    disabled: true,
  },
};
