import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast, ToastProvider } from "./Toast";
import { Button } from "../Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({
  variant,
  title,
  description,
}: {
  variant: "default" | "success" | "warning" | "error";
  title: string;
  description?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show {variant} toast</Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        variant={variant}
        title={title}
        description={description}
      />
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ToastDemo
      variant="default"
      title="Notification"
      description="This is a default toast message."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Changes saved"
      description="Your changes have been saved successfully."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Warning"
      description="This action may have unintended consequences."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Error"
      description="Something went wrong. Please try again."
    />
  ),
};

const AllVariantsDemo = () => {
  const [toasts, setToasts] = useState<
    { id: number; variant: "default" | "success" | "warning" | "error"; open: boolean }[]
  >([]);

  const showToast = (variant: "default" | "success" | "warning" | "error") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, variant, open: true }]);
  };

  const closeToast = (id: number) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)));
  };

  const titles = {
    default: "Notification",
    success: "Success",
    warning: "Warning",
    error: "Error",
  };

  const descriptions = {
    default: "This is a default toast message.",
    success: "Your changes have been saved successfully.",
    warning: "This action may have unintended consequences.",
    error: "Something went wrong. Please try again.",
  };

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button onClick={() => showToast("default")}>Default</Button>
      <Button onClick={() => showToast("success")}>Success</Button>
      <Button onClick={() => showToast("warning")}>Warning</Button>
      <Button onClick={() => showToast("error")}>Error</Button>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          open={toast.open}
          onOpenChange={(open) => !open && closeToast(toast.id)}
          variant={toast.variant}
          title={titles[toast.variant]}
          description={descriptions[toast.variant]}
        />
      ))}
    </div>
  );
};

export const AllVariants: Story = {
  render: () => <AllVariantsDemo />,
};
