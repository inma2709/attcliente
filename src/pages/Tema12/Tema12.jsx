/**
 * Tema12.jsx — Detección de necesidades y evaluación de la satisfacción
 * NIVEL: Universitario / Ciclos superiores
 *
 * ⚠️ IMPORTANTE
 * Este tema deja un HUECO explícito para integrar la sección ya desarrollada:
 * 👉 “2.5 Indicadores de satisfacción al cliente (CSAT, NPS, CES…)”
 * (señalado claramente más abajo para que puedas pegarla tal cual).
 *
 * Estructura coherente con el resto del manual:
 * - Teoría profunda
 * - Enfoque estratégico + operativo
 * - Herramientas reales
 * - Actividades y autoevaluación
 */

import TopicLayout from "../../components/TopicLayout";

const Tema12 = () => {
  return (
    <TopicLayout
      numero="12"
      title="Detección de necesidades y evaluación de la satisfacción"
      intro="La atención al cliente profesional no se basa en suposiciones, sino en datos. Detectar necesidades reales y evaluar la satisfacción permite diseñar mejores servicios, reducir errores, anticipar conflictos y fidelizar clientes. En este tema se analizan las herramientas, métodos y sistemas que convierten la experiencia del cliente en información útil para la toma de decisiones."
      objetivos={[
        "Comprender la relación entre necesidades del cliente y satisfacción.",
        "Identificar herramientas para medir la satisfacción del cliente.",
        "Diseñar encuestas eficaces y sin sesgo.",
        "Analizar resultados para la mejora continua.",
        "Entender el CRM como instrumento estratégico de gestión.",
        "Interpretar indicadores de satisfacción en contextos reales."
      ]}
      icon="📊"
    >
      {/* =========================
          1. MARCO CONCEPTUAL
      ========================== */}
      <section className="topic-section" id="marco-conceptual">
        <div className="topic-section__title">
          <h2>1. Detección de necesidades y satisfacción del cliente</h2>
          <span className="topic-section__meta">Base conceptual · Calidad · Experiencia del cliente</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>Relación entre necesidades, expectativas y satisfacción</summary>
            <div className="topic-details__content">
              <p>
                La satisfacción del cliente no depende únicamente del producto o servicio,
                sino de la <strong>comparación entre lo que esperaba y lo que realmente percibe</strong>.
                Esta comparación se construye sobre tres elementos clave:
              </p>

              <ul>
                <li>
                  <strong>Necesidades:</strong> lo que el cliente realmente requiere (a veces no lo expresa claramente).
                </li>
                <li>
                  <strong>Expectativas:</strong> lo que cree que va a recibir según experiencias previas, publicidad o reputación.
                </li>
                <li>
                  <strong>Percepción:</strong> cómo valora lo que ha recibido en la práctica.
                </li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  No basta con “hacerlo bien”: hay que hacerlo de forma que el cliente lo
                  <strong> perciba como valioso, fácil y coherente</strong> con lo que esperaba.
                </p>
              </div>

              <h4>Por qué detectar necesidades es previo a medir satisfacción</h4>
              <ul className="checklist">
                <li>Evita soluciones estándar que no encajan con el cliente real.</li>
                <li>Reduce reclamaciones por expectativas mal gestionadas.</li>
                <li>Permite personalizar la atención y el servicio.</li>
                <li>Da sentido a los indicadores (medir sin contexto no sirve).</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          2. HERRAMIENTAS PARA MEDIR SATISFACCIÓN
      ========================== */}
      <section className="topic-section" id="herramientas">
        <div className="topic-section__title">
          <h2>2. Herramientas para medir la satisfacción del cliente</h2>
          <span className="topic-section__meta">Métodos · Canales · Sistemas de recogida de datos</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Herramientas cuantitativas y cualitativas</summary>
            <div className="topic-details__content">
              <p>
                La evaluación de la satisfacción combina herramientas
                <strong> cuantitativas</strong> (números, escalas, ratios)
                y <strong>cualitativas</strong> (opiniones, textos, comentarios).
                Ambas son necesarias para una visión completa.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Herramienta</th>
                    <th>Qué aporta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cuantitativa</td>
                    <td>Encuestas cerradas</td>
                    <td>Comparación objetiva, evolución en el tiempo</td>
                  </tr>
                  <tr>
                    <td>Cuantitativa</td>
                    <td>Indicadores (CSAT, NPS…)</td>
                    <td>Control del rendimiento y la calidad</td>
                  </tr>
                  <tr>
                    <td>Cualitativa</td>
                    <td>Preguntas abiertas</td>
                    <td>Comprensión profunda del “por qué”</td>
                  </tr>
                  <tr>
                    <td>Cualitativa</td>
                    <td>Entrevistas / feedback directo</td>
                    <td>Detección de necesidades latentes</td>
                  </tr>
                  <tr>
                    <td>Indirecta</td>
                    <td>Reclamaciones / reseñas</td>
                    <td>Señales reales de insatisfacción</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Advertencia</h4>
                <p>
                  Una empresa que solo mide números pierde el contexto.
                  Una empresa que solo escucha opiniones pierde la perspectiva global.
                  La calidad surge del <strong>equilibrio entre ambas</strong>.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          3. DISEÑO DE ENCUESTAS
      ========================== */}
      <section className="topic-section" id="encuestas">
        <div className="topic-section__title">
          <h2>3. Diseño de encuestas de satisfacción</h2>
          <span className="topic-section__meta">Metodología · Fiabilidad · Ética</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Principios para un diseño eficaz</summary>
            <div className="topic-details__content">
              <ul className="checklist">
                <li>Claridad: preguntas simples y comprensibles.</li>
                <li>Brevedad: pocas preguntas bien elegidas.</li>
                <li>Neutralidad: evitar inducir respuestas.</li>
                <li>Momento adecuado: justo tras la experiencia.</li>
                <li>Canal coherente: email, SMS, web, QR, chat.</li>
              </ul>

              <h4>Errores frecuentes en encuestas</h4>
              <ul>
                <li>Preguntas dobles (“¿fue rápido y amable?”).</li>
                <li>Encuestas demasiado largas.</li>
                <li>Recoger datos y no actuar.</li>
                <li>Usarlas para “controlar” al personal en vez de mejorar procesos.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Enfoque correcto</h4>
                <p>
                  Una encuesta no es un examen para el cliente ni para el trabajador,
                  es una <strong>herramienta de aprendizaje organizativo</strong>.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          4. HUECO PARA INDICADORES
      ========================== */}
     

        {/* =========================
   2.5 Indicadores de satisfacción al cliente
   ========================= */}
