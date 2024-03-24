export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat count={stats.numberOfWords} label="Words" />
      <Stat count={stats.numberOfCharacters} label="Characters" />
      <Stat count={stats.instagramCharactersLeft} label="Instagram" />
      <Stat count={stats.facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ label, count }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${count < 0 ? "stat__number--limit" : ""}`}
      >
        {count}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
