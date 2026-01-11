import TopicLayout from '../../components/TopicLayout';

const Tema07 = () => {
  return (
    <TopicLayout
      numero="07"
      title="La comunicación telefónica y telemática en la empresa"
      intro="La atención telefónica y telemática constituye uno de los canales más sensibles y estratégicos de la comunicación empresarial. A menudo representa el primer contacto real entre el cliente y la organización, y de su correcta gestión depende la percepción de profesionalidad, confianza y eficacia. Este tema aborda, desde una perspectiva universitaria y aplicada, los fundamentos, técnicas y herramientas necesarias para ofrecer una atención excelente en entornos no presenciales."
    >

      {/* ================= TEORÍA ================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Desarrollo teórico</h2>
          <span className="topic-section__meta"> Atención al cliente avanzada</span>
        </div>
         <figure className="media">
          <img
            src="/t7.png"
            alt="Atencion telefónica profesional"
          />
          <figcaption>
           La atención telefónica profesional requiere una estructura clara, manejo estratégico de la voz y adaptación al perfil del cliente.
          </figcaption>
        </figure>

        <div className="topic-accordion">

          {/* 1 */}
          <details className="topic-details">
            <summary>1. El proceso y la estructura de la comunicación telefónica</summary>
            <div className="topic-details__content">
              <p>
                La comunicación telefónica es una forma de comunicación oral no presencial en la que
                el interlocutor no es visible, lo que elimina gran parte de los apoyos visuales
                presentes en la comunicación cara a cara. Esta ausencia convierte a la voz en el
                principal vehículo de significado, emoción y credibilidad.
              </p>

              <p>
                Aunque los elementos clásicos de la comunicación —emisor, receptor, mensaje, código
                y canal— siguen presentes, en el ámbito telefónico adquieren matices específicos.
                El soporte físico del mensaje suele desaparecer, salvo en los casos en los que la
                llamada sea grabada o registrada.
              </p>

              <p>
                Resulta especialmente relevante destacar que, aunque el profesional no sea visto,
                la quinesia (postura corporal, gestos y expresión facial) sigue influyendo de manera
                decisiva en la calidad de la comunicación, ya que condiciona el tono, la claridad
                y la modulación de la voz.
              </p>

              <h4>Estructura profesional de una llamada</h4>
              <ul>
                <li>
                  <strong>Presentación:</strong> saludo inicial, identificación de la empresa,
                  identificación del emisor y motivo de la llamada.
                </li>
                <li>
                  <strong>Desarrollo:</strong> transmisión clara de la información o detección de
                  necesidades del cliente.
                </li>
                <li>
                  <strong>Conclusión:</strong> resumen de lo acordado y confirmación del objetivo
                  alcanzado.
                </li>
                <li>
                  <strong>Despedida:</strong> agradecimiento y fórmula de cortesía final.
                </li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  En atención telefónica, improvisar equivale a perder control del mensaje.
                  La estructura es la base de la profesionalidad.
                </p>
              </div>
            </div>
          </details>

          {/* 2 */}
          <details className="topic-details">
            <summary>2. Equipos telefónicos y servicios adicionales</summary>
            <div className="topic-details__content">
              <p>
                La evolución tecnológica ha transformado profundamente los sistemas de comunicación
                telefónica en la empresa. Actualmente conviven tecnologías analógicas, digitales,
                móviles y soluciones de manos libres, cada una con aplicaciones específicas.
              </p>

              <p>
                En los sistemas digitales, la voz se convierte en información binaria comprimida,
                lo que permite una mayor calidad, integración con otros sistemas y servicios
                avanzados de gestión.
              </p>

              <h4>Servicios estratégicos asociados</h4>
              <ul>
                <li>Identificación de llamadas entrantes.</li>
                <li>Transferencia de llamadas entre departamentos.</li>
                <li>Desvío de llamadas a otros números o extensiones.</li>
                <li>Buzón de voz corporativo.</li>
                <li>Gestión de listas negras para bloquear accesos no deseados.</li>
              </ul>

              <p>
                Estos servicios no deben entenderse como meras funciones técnicas, sino como
                herramientas estratégicas que influyen directamente en la experiencia del cliente.
              </p>
            </div>
          </details>

          {/* 3 */}
          <details className="topic-details">
            <summary>3. Pautas de calidad y expresión verbal en la atención telefónica</summary>
            <div className="topic-details__content">
              <p>
                La excelencia en la atención telefónica se basa en una expresión verbal cuidada,
                coherente y orientada al cliente. La voz se convierte en la “imagen sonora” de la
                empresa.
              </p>

              <h4>Principios básicos de calidad</h4>
              <ul>
                <li>Respeto y cortesía constantes.</li>
                <li>Claridad y concisión en el mensaje.</li>
                <li>Coherencia entre contenido y tono.</li>
                <li>Actitud motivadora y profesional.</li>
              </ul>

              <h4>Uso profesional de la voz</h4>
              <ul>
                <li>Intensidad intermedia y estable.</li>
                <li>Tono natural, evitando monotonía o brusquedad.</li>
                <li>Ritmo pausado y comprensible.</li>
              </ul>

              <p>
                Un concepto fundamental es el de <strong>sonrisa telefónica</strong>. Sonreír
                mientras se habla modifica la modulación de la voz y transmite cercanía, seguridad
                y profesionalidad, aunque el interlocutor no pueda ver al emisor.
              </p>

              <p>
                Asimismo, la organización del puesto de trabajo es clave: mesa ordenada, materiales
                accesibles y tiempos de espera reducidos. Nunca se debe hacer esperar al cliente
                más de 30 segundos sin ofrecer una explicación.
              </p>
            </div>
          </details>

          {/* 4 */}
          <details className="topic-details">
            <summary>4. Barreras y dificultades en la comunicación telefónica</summary>
            <div className="topic-details__content">
              <p>
                La ausencia de contacto visual convierte a la comunicación telefónica en un canal
                especialmente vulnerable a malentendidos e interpretaciones erróneas.
              </p>

              <h4>Tipos de barreras</h4>
              <ul>
                <li>
                  <strong>Ambientales o físicas:</strong> ruido, mala cobertura, interferencias o
                  distancia.
                </li>
                <li>
                  <strong>Verbales:</strong> habla atropellada, tecnicismos excesivos, incoherencia
                  entre mensaje y tono.
                </li>
                <li>
                  <strong>Interpersonales:</strong> prejuicios, percepciones subjetivas o actitudes
                  defensivas.
                </li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Advertencia</h4>
                <p>
                  En atención telefónica, el tono puede contradecir al mensaje y generar conflicto
                  incluso cuando las palabras son correctas.
                </p>
              </div>
            </div>
          </details>

          {/* 5 */}
          <details className="topic-details">
            <summary>5. Gestión de llamadas y manejo de centralitas</summary>
            <div className="topic-details__content">
              <p>
                La gestión eficaz de llamadas requiere procedimientos claros y homogéneos,
                especialmente cuando se trabaja con centralitas telefónicas.
              </p>

              <h4>Normas básicas al realizar una llamada</h4>
              <ul>
                <li>Identificarse inmediatamente.</li>
                <li>Confirmar si es un buen momento para hablar.</li>
                <li>Modular el tono para transmitir entusiasmo y profesionalidad.</li>
              </ul>

              <h4>Normas básicas al recibir una llamada</h4>
              <ul>
                <li>Atender al primer o segundo tono.</li>
                <li>Identificarse correctamente.</li>
                <li>Tomar datos precisos si la persona solicitada no está disponible.</li>
              </ul>

              <p>
                En el uso de centralitas, es obligatorio informar al cliente antes de ponerlo en
                espera y ofrecer siempre alternativas: transferencia, devolución de llamada o
                mensaje.
              </p>

              <p>
                Para evitar errores en la recogida de datos sensibles (nombres, correos, códigos),
                se emplea el deletreo mediante alfabetos estandarizados como Alfa, Bravo o Charlie.
              </p>
            </div>
          </details>

          {/* 6 */}
          <details className="topic-details">
            <summary>6. Tratamiento de clientes difíciles en atención telefónica</summary>
            <div className="topic-details__content">
              <p>
                La atención telefónica intensifica los perfiles difíciles, ya que el cliente no
                percibe el lenguaje corporal del profesional. Identificar el perfil permite adaptar
                la respuesta y reducir el conflicto.
              </p>

              <ul>
                <li>
                  <strong>Cliente engreído:</strong> mostrar interés y reforzar positivamente su
                  discurso sin exagerar.
                </li>
                <li>
                  <strong>Cliente grosero:</strong> mantener la cortesía y no entrar en provocaciones.
                </li>
                <li>
                  <strong>Cliente indeciso:</strong> ofrecer alternativas claras y guiar la decisión.
                </li>
                <li>
                  <strong>Cliente agresivo:</strong> escuchar activamente, no adoptar postura
                  defensiva y disculparse si procede.
                </li>
              </ul>
            </div>
          </details>

          {/* 7 */}
          <details className="topic-details">
            <summary>7. Comunicación telemática y redes sociales</summary>
            <div className="topic-details__content">
              <p>
                La comunicación empresarial ha trascendido el teléfono tradicional para incorporar
                canales telemáticos que exigen inmediatez y coherencia comunicativa.
              </p>

              <ul>
                <li>
                  <strong>SMS y mensajería instantánea:</strong> útiles para avisos rápidos y
                  económicos.
                </li>
                <li>
                  <strong>Videoconferencias:</strong> reducen costes, aunque pueden presentar
                  incidencias técnicas.
                </li>
                <li>
                  <strong>Redes sociales:</strong> espacios donde el cliente espera respuestas
                  ágiles, claras y eficaces.
                </li>
              </ul>

              <p>
                La figura del Community Manager adquiere un papel clave como responsable de la
                reputación digital, la gestión de reclamaciones y la dinamización de la comunidad.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🌐 Clave actual</h4>
                <p>
                  La rapidez en la respuesta es hoy una forma de cortesía profesional.
                </p>
              </div>
            </div>
          </details>

        </div>
      </section>
      <details className="topic-details">
  <summary>2. Estructura profesional de la llamada y gestión estratégica de la voz</summary>
  <div className="topic-details__content">
    <p>
      Para garantizar una comunicación profesional y eficaz en el ámbito telefónico, resulta
      imprescindible combinar una <strong>estructura rígida de la llamada</strong> con un
      <strong>manejo estratégico de la voz y de la expresión verbal</strong>. En ausencia de apoyo
      visual, estos elementos se convierten en los pilares que sostienen la relación entre la
      empresa y el cliente.
    </p>

    <h4>Elementos estructurales de la comunicación telefónica</h4>
    <p>
      Toda llamada profesional debe responder a una secuencia organizada que permita controlar
      el mensaje, evitar improvisaciones y asegurar que el objetivo de la comunicación se cumpla
      de manera clara y eficiente.
    </p>

    <ul>
      <li>
        <strong>Presentación:</strong> incluye el saludo inicial, la identificación de la empresa
        y del emisor, así como la exposición clara del motivo de la llamada.
      </li>
      <li>
        <strong>Desarrollo:</strong> fase central de la comunicación, destinada a la transmisión
        de información o a la indagación de las necesidades del interlocutor.
      </li>
      <li>
        <strong>Conclusión:</strong> resumen de lo acordado y confirmación del objetivo alcanzado
        durante la llamada.
      </li>
      <li>
        <strong>Despedida:</strong> cierre mediante agradecimiento y fórmula de cortesía final,
        reforzando una imagen profesional y respetuosa.
      </li>
    </ul>

    <p>
      Junto a esta estructura, la organización del entorno de trabajo es determinante. El
      profesional debe mantener la mesa despejada y el material necesario a mano, evitando
      interrupciones innecesarias y asegurando que el cliente no espere más de
      <strong>30 segundos</strong>. Al recibir llamadas, se recomienda atender al
      <strong>primer o segundo tono</strong>, como muestra de disponibilidad y eficiencia.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        La estructura no limita la comunicación: la protege y la hace comprensible en un canal
        tan frágil como el telefónico.
      </p>
    </div>

    <h4>La voz y la expresión verbal como ejes de la comunicación</h4>
    <p>
      En la comunicación telefónica, la voz se convierte en la principal herramienta de
      transmisión del mensaje. A través de ella se comunican no solo palabras, sino también
      emociones, actitudes y niveles de profesionalidad.
    </p>

    <ul>
      <li>
        <strong>Uso de la voz:</strong> debe mantenerse una intensidad intermedia y un tono
        natural, variando la entonación para transmitir interés y entusiasmo.
      </li>
      <li>
        <strong>Ritmo:</strong> es fundamental evitar el habla atropellada y los silencios
        prolongados que generan inseguridad en el interlocutor.
      </li>
      <li>
        <strong>Lenguaje:</strong> se debe huir del uso excesivo de tecnicismos y adaptar el
        mensaje al nivel de comprensión del cliente.
      </li>
    </ul>

    <h4>La quinesia como modulador invisible</h4>
    <p>
      Aunque el interlocutor no pueda ver físicamente al emisor, la <strong>quinesia</strong> —
      postura corporal y gestos— sigue siendo un elemento clave, ya que influye directamente
      en el tono, la claridad y la proyección de la voz.
    </p>

    <p>
      Una postura erguida facilita una mejor respiración y emisión vocal, mientras que el uso
      consciente de gestos ayuda a evitar una voz monótona o carente de intención comunicativa.
    </p>

    <h4>La técnica de la “sonrisa telefónica”</h4>
    <p>
      La denominada <strong>sonrisa telefónica</strong> consiste en sonreír físicamente mientras
      se mantiene la conversación. Esta técnica resulta especialmente eficaz en la atención al
      cliente por su capacidad para compensar la ausencia de contacto visual.
    </p>

    <ul>
      <li>
        <strong>Transmisión de confianza y profesionalismo:</strong> la sonrisa modifica la
        modulación de la voz y proyecta una actitud positiva que el receptor puede percibir
        auditivamente.
      </li>
      <li>
        <strong>Mejora de la proyección vocal:</strong> al influir en la quinesia, favorece un
        tono más claro, estable y agradable.
      </li>
      <li>
        <strong>Coherencia comunicativa:</strong> reduce las contradicciones entre lo que se
        dice y cómo se dice, evitando barreras verbales.
      </li>
    </ul>

    <p>
      En este sentido, la sonrisa actúa como un modulador emocional de la voz, aumentando la
      calidad percibida del servicio y facilitando una atención respetuosa, clara y motivadora.
    </p>

    <h4>Barreras en la comunicación telefónica</h4>
    <p>
      La falta de apoyo visual convierte a la comunicación telefónica en un proceso especialmente
      vulnerable a las interpretaciones erróneas. Las principales barreras se agrupan en tres
      categorías:
    </p>

    <ul>
      <li>
        <strong>Barreras ambientales o físicas:</strong> ruido, mala cobertura, distancias,
        problemas técnicos o desorganización del puesto de trabajo.
      </li>
      <li>
        <strong>Barreras verbales:</strong> habla excesivamente rápida, tecnicismos innecesarios
        o incoherencias entre el mensaje y el tono de voz.
      </li>
      <li>
        <strong>Barreras interpersonales:</strong> prejuicios, percepciones subjetivas y perfiles
        psicológicos complejos que dificultan la interacción.
      </li>
    </ul>

    <div className="callout callout--warning">
      <h4 className="callout-title">⚠️ Advertencia profesional</h4>
      <p>
        En atención telefónica, un tono inadecuado puede generar conflicto incluso cuando el
        contenido del mensaje es correcto.
      </p>
    </div>

    <h4>Gestión eficaz según el rol</h4>
    <ul>
      <li>
        <strong>Al llamar:</strong> identificarse de inmediato, preguntar si es un buen momento
        para hablar y adaptar el tono para transmitir entusiasmo.
      </li>
      <li>
        <strong>Al recibir:</strong> si la persona solicitada no está disponible, tomar datos
        precisos para devolver la llamada e informar siempre antes de poner al cliente en espera.
      </li>
    </ul>

    <p>
      En el manejo de centralitas, para evitar errores en datos críticos como nombres o correos,
      se recomienda el uso del <strong>deletreo mediante alfabetos estandarizados</strong>
      (Alfa, Bravo, Charlie).
    </p>

    <div className="callout callout--example">
      <h4 className="callout-title">🎧 Analogía didáctica</h4>
      <p>
        La comunicación telefónica es como construir un puente invisible: cada palabra, cada
        silencio y cada matiz de la voz actúan como los cables que sostienen la estructura.
        Una estructura clara y una sonrisa verbal permiten que la información cruce de forma
        segura, profesional y humana.
      </p>
    </div>

    <p>
      En definitiva, la quinesia y la sonrisa telefónica actúan como moduladores invisibles que
      determinan la calidad del mensaje percibido, convirtiéndose en competencias clave para una
      atención telefónica de excelencia.
    </p>
  </div>
</details>
{/* =========================
          SECCIÓN VÍDEOS
         ========================= */}
      <section className="topic-section">
        <h2>Recursos audiovisuales</h2>

        <div className="video-block">
          <div className="video-title">Atención telefónica profesional</div>
          <p className="video-meta muted">Objetivo: mejorar la atención telefónica mediante técnicas efectivas.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/7o6IH7hlj98"
              title="Vídeo 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="divider" />

        <div className="video-block">
          <div className="video-title">Curso completo de atención telefónica</div>
          <p className="video-meta muted">Aprendemos la atención telefónica desde los fundamentos hasta técnicas avanzadas.</p>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/bRPo5rtRfzE"
              title="Vídeo 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p>Esta fuente consiste en una guía estratégica sobre la atención telefónica profesional, subrayando que el primer contacto es determinante para la reputación de una empresa. El texto enfatiza la necesidad de proyectar seguridad y empatía mediante el uso de un lenguaje positivo y la técnica de la escucha activa. Se detallan diversos perfiles de clientes y las tácticas específicas para gestionar desde personas indecisas hasta usuarios agresivos sin perder la calma. Además, el autor resalta la importancia de la comunicación paraverbal, explicando cómo el tono de voz y la sonrisa telefónica influyen en la confianza del interlocutor. Finalmente, se recomienda el uso de protocolos de seguimiento, como correos de confirmación, para garantizar la fidelización y una resolución de problemas eficiente.</p>
        </div>
      </section>


      {/* ================= CIERRE ================= */}
      <section className="topic-section">
        <h2>Cierre conceptual</h2>
        <p>
          La atención telefónica puede entenderse como la construcción de un puente invisible entre
          la empresa y el cliente. Cada palabra, cada silencio y cada matiz de la voz actúan como
          los cables que sostienen ese puente. Cuando el mensaje es claro, estructurado y respetuoso,
          la información cruza con seguridad; cuando falla, la relación se resiente.
        </p>
      </section>

    </TopicLayout>
  );
};

export default Tema07;
