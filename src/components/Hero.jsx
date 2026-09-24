export default function Hero() {
  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <p className="kicker">Ingeniero Informático | Backend, Administración de Sistemas &amp; Ciberseguridad</p>
      <h1 id="hero-title">Alfonso Crego Calvo</h1>
      <p className="hero-lead">
        Estudiante de 4º de Ingeniería Informática en la Universidad de Salamanca, interesado en el
        desarrollo backend y la ciberseguridad. Busco aplicar mis conocimientos en entornos
        profesionales exigentes, donde la fiabilidad y la seguridad de los sistemas importen de
        verdad.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#proyectos">
          Ver proyectos
        </a>
        <a className="btn btn-ghost" href="#contacto">
          Contactar
        </a>
      </div>

      <div className="terminal" aria-hidden="true">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <pre>
          <code>
            <span className="t-prompt">$</span> whoami{'\n'}
            alfonso.crego{'\n'}
            <span className="t-prompt">$</span> cat focus.txt{'\n'}
            backend · sistemas distribuidos · ciberseguridad{'\n'}
            <span className="t-prompt">$</span> <span className="t-cursor">▍</span>
          </code>
        </pre>
      </div>
    </section>
  );
}
