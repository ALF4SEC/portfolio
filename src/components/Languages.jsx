const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2', certificate: 'Test of English OTE' },
  { name: 'Francés', level: 'B2', certificate: 'DELF-DALF' },
];

export default function Languages() {
  return (
    <section className="section container" id="idiomas" aria-labelledby="languages-title">
      <h2 className="section-title" id="languages-title">
        <span className="section-num">05.</span> Idiomas
      </h2>
      <ul className="languages-grid">
        {LANGUAGES.map(({ name, level, certificate }) => (
          <li className="card language" key={name}>
            <span className="language-level">{level}</span>
            <h3>{name}</h3>
            {certificate && <p className="muted">{certificate}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
