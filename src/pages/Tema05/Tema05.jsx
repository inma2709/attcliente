import TopicLayout from '../../components/TopicLayout';

const Tema05 = () => {
  

  return (
    <>
      <TopicLayout
        numero="05"
        title="Comunicación presencial y habilidades sociales"
        intro="Técnicas de atención cara a cara, importancia del lenguaje no verbal, asertividad, empatía y escucha activa."
        icon="👥"
       
      />

  <figure className="media">
          <img
            src="/t5.png"
            alt="Comunicación presencial y habilidades sociales"
          />
          <figcaption>
           Técnicas de atención cara a cara, importancia del lenguaje no verbal, asertividad, empatía y escucha activa.
          </figcaption>
        </figure>
      {/* =========================
          SECCIÓN 5 · HABILIDADES CLAVE (TEMA EXTENSO + DIDÁCTICO)
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Habilidades clave: empatía, escucha activa y asertividad</h2>
       
        </div>

        <p>
          Estas tres habilidades funcionan como un “trípode” en atención al cliente: la <strong>empatía</strong>{" "}
          reduce tensión, la <strong>escucha activa</strong> evita malentendidos y la{" "}
          <strong>asertividad</strong> permite cumplir normas sin romper la relación. La clave no es “ser simpático”,
          sino <strong>comunicar con método</strong> y verificar que el mensaje se ha entendido.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧭 Objetivo práctico</h4>
          <p>
            Convertir una interacción presencial en un proceso controlado:{" "}
            <strong>acoger → comprender → responder → confirmar</strong>. Así disminuyen quejas, se gana confianza y
            se refuerza la imagen profesional.
          </p>
        </div>

        <div className="topic-accordion">
          {/* =====================================================
              EPÍGRAFE 5.1 · EMPATÍA
             ===================================================== */}
          <details className="topic-details" open>
            <summary>5.1 Empatía: reconocer emoción sin perder profesionalidad</summary>

            <div className="topic-details__content">
              <p>
                La empatía es la capacidad de “ponerse en el lugar del otro” para comprender sus necesidades y
                sentimientos. En atención al cliente no significa “dar la razón”, significa{" "}
                <strong>validar</strong> el impacto de lo ocurrido para que la conversación vuelva a ser resolutiva.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Frase útil</h4>
                <p>
                  “Entiendo que esto genere frustración. Vamos a ver la solución más rápida y clara.”
                </p>
              </div>

              <h4>Técnicas de empatía aplicadas (listas para usar)</h4>
              <ul className="checklist">
                <li>
                  <strong>Etiquetado emocional:</strong> nombra la emoción con respeto: “Entiendo que esto le preocupa / le molesta”.
                </li>
                <li>
                  <strong>Validación + enfoque:</strong> “Tiene sentido que le incomode. Vamos a revisarlo paso a paso”.
                </li>
                <li>
                  <strong>Disculpa funcional (si procede):</strong> “Lamento la situación; me encargo de solucionarlo”.
                </li>
                <li>
                  <strong>Acompañamiento:</strong> “Estoy con usted en esto”, “Lo resolvemos ahora”.
                </li>
                <li>
                  <strong>Evitar gatillos:</strong> cambia “Es lo que hay” por “Lo que puedo hacer en este caso es…”.
                </li>
                <li>
                  <strong>Empatía + control:</strong> “Entiendo el malestar. Le explico qué va a pasar y en qué plazo”.
                </li>
              </ul>

              <div className="divider" />

              <h4>Qué consigue la empatía (efecto observable)</h4>
              <ul className="checklist">
                <li>Reduce tensión y defensividad.</li>
                <li>Aumenta percepción de justicia y respeto.</li>
                <li>Mejora cooperación del cliente.</li>
                <li>Facilita que la solución sea aceptada.</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">🎯 Mini-guion en 2 pasos</h4>
                <p>
                  <strong>1) Reconozco:</strong> “Entiendo que esto le haya sentado mal”.<br />
                  <strong>2) Actúo:</strong> “Ahora reviso su caso y le doy una solución concreta con plazos”.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              EPÍGRAFE 5.2 · ESCUCHA ACTIVA
             ===================================================== */}
          <details className="topic-details">
            <summary>5.2 Escucha activa: técnica para evitar malentendidos</summary>

            <div className="topic-details__content">
              <p>
                La escucha activa es un <strong>esfuerzo físico, mental y emocional</strong> por captar la totalidad
                del mensaje: contenido, emoción e intención. No es “oír”; es comprobar que se entiende y que el cliente
                se siente entendido.
              </p>

              <h4>Técnicas base (operativas)</h4>
              <ul className="checklist">
                <li><strong>Parafraseo:</strong> “Si le he entendido bien, el problema es…”</li>
                <li><strong>Pregunta abierta:</strong> “¿Qué esperaba que ocurriera?”</li>
                <li><strong>Confirmación:</strong> “¿Es correcto?”</li>
                <li><strong>Cierre:</strong> “Entonces hoy queda así: … ¿Le parece bien?”</li>
              </ul>

              <div className="divider" />

              <h4>Técnicas ampliadas (muy útiles en cara a cara)</h4>
              <ul className="checklist">
                <li>
                  <strong>Resumir para alinear:</strong> “Le resumo: usted necesita A, ocurrió B y espera C. ¿Correcto?”
                </li>
                <li>
                  <strong>Solicitar ampliación:</strong> “¿Me puede dar un ejemplo concreto para entenderlo mejor?”
                </li>
                <li>
                  <strong>Verbalizar lo interpretado:</strong> “Si lo que le preocupa es el tiempo/importe, lo entiendo”.
                </li>
                <li>
                  <strong>Manejo de silencios:</strong> pausa breve para dejar espacio y no interrumpir.
                </li>
                <li>
                  <strong>Palabras de refuerzo:</strong> “Entiendo”, “De acuerdo”, “Perfecto, continúe”.
                </li>
                <li>
                  <strong>Preguntas de precisión:</strong> “¿Cuándo ocurrió?”, “¿En qué punto se bloqueó?”, “¿Qué mensaje apareció?”
                </li>
              </ul>

              <h4>Tipos de preguntas (para dirigir la interacción)</h4>
              <ul className="checklist">
                <li><strong>Cerradas:</strong> respuestas limitadas (“¿Sí o no?”) para confirmar datos.</li>
                <li><strong>Abiertas:</strong> permiten explicar y aportar contexto (“¿Qué ocurrió exactamente?”).</li>
                <li><strong>De confirmación:</strong> repites lo entendido (“Entonces, el cargo fue el martes, ¿correcto?”).</li>
                <li><strong>Retóricas:</strong> se usan con cuidado para enfatizar (“¿Quién quiere repetir una mala experiencia?”).</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Error típico</h4>
                <p>
                  “¿Alguna duda?” suele fallar porque invita al silencio. Mejor:
                  “Para confirmar que quedó claro, dígame con sus palabras cuál es el primer paso”.
                </p>
              </div>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Señal de buena escucha</h4>
                <p>
                  El cliente baja el tono y empieza a aportar datos útiles. Eso indica que se siente comprendido y que
                  la conversación vuelve a ser resolutiva.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              EPÍGRAFE 5.3 · ASERTIVIDAD
             ===================================================== */}
          <details className="topic-details">
            <summary>5.3 Asertividad: decir “no” sin romper la relación</summary>

            <div className="topic-details__content">
              <p>
                La asertividad consiste en expresar pensamientos, normas y límites de forma directa y respetuosa,
                sin agredir ni someterse. En atención al cliente es esencial para mantener calidad y evitar
                promesas imposibles.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Estilo</th>
                    <th>Cómo suena</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Agresivo</strong></td>
                    <td>“Eso no se puede y punto.”</td>
                    <td>Escala conflicto</td>
                  </tr>
                  <tr>
                    <td><strong>Pasivo</strong></td>
                    <td>“Bueno… ya veremos…”</td>
                    <td>Promesas ambiguas, frustración posterior</td>
                  </tr>
                  <tr>
                    <td><strong>Asertivo</strong></td>
                    <td>“No podemos hacerlo así, pero sí podemos ofrecerle estas opciones…”</td>
                    <td>Control + relación + solución</td>
                  </tr>
                </tbody>
              </table>

              <div className="divider" />

              <h4>Técnicas asertivas principales (según las fuentes)</h4>
              <ul className="checklist">
                <li>
                  <strong>Disco rayado:</strong> repite el límite con calma hasta acordar: “Entiendo. Aun así, la política indica…”.
                </li>
                <li>
                  <strong>Banco de niebla:</strong> reconoces parte de razón sin ceder el control: “Entiendo que lo vea así; revisemos las opciones”.
                </li>
                <li>
                  <strong>Asertividad negativa:</strong> reconoces un error de forma directa: “Tiene razón, aquí hubo un fallo y lo corrijo”.
                </li>
                <li>
                  <strong>Interrogación asertiva:</strong> pides aclaración para avanzar: “¿Qué parte fue la que le molestó más, el plazo o la forma?”
                </li>
                <li>
                  <strong>Compromiso viable:</strong> ambas partes ceden para un acuerdo posible: “No puedo X, pero sí puedo Y hoy”.
                </li>
              </ul>

              <h4>Técnicas extra (muy eficaces en atención al cliente)</h4>
              <ul className="checklist">
                <li>
                  <strong>Límite + razón breve + beneficio:</strong> “Por seguridad no puedo X. Así garantizamos Y”.
                </li>
                <li>
                  <strong>Alternativa cerrada:</strong> ofrece 2 opciones viables: “Podemos A o B, ¿cuál prefiere?”
                </li>
                <li>
                  <strong>Escalado responsable:</strong> “Lo elevo a supervisión con número de caso y respuesta en X horas”.
                </li>
                <li>
                  <strong>Evitar justificarse de más:</strong> explica lo justo y vuelve a la solución: “Entiendo. En este caso, la opción viable es…”
                </li>
              </ul>

              <div className="callout callout--activity">
                <h4 className="callout-title">✅ Micro-actividad</h4>
                <p>
                  Escribe 1 frase asertiva para un cliente que exige un reembolso fuera de plazo: incluye
                  <strong> respeto + norma + alternativa</strong>.
                </p>
              </div>

              <div className="callout callout--example">
                <h4 className="callout-title">🧩 Ejemplo modelo</h4>
                <p>
                  “Entiendo que quiera el reembolso. En este caso no puedo tramitarlo porque el plazo ya finalizó,
                  pero sí puedo ofrecerle un cambio o un vale por el importe. ¿Qué opción le encaja mejor?”
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              EPÍGRAFE 5.4 · CALIDAD ORAL Y FEEDBACK (PRESENCIAL)
             ===================================================== */}
          <details className="topic-details">
            <summary>5.4 Comunicación oral de calidad: claridad, tono, cortesía y verificación</summary>

            <div className="topic-details__content">
              <p>
                En comunicación presencial, el objetivo es que el mensaje sea <strong>comprendido</strong>. Para ello
                se recomiendan expresiones breves, lenguaje conciso y vocabulario accesible, adaptado al receptor.
                Además, el <strong>feedback</strong> (retroalimentación) permite corregir malentendidos al instante.
              </p>

              <h4>Claves de voz y lenguaje (qué cuidar)</h4>
              <ul className="checklist">
                <li><strong>Claridad y sencillez:</strong> evita tecnicismos; usa términos comunes.</li>
                <li><strong>Ritmo:</strong> no aceleres; separa ideas.</li>
                <li><strong>Volumen intermedio:</strong> sube ligeramente para enfatizar lo importante.</li>
                <li><strong>Pronunciación:</strong> aporta seguridad y evita confusiones.</li>
                <li><strong>Cortesía:</strong> se nota en el tono, no solo en las palabras.</li>
              </ul>

              <div className="divider" />

              <h4>Estructura recomendada de una intervención (3 pasos)</h4>
              <ol>
                <li><strong>Introducción:</strong> explica el motivo y qué se va a conseguir.</li>
                <li><strong>Desarrollo:</strong> orden lógico, pasos claros, datos concretos.</li>
                <li><strong>Conclusión:</strong> resumen + siguiente paso + confirmación.</li>
              </ol>

              <h4>Reglas de comunicación oral (evitar errores típicos)</h4>
              <ul className="checklist">
                <li><strong>Hablar en primera persona:</strong> “Yo puedo hacer…” en lugar de sentencias (“Esto es así y ya”).</li>
                <li><strong>Evitar negaciones innecesarias:</strong> cambia “No se puede” por “La opción viable es…”.</li>
                <li><strong>Evitar muletillas y vacilaciones:</strong> “Ehh… bueno…” reduce credibilidad.</li>
                <li><strong>No usar argot ni frases agresivas:</strong> cuida profesionalidad.</li>
                <li><strong>No crear “falsa confianza”:</strong> exceso de familiaridad puede molestar.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Verificación (feedback real)</h4>
                <p>
                  Mejor que “¿Alguna duda?”: <strong>“Para confirmar, dígame qué paso haría usted primero”</strong> o
                  <strong> “¿Qué opción prefiere: A o B?”</strong>.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              EPÍGRAFE 5.5 · INTERACCIÓN PRESENCIAL: FASES + PROTOCOLO
             ===================================================== */}
          <details className="topic-details">
            <summary>5.5 Interacción presencial: inicio, desarrollo y cierre (entrevista/recepción)</summary>

            <div className="topic-details__content">
              <p>
                En empresa, la comunicación presencial suele tener forma de “entrevista” o atención estructurada.
                Para que sea eficaz conviene seguir fases claras, que crean confianza, ordenan la conversación y
                aseguran un cierre correcto.
              </p>

              <h4>Fases de una entrevista o atención estructurada</h4>
              <ol>
                <li>
                  <strong>Inicio:</strong> saludo, presentación y explicación del motivo para crear clima de confianza.
                </li>
                <li>
                  <strong>Cuerpo central:</strong> recopilar información, aclarar necesidades, proponer opciones.
                </li>
                <li>
                  <strong>Cierre:</strong> resumen, acuerdo final, siguiente paso y despedida cordial.
                </li>
              </ol>

              <div className="divider" />

              <h4>Recepción de visitas (protocolo básico)</h4>
              <ul className="checklist">
                <li><strong>Recepción y acompañamiento:</strong> saludo, orientación, acompañar.</li>
                <li><strong>Gestión de la visita:</strong> respetar tiempos, documentación preparada.</li>
                <li><strong>Despedida:</strong> agradecer, acompañar a la salida, confirmar próximos pasos si aplica.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧩 Pauta rápida</h4>
                <p>
                  <strong>Saludo + motivo + objetivo</strong> al inicio, y al final{" "}
                  <strong>resumen + acuerdo + confirmación</strong>. Eso reduce reclamaciones posteriores.
                </p>
              </div>

              <div className="callout callout--activity">
                <h4 className="callout-title">✅ Micro-actividad</h4>
                <p>
                  Redacta un cierre profesional en 2 frases para una atención: 1) resumen, 2) siguiente paso con plazo.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              EPÍGRAFE 5.6 · VÍDEOS DE REFUERZO
             ===================================================== */}
          <details className="topic-details">
            <summary>5.6 🎥 Vídeos de refuerzo: empatía y escucha activa</summary>

            <div className="topic-details__content">
              <p className="muted">
                Vídeos en español para ver técnicas en acción. (Si quieres, los sustituyo por otros que ya uses en tu manual).
              </p>

              <div className="video-block">
                <h4 className="video-title">Empatía en servicio al cliente (validar sin ceder control)</h4>
                <p className="video-meta muted">
                  Objetivo: reconocer emoción + devolver la conversación al plan de solución.
                </p>
                <div className="embed">
                  <iframe
                    src="https://www.youtube.com/embed/NfYhBgjKV-0"
                    title="Empatía en atención al cliente"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="divider" />

              <div className="video-block">
                <h4 className="video-title">Escucha activa (parafraseo, preguntas y confirmación)</h4>
                <p className="video-meta muted">
                  Objetivo: evitar malentendidos y cerrar acuerdos claros.
                </p>
                <div className="embed">
                  <iframe
                    src="https://www.youtube.com/embed/JXowXT-Es-U"
                    title="Escucha activa en atención al cliente"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
                 <div className="video-block">
          <div className="video-title">Escucha, empatía y asertividad</div>
          <p className="video-meta muted">Objetivo: reforzar los conceptos de escucha, empatía y asertividad.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/8zdicRDLSDY"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
            </div>
          </details>
              

     
        {/* =========================
    SECCIÓN · EL PODER DEL SILENCIO EN LA NEGOCIACIÓN
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>El poder del silencio en la atención al cliente</h2>
  
  </div>

  <p>
    En una negociación (especialmente cara a cara), el silencio no es “vacío”: es una{" "}
    <strong>herramienta de comunicación</strong>. Bien usado, reduce tensión, mejora la escucha,
    aumenta la claridad y ayuda a que el cliente <strong>se autorregule</strong> (baje el tono, ordene ideas
    y concrete lo que realmente necesita).
  </p>

  <div className="callout callout--tip">
    <h4 className="callout-title">🧠 Idea clave</h4>
    <p>
      Quien tolera el silencio suele tener <strong>más control</strong> de la conversación. El silencio
      transmite calma, seguridad y autoridad sin elevar el conflicto.
    </p>
  </div>

  <div className="topic-accordion">
    {/* =====================================================
        1) POR QUÉ FUNCIONA
       ===================================================== */}
      
        
    <details className="topic-details">
    
      <summary>1. Por qué el silencio funciona (psicología práctica)</summary>
      <div className="topic-details__content">
        <p>
          Cuando dejamos un espacio de silencio, el cerebro del interlocutor “rellena” ese hueco:
          piensa, reformula y suele aportar información adicional. En negociación, esto es oro,
          porque permite que el cliente{" "}
          <strong>revele prioridades</strong> (precio vs. seguridad, urgencia vs. garantía, etc.).
        </p>

        <ul className="checklist">
          <li>
            <strong>Reduce tensión:</strong> baja el ritmo y evita respuestas impulsivas.
          </li>
          <li>
            <strong>Invita a concretar:</strong> el cliente amplía datos, matiza o se corrige.
          </li>
          <li>
            <strong>Refuerza tu profesionalidad:</strong> no “rellenas” con excusas o justificaciones.
          </li>
          <li>
            <strong>Aumenta percepción de control:</strong> transmites calma y seguridad.
          </li>
        </ul>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Cuidado</h4>
          <p>
            Silencio no es ignorar. Debe ir acompañado de <strong>lenguaje no verbal</strong> de escucha
            (mirada amable, postura abierta, asentir) para que no se interprete como desprecio.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        2) TIPOS DE SILENCIO ÚTILES
       ===================================================== */}
    <details className="topic-details">
      <summary>2. Tipos de silencio que te ayudan a negociar mejor</summary>
      <div className="topic-details__content">
        <h4>Silencio de escucha (2–4 segundos)</h4>
        <p>
          Tras una queja o una explicación emocional, no respondas en automático. Un breve silencio permite
          que el cliente se sienta escuchado y se calme. Después, respondes con empatía y plan.
        </p>

        <h4>Silencio de precisión (antes de preguntar)</h4>
        <p>
          Pausa un segundo y formula una pregunta clara. Evita preguntas atropelladas y demuestra control:
          “Déjeme entenderlo bien…” (pausa) “¿Cuándo ocurrió exactamente?”
        </p>

        <h4>Silencio de propuesta (después de ofrecer una solución)</h4>
        <p>
          Das la opción y <strong>callas</strong>. Esto evita que te “negocies a ti mismo” (añadir descuentos
          o concesiones innecesarias) y deja que el cliente procese y responda.
        </p>

        <h4>Silencio de límite (cuando el cliente presiona)</h4>
        <p>
          Tras marcar un límite asertivo, una pausa corta refuerza firmeza sin agresividad:
          “No puedo hacer X. Puedo ofrecer A o B.” (pausa) “¿Cuál prefiere?”
        </p>
      </div>
    </details>

    {/* =====================================================
        3) CÓMO USARLO PASO A PASO
       ===================================================== */}
    <details className="topic-details">
      <summary>3. Cómo usar el silencio paso a paso (método simple)</summary>
      <div className="topic-details__content">
        <ol>
          <li>
            <strong>Regula tu cuerpo:</strong> postura estable, hombros relajados, mirada amable (no desafiante).
          </li>
          <li>
            <strong>Marca intención:</strong> “Quiero entenderlo bien para solucionarlo.”
          </li>
          <li>
            <strong>Pausa breve:</strong> 2–4 segundos (sin mirar el móvil, sin gestos de impaciencia).
          </li>
          <li>
            <strong>Pregunta precisa:</strong> “¿Qué ocurrió primero?”, “¿Qué necesita hoy para quedarse tranquilo/a?”
          </li>
          <li>
            <strong>Propuesta + silencio:</strong> das la solución y esperas.
          </li>
          <li>
            <strong>Cierre con confirmación:</strong> “Entonces queda así… ¿lo confirmamos?”
          </li>
        </ol>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Regla de oro</h4>
          <p>
            Tras una propuesta, <strong>no añadas nada durante 3 segundos</strong>. Evita justificar de más
            o regalar concesiones por nervios.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        4) GUIONES LISTOS PARA USAR
       ===================================================== */}
    <details className="topic-details">
      <summary>4. Guiones cortos (silencio + frase) para situaciones reales</summary>
      <div className="topic-details__content">
        <h4>Cliente enfadado</h4>
        <p>
          “Entiendo.” <span className="muted">(pausa 2–3s)</span> “Cuénteme qué pasó desde el principio y lo resolvemos paso a paso.”
        </p>

        <h4>Cliente que interrumpe / no deja hablar</h4>
        <p>
          “Le escucho.” <span className="muted">(pausa 2s)</span> “Para ayudarle, necesito un dato: ¿cuándo hizo la compra?”
        </p>

        <h4>Negociación de precio</h4>
        <p>
          “Este precio incluye garantía y soporte.” <span className="muted">(pausa 3s)</span> “Si busca algo más ajustado, puedo ofrecerle esta alternativa.”
        </p>

        <h4>Cliente que exige algo imposible</h4>
        <p>
          “No puedo hacer X.” <span className="muted">(pausa 2–3s)</span> “Sí puedo ofrecerle A o B. ¿Qué opción prefiere?”
        </p>
      </div>
    </details>

    {/* =====================================================
        5) ERRORES TÍPICOS Y CÓMO EVITARLOS
       ===================================================== */}
    <details className="topic-details">
      <summary>5. Errores típicos (y cómo evitarlos)</summary>
      <div className="topic-details__content">
        <ul className="checklist">
          <li>
            <strong>Rellenar el silencio con excusas:</strong> debilita tu posición. Mejor: dato + solución + pausa.
          </li>
          <li>
            <strong>Silencio “castigo”:</strong> mirar con frialdad o cruzar brazos se interpreta como desprecio.
          </li>
          <li>
            <strong>Pausas demasiado largas:</strong> generan inseguridad. Mejor 2–4 segundos (o 3 tras una propuesta).
          </li>
          <li>
            <strong>Usarlo sin escuchar:</strong> el silencio sirve para entender, no para “ganar”.
          </li>
        </ul>

        <div className="callout callout--insight">
          <h4 className="callout-title">🎯 Cierre</h4>
          <p>
            El silencio bien usado es una forma de <strong>respeto</strong> y de <strong>control</strong>:
            te da tiempo para pensar, permite al cliente expresarse mejor y hace que tus propuestas
            suenen más firmes, claras y profesionales.
          </p>
        </div>
      </div>
    </details>
  </div>
