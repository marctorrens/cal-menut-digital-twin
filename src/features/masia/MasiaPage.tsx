import {
  BookOpen,
  CalendarDays,
  DoorClosed,
  Droplets,
  FileText,
  Flame,
  Home,
  Lightbulb,
  Map,
  Package,
  PencilLine,
  Shield,
  Trees,
  Wrench,
  Zap,
  Network,
  Hammer,
} from "lucide-react";
import "./MasiaPage.css";

const sections = [
  {
    title: "Infraestructures",
    description: "Els sistemes físics que formen la masia.",
    items: [
      { icon: Home, title: "Masia", text: "Plànols, espais i distribució." },
      { icon: Trees, title: "Jardí i exterior", text: "Finca, reg, arbres i camins." },
      { icon: DoorClosed, title: "Portes i accessos", text: "Motors, claus i videoporter." },
      { icon: Zap, title: "Electricitat", text: "Quadres, circuits i canalitzacions." },
      { icon: Droplets, title: "Aigua", text: "Canonades, dipòsits i claus de pas." },
      { icon: Flame, title: "Climatització", text: "GreenHeiss, radiadors i hidràulica." },
      { icon: Network, title: "Xarxa i comunicacions", text: "Rack, UniFi, fibra i cablejat." },
      { icon: Lightbulb, title: "Il·luminació", text: "Lluminàries, escenes i criteris." },
      { icon: Shield, title: "Seguretat", text: "Càmeres, gravació i detecció." },
    ],
  },
  {
    title: "Gestió",
    description: "El manteniment i la documentació operativa.",
    items: [
      { icon: Wrench, title: "Manteniment", text: "Tasques, revisions i incidències." },
      { icon: Package, title: "Inventari", text: "Equips, recanvis i materials." },
      { icon: FileText, title: "Documents", text: "Manuals, garanties i factures." },
    ],
  },
  {
    title: "Projecte",
    description: "La memòria de la reforma i les decisions preses.",
    items: [
      { icon: Hammer, title: "Reforma", text: "Fases, fotos i evolució." },
      { icon: Map, title: "Plànols", text: "Distribució i instal·lacions." },
      { icon: PencilLine, title: "Decisions", text: "Per què es va fer així." },
      { icon: CalendarDays, title: "Cronologia", text: "Historial i canvis importants." },
    ],
  },
];

export function MasiaPage() {
  return (
    <main className="cm-knowledge-home">
      <section className="cm-cover">
        <div className="cm-cover-mark">
          <BookOpen size={22} strokeWidth={1.8} />
        </div>

        <p className="cm-kicker">Cal Menut</p>
        <h1>La memòria viva de la masia.</h1>
        <p className="cm-cover-text">
          Tot el que cal saber sobre la reforma, la infraestructura i el manteniment,
          en un sol lloc.
        </p>
      </section>

      <section className="cm-index">
        {sections.map((section) => (
          <div className="cm-index-section" key={section.title}>
            <div className="cm-section-heading">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <div className="cm-index-grid">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="cm-index-card" key={item.title}>
                    <Icon size={19} strokeWidth={1.8} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
