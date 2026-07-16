import {
  Home,
  Trees,
  Zap,
  Flame,
  Droplets,
  Lightbulb,
  DoorClosed,
  Camera,
  Wrench,
  Package,
  BookOpen,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

const items = [
  { label: "Masia", icon: Home, active: true },
  { label: "Finca", icon: Trees },
  { label: "Energia", icon: Zap },
  { label: "Climatització", icon: Flame },
  { label: "Aigua", icon: Droplets },
  { label: "Il·luminació", icon: Lightbulb },
  { label: "Accessos", icon: DoorClosed },
  { label: "Seguretat", icon: Camera },
  { label: "Manteniment", icon: Wrench },
  { label: "Inventari", icon: Package },
  { label: "Documents", icon: BookOpen },
  { label: "Configuració", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="cm-sidebar">
      <div className="cm-sidebar-brand">
        <span>Cal Menut</span>
        <small>OS v0.2</small>
      </div>

      <nav className="cm-sidebar-nav" aria-label="Navegació principal">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={item.active ? "cm-nav-item cm-nav-item-active" : "cm-nav-item"}
            >
              <Icon size={18} strokeWidth={1.9} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
