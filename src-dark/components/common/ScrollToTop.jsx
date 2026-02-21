import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll page to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // keep instant for page change
    });

    // 🔥 VERY IMPORTANT: refresh AOS on route change
    AOS.refreshHard();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
