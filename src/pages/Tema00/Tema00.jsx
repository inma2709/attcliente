import TopicLayout from "../../components/TopicLayout";

const Tema01 = () => {
  return (
    <TopicLayout
      numero="01"
      title="Los errores más frecuentes en la atención al cliente"
      intro="Este tema no pretende señalar ni culpabilizar a quien atiende al cliente. Todo lo contrario: parte del reconocimiento de que la atención al cliente es un trabajo exigente, complejo y muchas veces infravalorado. Identificar errores comunes —que todos cometemos en algún momento— es el primer paso para mejorar, profesionalizar el servicio y proteger tanto al cliente como al propio profesional."
    >
      {/* ============================= */}
      {/* SECCIÓN 1 */}
      {/* ============================= */}
       <figure className="hero-media">
        <img src="/t0.png" alt="Atención al cliente: errores frecuentes" />
        <figcaption className="media-caption">La dificil profesion de atender al cliente</figcaption>
      </figure>
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1. Por qué empezar por los errores</h2>
          <span className="topic-section__meta">El error no es un fracaso; es información.</span>
        </div>

        <p>
          En atención al cliente, los errores rara vez aparecen por falta de interés. Con mucha frecuencia nacen de
          una combinación de factores: <strong>presión operativa</strong>, <strong>sobrecarga emocional</strong>,
          <strong>falta de protocolos claros</strong>, <strong>herramientas insuficientes</strong> o{" "}
          <strong>objetivos mal diseñados</strong>.
        </p>

        <p>
          Por eso, abordar los errores al inicio del manual cumple tres funciones formativas: (1){" "}
          <strong>normaliza</strong> la dificultad del rol sin culpabilizar, (2) introduce una{" "}
          <strong>cultura de mejora</strong> basada en evidencia y (3) convierte la experiencia cotidiana del alumnado
          en un <strong>laboratorio de aprendizaje</strong>.
        </p>

        <div className="callout callout--tip">
          <div className="callout-title">🧠 Idea clave</div>
          <p>
            Un error es un dato del sistema: señala dónde falta método, estructura o entrenamiento. No define tu valía
            como profesional.
          </p>
        </div>

        <div className="ra__panel ra__panel--soft">
          <div className="ra__panelTitle">📍 Enfoque del tema</div>
          <ul className="ra__list">
            <li>
              <strong>No buscamos culpables</strong>: buscamos causas (personales, organizativas y comunicativas).
            </li>
            <li>
              <strong>No buscamos perfección</strong>: buscamos consistencia y mejora progresiva.
            </li>
            <li>
              <strong>No buscamos “aguantar”</strong>: buscamos intervenir con criterio, límites y profesionalidad.
            </li>
          </ul>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2 */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2. Qué entendemos por “error” en atención al cliente</h2>
          <span className="topic-section__meta">Definición operativa</span>
        </div>

        <p>
          En este manual llamaremos “error” a cualquier conducta o decisión que, aunque sea comprensible en un contexto
          de presión, produce uno o más de estos efectos:
        </p>

        <ul>
          <li>Reduce la <strong>confianza</strong> del cliente.</li>
          <li>Incrementa el <strong>conflicto</strong> o la probabilidad de queja.</li>
          <li>Genera <strong>ineficiencia</strong> (repeticiones, retrabajo, escalados innecesarios).</li>
          <li>Aumenta el <strong>desgaste</strong> del profesional.</li>
          <li>Daña la <strong>imagen</strong> de la organización.</li>
        </ul>

        <div className="callout callout--example">
          <div className="callout-title">📌 Importante</div>
          <p>
            Un mismo comportamiento puede ser “error” o no dependiendo del contexto. Por ejemplo, ser rápido puede ser
            excelente si hay claridad; puede ser un error si sacrifica escucha y precisión.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 3 */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Los 12 errores más frecuentes (con causa, impacto y principio de solución)</h2>
          <span className="topic-section__meta">Mapa de mejora para el resto del manual</span>
        </div>

        <p className="muted">
          Cada error se presenta con: <strong>cómo aparece</strong>, <strong>por qué sucede</strong>,{" "}
          <strong>qué provoca</strong> y un <strong>principio de solución</strong> (que desarrollaremos en temas
          posteriores).
        </p>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>3.1. No escuchar activamente (responder antes de comprender)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> interrumpir, asumir, “ya sé lo que te pasa”, saltar a la solución sin
                verificar.
              </p>
              <p>
                <strong>Por qué sucede:</strong> prisa, exceso de casos, “piloto automático”, presión por tiempos.
              </p>
              <p>
                <strong>Impacto:</strong> el cliente se siente ignorado; aumenta la escalada emocional; se generan
                errores de diagnóstico.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Escuchar para diagnosticar: preguntar, reformular y confirmar antes de ofrecer opciones.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.2. Responder con prisa (soluciones rápidas que generan retrabajo)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> respuestas cortas, sin contexto, sin comprobar datos, sin explicar el
                siguiente paso.
              </p>
              <p>
                <strong>Por qué sucede:</strong> multitarea, colas, objetivos centrados solo en velocidad.
              </p>
              <p>
                <strong>Impacto:</strong> repeticiones, nuevas llamadas, quejas por falta de información, sensación de
                desinterés.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  “Rápido pero completo”: claridad, estructura y confirmación del entendimiento del cliente.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.3. Prometer más de lo que se puede cumplir (gestión deficiente de expectativas)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> plazos irreales, promesas vagas (“hoy queda”), soluciones sin respaldo.
              </p>
              <p>
                <strong>Por qué sucede:</strong> deseo de calmar al cliente, presión comercial, miedo a perder la venta.
              </p>
              <p>
                <strong>Impacto:</strong> ruptura de confianza; el segundo fallo pesa más que el primero; queja formal.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Realismo + alternativa: explicar límites y ofrecer opciones viables con tiempos claros.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.4. Tomarse la queja como algo personal (defensividad)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> justificar de inmediato, discutir, “no es culpa nuestra”, tono tenso.
              </p>
              <p>
                <strong>Por qué sucede:</strong> carga emocional, falta de entrenamiento en conflicto, experiencias previas.
              </p>
              <p>
                <strong>Impacto:</strong> escalada; el cliente pasa de “quiero solución” a “quiero ganar”.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Separar persona de problema: validar emoción, centrar en hechos y proponer pasos.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.5. Tono frío o excesivamente técnico (deshumanización)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> respuestas “plantilla”, tecnicismos, ausencia de empatía, poca calidez.
              </p>
              <p>
                <strong>Por qué sucede:</strong> fatiga, automatización mal usada, cultura “solo datos”.
              </p>
              <p>
                <strong>Impacto:</strong> el cliente percibe indiferencia, baja la satisfacción aunque la solución sea correcta.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Humanizar sin perder eficiencia: personalización mínima, validación breve, lenguaje claro.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.6. Decir “no se puede” sin explicar (falta de transparencia)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> negar sin razones, sin alternativas, sin ofrecer siguiente paso.
              </p>
              <p>
                <strong>Por qué sucede:</strong> miedo a conflictos, desconocimiento de políticas, falta de autonomía.
              </p>
              <p>
                <strong>Impacto:</strong> frustración y sensación de injusticia (el cliente siente arbitrariedad).
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Transparencia + opciones: explicar el motivo y proponer alternativas dentro de política.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.7. Usar canales informales e inseguros (DMs como “soporte”)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> atención por Instagram/WhatsApp sin registro, sin trazabilidad.
              </p>
              <p>
                <strong>Por qué sucede:</strong> comodidad, “estamos donde está el cliente”, falta de sistema.
              </p>
              <p>
                <strong>Impacto:</strong> riesgo RGPD; pérdida de datos; dependencia de plataformas; falta de control del servicio.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Canal profesional + trazabilidad: formularios, email corporativo, CRM y registro de casos.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.8. No gestionar el tiempo de espera (silencio informativo)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> no informar del estado, dejar al cliente “a la deriva”.
              </p>
              <p>
                <strong>Por qué sucede:</strong> falta de protocolos, saturación, ausencia de herramientas.
              </p>
              <p>
                <strong>Impacto:</strong> aumenta ansiedad y queja; el cliente interpreta abandono.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Comunicación proactiva: informar tiempos, estado y alternativas (aunque no haya novedad).
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.9. Cerrar tras la venta o la incidencia (postventa inexistente)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> “ya está” sin seguimiento, sin confirmación de satisfacción.
              </p>
              <p>
                <strong>Por qué sucede:</strong> enfoque solo en “resolver” o “vender”, no en relación.
              </p>
              <p>
                <strong>Impacto:</strong> pérdida de fidelización y recomendaciones; el cliente se siente “instrumentalizado”.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Cierre de calidad: confirmar resultado, ofrecer canal, y seguimiento breve si procede.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.10. Respuestas genéricas y despersonalizadas (automatización mal aplicada)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> plantillas sin adaptar, mensajes “robot”, no usar el nombre ni contexto.
              </p>
              <p>
                <strong>Por qué sucede:</strong> alta carga, falta de cultura de servicio, automatización sin criterio.
              </p>
              <p>
                <strong>Impacto:</strong> sensación de indiferencia; disminuye confianza y satisfacción.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Personalización mínima efectiva: referencia al caso + tono humano + siguiente paso claro.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.11. No medir satisfacción ni aprender del feedback</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> no hay encuestas, no se registran motivos, no se revisan quejas.
              </p>
              <p>
                <strong>Por qué sucede:</strong> cultura reactiva, falta de indicadores, falta de tiempo.
              </p>
              <p>
                <strong>Impacto:</strong> se repiten errores; no hay mejora continua; se desconoce el “por qué” de la fuga.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Medición simple y constante: CSAT/NPS + análisis de causas y acciones correctivas.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.12. Trabajar sin protocolo (improvisación en conflicto)</summary>
            <div className="topic-details__content">
              <p>
                <strong>Cómo aparece:</strong> cada persona atiende “a su manera”; escalados arbitrarios; incoherencia.
              </p>
              <p>
                <strong>Por qué sucede:</strong> ausencia de guías, formación desigual, procesos no documentados.
              </p>
              <p>
                <strong>Impacto:</strong> trato desigual; inseguridad del profesional; sensación de injusticia en clientes.
              </p>
              <div className="callout callout--tip">
                <div className="callout-title">✅ Principio de solución</div>
                <p>
                  Protocolos + criterios: guiones flexibles, límites, y rutas de escalado claras.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 4 */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Poner en valor el trabajo: lo difícil no es atender, es sostener calidad</h2>
          <span className="topic-section__meta">Dignidad profesional</span>
        </div>

        <p>
          La atención al cliente es un trabajo duro porque combina tres exigencias a la vez: (1) resolver con precisión,
          (2) comunicar con calidad, y (3) regular emociones propias y ajenas. Muchas profesiones requieren una de estas
          habilidades; aquí se necesitan las tres simultáneamente, repetidas decenas de veces al día.
        </p>

        <p>
          Por eso, mejorar no significa “ser perfecto”: significa desarrollar un <strong>método</strong> que te proteja
          bajo presión y te permita sostener un estándar de servicio incluso en días difíciles.
        </p>

        <div className="callout callout--example">
          <div className="callout-title">💬 Mensaje clave</div>
          <p>
            Este manual no está diseñado para que “aguantes” más: está diseñado para que{" "}
            <strong>trabajes mejor, con más seguridad y menos desgaste</strong>.
          </p>
        </div>
      </section>
      <section className="topic-section">
  <h2 className="topic-section__title">
    Errores críticos en la atención al cliente y su impacto en el negocio
  </h2>

  <p className="muted">
    En este vídeo, la mentora empresarial Txell Costa analiza errores habituales en la atención al cliente
    que no solo afectan a la experiencia del usuario, sino que pueden frenar el crecimiento de un negocio
    y comprometer su viabilidad a medio y largo plazo. El enfoque del vídeo pone el acento en la
    <strong> profesionalización del servicio</strong>, la <strong>seguridad</strong> y la
    <strong> construcción de relaciones sostenibles</strong> con los clientes.
  </p>

  {/* ===================== RESUMEN DIDÁCTICO ===================== */}
  <div className="callout callout--tip">
    <div className="callout-title">📌 Ideas clave del vídeo</div>
    <ul>
      <li>
        <strong>Uso de canales informales:</strong> atender a clientes únicamente por redes sociales
        (como DMs de Instagram) implica riesgos legales (RGPD), dependencia de algoritmos externos y
        ausencia de cobertura legal ante conflictos.
      </li>
      <li>
        <strong>Falta de filtros y saturación:</strong> ofrecer el teléfono personal como canal principal
        genera interrupciones constantes y dificulta la segmentación. Se recomienda el uso de
        <strong> formularios estructurados y específicos</strong> por servicio.
      </li>
      <li>
        <strong>Mala gestión de expectativas:</strong> prometer plazos o soluciones irreales para cerrar
        una venta deteriora la confianza. La clave es ser realista y cumplir lo prometido.
      </li>
      <li>
        <strong>Ausencia de postventa:</strong> finalizar la relación tras la venta impide fidelizar
        y convertir clientes en recomendadores.
      </li>
      <li>
        <strong>Falta de feedback y humanización:</strong> no medir la satisfacción, ignorar críticas
        constructivas o responder de forma fría limita la mejora continua y la confianza.
      </li>
    </ul>
  </div>

  {/* ===================== ANALOGÍA ===================== */}
  <div className="callout callout--example">
    <div className="callout-title">🧠 Analogía clave</div>
    <p>
      Gestionar la atención al cliente solo a través de redes sociales es como
      <strong> construir una tienda de lujo en un terreno alquilado y sin cerraduras</strong>:
      en cualquier momento pueden cambiar las reglas y no existe protección legal si surge un problema.
    </p>
  </div>

  {/* ===================== ANTES DE VER ===================== */}
  <div className="ra__panel ra__panel--soft">
    <div className="ra__panelTitle">🧠 Antes de ver el vídeo</div>
    <ol className="ra__olist">
      <li>¿Qué canales de atención al cliente consideras más seguros y por qué?</li>
      <li>¿Crees que estar siempre disponible mejora realmente la atención al cliente?</li>
      <li>¿Qué consecuencias puede tener prometer más de lo que se puede cumplir?</li>
    </ol>
  </div>

  {/* ===================== VÍDEO ===================== */}
  <div className="video-block">
    <h4 className="video-title">🎥 Errores críticos en la atención al cliente</h4>

    <div className="embed">
      <iframe
        src="https://www.youtube.com/embed/4X1PP6gvG3U"
        title="Errores críticos en la atención al cliente – Txell Costa"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>

  {/* ===================== DESPUÉS DE VER ===================== */}
  <div className="ra__panel">
    <div className="ra__panelTitle">✅ Después de ver el vídeo</div>
    <ul className="ra__list">
      <li>Identifica <strong>dos errores</strong> que hayas observado en empresas reales.</li>
      <li>Explica qué impacto pueden tener esos errores en la confianza del cliente.</li>
      <li>
        Completa la frase: <em>“Una atención al cliente profesional implica…”</em>
      </li>
    </ul>
  </div>
 <div className="divider" />
 <section className="topic-section">
  <h2 className="topic-section__title">
    Errores fatales en la atención al cliente y pérdida silenciosa de clientes
  </h2>

  <p className="muted">
    En este vídeo, el formador y consultor John Mendoza expone cómo muchos negocios fracasan
    no por la calidad de su producto, sino por <strong>errores evitables en la atención al cliente</strong>.
    El autor subraya que la atención al cliente es un pilar estratégico del crecimiento:
    cuando este falla, las ventas difícilmente pueden sostenerse, por mucha inversión que se haga
    en publicidad o captación.
  </p>

  {/* ===================== RESUMEN DIDÁCTICO ===================== */}
  <div className="callout callout--tip">
    <div className="callout-title">📌 Ideas clave del vídeo</div>
    <ul>
      <li>
        <strong>Lentitud y falta de respuesta:</strong> en un contexto de inmediatez (“efecto Amazon”),
        no responder o tardar días en contestar rompe la relación inicial con el cliente.
      </li>
      <li>
        <strong>Canales inadecuados:</strong> no todos los clientes quieren comunicarse por los mismos medios;
        es clave identificar el canal preferido según el perfil del cliente.
      </li>
      <li>
        <strong>Falta de capacitación:</strong> atender sin conocer bien el producto o responder de forma genérica
        genera frustración y desconfianza.
      </li>
      <li>
        <strong>Ausencia de empatía y transparencia:</strong> un trato frío, condiciones poco claras o una
        actitud centrada solo en vender debilitan la relación.
      </li>
      <li>
        <strong>Incoherencia entre publicidad y servicio:</strong> prometer algo que luego no se cumple
        es percibido como engaño.
      </li>
      <li>
        <strong>No medir el proceso:</strong> sin métricas de tiempos de respuesta, llamadas o garantías,
        los errores se repiten y el negocio pierde dinero sin saberlo.
      </li>
    </ul>
  </div>

  {/* ===================== ANALOGÍA ===================== */}
  <div className="callout callout--example">
    <div className="callout-title">🧠 Analogía clave</div>
    <p>
      Intentar hacer crecer un negocio con una mala atención al cliente es como{" "}
      <strong>llenar un cubo con agujeros</strong>: por mucho esfuerzo que se haga en atraer clientes,
      el agua se pierde si no se corrigen las fugas del servicio.
    </p>
  </div>

  {/* ===================== ANTES DE VER ===================== */}
  <div className="ra__panel ra__panel--soft">
    <div className="ra__panelTitle">🧠 Antes de ver el vídeo</div>
    <ol className="ra__olist">
      <li>¿Cuánto tiempo consideras aceptable para responder a un cliente hoy en día?</li>
      <li>¿Crees que todos los clientes prefieren el mismo canal de comunicación?</li>
      <li>¿Qué te genera más desconfianza como cliente: la lentitud o la falta de claridad?</li>
    </ol>
  </div>

  {/* ===================== VÍDEO ===================== */}
  <div className="video-block">
    <h4 className="video-title">🎥 Los errores fatales en la atención al cliente</h4>

    <div className="embed">
      <iframe
        src="https://www.youtube.com/embed/cuWoqhgtTYU"
        title="Errores fatales en la atención al cliente – John Mendoza"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>

  {/* ===================== DESPUÉS DE VER ===================== */}
  <div className="ra__panel">
    <div className="ra__panelTitle">✅ Después de ver el vídeo</div>
    <ul className="ra__list">
      <li>Identifica <strong>dos errores</strong> que creas que más afectan a tu sector.</li>
      <li>Explica cómo esos errores influyen en la confianza y fidelidad del cliente.</li>
      <li>
        Completa la frase: <em>“Un buen profesional de atención al cliente debe actuar como…”</em>
      </li>
    </ul>
  </div>

  {/* ===================== DEBATE ===================== */}
  <div className="ra__panel ra__panel--soft">
    <div className="ra__panelTitle">💬 Debate y reflexión</div>
    <ol className="ra__olist">
      <li>
        ¿Por qué compara el autor la atención rápida con el modelo de Amazon?
      </li>
      <li>
        ¿Cómo influye la edad y el perfil del cliente en el canal de comunicación elegido?
      </li>
      <li>
        ¿Qué importancia tiene la transparencia en las condiciones del servicio para generar confianza?
      </li>
      <li>
        ¿Qué métricas básicas debería medir cualquier empresa para no “perder clientes sin darse cuenta”?
      </li>
    </ol>
  </div>
</section>

  {/* ===================== DEBATE ===================== */}
  <div className="ra__panel ra__panel--soft">
    <div className="ra__panelTitle">💬 Debate y reflexión</div>
    <ol className="ra__olist">
      <li>
        ¿Por qué la atención al cliente debe considerarse una función estratégica y no solo operativa?
      </li>
      <li>
        ¿Qué error te parece más grave: fallar en la solución o fallar en el trato? Justifica.
      </li>
      <li>
        ¿Cómo puede la postventa transformar a un cliente satisfecho en un embajador de marca?
      </li>
    </ol>
  </div>
</section>


      {/* ============================= */}
      {/* SECCIÓN 5 */}
      {/* ============================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Autoevaluación inicial (reflexionando)</h2>
          <span className="topic-section__meta">Para orientar tu mejora</span>
        </div>

        <p>
          Señala (mentalmente o por escrito) 3 errores de la lista anterior que creas que cometes con más frecuencia.
          El objetivo no es culpabilizarte, sino detectar <strong>patrones</strong>: ¿aparecen por prisa, por inseguridad,
          por falta de herramientas, por presión externa?
        </p>

        <div className="ra__panel ra__panel--soft">
          <div className="ra__panelTitle">📝 Preguntas de autoevaluación</div>
          <ol className="ra__olist">
            <li>¿Qué error te ocurre cuando estás cansado/a o con demasiados casos?</li>
            <li>¿Qué error aparece cuando el cliente se enfada o presiona?</li>
            <li>¿Qué error se produciría menos si tuvieras un protocolo o plantilla adecuada?</li>
            <li>¿Qué error depende más de ti y cuál depende del sistema/empresa?</li>
          </ol>
        </div>

        <div className="callout callout--activity">
          <div className="callout-title">🎯 Compromiso realista</div>
          <p>
            Elige <strong>un solo error</strong> para mejorar esta semana. No busques cambiar todo: busca ganar un hábito
            concreto (por ejemplo: reformular antes de responder, o cerrar con un “siguiente paso” claro).
          </p>
        </div>
      </section>
    </TopicLayout>
  );
};

export default Tema01;
