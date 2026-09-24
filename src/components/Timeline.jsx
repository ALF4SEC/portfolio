const ENTRIES = [
  {
    year: '2026',
    title: 'Grado en Ingeniería Informática',
    org: 'Universidad de Salamanca',
    detail: '4º año en curso.',
  },
  {
    year: '2025',
    title: 'Prácticas externas',
    org: 'ESALAB — Expert System and Application Laboratory',
  },
  {
    year: '2022',
    title: 'Bachillerato Tecnológico',
    org: 'I.E.S. Martínez Uribarri',
    detail: 'Premio a la Excelencia académica del Bachillerato.',
  },
];

export default function Timeline() {
  return (
    <section className="section container" id="trayectoria" aria-labelledby="timeline-title">
      <h2 className="section-title" id="timeline-title">
        <span className="section-num">04.</span> Trayectoria y educación
      </h2>
      <ol className="timeline">
        {ENTRIES.map(({ year, title, org, detail }) => (
          <li className="timeline-item" key={`${year}-${title}`}>
            <span className="timeline-year">{year}</span>
            <div className="timeline-body">
              <h3>{title}</h3>
              <p className="timeline-org">{org}</p>
              {detail && <p>{detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
