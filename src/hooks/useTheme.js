import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const LIGHT_QUERY = '(prefers-color-scheme: light)';

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function systemTheme() {
  return window.matchMedia(LIGHT_QUERY).matches ? 'light' : 'dark';
}

/**
 * Tema claro/oscuro.
 * - Sin preferencia guardada: sigue a prefers-color-scheme (y sus cambios en vivo).
 * - toggleTheme(): fuerza el tema contrario y lo guarda en localStorage.
 */
export function useTheme() {
  const [forced, setForced] = useState(readStored);
  const [system, setSystem] = useState(systemTheme);

  useEffect(() => {
    const media = window.matchMedia(LIGHT_QUERY);
    const onChange = (event) => setSystem(event.matches ? 'light' : 'dark');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const theme = forced ?? system;

  useEffect(() => {
    const root = document.documentElement;
    if (forced) root.setAttribute('data-theme', forced);
    else root.removeAttribute('data-theme');

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0d1013' : '#f6f7f8');
  }, [forced, theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setForced(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* almacenamiento no disponible: el tema solo dura esta visita */
    }
  }, [theme]);

  return { theme, toggleTheme };
}
