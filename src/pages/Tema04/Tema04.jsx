
import TopicLayout from '../../components/TopicLayout';

const Tema04 = () => {
  

  return (
    <>

      <TopicLayout
        numero="04"
        title="Calidad y oportunidad en el servicio al cliente"
        intro="Excelencia en el servicio, valor estratégico para la supervivencia del negocio, estándares de calidad y consecuencias reales de una mala atención."
        icon="⭐"
      />

      {/* ============================= */}
      {/* INTRODUCCIÓN: SERVICIO vs EXPERIENCIA */}
      {/* ============================= */}
      <section className="topic-section" style={{marginBottom: '2.2em'}}>
        <div className="topic-section__title">
          <h2>¿Servicio o experiencia del cliente?</h2>
        </div>
        <p>
          En la actualidad, la diferencia entre ofrecer un simple <strong>servicio</strong> y crear una verdadera <strong>experiencia del cliente</strong> es clave para la competitividad de cualquier organización. El servicio se centra en cumplir con lo prometido, pero la experiencia abarca emociones, percepciones y recuerdos que el cliente asocia a cada interacción. Comprender y gestionar esta diferencia es fundamental para lograr la excelencia y la fidelización.
        </p>
        <div className="video-block" style={{margin: '1.5em 0'}}>
          <div className="video-title">🎥 Conoce la diferencia entre SERVICIO y EXPERIENCIA del Cliente</div>
          <div className="video-meta">Video introductorio para reflexionar sobre el valor añadido de una experiencia memorable frente a un servicio básico.</div>
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/BvO2wWXEBnM"
              title="Conoce la diferencia entre SERVICIO y EXPERIENCIA del Cliente"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <figure className="media">
        <img
          src="/t4.png"
          alt="Mala atención al cliente"
        />
        <figcaption>
          Personalizar no es “ser simpático”: es <strong>adaptar</strong> mensaje, canal y solución al perfil del cliente.
        </figcaption>
      </figure>

   {/* =========================
    SECCIONES 0–4 · REORGANIZADAS CON <details>/<summary> (AMPLIADAS)
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>0–4. Marco del tema: excelencia, estrategia y consecuencias</h2>
    <span className="topic-section__meta">Apertura + fundamentos antes del bloque central</span>
  </div>

  <div className="topic-accordion">
    {/* =====================================================
        0. APERTURA
       ===================================================== */}
    <details className="topic-details" open>
      <summary>0. Por qué este tema es decisivo</summary>

      <div className="topic-details__content">
        <p>
          En atención al cliente, la calidad no es un “extra”: es una parte esencial del producto.
          El usuario puede tolerar un error puntual, pero rara vez perdona una atención fría, confusa o lenta.
          Por eso, este tema se centra en una idea práctica:
          <strong> la excelencia y la oportunidad sostienen la confianza</strong>, y la confianza sostiene el negocio.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧭 Objetivo de aprendizaje</h4>
          <p>
            Al terminar, podrás explicar qué es un servicio excelente, por qué es estratégico, cómo se estandariza
            y qué consecuencias tiene una mala atención en clientes, reputación, costes y clima interno.
          </p>
        </div>

        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Activación rápida</h4>
          <p>
            Piensa en una experiencia reciente como cliente (buena o mala). Responde mentalmente:
            <strong> ¿qué te hizo confiar o desconfiar?</strong> (tono, rapidez, solución, claridad, seguimiento).
          </p>
        </div>

        <div className="card card--muted">
          <h3>Mapa del tema (en una línea)</h3>
          <p className="muted">
            <strong>Excelencia</strong> (superar expectativas) → <strong>estrategia</strong> (diferenciar y fidelizar) →
            <strong>oportunidad</strong> (a tiempo) → <strong>impacto</strong> (lo que se pierde si falla).
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        1. EXCELENCIA
       ===================================================== */}
    <details className="topic-details">
      <summary>1. Concepto de excelencia en el servicio</summary>

      <div className="topic-details__content">
        <p>
          La excelencia en el servicio no consiste únicamente en cumplir lo prometido, sino en
          <strong> superar las expectativas del cliente</strong>. Un servicio excelente:
          anticipa necesidades, reduce fricciones, evita repeticiones y transmite control.
        </p>

        <p>
          En la práctica, “excelencia” significa que el cliente percibe tres cosas:
          <strong> facilidad</strong> (no le complicas), <strong>seguridad</strong> (das certezas) y
          <strong> respeto</strong> (cuidas el tono y el tiempo).
        </p>

        <div className="card card--muted">
          <h3>Cómo se ve la excelencia (conductas observables)</h3>
          <ul className="checklist">
            <li><strong>Proactividad:</strong> te adelantas a dudas (“Le indico también el siguiente paso”).</li>
            <li><strong>Coherencia:</strong> el mismo mensaje en todos los canales.</li>
            <li><strong>Resolución:</strong> reduces “pases” y no reinicias el caso.</li>
            <li><strong>Seguimiento:</strong> confirmas cierre (no dejas el caso “a medias”).</li>
          </ul>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Idea clave</h4>
          <p>
            La excelencia no es un acto puntual: es un <strong>hábito organizativo</strong> basado en mejora continua
            y orientación real al cliente.
          </p>
        </div>

        <div className="callout callout--example">
          <h4 className="callout-title">📌 Mini-ejemplo (misma incidencia, distinta experiencia)</h4>
          <p>
            <strong>Correcto pero pobre:</strong> “Lo revisaremos.” <br />
            <strong>Excelente:</strong> “Lo reviso ahora, le doy un plazo y se lo confirmo por email con número de caso.”
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        2. IMPORTANCIA ESTRATÉGICA
       ===================================================== */}
    <details className="topic-details">
      <summary>2. Importancia estratégica del servicio</summary>

      <div className="topic-details__content">
        <p>
          En mercados saturados, donde varias empresas ofrecen productos similares, el servicio se convierte
          en el <strong>principal factor de diferenciación</strong>. El cliente compara no solo precio:
          compara <strong>experiencia</strong>.
        </p>

        <div className="card card--muted">
          <h3>Por qué el servicio decide la compra</h3>
          <ul className="checklist">
            <li><strong>Reduce riesgo:</strong> si me atienden bien, “me siento seguro/a”.</li>
            <li><strong>Aumenta confianza:</strong> si cumplen y son claros, “vuelvo”.</li>
            <li><strong>Evita fuga:</strong> ante un fallo, “me quedo si lo gestionan bien”.</li>
          </ul>
        </div>

        <ul className="checklist">
          <li><strong>Diferenciador competitivo:</strong> el trato influye directamente en la compra.</li>
          <li><strong>Cercanía y confianza:</strong> sentirse atendido reduce la sensación de riesgo.</li>
          <li><strong>Fidelización:</strong> retener a un cliente cuesta menos que captar uno nuevo.</li>
        </ul>

        <div className="callout callout--insight">
          <h4 className="callout-title">💡 Enfoque estratégico</h4>
          <p>
            El cliente no es solo un comprador: es un <strong>activo gestionable</strong>. Cada experiencia positiva
            aumenta su valor (recompra, recomendación y tolerancia ante fallos).
          </p>
        </div>

        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Micro-actividad</h4>
          <p>
            Elige un negocio que uses (supermercado, tienda online, clínica, academia) y completa:
            <strong> “Sigo comprando ahí porque…”</strong> (rapidez, claridad, garantías, trato, solución).
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        3. SUPERVIVENCIA Y OPORTUNIDAD
       ===================================================== */}
    <details className="topic-details">
      <summary>3. Supervivencia del negocio y oportunidad</summary>

      <div className="topic-details__content">
        <p>
          La oportunidad es el <strong>momento adecuado</strong> para actuar. En servicio al cliente,
          una respuesta técnicamente correcta pierde valor si llega tarde.
          La rapidez es una señal directa de <strong>prioridad</strong> y <strong>control</strong>.
        </p>

        <p>
          Cuando la empresa tarda, el cliente interpreta que está solo o que nadie se hace cargo.
          Y si una organización no atiende una necesidad a tiempo, el cliente buscará a quien lo haga.
        </p>

        <div className="card card--muted">
          <h3>La oportunidad se ve en 3 señales</h3>
          <ul className="checklist">
            <li><strong>Rapidez:</strong> primera respuesta y tiempos realistas.</li>
            <li><strong>Claridad:</strong> pasos concretos (sin ambigüedad).</li>
            <li><strong>Continuidad:</strong> no “reiniciar” el caso cada vez.</li>
          </ul>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">📌 Regla práctica</h4>
          <p>
            Si no puedes resolver al momento, al menos ofrece <strong>horizonte</strong>:
            qué pasa, qué harás, cuándo y por qué canal confirmas.
          </p>
        </div>

        <div className="callout callout--example">
          <h4 className="callout-title">🗓️ Ejemplo de “horizonte” (frase modelo)</h4>
          <p>
            “Ahora mismo lo dejo registrado con este número de caso. En <strong>24 horas</strong> le confirmo por email
            el estado y, si hace falta, lo escalo a técnico. ¿Le viene bien ese canal?”
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        4. IMPACTO DE LA MALA ATENCIÓN
       ===================================================== */}
    <details className="topic-details">
      <summary>4. El impacto de la mala atención</summary>

      <div className="topic-details__content">
        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Dato clave (idea central)</h4>
          <p>
            El cliente no se va solo por el problema: se va por la <strong>experiencia</strong>.
            Cuando el trato es deficiente, la confianza cae y el cliente no quiere repetir la situación.
          </p>
        </div>

        <p>
          La mala atención rara vez se queda en privado. Los clientes comparten la experiencia,
          y en la era digital esa difusión se amplifica con reseñas y redes sociales. Cuando la empresa
          no gestiona bien una incidencia, pierde control de la narrativa y lo que llega al mercado suele ser
          un mensaje simple: “me trataron mal” o “no me dieron solución”.
        </p>

        <div className="card card--muted">
          <h3>Qué se rompe cuando la atención es mala</h3>
          <ul className="checklist">
            <li><strong>Confianza:</strong> “no me fío”.</li>
            <li><strong>Recompra:</strong> “no vuelvo”.</li>
            <li><strong>Recomendación:</strong> “no lo aconsejo”.</li>
            <li><strong>Conversión:</strong> futuros clientes desisten por miedo al riesgo.</li>
          </ul>
        </div>

        <div className="callout callout--example">
          <h4 className="callout-title">📣 Por qué esto importa</h4>
          <p>
            Una mala reseña no solo expresa un enfado: actúa como una advertencia para futuros compradores
            y reduce la conversión antes incluso de que el cliente contacte con la empresa.
          </p>
        </div>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Punto de control</h4>
          <p>
            Antes de cerrar una interacción, comprueba: <strong>¿el cliente sabe qué pasará y cuándo?</strong>
            Si la respuesta es “no”, hay alto riesgo de insatisfacción.
          </p>
        </div>
      </div>
    </details>
  </div>
