      {/* ============================= */}
      {/* SECCIÓN 7: La ética en ventas – UA */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>7. La ética en ventas: vender con integridad y honestidad</h2>
          <span className="topic-section__meta">Basado en <a href="https://expertodireccionventas.ua.es/la-etica-en-ventas-como-vender-con-integridad-y-honestidad/" target="_blank" rel="noopener noreferrer">Universidad de Alicante</a></span>
        </div>
        <div className="card card--muted">
          <h3>Resumen y puntos clave</h3>
          <ul>
            <li><strong>¿Qué es la ética en ventas?</strong> Actuar con honestidad, integridad y responsabilidad en todas las interacciones. No engañar, presionar ni manipular, sino informar con claridad y transparencia.</li>
            <li><strong>Construir confianza:</strong> La confianza es la base de la relación comercial. Se logra con honestidad, cumplimiento de promesas, respeto a la privacidad y evitando prácticas agresivas.</li>
            <li><strong>Beneficios de la ética en ventas:</strong> Fidelización, reputación positiva, mayor satisfacción del cliente y reducción de conflictos.</li>
            <li><strong>Cómo fomentar una cultura ética:</strong> Formación en valores, establecer metas realistas y reconocer a quienes actúan con integridad.</li>
            <li><strong>Conclusión:</strong> La ética en ventas es esencial para el éxito sostenible. Vender con integridad beneficia a clientes, empresa y sociedad, y genera una ventaja competitiva real.</li>
          </ul>
        </div>
        <div className="callout callout--tip">
          <h4 className="callout-title">📝 Para reflexionar</h4>
          <p>
            ¿Has vivido o presenciado alguna vez una venta poco ética? ¿Cómo afectó a tu confianza en la empresa? ¿Qué harías diferente como profesional?
          </p>
          </div>
          <div className="callout callout--activity" style={{marginTop: '1.5em'}}>
            <h4 className="callout-title">💬 Debate: Ética vs. Objetivos</h4>
            <ul>
              <li>¿Dónde crees que está el límite entre actuar éticamente y cumplir los objetivos que te exige la empresa?</li>
              <li>¿Qué consecuencias puede tener para un profesional negarse a realizar prácticas poco éticas, aunque eso implique no alcanzar los objetivos?</li>
              <li>¿Cómo afectan las presiones comerciales a la toma de decisiones éticas en el día a día?</li>
              <li>¿Es posible mantener la integridad personal en un entorno de alta presión comercial? ¿Qué estrategias propondrías?</li>
              <li>¿Crees que las empresas deberían priorizar la ética sobre los resultados a corto plazo? ¿Por qué?</li>
            </ul>
          </div>
        </section>
import TopicLayout from "../../components/TopicLayout";

const Tema16 = () => {
  // Vídeos relacionados (YouTube)
  const VIDEO_ETICA_ATENCION = "wTC6pXVciRY"; // Principios éticos en atención al cliente
  const VIDEO_DIVERSIDAD_INCLUSION = "rR1yTtO-edg"; // Prácticas inclusivas
  const VIDEO_NO_DISCRIMINACION = "ptwCKGvJOYE"; // No discriminación

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

        {/* ============================= */}
        {/* SECCIÓN 6: Debate Ética vs Objetivos */}
        {/* ============================= */}
        <section className="topic-section">
          <div className="topic-section__title">
            <h2>6. Debate: Ética personal vs. Objetivos empresariales</h2>
            <span className="topic-section__meta">Dilemas reales en la atención al cliente</span>
          </div>

          <div className="debate">
            <div className="debate-prompt">
              Imagina que trabajas en una empresa donde los objetivos comerciales (ventas, tiempos de respuesta, retención) son muy exigentes.<br />
              Sin embargo, como profesional, tienes claro que la ética y el trato justo al cliente son irrenunciables.<br />
              <strong>¿Qué harías si tu jefe te exige priorizar el cumplimiento de objetivos aunque implique actuar en contra de tus valores éticos?</strong>
            </div>
            <ol className="debate-questions">
              <li>¿Hasta dónde es aceptable "seguir órdenes" si van en contra de la ética profesional?</li>
              <li>¿Qué riesgos existen para la empresa y para ti si decides actuar éticamente aunque incumplas objetivos?</li>
              <li>¿Cómo se puede negociar o argumentar ante la dirección para defender la ética sin perder el empleo?</li>
            </ol>
          </div>

          <div className="card card--muted" style={{marginTop: '1.5em'}}>
            <h3>Ejemplos reales de dilemas éticos</h3>
            <ul>
              <li><strong>Venta de productos innecesarios:</strong> Bancos que presionan para vender seguros o productos financieros a clientes que no los necesitan, solo para cumplir objetivos.</li>
              <li><strong>Ocultar información relevante:</strong> Empresas de telecomunicaciones que no informan de penalizaciones por baja anticipada para evitar perder una venta.</li>
              <li><strong>Atención "exprés":</strong> Call centers que exigen cerrar llamadas en menos de 3 minutos, aunque el cliente no haya resuelto su problema.</li>
              <li><strong>Manipulación de encuestas:</strong> Pedir al cliente que valore con la máxima puntuación bajo presión, para no afectar los indicadores del agente.</li>
              <li><strong>Negativa a gestionar reclamaciones:</strong> Instrucciones de "no tramitar" ciertas quejas para no aumentar estadísticas negativas.</li>
            </ul>
          </div>

        </section>
      {/* Cierre correcto de TopicLayout y componente */}
    </TopicLayout>
  );
};

export default Tema16;
