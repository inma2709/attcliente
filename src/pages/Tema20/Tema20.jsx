import TopicLayout from '../../components/TopicLayout';

const image = {
  src: '/ventaDirecta.png',
  alt: 'Técnicas de venta directa',
  caption: 'La venta directa como competencia estratégica en la relación con el cliente',
};

export default function Tema20() {
  return (
    <TopicLayout
      numero="20"
      title="Técnicas de Venta Directa"
      intro="La venta directa es el arte de influir en la decisión de compra del cliente a través de la interacción personal, aplicando técnicas avanzadas de persuasión, argumentación y cierre. En este tema, aprenderás los fundamentos, fases, herramientas y estrategias de la venta directa profesional, con un enfoque ético y orientado a la excelencia en la experiencia del cliente."
      image={image}
    >
      {/* ===================== SECCIÓN 1 ===================== */}
      <section className="topic-section">
        <h2>1. ¿Qué es la Venta Directa? Definición, Contextos y Relevancia</h2>
        <p>
          La <strong>venta directa</strong> es el proceso de interacción personal entre un profesional y un cliente potencial, con el objetivo de identificar necesidades, presentar soluciones y lograr un acuerdo comercial. Se diferencia de la venta pasiva o asistida por canales digitales en la intensidad de la relación, la personalización y la capacidad de adaptación en tiempo real.
        </p>
        <details className="topic-accordion">
          <summary>Contextos de aplicación</summary>
          <div className="topic-details">
            <ul>
              <li>Venta presencial en comercios, ferias, eventos y puntos de venta físicos</li>
              <li>Venta telefónica (telemarketing, inside sales)</li>
              <li>Venta puerta a puerta (B2C y B2B)</li>
              <li>Venta consultiva en servicios profesionales</li>
              <li>Venta en retail premium y lujo</li>
            </ul>
          </div>
        </details>
        <div className="callout callout--tip">
          <strong>💡 Clave:</strong> La venta directa es la disciplina donde confluyen la psicología, la comunicación y la estrategia comercial. El vendedor profesional es un consultor de soluciones, no un mero "colocador" de productos.
        </div>
      </section>

      {/* ===================== SECCIÓN 2 ===================== */}
      <section className="topic-section">
        <h2>2. El Perfil del Vendedor Profesional</h2>
        <p>
          El éxito en la venta directa depende tanto de las habilidades técnicas como de las competencias personales. El vendedor universitario domina la argumentación, la gestión emocional y la ética profesional.
        </p>
        <h3>2.1 Competencias clave</h3>
        <ul>
          <li>Escucha activa y empatía</li>
          <li>Capacidad de análisis y diagnóstico</li>
          <li>Comunicación persuasiva (verbal y no verbal)</li>
          <li>Gestión de objeciones y resiliencia</li>
          <li>Orientación a resultados y perseverancia</li>
          <li>Ética y responsabilidad social</li>
        </ul>
        <h3>2.2 El ciclo emocional del vendedor</h3>
        <p>
          La venta directa implica gestionar el rechazo, la presión de objetivos y la motivación. El profesional de alto rendimiento desarrolla inteligencia emocional y autoliderazgo.
        </p>
        <div className="callout callout--info">
          <strong>📈 Dato:</strong> Según estudios de Harvard Business Review, el 80% de las ventas se cierran después del quinto contacto, pero el 44% de los vendedores abandona tras el primer "no".
        </div>
      </section>

      {/* ===================== SECCIÓN 3 ===================== */}
      <section className="topic-section">
        <h2>3. El Proceso de Venta Directa: Fases y Metodología</h2>
        <p>
          La venta directa profesional sigue un proceso estructurado en fases, que permite maximizar la conversión y la satisfacción del cliente.
        </p>
        <div className="venta-fases-grid">
          <div className="venta-fase-card fase-prospeccion">
            <div className="fase-num">1</div>
            <div className="fase-title">Prospección y calificación</div>
            <div className="fase-desc">Identificar clientes potenciales y segmentar según perfil, necesidad y potencial de compra.</div>
          </div>
          <div className="venta-fase-card fase-contacto">
            <div className="fase-num">2</div>
            <div className="fase-title">Primer contacto y apertura</div>
            <div className="fase-desc">Generar rapport, captar atención y establecer clima de confianza.</div>
          </div>
          <div className="venta-fase-card fase-sondeo">
            <div className="fase-num">3</div>
            <div className="fase-title">Sondeo de necesidades</div>
            <div className="fase-desc">Preguntar, escuchar y descubrir los verdaderos motivos de compra (modelo SPIN, método AIDA).</div>
          </div>
          <div className="venta-fase-card fase-presentacion">
            <div className="fase-num">4</div>
            <div className="fase-title">Presentación de la solución</div>
            <div className="fase-desc">Argumentar beneficios, adaptar el discurso y utilizar demostraciones o pruebas.</div>
          </div>
          <div className="venta-fase-card fase-objeciones">
            <div className="fase-num">5</div>
            <div className="fase-title">Gestión de objeciones</div>
            <div className="fase-desc">Identificar, comprender y responder a las dudas o resistencias del cliente.</div>
          </div>
          <div className="venta-fase-card fase-cierre">
            <div className="fase-num">6</div>
            <div className="fase-title">Cierre de la venta</div>
            <div className="fase-desc">Aplicar técnicas de cierre, confirmar el acuerdo y formalizar la transacción.</div>
          </div>
          <div className="venta-fase-card fase-postventa">
            <div className="fase-num">7</div>
            <div className="fase-title">Seguimiento y postventa</div>
            <div className="fase-desc">Asegurar la satisfacción, resolver incidencias y fomentar la fidelización.</div>
          </div>
        </div>
        <div className="callout callout--tip">
          <strong>💡 Consejo:</strong> El seguimiento postventa es la fase más olvidada y la que más valor genera a largo plazo. Un cliente satisfecho es el mejor prescriptor.
        </div>
      </section>

      {/* ===================== SECCIÓN 4 ===================== */}
      <section className="topic-section">
        <h2>4. Técnicas Avanzadas de Venta Directa</h2>
        <h3>4.1 Técnicas de prospección</h3>
        <ul>
          <li>Social Selling: uso de LinkedIn y redes para captar leads</li>
          <li>Referral Selling: ventas por recomendación de clientes actuales</li>
          <li>Networking profesional y eventos sectoriales</li>
        </ul>
        <h3>4.2 Técnicas de sondeo y diagnóstico</h3>
        <ul>
          <li>Modelo SPIN (Situación, Problema, Implicación, Necesidad)</li>
          <li>Preguntas abiertas vs. cerradas</li>
          <li>Escucha activa y reformulación</li>
        </ul>
        <h3>4.3 Técnicas de argumentación y persuasión</h3>
        <ul>
          <li>Método AIDA (Atención, Interés, Deseo, Acción)</li>
          <li>Storytelling y metáforas</li>
          <li>Prueba social y testimonios</li>
          <li>Demostraciones y pruebas de producto</li>
        </ul>
        <h3>4.4 Técnicas de cierre</h3>
        <ul>
          <li>Cierre alternativo: ofrecer dos opciones de compra</li>
          <li>Cierre por resumen: recapitular beneficios y acuerdo</li>
          <li>Cierre por urgencia: oferta limitada en tiempo o stock</li>
          <li>Cierre por prueba: "¿Le gustaría probarlo hoy mismo?"</li>
        </ul>
        <div className="callout callout--info">
          <strong>📚 Ejemplo real:</strong> En el sector automoción, el cierre alternativo aumenta la tasa de conversión un 18% respecto al cierre directo (Fuente: McKinsey, 2024).
        </div>
      </section>

      {/* ===================== SECCIÓN 5 ===================== */}
      <section className="topic-section">
        <h2>5. Objeciones y Resistencias: Tipos y Estrategias de Gestión</h2>
        <p>
          Las objeciones son oportunidades para profundizar en la relación y demostrar profesionalidad. El vendedor premium domina la gestión de objeciones con metodología y empatía.
        </p>
        <h3>5.1 Tipos de objeciones</h3>
        <ul>
          <li>Precio: "Es caro"</li>
          <li>Tiempo: "Ahora no me interesa"</li>
          <li>Autoridad: "Debo consultarlo"</li>
          <li>Competencia: "Me ofrecen lo mismo más barato"</li>
          <li>Duda/desconfianza: "No estoy seguro de que funcione para mí"</li>
        </ul>
        <h3>5.2 Estrategias de gestión</h3>
        <ul>
          <li>Escuchar y clarificar antes de responder</li>
          <li>Validar la objeción (empatía)</li>
          <li>Responder con argumentos personalizados</li>
          <li>Transformar la objeción en pregunta de cierre</li>
        </ul>
        <div className="callout callout--warning">
          <strong>⚠️ Error frecuente:</strong> Rebatir la objeción demasiado rápido sin comprender el motivo real. El 60% de las objeciones esconden una necesidad no expresada.
        </div>
      </section>

      {/* ===================== SECCIÓN 6 ===================== */}
      <section className="topic-section">
        <h2>6. Venta Ética y Experiencia del Cliente</h2>
        <p>
          La venta directa premium se basa en la ética, la transparencia y la orientación al valor. El vendedor universitario prioriza la satisfacción y la confianza a largo plazo sobre la venta puntual.
        </p>
        <ul>
          <li>No prometer lo que no se puede cumplir</li>
          <li>Respetar la privacidad y los datos del cliente</li>
          <li>Evitar la presión excesiva o manipulaciones</li>
          <li>Buscar el beneficio mutuo y la relación duradera</li>
        </ul>
        <div className="callout callout--case">
          <strong>🧑‍⚖️ Caso real:</strong> Un vendedor de seguros que renuncia a una venta porque el producto no es adecuado para el cliente, gana la confianza y recibe 3 recomendaciones en el siguiente año.
        </div>
      </section>

      {/* ===================== SECCIÓN 7 ===================== */}
      <section className="topic-section">
        <h2>7. Casos Prácticos de Venta Directa</h2>
        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">🏠</span>
            <span>Caso 1: Venta inmobiliaria presencial</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente indeciso entre dos viviendas. El vendedor aplica el método SPIN y el cierre alternativo, logrando que el cliente elija la opción más adecuada a sus necesidades.
          </p>
        </div>
        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">📞</span>
            <span>Caso 2: Venta telefónica de servicios</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente escéptico ante una oferta de telecomunicaciones. El vendedor utiliza storytelling y prueba social, superando la objeción de desconfianza y cerrando la venta con una oferta personalizada.
          </p>
        </div>
        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">🛍️</span>
            <span>Caso 3: Venta retail premium</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente habitual solicita un descuento especial. El vendedor argumenta valor, ofrece un beneficio exclusivo y realiza seguimiento postventa, logrando fidelización y recomendación.
          </p>
        </div>
      </section>

      {/* ===================== SECCIÓN 8 ===================== */}
      <section className="topic-section">
        <h2>8. Actividades Prácticas</h2>
        <div className="callout callout--activity">
          <strong>🎯 Actividad 1 — Role-play de venta directa</strong>
          <p>
            En parejas, uno representa al cliente y otro al vendedor. Simular las fases del proceso, gestionar objeciones y aplicar una técnica de cierre. Feedback grupal sobre la argumentación y la ética.
          </p>
        </div>
        <div className="callout callout--activity">
          <strong>🎯 Actividad 2 — Análisis de casos reales</strong>
          <p>
            Analizar un caso de venta directa en tu sector. Identificar las fases, técnicas empleadas y proponer mejoras.
          </p>
        </div>
      </section>

      {/* ===================== SECCIÓN 9 ===================== */}
      <section className="topic-section">
        <h2>9. Autoevaluación</h2>
        <ol className="self-assessment-list">
          <li>Define venta directa y diferencia con la venta asistida digital.</li>
          <li>Enumera las 7 fases del proceso de venta directa y explica la importancia de cada una.</li>
          <li>¿Qué competencias personales distinguen al vendedor premium?</li>
          <li>Explica el modelo SPIN y pon un ejemplo de pregunta para cada fase.</li>
          <li>¿Cómo transformar una objeción en una oportunidad de cierre?</li>
          <li>¿Por qué la ética es clave en la venta directa universitaria?</li>
        </ol>
      </section>

      {/* ===================== SECCIÓN 10 ===================== */}
      <section className="topic-section">
        <h2>10. Síntesis y Bibliografía de Referencia</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-icon">🧭</div>
            <h4>Fundamentos</h4>
            <p>La venta directa es una disciplina estratégica que requiere método, ética y orientación al cliente.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🔬</div>
            <h4>Método</h4>
            <p>El proceso estructurado y la gestión profesional de objeciones marcan la diferencia en la conversión.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🎭</div>
            <h4>Adaptación</h4>
            <p>El vendedor premium adapta su discurso, técnicas y estilo a cada cliente y contexto.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚖️</div>
            <h4>Ética</h4>
            <p>La confianza y la reputación se construyen con integridad y orientación al valor.</p>
          </div>
        </div>
        <details className="topic-accordion">
          <summary>Bibliografía académica y profesional</summary>
          <div className="topic-details">
            <ul>
              <li>Rackham, N. (1988). <em>SPIN Selling</em>. McGraw-Hill.</li>
              <li>Cardone, G. (2011). <em>Sell or Be Sold</em>. Greenleaf Book Group.</li>
              <li>Hopkins, T. (2014). <em>Cómo Vender Cualquier Cosa a Cualquier Persona</em>. Amat Editorial.</li>
              <li>Gitomer, J. (2013). <em>The Sales Bible</em>. Wiley.</li>
              <li>Harvard Business Review (2023). <em>Sales Excellence</em>.</li>
              <li>McKinsey & Company (2024). <em>Sales Performance Insights</em>.</li>
            </ul>
          </div>
        </details>
      </section>
    </TopicLayout>
  );
}
