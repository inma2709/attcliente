import RecursosAudiovisuales from '../../components/RecursosAudiovisuales';

const Home = () => {
  return (
    <article className="topic">
       {/* Imagen de introducción */}
      <figure className="hero-media">
        <img src="/intro.png" alt="Introducción al manual de atención al cliente" />
        <figcaption className="media-caption">Inicio del curso: la excelencia se construye con método, comunicación y consistencia.</figcaption>
      </figure>
  <header className="hero">
  <div className="hero-content">
    <span className="hero-eyebrow">Manual profesional · Atención al Cliente</span>

    <h1>Atención al Cliente</h1>
    <h2 className="hero-subtitle">Una profesión exigente, humana y esencial</h2>

    <p className="muted">
      Trabajar en atención al cliente es una de las tareas más complejas y, al mismo tiempo,
      más valiosas dentro de cualquier organización. No se trata solo de atender consultas
      o resolver incidencias, sino de <strong>sostener relaciones humanas</strong> en contextos
      de presión, expectativas y emociones.
    </p>

    <p className="muted">
      Quien desempeña este rol gestiona conflictos, equilibra intereses y representa los
      valores de la empresa en cada interacción. Es una profesión que exige{" "}
      <strong>criterio técnico, inteligencia emocional, comunicación eficaz y ética profesional</strong>.
    </p>

    <div className="hero-highlight">
      <p>
        Sin atención al cliente no hay confianza, no hay fidelización y no hay experiencia
        de cliente. Cada interacción bien gestionada impacta directamente en la reputación
        de la empresa y en la satisfacción de las personas.
      </p>
    </div>

    <p className="muted">
      Este manual tiene un objetivo claro:{" "}
      <strong>convertir la atención al cliente en una competencia estratégica</strong>.
      Aquí no aprenderás a “aguantar” situaciones difíciles, sino a{" "}
      <strong>intervenir con criterio, profesionalidad y dignidad</strong>, transformando
      cada contacto en una oportunidad de generar valor, confianza y sostenibilidad para
      la empresa, y reconocimiento profesional para quien presta el servicio.
    </p>
  </div>
</header>



     

      <section className="topic-section">
        <p>
          Imagina por un momento que una empresa es una institución <strong>única y diferente a cualquier otra en el mundo</strong>.
          No existe otra igual porque su esencia no reside solo en sus activos físicos, sino en la red invisible que la mantiene viva:
          la <strong>información y la comunicación</strong>.
        </p>

        <div className="callout callout--tip">
          <div className="callout-title">💭 Reflexión Inicial</div>
          <p>
            "La atención al cliente es como el sistema de riego de un jardín: si el agua (la comunicación)
            no llega a todas las flores (los clientes) de forma constante y en la cantidad adecuada,
            el jardín se marchita, por muy fértil que sea la tierra (el producto)."
          </p>
        </div>

        <p>
          En este manual no vas a aprender "frases bonitas": vas a aprender un método. Pasaremos de la atención correcta
          a la <strong>excelencia consistente</strong>, apoyándonos en tres ideas clave:
          <strong> calidad de servicio</strong>, <strong>experiencia del cliente (CX)</strong> y <strong>gestión emocional profesional</strong>.
        </p>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>¿Qué vas a encontrar en este manual?</h2>
        </div>

        <div className="media-grid">
          <div className="card">
            <div className="badge">📊 Datos</div>
            <h4>Datos que Importan</h4>
            <p>
              El <strong>68% de los clientes</strong> que abandonan una marca lo hacen por <strong>mala atención</strong>.
              Este dato es una llamada a la acción: tú estás aquí para ser la diferencia entre un cliente perdido
              y un "apóstol" incondicional de la marca.
            </p>
          </div>

          <div className="card">
            <div className="badge">🎯 Enfoque</div>
            <h4>Enfoque Integral</h4>
            <p>
              Esta introducción ha sido diseñada para sumergirte en el ecosistema de la
              <strong>comunicación empresarial y la atención al cliente </strong>, integrando conceptos técnicos,
              estratégicos y humanos de manera profunda.
            </p>
          </div>

          <div className="card">
            <div className="badge">✨ Excelencia</div>
            <h4>Excelencia Real (No "Atender Bien")</h4>
            <p>
              La excelencia no consiste solo en resolver incidencias: consiste en
              <strong> diseñar experiencias memorables </strong>, cuidar los
              <strong> momentos de verdad </strong> y mantener una conducta profesional coherente con los
              <strong> valores </strong> de la empresa incluso bajo presión.
            </p>
          </div>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎯 Actividad Inicial: Preguntas de Apertura</h2>
          <span className="topic-section__meta">Plantéate estas preguntas antes de comenzar. A lo largo del manual encontrarás las respuestas.</span>
        </div>

        <div className="callout callout--activity" style={{ backgroundColor: '#f0f4ff', borderLeft: '4px solid #4f46e5', padding: 'var(--space-4)' }}>
          <div className="callout-title">❓ Preguntas de Reflexión para Resolver</div>
          <p style={{ marginBottom: 'var(--space-3)', fontWeight: 'bold' }}>Antes de leer cada módulo, intenta responder estas preguntas. No hay respuestas "correctas"—se trata de tu perspectiva actual:</p>
          
          <ol style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8' }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Qué diferencia existe entre un cliente satisfecho y un cliente leal?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: La satisfacción es un sentimiento; la lealtad es una decisión.
              </div>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Cómo se recupera una mala experiencia con el cliente?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: No se trata solo de disculparse, sino de transformar la experiencia negativa.
              </div>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Cuál es la verdadera diferencia entre "calidad" y "excelencia" en atención al cliente?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: La calidad es cumplir lo prometido; la excelencia es superar expectativas.
              </div>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Qué rol juega la inteligencia emocional en tu capacidad de atender a un cliente difícil?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: Tu estado emocional es más determinante que las palabras que uses.
              </div>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Cómo influyen los "momentos de verdad" en la percepción del cliente sobre la empresa?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: Un solo momento crítico puede destruir años de buena relación o crear un apóstol incondicional.
              </div>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <strong>¿Por qué la comunicación es el "sistema nervioso" de una empresa?</strong>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', fontStyle: 'italic' }}>
                💡 Pista: Sin información fluida, la empresa no puede reaccionar ni adaptarse.
              </div>
            </li>
          </ol>

          <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '4px solid #fbbf24' }}>
            <p style={{ marginBottom: 'var(--space-2)' }}>
              <strong>📝 Tu tarea:</strong> Registra tus respuestas iniciales. Al finalizar el manual, volverás a estas mismas preguntas 
              y verás cómo tu comprensión ha evolucionado. Las respuestas que escribas hoy serán tu punto de partida.
            </p>
          </div>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Tu Viaje de Aprendizaje</h2>
          <span className="topic-section__meta">7 secciones estratégicas que transformarán tu comprensión del servicio al cliente</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>🏗️ Sección 1: Fundamentos de la Atención al Cliente</summary>
            <div className="topic-details__content">
              <p>
                El punto de partida es fundamental. Aprenderás los <strong>errores críticos</strong> a evitar, la 
                <strong>estructura organizativa</strong> de la empresa, los principios de <strong>calidad y excelencia</strong>,
                y los <strong>valores éticos</strong> que sustentan una atención respetuosa e inclusiva.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Errores críticos en atención al cliente y cómo evitarlos</li>
                <li>La organización empresarial y el proceso de información</li>
                <li>Calidad y oportunidad en el servicio al cliente</li>
                <li>Ética, Valores y Atención Inclusiva</li>
              </ul>
              <div className="callout callout--activity" style={{ marginTop: 'var(--space-3)' }}>
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Conoces los valores de tu empresa y cómo se reflejan en cada interacción con el cliente?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>👥 Sección 2: Habilidades y Desarrollo del Profesional</summary>
            <div className="topic-details__content">
              <p>
                Desarrollarás las <strong>competencias personales</strong> que te harán un profesional destacado: desde
                la <strong>inteligencia emocional</strong> y el <strong>protocolo empresarial</strong> hasta la
                <strong>comunicación presencial</strong> efectiva y la <strong>comunicación empresarial</strong> estratégica.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Gestión emocional del profesional</li>
                <li>Protocolo empresarial e imagen personal</li>
                <li>Comunicación presencial y habilidades sociales</li>
                <li>Fundamentos y flujos de la comunicación empresarial</li>
              </ul>
              <div className="callout callout--activity" style={{ marginTop: 'var(--space-3)' }}>
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Qué haces hoy cuando algo te supera: reaccionas o respondes con profesionalismo?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>🧠 Sección 3: Conocimiento del Cliente</summary>
            <div className="topic-details__content">
              <p>
                El cliente es el centro. Entenderás su <strong>psicología</strong>, aprenderás a <strong>detectar necesidades</strong>,
                a evaluar su <strong>satisfacción</strong> y, lo más importante, a diseñar <strong>experiencias memorables</strong>
                que transformen cada interacción en una oportunidad de fidelización.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Psicología y tipología del cliente</li>
                <li>Detección de necesidades y evaluación de la satisfacción</li>
                <li>El viaje del cliente (Customer Journey)</li>
                <li>Experiencia de cliente memorable</li>
              </ul>
              <div className="callout callout--activity" style={{ marginTop: 'var(--space-3)' }}>
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Qué "momento de verdad" te ha hecho recomendar una marca… o nunca volver a ella?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>🗣️ Sección 4: Canales de Comunicación</summary>
            <div className="topic-details__content">
              <p>
                Dominarás <strong>todos los canales</strong> de contacto: <strong>telefónico, escrito, digital y telemático</strong>.
                Cada canal tiene sus reglas, sus desafíos y sus oportunidades. Aprenderás a brillar en cada uno de ellos,
                manteniendo siempre la <strong>confidencialidad y seguridad</strong> de la información.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Comunicación telefónica y gestión de centralitas</li>
                <li>Comunicación escrita y redacción de documentos</li>
                <li>Uso de nuevas tecnologías y canales telemáticos</li>
                <li>Protección de datos, seguridad y confidencialidad</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>🤝 Sección 5: Técnicas Avanzadas de Venta y Negociación</summary>
            <div className="topic-details__content">
              <p>
                Aprenderás <strong>técnicas profesionales</strong> para impulsar resultados: <strong>negociación efectiva</strong>
                con clientes, estrategias de <strong>venta directa</strong> y cómo convertir cada conversación
                en una oportunidad de valor agregado para el cliente y la empresa.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Técnicas de negociación con el cliente</li>
                <li>Técnicas de venta directa</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>⚖️ Sección 6: Gestión de Conflictos y Fidelización</summary>
            <div className="topic-details__content">
              <p>
                El conflicto es una <strong>oportunidad de mejora</strong>. Estudiaremos cómo <strong>gestionar reclamaciones</strong>,
                resolver conflictos con <strong>profesionalismo</strong> y transformar clientes insatisfechos en <strong>defensores de la marca</strong>
                mediante el <strong>servicio posventa</strong> y la <strong>fidelización estratégica</strong>.
              </p>
              <ul style={{ marginTop: 'var(--space-2)' }}>
                <li>Atención de quejas, reclamaciones y gestión de conflictos</li>
                <li>Fidelización del cliente y servicio posventa</li>
              </ul>
              <div className="callout callout--activity" style={{ marginTop: 'var(--space-3)' }}>
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Has tenido una reclamación mal gestionada? ¿Qué hubiera podido cambiar la experiencia?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>🤖 Sección 7: Especialización - Inteligencia Artificial en Atención al Cliente</summary>
            <div className="topic-details__content">
              <p>
                El futuro ya está aquí. Explora cómo la <strong>Inteligencia Artificial</strong> transforma la atención al cliente,
                desde chatbots hasta análisis predictivo. El profesional del futuro no compite con la IA, sino que aprende
                a <strong>trabajar junto a ella</strong>, maximizando eficiencia y humanidad.
              </p>
              <div className="callout callout--activity" style={{ marginTop: 'var(--space-3)' }}>
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Cómo crees que la IA modificará tu rol en los próximos 5 años?</p>
              </div>
            </div>
          </details>
        </div>
      </section>
