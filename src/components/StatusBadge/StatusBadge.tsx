import "./StatusBadge.css";

type StatusBadgeProps = {
  tone?: "success" | "warning" | "danger" | "info" | "neutral";
  children: React.ReactNode;
};

export function StatusBadge({ tone = "neutral", children }: StatusBadgeProps) {
  return <span className={`cm-status cm-status-${tone}`}>{children}</span>;
}
