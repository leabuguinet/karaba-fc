import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname === '/'){
            return
        } else {
            window.scrollTo(0, window.innerHeight);
        }

  }, [pathname]);

  return null;
}