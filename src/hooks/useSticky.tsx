import React, { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';
function useSticky() {
  const [sticky, setSticky] = useState(false);
  const element = useRef(null);


  const handleScroll = () => {
    // @ts-ignore
    window.scrollY > element.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
  };

  // This function handle the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut:number;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = 0;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 20, { leading: true }));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { sticky, element };
}

export default useSticky;