</section>
{/* =========================
    SECCIÓN · COMUNICACIÓN NO VERBAL (MUY EXTENSA + DIDÁCTICA)
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>Comunicación no verbal en atención al cliente</h2>
   
  </div>

  <p>
    En atención al cliente, el mensaje no lo transmite solo lo que dices: lo transmite{" "}
    <strong>cómo lo dices</strong>. La comunicación no verbal (y paraverbal) actúa como un “segundo idioma”
    que el cliente interpreta de forma rápida e inconsciente para decidir tres cosas esenciales:
    <strong> si eres profesional</strong>, <strong>si puede confiar</strong> y <strong>si le estás respetando</strong>.
  </p>

  <div className="callout callout--insight">
    <h4 className="callout-title">🎯 Idea clave</h4>
    <p>
      El cliente puede olvidar tus palabras exactas, pero rara vez olvida{" "}
      <strong>cómo se sintió</strong> durante la interacción. Ese “cómo se sintió” lo decide, en gran parte,
      tu comunicación no verbal.
    </p>
  </div>

  {/* =========================
      VÍDEO (EMBEBIDO)
     ========================= */}
  <div className="video-block">
    <h4 className="video-title">Comunicación no verbal (en español)</h4>
    <p className="video-meta muted">
      Objetivo: entender cómo gestos, mirada, postura y tono influyen en la percepción del cliente.
    </p>
    <div className="embed">
      <iframe
        src="https://www.youtube.com/embed/uWQjJUfep9s"
        title="Comunicación no verbal - YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>

  <div className="divider" />

  <div className="topic-accordion">
    {/* =====================================================
        1) QUÉ ES Y POR QUÉ ES CRÍTICA EN ATENCIÓN AL CLIENTE
       ===================================================== */}
    <details className="topic-details" open>
      <summary>1. Qué es la comunicación no verbal y por qué es crítica en atención al cliente</summary>
      <div className="topic-details__content">
        <p>
          Llamamos comunicación no verbal al conjunto de señales que emitimos{" "}
          <strong>sin palabras</strong>: postura, gestos, expresiones faciales, mirada, distancia, orientación del cuerpo,
          movimientos, apariencia… En atención al cliente se vuelve crítica porque el cliente suele llegar con una
          necesidad emocional de fondo: <strong>seguridad</strong>, <strong>respeto</strong> y <strong>control</strong>.
        </p>

        <p>
          Cuando el cliente está molesto, ansioso o inseguro, su cerebro “lee” señales no verbales como si fueran
          un escáner de intención: “¿me va a ayudar o me va a despachar?”, “¿me escucha o está a lo suyo?”.
          Si tus señales dicen “prisa”, “frialdad” o “desinterés”, tu discurso pierde valor aunque sea correcto.
        </p>

        <div className="card card--muted">
          <h3>Lo que el cliente interpreta en segundos</h3>
          <ul className="checklist">
            <li>
              <strong>Fiabilidad:</strong> ¿pareces seguro/a y competente?
            </li>
            <li>
              <strong>Respeto:</strong> ¿tu actitud reconoce su problema o lo minimiza?
            </li>
            <li>
              <strong>Disponibilidad:</strong> ¿estás presente o “con la cabeza en otra parte”?
            </li>
            <li>
              <strong>Justicia:</strong> ¿transmites imparcialidad o juicio?
            </li>
          </ul>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Regla práctica</h4>
          <p>
            Si tus palabras dicen “te entiendo”, pero tu cuerpo dice “tengo prisa”, el cliente cree a tu cuerpo.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        2) PARAVERBAL: LA VOZ TAMBIÉN ES NO VERBAL
       ===================================================== */}
    <details className="topic-details">
      <summary>2. La voz (paraverbal): tono, ritmo y pausas que cambian el resultado</summary>
      <div className="topic-details__content">
        <p>
          En atención al cliente, la voz funciona como un “marcador emocional” del mensaje.
          No es solo qué dices, sino{" "}
          <strong>qué tono</strong>, <strong>qué velocidad</strong> y <strong>qué seguridad</strong> transmite tu voz.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Qué transmite</th>
              <th>Cómo usarlo bien</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tono</strong></td>
              <td>Calma vs. confrontación</td>
              <td>Amable y firme; evita ironía o sarcasmo</td>
            </tr>
            <tr>
              <td><strong>Ritmo</strong></td>
              <td>Control vs. nervios</td>
              <td>Ritmo medio; baja velocidad cuando das pasos/condiciones</td>
            </tr>
            <tr>
              <td><strong>Volumen</strong></td>
              <td>Seguridad vs. agresividad</td>
              <td>Volumen estable; no compitas si el cliente grita</td>
            </tr>
            <tr>
              <td><strong>Pausas</strong></td>
              <td>Autoridad y claridad</td>
              <td>Pausa antes de una propuesta y después de dar opciones</td>
            </tr>
            <tr>
              <td><strong>Pronunciación</strong></td>
              <td>Profesionalidad</td>
              <td>Articula; evita muletillas y “eh…” repetidos</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Error típico</h4>
          <p>
            Subir el volumen para “ganar” la conversación. Si el cliente grita, tú bajas un punto:
            eso transmite control y baja la escalada.
          </p>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Técnica rápida</h4>
          <p>
            <strong>Una frase = una idea.</strong> Si vas a dar instrucciones, separa en pasos con pausas:
            “Primero… (pausa) Segundo… (pausa) Y por último…”.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        3) MIRADA Y EXPRESIÓN FACIAL
       ===================================================== */}
    <details className="topic-details">
      <summary>3. Mirada y expresión facial: el “termómetro” de interés y respeto</summary>
      <div className="topic-details__content">
        <p>
          La mirada y la cara son lo primero que el cliente interpreta. Una expresión neutra puede
          parecer frialdad si el cliente está alterado; una sonrisa exagerada puede parecer falsa.
          El objetivo es una{" "}
          <strong>expresión profesional cálida</strong>: amable, atenta y coherente con el momento.
        </p>

        <div className="card card--muted">
          <h3>Buenas prácticas</h3>
          <ul className="checklist">
            <li>
              <strong>Mirada estable (sin fijar):</strong> alterna contacto visual y miradas breves a la documentación.
            </li>
            <li>
              <strong>Ceño relajado:</strong> evita fruncir el ceño (se interpreta como juicio o molestia).
            </li>
            <li>
              <strong>Asentir suavemente:</strong> refuerza escucha sin interrumpir.
            </li>
            <li>
              <strong>Micro-sonrisa puntual:</strong> en saludo y cierre; durante queja, prioriza seriedad empática.
            </li>
          </ul>
        </div>

        <div className="callout callout--example">
          <h4 className="callout-title">🎭 Mini-ejemplo</h4>
          <p>
            Cliente: “Estoy harto, llevo tres días esperando.”<br />
            Respuesta no verbal eficaz: mirada atenta + expresión seria y empática + asentir + postura abierta.
            Luego verbalizas: “Entiendo la molestia. Vamos a revisar el estado ahora mismo.”
          </p>
        </div>

        <div className="callout callout--warning">
          <h4 className="callout-title">🚫 Evita</h4>
          <p>
            Poner los ojos en blanco, mirar al ordenador sin explicar, suspirar o sonreír mientras el cliente se queja.
            Esas señales se interpretan como burla o desprecio.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        4) POSTURA, ORIENTACIÓN CORPORAL Y GESTOS
       ===================================================== */}
    <details className="topic-details">
      <summary>4. Postura y gestos: cómo tu cuerpo transmite “estoy contigo” o “me estorbas”</summary>
      <div className="topic-details__content">
        <p>
          La postura y los gestos construyen la sensación de disponibilidad. Una postura cerrada (brazos cruzados,
          cuerpo girado, distancia excesiva) suele interpretarse como barrera. Una postura abierta transmite
          cooperación y calma.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Señal</th>
              <th>Cómo se interpreta</th>
              <th>Alternativa profesional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brazos cruzados</td>
              <td>Defensa / juicio</td>
              <td>Manos visibles, brazos relajados</td>
            </tr>
            <tr>
              <td>Cuerpo girado hacia otro lado</td>
              <td>Desinterés</td>
              <td>Orientación frontal o 45º (acompañamiento)</td>
            </tr>
            <tr>
              <td>Señalar con el dedo</td>
              <td>Acusación</td>
              <td>Señalar con mano abierta o indicar con la palma</td>
            </tr>
            <tr>
              <td>Gestos rápidos / nerviosos</td>
              <td>Inseguridad</td>
              <td>Gestos lentos y mínimos</td>
            </tr>
            <tr>
              <td>Inclinarse demasiado</td>
              <td>Invasión / presión</td>
              <td>Distancia cómoda + inclinación leve al escuchar</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Postura “base” recomendada</h4>
          <p>
            Espalda erguida pero no rígida, hombros relajados, manos visibles, pies estables y cuerpo orientado
            hacia el cliente. Esto transmite presencia y calma.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        5) PROXÉMICA: DISTANCIA, ESPACIO Y PRIVACIDAD
       ===================================================== */}
    <details className="topic-details">
      <summary>5. Distancia y espacio (proxémica): negociar sin invadir y sin “alejarte”</summary>
      <div className="topic-details__content">
        <p>
          La distancia física influye en la percepción de respeto. Si te acercas demasiado, puede sentirse invadido;
          si te alejas demasiado, puede sentirse ignorado. En atención al cliente, además, importa la{" "}
          <strong>privacidad</strong>: hay temas que conviene tratar en un punto más discreto.
        </p>

        <ul className="checklist">
          <li>
            <strong>Si el cliente está alterado:</strong> mantén distancia cómoda y postura abierta (baja la amenaza).
          </li>
          <li>
            <strong>Si hay datos sensibles:</strong> ofrece moverte a un lugar más discreto o baja el volumen.
          </li>
          <li>
            <strong>Si necesitas mostrar algo:</strong> no invadas su espacio; invita: “Si quiere, se lo enseño aquí”.
          </li>
        </ul>

        <div className="callout callout--example">
          <h4 className="callout-title">🧩 Frase útil</h4>
          <p>
            “Para explicárselo bien y con privacidad, si le parece, nos ponemos aquí un momento.”
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        6) APARIENCIA E IMAGEN PROFESIONAL
       ===================================================== */}
    <details className="topic-details">
      <summary>6. Imagen personal y profesional: el “primer mensaje” antes de hablar</summary>
      <div className="topic-details__content">
        <p>
          En la primera impresión, el cliente forma hipótesis: “¿esta persona sabe?”, “¿me va a ayudar?”.
          La imagen (higiene, orden, uniforme/ropa adecuada, cuidado general) funciona como señal de
          <strong>fiabilidad</strong>.
        </p>

        <div className="card card--muted">
          <h3>Checklist rápido</h3>
          <ul className="checklist">
            <li>Aspecto cuidado y coherente con la imagen de la empresa.</li>
            <li>Identificación visible (si aplica) para aumentar confianza.</li>
            <li>Espacio de trabajo ordenado: el entorno también comunica.</li>
            <li>Material a mano (documentos, sistema, formularios) para no improvisar.</li>
          </ul>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Importante</h4>
          <p>
            No es “ir elegante”: es transmitir <strong>orden y profesionalidad</strong>. Eso reduce la sensación de riesgo del cliente.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        7) COHERENCIA: CUANDO LO VERBAL Y LO NO VERBAL CHOCAN
       ===================================================== */}
    <details className="topic-details">
      <summary>7. Coherencia: cuando tu cuerpo contradice tus palabras</summary>
      <div className="topic-details__content">
        <p>
          El cliente confía más en señales no verbales que en palabras cuando hay contradicción.
          Por eso, el objetivo es que tu comunicación sea <strong>congruente</strong>.
        </p>

        <div className="card card--muted">
          <h3>Ejemplos de incoherencia típica</h3>
          <ul className="checklist">
            <li>Decir “le entiendo” mientras miras la pantalla sin explicarle nada.</li>
            <li>Decir “no se preocupe” con tono seco y brazos cruzados.</li>
            <li>Decir “ahora lo resolvemos” mientras suspiras o frunces el ceño.</li>
          </ul>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Ajuste rápido (en 10 segundos)</h4>
          <p>
            1) baja hombros, 2) manos visibles, 3) mira al cliente, 4) asiente, 5) frase clara: “Vamos paso a paso”.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        8) APLICACIÓN POR TIPOS DE CLIENTE
       ===================================================== */}
    <details className="topic-details">
      <summary>8. Aplicación por tipologías: cómo adaptar lo no verbal según el cliente</summary>
      <div className="topic-details__content">
        <p>
          Adaptar lo no verbal no es “actuar”: es elegir señales que ayuden a cada cliente a sentirse seguro
          y a que la conversación avance.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Tipo de cliente</th>
              <th>Qué necesita sentir</th>
              <th>Señales no verbales útiles</th>
              <th>Qué evitar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agresivo</strong></td>
              <td>Control y límites</td>
              <td>Postura estable, voz baja, gestos mínimos, distancia cómoda</td>
              <td>Señalar, acercarte, competir en volumen</td>
            </tr>
            <tr>
              <td><strong>Minucioso</strong></td>
              <td>Seguridad y precisión</td>
              <td>Mirada atenta, ritmo calmado, mostrar documentos, asentir</td>
              <td>Prisas, gestos nerviosos, mirar al reloj</td>
            </tr>
            <tr>
              <td><strong>Indeciso</strong></td>
              <td>Apoyo y guía</td>
              <td>Sonrisa suave, postura abierta, gestos de “opciones” con mano abierta</td>
              <td>Presión corporal, invadir espacio</td>
            </tr>
            <tr>
              <td><strong>Autoritario</strong></td>
              <td>Respeto sin sumisión</td>
              <td>Postura firme, voz segura, mirada estable, pausas</td>
              <td>Encogerte, justificarte de más, gestos de duda</td>
            </tr>
            <tr>
              <td><strong>Socializador</strong></td>
              <td>Cercanía con orden</td>
              <td>Expresión cálida, asentir, contacto visual amable</td>
              <td>Cortar en seco, frialdad facial</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>

    {/* =====================================================
        9) MICRO-EJERCICIOS PARA ENTRENAR
       ===================================================== */}
    <details className="topic-details">
      <summary>9. Micro-ejercicios: entrenamiento rápido (para clase o auto-práctica)</summary>
      <div className="topic-details__content">
        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Ejercicio 1: “Alinea tu cuerpo” (1 minuto)</h4>
          <p>
            Ponte en postura base: hombros relajados, manos visibles, mirada amable. Di en voz alta:
            “Vamos a resolverlo paso a paso”. Repite cambiando solo el tono (calmado vs. seco) y observa
            cómo cambia el efecto.
          </p>
        </div>

        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Ejercicio 2: “Silencio profesional” (30 segundos)</h4>
          <p>
            Practica una pausa de 3 segundos después de ofrecer una solución. Mantén mirada amable y asentimiento leve.
            Objetivo: no rellenar el silencio con concesiones.
          </p>
        </div>

        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Ejercicio 3: “Gestos que ayudan” (2 minutos)</h4>
          <p>
            Explica una política (cambio/devolución) usando mano abierta para enumerar 3 pasos (1, 2, 3).
            Objetivo: que el gesto refuerce claridad, no presión.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        10) CIERRE: CHECKLIST OPERATIVA
       ===================================================== */}
    <details className="topic-details">
      <summary>10. Checklist final: comunicación no verbal excelente (lista para usar)</summary>
      <div className="topic-details__content">
        <div className="card card--muted">
          <h3>Antes de atender</h3>
          <ul className="checklist">
            <li>Postura estable y abierta.</li>
            <li>Rostro relajado (sin tensión ni juicio).</li>
            <li>Voz preparada: ritmo medio, volumen estable.</li>
            <li>Espacio ordenado y documentación accesible.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="card card--muted">
          <h3>Durante la atención</h3>
          <ul className="checklist">
            <li>Mira al cliente al inicio y al cerrar; alterna con documentos sin “desaparecer”.</li>
            <li>Asiente y usa gestos mínimos para reforzar escucha.</li>
            <li>Evita gestos de prisa: reloj, suspiros, teclear sin explicar.</li>
            <li>Usa pausas para dar claridad y no precipitar concesiones.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="callout callout--insight">
          <h4 className="callout-title">🌟 Cierre didáctico</h4>
          <p>
            La comunicación no verbal es tu “marca personal” en cada interacción. Si dominas postura, mirada,
            voz y coherencia, aumentas la confianza, reduces conflictos y haces que la solución sea aceptada
            más rápido. En atención al cliente, eso es excelencia.
          </p>
        </div>
      </div>
    </details>
  </div>
</section>


          {/* =====================================================
              EPÍGRAFE 5.7 · CIERRE (ANALOGÍA DIDÁCTICA)
             ===================================================== */}
          <details className="topic-details">
            <summary>Cierre didáctico: la comunicación presencial como “teatro en vivo”</summary>

            <div className="topic-details__content">
              <p>
                La comunicación presencial efectiva es como una <strong>obra de teatro en vivo</strong>. No basta con
                saber el guion (el mensaje): importa el entorno (barreras), el tono de voz, los gestos y la reacción
                del público (<strong>feedback</strong>). Si no observas y no adaptas, la obra falla aunque el texto sea bueno.
              </p>

              <div className="callout callout--insight">
                <h4 className="callout-title">🎯 Idea final</h4>
                <p>
                  Cuando dominas <strong>empatía + escucha activa + asertividad</strong>, conviertes una conversación
                  imprevisible en un proceso profesional: entiendes, ordenas, respondes y confirmas.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  );
};

export default Tema05;
