import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  {
    id: 1,
    title: 'Inicio',
    path: '/',
    icon: '🏠'
  },
  {
    id: 2,
    title: 'La organización empresarial y el proceso de información',
    path: '/tema01',
    icon: '🏢'
  },
  {
    id: 3,
    title: 'Fundamentos y flujos de la comunicación empresarial',
    path: '/tema02',
    icon: '💬'
  },
  {
    id: 4,
    title: 'Psicología y tipología del cliente',
    path: '/tema03',
    icon: '🧠'
  },
  {
    id: 5,
    title: 'Calidad y oportunidad en el servicio al cliente',
    path: '/tema04',
    icon: '⭐'
  },
   {
    id: 10,
    title: 'Experiencia de cliente memorable',
    path: '/tema11',
    icon: '💻'
  },
  
  {
    id: 6,
    title: 'Comunicación presencial y habilidades sociales',
    path: '/tema05',
    icon: '👥'
  },
  {
    id: 7,
    title: 'Protocolo empresarial e imagen personal',
    path: '/tema06',
    icon: '👔'
  },
  {
    id: 8,
    title: 'Comunicación telefónica y gestión de centralitas',
    path: '/tema07',
    icon: '📞'
  },
  {
    id: 9,
    title: 'Comunicación escrita y redacción de documentos',
    path: '/tema08',
    icon: '📝'
  },
  {
    id: 10,
    title: 'Uso de nuevas tecnologías y canales telemáticos',
    path: '/tema09',
    icon: '💻'
  },
  
  {
    id: 13,
    title: 'Detección de necesidades y evaluación de la satisfacción',
    path: '/tema12',
    icon: '📊'
  },
  {
    id: 14,
    title: 'Atención de quejas, reclamaciones y gestión de conflictos',
    path: '/tema13',
    icon: '⚖️'
  },
  {
    id: 15,
    title: 'Fidelización del cliente y servicio posventa',
    path: '/tema14',
    icon: '❤️'
  },
  {
    id: 16,
    title: 'Protección de datos, seguridad y confidencialidad',
    path: '/tema15',
    icon: '🔒'
  }
];

const Sidebar = ({ isCollapsed, onToggle }) => {
  const location = useLocation();

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <h2 className="sidebar-title">
              {!isCollapsed && 'Contenido del Manual'}
            </h2>
            <button 
              className="sidebar-toggle"
              onClick={onToggle}
              aria-label={isCollapsed ? 'Mostrar barra lateral' : 'Ocultar barra lateral'}
              title={isCollapsed ? 'Mostrar barra lateral (Ctrl+B)' : 'Ocultar barra lateral (Ctrl+B)'}
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