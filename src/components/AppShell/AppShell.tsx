import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import "./AppShell.css";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="cm-shell">
      <Sidebar />
      <main className="cm-main">{children}</main>
    </div>
  );
}
