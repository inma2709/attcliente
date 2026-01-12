import TopicLayout from '../../components/TopicLayout';

const TemaXX = () => {
  return (
    <TopicLayout
      numero="XX"
      title="Fidelización del cliente y servicio posventa"
      intro="La fidelización del cliente y el servicio posventa constituyen hoy uno de los pilares estratégicos más relevantes para la sostenibilidad y competitividad de las organizaciones. En un contexto de mercados saturados y clientes altamente informados, la verdadera diferenciación ya no reside únicamente en el producto, sino en la experiencia global que la empresa es capaz de ofrecer antes, durante y después de la venta."
    >

      {/* ============================= */}
      {/* SECCIÓN 1 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">1. La fidelización como eje estratégico de la empresa</h2>
        <figure className="media">
          <img
            src="/t14.png"
            alt="Fidelizacion del cliente y servicio posventa"
          />
          <figcaption>
          Fidelizacion del cliente y servicio postventa. La fase más importante de la relación con el cliente.
          </figcaption>
        </figure>

        <div className="topic-accordion">

          <details className="topic-details">
            <summary>1.1. El nuevo paradigma de la competitividad</summary>
            <div className="topic-details__content">
              <p>
                En los mercados actuales, caracterizados por una intensa competencia y una oferta
                cada vez más homogénea, la venta deja de ser el objetivo final para convertirse en
                el inicio de una relación. Las empresas que sobreviven no son necesariamente las
                que venden más, sino aquellas que consiguen que sus clientes permanezcan.
              </p>

              <p>
                La fidelización implica establecer relaciones comerciales duraderas, basadas en la
                confianza, la satisfacción continuada y la percepción de valor. Un cliente fiel no
                solo repite la compra, sino que se convierte en prescriptor de la marca, reduciendo
                los costes de captación y fortaleciendo la reputación corporativa.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  Vender es una acción puntual; fidelizar es una estrategia a largo plazo.
                  La rentabilidad sostenida nace de la relación, no de la transacción.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>1.2. El valor percibido por el cliente</summary>
            <div className="topic-details__content">
              <p>
                La fidelidad del cliente se construye sobre la percepción de valor, entendida como
                el equilibrio entre lo que el cliente recibe y lo que sacrifica. Este valor no es
                objetivo, sino profundamente subjetivo y experiencial.
              </p>

              <h4>Dimensiones del valor total</h4>
              <ul>
                <li>
                  <strong>Valor de compra:</strong> expectativas previas generadas por la oferta,
                  la marca y la comunicación comercial.
                </li>
                <li>
                  <strong>Valor de uso:</strong> satisfacción experimentada durante la utilización
                  real del producto o servicio.
                </li>
                <li>
                  <strong>Valor final:</strong> evaluación global tras la experiencia completa de
                  consumo, incluyendo la atención recibida.
                </li>
              </ul>

              <p>
                El servicio posventa actúa directamente sobre estas tres dimensiones, especialmente
                sobre el valor de uso y el valor final, consolidando o deteriorando la relación con
                el cliente.
              </p>
            </div>
          </details>

        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">2. El servicio posventa: concepto y alcance</h2>

        <div className="topic-accordion">

          <details className="topic-details">
            <summary>2.1. Qué es el servicio posventa</summary>
            <div className="topic-details__content">
              <p>
                El servicio posventa comprende el conjunto de actividades que la empresa desarrolla
                tras la venta con el objetivo de garantizar el correcto funcionamiento del producto
                y la satisfacción del cliente.
              </p>

              <p>
                Incluye actuaciones como la instalación, el mantenimiento, la reparación, el
                asesoramiento técnico, la formación en el uso del producto y la gestión de quejas
                y reclamaciones.
              </p>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Ejemplo práctico</h4>
                <p>
                  Un fallo técnico no gestionado puede generar abandono. El mismo fallo,
                  correctamente atendido, puede reforzar la lealtad del cliente.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Importancia estratégica del servicio posventa</summary>
            <div className="topic-details__content">
              <p>
                El servicio posventa cumple una función clave en la estrategia empresarial por
                varias razones:
              </p>

              <ul>
                <li>Favorece la repetición de compra y la fidelización.</li>
                <li>Permite un contacto continuo con el cliente.</li>
                <li>Genera información valiosa sobre necesidades y expectativas.</li>
                <li>Actúa como herramienta de marketing indirecto mediante el boca a boca.</li>
              </ul>

              <p>
                La calidad del servicio posventa es percibida por el cliente como una extensión
                directa de la calidad del producto y de la empresa en su conjunto.
              </p>
            </div>
          </details>

        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 3 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">3. Técnicas de retención y programas de fidelización</h2>

        <div className="topic-accordion">

          <details className="topic-details">
            <summary>3.1. Técnicas de retención de clientes</summary>
            <div className="topic-details__content">
              <p>
                Retener clientes implica ofrecer razones continuas para permanecer. Estas razones
                pueden ser racionales, emocionales o contractuales.
              </p>

              <ul>
                <li>Trato preferente y atención personalizada.</li>
                <li>Condiciones económicas ventajosas.</li>
                <li>Facilidad y rapidez en la resolución de incidencias.</li>
                <li>Comunicación proactiva y cercana.</li>
              </ul>

              <p>
                Las barreras de salida también influyen en la retención, pero una fidelización
                basada exclusivamente en obstáculos suele ser frágil y poco sostenible.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.2. Programas de fidelización</summary>
            <div className="topic-details__content">
              <p>
                Los programas de fidelización son herramientas estructuradas diseñadas para
                incentivar la repetición de compra y fortalecer el vínculo con la marca.
              </p>

              <ul>
                <li>Tarjetas de puntos o recompensas.</li>
                <li>Descuentos progresivos.</li>
                <li>Bonificaciones por consumo acumulado.</li>
                <li>Promociones exclusivas para clientes habituales.</li>
                <li>Acciones personalizadas (felicitaciones, aniversarios).</li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">🏷️ Caso ilustrativo</h4>
                <p>
                  Los sistemas de puntos y descuentos no solo incrementan la frecuencia de compra,
                  sino que permiten conocer hábitos de consumo y anticipar necesidades futuras.
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
        <h2 className="topic-section__title">4. El seguimiento tras la venta y la mejora continua</h2>

        <div className="topic-accordion">

          <details className="topic-details">
            <summary>4.1. Importancia del seguimiento tras la venta</summary>
            <div className="topic-details__content">
              <p>
                El seguimiento tras la venta es una práctica esencial para consolidar la
                satisfacción del cliente y detectar posibles incidencias antes de que se
                conviertan en conflictos.
              </p>

              <p>
                Contactar con el cliente, interesarse por su experiencia y ofrecer apoyo genera
                sensación de acompañamiento y refuerza la confianza.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.2. Gestión de errores y tratamiento de anomalías</summary>
            <div className="topic-details__content">
              <p>
                Una anomalía es cualquier desviación entre el servicio prestado y el estándar
                definido. Su correcta gestión es clave para la mejora continua.
              </p>

              <ol>
                <li>Identificación y documentación del error.</li>
                <li>Análisis de causas.</li>
                <li>Aplicación de medidas correctoras.</li>
                <li>Seguimiento y verificación de resultados.</li>
              </ol>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Advertencia</h4>
                <p>
                  Penalizar al personal por los errores fomenta su ocultación. La cultura de
                  calidad debe basarse en el aprendizaje, no en el castigo.
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
          <div className="video-title">Fidelizar clientes</div>
          <p className="video-meta muted">Fidelizar a los clientes es fundamental para el éxito a largo plazo.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/UegqpeZuYvI"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div className="video-title">Fidelizar clientes para venderle de nuevo</div>
          <p className="video-meta muted">La importancia de mantener una relación continua para futuras ventas.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/NFW86hiEhdc"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <section className="topic-section">
        <h2>Recursos audiovisuales</h2>

        <div className="video-block">
          <div className="video-title">La postventa</div>
          <p className="video-meta muted">Importancia del seguimiento y atención al cliente después de la venta.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/Ydk7jiG0w10"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        </section>
      </section>

      {/* ============================= */}
      {/* CIERRE */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">Conclusión</h2>
        <p>
          La fidelización del cliente y el servicio posventa no son elementos accesorios, sino el
          núcleo de una estrategia empresarial orientada a la sostenibilidad. La excelencia en
          la atención tras la venta transforma la relación comercial en una alianza duradera,
          capaz de resistir la presión competitiva y generar valor compartido a largo plazo.
        </p>
      </section>

    </TopicLayout>
  );
};

export default TemaXX;
