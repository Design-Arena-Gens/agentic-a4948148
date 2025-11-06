const highlights = [
  {
    title: "Instant Setup",
    description:
      "Start coding immediately with a modern stack that targets Vercel deployments."
  },
  {
    title: "Typed & Strict",
    description:
      "TypeScript, strict linting, and sensible defaults keep the project robust."
  },
  {
    title: "Ready To Extend",
    description:
      "Add routes, components, or APIs and deploy with a single command."
  }
];

export default function Highlights() {
  return (
    <section className="card highlights">
      <h2 className="section-title">Features at a Glance</h2>
      <ul className="features">
        {highlights.map((item) => (
          <li key={item.title} className="feature">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
