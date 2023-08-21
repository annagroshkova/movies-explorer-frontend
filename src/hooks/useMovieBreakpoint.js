import { useEffect, useState } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../utils/constants';

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

  if (width < BREAKPOINT_MOBILE) return 1;
  if (width < BREAKPOINT_TABLET) return 2;
  return 3;
}
