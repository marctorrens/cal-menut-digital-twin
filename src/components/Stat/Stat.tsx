import "./Stat.css";

type StatProps = {
  label: string;
  value: string;
  detail?: string;
};

export function Stat({ label, value, detail }: StatProps) {
  return (
    <div className="cm-stat">
      <span>{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </div>
  );
}
