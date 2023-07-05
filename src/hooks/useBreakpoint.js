import {useEffect, useState} from "react"


function getWindowDimensions() {
  const width = window.innerWidth;
  return width
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = breakpoint > 768;
  return isDesktop;
}
