import TopicLayout from "../../components/TopicLayout";

const Tema16 = () => {
  // Vídeos relacionados (YouTube)
  const VIDEO_ETICA_ATENCION = "6ZVZK7pLz2k"; // Ética y valores en atención al cliente
  const VIDEO_DIVERSIDAD_INCLUSION = "L5JZ9KX1q7Y"; // Atención inclusiva y diversidad
  const VIDEO_NO_DISCRIMINACION = "kqF8vKzj1yA"; // Trato respetuoso y no discriminación

  return (
    <TopicLayout
      numero="16"
      title="Ética, Valores y Atención Inclusiva"
      intro="La atención al cliente no es solo una función operativa, sino una expresión directa de los valores éticos de la organización. Este tema analiza el trato respetuoso, la atención a la diversidad, la no discriminación y la coherencia entre los valores corporativos y el comportamiento profesional en la relación con los clientes."
    >
      {/* ============================= */}
      {/* SECCIÓN 1: Fundamentos éticos */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1. Ética profesional en atención al cliente</h2>
          <span className="topic-section__meta">Marco ético y responsabilidad social</span>
        </div>

        <p>
          La <strong>ética profesional</strong> en atención al cliente se refiere al conjunto de principios y valores
          que guían la conducta del profesional en su relación con las personas usuarias. Cada interacción representa
          a la empresa y contribuye a construir —o deteriorar— su reputación.
        </p>

        <p>
          Actuar éticamente implica ir más allá del cumplimiento de normas: supone asumir la responsabilidad de ofrecer
          un trato justo, honesto y respetuoso, incluso cuando existen presiones comerciales, conflictos o situaciones
          difíciles.
        </p>

        <div className="callout callout--tip">
          <div className="callout-title">🧠 Idea clave</div>
          <p>
            La ética no es opcional ni circunstancial: es una competencia profesional que garantiza confianza y
            sostenibilidad en la relación con el cliente.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2: Valores aplicados */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2. Valores fundamentales en la atención al cliente</h2>
          <span className="topic-section__meta">Conductas observables</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>2.1. Respeto y dignidad de la persona</summary>
            <div className="topic-details__content">
              <p>
                El respeto implica reconocer al cliente como una persona con derechos, necesidades y expectativas
                legítimas. Supone evitar cualquier forma de trato despectivo, condescendiente o impersonal.
              </p>

              <ul className="checklist">
                <li>Uso de un lenguaje adecuado, claro y educado.</li>
                <li>Escucha activa sin interrupciones ni juicios.</li>
                <li>Trato igualitario, independientemente de la situación del cliente.</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Honestidad y transparencia</summary>
            <div className="topic-details__content">
              <p>
                La honestidad se traduce en ofrecer información veraz, completa y comprensible. Ocultar datos,
                generar expectativas irreales o prometer soluciones imposibles constituye una práctica no ética.
              </p>

              <div className="callout callout--example">
                <div className="callout-title">📌 Ejemplo</div>
                <p>
                  Informar de un plazo realista, aunque no sea el deseado por el cliente, refuerza la confianza
                  a largo plazo.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.3. Responsabilidad y coherencia corporativa</summary>
            <div className="topic-details__content">
              <p>
                La coherencia ética exige que el comportamiento del personal sea consistente con los valores
                que la empresa declara públicamente (misión, visión, códigos éticos).
              </p>

              <p>
                Cuando existe incoherencia entre el discurso corporativo y la práctica diaria, se produce una
                pérdida de credibilidad y reputación.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 3: Atención inclusiva */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Atención inclusiva y diversidad</h2>
          <span className="topic-section__meta">Igualdad de trato y accesibilidad</span>
        </div>

        <p>
          La <strong>atención inclusiva</strong> reconoce la diversidad de las personas usuarias y garantiza
          un trato equitativo, sin discriminación por razones de edad, género, origen, orientación sexual,
          discapacidad, nivel cultural o cualquier otra condición personal o social.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>Buenas prácticas</th>
              <th>Riesgo si se ignora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diversidad cultural</td>
              <td>Lenguaje claro, evitar estereotipos</td>
              <td>Malentendidos, trato desigual</td>
            </tr>
            <tr>
              <td>Discapacidad</td>
              <td>Accesibilidad, paciencia, apoyo</td>
              <td>Exclusión, vulneración de derechos</td>
            </tr>
            <tr>
              <td>Edad</td>
              <td>Adaptar ritmo y canal de comunicación</td>
              <td>Desatención, frustración</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--warning">
          <div className="callout-title">⚠️ Atención</div>
          <p>
            La discriminación, incluso no intencionada, puede tener consecuencias legales, reputacionales y éticas
            graves para la empresa.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 4: Vídeos relacionados */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Vídeos relacionados</h2>
          <span className="topic-section__meta">Refuerzo conceptual y práctico</span>
        </div>

        <div className="video-block">
          <div>
            <div className="video-title">🎥 Ética y valores en la atención al cliente</div>
            <div className="video-meta">
              Importancia del comportamiento ético y su impacto en la experiencia del cliente.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ETICA_ATENCION}`}
              title="Ética en atención al cliente"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div>
            <div className="video-title">🎥 Diversidad e inclusión en el servicio</div>
            <div className="video-meta">
              Cómo atender a personas diversas desde el respeto y la igualdad.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_DIVERSIDAD_INCLUSION}`}
              title="Atención inclusiva"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div>
            <div className="video-title">🎥 No discriminación y trato respetuoso</div>
            <div className="video-meta">
              Conductas profesionales para garantizar igualdad y dignidad.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_NO_DISCRIMINACION}`}
              title="No discriminación en atención al cliente"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 5: Debate */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Debate y reflexión ética</h2>
          <span className="topic-section__meta">Pensamiento crítico</span>
        </div>

        <div className="debate">
          <div className="debate-prompt">
            Un cliente se expresa de forma agresiva y discriminatoria hacia otro usuario o hacia el personal.
            La empresa defiende públicamente valores de respeto e inclusión.
          </div>

          <ol className="debate-questions">
            <li>¿Cómo debe actuar el profesional para ser coherente con los valores corporativos?</li>
            <li>¿Dónde están los límites entre empatía y tolerancia cero?</li>
            <li>¿Qué consecuencias puede tener una mala gestión ética de esta situación?</li>
          </ol>
        </div>
      </section>
    </TopicLayout>
  );
};

export default Tema16;
