import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToHashElement from './components/ScrollToHashElement/ScrollToHashElement';
import FloatingActions from './components/FloatingActions/FloatingActions';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after window load + small delay for smoothness
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        // Wait for the CSS transition (0.8s) before removing from DOM
        setTimeout(() => {
          setIsPreloaderVisible(false);
        }, 800);
      }, 1500); // 1.5s minimum show time for premium feel
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {isPreloaderVisible && <Preloader fadeOut={!loading} />}
      <ScrollToHashElement />
      <Navbar />
      <main className="flex-shrink-0">
        <AppRoutes />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;
