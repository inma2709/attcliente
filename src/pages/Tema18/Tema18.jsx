/**
 * Tema18.jsx — El Viaje del Cliente (Customer Journey)
 * NIVEL: Universitario / Ciclos Superiores de Administración y Gestión
 *
 * Lección premium basada en metodología Customer Journey Mapping:
 * análisis de fases, puntos de contacto, momentos de la verdad,
 * emociones, pain points y estrategias de mejora de la experiencia.
 */

import TopicLayout from "../../components/TopicLayout";

const Tema18 = () => {
  return (
    <TopicLayout
      numero="18"
      title="El Viaje del Cliente (Customer Journey)"
      intro="El viaje del cliente es el mapa completo de todas las interacciones que una persona tiene con una organización, desde que descubre su existencia hasta que se convierte en cliente leal o abandona. Comprender, visualizar y optimizar ese recorrido es una de las competencias más valiosas en atención al cliente moderna. En este tema aprenderás a construir un Customer Journey Map, identificar los momentos que importan de verdad y transformar experiencias ordinarias en extraordinarias."
    >
      {/* ========================
          IMAGEN PRINCIPAL
      ========================= */}
      <figure className="media">
        <img
          src="/viaje.png"
          alt="El Viaje del Cliente - Customer Journey Map"
        />
        <figcaption>
          El viaje del cliente representa todas las interacciones entre una persona y la organización,
          revelando emociones, expectativas y oportunidades de mejora en cada etapa.
        </figcaption>
      </figure>

      {/* ========================
          SECCIÓN 1 — INTRODUCCIÓN
      ========================= */}
      <section className="topic-section" id="introduccion">
        <div className="topic-section__title">
          <h2>1. ¿Qué es el Viaje del Cliente?</h2>
          <span className="topic-section__meta">Fundamentos · Concepto · Origen</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>1.1. Definición y evolución del concepto</summary>
            <div className="topic-details__content">
              <p>
                El <strong>viaje del cliente</strong> (en inglés, <em>Customer Journey</em>) es la
                secuencia completa de experiencias que atraviesa una persona cuando interactúa con una
                empresa o marca, desde el primer momento en que la descubre hasta mucho después de
                haber completado una compra o contratación.
              </p>
              <p>
                A diferencia de una visión transaccional —centrada únicamente en la venta—, el
                Customer Journey adopta la <strong>perspectiva del cliente como protagonista</strong>,
                trazando su recorrido en el tiempo e identificando sus emociones, pensamientos,
                barreras y motivaciones en cada punto de contacto.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">📖 Origen del concepto</h4>
                <p>
                  La metodología Customer Journey Mapping fue popularizada en los años 90 por empresas
                  de consultoría estratégica como McKinsey, y hoy es un estándar en el diseño de
                  experiencias de cliente (CX), el marketing de contenidos y el diseño de servicios (<em>Service Design</em>).
                  Forma parte del <strong>pensamiento de diseño</strong> (Design Thinking) y es herramienta
                  central en las metodologías de mejora de la experiencia del cliente (CX Management).
                </p>
              </div>

              <p>
                Su importancia reside en que <strong>rompe los silos organizacionales</strong>: mientras
                los departamentos trabajan en compartimentos estancos (ventas, soporte, logística…),
                el cliente vive una experiencia <em>continua y transversal</em> que no entiende de
                fronteras internas.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>1.2. Diferencia entre proceso interno y experiencia del cliente</summary>
            <div className="topic-details__content">
              <p>
                Una de las confusiones más frecuentes en las organizaciones es equiparar el
                <strong>proceso interno</strong> de entrega de servicio con la <strong>experiencia real</strong>
                del cliente. Son dos perspectivas radicalmente distintas:
              </p>

              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Perspectiva interna (empresa)</th>
                      <th>Perspectiva del cliente (viaje)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Flujo de trabajo por departamentos</td>
                      <td>Secuencia de emociones e impresiones</td>
                    </tr>
                    <tr>
                      <td>KPIs operativos (tiempo, coste, error)</td>
                      <td>Sensación de facilidad, confianza, valor</td>
                    </tr>
                    <tr>
                      <td>Inicio: apertura del expediente</td>
                      <td>Inicio: primera búsqueda en Google</td>
                    </tr>
                    <tr>
                      <td>Fin: cierre del ticket</td>
                      <td>Fin: recomendación (o queja) posterior</td>
                    </tr>
                    <tr>
                      <td>Medido por indicadores internos</td>
                      <td>Medido por NPS, CSAT, CES</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Punto crítico</h4>
                <p>
                  Muchas organizaciones excelentes operativamente generan clientes insatisfechos
                  porque <strong>optimizan sus procesos sin comprender cómo los vive el cliente</strong>.
                  El viaje del cliente es la brújula que corrige esa desconexión.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>1.3. Por qué es estratégico en atención al cliente</summary>
            <div className="topic-details__content">
              <p>
                Conocer el viaje del cliente permite a los profesionales de atención:
              </p>
              <ul>
                <li>
                  <strong>Anticipar necesidades</strong> antes de que el cliente las exprese.
                </li>
                <li>
                  <strong>Detectar fricciones y puntos de abandono</strong> que generan insatisfacción
                  y coste operativo.
                </li>
                <li>
                  <strong>Diseñar interacciones memorables</strong> en los momentos que más importan.
                </li>
                <li>
                  <strong>Alinear todos los canales</strong> (presencial, telefónico, digital) bajo
                  una experiencia coherente.
                </li>
                <li>
                  <strong>Justificar inversiones en mejora del servicio</strong> con datos y argumentos
                  centrados en el cliente.
                </li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ========================
          SECCIÓN 2 — FASES DEL VIAJE
      ========================= */}
      <section className="topic-section" id="fases">
        <div className="topic-section__title">
          <h2>2. Las fases del viaje del cliente</h2>
          <span className="topic-section__meta">Modelo de 5 fases · Comportamiento · Necesidades por etapa</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>2.1. El modelo estándar de 5 fases</summary>
            <div className="topic-details__content">
              <p>
                Aunque existen distintas versiones del modelo, la estructura más extendida y
                práctica divide el viaje del cliente en <strong>cinco fases secuenciales</strong>:
              </p>

              <div className="phases-container">
                <div className="phase-card phase--awareness">
                  <div className="phase-icon">🔍</div>
                  <h4>1. Concienciación (Awareness)</h4>
                  <p>
                    El cliente descubre que tiene una necesidad o problema, y empieza a buscar
                    información. Puede llegar a través de publicidad, recomendación, búsqueda orgánica
                    o experiencia previa.
                  </p>
                  <p><strong>Pregunta del cliente:</strong> <em>"¿Qué opciones existen para resolver mi problema?"</em></p>
                </div>

                <div className="phase-card phase--consideration">
                  <div className="phase-icon">⚖️</div>
                  <h4>2. Consideración (Consideration)</h4>
                  <p>
                    El cliente compara alternativas: empresas, precios, opiniones, garantías.
                    Evalúa con criterios racionales y emocionales. La confianza empieza a
                    construirse o destruirse en esta etapa.
                  </p>
                  <p><strong>Pregunta del cliente:</strong> <em>"¿Esta empresa es mejor que las demás? ¿Puedo fiarme?"</em></p>
                </div>

                <div className="phase-card phase--decision">
                  <div className="phase-icon">✅</div>
                  <h4>3. Decisión (Decision / Purchase)</h4>
                  <p>
                    El cliente toma la decisión de comprar o contratar. Aquí influyen la facilidad
                    del proceso, la claridad de la información y la seguridad percibida. Una
                    fricción en este momento puede provocar el abandono.
                  </p>
                  <p><strong>Pregunta del cliente:</strong> <em>"¿Es fácil y seguro hacer esto ahora?"</em></p>
                </div>

                <div className="phase-card phase--retention">
                  <div className="phase-icon">🤝</div>
                  <h4>4. Experiencia post-compra (Retention)</h4>
                  <p>
                    El cliente usa el producto o servicio y evalúa si cumplió sus expectativas.
                    Es la fase donde se forja la satisfacción real y donde la atención al
                    cliente tiene mayor protagonismo.
                  </p>
                  <p><strong>Pregunta del cliente:</strong> <em>"¿Ha valido la pena? ¿Me ayudan si tengo un problema?"</em></p>
                </div>

                <div className="phase-card phase--loyalty">
                  <div className="phase-icon">❤️</div>
                  <h4>5. Lealtad y prescripción (Advocacy)</h4>
                  <p>
                    El cliente satisfecho repite y recomienda. El insatisfecho abandona y, con
                    frecuencia, comparte su experiencia negativa. Esta fase alimenta la primera:
                    los prescriptores traen nuevos clientes.
                  </p>
                  <p><strong>Pregunta del cliente:</strong> <em>"¿Repetiría? ¿Lo recomendaría a alguien que quiero?"</em></p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. El viaje antes del viaje: el rol de las expectativas</summary>
            <div className="topic-details__content">
              <p>
                Existe una fase <strong>previa y silenciosa</strong> que muchos modelos ignoran:
                las <strong>expectativas previas</strong> del cliente. Estas se forman a partir de:
              </p>
              <ul>
                <li>Experiencias anteriores con la misma empresa o sector.</li>
                <li>Recomendaciones de personas de confianza (<em>word of mouth</em>).</li>
                <li>Publicidad, web y redes sociales de la empresa.</li>
                <li>Opiniones en plataformas como Google Reviews, Trustpilot o Tripadvisor.</li>
                <li>Reputación general de la marca.</li>
              </ul>

              <div className="callout callout--info">
                <h4 className="callout-title">💡 Concepto clave: la brecha de expectativa</h4>
                <p>
                  La satisfacción o insatisfacción es siempre la diferencia entre lo
                  <strong>esperado</strong> y lo <strong>percibido</strong>. Cuanto mayor sea la
                  brecha (positiva o negativa), más intensa será la emoción resultante.
                  Prometer demasiado genera insatisfacción aunque el servicio sea bueno.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.3. El viaje omnicanal: múltiples caminos, una sola experiencia</summary>
            <div className="topic-details__content">
              <p>
                En la actualidad, el cliente no sigue un camino lineal. Puede iniciar su viaje
                en el móvil, continuar en tienda física, gestionar una incidencia por chat y
                recibir la factura por correo electrónico. Este fenómeno se conoce como
                <strong>comportamiento omnicanal</strong>.
              </p>
              <p>
                El reto para las organizaciones es garantizar que <strong>todos los canales
                hablen el mismo idioma</strong>: misma información, misma calidad, misma actitud.
                Cuando un canal falla, contamina la percepción de todos los demás.
              </p>

              <div className="analogy-box">
                <h4>🎵 Analogía del director de orquesta</h4>
                <p>
                  Los distintos canales de atención son como los instrumentos de una orquesta.
                  Cada uno puede sonar bien por separado, pero si no están coordinados,
                  el resultado es cacofonía. El viaje del cliente es la partitura;
                  la empresa, el director que garantiza la armonía.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ========================
          SECCIÓN 3 — PUNTOS DE CONTACTO
      ========================= */}
      <section className="topic-section" id="touchpoints">
        <div className="topic-section__title">
          <h2>3. Puntos de contacto (Touchpoints)</h2>
          <span className="topic-section__meta">Identificación · Clasificación · Gestión estratégica</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>3.1. Qué es un touchpoint y cuántos existen</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>punto de contacto</strong> (<em>touchpoint</em>) es cualquier interacción
                entre el cliente y la organización: directa o indirecta, digital o presencial,
                planificada o espontánea.
              </p>
              <p>
                Una empresa mediana puede tener entre <strong>15 y 50 touchpoints</strong> distintos.
                Algunos ejemplos frecuentes:
              </p>

              <div className="touchpoints-grid">
                <div className="touchpoint-category">
                  <h5>🌐 Digital</h5>
                  <ul>
                    <li>Página web / landing pages</li>
                    <li>Redes sociales</li>
                    <li>App móvil</li>
                    <li>Correo electrónico / newsletter</li>
                    <li>Chatbot / chat en vivo</li>
                    <li>Publicidad digital (Google Ads, banners)</li>
                    <li>Reseñas online</li>
                  </ul>
                </div>
                <div className="touchpoint-category">
                  <h5>🏢 Presencial</h5>
                  <ul>
                    <li>Establecimiento / punto de venta</li>
                    <li>Personal de atención (mostrador, caja)</li>
                    <li>Señalización / cartelería</li>
                    <li>Packaging y presentación del producto</li>
                    <li>Reparto a domicilio</li>
                    <li>Ferias y eventos</li>
                  </ul>
                </div>
                <div className="touchpoint-category">
                  <h5>📞 Comunicación directa</h5>
                  <ul>
                    <li>Llamada telefónica</li>
                    <li>WhatsApp / mensajería</li>
                    <li>Videollamada</li>
                    <li>Carta / comunicación postal</li>
                    <li>Visita comercial o técnica</li>
                  </ul>
                </div>
                <div className="touchpoint-category">
                  <h5>📄 Documentación</h5>
                  <ul>
                    <li>Factura y recibo</li>
                    <li>Contrato / condiciones</li>
                    <li>Manual de instrucciones</li>
                    <li>Encuesta de satisfacción</li>
                    <li>Comunicados y avisos</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.2. Touchpoints de alto impacto vs. low impact</summary>
            <div className="topic-details__content">
              <p>
                No todos los puntos de contacto tienen el mismo peso en la satisfacción final.
                Existe una <strong>jerarquía de impacto</strong> que conviene conocer:
              </p>
              <ul>
                <li>
                  <strong>Touchpoints de alto impacto:</strong> aquellos donde el cliente
                  toma decisiones críticas o experimenta emociones intensas. La primera llamada
                  de atención, la resolución de una queja, la entrega del producto.
                </li>
                <li>
                  <strong>Touchpoints de bajo impacto:</strong> interacciones rutinarias que el
                  cliente apenas recuerda si todo va bien, pero que pueden volverse crítics ante
                  un fallo (recordatorio automático, confirmación de pedido…).
                </li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Regla del 20/80</h4>
                <p>
                  Aproximadamente el <strong>20% de los touchpoints generan el 80% de la
                  percepción total</strong> del cliente sobre la marca. Identificar ese 20%
                  es la tarea más rentable de cualquier estrategia CX.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.3. Touchpoints negativos: las fugas de valor</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>touchpoint negativo</strong> no es simplemente uno que funciona mal:
                es aquel que genera una emoción negativa desproporcionada al problema real.
                Los más comunes en organizaciones del sector servicios son:
              </p>
              <ul>
                <li>Tiempo de espera no comunicado ni justificado.</li>
                <li>Tener que repetir la misma información a distintos agentes.</li>
                <li>Recibir respuestas contradictorias según el canal.</li>
                <li>Procesos de reclamación complejos, lentos o poco transparentes.</li>
                <li>Comunicación en lenguaje burocrático o poco empático.</li>
                <li>Falta de seguimiento tras un problema.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ El efecto amplificador de los touchpoints negativos</h4>
                <p>
                  Un estudio de McKinsey (2016) demostró que los clientes que han experimentado
                  al menos <strong>un touchpoint negativo relevante</strong> tienen entre 3 y 5 veces
                  más probabilidad de abandonar la empresa que aquellos con experiencia continua
                  mediocre. <em>Un mal momento puede borrar muchos buenos momentos.</em>
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 4 — MOMENTOS DE LA VERDAD
      =============================== */}
      <section className="topic-section" id="momentos-verdad">
        <div className="topic-section__title">
          <h2>4. Los momentos de la verdad</h2>
          <span className="topic-section__meta">Jan Carlzon · MOT · Momentos críticos</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>4.1. El concepto de Jan Carlzon y su vigencia</summary>
            <div className="topic-details__content">
              <p>
                El concepto de <strong>momento de la verdad</strong> fue acuñado por
                <strong>Jan Carlzon</strong>, CEO de Scandinavian Airlines (SAS) en los años 80,
                en su libro <em>Momentos de Verdad</em> (1987). Carlzon definió el momento de
                la verdad como <em>"cualquier instante en el que el cliente entra en contacto con
                cualquier aspecto de la empresa y se forma una impresión sobre la calidad de su servicio"</em>.
              </p>
              <p>
                Su revolución fue comprender que <strong>SAS era una empresa de 50 000 momentos
                de la verdad al día</strong> —uno por cada interacción entre empleado y pasajero—,
                y que cada uno de ellos era una oportunidad de ganar o perder al cliente.
              </p>

              <div className="quote-box">
                <blockquote>
                  "No puedes gestionar resultados. Solo puedes gestionar los
                  <strong>procesos que crean resultados</strong>. Y el proceso más importante
                  es el momento en que tu personal toca al cliente."
                </blockquote>
                <cite>— Jan Carlzon, <em>Momentos de Verdad</em> (1987)</cite>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.2. Tipos de momentos de la verdad</summary>
            <div className="topic-details__content">
              <p>
                La literatura de CX ha evolucionado el concepto original de Carlzon,
                identificando distintas categorías:
              </p>

              <div className="mot-cards">
                <div className="mot-card mot--zero">
                  <h4>Momento de la Verdad 0 (ZMOT)</h4>
                  <p className="mot-author">Google (2011)</p>
                  <p>
                    El <strong>Zero Moment of Truth</strong> ocurre <em>antes</em> del primer
                    contacto con la empresa: es la búsqueda online, las reseñas, las comparativas.
                    El cliente ya ha tomado el 70% de su decisión antes de hablar con nadie.
                  </p>
                  <p><strong>Ejemplo:</strong> buscar en Google "mejor clínica dental en Madrid".</p>
                </div>

                <div className="mot-card mot--first">
                  <h4>Primer Momento de la Verdad (FMOT)</h4>
                  <p className="mot-author">Procter & Gamble (2005)</p>
                  <p>
                    El primer contacto directo con el producto o servicio. En 3-7 segundos,
                    el cliente decide si continúa o abandona. Incluye la primera impresión del
                    local, la web, el packaging o el saludo del agente.
                  </p>
                  <p><strong>Ejemplo:</strong> entrar en una tienda y recibir (o no) un saludo.</p>
                </div>

                <div className="mot-card mot--second">
                  <h4>Segundo Momento de la Verdad (SMOT)</h4>
                  <p className="mot-author">Procter & Gamble</p>
                  <p>
                    La <strong>experiencia real de uso</strong> del producto o servicio.
                    Aquí se confirma o desmiente la promesa hecha en la venta. Es la base
                    de la satisfacción duradera y la fidelización.
                  </p>
                  <p><strong>Ejemplo:</strong> usar el producto comprado y comprobar si funciona como prometían.</p>
                </div>

                <div className="mot-card mot--ultimate">
                  <h4>Último Momento de la Verdad (UMOT)</h4>
                  <p className="mot-author">Brian Solis (2012)</p>
                  <p>
                    Lo que el cliente <strong>comparte públicamente</strong> tras la experiencia:
                    una reseña, un post, una foto, una queja o una recomendación.
                    Este momento se convierte en el ZMOT de otro cliente.
                  </p>
                  <p><strong>Ejemplo:</strong> escribir una reseña en Google Maps o contar la experiencia en redes.</p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.3. Cómo gestionar los momentos de la verdad</summary>
            <div className="topic-details__content">
              <p>
                Para gestionar eficazmente estos momentos, el profesional de atención al cliente
                debe aplicar el siguiente protocolo:
              </p>
              <ol>
                <li>
                  <strong>Identificar</strong> todos los momentos de la verdad en el viaje del
                  cliente de su organización.
                </li>
                <li>
                  <strong>Priorizar</strong> aquellos de mayor impacto en la satisfacción y la
                  fidelización.
                </li>
                <li>
                  <strong>Diseñar</strong> el comportamiento esperado (guión, tono, protocolo)
                  para cada momento crítico.
                </li>
                <li>
                  <strong>Formar y empoderar</strong> al personal para que tome decisiones
                  rápidas y acertadas en el momento.
                </li>
                <li>
                  <strong>Medir y retroalimentar</strong> continuamente mediante encuestas,
                  revisiones y análisis de reclamaciones.
                </li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 5 — EMOCIONES EN EL VIAJE
      =============================== */}
      <section className="topic-section" id="emociones">
        <div className="topic-section__title">
          <h2>5. Las emociones en el viaje del cliente</h2>
          <span className="topic-section__meta">Psicología · Pain Points · Peak-End Rule</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>5.1. Por qué las emociones son más importantes que los hechos</summary>
            <div className="topic-details__content">
              <p>
                La neurociencia del comportamiento del consumidor ha demostrado que
                <strong>las decisiones de compra y la lealtad son fundamentalmente emocionales</strong>,
                aunque el cliente las racionalice después. El modelo SOR
                (Estímulo → Organismo → Respuesta) aplicado al servicio explica que:
              </p>
              <ul>
                <li>
                  El <strong>estímulo</strong> es el touchpoint (llamada, producto, empleado).
                </li>
                <li>
                  El <strong>organismo</strong> procesa ese estímulo con filtros emocionales y
                  cognitivos (experiencias previas, estado de ánimo, expectativas).
                </li>
                <li>
                  La <strong>respuesta</strong> es la satisfacción, la queja, la recomendación
                  o el abandono.
                </li>
              </ul>

              <div className="callout callout--info">
                <h4 className="callout-title">🧠 Dato de neurociencia</h4>
                <p>
                  El neurocientífico <strong>Antonio Damasio</strong> demostró en sus
                  investigaciones que las personas con lesiones en la región emocional del
                  cerebro son incapaces de tomar decisiones, aunque conserven intacto el
                  razonamiento lógico. <em>Sin emoción no hay decisión.</em>
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>5.2. Pain points: los dolores del cliente</summary>
            <div className="topic-details__content">
              <p>
                Los <strong>pain points</strong> (puntos de dolor) son los momentos del viaje
                donde el cliente experimenta frustración, confusión, pérdida de tiempo o
                sensación de ser tratado injustamente.
              </p>

              <p>Los pain points más frecuentes se agrupan en cuatro categorías:</p>

              <div className="pain-points-grid">
                <div className="pain-card">
                  <h5>😤 Pain points de proceso</h5>
                  <p>Procesos lentos, complicados o que requieren demasiados pasos.</p>
                  <p><em>Ejemplo: formulario de devolución con 12 campos obligatorios.</em></p>
                </div>
                <div className="pain-card">
                  <h5>💰 Pain points económicos</h5>
                  <p>Precios ocultos, cargos inesperados, penalizaciones desproporcionadas.</p>
                  <p><em>Ejemplo: gastos de envío que solo aparecen en el último paso del checkout.</em></p>
                </div>
                <div className="pain-card">
                  <h5>🤝 Pain points relacionales</h5>
                  <p>Falta de empatía, respuestas frías, sensación de no ser escuchado.</p>
                  <p><em>Ejemplo: agente que lee un guión sin escuchar el problema real.</em></p>
                </div>
                <div className="pain-card">
                  <h5>📢 Pain points informativos</h5>
                  <p>Información confusa, incompleta, contradictoria o inaccesible.</p>
                  <p><em>Ejemplo: web con información de precios desactualizada.</em></p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>5.3. La Regla del Pico y el Final (Peak-End Rule)</summary>
            <div className="topic-details__content">
              <p>
                El psicólogo <strong>Daniel Kahneman</strong> (Premio Nobel de Economía 2002)
                demostró que los seres humanos no evaluamos las experiencias en su totalidad,
                sino que recordamos principalmente <strong>dos momentos</strong>:
              </p>

              <div className="peak-end-visual">
                <div className="peak-end-box peak">
                  <h4>🏔️ El Pico</h4>
                  <p>
                    El momento de mayor intensidad emocional, ya sea positivo
                    (<em>cuando me resolvieron el problema en 2 minutos</em>) o negativo
                    (<em>cuando me dejaron 40 minutos en espera</em>).
                  </p>
                </div>
                <div className="peak-end-box end">
                  <h4>🏁 El Final</h4>
                  <p>
                    Cómo terminó la experiencia. Un final positivo puede rescatar una
                    experiencia mediocre; un final brusco puede arruinar una experiencia
                    hasta entonces excelente.
                  </p>
                </div>
              </div>

              <div className="callout callout--tip">
                <h4 className="callout-title">✨ Aplicación práctica</h4>
                <p>
                  En atención al cliente, la Peak-End Rule implica dos estrategias clave:
                  <strong>(1) crear al menos un momento wow</strong> memorable en positivo durante
                  el viaje, y <strong>(2) cuidar especialmente el cierre</strong> de cada
                  interacción (llamada, visita, gestión), porque es lo que el cliente recordará.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 6 — CUSTOMER JOURNEY MAP
      =============================== */}
      <section className="topic-section" id="cjm">
        <div className="topic-section__title">
          <h2>6. Cómo construir un Customer Journey Map</h2>
          <span className="topic-section__meta">Herramienta · Metodología · Paso a paso</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>6.1. Qué es y para qué sirve un Customer Journey Map</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>Customer Journey Map (CJM)</strong> es una representación visual
                del viaje completo del cliente, que muestra en un único documento:
                las fases, los touchpoints, las emociones, los pain points y las
                oportunidades de mejora.
              </p>
              <p>
                No es solo un diagrama de proceso: es una <strong>herramienta de empatía
                organizacional</strong> que obliga a la empresa a ver su propio funcionamiento
                desde los ojos del cliente.
              </p>

              <div className="callout callout--info">
                <h4 className="callout-title">📋 Usos habituales del CJM</h4>
                <ul>
                  <li>Identificar y priorizar mejoras en la experiencia del cliente.</li>
                  <li>Alinear distintos departamentos en torno a la misma experiencia.</li>
                  <li>Formar al personal nuevo en la visión del cliente.</li>
                  <li>Desarrollar nuevos productos o servicios desde la perspectiva del usuario.</li>
                  <li>Comunicar internamente el impacto de los cambios en los procesos.</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>6.2. Paso a paso para elaborar un CJM</summary>
            <div className="topic-details__content">
              <p>La construcción de un Customer Journey Map eficaz sigue estos pasos:</p>

              <div className="steps-container">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Definir el Buyer Persona</h5>
                    <p>
                      Antes de mapear el viaje, es necesario definir <strong>para quién</strong>
                      lo mapeas. El Buyer Persona es una representación semificional del cliente
                      ideal, basada en datos reales: demografía, motivaciones, objetivos,
                      frustraciones y comportamiento digital.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Establecer el alcance del viaje</h5>
                    <p>
                      Decidir qué fragmento del viaje se va a mapear:
                      ¿todo el ciclo de vida del cliente? ¿Solo la primera compra?
                      ¿Solo el proceso de reclamación? Un mapa demasiado amplio pierde
                      profundidad; uno demasiado estrecho, contexto.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Recopilar datos reales</h5>
                    <p>
                      El CJM debe basarse en datos, no en suposiciones. Fuentes típicas:
                      encuestas de satisfacción, entrevistas a clientes, análisis web (Google
                      Analytics, heatmaps), grabaciones de llamadas, análisis de reseñas,
                      sesiones de observación en tienda.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5>Identificar touchpoints y acciones del cliente</h5>
                    <p>
                      Para cada fase del viaje, listar todos los puntos de contacto y las
                      acciones que realiza el cliente. Ser exhaustivo: incluir tanto los
                      canales de la empresa como las plataformas externas (comparadores,
                      redes, foros).
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h5>Mapear las emociones y pensamientos</h5>
                    <p>
                      Para cada touchpoint, registrar la emoción dominante del cliente
                      (frustración, confianza, sorpresa, alivio…) y el pensamiento que
                      lo acompaña. Se suele representar como una <strong>curva emocional</strong>
                      que sube o baja a lo largo del viaje.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">6</div>
                  <div className="step-content">
                    <h5>Señalar pain points y oportunidades</h5>
                    <p>
                      Marcar claramente dónde la curva emocional desciende (pain points)
                      y donde hay oportunidades de sorprender positivamente al cliente.
                      Estas son las prioridades de mejora.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">7</div>
                  <div className="step-content">
                    <h5>Definir métricas y responsables</h5>
                    <p>
                      Para cada touchpoint crítico, asignar un <strong>indicador de medición</strong>
                      (NPS, CSAT, tasa de abandono, tiempo de resolución) y un
                      <strong>responsable</strong> interno. Sin métricas y responsables, el
                      CJM es solo un documento estático.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>6.3. Elementos visuales de un CJM profesional</summary>
            <div className="topic-details__content">
              <p>
                Un Customer Journey Map profesional integra los siguientes componentes
                en su representación visual:
              </p>

              <div className="cjm-elements-table">
                <table>
                  <thead>
                    <tr>
                      <th>Elemento</th>
                      <th>Descripción</th>
                      <th>Formato habitual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Fases del viaje</strong></td>
                      <td>Etapas horizontales del recorrido</td>
                      <td>Columnas o bandas de color</td>
                    </tr>
                    <tr>
                      <td><strong>Touchpoints</strong></td>
                      <td>Canales e interacciones en cada fase</td>
                      <td>Iconos o rótulos</td>
                    </tr>
                    <tr>
                      <td><strong>Acciones del cliente</strong></td>
                      <td>Qué hace el cliente en cada paso</td>
                      <td>Texto descriptivo</td>
                    </tr>
                    <tr>
                      <td><strong>Pensamientos</strong></td>
                      <td>Qué piensa o se pregunta</td>
                      <td>Globos de pensamiento o texto</td>
                    </tr>
                    <tr>
                      <td><strong>Emociones</strong></td>
                      <td>Cómo se siente en cada momento</td>
                      <td>Curva emocional (línea gráfica)</td>
                    </tr>
                    <tr>
                      <td><strong>Pain points</strong></td>
                      <td>Momentos de frustración o fricción</td>
                      <td>Señales de alerta / rojo</td>
                    </tr>
                    <tr>
                      <td><strong>Oportunidades</strong></td>
                      <td>Posibles mejoras o momentos wow</td>
                      <td>Bombilla / verde</td>
                    </tr>
                    <tr>
                      <td><strong>Métricas</strong></td>
                      <td>Indicadores de medición por touchpoint</td>
                      <td>Tabla o badge de KPI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 7 — MÉTRICAS DEL VIAJE
      =============================== */}
      <section className="topic-section" id="metricas">
        <div className="topic-section__title">
          <h2>7. Métricas del viaje del cliente</h2>
          <span className="topic-section__meta">NPS · CSAT · CES · CLV · Churn Rate</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>7.1. Indicadores clave del Customer Journey</summary>
            <div className="topic-details__content">
              <p>
                Medir el viaje del cliente requiere indicadores específicos para cada fase.
                Los más utilizados son:
              </p>

              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-badge">NPS</div>
                  <h5>Net Promoter Score</h5>
                  <p>Mide la lealtad y la probabilidad de recomendación.</p>
                  <p><strong>Pregunta:</strong> "¿Con qué probabilidad recomendarías esta empresa?"</p>
                  <p><strong>Escala:</strong> 0-10. Promotores (9-10), Neutrales (7-8), Detractores (0-6).</p>
                  <p><strong>Cálculo:</strong> NPS = % Promotores − % Detractores</p>
                  <p><strong>Fase:</strong> Post-compra / Fidelización</p>
                </div>

                <div className="metric-card">
                  <div className="metric-badge">CSAT</div>
                  <h5>Customer Satisfaction Score</h5>
                  <p>Mide la satisfacción inmediata tras una interacción.</p>
                  <p><strong>Pregunta:</strong> "¿Cuál es tu nivel de satisfacción con esta atención?"</p>
                  <p><strong>Escala:</strong> 1-5 o 1-10.</p>
                  <p><strong>Cálculo:</strong> % de respuestas positivas (4-5) sobre el total.</p>
                  <p><strong>Fase:</strong> Post-interacción (llamada, visita, chat)</p>
                </div>

                <div className="metric-card">
                  <div className="metric-badge">CES</div>
                  <h5>Customer Effort Score</h5>
                  <p>Mide el esfuerzo que el cliente debe invertir en resolver su problema.</p>
                  <p><strong>Pregunta:</strong> "¿Cuánto esfuerzo te ha supuesto resolver tu consulta?"</p>
                  <p><strong>Escala:</strong> 1 (muy poco esfuerzo) a 7 (mucho esfuerzo).</p>
                  <p><strong>Insight:</strong> El esfuerzo bajo predice la lealtad mejor que la satisfacción.</p>
                  <p><strong>Fase:</strong> Resolución de problemas / Post-servicio</p>
                </div>

                <div className="metric-card">
                  <div className="metric-badge">CLV</div>
                  <h5>Customer Lifetime Value</h5>
                  <p>Valor económico total generado por un cliente a lo largo de su relación.</p>
                  <p><strong>Cálculo básico:</strong> CLV = Ticket medio × Frecuencia × Duración (años)</p>
                  <p><strong>Importancia:</strong> Justifica la inversión en CX y en retención.</p>
                  <p><strong>Fase:</strong> Estrategia de fidelización</p>
                </div>

                <div className="metric-card">
                  <div className="metric-badge">CR</div>
                  <h5>Churn Rate (Tasa de abandono)</h5>
                  <p>Porcentaje de clientes que dejan de serlo en un período.</p>
                  <p><strong>Cálculo:</strong> (Clientes perdidos / Clientes al inicio del período) × 100</p>
                  <p><strong>Benchmark:</strong> En telecomunicaciones y banca, un CR &gt; 5% anual es señal de alerta.</p>
                  <p><strong>Fase:</strong> Retención y lealtad</p>
                </div>

                <div className="metric-card">
                  <div className="metric-badge">FCR</div>
                  <h5>First Contact Resolution</h5>
                  <p>% de problemas resueltos en el primer contacto sin necesidad de seguimiento.</p>
                  <p><strong>Benchmark:</strong> FCR superior al 70-80% se considera óptimo.</p>
                  <p><strong>Impacto:</strong> Cada punto extra de FCR reduce costes operativos y mejora el CSAT.</p>
                  <p><strong>Fase:</strong> Decisión y postventa</p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>7.2. Métricas vs. percepciones: el peligro de los números sin contexto</summary>
            <div className="topic-details__content">
              <p>
                Las métricas son herramientas, no verdades absolutas. Un error frecuente es
                confundir <strong>un buen NPS con una buena experiencia del cliente</strong>.
                Algunos riesgos:
              </p>
              <ul>
                <li>
                  <strong>Sesgos de muestra:</strong> quien responde las encuestas no siempre
                  representa al cliente medio (responden más los muy satisfechos y los muy
                  insatisfechos).
                </li>
                <li>
                  <strong>Gaming de indicadores:</strong> cuando los equipos son evaluados por
                  NPS, pueden presionar a los clientes para puntuar alto.
                </li>
                <li>
                  <strong>Diferencias culturales:</strong> un cliente español tiende a puntuar
                  más bajo que uno norteamericano ante la misma experiencia objetiva.
                </li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ La métrica que no existe: la emoción cualitativa</h4>
                <p>
                  Los números miden intensidad; los comentarios abiertos explican el
                  <em>por qué</em>. Un análisis de CJM profesional combina siempre
                  <strong>datos cuantitativos con análisis cualitativo</strong> de verbatims
                  (comentarios textuales de los clientes).
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 8 — OPTIMIZAR EL VIAJE
      =============================== */}
      <section className="topic-section" id="optimizacion">
        <div className="topic-section__title">
          <h2>8. Estrategias para optimizar el viaje del cliente</h2>
          <span className="topic-section__meta">Mejora continua · Momentos WOW · Diseño del servicio</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>8.1. Del pain point a la solución: metodología de mejora</summary>
            <div className="topic-details__content">
              <p>
                Identificar un pain point es el primer paso. Eliminarlo o convertirlo en
                una oportunidad requiere un proceso estructurado:
              </p>
              <ol>
                <li>
                  <strong>Describir el pain point</strong> con evidencias (verbatims,
                  métricas, porcentaje de afectados).
                </li>
                <li>
                  <strong>Identificar la causa raíz</strong> (no el síntoma): ¿es un problema
                  de proceso, de tecnología, de formación o de cultura?
                </li>
                <li>
                  <strong>Diseñar la solución ideal</strong> desde la perspectiva del cliente,
                  no desde la comodidad de la empresa.
                </li>
                <li>
                  <strong>Testear con clientes reales</strong> antes del despliegue masivo.
                </li>
                <li>
                  <strong>Medir el impacto</strong> tras la implementación y comparar con el
                  antes (benchmark).
                </li>
              </ol>
            </div>
          </details>

          <details className="topic-details">
            <summary>8.2. Los momentos WOW: crear recuerdos positivos</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>momento WOW</strong> es una interacción que supera significativamente
                las expectativas del cliente, generando una emoción positiva intensa que se
                convierte en recuerdo duradero y en historia que contar.
              </p>
              <p>
                Los momentos WOW no siempre requieren grandes inversiones. Algunos ejemplos
                de bajo coste y alto impacto:
              </p>

              <div className="wow-examples">
                <div className="wow-card">
                  <span className="wow-icon">✉️</span>
                  <p>Una nota manuscrita de agradecimiento en el packaging del pedido.</p>
                </div>
                <div className="wow-card">
                  <span className="wow-icon">🎂</span>
                  <p>Felicitación de cumpleaños personalizada con un pequeño descuento.</p>
                </div>
                <div className="wow-card">
                  <span className="wow-icon">🔧</span>
                  <p>Técnico que avisa <em>antes</em> de que el cliente detecte un problema
                  (mantenimiento proactivo).</p>
                </div>
                <div className="wow-card">
                  <span className="wow-icon">⏱️</span>
                  <p>Resolver una queja en la mitad del tiempo prometido, con seguimiento posterior.</p>
                </div>
                <div className="wow-card">
                  <span className="wow-icon">💬</span>
                  <p>Recordar el nombre del cliente y el contexto de su última consulta sin que
                  lo tenga que explicar de nuevo.</p>
                </div>
                <div className="wow-card">
                  <span className="wow-icon">🎁</span>
                  <p>Compensación espontánea por un inconveniente, sin esperar a que el cliente
                  la reclame.</p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>8.3. El papel del empleado como co-creador del viaje</summary>
            <div className="topic-details__content">
              <p>
                La experiencia del cliente es inseparable de la experiencia del empleado.
                Una organización que <strong>no cuida a sus empleados no puede cuidar a sus clientes</strong>.
                Este principio, conocido como la <strong>cadena de valor servicio-beneficio</strong>
                (<em>Service-Profit Chain</em>, Heskett et al., Harvard, 1994), establece que:
              </p>

              <div className="chain-visual">
                <div className="chain-item">👩‍💼 Empleado satisfecho</div>
                <div className="chain-arrow">→</div>
                <div className="chain-item">🌟 Servicio de calidad</div>
                <div className="chain-arrow">→</div>
                <div className="chain-item">😊 Cliente satisfecho</div>
                <div className="chain-arrow">→</div>
                <div className="chain-item">❤️ Cliente leal</div>
                <div className="chain-arrow">→</div>
                <div className="chain-item">📈 Crecimiento y beneficio</div>
              </div>

              <p>
                Por ello, las empresas líderes en CX invierten simultáneamente en
                <strong>Employee Experience (EX)</strong>: formación continua, empowerment,
                reconocimiento y entornos de trabajo que permitan al empleado
                tomar decisiones ágiles en beneficio del cliente.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>8.4. El viaje del cliente en entornos digitales</summary>
            <div className="topic-details__content">
              <p>
                La <strong>digitalización</strong> ha transformado profundamente el viaje del cliente.
                Hoy, más del 70% de los viajes comienzan online y muchos se desarrollan en entornos
                completamente digitales. Los principios del CJM siguen siendo válidos, pero aparecen
                nuevos elementos:
              </p>
              <ul>
                <li>
                  <strong>Micro-momentos</strong> (Google): los instantes en que el usuario acude
                  al móvil con una intención inmediata: <em>quiero saber, quiero ir, quiero hacer,
                  quiero comprar</em>.
                </li>
                <li>
                  <strong>Dark journey:</strong> parte del viaje que la empresa no puede rastrear
                  (conversaciones privadas, búsquedas sin cookies, boca a boca digital).
                </li>
                <li>
                  <strong>UX digital:</strong> la velocidad, la claridad y la accesibilidad de la
                  web/app son touchpoints en sí mismos con enorme impacto en la satisfacción.
                </li>
                <li>
                  <strong>IA y personalización:</strong> los algoritmos permiten adaptar el viaje
                  a cada cliente en tiempo real, pero también generan percepción de intrusión si
                  no se gestiona con transparencia.
                </li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 9 — CASOS PRÁCTICOS
      =============================== */}
      <section className="topic-section" id="casos">
        <div className="topic-section__title">
          <h2>9. Casos prácticos de Customer Journey</h2>
          <span className="topic-section__meta">Ejemplos reales · Análisis · Lecciones</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>9.1. Caso 1: El banco que perdió clientes sin saberlo</summary>
            <div className="topic-details__content">
              <p>
                <strong>Situación:</strong> Un banco mediano tenía indicadores operativos
                excelentes: tiempos de espera bajos en sucursal, tasa de error casi nula en
                transacciones y alta puntuación en auditorías internas. Sin embargo, su
                tasa de abandono de clientes particulares crecía año tras año.
              </p>
              <p>
                <strong>Diagnóstico CJM:</strong> Al mapear el viaje de un cliente que
                quería contratar un préstamo personal, se descubrió que:
              </p>
              <ul>
                <li>El proceso empezaba en la web, que era confusa y no permitía pre-simular.</li>
                <li>El cliente llamaba al banco, donde era derivado a tres departamentos distintos.</li>
                <li>En la sucursal, el empleado pedía documentación que ya se había enviado online.</li>
                <li>La resolución tardaba 8 días, aunque internamente el proceso se completaba en 2.</li>
                <li>El cliente recibía la carta de resolución sin ninguna llamada o mensaje previo.</li>
              </ul>
              <p>
                <strong>Solución:</strong> Rediseño del proceso centrado en el viaje:
                pre-simulador en la web, gestor único asignado, portal de seguimiento en tiempo real,
                y llamada de seguimiento a las 48h. El tiempo percibido por el cliente se redujo
                de 8 días a 3, sin cambiar el proceso interno de aprobación.
              </p>
              <div className="callout callout--tip">
                <h4 className="callout-title">💡 Lección</h4>
                <p>
                  La eficiencia operativa no es suficiente. Lo que importa es la
                  <strong>eficiencia percibida por el cliente</strong>, que se determina
                  por la transparencia, la comunicación y el esfuerzo que el cliente siente que invierte.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>9.2. Caso 2: La clínica que convirtió la espera en oportunidad</summary>
            <div className="topic-details__content">
              <p>
                <strong>Situación:</strong> Una clínica dental identificó en su CJM que el
                mayor pain point era la sala de espera: los pacientes la vivían con ansiedad,
                y ese estado emocional negativo contaminaba la percepción del servicio posterior,
                aunque la atención clínica fuera excelente.
              </p>
              <p>
                <strong>Solución CJM:</strong> Rediseño de la experiencia de espera:
              </p>
              <ul>
                <li>Sistema de turnos con estimación de tiempo real en pantalla.</li>
                <li>Tablet con información tranquilizadora sobre el tratamiento previsto.</li>
                <li>Playlist de música diseñada específicamente para reducir la ansiedad dental.</li>
                <li>Fisioterapeuta disponible un día por semana para tensión cervical.</li>
                <li>Mensaje de WhatsApp 30 minutos antes de la cita con aviso de posible retraso.</li>
              </ul>
              <p>
                El CSAT de la clínica subió de 7,2 a 9,1 en 6 meses.
                El NPS pasó de +12 a +58. Las recomendaciones espontáneas se triplicaron.
              </p>
              <div className="callout callout--tip">
                <h4 className="callout-title">💡 Lección</h4>
                <p>
                  La sala de espera no es un tiempo muerto: es un touchpoint de alto impacto
                  emocional. <strong>Transformar un pain point en un momento diferencial</strong>
                  puede ser el elemento que más recuerde el cliente.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>9.3. Caso 3: El e-commerce que recuperó carritos abandonados</summary>
            <div className="topic-details__content">
              <p>
                <strong>Situación:</strong> Una tienda online de alimentación gourmet tenía
                una tasa de abandono del carrito del 74%, muy por encima de la media del sector (68%).
                El análisis del viaje digital reveló:
              </p>
              <ul>
                <li>El gasto de envío solo aparecía en el paso 4 de 5 del checkout.</li>
                <li>No había opción de compra como invitado: registro obligatorio.</li>
                <li>El tiempo de carga de la página de pago era superior a 4 segundos.</li>
                <li>No existía ningún touchpoint de recuperación tras el abandono.</li>
              </ul>
              <p>
                <strong>Solución:</strong> Mostrar los gastos de envío desde el inicio,
                activar la compra como invitado, optimizar la velocidad de carga y
                lanzar una secuencia de email automatizado de 3 mensajes (a 1h, 24h y 72h)
                para carritos abandonados, con contenido emocional personalizado
                (no solo un descuento).
              </p>
              <p>
                Resultado: tasa de recuperación del 18% de los carritos abandonados en el
                primer mes, con un ROI de la inversión superior al 400%.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 10 — ACTIVIDADES
      =============================== */}
      <section className="topic-section" id="actividades">
        <div className="topic-section__title">
          <h2>10. Actividades prácticas</h2>
          <span className="topic-section__meta">Taller · CJM · Reflexión crítica</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>Actividad 1 — Mapea tu propio viaje como cliente</summary>
            <div className="topic-details__content">
              <p>
                <strong>Objetivo:</strong> Desarrollar empatía hacia el cliente a través de la
                experiencia propia.
              </p>
              <p>
                <strong>Instrucciones:</strong> Piensa en una compra o contratación reciente
                (un producto, un servicio, una gestión administrativa). Dibuja o describe su
                viaje completo siguiendo este esquema:
              </p>
              <ol>
                <li>¿Cómo descubriste la empresa/producto?</li>
                <li>¿Qué canales usaste para informarte?</li>
                <li>¿Cuánto esfuerzo te costó comprar o contratar?</li>
                <li>¿Cuál fue el momento de mayor frustración?</li>
                <li>¿Cuál fue el momento más positivo?</li>
                <li>¿Cómo terminó la experiencia? ¿Recomendarías?</li>
              </ol>
              <p>
                Comparte tu mapa con el grupo y debatid: ¿qué elementos habría podido mejorar
                la empresa para hacer el viaje más fluido?
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 2 — CJM en equipo: empresa simulada</summary>
            <div className="topic-details__content">
              <p>
                <strong>Objetivo:</strong> Construir un Customer Journey Map completo para
                una empresa ficticia o del entorno del alumno.
              </p>
              <p>
                <strong>Instrucciones:</strong>
              </p>
              <ol>
                <li>Elegid una empresa (real o simulada) del sector servicios.</li>
                <li>Defined el Buyer Persona del cliente principal.</li>
                <li>Identificad todas las fases y touchpoints del viaje.</li>
                <li>Asignad una emoción dominante a cada touchpoint.</li>
                <li>Dibujad la curva emocional y señalad los pain points.</li>
                <li>Proponed al menos 3 mejoras concretas con argumentación.</li>
                <li>Presentad el CJM al resto de la clase en formato visual.</li>
              </ol>
              <p><strong>Duración:</strong> 90 minutos. <strong>Entregable:</strong> Póster o presentación digital.</p>
            </div>
          </details>

          <details className="topic-details">
            <summary>Actividad 3 — Análisis de un touchpoint negativo viral</summary>
            <div className="topic-details__content">
              <p>
                <strong>Objetivo:</strong> Analizar el impacto mediático de un touchpoint
                negativo y sus consecuencias para la marca.
              </p>
              <p>
                <strong>Instrucciones:</strong> Busca en internet un caso reciente de queja
                viral de un cliente (puede ser un vídeo, un tweet, una noticia). Analinzadlo
                respondiendo:
              </p>
              <ol>
                <li>¿En qué fase del viaje del cliente ocurrió el incidente?</li>
                <li>¿Qué touchpoint falló exactamente?</li>
                <li>¿Cuál fue la causa raíz (proceso, formación, tecnología, cultura)?</li>
                <li>¿Cómo respondió la empresa? ¿Fue adecuado?</li>
                <li>¿Qué habría hecho una empresa centrada en CX de manera diferente?</li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 11 — AUTOEVALUACIÓN
      =============================== */}
      <section className="topic-section" id="autoevaluacion">
        <div className="topic-section__title">
          <h2>11. Autoevaluación</h2>
          <span className="topic-section__meta">Comprensión · Aplicación · Reflexión</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Preguntas de comprensión y reflexión</summary>
            <div className="topic-details__content">
              <ol className="self-assessment-list">
                <li>
                  ¿Cuál es la diferencia fundamental entre un <em>proceso interno de servicio</em>
                  y el <em>viaje del cliente</em>? Pon un ejemplo concreto de tu sector.
                </li>
                <li>
                  Explica con tus palabras qué es un <em>momento de la verdad</em> y por qué
                  Jan Carlzon lo consideró el elemento central de la gestión del servicio.
                </li>
                <li>
                  ¿Qué es el ZMOT? ¿Por qué es especialmente relevante en el entorno digital actual?
                </li>
                <li>
                  Una empresa obtiene un NPS de +60 pero tiene una tasa de abandono del 15% anual.
                  ¿Cómo explicarías esta aparente contradicción?
                </li>
                <li>
                  Aplica la Peak-End Rule a una experiencia de atención al cliente que hayas
                  vivido recientemente. ¿Qué fue el "pico"? ¿Cómo fue el "final"?
                </li>
                <li>
                  ¿Por qué se dice que "sin employee experience no puede haber
                  customer experience"? ¿Estás de acuerdo?
                </li>
                <li>
                  Diseña un <em>momento WOW</em> de bajo coste para una empresa de
                  tu elección. Justifica por qué funcionaría.
                </li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* ==============================
          SECCIÓN 12 — SÍNTESIS FINAL
      =============================== */}
      <section className="topic-section" id="sintesis">
        <div className="topic-section__title">
          <h2>12. Síntesis y conclusiones clave</h2>
          <span className="topic-section__meta">Ideas fundamentales · Compromisos profesionales</span>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <h4>🗺️ El mapa es la herramienta</h4>
            <p>
              El Customer Journey Map convierte la perspectiva del cliente en un documento
              accionable. Sin visualización compartida, la mejora de la experiencia es
              fragmentada e incoherente.
            </p>
          </div>
          <div className="summary-card">
            <h4>🎭 Las emociones mandan</h4>
            <p>
              Los clientes no recuerdan procesos; recuerdan cómo se sintieron.
              Gestionar emociones —no solo tareas— es la competencia central del profesional
              de atención al cliente del siglo XXI.
            </p>
          </div>
          <div className="summary-card">
            <h4>📏 Lo que no se mide no se mejora</h4>
            <p>
              Cada touchpoint relevante debe tener su métrica. NPS, CSAT, CES y FCR
              son las brújulas que orientan las decisiones de mejora hacia el cliente real.
            </p>
          </div>
          <div className="summary-card">
            <h4>🔁 El viaje es un ciclo</h4>
            <p>
              El UMOT (lo que el cliente comparte) se convierte en el ZMOT del próximo cliente.
              Cada experiencia que gestionas hoy está escribiendo el marketing de mañana.
            </p>
          </div>
          <div className="summary-card">
            <h4>🤝 Empleado + Cliente = Éxito</h4>
            <p>
              La Service-Profit Chain es una verdad demostrada: invertir en la experiencia
              del empleado es la inversión más rentable en la experiencia del cliente.
            </p>
          </div>
          <div className="summary-card">
            <h4>⚡ La fricción cuesta dinero</h4>
            <p>
              Cada pain point no resuelto tiene un coste: abandono, reclamaciones,
              coste de atención adicional y reputación. Eliminar fricción es
              simultáneamente rentable y ético.
            </p>
          </div>
        </div>

        <div className="callout callout--info" style={{marginTop: '2rem'}}>
          <h4 className="callout-title">📚 Bibliografía y recursos recomendados</h4>
          <ul>
            <li>Carlzon, J. (1987). <em>Moments of Truth</em>. Harper & Row.</li>
            <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.</li>
            <li>Heskett, J.L. et al. (1994). "Putting the Service-Profit Chain to Work". <em>Harvard Business Review</em>.</li>
            <li>Solis, B. (2012). <em>The End of Business as Usual</em>. Wiley.</li>
            <li>Dixon, M., Freeman, K., Toman, N. (2010). "Stop Trying to Delight Your Customers". <em>Harvard Business Review</em>.</li>
            <li>Goodman, J. (2019). <em>Customer Experience 3.0</em>. AMACOM.</li>
            <li>Osterwalder, A. et al. (2014). <em>Value Proposition Design</em>. Wiley.</li>
          </ul>
        </div>
      </section>

    </TopicLayout>
  );
};

export default Tema18;
