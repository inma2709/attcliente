import TopicLayout from "../../components/TopicLayout";

const TemaGestionEmocional = () => {
  // Vídeos relacionados (YouTube)
  const VIDEO_IE_SERVICIO = "fCBCGx-RJeA"; // Inteligencia emocional en atención al cliente
  const VIDEO_IE_APLICADA = "fjgFBebvie0"; // Inteligencia emocional y servicio al cliente
  const VIDEO_CLIENTES_DIFICILES = "-5rsN4Yj5sE"; // Manejo de clientes difíciles + IE

  return (
    <TopicLayout
      numero="XX"
      title="Gestión Emocional del Profesional: Rendimiento Bajo Presión"
      intro="En atención al cliente, el conocimiento técnico no basta: el rendimiento real depende de la capacidad de regular emociones, sostener la calidad comunicativa y decidir con criterio bajo presión. Este tema aborda modelos, técnicas y rutinas profesionales para prevenir el burnout, gestionar conflictos y mantener una atención excelente incluso en situaciones difíciles."
    >
      {/* ============================= */}
      {/* SECCIÓN 1: Objetivos y mapa del tema */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1. Objetivos de aprendizaje</h2>
          <span className="topic-section__meta">Marco universitario · Competencias aplicadas</span>
        </div>

        <div className="learning-objectives">
          <h3>Al finalizar, serás capaz de:</h3>
          <ul className="checklist">
            <li>Explicar la relación entre emoción, conducta comunicativa y calidad del servicio.</li>
            <li>Aplicar técnicas de autocontrol y autorregulación en interacciones tensas.</li>
            <li>Diseñar rutinas preventivas contra el estrés crónico y el burnout.</li>
            <li>Gestionar clientes difíciles sin escaladas emocionales, manteniendo límites profesionales.</li>
            <li>Usar micro-habilidades (silencio, pausas, reformulación, respiración) en tiempo real.</li>
          </ul>
        </div>

        <div className="callout callout--activity">
          <div className="callout-title">🤔 Pregunta de reflexión</div>
          <p>
            Cuando algo te supera en una atención, ¿<strong>reaccionas</strong> (impulso) o <strong>respondes</strong>{" "}
            (elección consciente)?
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2: Teoría (Acordeón) */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2. Fundamentos: emoción, rendimiento y servicio</h2>
          <span className="topic-section__meta">Bases psicológicas + enfoque profesional</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>2.1. Por qué la gestión emocional es una competencia “central” en atención al cliente</summary>
            <div className="topic-details__content">
              <p>
                En atención al cliente, la emoción no es un “añadido”: es el <strong>medio</strong> sobre el que circula la
                interacción. La calidad del servicio se construye en micro-decisiones (tono, pausas, elección de palabras,
                nivel de escucha) que dependen del <strong>estado interno</strong> del profesional.
              </p>

              <p>
                Cuando el estado emocional se desregula, aparecen tres efectos típicos: (1) deterioro de la comunicación
                (interrupciones, defensividad, rigidez), (2) errores cognitivos (sesgo, prisa, interpretación hostil) y
                (3) escalada del conflicto (respuesta al ataque, pérdida de empatía).
              </p>

              <div className="callout callout--tip">
                <div className="callout-title">🧠 Idea clave</div>
                <p>
                  La gestión emocional es una competencia de <strong>calidad</strong>: protege la experiencia del cliente
                  y la salud del profesional.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Modelo de “doble foco”: tarea + relación</summary>
            <div className="topic-details__content">
              <p>
                En atención al cliente siempre operan dos planos: el plano de la <strong>tarea</strong> (resolver un
                problema, informar, tramitar) y el plano de la <strong>relación</strong> (cómo se siente el cliente,
                percepción de justicia, trato, confianza).
              </p>

              <p>
                La presión suele estrechar el foco y llevarnos a “solo tarea”. Sin embargo, la excelencia implica
                sostener ambos: resolver y, a la vez, regular la relación para evitar rupturas.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Plano</th>
                    <th>Pregunta guía</th>
                    <th>Riesgo si se ignora</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tarea</td>
                    <td>¿Qué solución es correcta y viable?</td>
                    <td>Promesas imposibles / errores de procedimiento</td>
                  </tr>
                  <tr>
                    <td>Relación</td>
                    <td>¿Cómo se siente y qué interpreta el cliente?</td>
                    <td>Conflicto, queja, pérdida de confianza</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.3. Autocontrol vs autorregulación</summary>
            <div className="topic-details__content">
              <p>
                <strong>Autocontrol</strong> es frenar la reacción impulsiva. <strong>Autorregulación</strong> es modular
                activamente el estado interno para responder con eficacia. En la práctica, el autocontrol evita el
                “incendio”; la autorregulación mantiene el “clima” estable durante toda la interacción.
              </p>

              <ul className="checklist">
                <li>Autocontrol: “paro, respiro, no contesto al impulso”.</li>
                <li>Autorregulación: “reencuadro, estabilizo mi tono, elijo estrategia”.</li>
              </ul>

              <div className="callout callout--example">
                <div className="callout-title">🗣️ Ejemplo</div>
                <p>
                  Cliente: “¡Esto es una vergüenza!” → Autocontrol: no entrar al choque. Autorregulación: bajar activación,
                  validar emoción sin conceder culpa, y conducir a opciones.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.4. Estrés, carga emocional y burnout</summary>
            <div className="topic-details__content">
              <p>
                El estrés en atención al cliente no procede solo del volumen de trabajo, sino de la <strong>carga emocional</strong>:
                sostener calma frente a enfado, gestionar injusticias percibidas, y mantener cortesía aunque exista agresión verbal.
              </p>

              <p>
                El <strong>burnout</strong> suele aparecer como tríada: agotamiento emocional, despersonalización (trato frío,
                cinismo) y baja realización (sensación de ineficacia). Detectarlo temprano es clave.
              </p>

              <div className="callout callout--warning">
                <div className="callout-title">⚠️ Señales tempranas</div>
                <ul>
                  <li>Irritabilidad sostenida y fatiga mental al empezar la jornada.</li>
                  <li>Rumiar conversaciones tras el trabajo (no “desconectar”).</li>
                  <li>Bajada de empatía y aumento de respuestas automáticas.</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 3: Herramientas prácticas */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Técnicas de regulación en tiempo real</h2>
          <span className="topic-section__meta">Aplicación inmediata en interacción</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>3.1. Técnica STOP (pausa estratégica)</summary>
            <div className="topic-details__content">
              <p>
                Una técnica simple y potente para cortar el automatismo emocional:
              </p>
              <ol>
                <li>
                  <strong>Stop</strong>: detén la reacción (no contestes al impulso).
                </li>
                <li>
                  <strong>Toma aire</strong>: 2–3 respiraciones más lentas de lo normal.
                </li>
                <li>
                  <strong>Observa</strong>: ¿qué emoción tengo? ¿qué está intentando el cliente?
                </li>
                <li>
                  <strong>Procede</strong>: elige una respuesta orientada a objetivo (solución + relación).
                </li>
              </ol>

              <div className="callout callout--tip">
                <div className="callout-title">💡 Micro-hábito</div>
                <p>
                  Antes de responder, cuenta mentalmente “1–2”. Ese segundo extra reduce impulsividad y mejora el tono.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.2. Respiración funcional (bajar activación sin “desconectarte”)</summary>
            <div className="topic-details__content">
              <p>
                El objetivo no es “relajarse” totalmente, sino bajar el exceso de activación para pensar mejor.
                Una pauta útil: <strong>inhalación 4</strong> + <strong>exhalación 6</strong> durante 30–60 segundos.
              </p>
              <ul className="checklist">
                <li>Exhalación más larga = señal de seguridad al sistema nervioso.</li>
                <li>Mejora claridad verbal y reduce el tono defensivo.</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.3. Reencuadre cognitivo (de ataque a necesidad)</summary>
            <div className="topic-details__content">
              <p>
                Muchos conflictos se intensifican por atribuciones: “me está faltando al respeto” vs “está desbordado”.
                Reencuadrar no excusa conductas agresivas, pero permite responder con estrategia.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Lectura automática</th>
                    <th>Reencuadre útil</th>
                    <th>Respuesta profesional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>“Me está atacando”</td>
                    <td>“Está frustrado por el impacto”</td>
                    <td>Validar emoción + guiar a opciones</td>
                  </tr>
                  <tr>
                    <td>“Quiere discutir”</td>
                    <td>“Quiere sentirse escuchado”</td>
                    <td>Escucha activa + resumen + siguiente paso</td>
                  </tr>
                  <tr>
                    <td>“No entiende nada”</td>
                    <td>“Le falta información clara”</td>
                    <td>Explicación simple + confirmación</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.4. Límites y asertividad: respeto sin sumisión</summary>
            <div className="topic-details__content">
              <p>
                Ser empático no significa permitir abuso. La asertividad establece límites sin agresión:
                <strong>“entiendo”</strong> + <strong>“no puedo”</strong> + <strong>“sí puedo ofrecer”</strong>.
              </p>

              <div className="callout callout--example">
                <div className="callout-title">🧩 Fórmula útil</div>
                <p>
                  “Entiendo tu situación y que estés molesto. No puedo realizar X, pero sí puedo ofrecerte A o B ahora mismo.”
                </p>
              </div>

              <ul className="checklist">
                <li>Evita el “tú” acusatorio; prioriza “yo / nosotros” y hechos verificables.</li>
                <li>Repite el límite de forma calmada (técnica del disco rayado).</li>
                <li>Si hay insultos, activa protocolo: advertencia + reconducción + cierre si persiste.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 4: Protocolo de clientes difíciles */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Intervención con clientes difíciles</h2>
          <span className="topic-section__meta">Prevención de escaladas + resolución</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>4.1. Mapa de escalada: señales y puntos de intervención</summary>
            <div className="topic-details__content">
              <p>
                La escalada suele seguir un patrón: frustración → acusación → amenaza/ultimátum. La intervención eficaz
                ocurre temprano: cuando aún hay margen para reorientar.
              </p>

              <ul className="checklist">
                <li><strong>Señales tempranas</strong>: ironía, interrupciones, “siempre/nunca”.</li>
                <li><strong>Punto de intervención</strong>: validar + acotar + opciones.</li>
                <li><strong>Señal de riesgo</strong>: insultos, gritos, amenazas → límites + protocolo.</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.2. Técnica L.E.A.P. (escucha estratégica)</summary>
            <div className="topic-details__content">
              <ol>
                <li>
                  <strong>Listen</strong>: escucha sin preparar la defensa.
                </li>
                <li>
                  <strong>Empathize</strong>: reconoce emoción (“entiendo que…”).
                </li>
                <li>
                  <strong>Agree</strong>: busca un punto común (“queremos resolverlo hoy”).
                </li>
                <li>
                  <strong>Partner</strong>: colabora (“te propongo…”).
                </li>
              </ol>

              <div className="callout callout--tip">
                <div className="callout-title">🎯 Clave</div>
                <p>
                  Acordar no es ceder culpa: es construir un terreno común para avanzar.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.3. Comunicación post-incidente: “cierre limpio”</summary>
            <div className="topic-details__content">
              <p>
                Tras una interacción dura, el profesional necesita un cierre interno (para no arrastrar emoción a la siguiente
                atención) y un cierre externo (para que el cliente perciba orden y profesionalidad).
              </p>

              <ul className="checklist">
                <li>Resume hechos y acuerdos: “Hemos quedado en…”</li>
                <li>Define próximos pasos con tiempos: “Hoy registramos…, en 24–48h…”</li>
                <li>Frase final reguladora: “Gracias por tu paciencia; estoy aquí para ayudarte.”</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 5: Rutinas anti-burnout */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Prevención del burnout: autocuidado profesional</h2>
          <span className="topic-section__meta">Sostenibilidad del rendimiento</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>5.1. Higiene mental: rituales breves entre atenciones</summary>
            <div className="topic-details__content">
              <p>
                No siempre puedes “descansar”, pero sí puedes resetear tu sistema. Micro-rituales de 30–90 segundos
                reducen acumulación emocional.
              </p>
              <ul className="checklist">
                <li>Respirar 30s + soltar hombros + relajar mandíbula.</li>
                <li>Reetiquetar: “Fue difícil, pero terminó”.</li>
                <li>Volver al foco: “Siguiente caso, nueva persona”.</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>5.2. Plan personal de regulación (plantilla práctica)</summary>
            <div className="topic-details__content">
              <p>
                Diseña tu plan con tres niveles: <strong>antes</strong> (preparación), <strong>durante</strong> (técnicas)
                y <strong>después</strong> (descarga).
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Momento</th>
                    <th>Objetivo</th>
                    <th>Acción concreta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Antes</td>
                    <td>Entrar centrado</td>
                    <td>Respirar 4–6 (45s) + intención “calma y claridad”</td>
                  </tr>
                  <tr>
                    <td>Durante</td>
                    <td>Evitar escalada</td>
                    <td>STOP + validación + opciones</td>
                  </tr>
                  <tr>
                    <td>Después</td>
                    <td>Cierre limpio</td>
                    <td>Resumen, registro, micro-descarga (30–60s)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>

        <div className="callout callout--activity">
          <div className="callout-title">🧪 Mini-ejercicio</div>
          <p>
            Escribe 3 frases “límite” que puedas usar con clientes difíciles (con respeto) y 3 frases de validación emocional.
            Practícalas en voz alta para que te salgan naturales bajo presión.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 6: Vídeos relacionados */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>6. Vídeos relacionados (para consolidar)</h2>
          <span className="topic-section__meta">Ver al final de la teoría</span>
        </div>

        <div className="video-block">
          <div>
            <div className="video-title">🎥 Inteligencia emocional en atención al cliente</div>
            <div className="video-meta">
              Enfoca regulación emocional, empatía aplicada y cómo sostener la relación sin perder la tarea.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_IE_SERVICIO}`}
              title="Inteligencia emocional en atención al cliente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div>
            <div className="video-title">🎥 Inteligencia emocional aplicada al servicio al cliente</div>
            <div className="video-meta">
              Aterriza habilidades emocionales y comunicación para mejorar experiencia y reducir conflicto.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_IE_APLICADA}`}
              title="Inteligencia emocional y servicio al cliente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div>
            <div className="video-title">🎥 Manejo de clientes difíciles con inteligencia emocional</div>
            <div className="video-meta">
              Estrategias para desescalar, sostener límites y reconducir a soluciones sin desgaste.
            </div>
          </div>

          <div className="embed">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_CLIENTES_DIFICILES}`}
              title="Manejo de clientes difíciles con inteligencia emocional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 7: Debate */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>7. Debate dirigido</h2>
          <span className="topic-section__meta">Pensamiento crítico + práctica profesional</span>
        </div>

        <div className="debate">
          <div className="debate-prompt">
            <strong>Situación:</strong> un cliente enfadado exige una solución imposible “ya”, amenaza con quejarse y eleva el tono.
            Tú estás en hora punta y llevas varias incidencias seguidas.
          </div>

          <ol className="debate-questions">
            <li>¿Qué harías en los primeros 15 segundos para evitar una escalada?</li>
            <li>¿Cómo validarías emoción sin admitir culpa ni prometer lo imposible?</li>
            <li>¿Qué límite pondrías si aparecen faltas de respeto? Redacta tu frase exacta.</li>
            <li>¿Qué estrategia usarías para “cierre limpio” y no arrastrar tensión a la siguiente atención?</li>
          </ol>
        </div>
      </section>
    </TopicLayout>
  );
};

export default TemaGestionEmocional;
