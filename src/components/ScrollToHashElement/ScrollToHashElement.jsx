import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to section id or top of page if no hash
    if (hash) {
      // Remove the '#' character
      const elementId = hash.replace("#", ""); 
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
