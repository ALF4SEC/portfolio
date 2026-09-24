import ProjectCard from './ProjectCard.jsx';

const GITHUB = 'https://github.com/ALF4SEC';

const PROJECTS = [
  {
    title: 'TimePill',
    description:
      'Dispensador inteligente de medicamentos. App en React Native + TypeScript con Gluestack UI conectada a un dispositivo basado en Raspberry Pi 5, con pantalla de arranque animada pensada para usuarios mayores.',
    tags: ['React Native', 'TypeScript', 'Raspberry Pi', 'Arduino'],
    detail: {
      youtubeId: 'nmv0Dc4_sH0',
      paragraphs: [
        'TimePill es un dispensador conectado para la gestión remota de medicación. Nace de una necesidad real: muchas personas mayores toman varios medicamentos al día y es fácil olvidar una toma o equivocarse de dosis.',
        'El sistema combina un dispositivo físico basado en Raspberry Pi 5, que almacena y dispensa las pastillas a la hora programada, con una app móvil desde la que un familiar o cuidador puede configurar las tomas y seguir el cumplimiento a distancia.',
      ],
      highlights: [
        'App multiplataforma en React Native + TypeScript con Gluestack UI.',
        'Interfaz pensada para usuarios mayores: textos grandes, alto contraste y pantalla de arranque animada.',
        'Comunicación entre la app y el dispensador para programar y registrar las tomas de forma remota.',
      ],
      note: 'El código fuente no se muestra públicamente porque TimePill es mi Trabajo de Fin de Grado (TFG).',
    },
  },
  {
    title: 'Implementación PBFT',
    description:
      'Implementación del algoritmo de consenso Practical Byzantine Fault Tolerance en Java, con nodos comunicados mediante servicios JAX-RS.',
    tags: ['Java', 'JAX-RS', 'Sistemas distribuidos'],
    url: 'https://github.com/ALF4SEC/PBFT',
  },
  {
    title: 'API Blockchain con ASP.NET Core',
    description:
      'API en C# con documentación Swagger que implementa una cadena de bloques.',
    tags: ['C#', 'ASP.NET Core', 'Swagger'],
    url: 'https://github.com/ALF4SEC/Blockchain-API',
  },
  {
    title: 'APIs RESTful',
    description:
      'APIs para aplicaciones web y móviles con persistencia en SQLite y despliegue con Firebase.',
    tags: ['REST', 'SQLite', 'Firebase'],
    url: 'https://github.com/ALF4SEC/Practica-Final-Vuejs-Gestor-de-Contactos-y-Chat',
  },
];

export default function Projects() {
  return (
    <section className="section container" id="proyectos" aria-labelledby="projects-title">
      <h2 className="section-title" id="projects-title">
        <span className="section-num">02.</span> Proyectos
      </h2>
      <p className="projects-intro">
        Aquí se muestran solo algunos de mis proyectos. El resto están disponibles en mi{' '}
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <ul className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
}
