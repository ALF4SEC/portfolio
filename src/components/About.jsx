const FACTS = [
  {
    label: 'Formación',
    value: 'Grado en Ingeniería Informática, Universidad de Salamanca',
    note: '2022–2027',
  },
  { label: 'Enfoque', value: 'Backend, administración de sistemas y ciberseguridad' },
  { label: 'Prácticas', value: 'ESALAB — Expert System and Application Laboratory', note: '2025' },
  { label: 'Idiomas', value: 'Español nativo, Inglés B2, Francés B1' },
];

export default function About() {
  return (
    <section className="section container" id="sobre-mi" aria-labelledby="about-title">
      <h2 className="section-title" id="about-title">
        <span className="section-num">01.</span> Sobre mí
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Mi formación en Ingeniería Informática me ha dado una base sólida en{' '}
            <strong>sistemas distribuidos</strong>, <strong>arquitectura de computadores</strong> y{' '}
            <strong>redes</strong>: entender qué ocurre por debajo de una aplicación es lo que me
            permite diseñar servicios robustos y razonar sobre su seguridad.
          </p>
          <p>
            En la práctica he trabajado en aplicaciones conectadas a hardware, en el diseño y
            desarrollo de APIs y en la implementación de sistemas tolerantes a fallos. Me interesa
            especialmente la parte del software que no se ve, pero que tiene que funcionar siempre.
          </p>
        </div>
        <dl className="facts card">
          {FACTS.map(({ label, value, note }) => (
            <div className="fact" key={label}>
              <dt>{label}</dt>
              <dd>
                {value}
                {note && <span className="muted"> ({note})</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
