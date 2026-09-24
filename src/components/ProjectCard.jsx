import { useState } from 'react';
import ProjectModal from './ProjectModal.jsx';

export default function ProjectCard({ title, description, tags, url, detail }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="card project">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags" aria-label="Tecnologías">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {detail ? (
        <>
          <button
            type="button"
            className="project-link"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            Ver vídeo y detalles <span aria-hidden="true">→</span>
          </button>
          <ProjectModal
            title={title}
            detail={detail}
            open={open}
            onClose={() => setOpen(false)}
          />
        </>
      ) : (
        <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
          Ver en GitHub <span aria-hidden="true">→</span>
        </a>
      )}
    </li>
  );
}
