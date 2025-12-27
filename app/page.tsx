"use client";

import { useState } from "react";
import { Button } from "@/components/react/Button";
import { Input } from "@/components/react/Input";
import { Card } from "@/components/react/Card";
import { Badge } from "@/components/react/Badge";
import { Modal } from "@/components/react/Modal";
import { Tabs } from "@/components/react/Tabs";
import { Toast, ToastProvider } from "@/components/react/Toast";
import styles from "./page.module.css";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ToastProvider>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Design Codex</h1>
          <p>A personal design system playground</p>
          <Button variant="secondary" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </header>

        <main className={styles.main}>
          {/* Typography Section */}
          <section className={styles.section}>
            <h2>Typography</h2>

            {/* Font Families */}
            <Card>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Font Families</h3>
              <div className={styles.fontDemo}>
                <div className={styles.fontFamily}>
                  <span className={styles.fontLabel}>Primary (Martian Mono)</span>
                  <p className={styles.fontSample} style={{ fontFamily: "var(--font-primary)" }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <p
                    className={styles.fontSample}
                    style={{ fontFamily: "var(--font-primary)", fontSize: "var(--text-xl)" }}
                  >
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
                <div className={styles.fontFamily}>
                  <span className={styles.fontLabel}>Sans — Secondary (Inter)</span>
                  <p className={styles.fontSample} style={{ fontFamily: "var(--font-sans)" }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <p
                    className={styles.fontSample}
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xl)" }}
                  >
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
              </div>
            </Card>

            {/* Code Block Demo */}
            <Card style={{ marginTop: "var(--space-4)" }}>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Code Blocks</h3>
              <pre className={styles.codeBlock}>{`// Martian Mono in action
const codex = {
  name: "Design Codex",
  fonts: ["Inter", "Martian Mono"],
  tokens: 127,
};

function greet(name: string) {
  return \`Hello, \${name}!\`;
}`}</pre>
            </Card>

            {/* Type Scale */}
            <Card style={{ marginTop: "var(--space-4)" }}>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Type Scale</h3>
              <div className={styles.typeScale}>
                <div className={styles.typeRow}>
                  <code>text-2xl</code>
                  <span style={{ fontSize: "var(--text-2xl)" }}>The quick brown fox</span>
                </div>
                <div className={styles.typeRow}>
                  <code>text-xl</code>
                  <span style={{ fontSize: "var(--text-xl)" }}>The quick brown fox</span>
                </div>
                <div className={styles.typeRow}>
                  <code>text-lg</code>
                  <span style={{ fontSize: "var(--text-lg)" }}>The quick brown fox</span>
                </div>
                <div className={styles.typeRow}>
                  <code>text-base</code>
                  <span style={{ fontSize: "var(--text-base)" }}>The quick brown fox</span>
                </div>
                <div className={styles.typeRow}>
                  <code>text-sm</code>
                  <span style={{ fontSize: "var(--text-sm)" }}>The quick brown fox</span>
                </div>
                <div className={styles.typeRow}>
                  <code>text-xs</code>
                  <span style={{ fontSize: "var(--text-xs)" }}>The quick brown fox</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Color Section */}
          <section className={styles.section}>
            <h2>Colors</h2>
            <Card>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Semantic Colors</h3>
              <div className={styles.colorGrid}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--color-intent-primary)" }}
                >
                  <span>Primary</span>
                </div>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--color-intent-success)" }}
                >
                  <span>Success</span>
                </div>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--color-intent-warning)" }}
                >
                  <span>Warning</span>
                </div>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--color-intent-danger)" }}
                >
                  <span>Danger</span>
                </div>
              </div>
              <h3 style={{ marginTop: "var(--space-6)", marginBottom: "var(--space-4)" }}>
                Neutral Scale
              </h3>
              <div className={styles.colorStrip}>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div
                    key={shade}
                    className={styles.colorChip}
                    style={{ backgroundColor: `var(--color-stone-${shade})` }}
                    title={`stone-${shade}`}
                  />
                ))}
              </div>
            </Card>
          </section>

          {/* Spacing Section */}
          <section className={styles.section}>
            <h2>Spacing</h2>
            <Card>
              <div className={styles.spacingDemo}>
                {[1, 2, 3, 4, 6, 8, 12, 16].map((size) => (
                  <div key={size} className={styles.spacingRow}>
                    <code>space-{size}</code>
                    <div className={styles.spacingBar} style={{ width: `var(--space-${size})` }} />
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Components Section */}
          <section className={styles.section}>
            <h2>Components</h2>

            <Tabs
              tabs={[
                {
                  id: "buttons",
                  label: "Buttons",
                  content: (
                    <Card>
                      <h3>Button Variants</h3>
                      <div className={styles.componentRow}>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="danger">Danger</Button>
                      </div>
                      <h3 style={{ marginTop: "var(--space-6)" }}>Button Sizes</h3>
                      <div className={styles.componentRow}>
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                      </div>
                      <h3 style={{ marginTop: "var(--space-6)" }}>Button States</h3>
                      <div className={styles.componentRow}>
                        <Button disabled>Disabled</Button>
                        <Button loading>Loading</Button>
                      </div>
                    </Card>
                  ),
                },
                {
                  id: "inputs",
                  label: "Inputs",
                  content: (
                    <Card>
                      <div className={styles.inputGrid}>
                        <Input label="Email" placeholder="you@example.com" />
                        <Input
                          label="With helper"
                          placeholder="Enter value"
                          helperText="This is helper text"
                        />
                        <Input
                          label="With error"
                          placeholder="Enter value"
                          error="This field is required"
                        />
                        <Input label="Disabled" placeholder="Disabled input" disabled />
                      </div>
                    </Card>
                  ),
                },
                {
                  id: "badges",
                  label: "Badges",
                  content: (
                    <Card>
                      <div className={styles.componentRow}>
                        <Badge>Default</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="danger">Danger</Badge>
                      </div>
                    </Card>
                  ),
                },
                {
                  id: "modal",
                  label: "Modal",
                  content: (
                    <Card>
                      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                      <Modal
                        open={modalOpen}
                        onOpenChange={setModalOpen}
                        title="Example Modal"
                        description="This is an example modal dialog."
                      >
                        <p style={{ marginBottom: "var(--space-4)" }}>
                          Modal content goes here. You can put forms, information, or any other
                          content.
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: "var(--space-2)",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button variant="secondary" onClick={() => setModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button variant="primary" onClick={() => setModalOpen(false)}>
                            Confirm
                          </Button>
                        </div>
                      </Modal>
                    </Card>
                  ),
                },
                {
                  id: "toast",
                  label: "Toast",
                  content: (
                    <Card>
                      <Button onClick={() => setToastOpen(true)}>Show Toast</Button>
                      <Toast
                        open={toastOpen}
                        onOpenChange={setToastOpen}
                        title="Changes saved"
                        description="Your changes have been saved successfully."
                      />
                    </Card>
                  ),
                },
              ]}
            />
          </section>
        </main>

        <footer className={styles.footer}>
          <p>Personal Design Codex • A record of taste, refined over time.</p>
        </footer>
      </div>
    </ToastProvider>
  );
}