<section className="topic-section">
  <div className="topic-section__title">
    <h2>Temario Completo - 21 Módulos</h2>
    <span className="topic-section__meta">
      Cada módulo está diseñado para construir sobre el anterior, creando un conocimiento sólido, actual y aplicable
    </span>
  </div>

  <div className="curriculum-item">
    <span className="curriculum-number">00</span>
    <div className="curriculum-content">
      <h4>Errores críticos en atención al cliente y cómo evitarlos</h4>
      <p>Identificación y prevención de fallos comunes en la atención al cliente</p>
    </div>
  </div>

  <div className="curriculum-grid">
    <div className="curriculum-item">
      <span className="curriculum-number">01</span>
      <div className="curriculum-content">
        <h4>La organización empresarial y el proceso de información</h4>
        <p>Elementos de la empresa, organigrama y toma de decisiones</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">02</span>
      <div className="curriculum-content">
        <h4>Fundamentos y flujos de la comunicación empresarial</h4>
        <p>Comunicación interna, externa, formal e informal</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">03</span>
      <div className="curriculum-content">
        <h4>Psicología y tipología del cliente</h4>
        <p>Motivaciones, jerarquía de Maslow y tipologías de cliente</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">04</span>
      <div className="curriculum-content">
        <h4>Calidad y oportunidad en el servicio al cliente</h4>
        <p>Estrategias para la excelencia y supervivencia del negocio</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">05</span>
      <div className="curriculum-content">
        <h4>Comunicación presencial y habilidades sociales</h4>
        <p>Escucha activa, empatía, asertividad y lenguaje corporal</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">06</span>
      <div className="curriculum-content">
        <h4>Protocolo empresarial e imagen personal</h4>
        <p>Normas de comportamiento, cortesía e imagen profesional</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">07</span>
      <div className="curriculum-content">
        <h4>Comunicación telefónica y gestión de centralitas</h4>
        <p>Pautas de cortesía, centralitas y manejo de situaciones difíciles</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">08</span>
      <div className="curriculum-content">
        <h4>Comunicación escrita y redacción de documentos</h4>
        <p>Cartas, informes, memorándums, actas y comunicación oficial</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">09</span>
      <div className="curriculum-content">
        <h4>Uso de nuevas tecnologías y canales telemáticos</h4>
        <p>Chat, email, redes sociales y asistencia virtual</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">10</span>
      <div className="curriculum-content">
        <h4>Gestión emocional del profesional</h4>
        <p>Autocontrol, resiliencia, estrés y prevención del burnout</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">11</span>
      <div className="curriculum-content">
        <h4>Experiencia de cliente memorable</h4>
        <p>Customer journey, momentos de verdad y gestión de expectativas</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">12</span>
      <div className="curriculum-content">
        <h4>Detección de necesidades y evaluación de la satisfacción</h4>
        <p>Evaluación de satisfacción, encuestas y seguimiento</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">13</span>
      <div className="curriculum-content">
        <h4>Atención de quejas, reclamaciones y gestión de conflictos</h4>
        <p>Quejas, reclamaciones, mediación, arbitraje y negociación</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">14</span>
      <div className="curriculum-content">
        <h4>Fidelización del cliente y servicio posventa</h4>
        <p>Retención, seguimiento, up-selling y relación duradera</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">15</span>
      <div className="curriculum-content">
        <h4>Protección de datos, seguridad y confidencialidad</h4>
        <p>LOPDGDD/RGPD, confidencialidad y buenas prácticas</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">16</span>
      <div className="curriculum-content">
        <h4>Ética, Valores y Atención Inclusiva</h4>
        <p>Trato respetuoso, diversidad, no discriminación y coherencia corporativa</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">17</span>
      <div className="curriculum-content">
        <h4>Inteligencia Artificial en atención al cliente</h4>
        <p>Chatbots, análisis predictivo y asistencia automatizada</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">18</span>
      <div className="curriculum-content">
        <h4>El viaje del cliente (Customer Journey)</h4>
        <p>Mapeo de touchpoints, experiencia omnicanal y fidelización</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">19</span>
      <div className="curriculum-content">
        <h4>Técnicas de negociación con el cliente</h4>
        <p>Negociación efectiva, resolución de conflictos y win-win</p>
      </div>
    </div>

    <div className="curriculum-item">
      <span className="curriculum-number">20</span>
      <div className="curriculum-content">
        <h4>Técnicas de venta directa</h4>
        <p>Cierre de ventas, aumentar tickes y conversión de oportunidades</p>
      </div>
    </div>
  </div>
