import { useEffect, useRef } from 'react';

// Ventana modal con el vídeo y la explicación de un proyecto.
// Usa <dialog> nativo: trae el foco atrapado, Esc para cerrar y el fondo inerte.
export default function ProjectModal({ title, detail, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Cerrar al pulsar sobre el fondo (fuera de la caja del diálogo)
  function handleClick(event) {
    if (event.target === dialogRef.current) onClose();
  }

  const titleId = `modal-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="project-modal-inner">
        <header className="project-modal-header">
          <h3 id={titleId}>{title}</h3>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        {open && (
          <iframe
            className="project-modal-video"
            src={`https://www.youtube-nocookie.com/embed/${detail.youtubeId}?rel=0`}
            title={`Vídeo de ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        <div className="project-modal-body">
          {detail.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}

          {detail.highlights && (
            <ul className="project-modal-list">
              {detail.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {detail.note && (
            <p className="project-modal-note" role="note">
              {detail.note}
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
