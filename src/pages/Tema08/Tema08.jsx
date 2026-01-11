/**
 * Tema08.jsx — Comunicación escrita y redacción de documentos
 * Unidad 4 (págs. 86–110): Documentos escritos al servicio de la documentación empresarial
 *
 * ✅ Estructura lista para tu CSS global (details/summary + callouts + tablas + checklist)
 * ✅ Página completa: teoría + ejemplos + plantillas + actividades + autoevaluación
 * ✅ Enfocado a: avisos, informes, cartas comerciales, actas, comunicaciones oficiales
 *
 * Requiere estilos globales tipo: .topic .hero .topic-section .topic-details .callout .table .checklist, etc.
 * (según tu global.css / cliente.css) :contentReference[oaicite:0]{index=0}
 */

import TopicLayout from "../../components/TopicLayout";

const Tema08 = () => {
  return (
    <TopicLayout
      numero="08"
      title="Comunicación escrita y redacción de documentos"
      intro="En la empresa, escribir no es “rellenar papeles”: es dejar constancia, coordinar equipos, respaldar decisiones y proyectar profesionalidad. En este tema dominarás los principios de redacción, los requisitos formales y los documentos más habituales: avisos, informes, cartas comerciales, actas y comunicaciones oficiales."
      objetivos={[
        "Comprender las características y principios de la comunicación escrita profesional.",
        "Aplicar requisitos formales de presentación (formato, tipografía, ortografía, tono).",
        "Redactar avisos internos claros y eficaces.",
        "Estructurar y redactar informes (expositivo, demostrativo y valorativo).",
        "Elaborar cartas comerciales y reconocer estilos de carta.",
        "Redactar actas y convocatorias con orden del día y acuerdos.",
        "Distinguir instancia y oficio como comunicaciones oficiales con la Administración.",
        "Entender soportes, canales y gestión documental en la empresa."
      ]}
      icon="📝"
    >
      {/* =========================
          1) TEORÍA
      ========================== */}
      <section className="topic-section" id="teoria">
        <div className="topic-section__title">
          <h2>Teoría</h2>
          <span className="topic-section__meta">Unidad 4 · Documentos escritos en la empresa</span>
        </div>
  <figure className="media">
          <img
            src="/t8.png"
            alt="Comunicación escrita profesional"
          />
          <figcaption>
           La comunicación escrita profesional requiere claridad, precisión y adecuación al contexto y destinatario.
          </figcaption>
        </figure>
        <div className="topic-accordion">
          {/* 1 */}
          <details className="topic-details">
            <summary>1. La comunicación escrita: concepto, características y pasos</summary>
            <div className="topic-details__content">
              <p>
                La <strong>comunicación escrita</strong> es un proceso <strong>diferido</strong>: emisor y receptor no
                coinciden necesariamente en tiempo ni en espacio. Esto obliga a que el mensaje sea
                <strong>autónomo</strong>: debe entenderse sin explicaciones adicionales y sin depender de la respuesta inmediata.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  En la empresa, lo escrito <strong>permanece</strong>: puede convertirse en <strong>prueba</strong>, soporte de decisiones,
                  evidencia de acuerdos y reflejo directo de la <strong>imagen corporativa</strong>.
                </p>
              </div>

              <h4>Características principales</h4>
              <ul>
                <li>
                  Requiere <strong>precisión lingüística</strong> (gramática, vocabulario, puntuación).
                </li>
                <li>
                  Puede constituir <strong>prueba legal</strong> o documental (contratos, facturas, comunicaciones formales).
                </li>
                <li>
                  Permite <strong>adjuntar documentación extensa</strong> y dejar constancia ordenada de la información.
                </li>
                <li>
                  Facilita la <strong>trazabilidad</strong>: fecha, emisor, destinatario, asunto y archivo.
                </li>
              </ul>

              <h4>Pasos para una redacción eficaz</h4>
              <ol>
                <li><strong>Analiza el contexto:</strong> objetivo, destinatario, relación, canal y urgencia.</li>
                <li><strong>Piensa las ideas:</strong> qué quieres lograr (informar, solicitar, confirmar, reclamar…).</li>
                <li><strong>Ordena los párrafos:</strong> de lo general a lo concreto; una idea por párrafo.</li>
                <li><strong>Elige las frases:</strong> sencillas, directas y con vocabulario profesional.</li>
                <li><strong>Revisa antes de enviar:</strong> ortografía, datos, tono, anexos, coherencia y formato.</li>
              </ol>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Error frecuente</h4>
                <p>
                  Enviar sin revisar: una errata en un nombre, una fecha o un importe no solo confunde, también daña la
                  <strong>credibilidad</strong> y puede causar <strong>problemas legales u operativos</strong>.
                </p>
              </div>
            </div>
          </details>

          {/* 2 */}
          <details className="topic-details">
            <summary>2. Principios de redacción profesional: claridad, sencillez, concisión y cortesía</summary>
            <div className="topic-details__content">
              <p>
                Redactar bien en empresa no significa “escribir bonito”, sino <strong>escribir útil</strong>.
                Un documento profesional debe permitir que el receptor:
                <strong> entienda</strong>, <strong>actúe</strong> y <strong>recuerde</strong> lo importante sin esfuerzo.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Principio</th>
                    <th>Qué significa</th>
                    <th>Cómo se aplica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Claridad</strong></td>
                    <td>Evitar ambigüedades y dobles sentidos.</td>
                    <td>Frases cortas, orden lógico, datos completos (qué, quién, cuándo, dónde).</td>
                  </tr>
                  <tr>
                    <td><strong>Sencillez</strong></td>
                    <td>Lenguaje accesible y directo.</td>
                    <td>Evitar tecnicismos innecesarios; si son imprescindibles, definirlos.</td>
                  </tr>
                  <tr>
                    <td><strong>Concisión</strong></td>
                    <td>Decir lo necesario, sin relleno.</td>
                    <td>Eliminar repeticiones, rodeos y adjetivos vacíos; usar estructura por puntos.</td>
                  </tr>
                  <tr>
                    <td><strong>Cortesía</strong></td>
                    <td>Tono respetuoso, adecuado al vínculo.</td>
                    <td>Fórmulas correctas, agradecimiento, y firmeza sin agresividad.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--example">
                <h4 className="callout-title">🧾 Mini-ejemplo (mejorando un texto)</h4>
                <p><strong>Antes:</strong> “Le escribo para decirle que a ver si puede enviarnos eso cuanto antes.”</p>
                <p>
                  <strong>Después:</strong> “Le agradeceríamos que nos enviara la documentación solicitada antes del{" "}
                  <strong>15/02</strong> para poder tramitar el expediente.”
                </p>
              </div>

              <h4>Checklist rápida antes de enviar</h4>
              <ul className="checklist">
                <li>¿Se entiende el objetivo en la primera lectura?</li>
                <li>¿Hay un asunto/tema claro (si es memo o email) o una referencia (si es carta)?</li>
                <li>¿Incluye fechas, importes, nombres y datos verificables?</li>
                <li>¿El tono encaja con el destinatario (formal/educado/cordial)?</li>
                <li>¿Ortografía y puntuación correctas?</li>
                <li>¿Adjuntos/anexos incluidos y mencionados?</li>
              </ul>
            </div>
          </details>

          {/* 3 */}
          <details className="topic-details">
            <summary>3. Requisitos formales: formato, tipografía, márgenes, tratamiento y ortografía</summary>
            <div className="topic-details__content">
              <p>
                Además del contenido, un documento empresarial debe “entrar por los ojos”.
                La presentación transmite <strong>orden</strong>, <strong>seriedad</strong> y <strong>rigor</strong>.
              </p>

              <h4>Presentación y formato</h4>
              <ul>
                <li><strong>Papel habitual:</strong> DIN A4, color blanco.</li>
                <li><strong>Márgenes orientativos:</strong> superior e izquierdo 4 cm; inferior y derecho 3 cm.</li>
                <li><strong>Alineación:</strong> justificada o a la izquierda (según estilo corporativo).</li>
                <li><strong>Interlineado:</strong> 1,5 para lectura cómoda; separación entre párrafos.</li>
              </ul>

              <h4>Tipografía y estilo</h4>
              <ul>
                <li>Fuentes profesionales: Arial, Times New Roman u otras corporativas equivalentes.</li>
                <li>Tamaño recomendado: <strong>10 a 12</strong>.</li>
                <li>Evitar mezclar muchas fuentes y abusar de negritas/cursivas.</li>
              </ul>

              <h4>Normas de tratamiento (tono)</h4>
              <p>
                El trato depende de la relación, el contexto y la cultura organizativa.
                En caso de duda, elige <strong>educado y formal</strong>.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Nivel</th>
                    <th>Ejemplo</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Muy formal</td>
                    <td>“Excelentísimo/a…”</td>
                    <td>Actos institucionales, autoridades, ceremonial.</td>
                  </tr>
                  <tr>
                    <td>Educado</td>
                    <td>“Estimado Sr./Sra. …”</td>
                    <td>Clientes, proveedores, comunicación externa estándar.</td>
                  </tr>
                  <tr>
                    <td>Cordial</td>
                    <td>“Apreciado/a …”</td>
                    <td>Relación cercana profesional, colaboradores habituales.</td>
                  </tr>
                  <tr>
                    <td>Personal</td>
                    <td>“Hola, …”</td>
                    <td>Entornos internos o equipos con confianza y protocolo informal.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">✍️ Ortografía y puntuación</h4>
                <p>
                  La puntuación organiza el pensamiento. Un documento con errores transmite
                  <strong>negligencia</strong> y puede generar interpretaciones erróneas (especialmente en datos, condiciones y plazos).
                </p>
              </div>
            </div>
          </details>

          {/* 4 */}
          <details className="topic-details">
            <summary>4. Documentos internos: avisos, memorándum, convocatoria, acta, informe y memoria</summary>
            <div className="topic-details__content">
              <p>
                Los documentos internos sostienen el funcionamiento diario: informan, ordenan, coordinan y dejan constancia.
                Su meta es reducir dudas y evitar “teléfonos rotos”.
              </p>

              <h4>Aviso o anuncio</h4>
              <p>
                Documento breve dirigido a un colectivo (tablón, intranet, comunicación interna). Debe responder:
                <strong> qué ocurre</strong>, <strong> a quién afecta</strong>, <strong> desde cuándo</strong> y <strong> qué se espera</strong>.
              </p>

              <h4>Memorándum / Nota de régimen interno</h4>
              <p>
                Mensaje breve, poco protocolario, útil para órdenes, recordatorios o información operativa.
                Suele incluir: <strong>Para</strong>, <strong>De</strong>, <strong>Fecha</strong>, <strong>Asunto</strong>, cuerpo y pie.
              </p>

              <h4>Convocatoria</h4>
              <p>
                Cita formal a un acto (reunión, asamblea). Es clave el <strong>orden del día</strong>:
                evita improvisación y permite preparar intervenciones.
              </p>

              <h4>Acta</h4>
              <p>
                Resume lo sucedido y los acuerdos. La redacta normalmente el secretario/a y recoge:
                asistentes, puntos tratados, intervenciones relevantes y <strong>acuerdos</strong> con responsables y plazos.
              </p>

              <h4>Informe</h4>
              <p>
                Documento para <strong>apoyar decisiones</strong>: expone hechos, analiza y, cuando corresponde,
                propone conclusiones. Tipos habituales:
              </p>
              <ul>
                <li><strong>Expositivo:</strong> explica una situación.</li>
                <li><strong>Demostrativo:</strong> justifica con datos y evidencias.</li>
                <li><strong>Valorativo:</strong> incorpora evaluación y recomendación.</li>
              </ul>

              <h4>Memoria de actividades</h4>
              <p>
                Recoge logros de un periodo. Es clave para seguimiento, auditoría, transparencia y planificación futura.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Regla de oro (documentos internos)</h4>
                <p>
                  Si el documento no permite actuar (quién hace qué y cuándo), se convierte en “papel mojado”.
                  Incluye siempre responsables, plazos y canal de dudas.
                </p>
              </div>
            </div>
          </details>

          {/* 5 */}
          <details className="topic-details">
            <summary>5. Documentos externos: carta comercial, estilos de carta, saluda y otros</summary>
            <div className="topic-details__content">
              <p>
                La comunicación externa construye la relación con clientes, proveedores y entidades.
                Aquí, el documento no solo informa: <strong>representa a la empresa</strong>.
              </p>

              <h4>Carta comercial: finalidad y tipos</h4>
              <ul>
                <li>
                  <strong>Circular:</strong> mismo contenido para varios destinatarios (información general, cambios, avisos).
                </li>
                <li>
                  <strong>Comercial:</strong> apoya ventas (presentación, ofertas, seguimiento, fidelización).
                </li>
              </ul>

              <h4>Estructura de la carta</h4>
              <ul>
                <li><strong>Encabezamiento:</strong> membrete, destinatario, fecha (y referencias si procede).</li>
                <li><strong>Cuerpo:</strong> saludo, texto organizado, despedida.</li>
                <li><strong>Cierre:</strong> firma (cargo), anexos/adjuntos si los hay.</li>
              </ul>

              <h4>Estilos de carta</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Estilo</th>
                    <th>Rasgo principal</th>
                    <th>Uso habitual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Moderno</td>
                    <td>Todo alineado a la izquierda.</td>
                    <td>Organizaciones actuales, lectura rápida.</td>
                  </tr>
                  <tr>
                    <td>Evolucionado</td>
                    <td>Sin saludo ni despedida.</td>
                    <td>Comunicaciones más funcionales y breves.</td>
                  </tr>
                  <tr>
                    <td>Moderno modificado</td>
                    <td>Cierre a la derecha.</td>
                    <td>Estética corporativa específica.</td>
                  </tr>
                  <tr>
                    <td>Profesional</td>
                    <td>Con sangría.</td>
                    <td>Entornos tradicionales o protocolo interno.</td>
                  </tr>
                </tbody>
              </table>

              <h4>El “Saluda”</h4>
              <p>
                Documento breve y ceremonioso, redactado en <strong>tercera persona</strong>, usado en actos sociales,
                invitaciones formales y agradecimientos.
              </p>

              <h4>Otros documentos externos</h4>
              <ul>
                <li><strong>Invitaciones</strong> y <strong>tarjetas de visita</strong>.</li>
                <li><strong>Comunicados de prensa</strong> (relación con medios).</li>
                <li><strong>Telegramas</strong> (mensajes urgentes donde no llega internet o por formalidad histórica).</li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">🏢 Enfoque imagen de marca</h4>
                <p>
                  La carta es como la “cara escrita” de la empresa: un tono inadecuado, una estructura caótica o errores
                  ortográficos generan desconfianza aunque el producto sea bueno.
                </p>
              </div>
            </div>
          </details>

          {/* 6 */}
          <details className="topic-details">
            <summary>6. Comunicaciones oficiales: instancia y oficio (Administración Pública)</summary>
            <div className="topic-details__content">
              <p>
                Cuando nos dirigimos a la Administración, la forma importa tanto como el contenido.
                Son documentos de estructura rígida y con fórmula estable.
              </p>

              <h4>Instancia (solicitud)</h4>
              <p>
                Sirve para pedir algo a un organismo público. Su estructura típica es:
              </p>
              <ol>
                <li><strong>Encabezamiento:</strong> datos de la persona/entidad solicitante.</li>
                <li><strong>Expone:</strong> hechos y antecedentes (de forma clara y ordenada).</li>
                <li><strong>Solicita:</strong> petición concreta (qué se pide exactamente).</li>
                <li><strong>Pie:</strong> lugar, fecha, firma y organismo destinatario.</li>
              </ol>

              <h4>Oficio</h4>
              <p>
                Comunicación formal entre entidades públicas o para informar/avisar a personas físicas o jurídicas.
                Suele ser más “administrativo” y directo en el propósito.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧾 Consejo práctico</h4>
                <p>
                  En comunicaciones oficiales, evita valoraciones emocionales: prioriza hechos, referencias, fechas,
                  normativa si aplica y una solicitud concreta.
                </p>
              </div>
            </div>
          </details>

          {/* 7 */}
          <details className="topic-details">
            <summary>7. Soportes, canales y gestión documental</summary>
            <div className="topic-details__content">
              <p>
                La documentación empresarial no solo se redacta: también se <strong>recibe</strong>, <strong>clasifica</strong>,
                <strong> almacena</strong> y <strong>recupera</strong>. De eso trata la gestión documental.
              </p>

              <h4>Soportes</h4>
              <ul>
                <li>
                  <strong>Papel:</strong> tradicional, útil para firmas manuscritas, archivo físico y ciertos trámites.
                </li>
                <li>
                  <strong>Digital:</strong> archivos informáticos; permiten búsqueda, copia, distribución y lectura no lineal
                  mediante <strong>hipervínculos</strong>.
                </li>
              </ul>

              <h4>Canales habituales</h4>
              <ul>
                <li><strong>Correo convencional:</strong> carta, certificados, burofax (según rapidez/seguridad).</li>
                <li><strong>Fax:</strong> transmisión rápida de documentos escaneados (uso residual pero presente en algunos sectores).</li>
                <li><strong>Correo electrónico:</strong> imprescindible por rapidez, coste y alcance.</li>
              </ul>

              <h4>Herramientas de gestión</h4>
              <ul>
                <li><strong>Intranet</strong> y portales corporativos para circulación interna.</li>
                <li><strong>Certificados digitales</strong> para integridad, autenticación y trámites electrónicos.</li>
                <li><strong>Procesadores de texto</strong> (p. ej., Word) para crear, editar, guardar, imprimir y estandarizar documentos.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">🔒 Seguridad y trazabilidad</h4>
                <p>
                  Un documento mal archivado o sin control de versiones puede causar duplicidades, errores de ejecución
                  y pérdida de evidencia. Define criterios: nombre de archivo, fecha, versión y responsable.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          2) PLANTILLAS / MODELOS
      ========================== */}
      <section className="topic-section" id="plantillas">
        <div className="topic-section__title">
          <h2>Plantillas listas (modelos)</h2>
          <span className="topic-section__meta">Rellenar y adaptar</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Modelo 1 · Aviso interno</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">📌 Aviso</h4>
                <p><strong>ASUNTO:</strong> [Título breve y concreto]</p>
                <p><strong>FECHA:</strong> [dd/mm/aaaa] · <strong>ÁREA:</strong> [Departamento]</p>
                <div className="divider" />
                <p>
                  Se informa a [colectivo] de que [hecho / cambio / incidencia].<br />
                  <strong>Cuándo:</strong> [fecha/hora] · <strong>Dónde:</strong> [lugar] · <strong>Impacto:</strong> [a quién afecta]
                </p>
                <p>
                  <strong>Indicaciones:</strong> [qué se espera que haga el personal / procedimiento].<br />
                  Para cualquier duda, contactar con [persona/canal] antes de [plazo].
                </p>
                <p className="muted">Gracias por su colaboración.</p>
              </div>

              <ul className="checklist">
                <li>¿Se entiende sin contexto?</li>
                <li>¿Incluye impacto, acción y canal de dudas?</li>
                <li>¿Es breve y visible?</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 2 · Memorándum (nota interna)</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">🗒️ Memorándum</h4>
                <p><strong>PARA:</strong> [Nombre / Departamento]</p>
                <p><strong>DE:</strong> [Nombre y cargo]</p>
                <p><strong>FECHA:</strong> [dd/mm/aaaa]</p>
                <p><strong>ASUNTO:</strong> [Tema]</p>
                <div className="divider" />
                <p>
                  [Mensaje principal en 2–4 líneas: qué se decide, qué se recuerda o qué se solicita.]
                </p>
                <ul>
                  <li><strong>Punto 1:</strong> [acción concreta + responsable + plazo]</li>
                  <li><strong>Punto 2:</strong> [acción concreta + responsable + plazo]</li>
                </ul>
                <p className="muted">Gracias.</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 3 · Informe (estructura base)</summary>
            <div className="topic-details__content">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sección</th>
                    <th>Qué incluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Título y datos</strong></td>
                    <td>Asunto, autor, fecha, destinatario, referencia.</td>
                  </tr>
                  <tr>
                    <td><strong>Objeto</strong></td>
                    <td>Finalidad del informe (para qué se redacta).</td>
                  </tr>
                  <tr>
                    <td><strong>Antecedentes</strong></td>
                    <td>Contexto mínimo necesario (sin relleno).</td>
                  </tr>
                  <tr>
                    <td><strong>Desarrollo</strong></td>
                    <td>Hechos, datos, análisis, evidencias (tablas si procede).</td>
                  </tr>
                  <tr>
                    <td><strong>Conclusiones</strong></td>
                    <td>Resumen de hallazgos clave.</td>
                  </tr>
                  <tr>
                    <td><strong>Propuesta/Recomendación</strong></td>
                    <td>Opciones, evaluación y propuesta final (si es valorativo).</td>
                  </tr>
                  <tr>
                    <td><strong>Anexos</strong></td>
                    <td>Documentación de apoyo.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--tip">
                <h4 className="callout-title">📊 Tip de calidad</h4>
                <p>
                  Un informe “bueno” permite decidir: aporta datos relevantes, elimina lo accesorio y termina con conclusiones
                  y, si corresponde, una recomendación clara.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 4 · Carta comercial (estructura)</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">✉️ Carta comercial</h4>
                <p><strong>[Membrete / Empresa]</strong></p>
                <p><strong>Destinatario:</strong> [Nombre, cargo, empresa]</p>
                <p><strong>Dirección:</strong> [Dirección completa]</p>
                <p><strong>Fecha:</strong> [dd/mm/aaaa]</p>
                <div className="divider" />
                <p><strong>Estimado/a Sr./Sra. [Apellido]:</strong></p>
                <p>
                  [Párrafo 1: motivo de la carta + contexto mínimo.]<br />
                  [Párrafo 2: propuesta / solicitud / información clave.]<br />
                  [Párrafo 3: pasos siguientes + plazos + canal de contacto.]
                </p>
                <p>Reciba un cordial saludo.</p>
                <p><strong>[Firma]</strong><br />[Nombre y cargo]</p>
                <p className="muted"><strong>Anexos:</strong> [Listado de documentos adjuntos, si procede]</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 5 · Acta de reunión (esqueleto)</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">🧾 Acta</h4>
                <p><strong>Reunión:</strong> [Tipo] · <strong>Fecha:</strong> [dd/mm/aaaa] · <strong>Hora:</strong> [inicio–fin] · <strong>Lugar:</strong> [sala / online]</p>
                <p><strong>Asistentes:</strong> [Listado] · <strong>Excusan asistencia:</strong> [si aplica]</p>
                <div className="divider" />
                <p><strong>Orden del día</strong></p>
                <ol>
                  <li>[Punto 1]</li>
                  <li>[Punto 2]</li>
                  <li>Ruegos y preguntas</li>
                </ol>
                <div className="divider" />
                <p><strong>Desarrollo</strong></p>
                <p>[Resumen objetivo de lo tratado por puntos.]</p>
                <p><strong>Acuerdos</strong></p>
                <ul>
                  <li>[Acuerdo + responsable + plazo]</li>
                  <li>[Acuerdo + responsable + plazo]</li>
                </ul>
                <p className="muted">Se levanta la sesión a las [hora].</p>
                <p><strong>Firma:</strong> [Secretaría / Presidencia]</p>
              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Clave del acta</h4>
                <p>
                  No es “transcripción”. Es un documento de constancia: debe recoger acuerdos, responsables y plazos
                  con precisión.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 6 · Instancia (Expone / Solicita)</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">🏛️ Instancia</h4>
                <p><strong>D./Dña.:</strong> [Nombre y apellidos] · <strong>DNI/NIE:</strong> [____]</p>
                <p><strong>Domicilio:</strong> [Dirección completa]</p>
                <p><strong>Ante:</strong> [Organismo / Departamento]</p>
                <div className="divider" />
                <p><strong>EXPONE</strong></p>
                <p>
                  1. [Hecho/antecedente 1].<br />
                  2. [Hecho/antecedente 2].<br />
                  3. [Hecho/antecedente 3].
                </p>
                <p><strong>SOLICITA</strong></p>
                <p>[Petición concreta, clara y verificable.]</p>
                <div className="divider" />
                <p><strong>[Lugar]</strong>, a <strong>[fecha]</strong></p>
                <p><strong>Firma:</strong> ____________________</p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Modelo 7 · Oficio (comunicación oficial)</summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">📄 Oficio</h4>
                <p><strong>Organismo/Entidad:</strong> [____]</p>
                <p><strong>Ref.:</strong> [____] · <strong>Asunto:</strong> [____] · <strong>Fecha:</strong> [dd/mm/aaaa]</p>
                <p><strong>Destinatario:</strong> [Nombre/Entidad + cargo/departamento]</p>
                <div className="divider" />
                <p>
                  Por medio del presente, se comunica [hecho/objetivo del oficio] con el fin de [finalidad].
                </p>
                <p>
                  Se adjunta [documentación] / Se solicita [acción] antes del [fecha], a través de [canal].
                </p>
                <p className="muted">Atentamente,</p>
                <p><strong>[Firma y cargo]</strong></p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          3) ACTIVIDADES
      ========================== */}
      <section className="topic-section" id="actividades">
        <div className="topic-section__title">
          <h2>Actividades prácticas</h2>
          <span className="topic-section__meta">Aplicación inmediata</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Actividad 1 · Reescritura (claridad y concisión)</summary>
            <div className="topic-details__content">
              <p>
                Reescribe el siguiente texto para que sea <strong>claro</strong>, <strong>sencillo</strong>, <strong>conciso</strong> y <strong>cortés</strong>:
              </p>
              <div className="callout callout--activity">
                <h4 className="callout-title">🧩 Texto a mejorar</h4>
                <p>
                  “Hola, te escribo para comentarte lo de la documentación que quedamos en que nos la mandarías y a ver si puede
                  ser lo antes posible porque si no no podemos hacer lo que tenemos que hacer, gracias.”
                </p>
              </div>

              <ul className="checklist">
                <li>Incluye un plazo (fecha límite).</li>
                <li>Indica qué documentación exacta falta.</li>
                <li>Define un canal de respuesta (correo / teléfono / portal).</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 2 · Redacta un aviso interno</summary>
            <div className="topic-details__content">
              <p>
                Situación: el lunes habrá <strong>mantenimiento informático</strong> y el sistema de tickets no funcionará entre 10:00 y 12:00.
                Redacta un aviso para todo el personal indicando alternativa y canal de incidencias.
              </p>
              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Pistas</h4>
                <ul>
                  <li>Impacto: quién se ve afectado.</li>
                  <li>Acción: qué debe hacer el personal durante la incidencia.</li>
                  <li>Contacto: responsable y forma de reportar urgencias.</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 3 · Informe breve (expositivo → valorativo)</summary>
            <div className="topic-details__content">
              <p>
                Elabora un informe sobre “Incremento de consultas por duplicidad de pedidos”.
                Haz dos versiones:
              </p>
              <ol>
                <li><strong>Expositivo:</strong> describe la situación y los datos principales.</li>
                <li><strong>Valorativo:</strong> añade causas probables y una recomendación final.</li>
              </ol>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Estructura mínima</h4>
                <p><strong>Objeto</strong> → <strong>Antecedentes</strong> → <strong>Datos</strong> → <strong>Conclusiones</strong> → <strong>Recomendación</strong></p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 4 · Convocatoria + Acta</summary>
            <div className="topic-details__content">
              <p>
                Redacta:
              </p>
              <ul>
                <li>Una <strong>convocatoria</strong> para una reunión de 30 minutos con orden del día (3 puntos).</li>
                <li>Un <strong>acta</strong> posterior con 2 acuerdos (responsable + plazo).</li>
              </ul>
              <div className="callout callout--warning">
                <h4 className="callout-title">🕒 Regla práctica</h4>
                <p>
                  Orden del día claro = reunión breve. Acuerdos con responsable y fecha = seguimiento real.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 5 · Instancia (caso simulado)</summary>
            <div className="topic-details__content">
              <p>
                Caso: una empresa necesita solicitar a un organismo público una <strong>certificación</strong> para un trámite.
                Redacta una instancia con:
              </p>
              <ul>
                <li>3 puntos en <strong>EXPONE</strong> (hechos)</li>
                <li>1 petición concreta en <strong>SOLICITA</strong></li>
                <li>Datos de contacto</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          4) AUTOEVALUACIÓN
      ========================== */}
      <section className="topic-section" id="autoevaluacion">
        <div className="topic-section__title">
          <h2>Autoevaluación (repaso)</h2>
          <span className="topic-section__meta">Comprueba si dominas el tema</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Test rápido · 12 preguntas</summary>
            <div className="topic-details__content">
              <ol>
                <li>¿Qué significa que la comunicación escrita sea un proceso <strong>diferido</strong>?</li>
                <li>Nombra 2 documentos que pueden tener valor de <strong>prueba</strong> en la empresa.</li>
                <li>Enumera los 5 pasos para una redacción eficaz antes de enviar un documento.</li>
                <li>Define <strong>claridad</strong> y pon un ejemplo de ambigüedad típica.</li>
                <li>¿Por qué la <strong>concisión</strong> mejora la eficacia del documento?</li>
                <li>¿Qué elementos básicos debe incluir un <strong>memorándum</strong>?</li>
                <li>¿Qué papel cumple el <strong>orden del día</strong> en una convocatoria?</li>
                <li>¿Qué debe recoger un <strong>acta</strong> para que sea útil y verificable?</li>
                <li>Diferencia entre informe <strong>expositivo</strong> y <strong>valorativo</strong>.</li>
                <li>¿Qué partes componen la estructura de una <strong>carta comercial</strong>?</li>
                <li>¿Qué es una <strong>instancia</strong> y cuáles son sus bloques “clave”?</li>
                <li>Menciona 3 herramientas o recursos vinculados a la <strong>gestión documental</strong>.</li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Criterio de dominio</h4>
                <p>
                  Si puedes responder con ejemplos y sin mirar apuntes al menos 9 de 12, vas muy bien.
                  Si fallas en 4 o más, repasa: <strong>principios de redacción</strong> + <strong>estructura de documentos</strong>.
                </p>
              </div>
            </div>
          </details>
          {/* =========================
          SECCIÓN VÍDEOS
         ========================= */}
      <section className="topic-section">
        <h2>Recursos audiovisuales</h2>

        

        <div className="divider" />

        <div className="video-block">
          <div className="video-title">Comunicación escrita en la empresa</div>
          <p className="video-meta muted">La importancia de la comunicación escrita</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/Jt55keaBTOo"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

          <details className="topic-details">
            <summary>Esquema de síntesis </summary>
            <div className="topic-details__content">
              <div className="callout callout--example">
                <h4 className="callout-title">🧩 Unidad 4 en 12 líneas</h4>
                <ul>
                  <li>Comunicación escrita = proceso diferido + mensaje autónomo.</li>
                  <li>Características: precisión lingüística + constancia + valor probatorio.</li>
                  <li>Pasos: contexto → ideas → estructura → redacción → revisión.</li>
                  <li>Principios: claridad, sencillez, concisión, cortesía.</li>
                  <li>Forma: A4, márgenes, tipografía profesional, coherencia visual.</li>
                  <li>Ortografía/puntuación = orden mental + credibilidad.</li>
                  <li>Internos: aviso, memo, convocatoria, acta, informe, memoria.</li>
                  <li>Externos: carta comercial (circular/comercial) + saluda + otros.</li>
                  <li>Carta: encabezamiento + cuerpo + cierre; estilos: moderno, etc.</li>
                  <li>Oficiales: instancia (expone/solicita) y oficio.</li>
                  <li>Soportes: papel vs digital (hipervínculos, búsqueda, trazabilidad).</li>
                  <li>Gestión documental: recibir, archivar, recuperar + herramientas (intranet, certificados, procesador).</li>
                </ul>
              </div>

              <p className="muted">
                Piensa en la comunicación escrita como el plano de un edificio: sin base (gramática) y sin diseño (claridad y formato),
                la estructura no se sostiene y el mensaje falla.
              </p>
            </div>
          </details>
        </div>
      </section>
    </TopicLayout>
  );
};

export default Tema08;
