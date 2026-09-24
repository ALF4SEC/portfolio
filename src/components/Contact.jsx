const CONTACTS = [
  {
    label: 'Email',
    value: 'alfonso.crecal@gmail.com',
    href: 'mailto:alfonso.cregcalv@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/ALF4SEC',
    href: 'https://github.com/ALF4SEC',
    external: true,
  },
  {
    // TODO: sustituir por la URL real del perfil de LinkedIn
    label: 'LinkedIn',
    value: 'linkedin.com/alfonso-crego-calvo/',
    href: 'https://www.linkedin.com/in/alfonso-crego-calvo-315860293/',
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="section container" id="contacto" aria-labelledby="contact-title">
      <h2 className="section-title" id="contact-title">
        <span className="section-num">06.</span> Contacto
      </h2>
      <p className="contact-intro">
        ¿Tienes una oportunidad, un proyecto o simplemente quieres hablar de backend o seguridad?
        Escríbeme.
      </p>
      <ul className="contact-list">
        {CONTACTS.map(({ label, value, href, external }) => (
          <li key={label}>
            <a
              className="card contact-item"
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
