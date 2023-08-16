import { useEffect, useState } from 'react';

/**
 * @typedef {import("../types").Breakpoint} Breakpoint
 */

function getWidth() {
  return window.innerWidth;
}

/**
 *
 * @returns {Breakpoint} breakpoint
 */
export default function useBreakpoint() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width >= 1280) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile'
}
