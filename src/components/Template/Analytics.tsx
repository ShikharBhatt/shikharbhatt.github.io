import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const isProduction = import.meta.env.PROD;
const gaId: string | undefined = import.meta.env.VITE_GA_TRACKING_ID;

if (isProduction && gaId) {
  ReactGA.initialize(gaId);
}

const Analytics: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isProduction && gaId) {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;

