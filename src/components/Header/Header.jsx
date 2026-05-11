import './Header.css';

const Header = ({ mobileNavOpen = false, onMobileMenuToggle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          {typeof onMobileMenuToggle === 'function' && (
            <button
              type="button"
              className="header-menu-btn"
              onClick={onMobileMenuToggle}
              aria-expanded={mobileNavOpen}
              aria-controls="site-sidebar"
              aria-label={
                mobileNavOpen
                  ? 'Cerrar menú de contenidos del manual'
                  : 'Abrir menú de contenidos del manual'
              }
            >
              <span className="header-menu-icon" aria-hidden="true">
                {mobileNavOpen ? '✕' : '☰'}
              </span>
            </button>
          )}
          <div className="logo">
            <span className="logo-icon">📚</span>
            <h1 className="logo-text">ATENCIÓN AL CLIENTE Y CALIDAD DEL SERVICIO
COMM002PO
</h1>
          </div>
        </div>
        <div className="header-right">
          
        </div>
      </div>
    </header>
  );
};

export default Header;