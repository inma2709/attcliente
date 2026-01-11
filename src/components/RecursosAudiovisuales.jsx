import "./RecursosAudiovisuales.css";

const RecursosAudiovisuales = () => {
  const VIDEO_ID_1 = "5xGoNUkHpZQ";
  const VIDEO_ID_2 = "xOruWLZmVYM";

  return (
    <section className="container ra">
      <header className="card ra__hero">
        <h2 className="ra__title">Recursos audiovisuales (cierre de teoría)</h2>
        <p className="ra__lead">
          Estos vídeos se ven <strong>al final de la teoría</strong> y{" "}
          <strong>justo antes del debate</strong>. La idea es transformar la teoría
          en criterios prácticos: cómo pensar, cómo actuar y cómo mejorar.
        </p>

        <div className="divider" />

        <div className="ra__callout">
          <div className="ra__calloutTitle">🧭 Método de trabajo (rápido y efectivo)</div>
          <ul className="ra__list">
            <li><strong>Antes (2–3 min):</strong> responde a 3 preguntas guía.</li>
            <li><strong>Durante:</strong> apunta <strong>3 ideas clave</strong> + <strong>1 ejemplo</strong>.</li>
            <li><strong>Después (debate):</strong> conecta con un caso real y propone 1 mejora.</li>
          </ul>
        </div>
      </header>

      <div className="divider" />

      {/* ===================== VÍDEO 1 ===================== */}
      <article className="card ra__card">
        <div className="ra__badges">
          <span className="badge">Nivel: Inicial</span>
          <span className="badge">Encaja en: Tema 1 · Tema 4</span>
          <span className="badge">Objetivo: entender el rol</span>
        </div>

        <div className="divider" />

        <div className="ra__block">
          <h3 className="ra__h3">🎥 Vídeo 1 — Atención al cliente: escucha activa y factores clave</h3>
          <p className="ra__meta">Para consolidar lo aprendido en teoría antes del debate.</p>

          <div className="ra__panel">
            <div className="ra__panelTitle">📌 Conceptos que trabaja este vídeo</div>
            <ul className="ra__list">
              <li><strong>Escucha activa:</strong> comprender antes de responder; preguntar, reformular y confirmar.</li>
              <li><strong>Empatía profesional:</strong> validar emoción + orientar a solución (sin prometer lo imposible).</li>
              <li><strong>Primer contacto:</strong> tono, saludo, claridad y presencia crean confianza (o la rompen).</li>
              <li><strong>Actitud + solución:</strong> importa tanto el “qué” como el “cómo”.</li>
            </ul>
          </div>

          <div className="ra__panel ra__panel--soft">
            <div className="ra__panelTitle">🧠 Antes de ver (preguntas guía)</div>
            <ol className="ra__olist">
              <li>¿Qué hace que un cliente se sienta <strong>bien tratado</strong> incluso si hay un problema?</li>
              <li>¿En qué momento sueles “desconectar” al escuchar (queja, repetición, tono…)?</li>
              <li>Define atención al cliente en <strong>una frase</strong>.</li>
            </ol>
          </div>

          {/* Embed mejorado (misma clase global .embed + refuerzo CSS) */}
          <div className="embed ra__embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID_1}`}
              title="Atención al cliente — Escucha activa y factores clave"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="ra__link">
            Si no carga el vídeo:{" "}
            <a href={`https://www.youtube.com/watch?v=${VIDEO_ID_1}`} target="_blank" rel="noreferrer">
              Abrir en YouTube
            </a>
          </p>

          <div className="ra__panel">
            <div className="ra__panelTitle">✅ Mini-evidencia (2–4 min, antes del debate)</div>
            <ul className="ra__list">
              <li>Escribe 3 ideas clave (en tus palabras).</li>
              <li>Marca 1 conducta que puedas aplicar mañana (reformular, confirmar, preguntar).</li>
              <li>Cierra: <em>“El cliente necesita sentir…”</em></li>
            </ul>
          </div>

          <div className="ra__panel ra__panel--soft">
            <div className="ra__panelTitle">💬 Debate tras el vídeo (8–10 min)</div>
            <ol className="ra__olist">
              <li>¿Qué pesa más: <strong>la solución</strong> o <strong>la forma</strong>? Pon un ejemplo real.</li>
              <li>Errores comunes de “falsa escucha” (interrumpir, justificar, minimizar…)</li>
              <li>Propón 2 frases profesionales para un cliente molesto (empatía sin prometer lo imposible).</li>
            </ol>
          </div>
        </div>
      </article>

      <div className="divider" />

      {/* ===================== VÍDEO 2 ===================== */}
      <article className="card ra__card">
        <div className="ra__badges">
          <span className="badge">Nivel: Inicial–Medio</span>
          <span className="badge">Encaja en: Tema 16 · Refuerza 4 y 14</span>
          <span className="badge">Objetivo: pensar como cliente</span>
        </div>

        <div className="divider" />

        <div className="ra__block">
          <h3 className="ra__h3">🎥 Vídeo 2 — Momentos de verdad: experiencia del cliente (CX)</h3>
          <p className="ra__meta">Para entender por qué el cliente recuerda “cómo le hiciste sentir”.</p>

          <div className="ra__panel">
            <div className="ra__panelTitle">📌 Conceptos que trabaja este vídeo</div>
            <ul className="ra__list">
              <li><strong>CX:</strong> suma de percepciones durante toda la relación.</li>
              <li><strong>Momentos de verdad:</strong> instantes críticos donde se gana o se pierde confianza.</li>
              <li><strong>Expectativa vs percepción:</strong> la comparación que define satisfacción o frustración.</li>
              <li><strong>Customer Journey:</strong> pasos del viaje (antes/durante/después) donde diseñar excelencia.</li>
            </ul>
          </div>

          <div className="ra__panel ra__panel--soft">
            <div className="ra__panelTitle">🧠 Antes de ver (preguntas guía)</div>
            <ol className="ra__olist">
              <li>Piensa en una marca que recomiendas: ¿qué “momento” generó confianza?</li>
              <li>¿Qué tolera menos un cliente: error <strong>técnico</strong> o error de <strong>trato</strong>?</li>
              <li>En una queja, ¿qué busca primero: solución, explicación o reconocimiento?</li>
            </ol>
          </div>

          <div className="embed ra__embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID_2}`}
              title="Momentos de Verdad — Experiencia del Cliente (CX)"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="ra__link">
            Si no carga el vídeo:{" "}
            <a href={`https://www.youtube.com/watch?v=${VIDEO_ID_2}`} target="_blank" rel="noreferrer">
              Abrir en YouTube
            </a>
          </p>

          <div className="ra__panel">
            <div className="ra__panelTitle">🧩 Actividad (8–10 min, justo tras el vídeo)</div>
            <p className="muted">
              Completa el mapa rápido de “momentos de verdad” para una empresa conocida. Esto será la base del debate.
            </p>

            <table className="table ra__table">
              <thead>
                <tr>
                  <th>Paso del viaje</th>
                  <th>Expectativa</th>
                  <th>Momento de verdad</th>
                  <th>Qué haría “excelencia”</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primer contacto</td>
                  <td>Rapidez y amabilidad</td>
                  <td>Saludo + orientación</td>
                  <td>Acogida clara + propuesta de ayuda</td>
                </tr>
                <tr>
                  <td>Espera / cola</td>
                  <td>Que me informen</td>
                  <td>Tiempo + comunicación</td>
                  <td>Explicar tiempos + ofrecer alternativa</td>
                </tr>
                <tr>
                  <td>Incidencia</td>
                  <td>Que me tomen en serio</td>
                  <td>Escucha + solución</td>
                  <td>Empatía + solución + seguimiento</td>
                </tr>
              </tbody>
            </table>

            <p className="ra__note">
              Añade <strong>2 filas más</strong> con tu ejemplo (antes/durante/después).
            </p>
          </div>

          <div className="ra__panel ra__panel--soft">
            <div className="ra__panelTitle">💬 Debate tras el vídeo (10–12 min)</div>
            <ol className="ra__olist">
              <li>¿Cuál es el momento de verdad más determinante en tu sector? Justifica.</li>
              <li>¿Rapidez o calidad del trato? ¿Qué prefiere el cliente y por qué?</li>
              <li>Diseña una mejora de bajo coste (frase, gesto, señal, mensaje) que eleve la experiencia.</li>
              <li>¿Qué comportamiento “pequeño” es imperdonable en atención al cliente? ¿Por qué?</li>
            </ol>
          </div>

          <div className="ra__panel">
            <div className="ra__panelTitle">🎯 Cierre</div>
            <p>
              La excelencia se construye en detalles repetidos. Cada interacción es un <strong>momento de verdad</strong>.
            </p>
          </div>
        </div>
      </article>

      <div className="divider" />

      <div className="card ra__footer">
        <div className="ra__panelTitle">✅ Checklist final</div>
        <ul className="ra__list">
          <li>He respondido a las preguntas “antes de ver” (mínimo 2 por vídeo).</li>
          <li>He anotado 3 ideas clave por vídeo (en mis palabras).</li>
          <li>He identificado al menos 2 “momentos de verdad” en un ejemplo real.</li>
          <li>He propuesto 1 mejora concreta aplicable en el trabajo.</li>
          <li>He participado en el debate con un argumento y un ejemplo.</li>
        </ul>
      </div>
    </section>
  );
};

export default RecursosAudiovisuales;
