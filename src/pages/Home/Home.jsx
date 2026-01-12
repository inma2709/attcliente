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
          <h2>Tu Viaje de Aprendizaje</h2>
          <span className="topic-section__meta">9 pilares fundamentales que transformarán tu comprensión del servicio al cliente</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>🏗️ El Cimiento: La Organización y su Flujo Vital</summary>
            <div className="topic-details__content">
              <p>
                Toda empresa combina el factor humano, el capital y el entorno para alcanzar objetivos. Estudiaremos la
                <strong>estructura jerárquica</strong> y los principios de especialización y autoridad.
              </p>
              <div className="callout callout--activity">
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>
                  ¿Sabrías identificar a qué departamento perteneces
                  en un organigrama y quiénes son tus superiores antes de empezar a trabajar?
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>🧠 El Protagonista: Psicología y Tipología del Cliente</summary>
            <div className="topic-details__content">
              <p>
                El cliente es quien <strong>paga tu salario</strong>. Aprenderás a distinguir entre los <strong>apóstoles</strong>
                (incondicionales), los <strong>mercenarios</strong> (buscadores de precio) y los peligrosos
                <strong>terroristas</strong> (difunden malas experiencias).
              </p>
              <div className="callout callout--activity">
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>
                  ¿Qué crees que hay detrás de un cliente que,
                  sin motivo aparente, decide cambiar de marca tras años de relación?
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>⭐ La Calidad como Estrategia de Supervivencia</summary>
            <div className="topic-details__content">
              <p>
                Estudiaremos la <strong>calidad total</strong>. No se trata solo de cumplir lo prometido,
                sino de alcanzar la <strong>excelencia empresarial</strong> anticipándote a las demandas
                y dándole algo que no esperaba.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>🗣️ Dominando los Canales de Comunicación</summary>
            <div className="topic-details__content">
              <p>Nos convertiremos en expertos en tres áreas críticas:</p>
              <ul>
                <li><strong>Presencial:</strong> Lenguaje no verbal, apariencia y protocolo</li>
                <li><strong>Telefónica:</strong> Centralitas, cortesía verbal y gestión de esperas</li>
                <li><strong>Virtual:</strong> Chats online, redes sociales y correo electrónico</li>
              </ul>
            </div>
          </details>

         

          <details className="topic-details">
            <summary>🤝 Conflictos, Reclamaciones y Fidelización</summary>
            <div className="topic-details__content">
              <p>
                El conflicto es una <strong>oportunidad de mejora</strong>. Estudiaremos técnicas de negociación, mediación
                y el uso del <strong>CRM</strong> para crear relaciones duraderas.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>🎯 La Experiencia del Cliente (CX): Lo que el Cliente Recuerda</summary>
            <div className="topic-details__content">
              <p>
                La excelencia se decide en los <strong>momentos de verdad</strong>: esos instantes en los que el cliente evalúa si
                la empresa cumple, sorprende o decepciona. Aprenderás a pensar en el <strong>Customer Journey</strong>
                (viaje del cliente) y a gestionar <strong>expectativas vs. percepción</strong>.
              </p>
              <div className="callout callout--activity">
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Qué "momento de verdad" te ha hecho recomendar una marca… o no volver jamás?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>🧘 Gestión Emocional del Profesional: Rendimiento Bajo Presión</summary>
            <div className="topic-details__content">
              <p>
                Para atender con excelencia, primero debes dominar tu propio estado emocional. Veremos técnicas de
                <strong>autocontrol</strong>, <strong>autorregulación</strong> y gestión del <strong>estrés</strong> para prevenir
                el desgaste (burnout) y mantener una atención impecable incluso con clientes difíciles.
              </p>
              <div className="callout callout--activity">
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Qué haces hoy cuando algo te supera: reaccionas o respondes?</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>⚖️ El Marco Legal, Ético e Inclusivo</summary>
            <div className="topic-details__content">
              <p>
                Analizaremos las implicaciones del <strong>RGPD</strong>, aprendiendo a obtener el consentimiento de forma clara
                y custodiar la información con medidas de seguridad robustas. Además, trabajaremos la
                <strong>ética profesional</strong> y el <strong>trato inclusivo</strong>: respeto, no discriminación y atención a
                colectivos vulnerables.
              </p>
              <div className="callout callout--activity">
                <div className="callout-title">🤔 Pregunta de reflexión</div>
                <p>¿Qué significa para ti "trato justo" cuando el cliente está alterado?</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Temario Completo - 16 Módulos</h2>
          <span className="topic-section__meta">
            Cada módulo está diseñado para construir sobre el anterior, creando un conocimiento sólido, actual y aplicable
          </span>
        </div>
       
          <div className="curriculum-item">
            <span className="curriculum-number">00</span>
            <div className="curriculum-content">
              <h4>Errores críticos en atención al cliente y cómo evitarlos</h4>
              <p>Identificación y prevención de fallos comunes en la atención al cliente </p>
            </div>
          </div>

        <div className="curriculum-grid">
          <div className="curriculum-item">
            <span className="curriculum-number">01</span>
            <div className="curriculum-content">
              <h4>Organización y Proceso de Información</h4>
              <p>Elementos de la empresa, organigrama y toma de decisiones</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">02</span>
            <div className="curriculum-content">
              <h4>Flujos de Comunicación</h4>
              <p>Comunicación interna, externa, formal e informal</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">03</span>
            <div className="curriculum-content">
              <h4>Psicología del Consumidor</h4>
              <p>Motivaciones, jerarquía de Maslow y tipologías de cliente</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">04</span>
            <div className="curriculum-content">
              <h4>Calidad en el Servicio</h4>
              <p>Estrategias para la excelencia y supervivencia del negocio</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">05</span>
            <div className="curriculum-content">
              <h4>Habilidades Sociales y Cara a Cara</h4>
              <p>Escucha activa, empatía, asertividad y lenguaje corporal</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">06</span>
            <div className="curriculum-content">
              <h4>Protocolo e Imagen</h4>
              <p>Normas de comportamiento, cortesía e imagen profesional</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">07</span>
            <div className="curriculum-content">
              <h4>Gestión Telefónica</h4>
              <p>Pautas de cortesía, centralitas y manejo de situaciones difíciles</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">08</span>
            <div className="curriculum-content">
              <h4>Redacción Comercial</h4>
              <p>Cartas, informes, memorándums, actas y comunicación oficial</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">09</span>
            <div className="curriculum-content">
              <h4>Nuevas Tecnologías</h4>
              <p>Chat, email, redes sociales y asistencia virtual</p>
            </div>
          </div>

         

          <div className="curriculum-item">
            <span className="curriculum-number">10</span>
            <div className="curriculum-content">
              <h4>Detección de Necesidades y CRM</h4>
              <p>Evaluación de satisfacción, encuestas y seguimiento</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">11</span>
            <div className="curriculum-content">
              <h4>Gestión de Conflictos</h4>
              <p>Quejas, reclamaciones, mediación, arbitraje y negociación</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">12</span>
            <div className="curriculum-content">
              <h4>Fidelización y Posventa</h4>
              <p>Retención, seguimiento, up-selling y relación duradera</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">13</span>
            <div className="curriculum-content">
              <h4>Seguridad y Protección de Datos</h4>
              <p>LOPDGDD/RGPD, confidencialidad y buenas prácticas</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">14</span>
            <div className="curriculum-content">
              <h4>Experiencia del Cliente (CX)</h4>
              <p>Customer journey, momentos de verdad y gestión de expectativas</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">15</span>
            <div className="curriculum-content">
              <h4>Gestión Emocional del Profesional</h4>
              <p>Autocontrol, resiliencia, estrés y prevención del burnout</p>
            </div>
          </div>

          <div className="curriculum-item">
            <span className="curriculum-number">16</span>
            <div className="curriculum-content">
              <h4>Ética, Valores y Atención Inclusiva</h4>
              <p>Trato respetuoso, diversidad, no discriminación y coherencia corporativa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="topic-section">
        <div className="callout callout--example">
          <div className="callout-title">🚀 Tu Viaje Comienza Ahora</div>
          <p>
            Cada minuto de lectura te acercará a ser un profesional capaz de transformar
            una simple transacción en una experiencia inolvidable.
          </p>

          <div className="callout callout--activity" style={{marginTop: 'var(--space-4)'}}>
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