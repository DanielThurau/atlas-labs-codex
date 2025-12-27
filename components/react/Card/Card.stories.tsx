import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p>
        This is a basic card with some content. Cards are used to group related content together.
      </p>
    ),
  },
};

export const Elevated: Story = {
  args: {
    elevated: true,
    children: <p>This card has elevation (shadow) for a more prominent appearance.</p>,
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>This card has a header section separated from the content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This card has content and a footer with actions.</p>
      </CardContent>
      <CardFooter>
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <h3>Project Settings</h3>
      </CardHeader>
      <CardContent>
        <p style={{ marginBottom: "16px" }}>
          Configure your project settings here. Changes will be saved automatically.
        </p>
        <p>Last updated: January 1, 2024</p>
      </CardContent>
      <CardFooter>
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const PaddingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card padding="sm">
        <p>Small padding</p>
      </Card>
      <Card padding="md">
        <p>Medium padding (default)</p>
      </Card>
      <Card padding="lg">
        <p>Large padding</p>
      </Card>
    </div>
  ),
};
