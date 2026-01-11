/**
 * Tema13.jsx
 * Atención de quejas, reclamaciones y gestión de conflictos
 * Nivel universitario / experto
 */

import TopicLayout from '../../components/TopicLayout';

const Tema13 = () => {
  return (
    <TopicLayout
      numero="13"
      title="Atención de quejas, reclamaciones y gestión de conflictos"
      intro="La gestión de quejas y reclamaciones constituye uno de los procesos más críticos en la relación empresa–cliente. Lejos de representar un fracaso organizativo, la queja es una manifestación explícita de insatisfacción que, bien gestionada, se transforma en una oportunidad estratégica de fidelización, mejora continua y refuerzo de la reputación corporativa."
    >
      {/* =============================== */}
      {/* 1. Procedimientos para resolver incidencias */}
      {/* =============================== */}
       <figure className="media">
          <img
            src="/t13.png"
            alt="Gestion de quejas y reclamaciones"
          />
          <figcaption>
         Gestionar quejas y reclamaciones de manera efectiva es clave para mantener la confianza del cliente.
          </figcaption>
        </figure>
      <section className="topic-section">
        <h2 className="topic-section__title">1. Procedimientos para resolver incidencias</h2>

        <details className="topic-details">
          <summary>La satisfacción del cliente y su expresión</summary>
          <div className="topic-details__content">
            <p>
              La satisfacción del cliente es el resultado de la comparación entre
              las <strong>expectativas previas</strong> y la <strong>experiencia real</strong>
              tras el consumo de un producto o servicio. Cuando la experiencia se sitúa
              por debajo de lo esperado, surge la insatisfacción.
            </p>

            <p>
              Las expectativas se construyen a partir de promesas comerciales,
              experiencias anteriores, opiniones de terceros y la imagen de marca.
              Por ello, una gestión deficiente de la experiencia del cliente afecta
              directamente a la confianza y a la reputación de la empresa.
            </p>

            <div className="callout callout--tip">
              <h4 className="callout-title">📌 Dato clave</h4>
              <p>
                Solo 1 de cada 20 clientes insatisfechos comunica su queja a la empresa;
                el resto abandona silenciosamente y busca alternativas.
              </p>
            </div>
          </div>
        </details>

        <details className="topic-details">
          <summary>Canales de detección y gestión de incidencias</summary>
          <div className="topic-details__content">
            <p>
              Las organizaciones orientadas a la calidad no esperan pasivamente la
              reclamación, sino que facilitan la expresión del descontento mediante
              canales accesibles y proactivos.
            </p>

            <ul>
              <li>Encuestas de satisfacción breves y estructuradas.</li>
              <li>Formularios web y canales digitales.</li>
              <li>Atención telefónica gratuita.</li>
              <li>Buzones físicos y virtuales de sugerencias.</li>
            </ul>

            <p>
              Un sistema eficaz de resolución de incidencias debe incluir la recepción,
              el registro, el análisis de causas, la propuesta de solución, el seguimiento
              y el cierre con aprendizaje organizacional.
            </p>
          </div>
        </details>
      </section>

      {/* =============================== */}
      {/* 2. Normativa de consumo */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">2. Normativa de consumo y protección del cliente</h2>

        <details className="topic-details">
          <summary>Marco legal básico</summary>
          <div className="topic-details__content">
            <p>
              La protección del consumidor es un principio básico del ordenamiento
              jurídico español y está recogida en la Constitución Española (artículo 51.1)
              y desarrollada por la Ley 3/2014.
            </p>

            <p>
              Esta normativa obliga a las empresas a garantizar la seguridad, la
              información veraz, la protección de los intereses económicos y la
              existencia de mecanismos eficaces de reclamación.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>Conceptos fundamentales y derechos del consumidor</summary>
          <div className="topic-details__content">
            <ul>
              <li><strong>Consumidor:</strong> persona que actúa fuera de una actividad empresarial.</li>
              <li><strong>Usuario:</strong> destinatario final del servicio.</li>
              <li><strong>Cliente:</strong> quien adquiere el bien o servicio mediante pago.</li>
            </ul>

            <p>
              Entre los derechos fundamentales destacan la protección de la salud,
              el derecho a la información, la defensa frente a cláusulas abusivas
              y la representación a través de asociaciones de consumidores.
            </p>
          </div>
        </details>
      </section>

      {/* =============================== */}
      {/* 3. Reclamaciones */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">3. La reclamación: tipos y procedimiento</h2>

        <details className="topic-details">
          <summary>Concepto y hoja oficial de reclamaciones</summary>
          <div className="topic-details__content">
            <p>
              La reclamación es un documento formal mediante el cual el cliente
              solicita una compensación o corrección por un incumplimiento de
              las condiciones pactadas.
            </p>

            <p>
              La hoja oficial de reclamaciones es un modelo normalizado que consta
              habitualmente de tres copias: una para la administración, otra para
              la empresa y una para el reclamante.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>Gestión de calidad de reclamaciones (ISO 10002)</summary>
          <div className="topic-details__content">
            <ul>
              <li>Visibilidad y accesibilidad.</li>
              <li>Gratuidad del proceso.</li>
              <li>Rapidez y diligencia.</li>
              <li>Objetividad y equidad.</li>
              <li>Mejora continua.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* =============================== */}
      {/* 4. Gestión presencial */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">4. Gestión de reclamaciones presenciales</h2>

        <details className="topic-details">
          <summary>Protocolo de actuación cara a cara</summary>
          <div className="topic-details__content">
            <ol>
              <li>Acoger al cliente en un espacio adecuado.</li>
              <li>Escuchar activamente sin interrumpir.</li>
              <li>Analizar el problema y reformularlo.</li>
              <li>Ofrecer soluciones realistas.</li>
              <li>Cerrar agradeciendo la aportación del cliente.</li>
            </ol>

            <p>
              El dominio de la empatía, la asertividad y el autocontrol emocional
              resulta esencial para evitar la escalada del conflicto.
            </p>
          </div>
        </details>
      </section>

      {/* =============================== */}
      {/* 5. Mediación y arbitraje */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">5. Técnicas de mediación y arbitraje de conflictos</h2>

        <details className="topic-details">
          <summary>El conflicto y sus fases</summary>
          <div className="topic-details__content">
            <p>
              El conflicto es un enfrentamiento de intereses, expectativas o percepciones
              que sigue fases identificables: aparición, intensificación, estancamiento
              y resolución.
            </p>
          </div>
        </details>

        <details className="topic-details">
          <summary>Mediación y arbitraje</summary>
          <div className="topic-details__content">
            <p>
              La mediación implica la intervención de un tercero neutral que facilita
              el acuerdo, mientras que el arbitraje supone la emisión de un laudo
              vinculante por una autoridad reconocida.
            </p>
          </div>
        </details>
      </section>

      {/* =============================== */}
      {/* 6. Clientes difíciles */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">6. Tratamiento de clientes difíciles</h2>

        <details className="topic-details">
          <summary>Tipologías y técnicas de gestión</summary>
          <div className="topic-details__content">
            <p>
              El cliente difícil puede mostrarse agresivo, desconfiado, excesivamente
              exigente o emocionalmente alterado. Su correcta gestión exige técnicas
              específicas de comunicación.
            </p>

            <ul>
              <li>Escucha activa y validación emocional.</li>
              <li>Desescalada verbal.</li>
              <li>Focalización en hechos objetivos.</li>
              <li>Establecimiento de límites claros.</li>
            </ul>

            <div className="callout callout--warning">
              <h4 className="callout-title">⚠️ Advertencia profesional</h4>
              <p>
                Nunca se debe personalizar el conflicto ni responder desde la emoción.
                El profesional representa a la organización, no a sí mismo.
              </p>
            </div>
          </div>
        </details>
        <details className="topic-details">
  <summary>La queja como oportunidad: el “cliente que protesta” es un cliente que aún quiere quedarse</summary>
  <div className="topic-details__content">
    <p>
      En atención al cliente existe una idea tan simple como decisiva:{" "}
      <strong>cuando un cliente se queja, todavía está “dentro” de la relación</strong>.
      Está frustrado, sí, pero también está invirtiendo tiempo y energía en explicarte qué ha fallado.
      En cambio, la mayoría de clientes insatisfechos{" "}
      <strong>no reclama: se marcha en silencio</strong> y la empresa ni siquiera llega a conocer el motivo.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        La queja es una forma de <strong>feedback de alto valor</strong>:
        revela un fallo real (operativo, comunicativo o humano) y abre una ventana para
        reparar el daño, recuperar la confianza y evitar que el error se repita.
      </p>
    </div>

    <h4>Por qué es tan valiosa una queja (y por qué da ventaja competitiva)</h4>
    <ul>
      <li>
        <strong>Detiene la “pérdida silenciosa”</strong>: si el cliente habla, la empresa puede actuar
        antes de que abandone definitivamente.
      </li>
      <li>
        <strong>Reduce el impacto reputacional</strong>: un cliente ignorado no solo se va, sino que
        puede compartir su experiencia negativa y disuadir a otros.
      </li>
      <li>
        <strong>Convierte un fallo en fidelización</strong>: una solución rápida y justa puede transformar
        un momento negativo en una experiencia memorable.
      </li>
      <li>
        <strong>Identifica fallos sistémicos</strong>: la queja individual muchas veces es la “punta del iceberg”
        de un problema recurrente en procesos, logística, información o trato.
      </li>
      <li>
        <strong>Mejora el servicio con datos reales</strong>: la queja aporta información que no aparece en
        informes internos; es “la voz del cliente” en estado puro.
      </li>
    </ul>

    <h4>La lectura estratégica: qué significa que un cliente se queje</h4>
    <p>
      Desde una perspectiva profesional, una queja indica <strong>dos cosas a la vez</strong>:
      (1) existe un desajuste entre expectativas y experiencia y (2) el cliente considera que
      la relación <strong>merece una oportunidad</strong>. Por eso, el objetivo no es “ganar la discusión”,
      sino <strong>restaurar la confianza</strong> mediante una respuesta clara, empática y verificable.
    </p>

    <div className="callout callout--warning">
      <h4 className="callout-title">⚠️ Riesgo frecuente</h4>
      <p>
        Cuando una empresa solo se centra en “apagar el incendio” (resolver el caso puntual) pero no
        analiza causas, acaba repitiendo errores. La consecuencia es grave:{" "}
        <strong>dejarán de llegar quejas… porque los clientes ya no creen que merezca la pena reclamar</strong>.
      </p>
    </div>

    <h4>Cómo “aprovechar” la queja: protocolo breve de valor</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Momento</th>
          <th>Qué hacer</th>
          <th>Qué logra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Inicio</strong></td>
          <td>Escucha activa + validación emocional (“entiendo que esto molesta”).</td>
          <td>Desescalada, el cliente se siente escuchado.</td>
        </tr>
        <tr>
          <td><strong>Análisis</strong></td>
          <td>Clarificar hechos, registrar datos, priorizar el problema real.</td>
          <td>Evita malentendidos y acelera la solución.</td>
        </tr>
        <tr>
          <td><strong>Solución</strong></td>
          <td>Ofrecer alternativas concretas (tiempos, responsables, compensación si procede).</td>
          <td>Percepción de justicia y control.</td>
        </tr>
        <tr>
          <td><strong>Cierre</strong></td>
          <td>Confirmar acuerdo + seguimiento (“te llamo mañana para verificar”).</td>
          <td>Recupera confianza y reduce reincidencia.</td>
        </tr>
        <tr>
          <td><strong>Aprendizaje</strong></td>
          <td>Análisis de causa raíz + acción correctiva/preventiva.</td>
          <td>Mejora continua real, menos quejas futuras.</td>
        </tr>
      </tbody>
    </table>

    <p>
      En síntesis: <strong>la queja es un regalo estratégico</strong>. El cliente que reclama está señalando
      dónde duele el sistema y, además, está concediendo algo muy escaso:{" "}
      <strong>una oportunidad de rectificar antes de irse</strong>.
      La empresa que aprende de esa oportunidad no solo retiene clientes, sino que construye calidad.
    </p>
  </div>
</details>

      </section>
       {/* =========================
          SECCIÓN VÍDEOS
         ========================= */}
      <section className="topic-section">
        <h2>Recursos audiovisuales</h2>

        <div className="video-block">
          <div className="video-title">Tratamiento de quejas y reclamaciones</div>
          <p className="video-meta muted">¿Como tratar quejas y reclamaciones de manera efectiva?</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/YZcWA96ZTSQ"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div className="video-title">Hacer frente a las quejas difíciles</div>
          <p className="video-meta muted">Gestionamos las quejas difíciles con técnicas efectivas.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/k8ApW-sSRJU"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* Cierre */}
      {/* =============================== */}
      <section className="topic-section">
        <h2 className="topic-section__title">Conclusión</h2>
        <p>
          Gestionar adecuadamente las quejas y reclamaciones no solo evita pérdidas,
          sino que fortalece la relación con el cliente y mejora la calidad del sistema.
          La empresa que escucha, actúa y aprende convierte el conflicto en valor
          organizacional.
        </p>
      </section>
    </TopicLayout>
  );
};

export default Tema13;
