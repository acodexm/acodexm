import React, { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';
function useSticky() {
  const [sticky, setSticky] = useState(false);
  const prevY = useRef(0);
  const element = useRef(null);

  const handleScroll = () => {
    // @ts-ignore
    const elemY = Math.floor(element.current.getBoundingClientRect().bottom || 0);
    const Y = Math.floor(window.scrollY);
    if (Y < prevY.current && Y > elemY) {
      setSticky(true);
    } else setSticky(false);
    prevY.current = Y;
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 100, { leading: true }));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [element]);

  return { sticky, element };
}

export default useSticky;
