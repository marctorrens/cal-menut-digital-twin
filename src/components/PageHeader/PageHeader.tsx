import "./PageHeader.css";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="cm-page-header">
      {eyebrow && <p>{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <span>{description}</span>}
    </header>
  );
}
