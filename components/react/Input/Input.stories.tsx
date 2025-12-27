import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Choose a unique username",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Search...",
    "aria-label": "Search",
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Input label="Default" placeholder="Enter text" />
      <Input label="With Helper" placeholder="Enter text" helperText="This is helper text" />
      <Input label="With Error" placeholder="Enter text" error="This field is required" />
      <Input label="Disabled" placeholder="Enter text" disabled />
    </div>
  ),
};
