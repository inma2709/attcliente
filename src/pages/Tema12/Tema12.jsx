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
          2. PUNTOS DE DOLOR DEL CLIENTE
      ========================== */}
      <section className="topic-section" id="puntos-de-dolor">
        <div className="topic-section__title">
          <h2>2. Los puntos de dolor del cliente (Pain Points)</h2>
          <span className="topic-section__meta">Diagnóstico · Empatía · Estrategia de mejora</span>
        </div>

        <figure className="media">
          <img
            src="/dolor.png"
            alt="Puntos de dolor del cliente - Pain Points en atención al cliente"
          />
          <figcaption>
            Identificar los puntos de dolor del cliente es el primer paso para diseñar
            servicios que verdaderamente resuelven problemas reales.
          </figcaption>
        </figure>

        <div className="topic-accordion">

          <details className="topic-details" open>
            <summary>2.1. ¿Qué es un punto de dolor? Definición y relevancia estratégica</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>punto de dolor</strong> (<em>pain point</em>) es cualquier problema,
                fricción, frustración o insatisfacción que experimenta el cliente a lo largo de su
                relación con una empresa. No siempre es una queja explícita: muchas veces es un
                malestar silencioso que el cliente no verbaliza pero que determina su decisión de
                abandonar, no repetir o hablar mal de la marca.
              </p>
              <p>
                En marketing y atención al cliente, los pain points son el punto de partida de
                toda estrategia centrada en el cliente. <strong>Quien detecta el dolor antes que la
                competencia, tiene la oportunidad de diseñar la solución más valiosa.</strong>
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Por qué es el concepto más importante de este tema</h4>
                <p>
                  La satisfacción no se construye añadiendo cosas positivas sobre una experiencia mediocre.
                  Se construye <strong>eliminando lo que duele</strong>. Un cliente sin fricciones que
                  resolver es un cliente fiel. Un cliente con un dolor ignorado es un cliente perdido.
                </p>
              </div>

              <h4>Los pain points en el contexto del marketing moderno</h4>
              <p>
                El concepto surge de la metodología <strong>Jobs to Be Done</strong>
                (Clayton Christensen, Harvard), que propone entender al cliente no por lo que
                "es" (su demografía) sino por lo que <em>necesita resolver</em>. Los clientes no
                compran productos: <strong>contratan soluciones para sus problemas</strong>.
                Detectar esos problemas —los pain points— es la base del diseño de propuestas de
                valor que realmente importan.
              </p>

              <div className="callout callout--info">
                <h4 className="callout-title">📖 Origen académico</h4>
                <p>
                  El término <em>pain point</em> fue popularizado en los años 90 en el ámbito del
                  marketing B2B, pero su uso se extendió al marketing de consumo y a la experiencia
                  de cliente con el auge del <em>Design Thinking</em> (IDEO, Stanford d.school) y el
                  <em> Customer Journey Mapping</em>. Hoy es un estándar en cualquier proceso de
                  mejora de servicio orientado al cliente.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Clasificación de los puntos de dolor: los 6 tipos fundamentales</summary>
            <div className="topic-details__content">
              <p>
                No todos los pain points son iguales. Clasificarlos correctamente permite priorizar
                acciones y asignar los recursos adecuados. La literatura de CX y marketing identifica
                seis categorías principales:
              </p>

              <div className="pain-types-grid">

                <div className="pain-type-card pain-type--proceso">
                  <div className="pain-type-icon">⚙️</div>
                  <h4>1. Pain points de proceso</h4>
                  <p>
                    El cliente experimenta fricción por culpa de <strong>pasos innecesarios,
                    burocracia, lentitud o falta de coherencia</strong> entre etapas del servicio.
                  </p>
                  <ul>
                    <li>Formularios con demasiados campos obligatorios.</li>
                    <li>Procesos de devolución complicados.</li>
                    <li>Tener que repetir la misma información a distintos agentes.</li>
                    <li>Derivaciones constantes entre departamentos.</li>
                  </ul>
                  <div className="pain-impact">🔴 Impacto: muy alto en CES y abandono</div>
                </div>

                <div className="pain-type-card pain-type--economico">
                  <div className="pain-type-icon">💰</div>
                  <h4>2. Pain points económicos</h4>
                  <p>
                    El cliente percibe que el precio es <strong>injusto, opaco o desproporcionado</strong>
                    respecto al valor recibido. Incluye los costes ocultos y las penalizaciones sorpresa.
                  </p>
                  <ul>
                    <li>Gastos de envío que aparecen solo en el último paso del pago.</li>
                    <li>Cargos automáticos no comunicados.</li>
                    <li>Penalizaciones de cancelación desproporcionadas.</li>
                    <li>Sensación de pagar más que otros clientes sin razón clara.</li>
                  </ul>
                  <div className="pain-impact">🔴 Impacto: muy alto en NPS y reputación</div>
                </div>

                <div className="pain-type-card pain-type--emocional">
                  <div className="pain-type-icon">💔</div>
                  <h4>3. Pain points emocionales y relacionales</h4>
                  <p>
                    El cliente no se siente <strong>escuchado, valorado o respetado</strong>.
                    Son los más difíciles de detectar porque raramente se verbalizan, pero son los que
                    generan mayor daño en la lealtad y la reputación.
                  </p>
                  <ul>
                    <li>Respuestas frías o automatizadas ante un problema personal.</li>
                    <li>Sensación de ser tratado como un número, no como una persona.</li>
                    <li>Falta de empatía ante situaciones de urgencia o vulnerabilidad.</li>
                    <li>Agente que lee un guión sin escuchar el problema real.</li>
                  </ul>
                  <div className="pain-impact">🔴 Impacto: devastador en fidelización y recomendación</div>
                </div>

                <div className="pain-type-card pain-type--tiempo">
                  <div className="pain-type-icon">⏱️</div>
                  <h4>4. Pain points de tiempo</h4>
                  <p>
                    El tiempo perdido es una de las principales fuentes de frustración en cualquier sector.
                    La percepción del tiempo es clave: <strong>una espera explicada y acompañada se tolera
                    mucho mejor que una espera en silencio</strong>.
                  </p>
                  <ul>
                    <li>Tiempos de espera no comunicados.</li>
                    <li>Resolución que se prolonga más de lo prometido.</li>
                    <li>Procesos que requieren múltiples visitas o contactos.</li>
                    <li>Falta de automatización en tareas rutinarias (cambio de dirección, factura…).</li>
                  </ul>
                  <div className="pain-impact">🟡 Impacto: alto en CSAT y tasa de recontacto</div>
                </div>

                <div className="pain-type-card pain-type--informacion">
                  <div className="pain-type-icon">📢</div>
                  <h4>5. Pain points informativos</h4>
                  <p>
                    El cliente no encuentra, no entiende o recibe <strong>información contradictoria,
                    incompleta o inaccesible</strong>. En la era digital, este tipo de dolor genera
                    abandono antes incluso del primer contacto.
                  </p>
                  <ul>
                    <li>Web con precios, condiciones o FAQs desactualizadas.</li>
                    <li>Respuestas diferentes según el canal consultado.</li>
                    <li>Lenguaje técnico o burocrático incomprensible.</li>
                    <li>Ausencia de guías, tutoriales o instrucciones claras.</li>
                  </ul>
                  <div className="pain-impact">🟡 Impacto: alto en conversión y confianza</div>
                </div>

                <div className="pain-type-card pain-type--social">
                  <div className="pain-type-icon">👁️</div>
                  <h4>6. Pain points sociales y de imagen</h4>
                  <p>
                    El cliente siente que asociarse con una marca puede afectar
                    <strong> cómo le perciben los demás o cómo se percibe a sí mismo</strong>.
                    Incluye también los miedos relacionados con seguridad y privacidad.
                  </p>
                  <ul>
                    <li>Sensación de ser atendido de forma diferente por aspecto, edad o idioma.</li>
                    <li>Preocupación por el uso de sus datos personales.</li>
                    <li>Miedo a tomar una decisión equivocada (ansiedad de compra).</li>
                    <li>Percepción de que la marca no comparte sus valores.</li>
                  </ul>
                  <div className="pain-impact">🟠 Impacto: crítico en sectores con alta implicación personal</div>
                </div>

              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Error frecuente en las organizaciones</h4>
                <p>
                  Las empresas suelen detectar y gestionar bien los pain points de proceso y
                  económicos porque son visibles y medibles. Los <strong>pain points emocionales
                  y sociales</strong>, sin embargo, permanecen invisibles hasta que se convierten
                  en abandono silencioso o en una crisis de reputación. Son los más difíciles de
                  medir pero los más determinantes para la lealtad a largo plazo.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.3. Cómo detectar los puntos de dolor: métodos y herramientas</summary>
            <div className="topic-details__content">
              <p>
                La detección de pain points requiere <strong>escucha activa, metodología y humildad
                organizacional</strong>: disposición real para escuchar lo que el cliente dice
                aunque incomode. Existe un abanico de métodos, cada uno con distinta profundidad y coste:
              </p>

              <div className="detection-methods">

                <div className="detection-method">
                  <div className="method-tag method-tag--direct">Directo</div>
                  <h5>🎤 Entrevistas en profundidad</h5>
                  <p>
                    Conversaciones individuales de 20-45 minutos con clientes reales. Son el método
                    más rico: permiten explorar causas, contexto y emociones que los números no
                    capturan. Especialmente valiosas para detectar pain points emocionales y de proceso.
                  </p>
                  <p className="method-tip"><strong>Clave:</strong> no preguntar "¿estás satisfecho?"
                  sino "cuéntame la última vez que tuviste un problema con nosotros".</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--direct">Directo</div>
                  <h5>👥 Focus groups</h5>
                  <p>
                    Sesiones grupales de 6-10 clientes que comparten experiencias. Ideales para
                    validar hipótesis sobre pain points y descubrir necesidades latentes. El dinamismo
                    del grupo aflora aspectos que una entrevista individual no generaría.
                  </p>
                  <p className="method-tip"><strong>Precaución:</strong> el efecto de conformidad grupal
                  puede suavizar la crítica. Combinar con entrevistas individuales.</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--indirect">Indirecto</div>
                  <h5>📊 Análisis de reclamaciones y tickets</h5>
                  <p>
                    El registro de quejas, incidencias y tickets de soporte es una
                    <strong> radiografía gratuita de los pain points más frecuentes</strong>.
                    Categorizar los motivos de contacto revela los problemas más extendidos
                    y su impacto real en la operativa.
                  </p>
                  <p className="method-tip"><strong>Técnica:</strong> crear un árbol de categorías de
                  motivos de contacto y actualizar el top-10 semanalmente.</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--indirect">Indirecto</div>
                  <h5>📱 Social listening y análisis de reseñas</h5>
                  <p>
                    Los clientes comparten sus frustraciones en Google Reviews, Trustpilot, redes
                    sociales y foros. Monitorizar estas fuentes permite detectar pain points que el
                    cliente <em>no le cuenta directamente a la empresa</em>.
                  </p>
                  <p className="method-tip"><strong>Dato:</strong> el 96% de los clientes insatisfechos
                  no se queja directamente a la empresa. Solo se va. Pero muchos sí lo publican online.</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--observacion">Observación</div>
                  <h5>🔍 Mystery shopping y observación directa</h5>
                  <p>
                    Un cliente ficticio experimenta el servicio como lo haría un cliente real registrando
                    fricción, tiempos, actitud del personal y coherencia de procesos. Es especialmente
                    valioso para detectar pain points de proceso que el personal ya ha normalizado.
                  </p>
                  <p className="method-tip"><strong>Insight:</strong> a veces los propios empleados son
                  conscientes del pain point pero no tienen poder para solucionarlo. El mystery shopping
                  puede darles voz.</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--datos">Datos</div>
                  <h5>📈 Análisis de datos operativos</h5>
                  <p>
                    Los datos de comportamiento revelan pain points sin preguntar: tasa de abandono
                    del carrito, páginas con alta tasa de salida, pasos del proceso con más errores,
                    momentos del viaje con mayor tasa de recontacto.
                  </p>
                  <p className="method-tip"><strong>Herramientas:</strong> Google Analytics, heatmaps
                  (Hotjar), grabaciones de sesión, análisis CRM.</p>
                </div>

                <div className="detection-method">
                  <div className="method-tag method-tag--interno">Interno</div>
                  <h5>🧑‍💼 Entrevistas a empleados de primera línea</h5>
                  <p>
                    El personal de atención al cliente tiene información de primera mano sobre los
                    problemas más frecuentes. Una sesión de escucha con el equipo de atención suele
                    revelar en 30 minutos más pain points que meses de encuestas.
                  </p>
                  <p className="method-tip"><strong>Requisito:</strong> crear un ambiente donde el empleado
                  no sienta que "criticar el proceso" tendrá consecuencias negativas.</p>
                </div>

              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.4. El Mapa de Empatía: entrar en la cabeza del cliente</summary>
            <div className="topic-details__content">
              <p>
                El <strong>Mapa de Empatía</strong> es una herramienta visual de Design Thinking
                que permite representar la perspectiva completa del cliente: lo que <em>piensa</em>,
                lo que <em>siente</em>, lo que <em>dice</em>, lo que <em>hace</em>,
                y cuáles son sus <em>miedos</em> y <em>deseos</em>.
                Fue creado por Dave Gray (XPLANE) y popularizado por Alex Osterwalder.
              </p>

              <div className="empathy-map">
                <div className="empathy-center">
                  <span>👤</span>
                  <p>EL CLIENTE</p>
                </div>
                <div className="empathy-quadrant empathy-q1">
                  <h5>¿Qué PIENSA y SIENTE?</h5>
                  <p>Sus miedos, preocupaciones, aspiraciones y lo que realmente le importa,
                  aunque no lo diga en voz alta.</p>
                  <p className="empathy-example"><em>"Espero que no me cobren de más.
                  No tengo tiempo para gestionar otra reclamación."</em></p>
                </div>
                <div className="empathy-quadrant empathy-q2">
                  <h5>¿Qué VE?</h5>
                  <p>Lo que observa en su entorno: lo que hacen personas similares,
                  lo que ofrece la competencia, cómo percibe las alternativas.</p>
                  <p className="empathy-example"><em>"Mi compañera cambió de banco y dice que es mucho
                  más fácil. Sus reseñas en Google lo confirman."</em></p>
                </div>
                <div className="empathy-quadrant empathy-q3">
                  <h5>¿Qué DICE y HACE?</h5>
                  <p>Su comportamiento observable: qué hace durante la experiencia,
                  qué dice a los agentes, qué comparte con su entorno.</p>
                  <p className="empathy-example"><em>"Pregunta lo mismo dos veces porque la primera
                  respuesta no le quedó clara. Toma nota de los tiempos."</em></p>
                </div>
                <div className="empathy-quadrant empathy-q4">
                  <h5>¿Qué ESCUCHA?</h5>
                  <p>Lo que le llega del exterior: lo que dicen amigos, medios, redes
                  y líderes de opinión sobre la empresa o el sector.</p>
                  <p className="empathy-example"><em>"Ha leído comentarios negativos sobre el servicio
                  de atención en Twitter. Ya llega con desconfianza."</em></p>
                </div>
                <div className="empathy-pains">
                  <h5>😟 DOLORES (Pain Points)</h5>
                  <p>Miedos, frustraciones, obstáculos. Lo que no le deja dormir.
                  Lo que hace su experiencia difícil o angustiante.</p>
                </div>
                <div className="empathy-gains">
                  <h5>😊 GANANCIAS (Gains)</h5>
                  <p>Qué quiere conseguir, qué le haría sentir bien, qué sueña que
                  podría ser diferente. Su definición de éxito.</p>
                </div>
              </div>

              <div className="callout callout--tip">
                <h4 className="callout-title">✨ Cómo usar el Mapa de Empatía en equipos de atención</h4>
                <p>
                  Pedir al equipo que rellene el mapa para un cliente real les ayuda a salir de
                  la perspectiva operativa y <strong>ponerse genuinamente en el lugar del cliente</strong>.
                  En 30 minutos, un equipo identifica pain points que llevan meses ignorados.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.5. La Matriz de Pain Points: priorizar para actuar</summary>
            <div className="topic-details__content">
              <p>
                No todos los pain points merecen la misma urgencia. Una vez identificados, es fundamental
                <strong> priorizarlos</strong> para enfocar los recursos donde el impacto sea mayor.
                La herramienta más utilizada es la <strong>Matriz Impacto-Frecuencia</strong>:
              </p>

              <div className="priority-matrix">
                <div className="matrix-grid">
                  <div className="matrix-cell matrix--alta-alta">
                    <h5>🔴 CRÍTICO</h5>
                    <p>Alta frecuencia + Alto impacto</p>
                    <p><strong>Acción inmediata.</strong> Estos son los incendios que están quemando
                    la fidelización ahora mismo.</p>
                  </div>
                  <div className="matrix-cell matrix--alta-baja">
                    <h5>🟠 IMPORTANTE</h5>
                    <p>Baja frecuencia + Alto impacto</p>
                    <p>Afecta a pocos, pero cuando ocurre es devastador. Protocolo de gestión de excepciones.</p>
                  </div>
                  <div className="matrix-cell matrix--baja-alta">
                    <h5>🟡 VIGILAR</h5>
                    <p>Alta frecuencia + Bajo impacto</p>
                    <p>Muchos clientes lo notan pero no les hace abandonar. Mejorar eficiencia primero.</p>
                  </div>
                  <div className="matrix-cell matrix--baja-baja">
                    <h5>🟢 PENDIENTE</h5>
                    <p>Baja frecuencia + Bajo impacto</p>
                    <p>Sin urgencia. Resolver en ciclos de mejora continua a medio-largo plazo.</p>
                  </div>
                </div>
                <div className="matrix-labels">
                  <span>↑ Mayor impacto</span>
                  <span>↑ Menor impacto</span>
                </div>
                <div className="matrix-x-label">← Menor frecuencia &nbsp;&nbsp;&nbsp; Mayor frecuencia →</div>
              </div>

              <div className="callout callout--info">
                <h4 className="callout-title">📋 Proceso de priorización en 4 pasos</h4>
                <ol>
                  <li><strong>Listar</strong> todos los pain points identificados por distintos métodos.</li>
                  <li><strong>Valorar</strong> cada uno en frecuencia (¿cuántos clientes lo sufren?)
                  e impacto (¿cuánto daña la experiencia y la fidelización?).</li>
                  <li><strong>Situar</strong> en la matriz y <strong>acordar</strong> con el equipo las prioridades.</li>
                  <li><strong>Asignar</strong> responsable, fecha límite y métrica de éxito para cada pain point crítico.</li>
                </ol>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.6. Del pain point a la propuesta de valor: el proceso de transformación</summary>
            <div className="topic-details__content">
              <p>
                Un pain point detectado y priorizado no tiene valor si no se convierte en una
                <strong> mejora real para el cliente</strong>. El proceso de transformación
                sigue esta secuencia:
              </p>

              <div className="transformation-flow">
                <div className="transform-step">
                  <div className="transform-number">1</div>
                  <div className="transform-content">
                    <h5>🔍 Describir el dolor con evidencias</h5>
                    <p>Documentar el pain point con datos reales: verbatims de clientes, métricas
                    de reclamaciones, porcentaje de afectados, coste operativo asociado.</p>
                  </div>
                </div>
                <div className="transform-arrow">↓</div>
                <div className="transform-step">
                  <div className="transform-number">2</div>
                  <div className="transform-content">
                    <h5>🔎 Identificar la causa raíz — Los 5 Por Qués</h5>
                    <p>Usar el <strong>método de los 5 Por Qués</strong> (Sakichi Toyoda, Toyota)
                    para llegar a la causa real, no al síntoma. Ejemplo: el cliente espera mucho
                    (síntoma) → pocas personas en ese turno (causa) → el planning no contempla
                    los picos de demanda (causa raíz).</p>
                  </div>
                </div>
                <div className="transform-arrow">↓</div>
                <div className="transform-step">
                  <div className="transform-number">3</div>
                  <div className="transform-content">
                    <h5>💡 Idear soluciones desde la perspectiva del cliente</h5>
                    <p>La solución debe eliminar o reducir el dolor del cliente, no solo facilitar
                    el trabajo interno. A veces la solución más cómoda para la empresa es la más
                    frustrante para el cliente.</p>
                  </div>
                </div>
                <div className="transform-arrow">↓</div>
                <div className="transform-step">
                  <div className="transform-number">4</div>
                  <div className="transform-content">
                    <h5>🧪 Testear con clientes reales</h5>
                    <p>Antes de escalar, validar con un grupo reducido de clientes. Lo que parece
                    lógico desde dentro puede seguir generando fricción por razones imprevistas.</p>
                  </div>
                </div>
                <div className="transform-arrow">↓</div>
                <div className="transform-step">
                  <div className="transform-number">5</div>
                  <div className="transform-content">
                    <h5>📊 Medir el impacto y estandarizar</h5>
                    <p>Comparar indicadores antes y después (CES, CSAT, tasa de recontacto…).
                    Si funciona, convertirlo en estándar: protocolo, plantilla, proceso o formación.</p>
                  </div>
                </div>
              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ El error más común: solucionar el síntoma</h4>
                <p>
                  Ejemplo real: una empresa de telecomunicaciones detecta que los clientes llaman
                  reiteradamente por las facturas. La solución adoptada fue contratar más agentes.
                  La causa raíz era que la factura era incomprensible. Al mejorar el diseño y claridad
                  de la factura, el volumen de llamadas se redujo en un <strong>38% sin aumentar plantilla</strong>.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.7. Pain points invisibles: los que el cliente no te cuenta pero te cuestan más</summary>
            <div className="topic-details__content">
              <p>
                El <strong>silencio del cliente no es satisfacción</strong>. La investigación
                de John Goodman (TARP Worldwide) demostró que:
              </p>

              <div className="silent-stats">
                <div className="stat-card">
                  <div className="stat-number">96%</div>
                  <p>de los clientes insatisfechos <strong>no se queja directamente</strong> a la empresa.</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">13×</div>
                  <p>más personas reciben las quejas verbales negativas que las positivas.</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5-25×</div>
                  <p>más cuesta adquirir un cliente nuevo que retener uno existente (Harvard Business Review).</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">70%</div>
                  <p>de los clientes que abandonan lo hacen por la <strong>forma en que fueron tratados</strong>,
                  no por el precio o el producto.</p>
                </div>
              </div>

              <p>
                Esto significa que la mayoría de los pain points nunca llegan a convertirse en
                reclamaciones formales. Son los llamados <strong>pain points invisibles</strong>:
                el cliente los sufre, no los dice, y se va. Solo se detectan mediante investigación
                proactiva y análisis de comportamiento.
              </p>

              <div className="callout callout--info">
                <h4 className="callout-title">💡 Cómo hacer visibles los pain points invisibles</h4>
                <ul>
                  <li>Analizar la <strong>tasa de churn</strong> segmentada por perfil y momento del viaje.</li>
                  <li>Revisar las <strong>páginas con alta tasa de salida</strong> en la web.</li>
                  <li>Estudiar los <strong>carritos abandonados</strong> en e-commerce.</li>
                  <li>Pedir feedback activo ante silencios: "¿Está todo bien? ¿Podemos mejorar algo?"</li>
                  <li>Revisar reseñas en plataformas externas con regularidad.</li>
                  <li>Crear canales de feedback fáciles y sin fricción (chat, QR, email post-servicio).</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.8. Casos prácticos: pain points reales y cómo se resolvieron</summary>
            <div className="topic-details__content">

              <div className="case-study">
                <div className="case-header">
                  <span className="case-icon">🏦</span>
                  <h5>Caso 1 — Banca online: el pain point del alta digital</h5>
                </div>
                <p><strong>Dolor detectado:</strong> Los nuevos clientes abandonaban el proceso de alta
                online en el paso 4 de 7 (identificación con DNI). Tasa de abandono: 61%.</p>
                <p><strong>Causa raíz:</strong> La instrucción para fotografiar el DNI era ambigua y el
                sistema rechazaba imágenes válidas sin explicar por qué.</p>
                <p><strong>Solución:</strong> Guía visual animada con ejemplos de imágenes válidas e
                inválidas, y mensajes de error descriptivos en lugar de mensajes genéricos.</p>
                <p><strong>Resultado:</strong> Tasa de abandono bajó del 61% al 22%. Coste de implementación: cero adicional.</p>
              </div>

              <div className="case-study">
                <div className="case-header">
                  <span className="case-icon">🏥</span>
                  <h5>Caso 2 — Clínica privada: el pain point de la espera</h5>
                </div>
                <p><strong>Dolor detectado:</strong> Los pacientes puntuaban la espera como principal
                motivo de insatisfacción, aunque el tiempo medio real era de solo 12 minutos.</p>
                <p><strong>Causa raíz:</strong> El dolor no era el tiempo objetivo, sino la
                <strong> incertidumbre</strong>: no saber cuánto iban a esperar ni por qué.</p>
                <p><strong>Solución:</strong> Pantalla con tiempo estimado actualizado en tiempo real
                y mensaje previo si habría retraso significativo.</p>
                <p><strong>Resultado:</strong> CSAT aumentó de 6,8 a 9,2 en 8 semanas, sin cambiar los tiempos reales.</p>
              </div>

              <div className="case-study">
                <div className="case-header">
                  <span className="case-icon">🛒</span>
                  <h5>Caso 3 — Retail: el pain point del cambio de talla</h5>
                </div>
                <p><strong>Dolor detectado:</strong> El proceso de cambio de prenda implicaba conservar
                el ticket, volver en 15 días y hacer cola en caja. Los clientes lo describían como "un castigo".</p>
                <p><strong>Causa raíz:</strong> El proceso estaba diseñado para el control interno del stock,
                no para la comodidad del cliente.</p>
                <p><strong>Solución:</strong> Cambios sin ticket identificando la compra con número de tarjeta,
                plazo ampliado a 30 días y punto de cambio diferenciado sin cola.</p>
                <p><strong>Resultado:</strong> NPS aumentó 18 puntos. Quejas por devoluciones bajaron un 74%.</p>
              </div>

              <div className="callout callout--tip">
                <h4 className="callout-title">💡 Patrón común en los tres casos</h4>
                <p>
                  En ningún caso la solución fue cara. En todos, la empresa había diseñado el proceso
                  pensando en sí misma, no en el cliente. <strong>La detección del pain point y la voluntad
                  de resolver la causa raíz transformaron la experiencia sin grandes inversiones.</strong>
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.9. Actividad práctica: el Mapa de Dolor</summary>
            <div className="topic-details__content">
              <div className="callout callout--activity">
                <h4 className="callout-title">🧩 Actividad: Crear un Mapa de Dolor</h4>
                <p>
                  Elige una empresa real que conozcas (tu lugar de prácticas, una empresa donde has
                  sido cliente recientemente o una empresa del sector servicios cercana).
                </p>
                <ol>
                  <li>Identifica al menos <strong>8 pain points</strong> distribuidos en al menos
                  3 categorías distintas (proceso, económico, emocional, tiempo, informativo, social).</li>
                  <li>Para cada pain point, describe:
                    <ul>
                      <li>¿En qué momento del viaje del cliente ocurre?</li>
                      <li>¿Con qué frecuencia? (alta / media / baja)</li>
                      <li>¿Qué impacto tiene en la experiencia? (alto / medio / bajo)</li>
                      <li>¿Es visible o invisible para la empresa?</li>
                    </ul>
                  </li>
                  <li>Sitúa los pain points en la <strong>Matriz Impacto-Frecuencia</strong>.</li>
                  <li>Selecciona el pain point crítico y propón una solución justificada aplicando
                  el proceso de transformación de 5 pasos.</li>
                  <li>Presenta tus conclusiones al grupo con argumentación basada en empatía con el cliente.</li>
                </ol>
                <p><strong>Entregable:</strong> Mapa visual (póster o presentación) + exposición oral de 5 minutos.</p>
              </div>

              <div className="callout callout--tip" style={{marginTop: '1rem'}}>
                <h4 className="callout-title">✅ Criterio de evaluación</h4>
                <p>
                  Se valorará la capacidad de adoptar la perspectiva del cliente, identificar dolores
                  no evidentes (invisibles), argumentar la priorización y proponer soluciones realistas
                  y centradas en el cliente.
                </p>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* =========================
          3. HERRAMIENTAS PARA MEDIR SATISFACCIÓN
      ========================== */}
      <section className="topic-section" id="herramientas">
        <div className="topic-section__title">
          <h2>3. Herramientas para medir la satisfacción del cliente</h2>
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
          <h2>4. Diseño de encuestas de satisfacción</h2>
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
    <h2>5. Indicadores de satisfacción al cliente (CSAT, NPS y otros)</h2>
    
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
          <h2>6. Análisis e interpretación de resultados</h2>
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
          <h2>7. Uso del CRM como instrumento de gestión</h2>
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
          <h2>8. Actividades y autoevaluación</h2>
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