<section className="topic-section" id="indicadores-satisfaccion">
  <div className="topic-section__title">
    <h2>4. Indicadores de satisfacción al cliente (CSAT, NPS y otros)</h2>
    
  </div>

  <div className="topic-accordion">
    <details className="topic-details" open>
      <summary>¿Qué son los indicadores de satisfacción y por qué son imprescindibles?</summary>
      <div className="topic-details__content">
        <p>
          Los <strong>indicadores de satisfacción al cliente</strong> son medidas que permiten
          <strong> cuantificar</strong> cómo percibe el cliente el servicio recibido (trato, tiempos, solución,
          claridad, facilidad, profesionalidad). Sin indicadores, la atención al cliente se gestiona “a ojo”:
          se toman decisiones por intuición, se discute por opiniones y se corrigen problemas tarde.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🎯 Idea clave</h4>
          <p>
            Medir satisfacción no es “poner notas”: es <strong>detectar fallos</strong>, <strong>priorizar mejoras</strong> y
            demostrar con datos si la experiencia del cliente está subiendo o bajando.
          </p>
        </div>

        <h4>¿Qué consigue una empresa cuando mide satisfacción?</h4>
        <ul className="checklist">
          <li>
            <strong>Reduce la “no calidad”</strong>: menos reclamaciones, menos re-trabajo, menos devoluciones.
          </li>
          <li>
            <strong>Mejora la fidelización</strong>: un cliente satisfecho repite y recomienda.
          </li>
          <li>
            <strong>Detecta puntos críticos</strong>: qué canal falla, qué producto genera más incidencias, qué fase del proceso causa frustración.
          </li>
          <li>
            <strong>Gestiona la calidad</strong>: fija objetivos (SLA), evalúa equipos y entrena habilidades.
          </li>
          <li>
            <strong>Evita decisiones erróneas</strong>: no todo “ruido” significa problema real, y no todo “silencio” significa que todo va bien.
          </li>
        </ul>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Atención</h4>
          <p>
            Un cliente que no se queja no siempre está satisfecho: a veces simplemente <strong>se va</strong>.
            Por eso medir es vital: te avisa antes de que la pérdida sea irreversible.
          </p>
        </div>
      </div>
    </details>

    <details className="topic-details">
      <summary>Los 3 indicadores “núcleo” en atención al cliente: CSAT, NPS y CES</summary>
      <div className="topic-details__content">
        <p>
          En atención al cliente se suelen usar tres indicadores principales porque miden dimensiones distintas:
          <strong> satisfacción inmediata (CSAT)</strong>, <strong>lealtad/recomendación (NPS)</strong> y
          <strong> esfuerzo percibido (CES)</strong>.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Qué mide</th>
              <th>Pregunta típica</th>
              <th>Cuándo usarlo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CSAT</strong></td>
              <td>La satisfacción inmediata tras una interacción</td>
              <td>“¿Qué tan satisfecho/a estás con la atención recibida?”</td>
              <td>Después de una llamada, chat, email o resolución de ticket</td>
            </tr>
            <tr>
              <td><strong>NPS</strong></td>
              <td>La probabilidad de recomendar (lealtad)</td>
              <td>“Del 0 al 10, ¿recomendarías la empresa a un amigo?”</td>
              <td>Encuestas periódicas, tras compras o experiencias completas</td>
            </tr>
            <tr>
              <td><strong>CES</strong></td>
              <td>El esfuerzo que tuvo que hacer el cliente</td>
              <td>“¿Qué tan fácil fue resolver tu problema?”</td>
              <td>Procesos donde la facilidad importa (devoluciones, soporte, incidencias)</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Regla práctica</h4>
          <p>
            Si quieres mejorar la atención diaria: <strong>CSAT</strong>.  
            Si quieres medir marca y fidelidad: <strong>NPS</strong>.  
            Si quieres reducir fricción en procesos: <strong>CES</strong>.
          </p>
        </div>

        <h4>¿Por qué no basta con “solo uno”?</h4>
        <ul>
          <li>
            Puedes tener <strong>CSAT alto</strong> (fueron amables) pero <strong>CES alto</strong> (le costó mucho resolver),
            y eso a medio plazo daña la fidelidad.
          </li>
          <li>
            Puedes tener <strong>NPS decente</strong>, pero un <strong>CSAT bajo</strong> en un canal concreto (p. ej. email)
            indica que ese canal está rompiendo la experiencia.
          </li>
        </ul>
      </div>
    </details>

    <details className="topic-details">
      <summary>CSAT: cómo se mide, cómo se calcula y cómo se interpreta (con buenas prácticas)</summary>
      <div className="topic-details__content">
        <p>
          <strong>CSAT</strong> (Customer Satisfaction Score) mide la satisfacción del cliente con una
          interacción concreta: atención en mostrador, llamada, email, chat o resolución de incidencia.
          Es ideal para controlar calidad operativa y detectar fallos rápidos.
        </p>

        <h4>Escalas habituales</h4>
        <ul>
          <li><strong>1 a 5</strong> (muy insatisfecho → muy satisfecho)</li>
          <li><strong>1 a 10</strong></li>
          <li><strong>Caritas</strong> (😊 😐 😞) para respuestas muy rápidas</li>
        </ul>

        <h4>Cómo se calcula (forma sencilla)</h4>
        <p>
          La fórmula más común es:
          <strong> %CSAT = (nº de respuestas “satisfecho/muy satisfecho” ÷ total de respuestas) × 100</strong>
        </p>

        <div className="callout callout--example">
          <h4 className="callout-title">🧾 Ejemplo</h4>
          <p>
            En una semana recibes 120 encuestas CSAT (escala 1–5).  
            Consideras “satisfacción” las respuestas 4 y 5.  
            Si 90 personas han marcado 4 o 5:  
            <strong>%CSAT = (90 / 120) × 100 = 75%</strong>
          </p>
        </div>

        <h4>Qué debes mirar además del número</h4>
        <ul className="checklist">
          <li><strong>CSAT por canal</strong>: chat vs teléfono vs email.</li>
          <li><strong>CSAT por motivo</strong>: devoluciones, incidencias, facturación, información.</li>
          <li><strong>CSAT por franja horaria</strong>: picos de trabajo suelen bajar la calidad.</li>
          <li><strong>Comentarios</strong>: el texto explica el “por qué” (más valioso que la nota).</li>
        </ul>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Error típico con CSAT</h4>
          <p>
            “Subimos CSAT porque somos más simpáticos” pero el cliente sigue teniendo el problema:
            el CSAT debe ir unido a <strong>resolución real</strong> y <strong>tiempos</strong>.
          </p>
        </div>

        <h4>Buenas prácticas para que CSAT sea fiable</h4>
        <ul>
          <li><strong>Pregunta inmediata</strong> tras la interacción (cuando lo tiene fresco).</li>
          <li><strong>Encuesta corta</strong>: 1 pregunta + 1 comentario opcional.</li>
          <li><strong>Muestra suficiente</strong>: no sacar conclusiones por 3 respuestas.</li>
          <li><strong>Neutralidad</strong>: evitar “¿Qué tan increíble fue…?” (sesga).</li>
          <li><strong>Acción</strong>: si el cliente marca bajo, activar seguimiento (llamada/ticket).</li>
        </ul>
      </div>
    </details>

    <details className="topic-details">
      <summary>NPS: promotores, pasivos y detractores (cálculo e interpretación)</summary>
      <div className="topic-details__content">
        <p>
          <strong>NPS</strong> (Net Promoter Score) mide la probabilidad de que el cliente recomiende la empresa.
          Es un indicador más “de marca y relación” que de una interacción puntual.
        </p>

        <h4>La pregunta NPS</h4>
        <div className="callout callout--example">
          <h4 className="callout-title">📌 Pregunta estándar</h4>
          <p>“Del 0 al 10, ¿qué probabilidad hay de que recomiendes nuestra empresa a un amigo o familiar?”</p>
        </div>

        <h4>Clasificación</h4>
        <ul>
          <li><strong>Promotores</strong>: 9–10</li>
          <li><strong>Pasivos</strong>: 7–8</li>
          <li><strong>Detractores</strong>: 0–6</li>
        </ul>

        <h4>Cómo se calcula</h4>
        <p>
          <strong>NPS = %Promotores − %Detractores</strong> (resultado entre -100 y +100)
        </p>

        <div className="callout callout--example">
          <h4 className="callout-title">🧾 Ejemplo</h4>
          <p>
            Responden 200 personas:  
            Promotores: 80 (40%) · Pasivos: 70 (35%) · Detractores: 50 (25%)  
            <strong>NPS = 40 − 25 = 15</strong>
          </p>
        </div>

        <h4>Cómo se interpreta de forma útil</h4>
        <ul className="checklist">
          <li><strong>Promotores</strong>: son tu “motor”: conviértelos en reseñas, casos de éxito, recomendaciones.</li>
          <li><strong>Pasivos</strong>: son frágiles: están bien, pero cualquier fallo los empuja a irse.</li>
          <li><strong>Detractores</strong>: son alarma: suelen tener dolor real (tiempo, trato, error, expectativas incumplidas).</li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Uso inteligente del NPS</h4>
          <p>
            NPS no sirve solo para “presumir” del número: sirve para <strong>encontrar causas</strong> y
            <strong> diseñar mejoras</strong>. Siempre acompáñalo de la pregunta:
            “¿Por qué has elegido esa puntuación?”
          </p>
        </div>
      </div>
    </details>

    <details className="topic-details">
      <summary>CES: medir el esfuerzo del cliente (la métrica que más reduce fricción)</summary>
      <div className="topic-details__content">
        <p>
          <strong>CES</strong> (Customer Effort Score) mide si al cliente le resultó fácil o difícil resolver su necesidad.
          Es clave porque en muchos sectores la fidelidad depende menos de “lo simpáticos que fuimos” y más de
          “<strong>lo fácil que se lo pusimos</strong>”.
        </p>

        <h4>Pregunta CES típica</h4>
        <div className="callout callout--example">
          <h4 className="callout-title">📌 Pregunta</h4>
          <p>“¿Qué tan fácil fue resolver tu solicitud con nosotros?” (Muy difícil ↔ Muy fácil)</p>
        </div>

        <h4>Qué revela CES (lo que otros no ven)</h4>
        <ul className="checklist">
          <li>Procesos confusos (devoluciones, cambios, garantías).</li>
          <li>Demasiados pasos o demasiada información requerida.</li>
          <li>Derivaciones repetidas (“te paso con otro departamento”).</li>
          <li>Falta de coherencia entre canales (en web te dicen una cosa y por teléfono otra).</li>
        </ul>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Señal de riesgo</h4>
          <p>
            Si tu CES es alto (cuesta mucho) aunque CSAT sea “aceptable”, estás creando clientes que
            <strong> se cansan</strong>. A corto plazo aguantan; a medio plazo desaparecen.
          </p>
        </div>

        <h4>Acciones típicas para mejorar CES</h4>
        <ul>
          <li>Reducir pasos y formularios.</li>
          <li>Explicar procesos con guías claras (FAQ + ejemplos + capturas).</li>
          <li>Evitar repetición de datos: integración CRM/ticket.</li>
          <li>Unificar criterios y respuestas (base de conocimiento).</li>
        </ul>
      </div>
    </details>

    <details className="topic-details">
      <summary>Otros indicadores complementarios: tiempos, resolución, recurrencia y reputación</summary>
      <div className="topic-details__content">
        <p>
          Además de CSAT/NPS/CES, una organización profesional mide la calidad con indicadores operativos y de reputación.
          No son “satisfacción pura”, pero la afectan directamente.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Qué mide</th>
              <th>Por qué importa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>FRT</strong> (First Response Time)</td>
              <td>Tiempo de primera respuesta</td>
              <td>Reduce ansiedad y abandono; marca expectativas</td>
            </tr>
            <tr>
              <td><strong>TTR</strong> (Time to Resolution)</td>
              <td>Tiempo hasta resolución</td>
              <td>Cuanto más tarda, más insatisfacción y reclamación</td>
            </tr>
            <tr>
              <td><strong>FCR</strong> (First Contact Resolution)</td>
              <td>Resolución en el primer contacto</td>
              <td>Si sube, baja el esfuerzo y sube satisfacción</td>
            </tr>
            <tr>
              <td><strong>Recontacto</strong></td>
              <td>Si el cliente vuelve por lo mismo</td>
              <td>Indica mala solución, explicación insuficiente o fallos de proceso</td>
            </tr>
            <tr>
              <td><strong>Tasa de quejas</strong></td>
              <td>Reclamaciones por volumen de clientes</td>
              <td>Señal de alerta de no calidad</td>
            </tr>
            <tr>
              <td><strong>Reseñas / reputación</strong></td>
              <td>Valoración pública (opinión externa)</td>
              <td>Afecta captación y confianza; exige respuesta profesional</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--tip">
          <h4 className="callout-title">🔍 Conexión importante</h4>
          <p>
            Muchas veces la satisfacción no baja por “trato”, sino por <strong>tiempos</strong>,
            <strong> falta de resolución</strong> o <strong>inconsistencias</strong>.
            Por eso conviene medir satisfacción + operación.
          </p>
        </div>
      </div>
    </details>

    <details className="topic-details">
      <summary>Cómo diseñar encuestas sin sesgo: preguntas, momento, canal y muestra</summary>
      <div className="topic-details__content">
        <p>
          Para que un indicador sea útil, debe ser <strong>fiable</strong>. Esto depende de
          cómo preguntas, a quién, cuándo y por qué canal.
        </p>

        <h4>Principios para encuestas efectivas</h4>
        <ul className="checklist">
          <li><strong>Brevedad:</strong> 1 pregunta principal + comentario opcional.</li>
          <li><strong>Claridad:</strong> evitar preguntas dobles (“¿fue rápido y amable?”).</li>
          <li><strong>Neutralidad:</strong> no sugerir la respuesta (“excelente”, “perfecto”…).</li>
          <li><strong>Momento correcto:</strong> justo tras la interacción (CSAT/CES) o periódico (NPS).</li>
          <li><strong>Canal adecuado:</strong> email, SMS, pop-up, QR en mostrador, mensaje post-chat.</li>
          <li><strong>Muestra suficiente:</strong> evitar conclusiones con pocos datos.</li>
        </ul>

        <h4>Pregunta abierta: el “oro” del análisis</h4>
        <p>
          Una pregunta abierta bien diseñada permite entender causas:
        </p>
        <div className="callout callout--example">
          <h4 className="callout-title">🗣️ Ejemplos</h4>
          <ul>
            <li>“¿Qué podríamos mejorar?”</li>
            <li>“¿Qué fue lo mejor de la atención?”</li>
            <li>“¿Qué te faltó para puntuar más alto?”</li>
          </ul>
        </div>

        <div className="callout callout--warning">
          <h4 className="callout-title">🚫 Lo que no conviene hacer</h4>
          <p>
            Encuestas largas y repetidas. Si saturas, responden menos y responden peor.
            Mejor pocas, bien diseñadas y con acciones visibles.
          </p>
        </div>
      </div>
    </details>

    <details className="topic-details">
      <summary>Cómo convertir indicadores en mejora real: del dato a la acción</summary>
      <div className="topic-details__content">
        <p>
          Medir solo tiene sentido si se usa para mejorar. El paso clave es convertir números en
          <strong>decisiones y hábitos</strong>.
        </p>

        <h4>Proceso práctico de mejora continua (ciclo corto)</h4>
        <ol>
          <li><strong>Recoger:</strong> datos por canal y motivo (CSAT/NPS/CES + tiempos).</li>
          <li><strong>Detectar:</strong> qué baja (por canal, franja, agente, tipo de incidencia).</li>
          <li><strong>Buscar causa:</strong> ¿falta info? ¿proceso largo? ¿error repetido? ¿formación?</li>
          <li><strong>Acción:</strong> plantilla, guía, automatización, cambio de proceso, refuerzo de personal.</li>
          <li><strong>Verificar:</strong> comparar antes/después en 2–4 semanas.</li>
          <li><strong>Estandarizar:</strong> si funciona, convertirlo en norma (base de conocimiento, checklist, protocolo).</li>
        </ol>

        <div className="callout callout--case">
          <h4 className="callout-title">📌 Caso típico</h4>
          <p>
            Baja CSAT en “devoluciones” + sube CES: el cliente siente que cuesta mucho.  
            Acción: simplificar pasos, crear guía visual, automatizar confirmación y mejorar seguimiento.  
            Resultado esperado: sube CES (más fácil) y sube CSAT (mejor experiencia).
          </p>
        </div>

        <h4>Qué indicadores conviene revisar en reunión de equipo</h4>
        <ul className="checklist">
          <li>CSAT por canal + comentarios más repetidos.</li>
          <li>NPS mensual + motivos de detractores.</li>
          <li>CES en procesos críticos (devoluciones, incidencias).</li>
          <li>FRT y TTR (tiempos) + tasa de recontacto.</li>
          <li>Top 5 motivos de contacto (para crear FAQ o automatización).</li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Enfoque profesional</h4>
          <p>
            Un indicador no “culpa” a personas: señala dónde el sistema falla. La mejora real combina
            <strong> formación</strong> + <strong>procesos</strong> + <strong>herramientas</strong>.
          </p>
        </div>
      </div>
    </details>

    <details className="topic-details">
      <summary>Actividad práctica + mini test (para cerrar el epígrafe)</summary>
      <div className="topic-details__content">
        <div className="callout callout--activity">
          <h4 className="callout-title">🧩 Actividad</h4>
          <p>
            Diseña un cuadro de mando básico para una empresa con 3 canales (teléfono, email, chat). Incluye:
          </p>
          <ul>
            <li><strong>CSAT</strong> por canal.</li>
            <li><strong>FRT</strong> (primera respuesta) y <strong>TTR</strong> (resolución).</li>
            <li><strong>FCR</strong> (resolución al primer contacto).</li>
            <li>Una pregunta abierta para capturar “por qué”.</li>
          </ul>
          <p className="muted">
            Bonus: añade qué acción harías si baja el CSAT en email pero sube el volumen de tickets.
          </p>
        </div>

        <div className="divider" />

        <h4>Mini test rápido</h4>
        <ol>
          <li>¿Qué mide CSAT y cuándo se recomienda aplicarlo?</li>
          <li>¿Cómo se calcula NPS?</li>
          <li>¿Qué revela CES que a veces no revela CSAT?</li>
          <li>Nombra 3 indicadores operativos que influyen en satisfacción.</li>
          <li>¿Por qué es clave añadir una pregunta abierta?</li>
        </ol>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Resultado esperado</h4>
          <p>
            Si puedes explicar la diferencia entre CSAT/NPS/CES, diseñar una encuesta breve sin sesgo y proponer acciones
            a partir de datos, dominas este epígrafe.
          </p>
        </div>
      </div>
    </details>
  </div>
