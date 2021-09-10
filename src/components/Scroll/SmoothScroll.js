import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScroll = ({ children }) => {
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <ScrollBar ref={ref} damping={0.15}>
      {children}
    </ScrollBar>
  );
};

export default SmoothScroll;
