import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { Input } from "../Input";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Modal</Button>,
    title: "Modal Title",
    description: "This is a description of the modal content.",
    children: (
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginTop: "16px" }}>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    ),
  },
};

export const WithForm: Story = {
  args: {
    trigger: <Button>Add User</Button>,
    title: "Add Team Member",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Input label="Email address" placeholder="user@example.com" />
        <Input label="Role" placeholder="Developer" />
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Add Member</Button>
        </div>
      </div>
    ),
  },
};

export const Confirmation: Story = {
  args: {
    trigger: <Button variant="danger">Delete Project</Button>,
    title: "Delete project?",
    description:
      'This will permanently delete "My Project" and all its contents. This action cannot be undone.',
    children: (
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </div>
    ),
    size: "sm",
  },
};

export const LargeModal: Story = {
  args: {
    trigger: <Button>Open Large Modal</Button>,
    title: "Large Modal",
    description: "This modal uses the large size variant.",
    children: (
      <div>
        <p style={{ marginBottom: "16px" }}>
          Large modals are suitable for complex content that needs more space,
          such as detailed forms or previews.
        </p>
        <p style={{ marginBottom: "16px" }}>
          However, if your modal content is very complex, consider using a
          dedicated page instead.
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    ),
    size: "lg",
  },
};

const ControlledExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Controlled Modal"
        description="This modal is controlled via state."
      >
        <p style={{ marginBottom: "16px" }}>
          This modal's open state is controlled by the parent component.
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

