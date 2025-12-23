import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { Card } from "../Card";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: "account",
        label: "Account",
        content: (
          <Card>
            <h3>Account Settings</h3>
            <p style={{ marginTop: "8px" }}>
              Manage your account settings and preferences.
            </p>
          </Card>
        ),
      },
      {
        id: "password",
        label: "Password",
        content: (
          <Card>
            <h3>Password Settings</h3>
            <p style={{ marginTop: "8px" }}>
              Update your password and security options.
            </p>
          </Card>
        ),
      },
      {
        id: "notifications",
        label: "Notifications",
        content: (
          <Card>
            <h3>Notification Preferences</h3>
            <p style={{ marginTop: "8px" }}>
              Configure how you receive notifications.
            </p>
          </Card>
        ),
      },
    ],
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      {
        id: "active",
        label: "Active",
        content: <Card>This tab is active and clickable.</Card>,
      },
      {
        id: "disabled",
        label: "Disabled",
        content: <Card>You shouldn't see this.</Card>,
        disabled: true,
      },
      {
        id: "another",
        label: "Another",
        content: <Card>This tab is also active.</Card>,
      },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { id: "1", label: "Overview", content: <Card>Overview content</Card> },
      { id: "2", label: "Analytics", content: <Card>Analytics content</Card> },
      { id: "3", label: "Reports", content: <Card>Reports content</Card> },
      { id: "4", label: "Settings", content: <Card>Settings content</Card> },
      { id: "5", label: "Users", content: <Card>Users content</Card> },
    ],
  },
};