</section>

      

      {/* =========================
          5. ANÁLISIS DE RESULTADOS
      ========================== */}
      <section className="topic-section" id="analisis">
        <div className="topic-section__title">
          <h2>5. Análisis e interpretación de resultados</h2>
          <span className="topic-section__meta">Datos · Decisión · Mejora continua</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Del dato a la decisión</summary>
            <div className="topic-details__content">
              <p>
                Analizar resultados implica <strong>interpretar</strong>, no solo observar.
                Un indicador bajo no es un fracaso: es una señal.
              </p>

              <h4>Claves de análisis eficaz</h4>
              <ul className="checklist">
                <li>Comparar en el tiempo (tendencias).</li>
                <li>Segmentar por canal, motivo o perfil.</li>
                <li>Cruzar satisfacción con tiempos y resolución.</li>
                <li>Buscar causas, no culpables.</li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">📊 Ejemplo</h4>
                <p>
                  CSAT bajo en email + alto volumen de tickets → problema de saturación o falta de plantillas.
                  La acción no es exigir “mejor actitud”, sino mejorar proceso y recursos.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          6. CRM COMO INSTRUMENTO DE GESTIÓN
      ========================== */}
      <section className="topic-section" id="crm">
        <div className="topic-section__title">
          <h2>6. Uso del CRM como instrumento de gestión</h2>
          <span className="topic-section__meta">Sistema · Seguimiento · Estrategia</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Qué es un CRM y por qué es clave</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>CRM (Customer Relationship Management)</strong> es un sistema que centraliza
                la información del cliente y permite una atención coherente, personalizada y medible.
              </p>

              <h4>Qué aporta el CRM a la satisfacción</h4>
              <ul className="checklist">
                <li>Historial completo de interacciones.</li>
                <li>Seguimiento de incidencias y compromisos.</li>
                <li>Visión omnicanal del cliente.</li>
                <li>Datos para análisis e indicadores.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Clave estratégica</h4>
                <p>
                  El CRM no mejora la atención por sí solo: mejora cuando se usa como
                  <strong> herramienta de trabajo real</strong>, no como simple archivo.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
 {/* =========================
          SECCIÓN VÍDEOS
         ========================= */}
      <section className="topic-section">
        <h2>Recursos audiovisuales</h2>

        <div className="video-block">
          <div className="video-title">Vídeo 1 — (pendiente de enlace)</div>
          <p className="video-meta muted">Objetivo: reforzar los conceptos de información vs. comunicación y feedback.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/Hq9nyBe5LXU"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
          <div className="video-block">
          <div className="video-title">Vídeo 2 — (pendiente de enlace)</div>
          <p className="video-meta muted">Objetivo: identificar barreras y canales; aplicar escucha activa.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/VNKutu5ptjo"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        </section>
      {/* =========================
          7. ACTIVIDADES Y AUTOEVALUACIÓN
      ========================== */}
      <section className="topic-section" id="actividades">
        <div className="topic-section__title">
          <h2>7. Actividades y autoevaluación</h2>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Actividad práctica</summary>
            <div className="topic-details__content">
              <p>
                Diseña un sistema de evaluación de satisfacción para una empresa de servicios que incluya:
              </p>
              <ul>
                <li>Una encuesta breve.</li>
                <li>Al menos dos indicadores.</li>
                <li>Un criterio de análisis.</li>
                <li>Una acción de mejora asociada.</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>Autoevaluación</summary>
            <div className="topic-details__content">
              <ol>
                <li>¿Por qué detectar necesidades es previo a medir satisfacción?</li>
                <li>¿Qué diferencia hay entre datos cuantitativos y cualitativos?</li>
                <li>¿Por qué un CRM es clave en la evaluación de la satisfacción?</li>
                <li>¿Qué riesgos tiene medir sin analizar?</li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Criterio de dominio</h4>
                <p>
                  Si puedes diseñar un sistema de medición, interpretar resultados y proponer mejoras,
                  dominas el Tema 12 a nivel profesional.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </TopicLayout>
  );
};

export default Tema12;
