import React, { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';
function useSticky() {
  const [sticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    // @ts-ignore
    window.scrollY > element.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 20, { leading: true }));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [element]);

  return { sticky, element };
}

export default useSticky;
