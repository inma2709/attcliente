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

      {/* =====================================================
          INTRODUCCIÓN Y PREGUNTAS GUÍA
         ===================================================== */}
      <div className="topic-accordion">
        <details className="topic-details" open>
          <summary>Introducción y preguntas clave</summary>
          <div className="topic-details__content">
            <p>
              Estas tres habilidades funcionan como un "trípode" en atención al cliente: la <strong>empatía</strong> reduce
              tensión, la <strong>escucha activa</strong> evita malentendidos y la <strong>asertividad</strong> permite
              cumplir normas sin romper la relación. La clave no es "ser simpático", sino <strong>comunicar con
              método</strong> y verificar que el mensaje se ha entendido.
            </p>
            <div className="callout callout--tip">
              <h4 className="callout-title">🧭 Objetivo práctico</h4>
              <p>
                Convertir una interacción presencial en un proceso controlado:{' '}
                <strong>acoger → comprender → responder → confirmar</strong>. Así disminuyen quejas, se gana confianza
                y se refuerza la imagen profesional.
              </p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">📝 Actividad inicial: Preguntas para reflexionar</h4>
              <ul>
                <li>¿Por qué crees que la comunicación presencial sigue siendo clave en la era digital?</li>
                <li>¿Qué impacto tiene el lenguaje no verbal en la percepción del cliente?</li>
                <li>¿Cómo puedes demostrar empatía y asertividad en una situación tensa?</li>
                <li>¿Qué errores de comunicación suelen generar más conflictos en la atención presencial?</li>
                <li>¿Qué habilidades sociales te gustaría mejorar y por qué?</li>
              </ul>
              <p style={{ marginTop: '1em' }}>A lo largo del tema responderemos a estas preguntas con ejemplos y técnicas prácticas.</p>
            </div>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.1 · EMPATÍA
           ===================================================== */}
        <details className="topic-details">
          <summary>5.1 Empatía: reconocer emoción sin perder profesionalidad</summary>
          <div className="topic-details__content">
            <p>
              La empatía es la capacidad de "ponerse en el lugar del otro" para comprender sus necesidades y
              sentimientos. En atención al cliente no significa "dar la razón", significa <strong>validar</strong> el
              impacto de lo ocurrido para que la conversación vuelva a ser resolutiva.
            </p>

            <div className="callout callout--tip">
              <h4 className="callout-title">🧠 Frase útil</h4>
              <p>"Entiendo que esto genere frustración. Vamos a ver la solución más rápida y clara."</p>
            </div>

            <h4>Técnicas de empatía aplicadas (listas para usar)</h4>
            <ul className="checklist">
              <li><strong>Etiquetado emocional:</strong> nombra la emoción con respeto: "Entiendo que esto le preocupa / le molesta".</li>
              <li><strong>Validación + enfoque:</strong> "Tiene sentido que le incomode. Vamos a revisarlo paso a paso".</li>
              <li><strong>Disculpa funcional (si procede):</strong> "Lamento la situación; me encargo de solucionarlo".</li>
              <li><strong>Acompañamiento:</strong> "Estoy con usted en esto", "Lo resolvemos ahora".</li>
              <li><strong>Evitar gatillos:</strong> cambia "Es lo que hay" por "Lo que puedo hacer en este caso es…".</li>
              <li><strong>Empatía + control:</strong> "Entiendo el malestar. Le explico qué va a pasar y en qué plazo".</li>
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
                <strong>1) Reconozco:</strong> "Entiendo que esto le haya sentado mal".<br />
                <strong>2) Actúo:</strong> "Ahora reviso su caso y le doy una solución concreta con plazos".
              </p>
            </div>

            <div className="video-block" style={{ margin: '1.2em 0' }}>
              <div className="video-title">🎥 Empatía en atención al cliente (video)</div>
              <div className="video-meta">Ejemplo visual de cómo aplicar la empatía en situaciones reales de atención presencial.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/wDKc7edPiXc"
                  title="Empatía en atención al cliente"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.2 · ESCUCHA ACTIVA
           ===================================================== */}
        {/* =====================================================
            EPÍGRAFE 5.2 · ESCUCHA ACTIVA
           ===================================================== */}
        <details className="topic-details">
          <summary>5.2 Escucha activa: técnica para evitar malentendidos</summary>
          <div className="topic-details__content">
            <p>
              La escucha activa es un <strong>esfuerzo físico, mental y emocional</strong> por captar la totalidad del
              mensaje: contenido, emoción e intención. No es "oír"; es comprobar que se entiende y que el cliente se
              siente entendido.
            </p>

            <div className="video-block" style={{ margin: '1.2em 0' }}>
              <div className="video-title">🎥 Escucha activa en atención al cliente</div>
              <div className="video-meta">Aprende las claves de la escucha activa y cómo aplicarla efectivamente en tu día a día.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/JXowXT-Es-U"
                  title="Escucha activa en atención al cliente"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="video-block" style={{ margin: '1.2em 0' }}>
              <div className="video-title">🎥 Técnicas de escucha activa</div>
              <div className="video-meta">Ejemplos prácticos sobre cómo mejorar tu escucha activa en la atención presencial.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/7AtxDGe8UeU"
                  title="Técnicas de escucha activa"
                  allowFullScreen
                />
              </div>
            </div>

            <h4>Técnicas base (operativas)</h4>
            <ul className="checklist">
              <li><strong>Parafraseo:</strong> "Si le he entendido bien, el problema es…"</li>
              <li><strong>Pregunta abierta:</strong> "¿Qué esperaba que ocurriera?"</li>
              <li><strong>Confirmación:</strong> "¿Es correcto?"</li>
              <li><strong>Cierre:</strong> "Entonces hoy queda así: … ¿Le parece bien?"</li>
            </ul>

            <div className="divider" />

            <h4>Técnicas ampliadas (muy útiles en cara a cara)</h4>
            <ul className="checklist">
              <li><strong>Resumir para alinear:</strong> "Le resumo: usted necesita A, ocurrió B y espera C. ¿Correcto?"</li>
              <li><strong>Solicitar ampliación:</strong> "¿Me puede dar un ejemplo concreto para entenderlo mejor?"</li>
              <li><strong>Verbalizar lo interpretado:</strong> "Si lo que le preocupa es el tiempo/importe, lo entiendo".</li>
              <li><strong>Manejo de silencios:</strong> pausa breve para dejar espacio y no interrumpir.</li>
              <li><strong>Palabras de refuerzo:</strong> "Entiendo", "De acuerdo", "Perfecto, continúe".</li>
              <li><strong>Preguntas de precisión:</strong> "¿Cuándo ocurrió?", "¿En qué punto se bloqueó?", "¿Qué mensaje apareció?"</li>
            </ul>

            <h4>Tipos de preguntas (para dirigir la interacción)</h4>
            <ul className="checklist">
              <li><strong>Cerradas:</strong> respuestas limitadas ("¿Sí o no?") para confirmar datos.</li>
              <li><strong>Abiertas:</strong> permiten explicar y aportar contexto ("¿Qué ocurrió exactamente?").</li>
              <li><strong>De confirmación:</strong> repites lo entendido ("Entonces, el cargo fue el martes, ¿correcto?").</li>
              <li><strong>Retóricas:</strong> se usan con cuidado para enfatizar ("¿Quién quiere repetir una mala experiencia?").</li>
            </ul>

            <div className="callout callout--warning">
              <h4 className="callout-title">⚠️ Error típico</h4>
              <p>
                "¿Alguna duda?" suele fallar porque invita al silencio. Mejor: "Para confirmar que quedó claro,
                dígame con sus palabras cuál es el primer paso".
              </p>
            </div>

            <div className="callout callout--tip">
              <h4 className="callout-title">✅ Señal de buena escucha</h4>
              <p>
                El cliente baja el tono y empieza a aportar datos útiles. Eso indica que se siente comprendido y que
                la conversación vuelve a ser resolutiva.
              </p>
            </div>

            <div className="divider" />

            {/* =====================================================
                ACTIVIDAD: EL CLIENTE INVISIBLE
               ===================================================== */}
            <details className="topic-details">
              <summary>🎭 Actividad práctica: "El cliente invisible"</summary>
              <div className="topic-details__content">

                <div className="callout callout--activity" style={{ marginBottom: '1.5em' }}>
                  <h4 className="callout-title">🧠 Objetivo</h4>
                  <p>
                    Entrenar la escucha activa real: no solo recoger información, sino demostrar comprensión
                    mediante <strong>reformulación, preguntas y validación emocional</strong>.
                  </p>
                  <ul className="checklist" style={{ marginTop: '0.75em' }}>
                    <li><strong>Organización:</strong> trabajo en parejas con roles rotatorios (cliente / profesional de atención)</li>
                    <li><strong>Nº de rondas:</strong> 2–3 rondas cortas</li>
                    <li><strong>Duración total:</strong> 15–20 minutos</li>
                  </ul>
                </div>

                {/* FASES */}
                <h4>Desarrollo de la actividad</h4>

                <details className="topic-details">
                  <summary>Fase 1 · Preparación (2 min)</summary>
                  <div className="topic-details__content">
                    <p>Cada "cliente" recibe o elige una situación de las tarjetas de caso. Debe añadir <strong>emoción</strong> al relato (frustración, duda, enfado leve o confusión), no solo datos.</p>
                    <div className="callout callout--example">
                      <h4 className="callout-title">Ejemplo de inicio de caso</h4>
                      <p><em>"Estoy bastante molesto porque me dijeron que llegaba ayer y todavía no tengo el pedido…"</em></p>
                    </div>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Fase 2 · Interacción (4–5 min por ronda)</summary>
                  <div className="topic-details__content">
                    <h4>Rol del cliente</h4>
                    <ul className="checklist">
                      <li>Explica el problema de forma espontánea.</li>
                      <li>Añade detalles progresivamente (no todo de golpe).</li>
                      <li>Incluye al menos 1 emoción explícita.</li>
                    </ul>
                    <div className="divider" />
                    <h4>Rol del profesional (secuencia obligatoria)</h4>
                    <table className="table">
                      <thead>
                        <tr><th>#</th><th>Técnica</th><th>Ejemplo de frase</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>1</td><td><strong>Parafraseo inicial</strong></td><td>"Si le he entendido bien, lo que ocurre es…"</td></tr>
                        <tr><td>2</td><td><strong>Pregunta abierta</strong></td><td>"¿Desde cuándo está pasando esto exactamente?"</td></tr>
                        <tr><td>3</td><td><strong>Confirmación</strong></td><td>"Entonces el problema es X, ¿correcto?"</td></tr>
                        <tr><td>4</td><td><strong>Validación emocional</strong></td><td>"Entiendo que esto le genere frustración…"</td></tr>
                        <tr><td>5</td><td><strong>Cierre parcial</strong></td><td>"Voy a revisar lo que ha pasado y le explico la solución…"</td></tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Fase 3 · Regla clave: error intencional (Ronda 1)</summary>
                  <div className="topic-details__content">
                    <p>En la primera ronda, el "profesional" debe intentar <strong>resolver demasiado rápido</strong>, sin escuchar del todo.</p>
                    <div className="callout callout--warning">
                      <h4 className="callout-title">⚠️ Objetivo pedagógico</h4>
                      <p>Que el "cliente" perciba en su propia experiencia: interrupciones, falta de comprensión real y solución prematura. Así entiende el impacto desde dentro.</p>
                    </div>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Fase 4 · Feedback inmediato (2 min por pareja)</summary>
                  <div className="topic-details__content">
                    <p>El cliente responde oralmente a su pareja:</p>
                    <ul className="checklist">
                      <li>¿Te has sentido escuchado? (sí / no / parcialmente)</li>
                      <li>¿Qué frase te hizo sentir comprendido?</li>
                      <li>¿En qué momento notaste desconexión?</li>
                      <li>¿Qué habría mejorado la interacción?</li>
                    </ul>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Fase 5 · Segunda ronda: mejora consciente</summary>
                  <div className="topic-details__content">
                    <p>Se repite el mismo caso. Ahora el profesional debe:</p>
                    <ul className="checklist">
                      <li>Reducir la velocidad de respuesta.</li>
                      <li>Usar reformulación de forma constante.</li>
                      <li>Añadir silencios estratégicos.</li>
                      <li>Evitar ofrecer soluciones antes de comprender bien.</li>
                    </ul>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Fase 6 · Evaluación rápida (rúbrica docente)</summary>
                  <div className="topic-details__content">
                    <p>El docente observa y puntúa de 0 a 2 cada criterio:</p>
                    <table className="table">
                      <thead>
                        <tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr>
                      </thead>
                      <tbody>
                        <tr><td><strong>Parafraseo</strong></td><td>No lo usa</td><td>Incompleto</td><td>Claro y frecuente</td></tr>
                        <tr><td><strong>Preguntas abiertas</strong></td><td>No usa ninguna</td><td>Solo 1</td><td>Varias y pertinentes</td></tr>
                        <tr><td><strong>Validación emocional</strong></td><td>Ninguna</td><td>Básica</td><td>Natural y constante</td></tr>
                        <tr><td><strong>Comprensión final</strong></td><td>Incorrecta</td><td>Parcial</td><td>Completa y verificada</td></tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Cierre reflexivo (5 min — debate en clase)</summary>
                  <div className="topic-details__content">
                    <ul className="checklist">
                      <li>¿Qué cambia cuando te sientes escuchado?</li>
                      <li>¿Resolver rápido es lo mismo que atender bien?</li>
                      <li>¿Qué técnica ha sido más difícil de aplicar?</li>
                      <li>¿Dónde se pierde más información: al hablar o al escuchar?</li>
                    </ul>
                    <div className="callout callout--insight">
                      <h4 className="callout-title">🎯 Conclusión clave</h4>
                      <p>La escucha activa no es pasividad: es una <strong>intervención técnica deliberada</strong>. Cuando el cliente se siente comprendido antes de recibir la solución, la acepta mejor y con menos resistencia.</p>
                    </div>
                  </div>
                </details>

                <details className="topic-details">
                  <summary>Variante avanzada: "cliente difícil"</summary>
                  <div className="topic-details__content">
                    <p>Para subir el nivel de dificultad, el cliente puede:</p>
                    <ul className="checklist">
                      <li>Contradecir información que él mismo dio antes.</li>
                      <li>Cambiar datos durante la conversación.</li>
                      <li>Expresar emociones intensas sin explicar el problema con claridad.</li>
                      <li>Mezclar varios problemas distintos en un mismo relato.</li>
                    </ul>
                    <div className="callout callout--tip">
                      <h4 className="callout-title">💡 Objetivo</h4>
                      <p>Que el profesional aprenda a <strong>gestionar la ambigüedad</strong> sin perder el hilo: separar datos de emociones, pedir concreción sin interrumpir y reformular aunque el relato sea caótico.</p>
                    </div>
                  </div>
                </details>

                <div className="divider" />

                {/* FICHA IMPRIMIBLE */}
                <details className="topic-details">
                  <summary>📋 Ficha imprimible para el alumno</summary>
                  <div className="topic-details__content">
                    <div className="callout callout--activity">
                      <h4 className="callout-title">FICHA DE TRABAJO · ESCUCHA ACTIVA — Actividad práctica por parejas</h4>

                      <p><strong>🧠 Objetivo:</strong> Desarrollar la escucha activa real aplicando reformulación, preguntas abiertas y validación emocional.</p>
                      <p><strong>👥 Organización:</strong> Parejas · Roles rotatorios (cliente / profesional) · 2–3 rondas de 4–5 min cada una.</p>

                      <div className="divider" />

                      <p><strong>📌 TU CASO (cliente)</strong> — Marca la situación elegida y describe tu versión:</p>
                      <ul>
                        <li>☐ Pedido no recibido a tiempo</li>
                        <li>☐ Error en una factura</li>
                        <li>☐ Problema con una reserva</li>
                        <li>☐ Fallo en un servicio técnico</li>
                        <li>☐ Información incorrecta recibida</li>
                      </ul>
                      <p><em>Describe tu caso con emoción incluida: ............................................................................</em></p>

                      <div className="divider" />

                      <p><strong>🎯 SECUENCIA DEL PROFESIONAL</strong> — Marca cada técnica al usarla:</p>
                      <ul>
                        <li>☐ <strong>Parafraseo:</strong> "Si le he entendido bien, el problema es…"</li>
                        <li>☐ <strong>Pregunta abierta:</strong> "¿Cuándo empezó exactamente la situación?"</li>
                        <li>☐ <strong>Confirmación:</strong> "Entonces lo que ocurre es…, ¿correcto?"</li>
                        <li>☐ <strong>Validación emocional:</strong> "Entiendo que esto le pueda generar…"</li>
                        <li>☐ <strong>Cierre parcial:</strong> "Voy a revisar lo ocurrido y le explico la solución."</li>
                      </ul>

                      <div className="divider" />

                      <p><strong>⚠️ REGLA RONDA 1:</strong> No resuelvas rápido. Prioriza entender antes que solucionar. Evita interrumpir.</p>
                      <p><strong>🔁 RONDA 2:</strong> Más reformulación · Más preguntas abiertas · Pausas · Escucha antes de responder.</p>

                      <div className="divider" />

                      <p><strong>🗣️ FEEDBACK DEL CLIENTE (tras cada ronda)</strong></p>
                      <ul>
                        <li>¿Te has sentido escuchado? ☐ Sí ☐ No ☐ Parcialmente</li>
                        <li>¿Qué frase te hizo sentir comprendido? ............................................................................</li>
                        <li>¿En qué momento notaste desconexión? ............................................................................</li>
                        <li>¿Qué habría mejorado la atención? ............................................................................</li>
                      </ul>

                      <div className="divider" />

                      <p><strong>📊 AUTOEVALUACIÓN DEL PROFESIONAL (0–2 por criterio)</strong></p>
                      <table className="table">
                        <thead><tr><th>Criterio</th><th>0</th><th>1</th><th>2</th></tr></thead>
                        <tbody>
                          <tr><td>Parafraseo</td><td>☐</td><td>☐</td><td>☐</td></tr>
                          <tr><td>Preguntas abiertas</td><td>☐</td><td>☐</td><td>☐</td></tr>
                          <tr><td>Validación emocional</td><td>☐</td><td>☐</td><td>☐</td></tr>
                          <tr><td>Comprensión final correcta</td><td>☐</td><td>☐</td><td>☐</td></tr>
                        </tbody>
                      </table>

                      <div className="divider" />

                      <p><strong>💡 REFLEXIÓN FINAL</strong></p>
                      <ul>
                        <li>¿Qué es más importante: responder rápido o comprender bien?</li>
                        <li>¿Qué técnica te ha resultado más difícil?</li>
                        <li>¿Qué mejora más la experiencia del cliente?</li>
                      </ul>
                      <p><em>............................................................................</em></p>
                    </div>
                  </div>
                </details>

                <div className="divider" />

                {/* TARJETAS DE CASOS */}
                <details className="topic-details">
                  <summary>🃏 Tarjetas de casos de cliente (recortables)</summary>
                  <div className="topic-details__content">
                    <p className="muted">Recorta cada tarjeta y repártelas al comenzar la actividad. Varía las tarjetas en cada ronda para aumentar la dificultad progresivamente.</p>

                    {[
                      { num: 1, color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', titulo: 'Pedido retrasado', contexto: 'E-commerce', frase: '"Me dijeron que el pedido llegaba ayer y aún no ha llegado. Lo necesito con urgencia para un evento. Estoy bastante molesto porque no tengo ninguna actualización."', emocion: 'Frustración + urgencia' },
                      { num: 2, color: '#B45309', bg: '#FFFBEB', border: '#FDE68A', titulo: 'Factura incorrecta', contexto: 'Servicio / empresa', frase: '"He recibido una factura con un importe más alto del que me indicaron. No entiendo de dónde salen esos cargos extra."', emocion: 'Confusión + desconfianza' },
                      { num: 3, color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA', titulo: 'Reserva fallida', contexto: 'Hostelería / hotel', frase: '"Tenía una reserva confirmada y al llegar me dicen que no existe. He venido expresamente y ahora no tengo sitio."', emocion: 'Enfado + decepción' },
                      { num: 4, color: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', titulo: 'Servicio técnico lento', contexto: 'Reparación', frase: '"Llevo una semana sin móvil y nadie me da una fecha clara de cuándo estará listo. Cada vez me dicen algo diferente."', emocion: 'Impaciencia + frustración' },
                      { num: 5, color: '#065F46', bg: '#ECFDF5', border: '#A7F3D0', titulo: 'Producto defectuoso', contexto: 'Tienda', frase: '"He comprado el producto hace dos días y ya no funciona. No sé si es normal o si está defectuoso."', emocion: 'Duda + molestia' },
                      { num: 6, color: '#9D174D', bg: '#FDF2F8', border: '#FBCFE8', titulo: 'Información contradictoria', contexto: 'Atención al cliente', frase: '"Primero me dijeron una cosa por teléfono y ahora en tienda me dicen otra completamente distinta. No sé a quién creer."', emocion: 'Confusión + desconfianza' },
                      { num: 7, color: '#92400E', bg: '#FFFBEB', border: '#FDE68A', titulo: 'Cliente apurado', contexto: 'Cualquier servicio', frase: '"Tengo muy poco tiempo, necesito una solución rápida porque me voy en 10 minutos."', emocion: 'Prisa + tensión' },
                      { num: 8, color: '#1E40AF', bg: '#EFF6FF', border: '#BFDBFE', titulo: 'Malentendido general', contexto: 'Servicio online', frase: '"No estoy seguro de haber entendido bien el proceso. He seguido los pasos pero no funciona."', emocion: 'Inseguridad + frustración leve' },
                      { num: 9, color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', titulo: 'Error en devolución', contexto: 'Comercio', frase: '"He intentado devolver el producto como me dijeron, pero ahora me dicen que no es posible."', emocion: 'Enfado + sensación de injusticia' },
                      { num: 10, color: '#047857', bg: '#ECFDF5', border: '#A7F3D0', titulo: 'Cliente exigente', contexto: 'Servicio premium', frase: '"Pago un servicio premium y espero una atención mucho más rápida y personalizada."', emocion: 'Exigencia + expectativa alta' },
                      { num: 11, color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA', titulo: 'Problema repetido', contexto: 'Soporte técnico', frase: '"Es la tercera vez que llamo por el mismo problema y sigue sin resolverse."', emocion: 'Cansancio + frustración' },
                      { num: 12, color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', titulo: 'Duda preventa', contexto: 'Venta', frase: '"Estoy pensando en comprarlo, pero necesito estar seguro de que me va a funcionar para lo que necesito."', emocion: 'Indecisión + expectativa' },
                    ].map(({ num, color, bg, border, titulo, contexto, frase, emocion }) => (
                      <div key={num} style={{
                        border: `2px dashed ${border}`,
                        borderRadius: '8px',
                        background: bg,
                        padding: '1rem 1.25rem',
                        marginBottom: '1rem',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <span style={{
                            background: color,
                            color: '#fff',
                            borderRadius: '50%',
                            width: '26px',
                            height: '26px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: '600',
                            flexShrink: 0,
                          }}>{num}</span>
                          <strong style={{ color, fontSize: '15px' }}>{titulo}</strong>
                          <span style={{ fontSize: '12px', color: '#6B7280', marginLeft: 'auto' }}>📌 {contexto}</span>
                        </div>
                        <p style={{ margin: '6px 0', fontSize: '14px', fontStyle: 'italic', color: '#374151', lineHeight: '1.5' }}>{frase}</p>
                        <p style={{ margin: 0, fontSize: '12px', color: color, fontWeight: '500' }}>🧠 Emoción: {emocion}</p>
                      </div>
                    ))}

                    <div className="callout callout--tip">
                      <h4 className="callout-title">🧩 Instrucciones de uso</h4>
                      <ul className="checklist">
                        <li>Un alumno actúa como cliente usando una tarjeta; el otro aplica la secuencia de escucha activa.</li>
                        <li>Cambiar roles en cada ronda.</li>
                        <li>Variar tarjetas para aumentar progresivamente la dificultad (empezar por las más sencillas: 8, 12, 5).</li>
                        <li>Las tarjetas 6, 9 y 11 son las más exigentes: reservarlas para la variante avanzada.</li>
                      </ul>
                    </div>
                  </div>
                </details>

              </div>
            </details>
            {/* FIN ACTIVIDAD EL CLIENTE INVISIBLE */}

          </div>
        </details>


        {/* =====================================================
            EPÍGRAFE 5.3 · ASERTIVIDAD
           ===================================================== */}
        <details className="topic-details">
          <summary>5.3 Asertividad: decir "no" sin romper la relación</summary>
          <div className="topic-details__content">
            <div className="video-block" style={{ margin: '1.2em 0' }}>
              <div className="video-title">🎥 Asertividad en atención al cliente</div>
              <div className="video-meta">Video explicativo sobre cómo ser asertivo en situaciones de presión comercial y mantener la relación con el cliente.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/eScUHh5IVv8"
                  title="Asertividad en atención al cliente"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="video-block" style={{ margin: '1.2em 0' }}>
              <div className="video-title">🎥 Técnicas de asertividad para atención al cliente</div>
              <div className="video-meta">Video complementario con ejemplos prácticos de técnicas asertivas en la comunicación profesional.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/jvxuQEe_0-w"
                  title="Técnicas de asertividad para atención al cliente"
                  allowFullScreen
                />
              </div>
            </div>

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
                  <td>"Eso no se puede y punto."</td>
                  <td>Escala conflicto</td>
                </tr>
                <tr>
                  <td><strong>Pasivo</strong></td>
                  <td>"Bueno… ya veremos…"</td>
                  <td>Promesas ambiguas, frustración posterior</td>
                </tr>
                <tr>
                  <td><strong>Asertivo</strong></td>
                  <td>"No podemos hacerlo así, pero sí podemos ofrecerle estas opciones…"</td>
                  <td>Control + relación + solución</td>
                </tr>
              </tbody>
            </table>

            <div className="divider" />

            <h4>Técnicas asertivas principales</h4>
            <ul className="checklist">
              <li><strong>Disco rayado:</strong> repite el límite con calma hasta acordar: "Entiendo. Aun así, la política indica…".</li>
              <li><strong>Banco de niebla:</strong> reconoces parte de razón sin ceder el control: "Entiendo que lo vea así; revisemos las opciones".</li>
              <li><strong>Asertividad negativa:</strong> reconoces un error de forma directa: "Tiene razón, aquí hubo un fallo y lo corrijo".</li>
              <li><strong>Interrogación asertiva:</strong> pides aclaración para avanzar: "¿Qué parte fue la que le molestó más, el plazo o la forma?"</li>
              <li><strong>Compromiso viable:</strong> ambas partes ceden para un acuerdo posible: "No puedo X, pero sí puedo Y hoy".</li>
            </ul>

            <h4>Técnicas extra (muy eficaces en atención al cliente)</h4>
            <ul className="checklist">
              <li><strong>Límite + razón breve + beneficio:</strong> "Por seguridad no puedo X. Así garantizamos Y".</li>
              <li><strong>Alternativa cerrada:</strong> ofrece 2 opciones viables: "Podemos A o B, ¿cuál prefiere?"</li>
              <li><strong>Escalado responsable:</strong> "Lo elevo a supervisión con número de caso y respuesta en X horas".</li>
              <li><strong>Evitar justificarse de más:</strong> explica lo justo y vuelve a la solución: "Entiendo. En este caso, la opción viable es…"</li>
            </ul>

            <div className="callout callout--activity">
              <h4 className="callout-title">✅ Micro-actividad</h4>
              <p>
                Escribe 1 frase asertiva para un cliente que exige un reembolso fuera de plazo: incluye{' '}
                <strong>respeto + norma + alternativa</strong>.
              </p>
            </div>

            <div className="callout callout--example">
              <h4 className="callout-title">🧩 Ejemplo modelo</h4>
              <p>
                "Entiendo que quiera el reembolso. En este caso no puedo tramitarlo porque el plazo ya finalizó,
                pero sí puedo ofrecerle un cambio o un vale por el importe. ¿Qué opción le encaja mejor?"
              </p>
            </div>

            {/* ACTIVIDAD: ROLE PLAY DE ASERTIVIDAD EN ALTA TENSIÓN */}
            <div className="callout callout--activity" style={{ marginTop: '1.5em', border: '2px solid #f59e0b', background: '#fff7ed' }}>
              <h4 className="callout-title">🎭 Role Play: El Límite del Descuento Imposible</h4>
              <p><strong>Objetivo:</strong> Practicar la asertividad en situaciones de alta presión comercial, aprendiendo a decir "no" con profesionalidad y sin perder la relación.</p>
              <ol style={{ marginLeft: '1.2em' }}>
                <li><strong>Escenario:</strong> Un cliente habitual exige un 40% de descuento y entrega inmediata en un producto de alta gama, pero el máximo permitido es 10% y no hay stock.</li>
                <li><strong>Roles:</strong> Cliente (presionador) y Vendedor (alumno). El cliente utiliza frases como: "He sido cliente vuestro años, me lo merezco", "En la competencia me lo dejan más barato", "Si no me lo das, cancelo mi cuenta".</li>
                <li><strong>Dinámica:</strong> Haz tres intentos:
                  <ul>
                    <li><strong>A) Pasividad:</strong> "Lo siento mucho, voy a preguntar a mi jefe..."</li>
                    <li><strong>B) Agresividad:</strong> "Es imposible, no me puede pedir eso."</li>
                    <li><strong>C) Asertividad:</strong> "Entiendo que busque el mejor precio... El máximo que puedo aplicar es 10%. Pero puedo incluirle el mantenimiento premium gratuito un año. ¿Le parece justo?"</li>
                  </ul>
                </li>
                <li><strong>Guía de observación:</strong> Los compañeros anotan: contacto visual, muletillas, tono de voz, control emocional.</li>
                <li><strong>Truco del profesor:</strong> Al final, pregunta: "¿Quién tiene más poder, el que exige o el que mantiene el autocontrol y la asertividad?"</li>
              </ol>
              <p><strong>Reflexión:</strong> ¿Qué te resultó más difícil: mantener el límite o no perder la relación? ¿Qué frases asertivas puedes preparar para futuras objeciones?</p>
            </div>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.4 · COMUNICACIÓN POSITIVA Y LENGUAJE CONSTRUCTIVO
           ===================================================== */}
        <details className="topic-details">
          <summary>5.4 Comunicación positiva y lenguaje constructivo</summary>
          <div className="topic-details__content">
            <p>
              El lenguaje que usamos define cómo se percibe nuestro mensaje. Una comunicación <strong>positiva y constructiva</strong> 
              no solo informa, sino que crea confianza, reduce resistencia y orienta al cliente hacia la solución. 
              En atención al cliente, <strong>cómo dices algo</strong> es tan importante como <strong>qué dices</strong>.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">💡 Principio clave</h4>
              <p>
                El lenguaje positivo no significa ocultar problemas, significa <strong>enfocar la conversación en lo que SÍ se puede hacer</strong>, 
                en lugar de lo que NO se puede hacer.
              </p>
            </div>

            <h4>Diferencias entre lenguaje negativo y positivo</h4>
            <div className="comparison-table" style={{ marginBottom: '1.5em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f3f4f6' }}>
                    <th style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'left' }}>❌ Lenguaje negativo</th>
                    <th style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'left' }}>✅ Lenguaje positivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"No puedo hacer eso"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Lo que sí puedo hacer es..."</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Eso no es posible"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"La alternativa más viable es..."</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"No está disponible hasta el lunes"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Estará disponible el lunes a primera hora"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"No es mi departamento"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Le ayudo a contactar con la persona adecuada"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Usted no entendió bien"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Permítame aclararlo mejor"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Técnicas de lenguaje constructivo</h4>
            <ul className="checklist">
              <li><strong>Enfoque en soluciones:</strong> Dirige la conversación hacia lo que se puede lograr: "Puedo tramitarlo para que lo reciba el viernes".</li>
              <li><strong>Uso de verbos activos:</strong> "Voy a resolver", "Me encargo", "Lo gestiono ahora" en lugar de pasivas o impersonales.</li>
              <li><strong>Eliminar palabras tóxicas:</strong> Evita "problema", "imposible", "nunca". Usa "situación", "desafío", "opción alternativa".</li>
              <li><strong>Reformulación positiva:</strong> Cambia "No tenemos stock" por "Lo tendremos disponible en 3 días".</li>
              <li><strong>Condicionales suaves:</strong> "Si me facilita estos datos, podría agilizarlo" en lugar de "Sin esos datos no puedo hacer nada".</li>
              <li><strong>Agradecimiento proactivo:</strong> "Gracias por su paciencia" en lugar de "Perdone la espera".</li>
            </ul>

            <div className="divider" />

            <h4>Palabras y expresiones que generan confianza</h4>
            <div className="callout callout--tip">
              <ul className="checklist" style={{ margin: 0 }}>
                <li><strong>"Entiendo"</strong> – valida la emoción del cliente.</li>
                <li><strong>"Por supuesto"</strong> – transmite disposición inmediata.</li>
                <li><strong>"Con gusto"</strong> – añade calidez a la respuesta.</li>
                <li><strong>"Permítame"</strong> – profesional y respetuoso.</li>
                <li><strong>"Le mantengo informado"</strong> – genera seguridad y control.</li>
                <li><strong>"A partir de ahora"</strong> – enfoca en el futuro y la mejora.</li>
              </ul>
            </div>

            <h4>Palabras que crean resistencia (evitar)</h4>
            <div className="callout callout--warning">
              <ul className="checklist" style={{ margin: 0 }}>
                <li><strong>"Pero"</strong> – anula lo dicho anteriormente. Usa "y" o "además".</li>
                <li><strong>"Tiene que"</strong> – suena impositivo. Usa "Le recomiendo" o "Sería conveniente".</li>
                <li><strong>"Siempre/Nunca"</strong> – generalizan y cierran opciones.</li>
                <li><strong>"Es que..."</strong> – suena a excusa. Ve directo a la solución.</li>
                <li><strong>"No sé"</strong> – genera inseguridad. Usa "Voy a averiguarlo ahora mismo".</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>Estructura de mensajes constructivos en 3 pasos</h4>
            <ol>
              <li><strong>Empatía/Validación:</strong> "Entiendo que esto le haya generado inconvenientes".</li>
              <li><strong>Transición constructiva:</strong> "Lo que vamos a hacer es..." (en lugar de "pero").</li>
              <li><strong>Acción concreta + plazo:</strong> "Le envío la información hoy antes de las 18h. ¿Le parece bien?"</li>
            </ol>

            <div className="callout callout--example">
              <h4 className="callout-title">🎯 Ejemplo práctico completo</h4>
              <p><strong>Situación:</strong> El cliente pide un reembolso que no procede según política.</p>
              <p>
                <strong>❌ Respuesta negativa:</strong><br />
                "No puedo darle un reembolso porque ya pasó el plazo de 15 días."
              </p>
              <p>
                <strong>✅ Respuesta constructiva:</strong><br />
                "Entiendo que prefiera el reembolso. Aunque el plazo de devolución ya finalizó, lo que sí puedo ofrecerle 
                es un vale de compra por el mismo importe válido durante 6 meses, o un cambio directo por otro producto. 
                ¿Cuál de estas opciones le resultaría más útil?"
              </p>
            </div>

            <div className="callout callout--activity" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">✏️ Ejercicio práctico: Reformulación positiva</h4>
              <p><strong>Instrucción:</strong> Transforma estas frases negativas en positivas y constructivas:</p>
              <ol style={{ marginLeft: '1.2em' }}>
                <li>"No tenemos ese producto en stock."</li>
                <li>"Eso no es posible hacerlo."</li>
                <li>"No es mi responsabilidad."</li>
                <li>"Usted no completó bien el formulario."</li>
                <li>"El técnico no puede venir hasta la semana que viene."</li>
              </ol>
              <p><strong>Pista:</strong> Usa la estructura: Validación + Lo que SÍ puedo hacer + Plazo/Confirmación.</p>
            </div>

            <div className="video-block" style={{ margin: '1.5em 0' }}>
              <div className="video-title">🎥 El poder del lenguaje positivo en atención al cliente</div>
              <div className="video-meta">Aprende cómo transformar tu comunicación para generar más confianza y menos resistencia.</div>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/J6JkpMZxy5A"
                  title="Lenguaje positivo en atención al cliente"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="divider" />

            {/* MARCO AMPLIADO: COMUNICACIÓN POSITIVA APLICADA */}
            <h3 style={{ marginTop: '2em', color: '#2563eb' }}>📞 Comunicación positiva aplicada: nivel operativo</h3>
            <p>
              No basta con "hablar en positivo". En contexto profesional, especialmente en atención telefónica, 
              la comunicación positiva implica cuatro dimensiones estratégicas:
            </p>
            <ul className="checklist">
              <li><strong>Reformular mensajes:</strong> transformar restricciones en opciones</li>
              <li><strong>Gestionar percepciones:</strong> evitar activar emociones negativas</li>
              <li><strong>Controlar el discurso:</strong> dirigir la conversación sin imponer</li>
              <li><strong>Transmitir seguridad:</strong> reducir incertidumbre del cliente</li>
            </ul>
            <p>
              Esto convierte la comunicación positiva en una <strong>herramienta estratégica</strong>, no solo actitudinal.
            </p>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">⚠️ Error conceptual frecuente</h4>
              <p>
                Muchos confunden: <strong>Comunicación positiva = "ser amable"</strong>
              </p>
              <p style={{ marginTop: '0.5em' }}>
                <strong>Corrección:</strong> No es suavizar todo ni evitar decir límites. 
                Es <strong>comunicar límites sin generar rechazo</strong>.
              </p>
            </div>

            <div className="divider" />

            {/* LOS 5 ERRORES CRÍTICOS */}
            <h3 style={{ marginTop: '2em', color: '#dc2626' }}>⚠️ Los 5 errores críticos en comunicación</h3>

            {/* ERROR 1 */}
            <div style={{ marginBottom: '2em', padding: '1.2em', background: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              <h4 style={{ color: '#dc2626', marginTop: 0 }}>1. Lenguaje negativo → bloqueo cognitivo del cliente</h4>
              <p>El uso del "no" activa resistencia automática.</p>
              
              <div style={{ marginTop: '1em' }}>
                <p><strong>Patrón incorrecto:</strong></p>
                <ul style={{ marginLeft: '1.2em' }}>
                  <li>"No puedo hacerlo"</li>
                  <li>"No hay posibilidad"</li>
                </ul>
              </div>

              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p style={{ margin: 0 }}><strong>✅ Reformulación técnica:</strong> Sustituir negación por alternativa operativa</p>
                <div style={{ marginTop: '0.8em', padding: '0.8em', background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}>
                  <p style={{ margin: 0 }}>
                    <strong>❌</strong> "No puedo cambiarle la cita"<br />
                    <strong>✅</strong> "Puedo ofrecerle estas dos alternativas de horario"
                  </p>
                </div>
                <p style={{ marginTop: '0.8em', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
                  <strong>👉 Clave conceptual:</strong> No eliminas el límite, pero cambias la percepción de control.
                </p>
              </div>
            </div>

            {/* ERROR 2 */}
            <div style={{ marginBottom: '2em', padding: '1.2em', background: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              <h4 style={{ color: '#dc2626', marginTop: 0 }}>2. Palabra "problema" → activación emocional negativa</h4>
              <p>Nombrar "problema" refuerza la gravedad percibida del cliente.</p>
              
              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p><strong>Sustitución semántica:</strong></p>
                <p style={{ padding: '0.5em', background: '#fef3c7', borderRadius: '4px', fontWeight: 'bold' }}>
                  Problema → Incidencia / gestión / situación
                </p>
                <div style={{ marginTop: '0.8em', padding: '0.8em', background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}>
                  <p style={{ margin: 0 }}>
                    <strong>❌</strong> "Tiene un problema con su pedido"<br />
                    <strong>✅</strong> "Vamos a revisar la incidencia de su pedido"
                  </p>
                </div>
                <p style={{ marginTop: '0.8em', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
                  <strong>👉 Clave:</strong> Reduces carga emocional sin ocultar la realidad.
                </p>
              </div>
            </div>

            {/* ERROR 3 */}
            <div style={{ marginBottom: '2em', padding: '1.2em', background: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              <h4 style={{ color: '#dc2626', marginTop: 0 }}>3. Frases que confrontan → ruptura de la relación</h4>
              <p>Aquí entra directamente la falta de asertividad bien aplicada.</p>
              
              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p><strong>Error típico:</strong> Corregir al cliente de forma directa</p>
                <p><strong>Reformulación:</strong> Asumir responsabilidad comunicativa</p>
                <div style={{ marginTop: '0.8em', padding: '0.8em', background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}>
                  <p style={{ margin: 0 }}>
                    <strong>❌</strong> "Usted está equivocado"<br />
                    <strong>✅</strong> "Creo que no me he explicado bien, déjeme aclararlo"
                  </p>
                </div>
                <p style={{ marginTop: '0.8em', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
                  <strong>👉 Clave:</strong> Mantienes autoridad sin confrontación.
                </p>
              </div>
            </div>

            {/* ERROR 4 */}
            <div style={{ marginBottom: '2em', padding: '1.2em', background: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              <h4 style={{ color: '#dc2626', marginTop: 0 }}>4. Inseguridad verbal → pérdida de credibilidad</h4>
              <p>El lenguaje dubitativo reduce la confianza percibida.</p>
              
              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p><strong>Indicadores de baja seguridad:</strong></p>
                <ul style={{ marginLeft: '1.2em' }}>
                  <li>"Creo que…"</li>
                  <li>"Me parece…"</li>
                  <li>"En principio…"</li>
                </ul>
                <p><strong>Reformulación profesional:</strong> Uso de verbos de acción + proceso</p>
                <div style={{ marginTop: '0.8em', padding: '0.8em', background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}>
                  <p style={{ margin: 0 }}>
                    <strong>❌</strong> "Creo que eso tarda unos días"<br />
                    <strong>✅</strong> "Voy a confirmarlo y le doy el plazo exacto"
                  </p>
                </div>
                <p style={{ marginTop: '0.8em', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
                  <strong>👉 Clave:</strong> No necesitas saber todo, necesitas gestionar la incertidumbre correctamente.
                </p>
              </div>
            </div>

            {/* ERROR 5 */}
            <div style={{ marginBottom: '2em', padding: '1.2em', background: '#fef2f2', borderLeft: '4px solid #dc2626' }}>
              <h4 style={{ color: '#dc2626', marginTop: 0 }}>5. Imposición → resistencia del cliente</h4>
              <p>Dar órdenes genera rechazo automático.</p>
              
              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p><strong>Error:</strong> "Tiene que hacer…"</p>
                <p><strong>Reformulación:</strong> Explicar proceso + justificar</p>
                <div style={{ marginTop: '0.8em', padding: '0.8em', background: '#f0fdf4', borderLeft: '3px solid #22c55e' }}>
                  <p style={{ margin: 0 }}>
                    <strong>❌</strong> "Tiene que enviar un correo"<br />
                    <strong>✅</strong> "Para poder gestionarlo, necesitamos que nos envíe un correo con estos datos"
                  </p>
                </div>
                <p style={{ marginTop: '0.8em', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
                  <strong>👉 Clave:</strong> Conviertes obligación en colaboración.
                </p>
              </div>
            </div>

            <div className="divider" />

            {/* INTEGRACIÓN CON OTRAS HABILIDADES */}
            <h3 style={{ marginTop: '2em', color: '#2563eb' }}>🔗 Integración: empatía + asertividad + lenguaje positivo</h3>
            <p>
              El punto didáctico clave es que un mensaje profesional óptimo <strong>combina tres elementos</strong>:
            </p>

            <div style={{ padding: '1.5em', background: '#eff6ff', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Estructura funcional del mensaje profesional</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li><strong style={{ color: '#8b5cf6' }}>Empatía →</strong> "Entiendo su situación"</li>
                <li><strong style={{ color: '#ec4899' }}>Asertividad →</strong> "Lo que podemos hacer es…"</li>
                <li><strong style={{ color: '#10b981' }}>Lenguaje positivo →</strong> "La solución es…"</li>
              </ol>

              <div style={{ marginTop: '1.5em', padding: '1em', background: '#ffffff', borderRadius: '4px', border: '2px solid #3b82f6' }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1em' }}>💎 Fórmula operativa completa</p>
                <p style={{ margin: '0.8em 0 0 0', fontSize: '1.05em', color: '#1e40af' }}>
                  <strong>Empatizar + Reformular + Proponer solución</strong>
                </p>
              </div>
            </div>

            <div className="divider" />

            {/* MODELO PRÁCTICO PARA ALUMNOS */}
            <h3 style={{ marginTop: '2em', color: '#059669' }}>📋 Modelo práctico: Plantilla de respuesta telefónica</h3>
            <p>Este es el <strong>"guion mental"</strong> que debes interiorizar para cualquier interacción profesional:</p>

            <div style={{ marginTop: '1.5em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#065f46', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left', width: '30%' }}>Fase</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Frase modelo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#d1fae5' }}>1. Escucha activa</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Entiendo lo que me comenta…"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#d1fae5' }}>2. Validación emocional</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Es normal que le resulte molesto…"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#d1fae5' }}>3. Reformulación positiva</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Lo que vamos a hacer es…"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#d1fae5' }}>4. Acción concreta</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Voy a gestionar esto ahora mismo…"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#d1fae5' }}>5. Cierre seguro</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Le mantendré informado en todo momento"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* ACTIVIDAD DE TRADUCCIÓN PROFESIONAL */}
            <div className="callout callout--activity" style={{ marginTop: '2em', background: '#fef3c7', border: '2px solid #f59e0b' }}>
              <h4 className="callout-title">🎯 Actividad avanzada: "Traducción profesional"</h4>
              <p><strong>Objetivo:</strong> Transformar lenguaje negativo/agresivo en comunicación positiva y asertiva.</p>
              
              <div style={{ marginTop: '1em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p><strong>Instrucciones:</strong></p>
                <ol style={{ marginLeft: '1.2em' }}>
                  <li>Lee cada frase problemática</li>
                  <li>Identifica qué error crítico contiene (1-5)</li>
                  <li>Reescribe aplicando: lenguaje positivo + asertividad + enfoque en solución</li>
                </ol>
              </div>

              <div style={{ marginTop: '1em' }}>
                <p><strong>Frases para transformar:</strong></p>
                <ol style={{ marginLeft: '1.2em', lineHeight: '2' }}>
                  <li>"No se puede hacer eso"</li>
                  <li>"Eso no es así, usted no entendió"</li>
                  <li>"Tiene que esperar, no hay otra opción"</li>
                  <li>"Tiene un problema con su cuenta"</li>
                  <li>"Creo que me parece que tal vez en unos días…"</li>
                  <li>"No es mi departamento, llame a otro número"</li>
                </ol>
              </div>

              <div style={{ marginTop: '1.5em', padding: '1em', background: '#dcfce7', borderRadius: '4px', borderLeft: '4px solid #16a34a' }}>
                <p style={{ margin: 0 }}><strong>💡 Criterios de autoevaluación:</strong></p>
                <ul style={{ marginLeft: '1.2em', marginTop: '0.5em', marginBottom: 0 }}>
                  <li>¿Eliminé todas las negaciones?</li>
                  <li>¿Propuse una alternativa concreta?</li>
                  <li>¿Mantuve el respeto sin confrontar?</li>
                  <li>¿Usé verbos de acción y transmití seguridad?</li>
                </ul>
              </div>
            </div>

            <div className="divider" />

            {/* RÚBRICA DE EVALUACIÓN */}
            <h3 style={{ marginTop: '2em', color: '#7c3aed' }}>📊 Criterios de evaluación (rúbrica)</h3>
            <p>Usa esta tabla para evaluar tus respuestas o las de tus compañeros:</p>

            <div style={{ marginTop: '1.5em', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: '#7c3aed', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '20%' }}>Bajo (1-2)</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '20%' }}>Medio (3)</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '20%' }}>Alto (4-5)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Lenguaje positivo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>Usa negaciones</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Mezcla pos/neg</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Reformula todo</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Asertividad</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>Pasivo/agresivo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Aceptable</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Claro y respetuoso</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Enfoque en solución</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>No propone</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Propuesta parcial</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Siempre propone</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Seguridad</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>Dudoso</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Correcto</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Firme y profesional</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            {/* CIERRE CONCEPTUAL */}
            <div className="callout callout--insight" style={{ marginTop: '2em', background: '#ede9fe', border: '2px solid #7c3aed' }}>
              <h4 className="callout-title" style={{ color: '#7c3aed' }}>🎯 Cierre conceptual</h4>
              <p>
                La comunicación positiva en atención al cliente <strong>no es estética, es funcional</strong>:
              </p>
              <ul className="checklist" style={{ marginTop: '1em' }}>
                <li>✅ Reduce conflictos</li>
                <li>✅ Mejora la percepción del servicio</li>
                <li>✅ Aumenta la confianza del cliente</li>
                <li>✅ Facilita la resolución de problemas</li>
              </ul>
              <p style={{ marginTop: '1.5em', fontSize: '1.1em', fontWeight: 'bold', color: '#6d28d9' }}>
                Y, sobre todo: <strong>No cambia lo que dices, cambia cómo lo recibe el cliente</strong>.
              </p>
            </div>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.5 · COMUNICACIÓN ORAL
           ===================================================== */}
        <details className="topic-details">
          <summary>5.5 Comunicación oral de calidad: claridad, tono, cortesía y verificación</summary>
          <div className="topic-details__content">
            <p>
              En comunicación presencial, el objetivo es que el mensaje sea <strong>comprendido</strong>. Para ello se
              recomiendan expresiones breves, lenguaje conciso y vocabulario accesible, adaptado al receptor. Además,
              el <strong>feedback</strong> (retroalimentación) permite corregir malentendidos al instante.
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
              <li><strong>Hablar en primera persona:</strong> "Yo puedo hacer…" en lugar de sentencias ("Esto es así y ya").</li>
              <li><strong>Evitar negaciones innecesarias:</strong> cambia "No se puede" por "La opción viable es…".</li>
              <li><strong>Evitar muletillas y vacilaciones:</strong> "Ehh… bueno…" reduce credibilidad.</li>
              <li><strong>No usar argot ni frases agresivas:</strong> cuida profesionalidad.</li>
              <li><strong>No crear "falsa confianza":</strong> exceso de familiaridad puede molestar.</li>
            </ul>

            <div className="callout callout--tip">
              <h4 className="callout-title">✅ Verificación (feedback real)</h4>
              <p>
                Mejor que "¿Alguna duda?": <strong>"Para confirmar, dígame qué paso haría usted primero"</strong> o{' '}
                <strong>"¿Qué opción prefiere: A o B?"</strong>.
              </p>
            </div>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.6 · INTERACCIÓN PRESENCIAL
           ===================================================== */}
        <details className="topic-details">
          <summary>5.6 Interacción presencial: inicio, desarrollo y cierre</summary>
          <div className="topic-details__content">
            <p>
              En empresa, la comunicación presencial suele tener forma de "entrevista" o atención estructurada.
              Para que sea eficaz conviene seguir fases claras, que crean confianza, ordenan la conversación y
              aseguran un cierre correcto.
            </p>

            <h4>Fases de una entrevista o atención estructurada</h4>
            <ol>
              <li><strong>Inicio:</strong> saludo, presentación y explicación del motivo para crear clima de confianza.</li>
              <li><strong>Cuerpo central:</strong> recopilar información, aclarar necesidades, proponer opciones.</li>
              <li><strong>Cierre:</strong> resumen, acuerdo final, siguiente paso y despedida cordial.</li>
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
                <strong>Saludo + motivo + objetivo</strong> al inicio, y al final{' '}
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
            EPÍGRAFE 5.7 · EL PODER DEL SILENCIO
           ===================================================== */}
        <details className="topic-details">
          <summary>5.7 El poder del silencio en la atención al cliente</summary>
          <div className="topic-details__content">
            <p>
              En una negociación (especialmente cara a cara), el silencio no es "vacío": es una{' '}
              <strong>herramienta de comunicación</strong>. Bien usado, reduce tensión, mejora la escucha, aumenta la
              claridad y ayuda a que el cliente <strong>se autorregule</strong> (baje el tono, ordene ideas y concrete
              lo que realmente necesita).
            </p>

            <div className="callout callout--tip">
              <h4 className="callout-title">🧠 Idea clave</h4>
              <p>
                Quien tolera el silencio suele tener <strong>más control</strong> de la conversación. El silencio
                transmite calma, seguridad y autoridad sin elevar el conflicto.
              </p>
            </div>

            <details className="topic-details">
              <summary>1. Por qué el silencio funciona (psicología práctica)</summary>
              <div className="topic-details__content">
                <p>
                  Cuando dejamos un espacio de silencio, el cerebro del interlocutor "rellena" ese hueco: piensa,
                  reformula y suele aportar información adicional. En negociación, esto es oro, porque permite que el
                  cliente <strong>revele prioridades</strong> (precio vs. seguridad, urgencia vs. garantía, etc.).
                </p>
                <ul className="checklist">
                  <li><strong>Reduce tensión:</strong> baja el ritmo y evita respuestas impulsivas.</li>
                  <li><strong>Invita a concretar:</strong> el cliente amplía datos, matiza o se corrige.</li>
                  <li><strong>Refuerza tu profesionalidad:</strong> no "rellenas" con excusas o justificaciones.</li>
                  <li><strong>Aumenta percepción de control:</strong> transmites calma y seguridad.</li>
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

            <details className="topic-details">
              <summary>2. Tipos de silencio que te ayudan a negociar mejor</summary>
              <div className="topic-details__content">
                <h4>Silencio de escucha (2–4 segundos)</h4>
                <p>Tras una queja o una explicación emocional, no respondas en automático. Un breve silencio permite que el cliente se sienta escuchado y se calme. Después, respondes con empatía y plan.</p>
                <h4>Silencio de precisión (antes de preguntar)</h4>
                <p>Pausa un segundo y formula una pregunta clara. Evita preguntas atropelladas y demuestra control: "Déjeme entenderlo bien…" (pausa) "¿Cuándo ocurrió exactamente?"</p>
                <h4>Silencio de propuesta (después de ofrecer una solución)</h4>
                <p>Das la opción y <strong>callas</strong>. Esto evita que te "negocies a ti mismo" (añadir descuentos o concesiones innecesarias) y deja que el cliente procese y responda.</p>
                <h4>Silencio de límite (cuando el cliente presiona)</h4>
                <p>Tras marcar un límite asertivo, una pausa corta refuerza firmeza sin agresividad: "No puedo hacer X. Puedo ofrecer A o B." (pausa) "¿Cuál prefiere?"</p>
              </div>
            </details>

            <details className="topic-details">
              <summary>3. Cómo usar el silencio paso a paso (método simple)</summary>
              <div className="topic-details__content">
                <ol>
                  <li><strong>Regula tu cuerpo:</strong> postura estable, hombros relajados, mirada amable (no desafiante).</li>
                  <li><strong>Marca intención:</strong> "Quiero entenderlo bien para solucionarlo."</li>
                  <li><strong>Pausa breve:</strong> 2–4 segundos (sin mirar el móvil, sin gestos de impaciencia).</li>
                  <li><strong>Pregunta precisa:</strong> "¿Qué ocurrió primero?", "¿Qué necesita hoy para quedarse tranquilo/a?"</li>
                  <li><strong>Propuesta + silencio:</strong> das la solución y esperas.</li>
                  <li><strong>Cierre con confirmación:</strong> "Entonces queda así… ¿lo confirmamos?"</li>
                </ol>
                <div className="callout callout--tip">
                  <h4 className="callout-title">✅ Regla de oro</h4>
                  <p>Tras una propuesta, <strong>no añadas nada durante 3 segundos</strong>. Evita justificar de más o regalar concesiones por nervios.</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>4. Guiones cortos (silencio + frase) para situaciones reales</summary>
              <div className="topic-details__content">
                <h4>Cliente enfadado</h4>
                <p>"Entiendo." <span className="muted">(pausa 2–3s)</span> "Cuénteme qué pasó desde el principio y lo resolvemos paso a paso."</p>
                <h4>Cliente que interrumpe / no deja hablar</h4>
                <p>"Le escucho." <span className="muted">(pausa 2s)</span> "Para ayudarle, necesito un dato: ¿cuándo hizo la compra?"</p>
                <h4>Negociación de precio</h4>
                <p>"Este precio incluye garantía y soporte." <span className="muted">(pausa 3s)</span> "Si busca algo más ajustado, puedo ofrecerle esta alternativa."</p>
                <h4>Cliente que exige algo imposible</h4>
                <p>"No puedo hacer X." <span className="muted">(pausa 2–3s)</span> "Sí puedo ofrecerle A o B. ¿Qué opción prefiere?"</p>
              </div>
            </details>

            <details className="topic-details">
              <summary>5. Errores típicos (y cómo evitarlos)</summary>
              <div className="topic-details__content">
                <ul className="checklist">
                  <li><strong>Rellenar el silencio con excusas:</strong> debilita tu posición. Mejor: dato + solución + pausa.</li>
                  <li><strong>Silencio "castigo":</strong> mirar con frialdad o cruzar brazos se interpreta como desprecio.</li>
                  <li><strong>Pausas demasiado largas:</strong> generan inseguridad. Mejor 2–4 segundos (o 3 tras una propuesta).</li>
                  <li><strong>Usarlo sin escuchar:</strong> el silencio sirve para entender, no para "ganar".</li>
                </ul>
                <div className="callout callout--insight">
                  <h4 className="callout-title">🎯 Cierre</h4>
                  <p>
                    El silencio bien usado es una forma de <strong>respeto</strong> y de <strong>control</strong>: te
                    da tiempo para pensar, permite al cliente expresarse mejor y hace que tus propuestas suenen más
                    firmes, claras y profesionales.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.8 · COMUNICACIÓN NO VERBAL
           ===================================================== */}
        <details className="topic-details">
          <summary>5.8 Comunicación no verbal en atención al cliente</summary>
          <div className="topic-details__content">
            <p>
              En atención al cliente, el mensaje no lo transmite solo lo que dices: lo transmite{' '}
              <strong>cómo lo dices</strong>. La comunicación no verbal (y paraverbal) actúa como un "segundo idioma"
              que el cliente interpreta de forma rápida e inconsciente para decidir tres cosas esenciales:{' '}
              <strong>si eres profesional</strong>, <strong>si puede confiar</strong> y{' '}
              <strong>si le estás respetando</strong>.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">🎯 Idea clave</h4>
              <p>
                El cliente puede olvidar tus palabras exactas, pero rara vez olvida{' '}
                <strong>cómo se sintió</strong> durante la interacción. Ese "cómo se sintió" lo decide, en gran parte,
                tu comunicación no verbal.
              </p>
            </div>

            <div className="video-block">
              <h4 className="video-title">Comunicación no verbal (en español)</h4>
              <p className="video-meta muted">Objetivo: entender cómo gestos, mirada, postura y tono influyen en la percepción del cliente.</p>
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

            <details className="topic-details" open>
              <summary>1. Qué es y por qué es crítica en atención al cliente</summary>
              <div className="topic-details__content">
                <p>
                  Llamamos comunicación no verbal al conjunto de señales que emitimos <strong>sin palabras</strong>:
                  postura, gestos, expresiones faciales, mirada, distancia, orientación del cuerpo, movimientos,
                  apariencia… Se vuelve crítica porque el cliente suele llegar con una necesidad emocional de fondo:{' '}
                  <strong>seguridad</strong>, <strong>respeto</strong> y <strong>control</strong>.
                </p>
                <p>
                  Cuando el cliente está molesto, ansioso o inseguro, su cerebro "lee" señales no verbales como si
                  fueran un escáner de intención: "¿me va a ayudar o me va a despachar?", "¿me escucha o está a lo
                  suyo?". Si tus señales dicen "prisa", "frialdad" o "desinterés", tu discurso pierde valor aunque
                  sea correcto.
                </p>
                <div className="card card--muted">
                  <h3>Lo que el cliente interpreta en segundos</h3>
                  <ul className="checklist">
                    <li><strong>Fiabilidad:</strong> ¿pareces seguro/a y competente?</li>
                    <li><strong>Respeto:</strong> ¿tu actitud reconoce su problema o lo minimiza?</li>
                    <li><strong>Disponibilidad:</strong> ¿estás presente o "con la cabeza en otra parte"?</li>
                    <li><strong>Justicia:</strong> ¿transmites imparcialidad o juicio?</li>
                  </ul>
                </div>
                <div className="callout callout--tip">
                  <h4 className="callout-title">🧠 Regla práctica</h4>
                  <p>Si tus palabras dicen "te entiendo", pero tu cuerpo dice "tengo prisa", el cliente cree a tu cuerpo.</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>2. La voz (paraverbal): tono, ritmo y pausas que cambian el resultado</summary>
              <div className="topic-details__content">
                <p>En atención al cliente, la voz funciona como un "marcador emocional" del mensaje. No es solo qué dices, sino <strong>qué tono</strong>, <strong>qué velocidad</strong> y <strong>qué seguridad</strong> transmite tu voz.</p>
                <table className="table">
                  <thead>
                    <tr><th>Elemento</th><th>Qué transmite</th><th>Cómo usarlo bien</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Tono</strong></td><td>Calma vs. confrontación</td><td>Amable y firme; evita ironía o sarcasmo</td></tr>
                    <tr><td><strong>Ritmo</strong></td><td>Control vs. nervios</td><td>Ritmo medio; baja velocidad cuando das pasos/condiciones</td></tr>
                    <tr><td><strong>Volumen</strong></td><td>Seguridad vs. agresividad</td><td>Volumen estable; no compitas si el cliente grita</td></tr>
                    <tr><td><strong>Pausas</strong></td><td>Autoridad y claridad</td><td>Pausa antes de una propuesta y después de dar opciones</td></tr>
                    <tr><td><strong>Pronunciación</strong></td><td>Profesionalidad</td><td>Articula; evita muletillas y "eh…" repetidos</td></tr>
                  </tbody>
                </table>
                <div className="callout callout--warning">
                  <h4 className="callout-title">⚠️ Error típico</h4>
                  <p>Subir el volumen para "ganar" la conversación. Si el cliente grita, tú bajas un punto: eso transmite control y baja la escalada.</p>
                </div>
                <div className="callout callout--tip">
                  <h4 className="callout-title">✅ Técnica rápida</h4>
                  <p><strong>Una frase = una idea.</strong> Si vas a dar instrucciones, separa en pasos con pausas: "Primero… (pausa) Segundo… (pausa) Y por último…".</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>3. Mirada y expresión facial: el "termómetro" de interés y respeto</summary>
              <div className="topic-details__content">
                <p>La mirada y la cara son lo primero que el cliente interpreta. El objetivo es una <strong>expresión profesional cálida</strong>: amable, atenta y coherente con el momento.</p>
                <div className="card card--muted">
                  <h3>Buenas prácticas</h3>
                  <ul className="checklist">
                    <li><strong>Mirada estable (sin fijar):</strong> alterna contacto visual y miradas breves a la documentación.</li>
                    <li><strong>Ceño relajado:</strong> evita fruncir el ceño (se interpreta como juicio o molestia).</li>
                    <li><strong>Asentir suavemente:</strong> refuerza escucha sin interrumpir.</li>
                    <li><strong>Micro-sonrisa puntual:</strong> en saludo y cierre; durante queja, prioriza seriedad empática.</li>
                  </ul>
                </div>
                <div className="callout callout--example">
                  <h4 className="callout-title">🎭 Mini-ejemplo</h4>
                  <p>Cliente: "Estoy harto, llevo tres días esperando."<br />Respuesta no verbal eficaz: mirada atenta + expresión seria y empática + asentir + postura abierta. Luego verbalizas: "Entiendo la molestia. Vamos a revisar el estado ahora mismo."</p>
                </div>
                <div className="callout callout--warning">
                  <h4 className="callout-title">🚫 Evita</h4>
                  <p>Poner los ojos en blanco, mirar al ordenador sin explicar, suspirar o sonreír mientras el cliente se queja. Esas señales se interpretan como burla o desprecio.</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>4. Postura y gestos: cómo tu cuerpo transmite "estoy contigo" o "me estorbas"</summary>
              <div className="topic-details__content">
                <p>La postura y los gestos construyen la sensación de disponibilidad. Una postura cerrada suele interpretarse como barrera; una postura abierta transmite cooperación y calma.</p>
                <table className="table">
                  <thead>
                    <tr><th>Señal</th><th>Cómo se interpreta</th><th>Alternativa profesional</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Brazos cruzados</td><td>Defensa / juicio</td><td>Manos visibles, brazos relajados</td></tr>
                    <tr><td>Cuerpo girado hacia otro lado</td><td>Desinterés</td><td>Orientación frontal o 45º (acompañamiento)</td></tr>
                    <tr><td>Señalar con el dedo</td><td>Acusación</td><td>Señalar con mano abierta o indicar con la palma</td></tr>
                    <tr><td>Gestos rápidos / nerviosos</td><td>Inseguridad</td><td>Gestos lentos y mínimos</td></tr>
                    <tr><td>Inclinarse demasiado</td><td>Invasión / presión</td><td>Distancia cómoda + inclinación leve al escuchar</td></tr>
                  </tbody>
                </table>
                <div className="callout callout--tip">
                  <h4 className="callout-title">✅ Postura "base" recomendada</h4>
                  <p>Espalda erguida pero no rígida, hombros relajados, manos visibles, pies estables y cuerpo orientado hacia el cliente. Esto transmite presencia y calma.</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>5. Distancia y espacio (proxémica): negociar sin invadir y sin "alejarte"</summary>
              <div className="topic-details__content">
                <p>La distancia física influye en la percepción de respeto. En atención al cliente, además, importa la <strong>privacidad</strong>: hay temas que conviene tratar en un punto más discreto.</p>
                <ul className="checklist">
                  <li><strong>Si el cliente está alterado:</strong> mantén distancia cómoda y postura abierta (baja la amenaza).</li>
                  <li><strong>Si hay datos sensibles:</strong> ofrece moverte a un lugar más discreto o baja el volumen.</li>
                  <li><strong>Si necesitas mostrar algo:</strong> no invadas su espacio; invita: "Si quiere, se lo enseño aquí".</li>
                </ul>
                <div className="callout callout--example">
                  <h4 className="callout-title">🧩 Frase útil</h4>
                  <p>"Para explicárselo bien y con privacidad, si le parece, nos ponemos aquí un momento."</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>6. Imagen personal y profesional: el "primer mensaje" antes de hablar</summary>
              <div className="topic-details__content">
                <p>En la primera impresión, el cliente forma hipótesis: "¿esta persona sabe?", "¿me va a ayudar?". La imagen (higiene, orden, uniforme/ropa adecuada, cuidado general) funciona como señal de <strong>fiabilidad</strong>.</p>
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
                  <p>No es "ir elegante": es transmitir <strong>orden y profesionalidad</strong>. Eso reduce la sensación de riesgo del cliente.</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>7. Coherencia: cuando tu cuerpo contradice tus palabras</summary>
              <div className="topic-details__content">
                <p>El cliente confía más en señales no verbales que en palabras cuando hay contradicción. Por eso, el objetivo es que tu comunicación sea <strong>congruente</strong>.</p>
                <div className="card card--muted">
                  <h3>Ejemplos de incoherencia típica</h3>
                  <ul className="checklist">
                    <li>Decir "le entiendo" mientras miras la pantalla sin explicarle nada.</li>
                    <li>Decir "no se preocupe" con tono seco y brazos cruzados.</li>
                    <li>Decir "ahora lo resolvemos" mientras suspiras o frunces el ceño.</li>
                  </ul>
                </div>
                <div className="callout callout--tip">
                  <h4 className="callout-title">✅ Ajuste rápido (en 10 segundos)</h4>
                  <p>1) baja hombros, 2) manos visibles, 3) mira al cliente, 4) asiente, 5) frase clara: "Vamos paso a paso".</p>
                </div>
              </div>
            </details>

            <details className="topic-details">
              <summary>8. Cómo adaptar lo no verbal según el tipo de cliente</summary>
              <div className="topic-details__content">
                <table className="table">
                  <thead>
                    <tr><th>Tipo de cliente</th><th>Qué necesita sentir</th><th>Señales no verbales útiles</th><th>Qué evitar</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Agresivo</strong></td><td>Control y límites</td><td>Postura estable, voz baja, gestos mínimos, distancia cómoda</td><td>Señalar, acercarte, competir en volumen</td></tr>
                    <tr><td><strong>Minucioso</strong></td><td>Seguridad y precisión</td><td>Mirada atenta, ritmo calmado, mostrar documentos, asentir</td><td>Prisas, gestos nerviosos, mirar al reloj</td></tr>
                    <tr><td><strong>Indeciso</strong></td><td>Apoyo y guía</td><td>Sonrisa suave, postura abierta, gestos de "opciones" con mano abierta</td><td>Presión corporal, invadir espacio</td></tr>
                    <tr><td><strong>Autoritario</strong></td><td>Respeto sin sumisión</td><td>Postura firme, voz segura, mirada estable, pausas</td><td>Encogerte, justificarte de más, gestos de duda</td></tr>
                    <tr><td><strong>Socializador</strong></td><td>Cercanía con orden</td><td>Expresión cálida, asentir, contacto visual amable</td><td>Cortar en seco, frialdad facial</td></tr>
                  </tbody>
                </table>
              </div>
            </details>

            <details className="topic-details">
              <summary>9. Micro-ejercicios: entrenamiento rápido</summary>
              <div className="topic-details__content">
                <div className="callout callout--activity">
                  <h4 className="callout-title">✅ Ejercicio 1: "Alinea tu cuerpo" (1 minuto)</h4>
                  <p>Ponte en postura base: hombros relajados, manos visibles, mirada amable. Di en voz alta: "Vamos a resolverlo paso a paso". Repite cambiando solo el tono (calmado vs. seco) y observa cómo cambia el efecto.</p>
                </div>
                <div className="callout callout--activity">
                  <h4 className="callout-title">✅ Ejercicio 2: "Silencio profesional" (30 segundos)</h4>
                  <p>Practica una pausa de 3 segundos después de ofrecer una solución. Mantén mirada amable y asentimiento leve. Objetivo: no rellenar el silencio con concesiones.</p>
                </div>
                <div className="callout callout--activity">
                  <h4 className="callout-title">✅ Ejercicio 3: "Gestos que ayudan" (2 minutos)</h4>
                  <p>Explica una política (cambio/devolución) usando mano abierta para enumerar 3 pasos (1, 2, 3). Objetivo: que el gesto refuerce claridad, no presión.</p>
                </div>
              </div>
              <div className="callout callout--activity" style={{ margin: '1.5em 0', border: '2px solid #2563eb', background: '#eff6ff' }}>
  <h4 className="callout-title">🗣️🤲 Actividad: ¿Dices lo que sientes?</h4>
  <p><strong>Objetivo:</strong> Experimentar la diferencia entre coherencia e incoherencia entre el mensaje verbal y la actitud no verbal en atención al cliente.</p>
  <ol style={{ marginLeft: '1.2em' }}>
    <li><strong>Equipo 1:</strong> Elige una frase positiva ("Estoy aquí para ayudarte", "Me alegra atenderte", "Vamos a buscar la mejor solución"). Acompañadla con gestos, mirada, postura y tono que refuercen el mensaje (sonrisa, contacto visual, cuerpo orientado, voz cálida).</li>
    <li><strong>Equipo 2:</strong> Usa la misma frase, pero la actitud no verbal debe contradecir el mensaje (mirada esquiva, brazos cruzados, tono monótono, suspiro, postura cerrada).</li>
  </ol>
  <p><strong>Ejemplos inspiradores:</strong></p>
  <ul>
    <li>Un agente que dice "Estoy para ayudarle" y sonríe, asiente y mantiene contacto visual transmite confianza y cercanía.</li>
    <li>Un agente que repite "Estoy para ayudarle" mirando el móvil, con los brazos cruzados y tono frío, genera desconfianza y rechazo.</li>
    <li>En una tienda, un "¡Bienvenido!" con energía y apertura invita a entrar; el mismo saludo con desgana y sin mirar al cliente provoca incomodidad.</li>
  </ul>
  <p><strong>Reflexión final:</strong> ¿Qué sentiste al recibir un mensaje incoherente? ¿Cómo cambia la percepción del cliente según la actitud no verbal?</p>
</div>
            </details>

            <details className="topic-details">
              <summary>10. Checklist final: comunicación no verbal excelente</summary>
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
                    <li>Mira al cliente al inicio y al cerrar; alterna con documentos sin "desaparecer".</li>
                    <li>Asiente y usa gestos mínimos para reforzar escucha.</li>
                    <li>Evita gestos de prisa: reloj, suspiros, teclear sin explicar.</li>
                    <li>Usa pausas para dar claridad y no precipitar concesiones.</li>
                  </ul>
                </div>
                <div className="divider" />
                <div className="callout callout--insight">
                  <h4 className="callout-title">🌟 Cierre didáctico</h4>
                  <p>La comunicación no verbal es tu "marca personal" en cada interacción. Si dominas postura, mirada, voz y coherencia, aumentas la confianza, reduces conflictos y haces que la solución sea aceptada más rápido. En atención al cliente, eso es excelencia.</p>
                </div>
              </div>
            </details>
          </div>
        </details>

        {/* =====================================================
            EPÍGRAFE 5.9 · VÍDEOS DE REFUERZO
           ===================================================== */}
        <details className="topic-details">
          <summary>5.9 🎥 Vídeos de refuerzo: empatía, escucha activa y asertividad</summary>
          <div className="topic-details__content">
            <p className="muted">Vídeos en español para ver técnicas en acción.</p>

            <div className="video-block">
              <h4 className="video-title">Empatía en servicio al cliente (validar sin ceder control)</h4>
              <p className="video-meta muted">Objetivo: reconocer emoción + devolver la conversación al plan de solución.</p>
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
              <p className="video-meta muted">Objetivo: evitar malentendidos y cerrar acuerdos claros.</p>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/JXowXT-Es-U"
                  title="Escucha activa en atención al cliente"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="divider" />

            <div className="video-block">
              <div className="video-title">Escucha, empatía y asertividad</div>
              <p className="video-meta muted">Objetivo: reforzar los conceptos de escucha, empatía y asertividad.</p>
              <div className="embed">
                <iframe
                  src="https://www.youtube.com/embed/8zdicRDLSDY"
                  title="Escucha, empatía y asertividad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </details>

        {/* =====================================================
            CIERRE DIDÁCTICO
           ===================================================== */}
        <details className="topic-details">
          <summary>Cierre didáctico: la comunicación presencial como "teatro en vivo"</summary>
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

        {/* =====================================================
            ACTIVIDADES PRÁCTICAS FINALES
           ===================================================== */}
        <details className="topic-details">
          <summary>Actividades prácticas finales</summary>
          <div className="topic-details__content">
            <div className="callout callout--activity">
              <h4 className="callout-title">🎨 Mural colaborativo</h4>
              <p>En grupos, cread un mural digital (Padlet, Miro, Jamboard) donde representéis ejemplos de buena y mala comunicación presencial en atención al cliente. Incluid imágenes, frases y gestos clave.</p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">🗣️ Mesa redonda</h4>
              <p>Organizad una mesa redonda para debatir: "¿Qué pesa más en la atención presencial, la actitud o el conocimiento técnico?". Cada grupo debe defender una postura con argumentos y ejemplos.</p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">🎭 Role play general</h4>
              <p>Por parejas, simulad una situación de atención presencial difícil (cliente enfadado, malentendido, etc.). Practicad la escucha activa, la empatía y la asertividad. El resto del grupo dará feedback.</p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">🧠 Mapa mental</h4>
              <p>Elaborad un mapa mental que resuma las claves de la comunicación presencial efectiva: fases, técnicas, errores a evitar y ejemplos reales.</p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">📰 Infografía</h4>
              <p>Diseñad una infografía (Canva, Piktochart) sobre "Los 5 errores más comunes en la comunicación presencial y cómo evitarlos".</p>
            </div>
            <div className="callout callout--activity">
              <h4 className="callout-title">💡 Propuesta libre</h4>
              <p>Propón una actividad creativa relacionada con el tema (podcast, vídeo, entrevista, etc.) y preséntala al grupo.</p>
            </div>
            <div className="callout callout--activity" style={{ marginTop: '2em', border: '2px solid #f59e0b', background: '#fff7ed' }}>
              <h4 className="callout-title">🎭 Actividad avanzada: "Escucha sin arreglar" y política empresarial</h4>
              <p><strong>Objetivo:</strong> Desarrollar empatía operativa en atención al cliente, respetando las reglas y políticas de la empresa.</p>
              <ol style={{ marginLeft: '1.2em' }}>
                <li><strong>Fase 1 – Escucha pura (3 min):</strong> El agente solo puede escuchar, validar emociones y reformular. <em>Prohibido dar soluciones, prometer acciones o saltarse la política de empresa.</em></li>
                <li><strong>Fase 2 – Validación emocional (3 min):</strong> El agente debe nombrar la emoción, reconocer el impacto y mostrar comprensión, sin comprometerse a nada fuera de la política.</li>
                <li><strong>Fase 3 – Reformulación (2 min):</strong> El agente resume el problema y la emoción, sin resolver ni prometer nada fuera de las normas.</li>
                <li><strong>Fase 4 – Respuesta alineada:</strong> Ahora sí, el agente puede explicar la política de empresa y, si es posible, ofrecer una solución dentro de las reglas.</li>
              </ol>
              <p><strong>Roles:</strong> Cliente (con guion emocional), Agente, Observador (evalúa empatía y respeto a la política).</p>
              <p><strong>Rúbrica de observación:</strong> ¿Escucha sin interrumpir? ¿Identifica y valida emociones? ¿Evita saltarse la política? ¿Reformula correctamente? ¿Solo ofrece soluciones alineadas con la empresa?</p>
              <p><strong>Cierre reflexivo:</strong> ¿Qué te costó más: escuchar sin resolver o no saltar la política? ¿Cómo se puede ser empático y profesional a la vez?</p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
};

export default Tema05;
