import TopicLayout from "../../components/TopicLayout";

const TemaUXAtencionCliente = () => {
  return (
    <TopicLayout
      numero="XX"
      title="Experiencia de Usuario (UX) y Satisfacción del Cliente"
      intro="Este tema aborda la experiencia de usuario aplicada al ámbito de la atención al cliente desde una perspectiva estratégica, psicológica y operativa. Se analizan los principales marcos conceptuales de la satisfacción del cliente —las 3 C y las 5 E— y su aplicación práctica en los puntos de contacto, los procesos de servicio y la fidelización, integrando teoría universitaria, ejemplos reales y herramientas de mejora continua."
    >
<figure className="media">
          <img
            src="/t11.png"
            alt="Experiencia de Usuario (UX) y Satisfacción del Cliente"
          />
          <figcaption>
            Imagen: Representación visual de la experiencia de usuario en atención al cliente, mostrando interacciones digitales y humanas.
          </figcaption>
        </figure>
      {/* ============================= */}
      {/* SECCIÓN 1 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">
          1. Experiencia de usuario y atención al cliente
        </h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>1.1. Qué es la experiencia de usuario (UX) en el servicio al cliente</summary>
            <div className="topic-details__content">
              <p>
                La <strong>experiencia de usuario (UX)</strong> en atención al cliente hace referencia al
                <strong>conjunto de percepciones, emociones y valoraciones</strong> que una persona construye
                a lo largo de todas sus interacciones con una organización, antes, durante y después del servicio.
              </p>

              <p>
                A diferencia de una visión puramente operativa del servicio, la UX incorpora variables
                <strong>emocionales, cognitivas y contextuales</strong>, entendiendo que el cliente no evalúa
                únicamente la solución obtenida, sino <em>cómo se ha sentido durante el proceso</em>.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  En atención al cliente, la experiencia no se mide solo por la resolución del problema,
                  sino por la <strong>sensación de ser comprendido, acompañado y respetado</strong>.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>1.2. UX, servicio y percepción de marca</summary>
            <div className="topic-details__content">
              <p>
                Cada interacción con el servicio de atención al cliente actúa como un
                <strong>micro-impacto en la imagen de marca</strong>. Una mala experiencia tiene un efecto
                amplificado, mientras que una experiencia positiva genera confianza y recuerdo.
              </p>

              <ul>
                <li>La UX influye directamente en la satisfacción y la lealtad.</li>
                <li>Un servicio incoherente rompe la percepción de marca.</li>
                <li>El cliente evalúa a la empresa como un todo, no por departamentos.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2 – LAS 3 C */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">
          2. Las 3 C de la satisfacción del cliente
        </h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>2.1. Compromiso</summary>
            <div className="topic-details__content">
              <p>
                El <strong>compromiso</strong> implica la capacidad de la organización para ofrecer
                un servicio <strong>constante, fiable y de calidad</strong>, independientemente del canal
                o del momento.
              </p>

              <p>
                En atención al cliente, el compromiso se traduce en:
              </p>

              <ul className="checklist">
                <li>Cumplir lo prometido al cliente.</li>
                <li>Asumir responsabilidad ante errores.</li>
                <li>Mostrar implicación real en la resolución.</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Ejemplo</h4>
                <p>
                  Un agente que realiza seguimiento posterior demuestra compromiso, incluso cuando el
                  problema ya ha sido técnicamente resuelto.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Comunicación</summary>
            <div className="topic-details__content">
              <p>
                La <strong>comunicación</strong> es el eje vertebrador de la experiencia del cliente.
                No se limita a informar, sino a <strong>generar claridad, confianza y previsibilidad</strong>.
              </p>

              <ul>
                <li>Lenguaje claro y adaptado al cliente.</li>
                <li>Información honesta y completa.</li>
                <li>Escucha activa y validación emocional.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Riesgo habitual</h4>
                <p>
                  Una comunicación técnicamente correcta pero emocionalmente fría suele percibirse
                  como desinterés.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.3. Coherencia</summary>
            <div className="topic-details__content">
              <p>
                La <strong>coherencia</strong> garantiza que la experiencia del cliente sea
                <strong>uniforme en todos los puntos de contacto</strong>: presencial, telefónico,
                digital o automatizado.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Impacto en UX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mensajes contradictorios</td>
                    <td>Desconfianza y frustración</td>
                  </tr>
                  <tr>
                    <td>Procesos alineados</td>
                    <td>Seguridad y fluidez</td>
                  </tr>
                  <tr>
                    <td>Estilo comunicativo común</td>
                    <td>Identidad clara de marca</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
{/* SECCIÓN 3 – LAS 5 E */}
{/* ============================= */}
<section className="topic-section">
  <h2 className="topic-section__title">
    3. Las 5 E del recorrido del cliente (Customer Journey)
  </h2>

  <p className="muted">
    El modelo de las 5 E permite analizar la experiencia del cliente como un proceso
    dinámico, continuo y relacional, superando la visión fragmentada del servicio
    y proporcionando una herramienta estratégica para el diseño de experiencias
    coherentes, memorables y sostenibles.
  </p>

  <div className="topic-accordion">

    {/* ============================= */}
    {/* 3.1 ATRAER */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>3.1. Atraer: el inicio invisible de la experiencia</summary>
      <div className="topic-details__content">

        <p>
          La fase de <strong>Atraer</strong> representa el momento en el que el cliente
          entra en contacto con la organización <strong>sin interactuar todavía de forma directa</strong>.
          Es una etapa frecuentemente infravalorada, pero decisiva, ya que en ella se construyen
          las expectativas que condicionarán toda la experiencia posterior.
        </p>

        <p>
          Desde una perspectiva de experiencia de usuario, es fundamental comprender que
          <strong>la experiencia comienza antes de que el cliente sea consciente de ella</strong>.
          Opiniones, reputación online, comentarios de terceros, publicidad, presencia en redes
          sociales o incluso la estética de un local físico forman parte activa del recorrido.
        </p>

        <h4>Dimensión psicológica de la fase Atraer</h4>
        <p>
          En esta etapa operan mecanismos cognitivos clave como:
        </p>

        <ul>
          <li>
            <strong>Expectativa anticipatoria</strong>: el cliente construye una idea previa
            sobre cómo será tratado.
          </li>
          <li>
            <strong>Sesgo de confirmación</strong>: buscará señales que confirmen esa expectativa.
          </li>
          <li>
            <strong>Confianza inicial</strong>: basada en reputación, coherencia y credibilidad.
          </li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Clave UX</h4>
          <p>
            Una mala experiencia en fases posteriores suele percibirse como más grave
            cuando la expectativa inicial era alta. Atraer no consiste solo en captar,
            sino en <strong>prometer lo que realmente se puede cumplir</strong>.
          </p>
        </div>

        <h4>Atraer en atención al cliente</h4>
        <p>
          Aunque pueda parecer una fase propia del marketing, el área de atención al cliente
          influye directamente en esta etapa a través de:
        </p>

        <ul className="checklist">
          <li>Reseñas y valoraciones públicas.</li>
          <li>Respuestas visibles en redes o foros.</li>
          <li>Reputación del servicio posventa.</li>
          <li>Recomendaciones boca a boca.</li>
        </ul>

        <p>
          Un servicio de atención deficiente no solo afecta a quien lo sufre, sino
          a todos los clientes potenciales que observan esa experiencia.
        </p>

      </div>
    </details>

    {/* ============================= */}
    {/* 3.2 ENTRAR */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>3.2. Entrar: el primer contacto consciente</summary>
      <div className="topic-details__content">

        <p>
          La fase de <strong>Entrar</strong> marca el inicio formal de la interacción.
          Es el momento en el que el cliente decide <em>cruzar el umbral</em> y
          relacionarse activamente con la organización.
        </p>

        <p>
          En UX, este punto se conoce como <strong>momento de fricción inicial</strong>:
          cualquier dificultad, confusión o sensación de desorientación genera estrés
          y reduce la predisposición positiva del cliente.
        </p>

        <h4>Elementos críticos de la fase Entrar</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Impacto en la experiencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accesibilidad</td>
              <td>Reduce ansiedad y esfuerzo cognitivo</td>
            </tr>
            <tr>
              <td>Claridad de procesos</td>
              <td>Aumenta sensación de control</td>
            </tr>
            <tr>
              <td>Tiempo de espera</td>
              <td>Condiciona la percepción del valor</td>
            </tr>
          </tbody>
        </table>

        <p>
          En atención al cliente, esta fase incluye acciones como llamar por teléfono,
          iniciar un chat, acudir a un mostrador o enviar un correo electrónico.
        </p>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Error habitual</h4>
          <p>
            Obligar al cliente a repetir información ya proporcionada genera una
            sensación inmediata de ineficiencia y falta de consideración.
          </p>
        </div>

        <h4>Primera impresión y neuroexperiencia</h4>
        <p>
          Estudios de neurociencia aplicada a la UX demuestran que el cliente forma
          una impresión emocional estable en los primeros minutos, que luego
          racionaliza. Por ello, la fase Entrar es determinante para el tono
          de toda la interacción.
        </p>

      </div>
    </details>

    {/* ============================= */}
    {/* 3.3 INVOLUCRAR */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>3.3. Involucrar: el núcleo de la experiencia</summary>
      <div className="topic-details__content">

        <p>
          <strong>Involucrar</strong> es la fase central del recorrido del cliente.
          Aquí se produce la interacción profunda, el intercambio de información
          y la resolución —o no— de la necesidad del cliente.
        </p>

        <p>
          Desde el punto de vista de la experiencia de usuario, esta fase combina
          tres dimensiones inseparables:
        </p>

        <ul>
          <li><strong>Funcional</strong>: el problema se aborda técnicamente.</li>
          <li><strong>Emocional</strong>: el cliente se siente escuchado y respetado.</li>
          <li><strong>Relacional</strong>: se construye (o destruye) confianza.</li>
        </ul>

        <h4>El rol del agente en la fase Involucrar</h4>
        <p>
          El profesional de atención al cliente actúa como:
        </p>

        <ul className="checklist">
          <li>Intérprete de la necesidad real.</li>
          <li>Mediador emocional.</li>
          <li>Representante de la marca.</li>
          <li>Gestor de expectativas.</li>
        </ul>

        <div className="callout callout--example">
          <h4 className="callout-title">📌 Caso práctico</h4>
          <p>
            Dos clientes reciben la misma solución técnica. Solo uno se va satisfecho.
            La diferencia no está en la respuesta, sino en el <strong>cómo</strong>
            se produjo la interacción.
          </p>
        </div>

        <h4>UX conversacional y experiencia</h4>
        <p>
          En esta fase adquieren especial relevancia conceptos como:
        </p>

        <ul>
          <li>Escucha activa.</li>
          <li>Empatía verbal y no verbal.</li>
          <li>Adaptación del lenguaje.</li>
          <li>Gestión de silencios y tiempos.</li>
        </ul>

        <p>
          Involucrar no significa solo interactuar, sino lograr que el cliente
          se sienta parte del proceso de solución.
        </p>

      </div>
    </details>

    {/* ============================= */}
    {/* 3.4 SALIR */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>3.4. Salir: el cierre que define el recuerdo</summary>
      <div className="topic-details__content">

        <p>
          La fase de <strong>Salir</strong> marca el final del contacto directo,
          pero no el final de la experiencia. Desde la psicología del consumidor,
          se sabe que el recuerdo se construye principalmente a partir del
          <strong>momento final y del pico emocional</strong>.
        </p>

        <p>
          Un cierre cuidado puede compensar dificultades previas, mientras que
          un mal cierre puede arruinar una experiencia globalmente positiva.
        </p>

        <h4>Elementos clave del cierre</h4>
        <ul className="checklist">
          <li>Confirmación de la solución.</li>
          <li>Resumen claro de lo acordado.</li>
          <li>Disponibilidad futura.</li>
          <li>Despedida profesional y humana.</li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">🎯 Regla del recuerdo</h4>
          <p>
            El cliente no recuerda todo el proceso, recuerda cómo terminó
            y cómo se sintió al marcharse.
          </p>
        </div>

      </div>
    </details>

    {/* ============================= */}
    {/* 3.5 EXTENDER */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>3.5. Extender: más allá de la interacción</summary>
      <div className="topic-details__content">

        <p>
          <strong>Extender</strong> representa la capacidad de la organización
          para mantener el vínculo con el cliente una vez finalizado el servicio.
          Es la fase más estratégica y, paradójicamente, la más olvidada.
        </p>

        <p>
          Aquí se construyen la fidelización, la recomendación y el valor a largo plazo.
        </p>

        <h4>Acciones típicas de la fase Extender</h4>
        <ul>
          <li>Correos de seguimiento.</li>
          <li>Encuestas de satisfacción.</li>
          <li>Comunicación personalizada.</li>
          <li>Programas de fidelización.</li>
        </ul>

        <p>
          Desde la UX, extender no debe percibirse como presión comercial,
          sino como una <strong>continuación natural de la relación</strong>.
        </p>

        <div className="callout callout--case">
          <h4 className="callout-title">🔁 Enfoque estratégico</h4>
          <p>
            Una organización madura en experiencia de cliente entiende que
            cada interacción es el inicio potencial de la siguiente.
          </p>
        </div>

      </div>
    </details>

  </div>
</section>
{/* ============================= */}
{/* SECCIÓN – CRECIMIENTO BASADO EN LA PÉRDIDA DE CLIENTES (CUBO PERFORADO) */}
{/* ============================= */}
<section className="topic-section">
  <h2 className="topic-section__title">
    4. Estrategias de crecimiento, coste de captación y sostenibilidad del negocio
  </h2>

  <div className="topic-accordion">

    {/* ============================= */}
    {/* CASO CONCEPTUAL */}
    {/* ============================= */}
    <details className="topic-details">
      <summary>
        Caso conceptual: crecimiento basado en la atrición, coste de captación y sostenibilidad del negocio
        (Síndrome del Cubo Perforado)
      </summary>

      <div className="topic-details__content">

        <p>
          En la literatura de marketing y experiencia de cliente, las denominadas
          <strong> estrategias de crecimiento basadas en la atrición</strong>,
          conocidas como el <strong>“Síndrome del Cubo Perforado”</strong>,
          describen modelos de negocio que dependen de la
          <strong> captación constante de nuevos clientes</strong>
          para compensar la pérdida continua de clientes existentes.
        </p>

        <p>
          De forma didáctica, este modelo se ha explicado tradicionalmente mediante
          la metáfora del <em>“Monstruo de las Galletas”</em>: una organización que
          “consume clientes” de manera compulsiva, sin planificación a largo plazo
          y sin desarrollar relaciones duraderas. El resultado es un crecimiento
          aparente que oculta una <strong>fragilidad estructural</strong>.
        </p>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Advertencia estratégica</h4>
          <p>
            Un negocio puede aumentar su volumen de clientes y, aun así,
            estar destruyendo valor económico, reputacional y operativo.
          </p>
        </div>

        <h4>1. El coste real de captar un nuevo cliente</h4>
        <p>
          Captar un nuevo cliente implica un conjunto de costes directos e indirectos
          que con frecuencia se subestiman:
        </p>

        <ul className="checklist">
          <li>Inversión en marketing y publicidad.</li>
          <li>Coste de campañas promocionales y descuentos.</li>
          <li>Tiempo comercial y recursos humanos.</li>
          <li>Coste tecnológico de plataformas y adquisición de leads.</li>
          <li>Coste de onboarding y primeras incidencias.</li>
        </ul>

        <p>
          Diversos estudios en marketing relacional coinciden en que
          <strong> captar un nuevo cliente puede costar entre 5 y 7 veces más</strong>
          que retener a un cliente existente. A pesar de ello, muchas organizaciones
          continúan priorizando la captación frente a la fidelización.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">💰 Clave económica</h4>
          <p>
            Un cliente que se marcha no solo deja de generar ingresos,
            sino que obliga a la empresa a invertir de nuevo para sustituirlo.
          </p>
        </div>

        <h4>2. La atrición como síntoma de una mala experiencia</h4>
        <p>
          La atrición (churn) rara vez es un fenómeno aislado. En la mayoría de los casos,
          es la consecuencia acumulada de:
        </p>

        <ul>
          <li>Experiencias incoherentes.</li>
          <li>Procesos complejos o poco intuitivos.</li>
          <li>Atención al cliente reactiva y saturada.</li>
          <li>Comunicación fría o excesivamente automatizada.</li>
          <li>Expectativas mal gestionadas.</li>
        </ul>
        <p>Churn (o pérdida de clientes) hace referencia al porcentaje de clientes que abandonan una empresa en un periodo determinado. No se trata de un fenómeno puntual, sino de un indicador estructural de la calidad de la experiencia ofrecida. Un churn elevado suele ser la consecuencia acumulada de expectativas mal gestionadas, experiencias incoherentes, fricciones en los procesos y una atención al cliente percibida como reactiva o poco empática. Desde una perspectiva estratégica, el churn no solo implica pérdida de ingresos, sino un aumento directo de los costes de captación, ya que cada cliente perdido debe ser sustituido por uno nuevo. Por ello, la reducción del churn se considera uno de los pilares fundamentales de la sostenibilidad empresarial y un objetivo central de cualquier organización orientada a la experiencia del cliente. </p>

        <p>
          En este contexto, la atención al cliente deja de ser un elemento estratégico
          y se convierte en un <strong>servicio de contención</strong>, encargado de
          amortiguar errores estructurales del producto, del proceso o del modelo de negocio.
        </p>

        <h4>3. Relación con las 5 E del Customer Journey</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Comportamiento típico del modelo basado en atrición</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atraer</td>
              <td>Promesas atractivas que generan expectativas poco realistas</td>
            </tr>
            <tr>
              <td>Entrar</td>
              <td>Acceso rápido, pero con escaso acompañamiento</td>
            </tr>
            <tr>
              <td>Involucrar</td>
              <td>Interacciones frías, mecánicas o frustrantes</td>
            </tr>
            <tr>
              <td>Salir</td>
              <td>Cierre pobre, sin refuerzo emocional ni claridad</td>
            </tr>
            <tr>
              <td>Extender</td>
              <td>Ausencia de seguimiento, prevención o aprendizaje</td>
            </tr>
          </tbody>
        </table>

        <h4>4. Relación con las 3 C de la satisfacción del cliente</h4>
        <ul className="checklist">
          <li>
            <strong>Compromiso:</strong> centrado en atraer nuevos clientes,
            no en cuidar a los existentes.
          </li>
          <li>
            <strong>Comunicación:</strong> transaccional y defensiva,
            en lugar de empática y relacional.
          </li>
          <li>
            <strong>Coherencia:</strong> mensajes, procesos y canales desalineados.
          </li>
        </ul>

        <h4>5. Por qué una empresa que quiere perdurar debe retener</h4>
        <p>
          Las organizaciones que aspiran a la sostenibilidad a largo plazo entienden
          que la <strong>retención de clientes</strong> no es solo una cuestión de
          satisfacción, sino de supervivencia económica.
        </p>

        <p>Un cliente retenido:</p>
        <ul>
          <li>Reduce el coste medio por cliente.</li>
          <li>Compra con mayor frecuencia y confianza.</li>
          <li>Es más tolerante ante errores puntuales.</li>
          <li>Recomienda la marca y genera nuevos clientes.</li>
          <li>Disminuye la presión sobre la atención al cliente.</li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">🎯 Aprendizaje clave</h4>
          <p>
            El crecimiento sostenible no se logra llenando el cubo más rápido,
            sino <strong>reduciendo los agujeros mediante una experiencia de cliente sólida,
            coherente y humana</strong>.
          </p>
        </div>

      </div>
      <table className="table">
  <thead>
    <tr>
      <th>Dimensión</th>
      <th>CAC – Captación de nuevos clientes</th>
      <th>Retención de clientes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Coste económico</td>
      <td>Alto y creciente (publicidad, promociones, descuentos, ventas)</td>
      <td>Bajo y decreciente (mejora de experiencia y relación)</td>
    </tr>
    <tr>
      <td>Horizonte temporal</td>
      <td>Corto plazo</td>
      <td>Medio y largo plazo</td>
    </tr>
    <tr>
      <td>Estabilidad de ingresos</td>
      <td>Volátil e impredecible</td>
      <td>Estable y recurrente</td>
    </tr>
    <tr>
      <td>Impacto del churn</td>
      <td>Obliga a captar constantemente para sustituir bajas</td>
      <td>Reduce la necesidad de captación continua</td>
    </tr>
    <tr>
      <td>Relación con la experiencia de cliente</td>
      <td>Secundaria o instrumental</td>
      <td>Central y estratégica</td>
    </tr>
    <tr>
      <td>Presión sobre atención al cliente</td>
      <td>Alta (clientes poco vinculados y exigentes)</td>
      <td>Menor (clientes familiarizados y más tolerantes)</td>
    </tr>
    <tr>
      <td>Valor del cliente (LTV)</td>
      <td>Bajo o incierto</td>
      <td>Alto y acumulativo</td>
    </tr>
    <tr>
      <td>Capacidad de recomendación</td>
      <td>Limitada o inexistente</td>
      <td>Alta (boca a boca y prescripción)</td>
    </tr>
    <tr>
      <td>Sostenibilidad del modelo</td>
      <td>Frágil y dependiente de inversión constante</td>
      <td>Sólida y escalable</td>
    </tr>
  </tbody>
</table>
<div className="callout callout--tip">
  <h4 className="callout-title">🎯 Conclusión económica</h4>
  <p>
    Mientras el CAC llena el cubo por arriba, la retención tapa los agujeros.
    Las empresas que perduran no son las que más clientes captan,
    sino las que menos clientes pierden.
  </p>
</div>

    </details>

  </div>
</section>

{/* ============================= */}
{/* SECCIÓN X – CASOS REALES DE EXPERIENCIA DE CLIENTE */}
{/* ============================= */}
<section className="topic-section">
  <h2 className="topic-section__title">
    5. Casos reales de experiencia de cliente: diferenciación, posicionamiento y fracaso
  </h2>

  <p className="muted">
    En esta sección se analizan casos reales de organizaciones que han logrado
    posicionarse en el mercado gracias a una experiencia de cliente cuidadosamente
    diseñada, así como ejemplos donde una mala experiencia de usuario ha tenido
    consecuencias negativas. El objetivo es comprender la experiencia como
    <strong> ventaja competitiva estratégica</strong>, más allá del precio.
  </p>

  <div className="topic-accordion">

    <details className="topic-details">
      <summary>Casos internacionales de excelencia en experiencia de cliente</summary>
      <div className="topic-details__content">

        <h4>🏨 Ritz-Carlton — Hotelería</h4>
        <p>
          Ritz-Carlton es uno de los casos más estudiados a nivel universitario
          en gestión de servicios y experiencia de cliente. Su posicionamiento
          no se basa en el precio, sino en la creación de
          <strong> experiencias memorables, personalizadas y emocionalmente significativas</strong>.
        </p>

        <p>
          La cadena empodera a sus empleados para resolver incidencias sin necesidad
          de autorización jerárquica, reforzando el compromiso y la coherencia
          en todos los puntos de contacto.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🎯 Clave estratégica</h4>
          <p>
            El cliente no paga solo por alojamiento, paga por sentirse único,
            cuidado y reconocido.
          </p>
        </div>

        <h4>✈️ Singapore Airlines — Transporte aéreo</h4>
        <p>
          En un sector dominado por la presión sobre costes, Singapore Airlines
          ha logrado diferenciarse gracias a una experiencia de cliente basada en
          <strong> calidad, coherencia y seguridad emocional</strong>.
        </p>

        <p>
          El cliente percibe control, respeto y profesionalidad incluso en
          situaciones críticas como retrasos o incidencias operativas.
        </p>

        <ul className="checklist">
          <li>Formación intensiva del personal.</li>
          <li>Comunicación clara y empática.</li>
          <li>Experiencia homogénea en todas las rutas.</li>
        </ul>

        <h4>☕ Starbucks — Restauración</h4>
        <p>
          Starbucks es un ejemplo paradigmático de empresa que no compite en precio,
          sino en <strong>experiencia emocional y simbólica</strong>. Vende café,
          pero sobre todo vende un espacio y una sensación de pertenencia.
        </p>

        <p>
          El concepto del <em>“tercer lugar”</em> (ni casa ni trabajo) convierte
          el consumo en una experiencia prolongada, cómoda y personal.
        </p>

        <ul>
          <li>Uso del nombre del cliente.</li>
          <li>Personalización del producto.</li>
          <li>Ambiente diseñado para permanecer.</li>
        </ul>

        <div className="callout callout--example">
          <h4 className="callout-title">📌 Clave UX</h4>
          <p>
            El cliente acepta pagar más porque la experiencia le hace sentir
            reconocido y cómodo, no presionado.
          </p>
        </div>
           <div className="divider" />

        <div className="video-block">
       <div className="video-title">El caso de Starbucks</div>

          <p className="video-meta muted">El éxito de pagar un café a seis euros</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/Q22PdBDM-CI"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </details>

    <details className="topic-details">
      <summary>Casos españoles: experiencia como pilar del modelo de negocio</summary>
      <div className="topic-details__content">

        <h4>🛒 Mercadona</h4>
        <p>
          Mercadona ha construido su modelo en torno a la experiencia del “Jefe”
          (el cliente), priorizando procesos simples, coherentes y basados en
          la escucha activa.
        </p>

        <p>
          Su fortaleza no reside únicamente en el precio, sino en ofrecer una
          experiencia <strong>predecible, clara y sin fricciones</strong>.
        </p>

        <h4>🏬 El Corte Inglés</h4>
        <p>
          El Corte Inglés ha sido históricamente un referente en experiencia de cliente
          basada en la <strong>confianza, la garantía y el servicio posventa</strong>.
        </p>

        <p>
          Durante décadas, su política de devoluciones y su atención personalizada
          generaron una fuerte lealtad, incluso con precios superiores a la media.
        </p>

      </div>
    </details>

    <details className="topic-details">
      <summary>Cuando la experiencia de usuario falla: ejemplos y consecuencias</summary>
      <div className="topic-details__content">

        <p>
          La mala experiencia de usuario no solo genera insatisfacción,
          sino que provoca desgaste emocional, abandono y deterioro de marca.
        </p>

        <h4>📞 Telecomunicaciones (caso sectorial)</h4>
        <p>
          Procesos complejos, atención excesivamente automatizada, repetición de datos
          y dificultades para resolver incidencias generan frustración y desconfianza.
        </p>

        <h4>✈️ Aerolíneas low-cost (cuando la UX se “paga” en fricción)</h4>
        <p>
          Precios bajos pueden coexistir con una experiencia percibida como hostil:
          cargos inesperados, comunicación confusa y soporte limitado en incidencias.
        </p>

        <h4>🛍️ E-commerce con mala UX</h4>
        <ul className="checklist">
          <li>Devoluciones opacas.</li>
          <li>Soporte inexistente.</li>
          <li>Interfaces confusas.</li>
        </ul>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Aprendizaje clave</h4>
          <p>
            El precio bajo puede atraer, pero una mala experiencia expulsa
            y destruye la fidelización.
          </p>
        </div>

      </div>
    </details>

    <details className="topic-details">
      <summary>Conclusión estratégica para la atención al cliente</summary>
      <div className="topic-details__content">
        <p>
          Los casos analizados demuestran que la experiencia de cliente es un
          <strong> activo estratégico</strong>. Las organizaciones que la diseñan
          de forma consciente generan valor sostenible y lealtad a largo plazo.
        </p>

        <div className="callout callout--case">
          <h4 className="callout-title">🎓 Pregunta para debate</h4>
          <p>
            ¿Qué ocurriría si tu organización dejara de competir en precio
            y empezara a competir en experiencia?
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
          <div className="video-title">Vídeo 1 — Experiencia del cliente</div>
          <p className="video-meta muted">Experiencia de cliente</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/9_kw6_hrWnA"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

       
      </section>

      {/* ============================= */}
      {/* SECCIÓN 4 – DEBATE */}
      {/* ============================= */}
      <section className="topic-section debate">
        <h2 className="topic-section__title">4. Debate y reflexión</h2>

        <div className="debate-prompt">
          <p>
            Analiza una experiencia reciente como cliente (positiva o negativa) e identifícala
            según las 3 C y las 5 E.
          </p>
        </div>

        <ol className="debate-questions">
          <li>¿En qué fase del recorrido se produjo el mayor impacto?</li>
          <li>¿Qué C estuvo mejor o peor gestionada?</li>
          <li>¿Cómo podría haberse mejorado la experiencia?</li>
        </ol>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 5 – TEST */}
      {/* ============================= */}
      <section className="topic-section quiz">
        <h2 className="topic-section__title">5. Test de repaso</h2>

        <div className="quiz-question">
          <p className="quiz-question__title">
            ¿Qué elemento es clave para garantizar coherencia en la experiencia del cliente?
          </p>
          <div className="quiz-options">
            <label className="quiz-option">
              <input type="radio" name="q1" /> Automatización total del servicio
            </label>
            <label className="quiz-option">
              <input type="radio" name="q1" /> Alineación de mensajes y procesos
            </label>
            <label className="quiz-option">
              <input type="radio" name="q1" /> Rapidez sin seguimiento
            </label>
          </div>
        </div>
      </section>

    </TopicLayout>
  );
};

export default TemaUXAtencionCliente;
