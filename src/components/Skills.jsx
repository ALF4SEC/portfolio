const SKILL_GROUPS = [
  {
    title: 'Lenguajes',
    items: ['Java', 'C / C++', 'C#', 'Bash', 'JavaScript', 'TypeScript', 'SQL', 'MongoDB'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'React Native', 'Node.js', 'Vue.js', 'Arduino IDE', 'ASP.NET Core'],
  },
  {
    title: 'Herramientas y plataformas',
    items: ['GitHub', 'GitLab', 'Docker', 'Linux', 'Kali Linux', 'Firebase', 'SQLite'],
  },
  {
    title: 'Habilidades personales',
    items: ['Resolución de problemas', 'Comunicación efectiva', 'Trabajo en equipo', 'Adaptabilidad'],
    soft: true,
  },
];

export default function Skills() {
  return (
    <section className="section container" id="habilidades" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">
        <span className="section-num">03.</span> Habilidades
      </h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map(({ title, items, soft }) => (
          <div className="card skill-group" key={title}>
            <h3>{title}</h3>
            <ul className={`chips${soft ? ' chips-alt' : ''}`}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
