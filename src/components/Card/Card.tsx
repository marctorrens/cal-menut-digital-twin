import { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
};

export function Card({ children, title, subtitle, className = "" }: CardProps) {
  return (
    <section className={`cm-card ${className}`}>
      {(title || subtitle) && (
        <header className="cm-card-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </header>
      )}
      <div className="cm-card-content">{children}</div>
    </section>
  );
}
