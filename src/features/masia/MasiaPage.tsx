import {
  Camera,
  DoorClosed,
  Flame,
  Gauge,
  Home,
  Lightbulb,
  Trees,
  Wrench,
  Zap,
} from "lucide-react";
import { Card } from "../../components/Card";
import { PageHeader } from "../../components/PageHeader";
import { Stat } from "../../components/Stat";
import { StatusBadge } from "../../components/StatusBadge";
import { Tile } from "../../components/Tile";
import "./MasiaPage.css";

export function MasiaPage() {
  return (
    <div className="cm-masia-page">
      <PageHeader
        eyebrow="Masia"
        title="Tot està al seu lloc."
        description="Una visió tranquil·la de Cal Menut: estat general, energia, accessos, clima i manteniment."
      />

      <section className="cm-hero-card">
        <div>
          <StatusBadge tone="success">Tot correcte</StatusBadge>
          <h2>La masia funciona amb normalitat.</h2>
          <p>No hi ha incidències actives ni alertes de manteniment pendents.</p>
        </div>
        <div className="cm-hero-symbol">
          <Home size={40} strokeWidth={1.6} />
        </div>
      </section>

      <section className="cm-stat-grid">
        <Card>
          <Stat label="Consum actual" value="3,2 kW" detail="Simulat · Energia" />
        </Card>
        <Card>
          <Stat label="Caldera" value="Activa" detail="Simulat · GreenHeiss" />
        </Card>
        <Card>
          <Stat label="Accessos" value="Tancats" detail="Porta i accés principal" />
        </Card>
      </section>

      <section className="cm-tile-grid">
        <Tile
          icon={Trees}
          title="Finca"
          description="Zones exteriors, camins, vegetació i estat general del terreny."
          status="Estable"
          tone="success"
        />
        <Tile
          icon={Zap}
          title="Energia"
          description="Consum, producció, acumulació i evolució energètica."
          status="3,2 kW"
          tone="info"
        />
        <Tile
          icon={Flame}
          title="Climatització"
          description="Caldera de pellets, circuits, radiadors i temperatura interior."
          status="Funcionant"
          tone="success"
        />
        <Tile
          icon={DoorClosed}
          title="Accessos"
          description="Portes, videoporter, obertures i estat dels accessos."
          status="Tancat"
          tone="success"
        />
        <Tile
          icon={Camera}
          title="Seguretat"
          description="Càmeres, deteccions, gravacions i incidències."
          status="Sense incidències"
          tone="success"
        />
        <Tile
          icon={Lightbulb}
          title="Il·luminació"
          description="Escenes, zones, horaris i automatitzacions."
          status="Preparat"
          tone="neutral"
        />
        <Tile
          icon={Gauge}
          title="Aigua"
          description="Pressió, dipòsits, reg i possibles consums anòmals."
          status="Pendent"
          tone="neutral"
        />
        <Tile
          icon={Wrench}
          title="Manteniment"
          description="Tasques, revisions, manuals i historial d'intervencions."
          status="0 pendents"
          tone="success"
        />
      </section>
    </div>
  );
}