</section>

<section className="topic-section">
  <div className="topic-section__title">
    <h2>🚀 Actividades Prácticas Integrales</h2>
    <span className="topic-section__meta">Aplica lo aprendido en tres desafíos que consolidarán tu aprendizaje</span>
  </div>

  {/* ACTIVIDAD 1: CANVA */}
  <details className="topic-details" style={{ marginBottom: 'var(--space-4)' }}>
    <summary style={{ backgroundColor: '#ecfdf5', padding: 'var(--space-3)', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1em' }}>
      📊 Actividad 1: Infografía en Canva - "Mi Ruta del Aprendizaje"
    </summary>
    <div className="topic-details__content" style={{ marginTop: 'var(--space-3)' }}>
      <p style={{ marginBottom: 'var(--space-3)' }}>
        <strong>Objetivo:</strong> Responder de forma visual las preguntas iniciales que planteamos al principio del manual.
      </p>

      <div className="callout callout--activity" style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #10b981' }}>
        <div className="callout-title">¿Qué debes hacer?</div>
        <ol style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            Abre <strong>Canva</strong> (versión gratuita es suficiente)
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            Elige una plantilla de <strong>infografía, presentación o póster</strong>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            Responde visualmente estas seis preguntas clave:
            <ul style={{ marginTop: 'var(--space-2)', marginLeft: 'var(--space-4)' }}>
              <li>¿Diferencia entre satisfacción y lealtad?</li>
              <li>¿Cómo recuperar una mala experiencia?</li>
              <li>¿Calidad vs. Excelencia?</li>
              <li>¿Rol de la inteligencia emocional en atención difícil?</li>
              <li>¿Importancia de los "momentos de verdad"?</li>
              <li>¿Por qué la comunicación es el sistema nervioso de la empresa?</li>
            </ul>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            Incluye <strong>iconos, colores y datos</strong> del manual
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            Comparte tu infografía con tu formador o equipo
          </li>
        </ol>
      </div>

      <div className="callout callout--example" style={{ marginTop: 'var(--space-3)', backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b' }}>
        <div className="callout-title">⏱️ Tiempo estimado: 45-60 minutos</div>
        <p style={{ marginBottom: 0 }}>
          <strong>Se valorará:</strong> Claridad de las respuestas, uso visual, originalidad y cómo conectas los conceptos del manual.
        </p>
      </div>
    </div>
  </details>

  {/* ACTIVIDAD 2: EJERCICIO POR PAREJAS */}
  <details className="topic-details" style={{ marginBottom: 'var(--space-4)' }}>
    <summary style={{ backgroundColor: '#fdf2f8', padding: 'var(--space-3)', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1em' }}>
      👥 Actividad 2: Role-Playing por Parejas - "Atención al Cliente Desafiante"
    </summary>
    <div className="topic-details__content" style={{ marginTop: 'var(--space-3)' }}>
      <p style={{ marginBottom: 'var(--space-3)' }}>
        <strong>Objetivo:</strong> Practicar habilidades de comunicación, inteligencia emocional y resolución de conflictos en tiempo real.
      </p>

      <div className="callout callout--activity" style={{ backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b' }}>
        <div className="callout-title">🎭 Escenarios a Representar</div>
        <p style={{ marginBottom: 'var(--space-2)' }}>Cada pareja elegirá uno de los siguientes escenarios:</p>
        <ul style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>Escenario 1:</strong> Un cliente llora de frustración porque su pedido se perdió. Llevas 10 minutos en una llamada telefónica sin resolver nada.
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>Escenario 2:</strong> Una cliente alega que el producto no es lo que le vendieron. Te acusa de fraude en redes sociales en tiempo real.
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>Escenario 3:</strong> Un cliente corporativo amenaza con cambiar de proveedor tras una entrega retrasada. Tú eres el único disponible.
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>Escenario 4:</strong> Un cliente devuelve un producto "defectuoso", pero claramente ha sido usado sin cuidado. Insiste en reembolso total.
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: '#f0fdf4', padding: 'var(--space-3)', borderRadius: '8px', marginTop: 'var(--space-3)', borderLeft: '4px solid #10b981' }}>
        <p style={{ marginBottom: 'var(--space-2)', fontWeight: 'bold' }}>📋 Instrucciones para la pareja:</p>
        <ol style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
          <li>Un rol es el <strong>cliente difícil</strong>, otro es el <strong>profesional de atención</strong></li>
          <li>Representad el escenario durante <strong>5-7 minutos</strong></li>
          <li>El profesional debe aplicar:<br/>
            <ul style={{ marginTop: '0.5rem', marginLeft: 'var(--space-4)' }}>
              <li>Escucha activa</li>
              <li>Empatía genuina (no fingida)</li>
              <li>Soluciones creativas</li>
              <li>Gestión emocional bajo presión</li>
            </ul>
          </li>
          <li>Después, intercambiad roles y repetid con otro escenario</li>
          <li>Retroalimentación: 3 minutos para explicar qué salió bien y qué mejorar</li>
        </ol>
      </div>

      <div className="callout callout--example" style={{ marginTop: 'var(--space-3)', backgroundColor: '#dbeafe', borderLeft: '4px solid #0ea5e9' }}>
        <div className="callout-title">⏱️ Tiempo estimado: 30-40 minutos (30 en parejas + 10 de feedback)</div>
        <p style={{ marginBottom: 0 }}>
          <strong>Se valorará:</strong> Autenticidad de la actuación, aplicación de conceptos, gestión emocional real y capacidad de adaptación ante lo inesperado.
        </p>
      </div>
    </div>
  </details>

  {/* ACTIVIDAD 3: DEBATE */}
  <details className="topic-details">
    <summary style={{ backgroundColor: '#f5f3ff', padding: 'var(--space-3)', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1em' }}>
      🎤 Actividad 3: Debate/Mesa Redonda - "Dilemas de Atención al Cliente"
    </summary>
    <div className="topic-details__content" style={{ marginTop: 'var(--space-3)' }}>
      <p style={{ marginBottom: 'var(--space-3)' }}>
        <strong>Objetivo:</strong> Analizar críticamente situaciones complejas y desarrollar pensamiento estratégico en atención al cliente.
      </p>

      <div className="callout callout--activity" style={{ backgroundColor: '#fdf2f8', borderLeft: '4px solid #ec4899' }}>
        <div className="callout-title">❓ Preguntas Abiertas para el Debate</div>
        <p style={{ marginBottom: 'var(--space-3)', fontStyle: 'italic' }}>El formador elegirá 3-4 preguntas. El grupo debatirá durante 5-10 minutos cada una.</p>
        <ol style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>¿Está justificado decirle "no" a un cliente si su petición va contra los valores de la empresa?</strong> 
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Cómo lo harías con profesionalidad sin perder la relación?
            </span>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>¿Es posible mantener excelencia en atención si estás quemado (burnout)?</strong>
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Qué responsabilidad tiene la empresa vs. el trabajador?
            </span>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>¿Qué es más importante: retener un cliente difícil o proteger el bienestar del equipo?</strong>
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Existen límites éticos en la atención al cliente?
            </span>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>En 2030, ¿cómo será la atención al cliente: más humana, más automatizada o un híbrido?</strong>
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Qué habilidades deberán desarrollar los profesionales?
            </span>
          </li>
          <li style={{ marginBottom: 'var(--space-2)' }}>
            <strong>¿Es posible "perdonar" a una marca tras una experiencia traumática?</strong>
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Cuánto cuesta recuperar la confianza perdida?
            </span>
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>¿Quién es el "verdadero cliente" de atención al cliente: la persona que llama o la empresa que paga?</strong>
            <br/><span style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem', display: 'block' }}>
              ¿Cómo se resuelven los conflictos de intereses?
            </span>
          </li>
        </ol>
      </div>

      <div style={{ backgroundColor: '#ecfdf5', padding: 'var(--space-3)', borderRadius: '8px', marginTop: 'var(--space-3)', borderLeft: '4px solid #10b981' }}>
        <p style={{ marginBottom: 'var(--space-2)', fontWeight: 'bold' }}>📋 Dinámica del Debate:</p>
        <ul style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
          <li>El formador plantea una pregunta</li>
          <li>Cada participante tiene <strong>1 minuto</strong> para exponer su posición</li>
          <li>Se genera <strong>discusión abierta</strong> durante 5-10 minutos</li>
          <li>Se identifican puntos de acuerdo y desacuerdo</li>
          <li>El formador sintetiza aprendizajes clave relacionados con el manual</li>
        </ul>
      </div>

      <div className="callout callout--example" style={{ marginTop: 'var(--space-3)', backgroundColor: '#dbeafe', borderLeft: '4px solid #0ea5e9' }}>
        <div className="callout-title">⏱️ Tiempo estimado: 45-60 minutos (según cantidad de preguntas)</div>
        <p style={{ marginBottom: 0 }}>
          <strong>Se valorará:</strong> Argumentación basada en conceptos del manual, respeto por otras opiniones, capacidad de sintetizar ideas y pensamiento crítico.
        </p>
      </div>
    </div>
  </details>

  <div style={{ backgroundColor: '#fef3c7', padding: 'var(--space-4)', borderRadius: '8px', marginTop: 'var(--space-4)', borderLeft: '4px solid #f59e0b' }}>
    <p style={{ marginBottom: 'var(--space-2)', fontWeight: 'bold' }}>
      ✅ Al completar las tres actividades:
    </p>
    <ul style={{ marginLeft: 'var(--space-4)', lineHeight: '1.8', marginBottom: 0 }}>
      <li>Habrás aplicado la teoría a la práctica</li>
      <li>Habrás expuesto tu pensamiento crítico</li>
      <li>Habrás trabajado en equipo y desarrollado habilidades de comunicación</li>
      <li>Estarás preparado para afrontar situaciones reales de atención al cliente con confianza</li>
    </ul>
  </div>
</section>

<section className="topic-section">
  <div className="callout callout--example">
    <div className="callout-title">🚀 Tu Viaje Comienza Ahora</div>
    <p>
      Cada minuto de lectura te acercará a ser un profesional capaz de transformar
      una simple transacción en una experiencia inolvidable.
    </p>

    <div className="callout callout--activity" style={{ marginTop: 'var(--space-4)' }}>
      <div className="callout-title">🤔 Pregunta final de motivación</div>
      <p>
        <em>
          Si hoy fueras el dueño de tu propia empresa y tuvieras que contratar a alguien
          para atender a tus mejores clientes, ¿te contratarías a ti mismo con los
          conocimientos y aptitudes que tienes ahora?
        </em>
      </p>
    </div>

    {/* Inserción de los vídeos al final */}
    <RecursosAudiovisuales />
  </div>
</section>

    </article>
  );
};

export default Home;