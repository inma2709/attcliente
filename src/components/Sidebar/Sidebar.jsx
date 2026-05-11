import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  { id: 1, title: 'Inicio', path: '/', icon: '🏠' },

  // 📚 SECCIÓN 1: FUNDAMENTOS DE LA ATENCIÓN AL CLIENTE
  { id: 2, title: 'Errores críticos en atención al cliente y cómo evitarlos', path: '/tema00', icon: '⚠️' },
  { id: 3, title: 'Fundamentos de la comunicación en atención al cliente', path: '/tema02', icon: '💬' },
  { id: 4, title: 'La organización empresarial y el proceso de información', path: '/tema01', icon: '🏢' },
  { id: 5, title: 'Calidad y oportunidad en el servicio al cliente', path: '/tema04', icon: '⭐' },
  { id: 6, title: 'Ética, Valores y Atención Inclusiva', path: '/tema16', icon: '🤝' },

  // 📚 SECCIÓN 2: HABILIDADES Y DESARROLLO DEL PROFESIONAL
  { id: 7, title: 'Gestión emocional del profesional', path: '/tema10', icon: '🧘‍♀️' },
  { id: 8, title: 'Protocolo empresarial e imagen personal', path: '/tema06', icon: '👔' },
  { id: 9, title: 'Comunicación presencial y habilidades sociales', path: '/tema05', icon: '👥' },

  // 📚 SECCIÓN 3: CONOCIMIENTO DEL CLIENTE
  { id: 10, title: 'Psicología y tipología del cliente', path: '/tema03', icon: '🧠' },
  { id: 11, title: 'Detección de necesidades y evaluación de la satisfacción', path: '/tema12', icon: '📊' },
  { id: 12, title: 'El viaje del cliente (Customer Journey)', path: '/tema18', icon: '🗺️' },
  { id: 13, title: 'Experiencia de cliente memorable', path: '/tema11', icon: '✨' },
  { id: 14, title: 'Técnicas de negociación con el cliente', path: '/tema19', icon: '🤝' },
  { id: 15, title: 'Técnicas de venta directa', path: '/tema20', icon: '🛒' },

  // 📚 SECCIÓN 4: CANALES DE COMUNICACIÓN
  { id: 16, title: 'Comunicación telefónica y gestión de centralitas', path: '/tema07', icon: '📞' },
  { id: 17, title: 'Comunicación escrita y redacción de documentos', path: '/tema08', icon: '📝' },
  { id: 18, title: 'Uso de nuevas tecnologías y canales telemáticos', path: '/tema09', icon: '💻' },
  { id: 19, title: 'Protección de datos, seguridad y confidencialidad', path: '/tema15', icon: '🔒' },

  // 📚 SECCIÓN 5: GESTIÓN DE CONFLICTOS Y FIDELIZACIÓN
  { id: 20, title: 'Atención de quejas, reclamaciones y gestión de conflictos', path: '/tema13', icon: '⚖️' },
  { id: 21, title: 'Fidelización del cliente y servicio posventa', path: '/tema14', icon: '❤️' },

  // 📚 SECCIÓN 6: ESPECIALIZACIÓN
  { id: 22, title: 'Inteligencia Artificial en atención al cliente', path: '/tema17', icon: '🤖' },

  // 🎭 SECCIÓN 7: TALLERES PRÁCTICOS
  { id: 23, title: 'Taller Práctico: La Humanización de la Venta', path: '/tema21', icon: '🎭' },
];


const Sidebar = ({ isCollapsed, onToggle, mobileNavOpen = false, onCloseMobile }) => {
  const location = useLocation();

  const toggleAriaLabel = mobileNavOpen
    ? 'Cerrar menú de contenidos'
    : isCollapsed
      ? 'Mostrar barra lateral'
      : 'Ocultar barra lateral';

  const handleNavClick = () => {
    onCloseMobile?.();
  };

  return (
    <aside
      id="site-sidebar"
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${mobileNavOpen ? 'open' : ''}`}
    >
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <h2 className="sidebar-title">
              {!isCollapsed && 'Contenido del Manual'}
            </h2>
            <button 
              className="sidebar-toggle"
              onClick={onToggle}
              aria-label={toggleAriaLabel}
              title={
                mobileNavOpen
                  ? 'Cerrar menú'
                  : isCollapsed
                    ? 'Mostrar barra lateral (Ctrl+B)'
                    : 'Ocultar barra lateral (Ctrl+B)'
              }
            >
              <span className="toggle-icon">
                {isCollapsed ? '▶' : '◀'}
              </span>
            </button>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  title={isCollapsed ? item.title : ''}
                  onClick={handleNavClick}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!isCollapsed && <span className="nav-text">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;