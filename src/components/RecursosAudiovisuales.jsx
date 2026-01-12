import "./RecursosAudiovisuales.css";

const RecursosAudiovisuales = () => {
  const VIDEO_ID_1 = "5xGoNUkHpZQ";
  const VIDEO_ID_2 = "xOruWLZmVYM";
  const VIDEO_ID = "Towv9Cibny4";

  return (
    <section className="container ra">
      <header className="card ra__hero">
        <h2 className="ra__title">Recursos audiovisuales</h2>

        <p className="ra__lead">
          En cada capítulo hemos seleccionado cuidadosamente vídeos cortos y prácticos que complementan la teoría con
          ejemplos reales y aplicaciones profesionales. Estos recursos están pensados para:
        </p>

        <ul className="ra__list">
          <li>Enriquecer la comprensión de los conceptos teóricos.</li>
          <li>Proporcionar ejemplos aplicables al día a día.</li>
          <li>Fomentar el análisis crítico y la discusión en clase.</li>
        </ul>

        <p className="muted">
          La intención es que estos vídeos te ayuden a consolidar tus conocimientos y a prepararte para situaciones
          reales de atención al cliente.
        </p>

        <div className="divider" />

        {/* ✅ Nueva visión pedagógica */}
        <div className="callout callout--tip">
          <div className="callout-title">🎥 Material audiovisual sugerido</div>
          <p>
          
            Han sido <strong>cuidadosamente seleccionados</strong> por su rigor, claridad y valor para enriquecer la
            clase magistral con <strong>puntos de vista complementarios</strong>.
          </p>
          <p>
            La idea es contrastar enfoques, escuchar voces expertas y conectar la teoría con situaciones reales.
            Trabajaremos el contenido desde un enfoque activo: <strong>aprender haciendo</strong>, reflexionando y
            debatiendo en grupo.
          </p>
        </div>

        <div className="divider" />

        <div className="ra__callout">
          <div className="ra__calloutTitle">🧭 Sugerencia de método de trabajo</div>
          <ul className="ra__list">
            <li>
              <strong>Antes:</strong> lee las preguntas guía para activar tu pensamiento crítico.
            </li>
            <li>
              <strong>Durante:</strong> escucha con atención y toma notas breves de ideas clave o conductas aplicables.
            </li>
            <li>
              <strong>Después (debate):</strong> conecta lo visto con un caso real y propone alguna mejora posible.
            </li>
          </ul>
        </div>
      </header>

      <div className="divider" />

     


      {/* ===================== VÍDEO 2 ===================== */}
      <article className="card ra__card">
        <div className="ra__badges">
          <span className="badge">Nivel: Inicial</span>
          <span className="badge">Encaja en: Tema 1 (Introducción)</span>
          <span className="badge">Objetivo: comprender el concepto</span>
        </div>

        <div className="divider" />

        <div className="ra__block">
          <h3 className="ra__h3">🎥 ¿Qué es la atención al cliente y por qué es clave para una empresa?</h3>

          <p className="ra__meta">
            Vídeo introductorio para comprender el papel de la atención al cliente como eje central de la relación entre
            empresa y mercado.
          </p>

          <div className="ra__panel">
            <div className="ra__panelTitle">📌 Qué aporta este vídeo</div>
            <ul className="ra__list">
              <li>
                Definición clara de <strong>qué es la atención al cliente</strong>.
              </li>
              <li>
                Relación directa entre atención al cliente y <strong>éxito empresarial</strong>.
              </li>
              <li>Importancia del trato, la comunicación y la resolución de necesidades.</li>
              <li>
                Visión del profesional de atención al cliente como <strong>figura clave</strong> de la organización.
              </li>
            </ul>
          </div>

          <div className="ra__panel ra__panel--soft">
            <div className="ra__panelTitle">🧠 Antes de ver (preguntas guía)</div>
            <ol className="ra__olist">
              <li>¿Cómo definirías tú la atención al cliente antes de ver este vídeo?</li>
              <li>¿Crees que la atención al cliente influye realmente en el éxito de una empresa?</li>
              <li>¿Qué papel crees que desempeña la persona que atiende al cliente?</li>
            </ol>
          </div>

          <div className="embed ra__embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="Qué es la atención al cliente"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="ra__link">
            Si no carga el vídeo:{" "}
            <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noreferrer">
              Abrir en YouTube
            </a>
          </p>

          <div className="ra__panel">
            <div className="ra__panelTitle">💬 Tras el vídeo</div>
            <ul className="ra__list">
              <li>Reformula con tus palabras qué es la atención al cliente.</li>
              <li>Explica por qué este trabajo es clave para la supervivencia de una empresa.</li>
              <li>
                Completa la frase: <em>“La atención al cliente no es solo…”</em>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* (Opcional) VIDEO_ID_2 queda disponible si lo reutilizas en otro momento */}
    </section>
  );
};

export default RecursosAudiovisuales;
