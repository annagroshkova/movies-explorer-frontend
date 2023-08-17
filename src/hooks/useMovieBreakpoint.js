import { useEffect, useState } from 'react';

function getWidth() {
  return window.innerWidth;
}

/**
 *
 * @returns {number} numberOfMoviesInTheRow
 */
export default function useMovieBreakpoint() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width < 690) return 1;
  if (width < 1024) return 2;
  return 3;
}
