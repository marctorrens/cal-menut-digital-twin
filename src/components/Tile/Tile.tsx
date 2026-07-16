import { LucideIcon } from "lucide-react";
import { StatusBadge } from "../StatusBadge";
import "./Tile.css";

type TileProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  status?: string;
  tone?: "success" | "warning" | "danger" | "info" | "neutral";
};

export function Tile({ icon: Icon, title, description, status, tone = "neutral" }: TileProps) {
  return (
    <article className="cm-tile">
      <div className="cm-tile-icon">
        <Icon size={20} strokeWidth={1.9} />
      </div>
      <div className="cm-tile-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {status && <StatusBadge tone={tone}>{status}</StatusBadge>}
      </div>
    </article>
  );
}
