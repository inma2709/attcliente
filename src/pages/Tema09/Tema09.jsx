/**
 * TemaXX.jsx — Uso de nuevas tecnologías y canales telemáticos
 * ✅ Página completa lista para tu manual (TopicLayout + details/summary + callouts + tablas + actividades + test)
 * ✅ Incluye: análisis de clientes que llegan por la red, redes sociales, presencia digital, chat online, email, formularios, chatbots y tecnologías actuales
 * ✅ Mantiene tus clases globales (topic-section, topic-details, callout, table, checklist, quiz...)
 *
 * Estilos globales referenciados: /mnt/data/cliente.css :contentReference[oaicite:0]{index=0}
 */

import TopicLayout from "../../components/TopicLayout";

const TemaTecnologiasTelematicas = () => {
  return (
    <TopicLayout
      numero="09"
      title="Uso de nuevas tecnologías y canales telemáticos en la atención al cliente"
      intro="Hoy, una parte enorme de la atención al cliente ocurre en digital: chat web, redes sociales, email, formularios y asistentes virtuales. Este tema te enseña a entender cuántos clientes llegan por la red, por qué la presencia online ya no es opcional, cómo funciona un chatbot y cómo responder de forma profesional en cada canal."
      objetivos={[
        "Comprender el peso real de los clientes que llegan por canales digitales y cómo medirlo.",
        "Explicar por qué las redes sociales y la presencia online son estratégicas en atención al cliente.",
        "Aplicar normas de respuesta profesional en formularios, email, chat y chatbot.",
        "Entender cómo funciona un chatbot (flujo, IA, derivación a agente) y cómo integrarlo con procesos.",
        "Conocer tecnologías actuales que mejoran la atención: CRM, helpdesk, automatización, bases de conocimiento y analítica."
      ]}
      icon="💻"
    >
      {/* =========================
          TEORÍA
      ========================== */}
      <section className="topic-section" id="teoria">
        <div className="topic-section__title">
          <h2>Teoría</h2>
          <span className="topic-section__meta">Canales telemáticos · Nuevas tecnologías · Atención moderna</span>
        </div>

        <div className="topic-accordion">
          {/* 1 */}
          <details className="topic-details">
            <summary>1. ¿Cuántos clientes nos llegan a través de la red? (cómo analizarlo de forma práctica)</summary>
            <div className="topic-details__content">
              <p>
                “Clientes que llegan por la red” son aquellos cuyo primer contacto (o primera intención de compra)
                se produce por un canal digital: <strong>Google</strong>, <strong>redes sociales</strong>,{" "}
                <strong>web</strong>, <strong>formulario</strong>, <strong>email</strong>,{" "}
                <strong>chat</strong> o <strong>marketplaces</strong>.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Idea clave</h4>
                <p>
                  Si no lo mides, no lo puedes gestionar: la atención digital necesita{" "}
                  <strong>datos</strong> (volumen, origen, tiempos, conversión, satisfacción).
                </p>
              </div>

              <h4>Qué métricas mirar (las que de verdad sirven)</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Qué responde</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>% de contactos digitales</strong></td>
                    <td>Qué peso real tiene lo online en tus entradas</td>
                    <td>“65% de consultas llegan por web/redes/email”</td>
                  </tr>
                  <tr>
                    <td><strong>Origen (source/medium)</strong></td>
                    <td>De dónde vienen exactamente</td>
                    <td>Google, Instagram, TikTok, campañas, referral…</td>
                  </tr>
                  <tr>
                    <td><strong>Volumen por canal</strong></td>
                    <td>Cuánto entra por chat vs email vs formulario</td>
                    <td>Chat 40/día, email 25/día, formularios 8/día</td>
                  </tr>
                  <tr>
                    <td><strong>Tiempo de primera respuesta</strong></td>
                    <td>Si respondemos a tiempo</td>
                    <td>Chat: 1–3 min; email: &lt; 24h</td>
                  </tr>
                  <tr>
                    <td><strong>Resolución / FCR</strong></td>
                    <td>Si se resuelve al primer contacto</td>
                    <td>“70% resuelto sin recontacto”</td>
                  </tr>
                  <tr>
                    <td><strong>Conversión</strong></td>
                    <td>Si el contacto termina en venta/acción</td>
                    <td>“Formulario → cita: 18%”</td>
                  </tr>
                  <tr>
                    <td><strong>Satisfacción (CSAT/NPS)</strong></td>
                    <td>Cómo lo vive el cliente</td>
                    <td>CSAT 4,6/5; NPS 42</td>
                  </tr>
                </tbody>
              </table>

              <h4>Cómo obtener los datos (sin complicarte)</h4>
              <ul>
                <li>
                  <strong>Web:</strong> analítica (páginas más visitadas, fuente de tráfico, conversiones).
                </li>
                <li>
                  <strong>Formularios:</strong> hojas/CRM con campos “origen” + etiquetas.
                </li>
                <li>
                  <strong>Email:</strong> bandeja compartida + categorías (ventas, soporte, reclamación…).
                </li>
                <li>
                  <strong>Chat/Redes:</strong> panel de mensajes + estadísticas + tiempos de respuesta.
                </li>
                <li>
                  <strong>Helpdesk/CRM:</strong> tickets con canal, prioridad, SLA y resolución.
                </li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">📌 Mini-proceso recomendado (1 vez por semana)</h4>
                <ol>
                  <li>Cuenta entradas por canal.</li>
                  <li>Detecta picos (campañas, incidencias, productos).</li>
                  <li>Revisa “tiempo de respuesta” y “temas más repetidos”.</li>
                  <li>Mejora: plantilla, FAQ, automatización o refuerzo de personal en horas pico.</li>
                </ol>
              </div>
            </div>
          </details>

          {/* 2 */}
          <details className="topic-details">
            <summary>2. Importancia del uso de redes sociales en atención al cliente</summary>
            <div className="topic-details__content">
              <p>
                Las redes sociales ya no son solo marketing. Son un{" "}
                <strong>canal de contacto y reputación</strong> donde el cliente:
                pregunta, compara, opina, reclama y recomienda.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Por qué son clave</h4>
                <ul>
                  <li>
                    <strong>Velocidad:</strong> el cliente espera respuesta rápida (especialmente en mensajes).
                  </li>
                  <li>
                    <strong>Visibilidad:</strong> una buena respuesta construye confianza; una mala se amplifica.
                  </li>
                  <li>
                    <strong>Prueba social:</strong> reseñas, comentarios y experiencias influyen en la decisión.
                  </li>
                  <li>
                    <strong>Escucha activa:</strong> detectas problemas repetidos y oportunidades.
                  </li>
                </ul>
              </div>

              <h4>Qué tipo de consultas llegan por redes</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Ejemplos</th>
                    <th>Respuesta ideal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Información</td>
                    <td>Horario, precio, disponibilidad</td>
                    <td>Directa + enlace + cierre amable</td>
                  </tr>
                  <tr>
                    <td>Soporte</td>
                    <td>“No funciona”, “No me llegó”</td>
                    <td>Empatía + datos mínimos + pasar a privado</td>
                  </tr>
                  <tr>
                    <td>Reclamación pública</td>
                    <td>Queja en comentarios</td>
                    <td>Calma + disculpa si procede + solución + canal privado</td>
                  </tr>
                  <tr>
                    <td>Venta</td>
                    <td>“¿Me lo recomiendas?”</td>
                    <td>Preguntas de necesidad + propuesta + CTA</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Regla de oro</h4>
                <p>
                  En redes, <strong>no discutas</strong>. Responde con educación, ofrece solución y mueve los datos
                  personales a canal privado.
                </p>
              </div>
            </div>
          </details>

          {/* 3 */}
          <details className="topic-details">
            <summary>3. Estar presente en la red hoy no es una opción (es supervivencia competitiva)</summary>
            <div className="topic-details__content">
              <p>
                En la práctica, si una empresa no está en internet, para muchos clientes{" "}
                <strong>no existe</strong>. La presencia digital sostiene:
                descubrimiento (te encuentran), confianza (te validan) y atención (te contactan).
              </p>

              <div className="callout callout--case">
                <h4 className="callout-title">🏢 Presencia digital = 3 pilares</h4>
                <ul>
                  <li><strong>Encontrabilidad:</strong> web/SEO/mapas/perfiles.</li>
                  <li><strong>Credibilidad:</strong> reseñas, respuestas, contenido consistente.</li>
                  <li><strong>Accesibilidad:</strong> canales claros para contactar y respuesta rápida.</li>
                </ul>
              </div>

              <h4>Señales de una empresa “confiable” en digital</h4>
              <ul className="checklist">
                <li>Web o landing actualizada (qué haces, precios/servicios, contacto claro).</li>
                <li>Perfil en Google/Maps con horarios y reseñas atendidas.</li>
                <li>Redes con actividad real (no necesariamente diaria, pero coherente).</li>
                <li>Formularios y email con respuesta en menos de 24h.</li>
                <li>Políticas claras: cambios, devoluciones, envíos, privacidad.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 En atención al cliente, “estar” no basta</h4>
                <p>
                  Presencia digital útil = <strong>canales visibles</strong> + <strong>respuesta</strong> +{" "}
                  <strong>registro</strong> (ticket/CRM) + <strong>mejora continua</strong>.
                </p>
              </div>
            </div>
          </details>

          {/* 4 */}
          <details className="topic-details">
            <summary>4. Implementación de chat online: cuándo usarlo y buenas prácticas</summary>
            <div className="topic-details__content">
              <p>
                El chat online reduce fricción: el cliente no tiene que llamar ni esperar un email.
                Funciona especialmente bien para <strong>dudas rápidas</strong>, <strong>soporte</strong> y{" "}
                <strong>ventas asistidas</strong>.
              </p>

              <h4>Ventajas principales</h4>
              <ul>
                <li><strong>Inmediatez</strong> y menor abandono.</li>
                <li><strong>Registro</strong> de la conversación (útil para calidad y seguimiento).</li>
                <li><strong>Derivación</strong> a agente humano cuando el caso lo exige.</li>
              </ul>

              <h4>Buenas prácticas operativas</h4>
              <ul className="checklist">
                <li>Mensaje de bienvenida con tiempos reales (“Respondemos en X minutos”).</li>
                <li>Preguntas iniciales para clasificar (motivo + pedido + email/teléfono si procede).</li>
                <li>Plantillas para casos frecuentes (sin sonar robótico).</li>
                <li>Escalado a humano para: reclamaciones, datos sensibles, casos complejos.</li>
                <li>Cierre con resumen + próximos pasos + agradecimiento.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⏱️ Atención a expectativas</h4>
                <p>
                  Un chat con respuesta lenta empeora la percepción más que no tener chat. Si no puedes cubrirlo,
                  limita horario o apóyalo con chatbot + derivación.
                </p>
              </div>
            </div>
          </details>

          {/* 5 */}
          <details className="topic-details">
            <summary>5. Cómo funciona un chatbot (de forma clara y realista)</summary>
            <div className="topic-details__content">
              <p>
                Un chatbot es un sistema que conversa con el usuario para:
                <strong> responder preguntas</strong>, <strong>guiar pasos</strong> y{" "}
                <strong>capturar datos</strong>. Puede ser:
              </p>
              <ul>
                <li><strong>Basado en reglas:</strong> menús y decisiones (si pasa X, responde Y).</li>
                <li><strong>Basado en IA:</strong> interpreta intención y responde con conocimiento.</li>
                <li><strong>Híbrido:</strong> IA para entender + reglas para procesos críticos.</li>
              </ul>

              <h4>Flujo típico (lo que ocurre “por dentro”)</h4>
              <ol>
                <li><strong>Entrada:</strong> el cliente escribe una consulta.</li>
                <li><strong>Detección de intención:</strong> “seguimiento pedido”, “devolución”, “horario”...</li>
                <li><strong>Recogida de datos:</strong> nº de pedido, email, motivo, preferencia.</li>
                <li><strong>Respuesta:</strong> solución directa o pasos guiados.</li>
                <li><strong>Derivación:</strong> si no puede resolver, pasa a agente o genera ticket.</li>
                <li><strong>Registro:</strong> guarda conversación para calidad y seguimiento.</li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Buen chatbot = 3 cosas</h4>
                <ul>
                  <li><strong>Resuelve</strong> lo simple rápido (FAQ, estado, horarios).</li>
                  <li><strong>Escala</strong> lo complejo a humano sin frustrar.</li>
                  <li><strong>Aprende</strong> de lo que falla (preguntas no entendidas).</li>
                </ul>
              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">🚫 Lo que nunca debe hacer</h4>
                <p>
                  Bloquear al cliente: si insiste o se detecta enfado/reclamación, debe ofrecer{" "}
                  <strong>“hablar con una persona”</strong> y registrar el caso.
                </p>
              </div>
            </div>
          </details>

          {/* 6 */}
          <details className="topic-details">
            <summary>6. Responder correctamente: formulario, email, chat y chatbot (protocolo profesional)</summary>
            <div className="topic-details__content">
              <p>
                Cada canal tiene un estilo, pero todos comparten una misma base:
                <strong> rapidez</strong>, <strong>claridad</strong>, <strong>empatía</strong> y{" "}
                <strong>seguimiento</strong>.
              </p>

              <h4>Reglas comunes (para cualquier canal)</h4>
              <ul className="checklist">
                <li><strong>Acusa recibo</strong> (que el cliente sepa que le has leído).</li>
                <li><strong>Confirma el problema</strong> con tus palabras (evita malentendidos).</li>
                <li><strong>Pide lo mínimo necesario</strong> (sin interrogatorio).</li>
                <li><strong>Da un siguiente paso</strong> y un plazo real (“hoy”, “en 24h”, “en 48h”).</li>
                <li><strong>Cierra con cortesía</strong> y ofrece ayuda adicional.</li>
              </ul>

              <h4>Respuesta tipo según canal</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Canal</th>
                    <th>Tono recomendado</th>
                    <th>Estructura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Formulario web</strong></td>
                    <td>Profesional y directo</td>
                    <td>Gracias → confirmación → solicitud de datos → plazo → firma</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>Formal/educado</td>
                    <td>Saludo → contexto → solución/pasos → plazos → despedida</td>
                  </tr>
                  <tr>
                    <td><strong>Chat (humano)</strong></td>
                    <td>Cercano, claro</td>
                    <td>Bienvenida → preguntas filtro → solución → resumen → cierre</td>
                  </tr>
                  <tr>
                    <td><strong>Chatbot</strong></td>
                    <td>Muy simple y guiado</td>
                    <td>Opciones rápidas → captura datos → solución breve → derivación</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--example">
                <h4 className="callout-title">✉️ Plantilla (email / formulario)</h4>
                <p>
                  Hola <strong>[Nombre]</strong>,<br />
                  Gracias por contactarnos. Hemos recibido tu consulta sobre <strong>[tema]</strong>.<br />
                  Para ayudarte lo antes posible, ¿podrías indicarnos <strong>[dato 1]</strong> y <strong>[dato 2]</strong>?<br />
                  En cuanto lo tengamos, te confirmaremos la solución en un plazo máximo de <strong>[X horas]</strong>.<br />
                  Gracias de nuevo, quedo pendiente.<br />
                  Un saludo,<br />
                  <strong>[Nombre y cargo]</strong> · [Empresa]
                </p>
              </div>

              <div className="callout callout--case">
                <h4 className="callout-title">💬 Plantilla (chat humano)</h4>
                <p>
                  ¡Hola! Soy <strong>[Nombre]</strong>. 😊<br />
                  Para ayudarte mejor, ¿me confirmas <strong>tu nº de pedido</strong> o el <strong>email de compra</strong>?<br />
                  Perfecto, ya lo veo. La solución es <strong>[paso]</strong> y en <strong>[plazo]</strong> quedará resuelto.<br />
                  Te resumo: <strong>[resumen 1 línea]</strong>. ¿Te puedo ayudar en algo más?
                </p>
              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">🧾 Importante (registro)</h4>
                <p>
                  Todo contacto digital debería quedar registrado (ticket/CRM): canal, motivo, estado, responsable y fecha.
                  Si no se registra, se pierde seguimiento y se repiten errores.
                </p>
              </div>
            </div>
          </details>

          {/* 7 */}
          <details className="topic-details">
            <summary>7. Tecnologías que ayudan hoy en la atención al cliente (qué son y para qué sirven)</summary>
            <div className="topic-details__content">
              <p>
                La tecnología no sustituye el trato humano: lo <strong>potencia</strong>.
                Bien aplicada reduce tiempos, evita errores y mejora la experiencia.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Tecnología</th>
                    <th>Para qué sirve</th>
                    <th>Ejemplo de uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>CRM</strong></td>
                    <td>Historial de cliente, oportunidades, seguimiento</td>
                    <td>Ver interacciones previas antes de responder</td>
                  </tr>
                  <tr>
                    <td><strong>Helpdesk / Ticketing</strong></td>
                    <td>Gestionar incidencias con estados y SLA</td>
                    <td>Tickets por prioridad + responsable + plazos</td>
                  </tr>
                  <tr>
                    <td><strong>Base de conocimiento (FAQ)</strong></td>
                    <td>Respuestas estandarizadas y autoconsulta</td>
                    <td>Artículos: devoluciones, garantía, configuración…</td>
                  </tr>
                  <tr>
                    <td><strong>Chat online</strong></td>
                    <td>Atención inmediata</td>
                    <td>Soporte rápido + venta asistida</td>
                  </tr>
                  <tr>
                    <td><strong>Chatbot / Asistente virtual</strong></td>
                    <td>Automatizar lo repetitivo + derivar</td>
                    <td>Seguimiento de pedidos, horarios, incidencias comunes</td>
                  </tr>
                  <tr>
                    <td><strong>Automatización (workflows)</strong></td>
                    <td>Reducir tareas manuales</td>
                    <td>Si llega “devolución” → crear ticket + enviar instrucciones</td>
                  </tr>
                  <tr>
                    <td><strong>Analítica</strong></td>
                    <td>Medir demanda, tiempos, calidad</td>
                    <td>Panel por canal: volumen, respuesta, satisfacción</td>
                  </tr>
                  <tr>
                    <td><strong>Omnicanalidad</strong></td>
                    <td>Unificar canales en un solo panel</td>
                    <td>Email + chat + redes → misma bandeja/ticket</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Enfoque inteligente</h4>
                <p>
                  Empieza por lo básico: <strong>tickets + plantillas + FAQ</strong>. Luego añade chat y automatizaciones.
                  Y finalmente, si tiene sentido, chatbot/IA con derivación.
                </p>
              </div>
            </div>
          </details>

          {/* 8 */}
          <details className="topic-details">
            <summary>8. Canales telemáticos: ventajas, riesgos y normas de calidad</summary>
            <div className="topic-details__content">
              <h4>Ventajas</h4>
              <ul>
                <li><strong>Rapidez</strong> y disponibilidad ampliada.</li>
                <li><strong>Escalabilidad</strong>: un equipo puede atender más volumen con herramientas.</li>
                <li><strong>Registro</strong>: evidencia y seguimiento.</li>
                <li><strong>Personalización</strong>: historial y segmentación.</li>
              </ul>

              <h4>Riesgos</h4>
              <ul>
                <li><strong>Expectativas</strong> de inmediatez (si tardas, se frustran).</li>
                <li><strong>Deshumanización</strong> si todo es automático.</li>
                <li><strong>Privacidad</strong>: cuidado con datos personales por canales públicos.</li>
                <li><strong>Ruido</strong>: mensajes repetidos, spam, reclamaciones públicas.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">🔒 Privacidad en canales digitales</h4>
                <p>
                  Nunca pidas datos sensibles en público (comentarios/redes). Pasa al canal privado y confirma identidad
                  con lo mínimo necesario.
                </p>
              </div>

              <h4>Normas de calidad (SLA orientativo)</h4>
              <ul className="checklist">
                <li><strong>Chat:</strong> primera respuesta en 1–3 minutos (si está activo).</li>
                <li><strong>Redes (DM):</strong> respuesta en menos de 4 horas en horario laboral.</li>
                <li><strong>Email/formulario:</strong> acuse de recibo inmediato + resolución/seguimiento &lt; 24h.</li>
                <li><strong>Casos complejos:</strong> actualización periódica aunque no haya solución final.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          ACTIVIDADES
      ========================== */}
      <section className="topic-section" id="actividades">
        <div className="topic-section__title">
          <h2>Actividades prácticas</h2>
          <span className="topic-section__meta">Entrena respuestas y criterio omnicanal</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Actividad 1 · Mapa de canales y volumen</summary>
            <div className="topic-details__content">
              <p>
                Imagina una empresa con 200 contactos semanales. Reparte ese volumen por canal y define:
                <strong> motivo principal</strong>, <strong>tiempo de respuesta objetivo</strong> y{" "}
                <strong>responsable</strong>.
              </p>
              <div className="callout callout--activity">
                <h4 className="callout-title">🧩 Entregable</h4>
                <ul>
                  <li>Tabla con 5 canales (redes, chat, email, formulario, teléfono).</li>
                  <li>Volumen estimado por canal (número).</li>
                  <li>SLA por canal.</li>
                  <li>Qué se automatiza y qué pasa a humano.</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 2 · Redacta 3 respuestas: formulario, email y DM de Instagram</summary>
            <div className="topic-details__content">
              <p>Caso: cliente escribe “Mi pedido llegó incompleto”. Redacta:</p>
              <ul>
                <li>Respuesta por <strong>formulario</strong> (más formal y estructurada).</li>
                <li>Respuesta por <strong>email</strong> (con pasos y plazos).</li>
                <li>Respuesta por <strong>DM</strong> (breve y empatía + derivación a privado).</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Lo que debe aparecer sí o sí</h4>
                <ul>
                  <li>Empatía breve (“Lamento lo ocurrido”).</li>
                  <li>Solicitud mínima de datos (pedido + email).</li>
                  <li>Próximo paso (reposición/reembolso) y plazo realista.</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 3 · Diseña el flujo de un chatbot (menú + escalado)</summary>
            <div className="topic-details__content">
              <p>
                Crea un flujo para un chatbot con 4 opciones iniciales:
                <strong> seguimiento pedido</strong>, <strong>devolución</strong>,{" "}
                <strong>facturación</strong>, <strong>hablar con un agente</strong>.
              </p>
              <div className="callout callout--activity">
                <h4 className="callout-title">🧠 Debe incluir</h4>
                <ul>
                  <li>Qué datos se piden en cada ruta (mínimos).</li>
                  <li>Qué respuestas automáticas ofrece.</li>
                  <li>Cuándo deriva a humano.</li>
                  <li>Mensaje final de cierre con resumen.</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          TEST
      ========================== */}
      <section className="topic-section" id="test">
        <div className="topic-section__title">
          <h2>Autoevaluación</h2>
          <span className="topic-section__meta">Comprueba si dominas el tema</span>
        </div>

        <div className="quiz">
          <div className="quiz-question">
            <div className="quiz-question__title">1) ¿Qué indicador te dice si lo online pesa más que lo presencial?</div>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="q1" /> El número de seguidores.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q1" /> El % de contactos digitales sobre el total.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q1" /> El número de publicaciones semanales.
              </label>
            </div>
            <div className="quiz-feedback quiz-feedback--ok">
              Correcta: el % de contactos digitales muestra el peso real de entradas online.
            </div>
          </div>

          <div className="quiz-question">
            <div className="quiz-question__title">2) En una queja pública en redes, lo más profesional es…</div>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="q2" /> Responder con argumentos y demostrar que el cliente miente.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q2" /> Responder con calma, ofrecer solución y pasar a privado datos sensibles.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q2" /> No responder nunca para no dar visibilidad.
              </label>
            </div>
            <div className="quiz-feedback quiz-feedback--ok">
              Correcta: calma + solución + canal privado para datos.
            </div>
          </div>

          <div className="quiz-question">
            <div className="quiz-question__title">3) Un chatbot “bueno” debe…</div>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="q3" /> Responder todo sin derivar nunca.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q3" /> Resolver lo simple, derivar lo complejo y registrar el caso.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q3" /> Pedir todos los datos al inicio para “asegurar”.
              </label>
            </div>
            <div className="quiz-feedback quiz-feedback--ok">
              Correcta: simple rápido + derivación + registro.
            </div>
          </div>

          <div className="quiz-question">
            <div className="quiz-question__title">4) Para email/formulario, una buena práctica básica es…</div>
            <div className="quiz-options">
              <label className="quiz-option">
                <input type="radio" name="q4" /> Responder solo cuando esté resuelto al 100%.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q4" /> Enviar acuse de recibo + pedir datos mínimos + dar plazo.
              </label>
              <label className="quiz-option">
                <input type="radio" name="q4" /> Copiar y pegar una respuesta genérica sin personalizar.
              </label>
            </div>
            <div className="quiz-feedback quiz-feedback--ok">
              Correcta: acuse + datos mínimos + plazo real.
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Criterio de dominio</h4>
          <p>
            Si puedes explicar <strong>cómo medir</strong> el volumen digital, justificar la{" "}
            <strong>presencia online</strong>, describir un <strong>flujo de chatbot</strong> y redactar respuestas
            correctas por canal, dominas el tema.
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default TemaTecnologiasTelematicas;
