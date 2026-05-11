import { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.css';

const MOBILE_NAV_MQ = '(max-width: 768px)';

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((open) => {
      if (!open) {
        setSidebarCollapsed(false);
      }
      return !open;
    });
  }, []);

  const toggleSidebar = useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia(MOBILE_NAV_MQ).matches) {
      setMobileNavOpen((open) => (open ? false : open));
      return;
    }
    setSidebarCollapsed((c) => !c);
  }, []);

  // Cerrar drawer al pasar a escritorio; sincronizar al cargar
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const onChange = () => {
      if (!mq.matches) {
        setMobileNavOpen(false);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Evitar scroll del fondo con el menú móvil abierto
  useEffect(() => {
    if (!mobileNavOpen) return;
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    if (!mq.matches) return undefined;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  // Escape cierra el menú móvil
  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileNavOpen]);

  // Atajo Ctrl+B: drawer en móvil, colapsar en escritorio
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        if (window.matchMedia(MOBILE_NAV_MQ).matches) {
          setMobileNavOpen((open) => {
            if (!open) {
              setSidebarCollapsed(false);
            }
            return !open;
          });
        } else {
          setSidebarCollapsed((c) => !c);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Header
        mobileNavOpen={mobileNavOpen}
        onMobileMenuToggle={toggleMobileNav}
      />
      <div className="layout-content">
        {mobileNavOpen && (
          <button
            type="button"
            className="layout-nav-overlay"
            aria-label="Cerrar menú de contenidos"
            onClick={closeMobileNav}
          />
        )}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
          mobileNavOpen={mobileNavOpen}
          onCloseMobile={closeMobileNav}
        />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;