</section>

      {/* =========================
          SECCIÓN 5 · ESTÁNDARES DE CALIDAD (AMPLIADA + REORGANIZADA)
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Estándares de calidad en el servicio</h2>
          <span className="topic-section__meta">Cómo garantizar un nivel constante y medible</span>
        </div>

        <p>
          La calidad no puede depender de “quién atiende hoy”. Para que el servicio sea excelente y consistente,
          debe ser <strong>estandarizado</strong>. Estandarizar no significa “robotizar”,
          sino definir un suelo de calidad: lo mínimo que siempre debe ocurrir, con independencia del canal o del agente.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Idea clave</h4>
          <p>
            Un estándar de calidad es una <strong>promesa operativa</strong>: asegura que el cliente recibe
            claridad, trato y solución dentro de unos tiempos y criterios definidos.
          </p>
        </div>

        <div className="topic-accordion">
          {/* =====================================================
              5.1 DIMENSIONES DE CALIDAD (LO QUE EL CLIENTE PERCIBE)
             ===================================================== */}
          <details className="topic-details" open>
            <summary>5.1 Dimensiones de calidad: lo que el cliente percibe</summary>

            <div className="topic-details__content">
              <p>
                El cliente no evalúa solo “si resolvimos”, sino <strong>cómo</strong>.
                Por eso, los estándares deben cubrir tanto la parte técnica como la parte humana.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem',
                marginTop: '1.5rem'
              }}>
                <div style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f0fdf4', borderLeft: '4px solid #10b981', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
                  <h4 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.05em', color: '#166534', fontWeight: '600' }}>Fiabilidad</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95em', lineHeight: '1.6' }}>Coherencia en la información y cumplimiento de lo prometido.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
                  <h4 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.05em', color: '#92400e', fontWeight: '600' }}>Rapidez y Oportunidad</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95em', lineHeight: '1.6' }}>Tiempos razonables y respuesta dentro del momento crítico.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#dbeafe', borderLeft: '4px solid #0ea5e9', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📝</div>
                  <h4 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.05em', color: '#0c4a6e', fontWeight: '600' }}>Claridad</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95em', lineHeight: '1.6' }}>Pasos comprensibles, sin tecnicismos innecesarios ni ambigüedad.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#fce7f3', borderLeft: '4px solid #ec4899', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤝</div>
                  <h4 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.05em', color: '#831843', fontWeight: '600' }}>Empatía y Respeto</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95em', lineHeight: '1.6' }}>Reconocer el impacto, cuidar el tono y evitar culpar al cliente.</p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f5f3ff', borderLeft: '4px solid #8b5cf6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔒</div>
                  <h4 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.05em', color: '#5b21b6', fontWeight: '600' }}>Seguridad</h4>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95em', lineHeight: '1.6' }}>Confirmar por escrito cuando procede, dejar constancia y dar plazos.</p>
                </div>
              </div>

              <div className="callout callout--example">
                <h4 className="callout-title">🎯 Ejemplo</h4>
                <p>
                  Dos respuestas pueden ser “correctas” técnicamente. Pero la que ofrece pasos claros, un plazo
                  y una confirmación final se percibe como profesional; la que deja dudas se percibe como “me están mareando”.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              5.2 MANUALES Y PROCEDIMIENTOS (CONSISTENCIA)
             ===================================================== */}
          <details className="topic-details">
            <summary>5.2 Manuales de procedimiento: consistencia sin improvisación</summary>

            <div className="topic-details__content">
              <p>
                Los <strong>manuales de procedimiento</strong> garantizan que todos los empleados actúen con criterios homogéneos,
                evitando respuestas contradictorias entre canales (presencial, teléfono, email, chat). Un manual bien hecho no es un “guion rígido”,
                es una guía operativa con márgenes de adaptación.
              </p>

              <p>
                Un procedimiento de calidad suele responder siempre a estas preguntas:
                <strong>qué ocurre</strong>, <strong>qué hacemos</strong>, <strong>quién lo hace</strong>,
                <strong>en cuánto tiempo</strong> y <strong>cómo confirmamos el cierre</strong>.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Señal de buen procedimiento</h4>
                <p>
                  Reduce repeticiones y “pases” innecesarios, y permite que el cliente no tenga que contar su caso cinco veces.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              5.3 PROTOCOLOS DE QUEJAS (ENFOQUE ISO 10002)
             ===================================================== */}
          <details className="topic-details">
            <summary>5.3 Gestión de quejas: principios de un servicio profesional</summary>

            <div className="topic-details__content">
              <p>
                Un estándar avanzado es tratar las quejas como un proceso formal, accesible y justo.
                Las directrices habituales en gestión de quejas (como las recogidas por marcos tipo ISO 10002)
                insisten en que el sistema debe ser fácil de usar y fiable.
              </p>

              <ul className="checklist">
                <li><strong>Accesibilidad:</strong> el cliente sabe dónde y cómo reclamar.</li>
                <li><strong>Respuesta diligente:</strong> acuse de recibo y avance del caso.</li>
                <li><strong>Objetividad:</strong> investigar antes de concluir.</li>
                <li><strong>Confidencialidad:</strong> proteger los datos del cliente.</li>
                <li><strong>Transparencia:</strong> explicar pasos y plazos.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Error típico</h4>
                <p>
                  “Ya le llamaremos” sin fecha ni canal. Un estándar de calidad siempre da un <strong>plazo</strong> y una <strong>confirmación</strong>.
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              5.4 INDICADORES (CÓMO MEDIR CALIDAD)
             ===================================================== */}
          <details className="topic-details">
            <summary>5.4 Indicadores de calidad: medir para mejorar</summary>

            <div className="topic-details__content">
              <p>
                Si no se mide, no se puede mejorar. La calidad en atención al cliente se evalúa con indicadores
                que muestran rapidez, resolución y satisfacción. Lo importante no es “tener muchos indicadores”,
                sino tener los que realmente guían decisiones.
              </p>

              <div className="card card--muted">
                <h3>Indicadores útiles</h3>
                <ul className="checklist">
                  <li><strong>Tiempo de primera respuesta:</strong> cuánto tardas en contestar.</li>
                  <li><strong>Tiempo de resolución:</strong> cuánto tarda el caso en cerrarse.</li>
                  <li><strong>Resolución en primer contacto (FCR):</strong> cuántos casos se resuelven sin escalado.</li>
                  <li><strong>Reaperturas:</strong> cuántos casos “se cierran” pero vuelven.</li>
                  <li><strong>Satisfacción del cliente (CSAT):</strong> valoración tras el servicio.</li>
                </ul>
              </div>

              <div className="callout callout--activity">
                <h4 className="callout-title">✅ Micro-actividad</h4>
                <p>
                  Elige un proceso típico (devolución, garantía o reclamación). Define 2 indicadores:
                  uno de rapidez y uno de calidad (por ejemplo, reaperturas o satisfacción).
                </p>
              </div>
            </div>
          </details>

          {/* =====================================================
              5.5 ESTÁNDAR DE COMUNICACIÓN (GUION FLEXIBLE)
             ===================================================== */}
          <details className="topic-details">
            <summary>5.5 Estándar de comunicación: estructura mínima en cualquier atención</summary>

            <div className="topic-details__content">
              <p>
                Para mantener calidad, conviene estandarizar una estructura breve para cualquier interacción,
                sin sonar mecánicos. Esta estructura funciona como “columna vertebral” del servicio.
              </p>

              <ul className="checklist">
                <li><strong>Acogida:</strong> saludo + disponibilidad (“Vamos a revisarlo”).</li>
                <li><strong>Exploración:</strong> preguntas + escucha (“Cuénteme qué ha ocurrido”).</li>
                <li><strong>Claridad:</strong> explicar el estado (“Ahora mismo está así…”).</li>
                <li><strong>Solución:</strong> opciones + recomendación (“Lo más rápido es…”).</li>
                <li><strong>Confirmación:</strong> resumen + acuerdo (“Entonces queda…”).</li>
                <li><strong>Cierre:</strong> seguimiento o canal (“Se lo envío por email / le confirmo mañana”).</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">📌 Regla práctica</h4>
                <p>
                  La calidad se nota cuando el cliente termina la interacción con <strong>claridad</strong> y <strong>horizonte</strong>:
                  sabe qué pasará y cuándo.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          SECCIÓN 6 · CONSECUENCIAS DE LA MALA ATENCIÓN (CENTRAL)
         ========================= */}
      {/* (Mantengo tu sección central tal cual para que no se pierda nada) */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>6. Consecuencias de la mala atención al cliente</h2>
          <span className="topic-section__meta">
            El trato como motor de fidelidad, reputación y rentabilidad
          </span>
        </div>

        <p>
          La experiencia del cliente está estrechamente ligada al éxito o al fracaso de una empresa.
          En muchos casos, tras la compra, la <strong>atención al cliente es el único contacto real</strong>
          que el usuario mantiene con la organización. Por eso, cuando la atención falla, el impacto no se limita
          a “un cliente enfadado”: afecta al negocio completo, a su reputación, a su eficiencia interna y al clima
          de trabajo.
        </p>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Hecho clave</h4>
          <p>
            La mayoría de clientes no se van solo por el problema: se van por <strong>cómo se gestionó</strong>.
            Un error puede ser perdonable; una mala gestión (fría, lenta o confusa) se convierte en abandono y,
            en muchos casos, en crítica pública.
          </p>
        </div>

        <div className="callout callout--insight">
          <h4 className="callout-title">🎯 Idea central del tema</h4>
          <p>
            La mala atención actúa como un <strong>efecto dominó</strong>: empieza en una conversación,
            pero termina impactando en ventas, captación, procesos internos, motivación del equipo y costes.
            Entender este efecto te ayuda a priorizar lo importante: <strong>la calidad y la oportunidad</strong>
            no son “detalles”, son supervivencia.
          </p>
        </div>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>1. Qué interpreta el cliente cuando la atención falla</summary>
            <div className="topic-details__content">
              <p>
                Cuando el cliente vive una mala atención, no solo evalúa “lo que pasó”, sino lo que ese trato
                <strong>significa</strong>: si la empresa es fiable, si respeta su tiempo, si se hace responsable
                y si le da importancia. En otras palabras, el cliente interpreta la experiencia como una señal de
                <strong>prioridad</strong> y <strong>justicia</strong>.
              </p>

              <p>
                Por eso, hay respuestas que “empeoran” el problema aunque técnicamente estén bien. Si el cliente
                siente indiferencia, falta de control o falta de respeto, su conclusión suele ser rápida:
                <strong>“no quiero volver a pasar por esto”</strong>.
              </p>

              <ul className="checklist">
                <li><strong>Si no se le responde:</strong> “No les importo”.</li>
                <li><strong>Si se le responde sin claridad:</strong> “No son profesionales / me están mareando”.</li>
                <li><strong>Si se le culpa:</strong> “Me están faltando al respeto”.</li>
                <li><strong>Si no hay solución ni plazos:</strong> “No tienen control / no es fiable”.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Clave didáctica</h4>
                <p>
                  El cliente recuerda menos los detalles técnicos y más el impacto emocional: si se sintió escuchado,
                  tratado con respeto y si tuvo una solución clara.
                </p>
              </div>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Mini-ejemplo</h4>
                <p>
                  Dos empresas cometen el mismo error. Una responde con “Lo sentimos” y sin plazos.
                  La otra dice: “Entiendo la molestia. Ya está escalado, este es su número de caso y este es el plazo”.
                  El error es el mismo, pero la experiencia no.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2. El efecto dominó: cómo una mala atención se convierte en un problema de negocio</summary>
            <div className="topic-details__content">
              <p>
                Una mala atención no se queda en “una conversación desagradable”. A partir de ahí se inicia una cadena
                de consecuencias que afecta a indicadores clave del negocio. El cliente deja de confiar, la empresa
                invierte más tiempo en apagar fuegos y la reputación se deteriora.
              </p>

              <div className="card card--muted">
                <h3>Impactos típicos</h3>
                <ul className="checklist">
                  <li><strong>Pérdida de fidelidad:</strong> el cliente reduce compras futuras o abandona.</li>
                  <li><strong>Daño reputacional:</strong> la experiencia se comparte (boca a boca / reseñas / redes).</li>
                  <li><strong>Aumento de costes:</strong> más reclamaciones, más escalados, más tiempo por caso.</li>
                  <li><strong>Desgaste interno:</strong> equipos saturados, peor clima laboral, más rotación.</li>
                </ul>
              </div>

              <p className="muted">
                En muchos casos, el coste real no es “perder una venta”, sino perder un cliente que podría haber comprado
                varias veces a lo largo del tiempo.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>3. Pérdida de clientes actuales y dificultad para captar nuevos</summary>
            <div className="topic-details__content">
              <p>
                La primera consecuencia de una atención deficiente es evidente: el cliente se va. Pero el alcance
                es mayor, porque el abandono afecta tanto a las ventas presentes como a la fidelización futura.
                Además, cuando el cliente comparte su experiencia, se convierte en una barrera para que otros
                usuarios se acerquen a la empresa.
              </p>

              <p>
                Una mala atención genera <strong>publicidad negativa</strong>. Y esa publicidad suele ser especialmente
                creíble porque nace de la experiencia directa. Por el contrario, una experiencia positiva puede
                transformar a un cliente en un prescriptor.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>4. Empresa más lenta: ineficiencia y pérdida de información valiosa</summary>
            <div className="topic-details__content">
              <p>
                Cuando la atención al cliente no está bien organizada, el servicio se vuelve lento: se repiten tareas,
                se pierden datos, las respuestas se contradicen y la resolución tarda más de lo necesario. Esa lentitud
                se percibe como <strong>falta de control</strong>.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">📊 Enfoque profesional</h4>
                <p>
                  Las reclamaciones no son “molestias”: son <strong>información gratuita</strong> para mejorar procesos,
                  productos y comunicación.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>5. Mal ambiente de trabajo: el coste humano del mal servicio</summary>
            <div className="topic-details__content">
              <p>
                La atención al cliente no es solo técnica: es emocional. Cuando el sistema no funciona, el equipo
                recibe presión constante, quejas repetidas y falta de recursos. Esto genera estrés y desgaste,
                y acaba afectando al trato con el cliente y a la convivencia interna.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>6. Errores que convierten una incidencia en un conflicto</summary>
            <div className="topic-details__content">
              <p>
                Muchas incidencias se convierten en conflictos por errores evitables en comunicación. El problema
                no siempre es el fallo inicial, sino cómo se responde.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>7. Pérdidas económicas: cuando el mal servicio se convierte en coste</summary>
            <div className="topic-details__content">
              <p>
                Todas las consecuencias anteriores desembocan en un impacto económico: clientes perdidos, mala reputación,
                ineficiencia interna y personal desmotivado.
              </p>
            </div>
          </details>

          <details className="topic-details">
            <summary>8. Recuperación del cliente: qué sí funciona</summary>
            <div className="topic-details__content">
              <p>
                Cuando hay un fallo, una buena atención puede transformar la experiencia: el cliente no espera
                perfección, espera <strong>responsabilidad</strong>.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🛠️ Protocolo eficaz</h4>
                <p>
                  <strong>Claridad + empatía + solución + confirmación + seguimiento</strong>.
                </p>
              </div>
            </div>
          </details>
        </div>

        <div className="callout callout--insight">
          <h4 className="callout-title">🎯 Cierre didáctico</h4>
          <p>
            Invertir en atención al cliente no es un gasto, sino una estrategia de
            <strong>protección del negocio</strong>. Un buen trato previene conflictos,
            fideliza clientes y fortalece la reputación de la empresa.
          </p>
        </div>
      </section>
       

      {/* =========================
          CIERRE · ANALOGÍA DIDÁCTICA
         ========================= */}
      <section className="topic-section">
        <div className="callout callout--insight">
          <h4 className="callout-title">⚓ Analogía didáctica</h4>
          <p>
            El servicio al cliente es como el <strong>ancla de un barco</strong>.
            En aguas tranquilas, cualquier ancla parece suficiente; pero en un mercado
            competitivo, solo una ancla sólida —calidad, oportunidad y excelencia—
            evita que la empresa sea arrastrada por la competencia.
          </p>
        </div>
      </section>

        {/* =============================== */}
        {/* RESUMEN FINAL Y ACTIVIDADES */}
        {/* =============================== */}
        <section className="topic-section">
          <div className="topic-section__title">
            <h2>Resumen del Tema 4: Calidad y Oportunidad en el Servicio al Cliente</h2>
          </div>
          <div className="card card--muted">
            <h3>🔎 Síntesis</h3>
            <ul style={{marginBottom: '1.2em'}}>
              <li>La <strong>calidad en el servicio</strong> es un factor estratégico que sostiene la confianza y la fidelidad del cliente.</li>
              <li>El cliente no solo evalúa el resultado, sino <strong>cómo</strong> fue atendido: rapidez, claridad, empatía y seguridad son dimensiones clave.</li>
              <li>La <strong>excelencia</strong> se basa en superar expectativas, estandarizar procesos y medir para mejorar.</li>
              <li>Una mala atención genera un efecto dominó: pérdida de clientes, reputación y eficiencia interna.</li>
              <li>Invertir en calidad y oportunidad no es un coste, sino una <strong>protección del negocio</strong> y una ventaja competitiva.</li>
            </ul>
          </div>

          <div className="callout callout--activity">
            <h4 className="callout-title">📝 Actividad 1: Reflexión inicial</h4>
            <p>
              Piensa en una experiencia reciente como cliente en la que sentiste que la atención fue excelente o deficiente. ¿Qué dimensión de calidad (fiabilidad, rapidez, claridad, empatía, seguridad) fue la más determinante en tu percepción? Explica por qué.
            </p>
          </div>

          <div className="callout callout--activity">
            <h4 className="callout-title">🎨 Actividad 2: Infografía Canva</h4>
            <p>
              En grupos, diseñad una infografía en Canva que resuma las <strong>5 dimensiones de calidad</strong> en la atención al cliente. Incluid ejemplos reales y consejos prácticos para cada dimensión.
            </p>
          </div>

          <div className="callout callout--activity">
            <h4 className="callout-title">🤝 Actividad 3: Role-play de atención</h4>
            <p>
              Por parejas, simulad una situación de atención al cliente (por ejemplo, una queja o una solicitud de información). Uno actúa como cliente y otro como agente. El objetivo es aplicar los estándares de calidad y recibir feedback del grupo sobre las dimensiones observadas.
            </p>
          </div>

          <div className="callout callout--activity">
            <h4 className="callout-title">💬 Actividad 4: Debate guiado</h4>
            <p>
              ¿Crees que la calidad en el servicio es más importante que el precio en la decisión de compra? Argumenta tu postura con ejemplos y datos. El profesor moderará el debate para asegurar la participación de todos.
            </p>
          </div>
        </section>
    </>
  );
};

export default Tema04;
