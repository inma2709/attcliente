import '../../pages/Tema01/Tema01.css';

const TemaTemplate = ({ numero, titulo, subtitulo, icon, topics }) => {
  return (
    <div className="tema-page">
      <div className="tema-header">
        <div className="tema-number">Tema {numero}</div>
        <h1 className="tema-title">{titulo}</h1>
        <p className="tema-subtitle">{subtitulo}</p>
      </div>

      <div className="tema-content">
        <div className="content-placeholder">
          <div className="placeholder-icon">{icon}</div>
          <h3>Contenido en desarrollo</h3>
          <p>
            Este tema desarrollará los conceptos fundamentales y técnicas prácticas 
            relacionadas con {titulo.toLowerCase()}.
          </p>
          <div className="topics-preview">
            <h4>Temas a desarrollar:</h4>
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemaTemplate;