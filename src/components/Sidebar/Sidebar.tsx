import {
  BookOpen,
  CalendarDays,
  DoorClosed,
  Droplets,
  FileText,
  Flame,
  Hammer,
  Home,
  Lightbulb,
  Map,
  Network,
  Package,
  PencilLine,
  Shield,
  Trees,
  Wrench,
  Zap,
} from "lucide-react";
import "./Sidebar.css";

const groups = [
  {
    title: "Infraestructures",
    items: [
      { label: "Masia", icon: Home },
      { label: "Jardí i exterior", icon: Trees },
      { label: "Portes i accessos", icon: DoorClosed },
      { label: "Electricitat", icon: Zap },
      { label: "Aigua", icon: Droplets },
      { label: "Climatització", icon: Flame },
      { label: "Xarxa i comunicacions", icon: Network },
      { label: "Il·luminació", icon: Lightbulb },
      { label: "Seguretat", icon: Shield },
    ],
  },
  {
    title: "Gestió",
    items: [
      { label: "Manteniment", icon: Wrench },
      { label: "Inventari", icon: Package },
      { label: "Documents", icon: FileText },
    ],
  },
  {
    title: "Projecte",
    items: [
      { label: "Reforma", icon: Hammer },
      { label: "Plànols", icon: Map },
      { label: "Decisions", icon: PencilLine },
      { label: "Cronologia", icon: CalendarDays },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="cm-sidebar">
      <div className="cm-sidebar-brand">
        <BookOpen size={18} strokeWidth={1.8} />
        <div>
          <span>Cal Menut</span>
          <small>Memòria viva</small>
        </div>
      </div>

      <nav className="cm-sidebar-nav" aria-label="Índex de Cal Menut">
        {groups.map((group) => (
          <section className="cm-nav-group" key={group.title}>
            <h2>{group.title}</h2>

            <div className="cm-nav-list">
              {group.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={
                      group.title === "Infraestructures" && index === 0
                        ? "cm-nav-item cm-nav-item-active"
                        : "cm-nav-item"
                    }
                  >
                    <Icon size={16} strokeWidth={1.8} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
}
