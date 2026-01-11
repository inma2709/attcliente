import TopicLayout from '../../components/TopicLayout';

const TemaProtocoloImagen = () => {
  return (
    <TopicLayout
      numero="XX"
      title="Protocolo empresarial e imagen personal"
      intro="El protocolo empresarial y la imagen personal constituyen herramientas estratégicas fundamentales en la atención al cliente. No se trata únicamente de normas externas o apariencia, sino de un sistema de comunicación profesional que influye directamente en la percepción, la confianza y la reputación corporativa. En este tema abordamos estos conceptos desde una perspectiva profunda, práctica y alineada con la cultura organizacional."
    >

      {/* ================= TEORÍA ================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Desarrollo teórico</h2>
          <span className="topic-section__meta">Nivel universitario · Conferencia profesional</span>
        </div>

        <div className="topic-accordion">

          {/* 1 */}
          <details className="topic-details">
            <summary>1. Normas de comportamiento empresarial</summary>
            <div className="topic-details__content">
              <p>
                Las normas de comportamiento empresarial constituyen el marco básico que regula la
                convivencia profesional y la relación con el cliente. No son reglas arbitrarias,
                sino acuerdos implícitos que permiten que la organización funcione de manera eficaz,
                respetuosa y coherente.
              </p>

              <p>
                En el contexto de la atención al cliente, el comportamiento del profesional actúa
                como un mensaje continuo. Cada gesto, cada respuesta y cada actitud comunica
                profesionalidad o, por el contrario, improvisación y falta de rigor.
              </p>

              <h4>Principios fundamentales</h4>
              <ul>
                <li>Puntualidad como forma de respeto y fiabilidad.</li>
                <li>Responsabilidad individual en la experiencia del cliente.</li>
                <li>Autocontrol emocional ante situaciones de presión o conflicto.</li>
                <li>Respeto jerárquico y horizontal dentro de la organización.</li>
                <li>Coherencia entre lo que se dice y lo que se hace.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  El cliente no evalúa procedimientos internos: evalúa comportamientos visibles.
                  La conducta profesional es la verdadera carta de presentación de la empresa.
                </p>
              </div>
            </div>
          </details>

          {/* 2 */}
          <details className="topic-details">
            <summary>2. Técnicas de presentación profesional</summary>
            <div className="topic-details__content">
              <p>
                La presentación profesional es uno de los momentos más determinantes en la relación
                con el cliente. En pocos segundos se genera una impresión inicial que condicionará
                el resto de la interacción.
              </p>

              <p>
                Presentarse correctamente implica claridad, seguridad y adecuación al contexto.
                No se trata de recitar un cargo, sino de situarse profesionalmente y generar confianza.
              </p>

              <h4>Elementos de una presentación eficaz</h4>
              <ul>
                <li>Nombre y función expresados con claridad.</li>
                <li>Lenguaje corporal abierto y coherente.</li>
                <li>Contacto visual natural y respetuoso.</li>
                <li>Saludo adecuado al contexto cultural y empresarial.</li>
              </ul>

              <h4>Presentaciones entre terceros</h4>
              <p>
                Presentar a otras personas exige conocer la jerarquía, el rol y el contexto. Una
                presentación incorrecta puede generar incomodidad o deteriorar la imagen profesional.
              </p>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Ejemplo práctico</h4>
                <p>
                  No es lo mismo presentar a un cliente externo que a un compañero interno. El orden,
                  el tono y la información aportada deben adaptarse siempre a la situación.
                </p>
              </div>
            </div>
          </details>

          {/* 3 */}
          <details className="topic-details">
            <summary>3. Tratamientos de cortesía en el entorno empresarial</summary>
            <div className="topic-details__content">
              <p>
                Los tratamientos de cortesía estructuran la relación profesional y marcan los límites
                del respeto. Lejos de ser una formalidad anticuada, son una herramienta de regulación
                social dentro de la empresa.
              </p>

              <p>
                El uso adecuado del lenguaje, los títulos y las fórmulas de cortesía contribuye a
                crear un clima de confianza y profesionalidad, especialmente en la atención al cliente.
              </p>

              <h4>Aspectos clave</h4>
              <ul>
                <li>Diferencia entre trato formal e informal.</li>
                <li>Uso consciente del “usted” y el “tú”.</li>
                <li>Cortesía verbal y escrita (emails, llamadas, atención presencial).</li>
                <li>Adaptación al perfil del cliente y a la cultura corporativa.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Atención</h4>
                <p>
                  Un exceso de confianza puede resultar tan perjudicial como una frialdad excesiva.
                  El equilibrio es la base de la cortesía profesional.
                </p>
              </div>
            </div>
          </details>

          {/* 4 */}
          <details className="topic-details">
            <summary>4. Imagen personal profesional</summary>
            <div className="topic-details__content">
              <p>
                La imagen personal es comunicación no verbal en estado puro. Antes de que el
                profesional hable, su imagen ya ha transmitido mensajes sobre orden, seriedad,
                cercanía o profesionalidad.
              </p>

              <p>
                En atención al cliente, la imagen no se evalúa desde el gusto personal, sino desde
                su adecuación al contexto profesional y a los valores de la empresa.
              </p>

              <h4>Componentes de la imagen profesional</h4>
              <ul>
                <li>Vestimenta adecuada al sector y al puesto.</li>
                <li>Higiene y cuidado personal.</li>
                <li>Postura corporal y lenguaje gestual.</li>
                <li>Imagen en entornos digitales y videollamadas.</li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">👔 Caso real</h4>
                <p>
                  Dos profesionales con el mismo conocimiento técnico pueden generar percepciones
                  radicalmente distintas en función de su imagen y actitud corporal.
                </p>
              </div>
            </div>
          </details>

          {/* 5 */}
          <details className="topic-details">
            <summary>5. Cultura corporativa y coherencia profesional</summary>
            <div className="topic-details__content">
              <p>
                La cultura corporativa define cómo se comporta, comunica y se presenta una empresa.
                El protocolo y la imagen personal deben alinearse con esos valores para garantizar
                coherencia y credibilidad.
              </p>

              <p>
                Cada trabajador es un representante visible de la organización. Su comportamiento
                y su imagen influyen directamente en la reputación corporativa.
              </p>

              <h4>Relación entre persona y organización</h4>
              <ul>
                <li>Valores corporativos reflejados en la conducta diaria.</li>
                <li>Normas internas como guía de actuación.</li>
                <li>Imagen personal como extensión de la marca.</li>
                <li>Coherencia entre discurso corporativo y práctica real.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🎯 Conclusión clave</h4>
                <p>
                  El protocolo no limita la personalidad: la canaliza para que represente de forma
                  coherente a la organización.
                </p>
              </div>
            </div>
          </details>
          <details className="topic-details">
  <summary>6. El uso del “usted” como herramienta profesional de comunicación</summary>
  <div className="topic-details__content">
    <p>
      El tratamiento de cortesía mediante el uso del <strong>“usted”</strong> no debe entenderse
      como una fórmula anticuada ni como una cuestión meramente lingüística. En el ámbito de la
      atención al cliente, el “usted” es una <strong>herramienta estratégica de comunicación</strong>
      que regula la distancia profesional, protege la relación y refuerza la imagen corporativa.
    </p>

    <p>
      Uno de los errores más frecuentes en el aprendizaje de la atención al cliente es pensar que
      el tratamiento formal depende del carácter personal o de la edad del profesional. En realidad,
      el uso del “usted” no habla de quién es el trabajador, sino de <strong>a quién representa</strong>.
    </p>

    <h4>El “usted” no es educación: es estrategia profesional</h4>
    <p>
      En contextos empresariales, el tratamiento formal cumple una función clara: establecer un marco
      de respeto, profesionalidad y neutralidad. Especialmente en situaciones sensibles —como
      reclamaciones, quejas o primeros contactos— el “usted” actúa como un amortiguador emocional que
      reduce la confrontación y transmite seriedad.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        El “usted” no se utiliza por educación personal, sino cuando el contexto exige
        distancia profesional y representación institucional.
      </p>
    </div>

    <h4>La regla de oro del tratamiento profesional</h4>
    <p>
      Para facilitar la toma de decisiones, el alumnado debe interiorizar una norma sencilla y eficaz:
    </p>

    <p><strong>
      Siempre que exista distancia profesional, jerárquica o institucional, se debe usar “usted”.
    </strong></p>

    <p>
      Esta distancia puede venir determinada por el rol (empresa–cliente), la jerarquía, el grado
      de confianza o la responsabilidad que se asume en la interacción.
    </p>

    <h4>El método del semáforo: cuándo usar “usted”</h4>

    <h5>🔴 Zona roja — “Usted” obligatorio</h5>
    <ul>
      <li>Primer contacto con un cliente.</li>
      <li>Atención al público en cualquier sector.</li>
      <li>Gestión de quejas, reclamaciones o conflictos.</li>
      <li>Trato con personas mayores.</li>
      <li>Contextos formales o institucionales.</li>
    </ul>

    <p>
      En estos casos, el tratamiento formal no se negocia. Es la base mínima de profesionalidad.
    </p>

    <h5>🟡 Zona amarilla — “Usted” inicial con posible transición</h5>
    <ul>
      <li>Clientes habituales.</li>
      <li>Relaciones comerciales continuadas.</li>
      <li>Entornos laborales colaborativos.</li>
    </ul>

    <p>
      En estas situaciones, el paso al tuteo debe ser consensuado y explícito. La fórmula correcta es:
    </p>

    <p><em>“Si le parece, podemos tutearnos.”</em></p>

    <h5>🟢 Zona verde — “Tú” permitido</h5>
    <ul>
      <li>Cuando el cliente lo propone expresamente.</li>
      <li>En culturas corporativas claramente informales.</li>
      <li>En relaciones profesionales consolidadas.</li>
    </ul>

    <div className="callout callout--warning">
      <h4 className="callout-title">⚠️ Advertencia profesional</h4>
      <p>
        El trabajador nunca debe imponer el tuteo. El cliente puede iniciar la informalidad;
        el profesional siempre debe validarla antes.
      </p>
    </div>

    <h4>La pregunta clave antes de hablar</h4>
    <p>
      Para interiorizar correctamente el uso del tratamiento formal, el alumnado debe aprender
      a hacerse siempre la misma pregunta:
    </p>

    <p><strong>
      “¿Estoy hablando como persona individual o como representante de la empresa?”
    </strong></p>

    <p>
      Si la respuesta es “como representante de la empresa”, el tratamiento adecuado será,
      en la mayoría de los casos, el “usted”.
    </p>

    <h4>Error frecuente y corrección didáctica</h4>
    <p>
      Es habitual que el alumnado exprese rechazo al uso del “usted” por considerarlo artificial
      o poco natural. En estos casos, es fundamental aclarar que:
    </p>

    <p><strong>
      El “usted” no define la personalidad del profesional, define el marco de la relación.
    </strong></p>

    <div className="callout callout--example">
      <h4 className="callout-title">🎭 Aplicación práctica</h4>
      <p>
        En ejercicios de role play, basta con modificar el contexto —no el diálogo— para que el
        alumnado perciba cómo cambia la relación cuando se emplea el tratamiento formal o informal.
      </p>
    </div>

    <p>
      Comprender y dominar el uso del “usted” es una de las competencias comunicativas que
      diferencian a un profesional improvisado de un profesional preparado para representar
      a una organización.
    </p>
  </div>
</details>


        </div>
      </section>
      <details className="topic-details">
  <summary>Espacio personal y espacio vital: respeto, límites y profesionalidad</summary>
  <div className="topic-details__content">
    <p>
      El <strong>espacio personal</strong> y el <strong>espacio vital</strong> constituyen dimensiones
      fundamentales de la comunicación humana y adquieren una relevancia especial en los contextos
      profesionales de atención al cliente. Respetarlos no es una cuestión de cortesía opcional,
      sino un requisito imprescindible para garantizar una interacción cómoda, segura y eficaz.
    </p>

    <p>
      En entornos empresariales, invadir el espacio del cliente puede generar incomodidad, rechazo
      o incluso conflicto, aunque el mensaje verbal sea correcto. Por el contrario, respetar estos
      límites transmite profesionalidad, control y sensibilidad interpersonal.
    </p>

    <h4>Concepto de espacio personal</h4>
    <p>
      El espacio personal hace referencia a la distancia física inmediata que cada individuo
      necesita mantener a su alrededor para sentirse cómodo en una interacción social. Esta
      distancia no es universal ni fija, sino que varía en función de factores culturales,
      emocionales, contextuales y relacionales.
    </p>

    <p>
      En la atención al cliente, el espacio personal actúa como una frontera invisible que protege
      la intimidad psicológica del interlocutor. Su invasión suele interpretarse como una actitud
      agresiva, dominante o excesivamente invasiva.
    </p>

    <h4>Concepto de espacio vital</h4>
    <p>
      El espacio vital se refiere al entorno físico más amplio en el que una persona desarrolla su
      actividad: mostradores, mesas, despachos, salas de espera o zonas de atención. Este espacio
      también comunica jerarquía, rol y nivel de control.
    </p>

    <p>
      Respetar el espacio vital implica no invadir áreas de trabajo ajenas, no manipular objetos
      personales del cliente y mantener una disposición espacial que favorezca la comunicación sin
      generar tensión.
    </p>

    <h4>Importancia del respeto al espacio en la atención al cliente</h4>
    <ul>
      <li>
        <strong>Genera confianza:</strong> el cliente percibe que se respetan sus límites físicos
        y psicológicos.
      </li>
      <li>
        <strong>Reduce el conflicto:</strong> evita reacciones defensivas o de rechazo.
      </li>
      <li>
        <strong>Refuerza la profesionalidad:</strong> transmite autocontrol y dominio de la
        situación.
      </li>
      <li>
        <strong>Mejora la comunicación:</strong> facilita la escucha activa y la receptividad del
        mensaje.
      </li>
    </ul>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        El respeto al espacio personal no acerca al cliente físicamente, pero sí lo acerca
        emocionalmente.
      </p>
    </div>

    <h4>Distancia y contexto profesional</h4>
    <p>
      En situaciones de atención presencial, la distancia adecuada depende del tipo de interacción:
      información, asesoramiento, reclamación o acompañamiento. En general, mantener una distancia
      suficiente para permitir el contacto visual sin invadir el espacio del cliente es la opción
      más segura.
    </p>

    <p>
      En situaciones de tensión o conflicto, ampliar ligeramente la distancia física contribuye a
      disminuir la carga emocional y facilita una comunicación más racional y controlada.
    </p>

    <h4>Errores frecuentes en el manejo del espacio</h4>
    <ul>
      <li>Acercarse en exceso para enfatizar un mensaje.</li>
      <li>Inclinarse sobre el cliente o su espacio de trabajo.</li>
      <li>Invadir el mostrador o manipular objetos personales.</li>
      <li>Reducir la distancia en situaciones de enfado o queja.</li>
    </ul>

    <div className="callout callout--warning">
      <h4 className="callout-title">⚠️ Advertencia profesional</h4>
      <p>
        Una invasión del espacio personal puede anular por completo un mensaje correcto y bien
        formulado.
      </p>
    </div>

    <h4>Relación con la comunicación no verbal</h4>
    <p>
      El respeto al espacio personal forma parte de la comunicación no verbal y debe coordinarse
      con otros elementos como la postura corporal, la orientación del cuerpo y la expresión
      facial. Una postura abierta, una orientación ligeramente lateral y una distancia adecuada
      refuerzan la sensación de respeto y disponibilidad.
    </p>

    <div className="callout callout--example">
      <h4 className="callout-title">🎯 Analogía didáctica</h4>
      <p>
        El espacio personal es como el volumen de una conversación: si se sube demasiado,
        incomoda; si se respeta el nivel adecuado, el mensaje fluye de manera natural.
      </p>
    </div>

    <p>
      En definitiva, dominar el respeto al espacio personal y vital es una competencia esencial
      para cualquier profesional de la atención al cliente, ya que permite construir relaciones
      basadas en la confianza, el respeto y la eficacia comunicativa.
    </p>
  </div>
</details>


    </TopicLayout>
  );
};

export default TemaProtocoloImagen;
