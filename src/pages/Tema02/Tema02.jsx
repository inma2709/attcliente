// src/pages/Tema02/Tema02.jsx - Versión reorganizada y ampliada
import TopicLayout from "../../components/TopicLayout";
import Quiz from "../../components/Quiz";



const quizInformarComunicar = [
  {
    id: "q1",
    question: "¿Cuál es la diferencia fundamental entre informar y comunicar?",
    options: [
      "Informar siempre implica diálogo, comunicar no.",
      "Informar es más lento que comunicar.",
      "Comunicar implica feedback; informar no lo requiere.",
      "No existe diferencia real entre ambos conceptos.",
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Comunicar implica comprobar comprensión mediante feedback o retroalimentación.",
    feedbackBad: "La clave es el feedback: sin confirmación de comprensión, solo hay transmisión de datos.",
  },
  {
    id: "q2",
    question: "¿En cuál de estas situaciones suele bastar con informar?",
    options: [
      "Resolver una queja de un cliente muy molesto.",
      "Implementar un nuevo procedimiento de trabajo.",
      "Comunicar un cambio puntual de horario.",
      "Gestionar un conflicto entre departamentos.",
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Es un dato objetivo, sin necesidad de negociación.",
    feedbackBad: "Las demás situaciones requieren comunicación bidireccional y verificación de comprensión.",
  },
  {
    id: "q3",
    question: "¿Por qué preguntar “¿Alguna duda?” no garantiza una buena comunicación?",
    options: [
      "Porque es una pregunta demasiado técnica.",
      "Porque no permite verificar comprensión real.",
      "Porque genera exceso de información.",
      "Porque siempre provoca conflictos.",
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. No obliga al receptor a demostrar que ha entendido.",
    feedbackBad: "El problema es que no verifica comprensión ni aplicación práctica.",
  },
  {
    id: "q4",
    question: "En atención al cliente, ¿por qué la comunicación es preferible a la simple información?",
    options: [
      "Porque siempre requiere más tiempo.",
      "Porque permite empatía, feedback y adaptación al cliente.",
      "Porque evita el uso de protocolos.",
      "Porque elimina la necesidad de formación.",
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. Ajusta mensaje y solución al cliente, especialmente si hay emoción o conflicto.",
    feedbackBad: "En atención al cliente la empatía y el feedback son esenciales para resolver bien.",
  },
  {
    id: "q5",
    question: "¿Qué convierte al feedback en retroalimentación?",
    options: [
      "Que sea inmediato.",
      "Que sea obligatorio.",
      "Que se utilice para ajustar y mejorar la comunicación.",
      "Que se realice por escrito.",
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Retroalimentación = feedback aplicado para mejorar la acción posterior.",
    feedbackBad: "No basta con recibir feedback: hay que usarlo para ajustar y mejorar.",
  },
];


export default function Tema02() {
  return (
    <TopicLayout
      title="Tema 2. Fundamentos y flujos de la comunicación empresarial"
        intro="Diferencias clave entre información y comunicación, flujos internos y externos, canales adecuados y barreras comunes."
        icon="💬"
      >
      {/* =========================
          HERO DEL TEMA
         ========================= */}
      <section className="hero">
        <div>
        
          <p>
            En este tema veremos por qué la comunicación no es “pasar información”, sino un
            <strong> activo estratégico</strong> que sostiene la coordinación interna, la atención al cliente
            y la imagen corporativa. Aprenderás a distinguir comunicación e información, a identificar
            flujos internos/externos, a elegir canales adecuados y a detectar barreras (y cómo reducirlas).
          </p>

          <div className="learning-objectives" style={{ marginTop: "1rem" }}>
            <h3>Objetivos de aprendizaje</h3>
            <ul>
              <li>Distinguir <strong>información</strong> y <strong>comunicación</strong> (y el papel del feedback).</li>
              <li>Identificar los <strong>flujos</strong> internos (descendente, ascendente, horizontal) y su utilidad.</li>
              <li>Diferenciar <strong>comunicación formal</strong> e <strong>informal</strong> y gestionar el rumor.</li>
              <li>Seleccionar <strong>canales</strong> adecuados (presencial, telefónico, digital) según el objetivo.</li>
              <li>Reconocer <strong>barreras</strong> y aplicar habilidades: empatía, escucha activa y asertividad.</li>
            </ul>
          </div>
        </div>

        <figure className="media">
          <img
            src="/t2.png"
            alt="Equipo colaborando en un entorno profesional: comunicación empresarial"
          />
          <figcaption>
            La comunicación es el “sistema nervioso” de la empresa: conecta personas, procesos y clientes.
          </figcaption>
        </figure>
      </section>
      {/* =========================
    SECCIÓN · INFOGRAFÍA (Análisis guiado y ampliado)
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>📊 Infografía: Análisis de comunicación empresarial</h2>
    
  </div>
 


  <div className="divider" />

  <div className="topic-accordion">
    <details className="topic-details" open>
      <summary>1) Bloque: Principios fundamentales</summary>
      <div className="topic-details__content">
        <p>
          Antes de emitir el primer mensaje, la estrategia debe sostenerse en pilares éticos y de coherencia. La
          infografía propone que sin estos principios, la comunicación se vuelve frágil y pierde credibilidad.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Idea clave</h4>
          <p>
            Una comunicación eficaz no es solo “decir cosas bien”, sino <strong>gestionar confianza</strong> en el tiempo.
          </p>
        </div>

        <ul>
          <li>
            <strong>Honestidad (“La verdad os hará invencibles”):</strong> la confianza es el activo más valioso.
            La eficacia no se basa en “maquillar” datos, sino en veracidad y rigor, construyendo reputación
            a largo plazo.
          </li>
          <li>
            <strong>Empatía y adaptación (“El receptor es el protagonista”):</strong> para ser escuchado hay que
            saber escuchar. El éxito depende menos de lo que la empresa quiere decir y más de cómo adapta
            lenguaje y tono a las necesidades del receptor.
          </li>
          <li>
            <strong>Unicidad y coherencia (“Una empresa, una sola voz”):</strong> en un entorno multicanal,
            la comunicación debe ser coordinada y consistente. Mensajes contradictorios entre departamentos
            destruyen eficacia y credibilidad.
          </li>
          <li>
            <strong>Conexión emocional (“Gana quien llega al corazón”):</strong> lo puramente racional se olvida rápido.
            Los mensajes que conectan con emociones se recuerdan más y generan fidelidad.
          </li>
        </ul>
      </div>
    </details>

    <details className="topic-details">
      <summary>2) Nodo central: el flujo de información</summary>
      <div className="topic-details__content">
        <p>
          El centro del gráfico representa una transición clave: de un modelo tradicional unidireccional
          (un <strong>megáfono</strong> que emite mensajes) hacia una red compleja de interconexiones multimedia.
          Esto simboliza la evolución hacia un ecosistema donde la información circula en múltiples direcciones
          (personas, dispositivos, redes sociales y canales digitales).
        </p>

        <div className="callout callout--example">
          <h4 className="callout-title">📌 Lectura práctica</h4>
          <p>
            Ya no basta con “lanzar un mensaje”: hoy la empresa debe <strong>escuchar, responder y ajustar</strong> en
            tiempo real, porque el público también comunica y condiciona la reputación.
          </p>
        </div>
      </div>
    </details>

   <details className="topic-details">
  <summary>3) Bloque: áreas de actuación clave</summary>
  <div className="topic-details__content">
    <p>
      Esta sección describe dónde se materializa la estrategia: quién comunica, con qué papel y en qué escenarios.
      La infografía remarca que la comunicación se ejecuta en liderazgo, equipo, entorno digital y gestión de crisis.
    </p>
     <p>
      Para comprender la dinámica de una organización es imprescindible no confundir los conceptos de
      <strong> información</strong> y <strong>comunicación</strong>. Aunque están estrechamente relacionados,
      cumplen funciones distintas y tienen consecuencias muy diferentes en el entorno profesional.
    </p> 

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        Mientras que <strong>informar</strong> transmite datos, <strong>comunicar</strong> construye
        relaciones. La diferencia fundamental entre ambos procesos es la existencia —o no— de
        <strong> feedback</strong>.
      </p>
    </div>

    <h4>1. Definición y alcance de la información</h4>
    <p>
      <strong>Informar</strong> consiste en transmitir una noticia o un informe con el objetivo de ampliar
      el conocimiento del receptor sobre un asunto concreto. Se trata de datos organizados que reducen
      la incertidumbre, pero su característica principal es la <strong>unidireccionalidad</strong>:
      el flujo va del emisor al receptor sin necesidad de respuesta.
    </p>

    {/* ✅ Tabla resumen (para estudio y aplicación) */}
    <table className="table">
      <thead>
        <tr>
          <th>Área clave</th>
          <th>Objetivo</th>
          <th>Qué hace bien</th>
          <th>Indicadores de que funciona</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Liderazgo visible</strong>
          </td>
          <td>
            Dar dirección, coherencia y credibilidad (la “voz” de la empresa).
          </td>
          <td>
            Comunica prioridades, explica decisiones, escucha y marca el tono cultural.
          </td>
          <td>
            Menos rumores, claridad sobre objetivos, confianza en decisiones, alineación de equipos.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Comunicación interna</strong>
          </td>
          <td>
            Alinear al equipo y convertir a la plantilla en embajadora de la marca.
          </td>
          <td>
            Comparte información útil, reconoce logros, facilita coordinación y feedback ascendente.
          </td>
          <td>
            Menos errores/retrabajo, mejor clima, respuestas coherentes al cliente, participación en mejoras.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Interactividad digital</strong>
          </td>
          <td>
            Pasar del monólogo a la conversación y gestionar reputación en tiempo real.
          </td>
          <td>
            Responde con tono humano, mantiene consistencia, gestiona críticas y aprende del feedback.
          </td>
          <td>
            Tiempo de respuesta bajo, engagement sano, reducción de quejas repetidas, reputación estable.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Gestión de crisis</strong>
          </td>
          <td>
            Proteger confianza y minimizar impacto (operativo y reputacional).
          </td>
          <td>
            Actúa rápido, comunica con transparencia, asume responsabilidad y ofrece soluciones claras.
          </td>
          <td>
            Menos escalado mediático, mensajes consistentes, recuperación de confianza, aprendizaje posterior.
          </td>
        </tr>
      </tbody>
    </table>

 <table className="table">
  <thead>
    <tr>
      <th>Área clave</th>
      <th>En qué consiste</th>
      <th>Impacto en la empresa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>1. Liderazgo visible</strong><br />
        <span className="muted">“El líder lidera la comunicación”</span>
      </td>
      <td>
        La comunicación estratégica no es completamente delegable. La dirección debe
        asumir el papel de portavoz, explicar decisiones clave y encarnar de forma
        coherente los valores de la marca.
      </td>
      <td>
        Genera confianza, coherencia y credibilidad tanto interna como externamente.
      </td>
    </tr>

    <tr>
      <td>
        <strong>2. Comunicación interna</strong><br />
        <span className="muted">“Los empleados: los mejores portavoces”</span>
      </td>
      <td>
        Una plantilla bien informada, escuchada y alineada transmite mensajes más
        claros y coherentes al exterior.
      </td>
      <td>
        Mejora el clima laboral y refuerza la imagen corporativa hacia clientes y
        usuarios.
      </td>
    </tr>

    <tr>
      <td>
        <strong>3. Interactividad digital</strong><br />
        <span className="muted">“Del monólogo al diálogo online”</span>
      </td>
      <td>
        En entornos digitales ya no basta con emitir mensajes: es necesario escuchar,
        responder con tono humano, mantener coherencia y aceptar el feedback.
      </td>
      <td>
        Favorece la reputación online y la relación de confianza con el público.
      </td>
    </tr>

    <tr>
      <td>
        <strong>4. Resiliencia estratégica</strong><br />
        <span className="muted">“Cada crisis genera una oportunidad”</span>
      </td>
      <td>
        En situaciones críticas, la comunicación exige rapidez, honestidad y una sola
        voz para evitar contradicciones.
      </td>
      <td>
        Una crisis bien gestionada puede reforzar la confianza y la reputación de la
        empresa.
      </td>
    </tr>
  </tbody>
</table>



    <div className="callout callout--warning">
      <h4 className="callout-title">⚠️ Punto crítico</h4>
      <p>
        Si hay incoherencia entre lo que la empresa <strong>dice</strong> (externo) y lo que <strong>vive</strong>
        (interno), el público lo percibe y la reputación se resiente.
      </p>
    </div>
  </div>
</details>


    <details className="topic-details">
      <summary>Conclusión</summary>
      <div className="topic-details__content">
        <p>
          La infografía propone que la comunicación moderna no es solo una herramienta de marketing: es una
          <strong> filosofía de gestión</strong>. Se apoya en la verdad, la escucha activa, la coherencia y la participación
          humana en múltiples canales.
        </p>

        <div className="callout callout--case">
          <h4 className="callout-title">🎤 Cierre recomendado</h4>
          <p>
            “Comunicar hoy es gestionar confianza: decir la verdad, escuchar de forma activa, mantener una sola voz
            y convertir cada interacción —interna o externa— en una oportunidad de construir reputación.”
          </p>
        </div>
      </div>
    </details>
  </div>
</section>

    {/* =========================
    SECCIÓN · IMPACTO (Cuadro + tablero más atractivo)
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>📈 Impacto de la comunicación en los resultados empresariales</h2>
    
  </div>

  {/* ✅ CUADRO PRINCIPAL (más “visual” y escaneable) */}
  <div className="card card--muted">
    <details className="topic-details">
   <summary>🧾 ¿Cuánto cuesta comunicar mal y qué se gana comunicando bien</summary>

   

    <table className="table">
      <thead>
        <tr>
          <th>Indicador</th>
          <th>Dato clave</th>
          <th>Traducción en empresa</th>
          <th>Ejemplo práctico</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Coste anual (grandes empresas)</strong>
            <div className="muted">Pérdidas por mala comunicación</div>
          </td>
          <td>
            <strong>💰 $62.4M</strong>
          </td>
          <td>
            Retrabajo + errores + decisiones tardías → caída de eficiencia y reputación interna.
          </td>
          <td>
            Instrucciones ambiguas generan tareas repetidas y reclamaciones que consumen horas de equipo.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Tiempo perdido por empleado</strong>
            <div className="muted">Ineficiencia semanal</div>
          </td>
          <td>
            <strong>⏱️ 21 horas/semana</strong>
          </td>
          <td>
            Mensajes duplicados, reuniones innecesarias y aclaraciones constantes → productividad baja.
          </td>
          <td>
            “Te lo paso por mail” + “te lo digo por WhatsApp” + “se comentó en reunión” → nadie sabe la versión final.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Retención de talento</strong>
            <div className="muted">Clima y compromiso</div>
          </td>
          <td>
            <strong>📊 5x</strong>
          </td>
          <td>
            Comunicación clara y reconocimiento → menos rotación y más alineación cultural.
          </td>
          <td>
            Objetivos claros + feedback frecuente → menos frustración y menos “apagafuegos”.
          </td>
        </tr>

        <tr>
          <td>
            <strong>Capacidad de adaptación</strong>
            <div className="muted">Agilidad ante cambios</div>
          </td>
          <td>
            <strong>🚀 3.5x</strong>
          </td>
          <td>
            Cambios se implementan antes y mejor → menos resistencia, más rapidez operativa.
          </td>
          <td>
            Cuando cambia una política, todos reciben el “qué, por qué y cómo” + canal de dudas → se aplica bien.
          </td>
        </tr>
      </tbody>
    </table>
      </details>
    <div className="divider" />

    {/* ✅ INSIGHT EN FORMATO “PANEL” (más atractivo visualmente) */}
    <div className="callout callout--insight">
      <h4 className="callout-title">💡 Insight empresarial</h4>
      <p style={{ marginBottom: ".75rem" }}>
        Invertir en comunicación estratégica no es “gastar en mensajes”: es <strong>reducir pérdidas</strong>
        y <strong>crear ventajas competitivas</strong>. La mejora se nota en tres frentes:
      </p>

      <ul className="checklist" style={{ marginTop: 0 }}>
        <li><strong>Productividad:</strong> menos retrabajo, menos errores y decisiones más rápidas.</li>
        <li><strong>Personas:</strong> menor rotación, más compromiso y mejor clima.</li>
        <li><strong>Adaptación:</strong> cambios mejor implantados y reputación más estable.</li>
      </ul>
    </div>
  </div>

  {/* ✅ MINI TABLERO “FLASH” (opcional pero queda muy pro) */}
  <div className="divider" />

  <div className="card">
    <h3 style={{ marginTop: 0 }}>⚡ Tablero flash </h3>
    <p className="muted" style={{ marginTop: ".25rem" }}>
      Fórmula rápida: <strong>Comunicación mala</strong> = coste + caos · <strong>Comunicación buena</strong> = foco + confianza.
    </p>

    <table className="table">
      <thead>
        <tr>
          <th>Si la comunicación falla…</th>
          <th>Lo que suele pasar</th>
          <th>La corrección inmediata</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mensajes contradictorios</strong></td>
          <td>El cliente recibe versiones distintas y suben las quejas.</td>
          <td>Unificar “una sola voz”: canal oficial + actualización visible.</td>
        </tr>
        <tr>
          <td><strong>Sin feedback</strong></td>
          <td>Se “informó”, pero no se entiende ni se aplica.</td>
          <td>Cerrar con verificación: “¿Qué harías tú ahora?”</td>
        </tr>
        <tr>
          <td><strong>Canal inadecuado</strong></td>
          <td>Confusión (email largo para algo urgente, o WhatsApp para algo formal).</td>
          <td>Elegir canal por objetivo: urgencia / registro / confianza emocional.</td>
        </tr>
      </tbody>
    </table>
        </div>
      </section>
 

 

 {/* =========================
    SECCIÓN NUEVA: MARCO CONCEPTUAL AMPLIADO
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>🧠 Marco conceptual fundamental: Información vs. Comunicación</h2>
    <span className="topic-section__meta">Diferencias críticas y aplicación práctica</span>
  </div>

  <div className="topic-accordion">
    {/* =========================
        BLOQUE 1: COMPARATIVA CLAVE
       ========================= */}
    <details className="topic-details" open>
    <summary>📌 1) Diferencias esenciales: Información vs. Comunicación</summary>

    <div className="topic-details__content">
      {/* Intro + regla rápida */}
      <div className="card">
        <p className="muted">
          En empresa no basta con “decir algo”. Hay que distinguir entre{" "}
          <strong>informar</strong> (transmitir datos) y <strong>comunicar</strong>{" "}
          (intercambiar y verificar comprensión). La diferencia decisiva es el{" "}
          <strong>feedback</strong>.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🔑 Regla práctica</h4>
          <p>
            Si <strong>no</strong> necesitas comprobar comprensión → suele bastar con{" "}
            <strong>información</strong>. Si hay impacto, dudas, emoción o interpretación →{" "}
            necesitas <strong>comunicación</strong> con feedback.
          </p>
        </div>

        <div className="divider" />

        {/* Tabla comparativa (compacta y clara) */}
        <h4>📊 Comparativa rápida</h4>
       <table className="table">
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Informar</th>
      <th>Comunicar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Finalidad</strong></td>
      <td>Transmitir datos o noticias para ampliar el conocimiento.</td>
      <td>Intercambiar ideas, pensamientos o sentimientos.</td>
    </tr>
    <tr>
      <td><strong>Dirección del proceso</strong></td>
      <td>Unidireccional (del emisor al receptor).</td>
      <td>Bidireccional (ida y vuelta).</td>
    </tr>
    <tr>
      <td><strong>Feedback</strong></td>
      <td>No es necesario para que el proceso se complete.</td>
      <td>Es imprescindible para confirmar la comprensión.</td>
    </tr>
    <tr>
      <td><strong>Relación con el receptor</strong></td>
      <td>Pasiva: el receptor solo recibe la información.</td>
      <td>Activa: el receptor interpreta, responde y participa.</td>
    </tr>
    <tr>
      <td><strong>Ejemplos en la empresa</strong></td>
      <td>Circular informativa, anuncio, tablón de avisos.</td>
      <td>Reunión, llamada telefónica, correo con respuesta.</td>
    </tr>
    <tr>
      <td><strong>Riesgo principal</strong></td>
      <td>Que el mensaje no se comprenda correctamente.</td>
      <td>Que no se verifique la comprensión si falla el feedback.</td>
    </tr>
    <tr>
      <td><strong>Resultado</strong></td>
      <td>Aumenta el conocimiento.</td>
      <td>Construye relaciones y alineación organizativa.</td>
    </tr>
  </tbody>
</table>


    <h5>Ejemplos de información en la empresa</h5>
    <ul>
      <li>Leer una circular en el tablón de anuncios.</li>
      <li>Recibir un correo de RR. HH. con una fecha concreta (por ejemplo, reconocimiento médico).</li>
      <li>Ver un anuncio en televisión o escuchar las noticias en la radio.</li>
    </ul>

    <p className="muted">
      En todos estos casos, el proceso se considera completo cuando el receptor accede al dato, sin que
      sea necesario ningún intercambio posterior.
    </p>


        <div className="divider" />

        {/* Tarjetas en 2 columnas (si no existe el grid, te dejo CSS abajo) */}
        <div className="compare-grid">
          {/* =========================
              TARJETA: INFORMACIÓN
             ========================= */}
          <div className="card card--muted">
            <h3>📤 INFORMACIÓN</h3>
            <p className="muted">Transmisión unidireccional</p>

            <div className="divider" />

            <h4>✅ Características</h4>
            <ul className="checklist">
              <li>Flujo lineal: emisor → receptor.</li>
              <li>No se espera respuesta inmediata.</li>
              <li>Contenido estandarizado y replicable.</li>
              <li>Se mide por alcance / lecturas / visualizaciones.</li>
            </ul>

            <div className="divider" />

            <h4>🧩 Cuándo usar información</h4>
            <ul className="checklist">
              <li>
                <strong>Procedimientos estándar:</strong> manuales, protocolos, normativas.
              </li>
              <li>
                <strong>Comunicados masivos:</strong> horarios, fechas, cambios generales.
              </li>
              <li>
                <strong>Datos técnicos:</strong> precios, características, especificaciones.
              </li>
              <li>
                <strong>Formación básica:</strong> tutoriales, documentación.
              </li>
            </ul>

            <div className="divider" />

            <div className="callout callout--example">
              <h4 className="callout-title">💼 Ejemplo</h4>
              <p>
                <strong>Email de RR.HH.:</strong> “Reconocimiento médico obligatorio el 15 de marzo
                de 9:00 a 17:00. Presentarse con DNI en planta baja.”
              </p>
              <p className="muted">
                Objetivo: el empleado dispone del dato necesario para actuar.
              </p>
            </div>

            <div className="divider" />

            <div className="callout callout--info">
              <h4 className="callout-title">✅ Checklist</h4>
              <ul className="checklist">
                <li>¿Es un dato objetivo?</li>
                <li>¿No requiere interpretación?</li>
                <li>¿No necesito comprobar comprensión?</li>
              </ul>
            </div>
          </div>

          {/* =========================
              TARJETA: COMUNICACIÓN
             ========================= */}
          <div className="card card--muted">
            <h3>💬 COMUNICACIÓN</h3>
            <p className="muted">Intercambio bidireccional</p>

            <div className="divider" />

            <h4>✅ Características</h4>
            <ul className="checklist">
              <li>Proceso dinámico e interactivo.</li>
              <li>El feedback es esperado y necesario.</li>
              <li>Se adapta al contexto del receptor.</li>
              <li>Busca comprensión real y compromiso.</li>
            </ul>

            <div className="divider" />

            <h4>🧩 Cuándo usar comunicación</h4>
            <ul className="checklist">
              <li>
                <strong>Decisiones complejas:</strong> requieren análisis conjunto.
              </li>
              <li>
                <strong>Conflictos o problemas:</strong> necesitan empatía y solución personalizada.
              </li>
              <li>
                <strong>Cambios estratégicos:</strong> afectan procesos o cultura.
              </li>
              <li>
                <strong>Relaciones comerciales:</strong> construyen confianza y fidelización.
              </li>
            </ul>

            <div className="divider" />

            <div className="callout callout--example">
              <h4 className="callout-title">💼 Ejemplo</h4>
              <p>
                <strong>Cliente molesto:</strong> “Mi pedido llegó defectuoso y necesito una solución inmediata.”
              </p>
              <p className="muted">
                Proceso: escucha activa → empatía → solución → confirmación → seguimiento.
              </p>
            </div>

            <div className="divider" />

            <div className="callout callout--tip">
              <h4 className="callout-title">🗣️ Frases para crear feedback</h4>
              <ul className="checklist">
                <li>“Para confirmar: ¿he entendido bien que…?”</li>
                <li>“¿Qué opción te encaja más: A o B?”</li>
                <li>“¿Quieres que te lo resuma en una frase?”</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Micro-actividad (opcional pero útil) */}
        <div className="callout callout--activity">
          <h4 className="callout-title">✅ Micro-actividad</h4>
          <p className="muted">
            Clasifica como <strong>información</strong> o <strong>comunicación</strong> y explica por qué:
          </p>
          <ul>
            <li>“El viernes cerramos a las 14:00.”</li>
            <li>“Desde mañana cambia el protocolo de devoluciones.”</li>
            <li>“Estoy muy enfadado: mi pedido llegó mal.”</li>
          </ul>
        </div>
      </div>
    </div>
  </details>

    {/* =========================
        BLOQUE 2: APLICACIÓN PRÁCTICA
       ========================= */}
    <details className="topic-details">
      <summary>🧩 2) Aplicación práctica: Feedback, decisión rápida y riesgo de distorsión</summary>

      <div className="topic-details__content">
        <div className="callout callout--tip">
          <h4 className="callout-title">🔑 El factor diferenciador: el feedback</h4>
          <p>
            Sin retroalimentación verificable, solo hay transmisión de datos. La comunicación se completa
            cuando el receptor confirma <strong>recepción</strong>, <strong>comprensión</strong> y <strong>acción</strong>.
          </p>
          <ul className="checklist">
            <li><strong>Verbal:</strong> “Entendido, lo implemento mañana”.</li>
            <li><strong>Conductual:</strong> se ejecuta la tarea correctamente.</li>
            <li><strong>Emocional/no verbal:</strong> señales de acuerdo, duda o confusión.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="card card--muted">
          <h3>⚡ Framework de decisión rápida</h3>
          <p className="muted">
            Úsalo como regla práctica para decidir si basta con informar o si necesitas comunicar (y verificar).
          </p>

          <div className="divider" />

          <table className="table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Si la respuesta es “SÍ”</th>
                <th>Si la respuesta es “NO”</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Necesito verificar comprensión?</td>
                <td><strong>Comunicación</strong></td>
                <td><strong>Información</strong></td>
              </tr>
              <tr>
                <td>¿El mensaje requiere interpretación?</td>
                <td><strong>Comunicación</strong></td>
                <td><strong>Información</strong></td>
              </tr>
              <tr>
                <td>¿Busco generar compromiso?</td>
                <td><strong>Comunicación</strong></td>
                <td><strong>Información</strong></td>
              </tr>
              <tr>
                <td>¿Hay riesgo de malentendidos?</td>
                <td><strong>Comunicación</strong></td>
                <td><strong>Información</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider" />
        
 <div className="divider" />

<h4>3. El feedback: el factor diferenciador</h4>
<p>
  La diferencia esencial entre informar y comunicar reside en la existencia del
  <strong> feedback o retroalimentación</strong>. En el ámbito de la atención al cliente,
  este elemento es clave, ya que permite comprobar no solo que el mensaje ha sido
  emitido, sino que ha sido <strong>entendido, aceptado y útil</strong> para el cliente.
</p>

<ul>
  <li>
    <strong>En la información:</strong> no se requiere feedback; el proceso finaliza al
    recibir el dato, sin garantizar que el receptor lo haya comprendido o sepa
    cómo actuar.
  </li>
  <li>
    <strong>En la comunicación:</strong> el feedback es indispensable para confirmar que
    el mensaje ha sido recibido, comprendido y procesado correctamente, permitiendo
    ajustar el discurso y ofrecer soluciones adecuadas.
  </li>
</ul>

<div className="callout callout--example">
  <h4 className="callout-title">📌 Regla práctica</h4>
  <p>
    En atención al cliente, si no hay respuesta, aclaración o confirmación por parte
    del usuario, no existe comunicación real, solo transmisión de datos.
  </p>
  <p>
  La diferencia esencial entre informar y comunicar reside en la existencia del
  <strong> feedback o retroalimentación</strong>. La retroalimentación no se limita a una
  respuesta puntual, sino que constituye un <strong>proceso continuo</strong> mediante el
  cual el emisor obtiene información del receptor para comprobar si el mensaje ha
  sido comprendido correctamente y, en función de ello, <strong>ajustar, corregir o
  mejorar</strong> su comunicación. En atención al cliente, este proceso es fundamental
  para garantizar que la información ofrecida resulta útil y satisface realmente
  las necesidades del usuario.
</p>

</div>

    <div className="divider" />

    <h4>4. Consecuencias de la distorsión: el caso del “Cometa Halley”</h4>

<p>
  Cuando una empresa intenta comunicar un mensaje pero no garantiza la existencia de
  <strong> feedback</strong> o emplea canales inadecuados, el contenido original puede
  deformarse progresivamente hasta perder por completo su significado inicial.
  Este fenómeno se ilustra de forma muy clara mediante el conocido ejemplo del
  <strong> “Cometa Halley”</strong>, ampliamente utilizado en formación sobre comunicación
  organizacional.
</p>
  <p>
    El director de una empresa llamó a su subdirector y le dió el siguiente mensaje ""El viernes próximo, 
  alrededor de las cinco de la tarde, aparecerá el Cometa Halley en esta zona. 
  Se trata de un evento que ocurre cada 78 años. Por favor, reúna a todos los trabajadores en el patio 
  de la fabrica se dará una merienda y se celebrará una joranada de convivencia"</p>

<p>
  En este caso, una instrucción clara del gerente —<em>“reunir al personal en el patio para
  observar el cometa”</em>— se transmite de manera descendente a través de distintos niveles
  jerárquicos. A medida que el mensaje pasa de una persona a otra, se van introduciendo
  interpretaciones, omisiones y supuestos que no se contrastan con el emisor original.
</p>

<p>
  El resultado final es un mensaje completamente distorsionado y absurdo, muy alejado de
  la intención inicial. La causa no es la mala fe de los intermediarios, sino la
  <strong> ausencia de una comunicación bidireccional</strong> que permita comprobar en cada
  nivel si el mensaje ha sido comprendido correctamente.El hecho fue que esa mañana muchos se presentaron con cometas, otros se habían comprado 
  camisetas de cometas, un importante numero pensó que el gerente había perdido la cabeza y sólo unos pocos acudieron a la cita que se 
  había organizado como jornada de convivencia. 
</p>

<p>
  Este ejemplo pone de manifiesto un riesgo frecuente en las organizaciones con estructuras
  jerárquicas rígidas: cuanto más largo es el recorrido del mensaje y menor es la verificación
  de comprensión, mayor es la probabilidad de error. La distorsión se acumula, igual que en el
  conocido “juego del teléfono roto”.
</p>

<div className="callout callout--warning">
  <h4 className="callout-title">⚠️ Riesgo organizativo</h4>
  <p>
    Cuantos más intermediarios participan en la transmisión de un mensaje y menos se
    comprueba el feedback, mayor es la probabilidad de que la información llegue alterada,
    generando confusión, errores operativos y pérdida de credibilidad.
  </p>
</div>

<p>
  En el entorno empresarial, esta distorsión puede traducirse en decisiones incorrectas,
  fallos en la ejecución de tareas, conflictos internos o una atención deficiente al cliente.
  Por ello, los canales más eficaces son aquellos que permiten un
  <strong> feedback inmediato</strong>, como la comunicación cara a cara o las reuniones
  interactivas.
</p>
<a
  href="https://www.tiktok.com/@peterurdemales/video/7377741656415554821"
  target="_blank"
  rel="noopener noreferrer"
>
  Ejemplo práctico de retroalimentación en la comunicación
</a>

{/* =====================
    VÍDEO DE REFUERZO · DISTORSIÓN DE LA COMUNICACIÓN
   ===================== */}
<div className="divider" />

<div className="video-block">
  <h4 className="video-title">
    🎥 Cómo se distorsiona un mensaje: el “teléfono roto”
  </h4>

  <p className="video-meta muted">
    Duración: ~2 min · Ejemplo visual del efecto de la falta de feedback en la comunicación
  </p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/D-YHC8b6Hjk"
      title="Distorsión del mensaje - Teléfono roto"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>


    <div className="divider" />
<details className="topic-details">
  <summary>Cómo dar y cómo usar el feedback con los clientes</summary>

  <div className="topic-details__content">
    <p>
      En atención al cliente, el <strong>feedback</strong> es el elemento que convierte la información
      en comunicación real. No se trata solo de responder, sino de confirmar comprensión, ajustar la
      solución y cerrar la interacción de forma satisfactoria tanto para el cliente como para la empresa.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        Sin feedback no hay comunicación: solo hay transmisión de datos sin garantía de comprensión
        ni de satisfacción del cliente.
      </p>
    </div>

    <h4>1. Qué es el feedback en atención al cliente</h4>
    <p>
      El feedback es la respuesta que el cliente ofrece (verbal o no verbal) tras recibir un mensaje,
      y también la respuesta que el profesional da para <strong>verificar que ha entendido correctamente</strong>
      y que la solución propuesta se ajusta a la necesidad real del cliente.
    </p>

    <p className="muted">
      En la práctica, el feedback permite corregir errores a tiempo y evitar conflictos posteriores.
    </p>

    <div className="divider" />

    <h4>2. Cómo DAR feedback al cliente</h4>
    <p>
      Dar feedback no es corregir ni justificarse, sino <strong>acompañar, clarificar y orientar</strong>
      al cliente hacia una solución concreta.
    </p>

    <h5>Principios del feedback eficaz</h5>
    <ul className="checklist">
      <li><strong>Claro:</strong> lenguaje sencillo, sin tecnicismos innecesarios.</li>
      <li><strong>Empático:</strong> reconoce emociones antes de aportar datos.</li>
      <li><strong>Concreto:</strong> evita generalidades y ambigüedades.</li>
      <li><strong>Orientado a solución:</strong> explica el siguiente paso.</li>
    </ul>

    <h5>Ejemplo comparativo</h5>
    <div className="callout callout--warning">
      <p>
        ❌ “Eso ya se lo expliqué antes, está en las condiciones.”
      </p>
    </div>

    <div className="callout callout--example">
      <p>
        ✅ “Entiendo que resulte confuso. Le explico de nuevo el punto clave y qué opción tenemos ahora.”
      </p>
    </div>

    <div className="divider" />

    <h5>Pasos para dar feedback eficaz</h5>
    <ol>
      <li>
        <strong>Reconocer al cliente:</strong> agradecer la consulta o la espera.
      </li>
      <li>
        <strong>Confirmar el problema:</strong> “Entonces, el problema es…, ¿correcto?”
      </li>
      <li>
        <strong>Explicar con claridad:</strong> describir qué ha ocurrido sin culpar.
      </li>
      <li>
        <strong>Proponer solución:</strong> ofrecer alternativas y recomendar una.
      </li>
      <li>
        <strong>Cerrar con validación:</strong> comprobar aceptación.
      </li>
    </ol>

    <div className="divider" />

    <h4>3. Cómo USAR el feedback del cliente</h4>
    <p>
      El feedback del cliente es una <strong>fuente de mejora continua</strong>. Usarlo correctamente
      implica escuchar activamente y transformar la información recibida en acción.
    </p>

    <h5>Escucha activa</h5>
    <ul>
      <li>No interrumpir ni anticipar respuestas.</li>
      <li>Observar tono, gestos y silencios.</li>
      <li>Separar emoción del hecho.</li>
    </ul>

    <p className="muted">
      Muchas quejas no surgen por el problema en sí, sino por no haberse sentido escuchado.
    </p>

    <h5>Técnicas para recoger feedback</h5>
    <ul>
      <li>
        <strong>Parafraseo:</strong> “Si le he entendido bien, el problema es…”
      </li>
      <li>
        <strong>Preguntas abiertas:</strong> “¿Qué esperaba que ocurriera?”
      </li>
      <li>
        <strong>Validación emocional:</strong> “Entiendo que esto genere frustración.”
      </li>
    </ul>

    <div className="callout callout--tip">
      <h4 className="callout-title">ℹ️ Importante</h4>
      <p>
        Validar emociones no significa dar la razón, sino reconocer el impacto emocional del problema.
      </p>
    </div>

    <div className="divider" />

    <h4>4. Feedback en situaciones difíciles</h4>
    <p>
      En quejas y reclamaciones, el feedback es clave para desescalar la tensión y mantener la relación.
    </p>

    <h5>Qué hacer</h5>
    <ul className="checklist">
      <li>Mantener tono calmado y profesional.</li>
      <li>Permitir que el cliente termine de hablar.</li>
      <li>Responder con hechos y empatía.</li>
    </ul>

    <h5>Qué evitar</h5>
    <ul>
      <li>Justificarse en exceso.</li>
      <li>Culpar a otros departamentos.</li>
      <li>Minimizar el problema.</li>
    </ul>

    <div className="callout callout--warning">
      <p>
        ❌ “Son las normas, no podemos hacer nada.”
      </p>
    </div>

    <div className="callout callout--example">
      <p>
        ✅ “Estas son las normas actuales, pero vamos a ver qué alternativa podemos ofrecerle.”
      </p>
    </div>

    <div className="divider" />

    <h4>5. Uso del feedback para mejorar el servicio</h4>
    <p>
      El feedback del cliente debe registrarse, analizarse y compartirse internamente para
      mejorar procesos y evitar errores repetidos.
    </p>

    <ul>
      <li>Quejas repetidas → fallo de información previa.</li>
      <li>Incidencias similares → proceso mal diseñado.</li>
      <li>Comentarios positivos → buenas prácticas a replicar.</li>
    </ul>

    <div className="callout callout--case">
      <h4 className="callout-title">🎯 Visión empresa</h4>
      <p>
        La comunicación externa mejora cuando la comunicación interna funciona correctamente.
      </p>
    </div>

    <div className="divider" />

    <h4>6. Feedback según el canal</h4>
    <ul>
      <li>
        <strong>Presencial:</strong> lenguaje corporal, contacto visual, asentir y reformular.
      </li>
      <li>
        <strong>Telefónico:</strong> tono de voz, ritmo y confirmaciones verbales.
      </li>
      <li>
        <strong>Digital:</strong> mensajes claros, estructurados y cierre con confirmación.
      </li>
    </ul>

    <div className="divider" />

    <h4>Conclusión práctica</h4>
    <p>
      Dar y usar feedback correctamente reduce conflictos, aumenta la confianza y mejora la
      fidelización. El proceso solo se considera cerrado cuando el cliente confirma que ha
      entendido y aceptado la solución.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">📌 Regla de oro</h4>
      <p>
        Si el cliente no confirma comprensión y aceptación, la comunicación no está completa.
      </p>
    </div>
  </div>
</details>

{/* =====================
    VÍDEO DE REFUERZO · INFORMAR VS COMUNICAR
   ===================== */}
<div className="divider" />

<div className="video-block">
  <h4 className="video-title">
    🎥 Informar vs. Comunicar en la empresa
  </h4>

  <p className="video-meta muted">
    Duración: 2–3 min · Refuerza el concepto de feedback y la diferencia entre transmisión de datos
    y comunicación bidireccional
  </p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/FLOC8PMiA1w"
      title="Informar vs Comunicar en la empresa"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>
  </div>
</details>
        </div>
      </section>

      
      

  



      {/* =========================
          SECCIÓN 1 · TEORÍA (ORIGINAL MANTENIDA)
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>Fundamentos de la comunicación empresarial</h2>
          </div>
        <div className="topic-accordion">

  {/* =====================================================
      1. CONCEPTO BASE
     ===================================================== */}
  <details className="topic-details" open>
    <summary>1. La comunicación en la empresa: concepto y función básica</summary>

    <div className="topic-details__content">
      <div className="card">
        <p>
          La comunicación constituye el <strong>sistema nervioso central</strong> de cualquier organización.
          No se limita a transmitir información, sino que permite coordinar personas, procesos y objetivos.
          A través de la comunicación, la empresa funciona como un sistema integrado y coherente.
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">🧠 Idea clave</h4>
          <p>
            Sin comunicación no hay organización: solo personas actuando de forma aislada.
          </p>
        </div>
      </div>
    </div>
  </details>

  {/* =====================================================
      2. COMUNICACIÓN COMO ACTIVO ESTRATÉGICO
     ===================================================== */}
  <details className="topic-details">
    <summary>2. La comunicación como activo estratégico de la empresa</summary>

    <div className="topic-details__content">
      <div className="card card--muted">
        <p className="muted">
          Igual que una empresa necesita recursos materiales o tecnológicos,
          necesita canales de comunicación claros, coherentes y fluidos.
          La comunicación sostiene las <strong>relaciones humanas</strong>
          y protege la <strong>percepción de marca</strong>.
        </p>
      </div>

      <div className="callout callout--tip">
        <h4 className="callout-title">📌 Enfoque estratégico</h4>
        <p>
          La comunicación no es un departamento aislado, sino una
          <strong>infraestructura invisible</strong> que convierte la estrategia en acción.
        </p>
      </div>
    </div>
  </details>

  {/* =====================================================
      3. IMPACTO INTERNO
     ===================================================== */}
  <details className="topic-details">
    <summary>3. Impacto de la comunicación en el funcionamiento interno</summary>

    <div className="topic-details__content">
      <h4>Comunicación y eficiencia operativa</h4>

      <ul className="checklist">
        <li>
          <strong>Coordinación:</strong> instrucciones claras reducen errores y retrabajo.
        </li>
        <li>
          <strong>Toma de decisiones:</strong> la información oportuna mejora la rapidez y la calidad de las decisiones.
        </li>
        <li>
          <strong>Prevención de conflictos:</strong> muchos problemas internos surgen por malentendidos.
        </li>
      </ul>
    </div>
  </details>

  {/* =====================================================
      4. COMUNICACIÓN Y ATENCIÓN AL CLIENTE
     ===================================================== */}
  <details className="topic-details">
    <summary>4. Comunicación y experiencia del cliente</summary>

    <div className="topic-details__content">
      <p>
        En mercados competitivos, la diferenciación no depende solo del producto,
        sino de la <strong>experiencia del cliente</strong>, que se construye principalmente
        a través de la comunicación.
      </p>

      <ul className="checklist">
        <li>
          <strong>Empatía:</strong> el cliente necesita sentirse escuchado y comprendido.
        </li>
        <li>
          <strong>Rapidez y claridad:</strong> una respuesta ágil reduce la frustración.
        </li>
        <li>
          <strong>Gestión de errores:</strong> una mala situación puede convertirse en oportunidad.
        </li>
      </ul>

      <div className="callout callout--example">
        <h4 className="callout-title">🎯 Atención al cliente</h4>
        <p>
          El cliente recuerda más <em>cómo</em> se le habló que el problema en sí.
        </p>
      </div>
    </div>
  </details>

  {/* =====================================================
      5. IDENTIDAD Y REPUTACIÓN
     ===================================================== */}
  <details className="topic-details">
    <summary>5. Identidad interna y reputación externa</summary>

    <div className="topic-details__content">
      <p>
        La comunicación actúa como un <strong>espejo bidireccional</strong>:
        refleja la cultura interna y construye la imagen externa de la empresa.
      </p>

      <ul className="checklist">
        <li>
          <strong>Coherencia:</strong> los valores deben vivirse antes de comunicarse.
        </li>
        <li>
          <strong>Calidad percibida:</strong> también se comunica a través del lenguaje y el tono.
        </li>
      </ul>
    </div>
  </details>

  {/* =====================================================
      6. CASOS PRÁCTICOS
     ===================================================== */}
  <details className="topic-details">
    <summary>6. Casos reales de comunicación empresarial</summary>

    <div className="topic-details__content">
      <div className="case-grid">
        <div className="card card--muted">
          <h4>✅ Caso Tylenol (1982)</h4>
          <p className="muted">
            Comunicación transparente, liderazgo visible y prioridad a la seguridad.
          </p>
        </div>

        <div className="card card--muted">
          <h4>❌ Caso United Airlines (2017)</h4>
          <p className="muted">
            Falta de empatía inicial y respuesta tardía que agravó la crisis.
          </p>
        </div>
      </div>
    </div>
  </details>

  {/* =====================================================
      7. CIERRE Y DEBATE
     ===================================================== */}
  <details className="topic-details">
    <summary>7. Conclusión y reflexión final</summary>

    <div className="topic-details__content">
      <div className="card">
        <p>
          Comunicar bien no es hablar más, sino asegurar que el mensaje
          <strong>llega</strong>, <strong>se entiende</strong> y <strong>genera acción</strong>.
          La comunicación es una auténtica <strong>filosofía de gestión</strong>.
        </p>
      </div>

      <div className="debate">
        <div className="debate-prompt">
          <p>
            Analiza cómo la comunicación puede multiplicar o reducir el impacto de un error empresarial.
          </p>
        </div>
      </div>
    </div>
  </details>

</div>


      </section>

    

   {/* =========================
    SECCIÓN 2 · FLUJOS DE COMUNICACIÓN
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>Flujos de comunicación en la empresa</h2>
    <span className="topic-section__meta">Comunicación interna</span>
  </div>

  <div className="topic-accordion">

    {/* =====================================================
        1. SENTIDO Y FUNCIÓN DE LOS FLUJOS
       ===================================================== */}
    <details className="topic-details" open>
      <summary>1. Los flujos comunicativos en la empresa</summary>

      <div className="topic-details__content">
        <p>
          En una organización, la comunicación no se produce de forma improvisada, sino que
          sigue <strong>flujos definidos</strong> que determinan cómo circula la información
          entre las personas y los distintos niveles jerárquicos. Estos flujos actúan como
          auténticas <strong>autopistas de información</strong>, por las que se transmiten los
          mensajes que coordinan el trabajo, alinean objetivos y construyen la cultura
          organizativa.
        </p>

        <p>
          El diseño de los flujos comunicativos condiciona la
          <strong>velocidad</strong>, la <strong>precisión</strong> y la
          <strong>efectividad</strong> de la toma de decisiones. Cuando los flujos son claros y
          coherentes, la empresa funciona como un sistema integrado; cuando se bloquean,
          aparecen errores, retrasos y conflictos.
        </p>
      </div>
    </details>

    {/* =====================================================
        2. FLUJO DESCENDENTE
       ===================================================== */}
    <details className="topic-details">
      <summary>2. La comunicación descendente: de la dirección a los equipos</summary>

      <div className="topic-details__content">
        <p>
          La comunicación descendente fluye desde los niveles directivos hacia los
          trabajadores. Su finalidad es <strong>transmitir la estrategia</strong>, las normas,
          los objetivos y los mensajes motivadores que orientan la acción diaria.
        </p>

        <p>
          A través de este flujo, la dirección convierte la visión empresarial en
          <strong>instrucciones comprensibles</strong>, asegurando que cada persona conozca
          qué se espera de ella y cómo contribuye al conjunto de la organización.
        </p>

        <p>
          En atención al cliente, la comunicación descendente resulta esencial para difundir
          protocolos, políticas comerciales o cambios en los servicios, garantizando una
          actuación homogénea ante el usuario.
        </p>
      </div>
    </details>

    {/* =====================================================
        3. FLUJO ASCENDENTE
       ===================================================== */}
    <details className="topic-details">
      <summary>3. La comunicación ascendente: de los equipos a la dirección</summary>

      <div className="topic-details__content">
        <p>
          La comunicación ascendente recorre el camino inverso: parte de los trabajadores y
          llega a los niveles directivos. Su función es recoger
          <strong>información valiosa del terreno</strong>, como problemas operativos,
          sugerencias de mejora, clima laboral o feedback procedente de los clientes.
        </p>

        <p>
          Este flujo permite a la dirección tomar decisiones basadas en la realidad cotidiana
          de la empresa y no solo en datos formales. Además, refuerza la implicación del
          personal, al transmitir que sus aportaciones son escuchadas y tenidas en cuenta.
        </p>

        <p>
          En atención al cliente, la comunicación ascendente es clave para detectar
          incidencias recurrentes, anticipar conflictos y mejorar los procesos de servicio.
        </p>
      </div>
    </details>

    {/* =====================================================
        4. FLUJO HORIZONTAL
       ===================================================== */}
    <details className="topic-details">
      <summary>4. La comunicación horizontal: coordinación entre departamentos</summary>

      <div className="topic-details__content">
        <p>
          La comunicación horizontal se produce entre personas o departamentos del mismo
          nivel jerárquico. Su objetivo es facilitar la
          <strong>coordinación de actividades</strong> y evitar el aislamiento de las áreas
          funcionales.
        </p>

        <p>
          Gracias a este flujo, los departamentos comparten información, sincronizan
          procesos y trabajan de forma colaborativa, eliminando los
          <em>silos organizativos</em> que ralentizan la gestión.
        </p>

        <div className="callout callout--example">
          <h4 className="callout-title">🧩 Ejemplo integrado: gestión de una promoción</h4>
          <p>
            <strong>Flujo descendente:</strong> la dirección comunica la promoción y sus
            objetivos.<br />
            <strong>Flujo horizontal:</strong> marketing, ventas y atención al cliente se
            coordinan para aplicar la campaña.<br />
            <strong>Flujo ascendente:</strong> el personal de atención reporta dudas y
            problemas detectados en los clientes.<br />
            <strong>Resultado:</strong> una promoción coherente, con menos incidencias y
            mejor experiencia del cliente.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        5. FORMALIDAD Y CANALES
       ===================================================== */}
    <details className="topic-details">
      <summary>5. Comunicación formal e informal en los flujos empresariales</summary>

      <div className="topic-details__content">
        <p>
          Los flujos comunicativos pueden desarrollarse a través de canales
          <strong>formales</strong> o <strong>informales</strong>. La comunicación formal está
          regulada por la empresa y utiliza medios oficiales como correos corporativos,
          reuniones, circulares o protocolos.
        </p>

        <p>
          La comunicación informal surge de manera espontánea a través de las relaciones
          personales. Aunque puede favorecer la cohesión y el intercambio rápido de
          información, también puede generar rumores cuando la comunicación formal es
          insuficiente o poco clara.
        </p>

        <div className="callout callout--warning">
          <h4 className="callout-title">⚠️ Riesgo comunicativo</h4>
          <p>
            Cuando la empresa no informa con claridad, los vacíos informativos suelen
            llenarse con interpretaciones y rumores que distorsionan la realidad.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        6. OPTIMIZACIÓN DE LOS FLUJOS
       ===================================================== */}
    <details className="topic-details">
      <summary>6. Optimización de los flujos comunicativos</summary>

      <div className="topic-details__content">
        <p>
          Para que los flujos comunicativos cumplan su función estratégica, deben ser
          evaluados y optimizados de forma continua. No se trata de comunicar más, sino de
          comunicar <strong>mejor</strong>.
        </p>

        <p>
          Optimizar los flujos implica medir su efectividad (tiempos de respuesta,
          comprensión de los mensajes y necesidad de aclaraciones), detectar cuellos de
          botella y adaptar el lenguaje y el canal al perfil del receptor.
        </p>

        <p>
          Una comunicación bien diseñada reduce errores, acelera respuestas y mejora tanto
          el clima interno como la experiencia del cliente.
        </p>
      </div>
    </details>

    {/* =====================================================
        7. CIERRE
       ===================================================== */}
    <details className="topic-details">
      <summary>7. Conclusión: los flujos como arquitectura organizativa</summary>

      <div className="topic-details__content">
        <p>
          Los flujos de comunicación constituyen la
          <strong>arquitectura invisible</strong> de la empresa. A través de ellos circula la
          información que permite coordinar, decidir y actuar de forma coherente.
        </p>

        <p>
          Una organización que cuida sus flujos comunicativos es más eficiente, más
          cohesionada y más capaz de ofrecer una atención al cliente clara, coherente y
          profesional.
        </p>
      </div>
    </details>

  </div>
</section>

      {/* =========================
          SECCIÓN 3: FEEDBACK EN ATENCIÓN AL CLIENTE
         ========================= */}
      <section className="topic-section">
      

        <div className="topic-accordion">
          

      {/* =========================
          SECCIÓN 3 · COMUNICACIÓN EXTERNA
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Comunicación externa e imagen corporativa</h2>
          <span className="topic-section__meta">Relación con el entorno</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>5. Comunicación externa e imagen corporativa</summary>
            <div className="topic-details__content">
              <p>
                La comunicación externa es el intercambio de información con clientes, proveedores, entidades públicas
                y sociedad. Su objetivo es construir una <strong>imagen corporativa</strong> coherente: la percepción que el
                público forma sobre la empresa y sus valores.
              </p>

              <h4>Acciones habituales de comunicación externa</h4>
              <ul>
                <li><strong>Publicidad</strong>: mensajes masivos para posicionamiento y persuasión.</li>
                <li><strong>Relaciones públicas</strong>: confianza, reputación, vínculo con el entorno.</li>
                <li><strong>Venta personal</strong>: interacción cara a cara, adaptación al cliente.</li>
                <li><strong>Promoción de ventas</strong>: incentivo a corto plazo (descuentos, regalos, campañas).</li>
              </ul>

              <div className="callout callout--case">
                <h4 className="callout-title">🎯 En atención al cliente</h4>
                <p>
                  Cada interacción es “marca en acción”: la forma de saludar, responder, explicar y cerrar una conversación
                  influye directamente en la confianza y en la probabilidad de repetición de compra.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          SECCIÓN 4 · BARRERAS Y HABILIDADES
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Barreras y habilidades en la comunicación</h2>
          <span className="topic-section__meta">Psicología del servicio</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>6. Barreras de la comunicación empresarial</summary>
            <div className="topic-details__content">
              <p>
                Las barreras son obstáculos que deforman o bloquean el mensaje. Incluso con buena intención, el receptor
                puede recibir algo distinto a lo que el emisor pretendía.
              </p>

              <h4>Tipos de barreras</h4>
              <ul className="checklist">
                <li><strong>Ambientales</strong>: ruido, mala iluminación, interrupciones, mala cobertura.</li>
                <li><strong>Verbales</strong>: tecnicismos, exceso de velocidad, ambigüedad, contradicciones.</li>
                <li><strong>Interpersonales</strong>: prejuicios, suposiciones, falta de empatía, tensión emocional.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🛠️ Mini-hábito útil</h4>
                <p>
                  Antes de cerrar una explicación, verifica con una pregunta: “¿Te lo resumo en una frase para confirmar
                  que estamos en lo mismo?” → esto crea feedback y reduce errores.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>7. Habilidades comunicativas en la atención al cliente</summary>
            <div className="topic-details__content">
              <h4>Inteligencia emocional</h4>
              <p>
                Capacidad para percibir, comprender y regular emociones (propias y ajenas). En atención al cliente,
                permite responder con profesionalidad incluso ante tensión.
              </p>

              <h4>Empatía</h4>
              <p>
                “Ponerse en los zapatos del cliente” para comprender su necesidad real, incluso cuando no la expresa bien.
              </p>

              <h4>Escucha activa</h4>
              <ul>
                <li>Atender al contenido y al tono emocional.</li>
                <li>Parafrasear: “Si te he entendido bien, lo que necesitas es…”</li>
                <li>Confirmar: “¿Es correcto?”</li>
              </ul>

              <h4>Asertividad</h4>
              <p>
                Defender derechos y normas con calma y respeto, sin agresividad ni pasividad. Es clave para decir “no”
                de forma profesional y ofrecer alternativas.
              </p>

              <div className="callout callout--activity">
                <h4 className="callout-title">✅ Micro-actividad</h4>
                <p>
                  Escribe 2 frases para rechazar una petición imposible del cliente:
                  <strong> (1) agresiva, (2) pasiva, (3) asertiva</strong>. Luego compara cuál mantiene mejor la relación.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          SECCIÓN 5 · CANALES Y TECNOLOGÍA
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Canales y tecnologías de la comunicación</h2>
          <span className="topic-section__meta">Comunicación actual</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>8. Canales de comunicación empresarial</summary>
            <div className="topic-details__content">
              <p>
                Hoy la comunicación es <strong>multicanal</strong>. El cliente elige el medio y la empresa debe responder
                con coherencia, rapidez y calidad.
              </p>

              <h4>Principales canales</h4>
              <ul className="checklist">
                <li><strong>Presencial</strong>: lenguaje no verbal, imagen, postura, contacto visual.</li>
                <li><strong>Telefónico</strong>: tono, ritmo, cortesía, claridad; “sonrisa telefónica”.</li>
                <li><strong>Digital</strong>: chat, redes sociales, email, formularios; trazabilidad y rapidez.</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Regla práctica</h4>
                <p>
                  Si el mensaje requiere <strong>prueba/documentación</strong> → mejor email. Si requiere <strong>inmediatez</strong> →
                  chat/telefonía. Si requiere <strong>confianza emocional</strong> → presencial o llamada.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>9. Marco legal de la comunicación empresarial</summary>
            <div className="topic-details__content">
              <p>
                Cuando tratamos datos personales (nombre, teléfono, email, compras, reclamaciones), debemos aplicar el
                <strong> RGPD</strong>. La comunicación debe ser responsable: solo lo necesario, con finalidad clara y con
                medidas de seguridad.
              </p>

              <h4>Pautas básicas</h4>
              <ul className="checklist">
                <li>Solicitar solo datos necesarios para el trámite.</li>
                <li>Explicar finalidad y uso de los datos.</li>
                <li>Evitar compartir información con terceros sin base legal.</li>
                <li>Consentimiento claro cuando aplique (acción afirmativa).</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Atención</h4>
                <p>
                  En email y mensajería: cuidado con copias visibles (CC), reenvíos, capturas y conversaciones que
                  incluyan datos sensibles.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          SECCIÓN 6 · CIERRE
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>6. Síntesis y reflexión final</h2>
          <span className="topic-section__meta">Cierre del tema</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>10. Conclusión del tema</summary>
            <div className="topic-details__content">
              <p>
                La comunicación es el “GPS” de la empresa: si el mapa está desactualizado (información poco veraz),
                si la señal falla (canales deficientes) o si no confirmamos la ruta (sin feedback), la organización se
                desorienta y el cliente lo nota.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🔚 Para recordar</h4>
                <ul>
                  <li>Informar no garantiza comprensión: <strong>comunicar requiere feedback</strong>.</li>
                  <li>Los flujos internos sostienen coordinación, motivación y mejora.</li>
                  <li>La comunicación externa construye imagen corporativa.</li>
                  <li>Las barreras existen: se reducen con método y habilidades.</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

    {/*====
          SECCIÓN DEBATE
         ========================= */}
      <section className="topic-section debate">
        <h2>Debate y reflexión</h2>

        <div className="debate-prompt">
          <strong>Situación:</strong> Un cliente se queja porque “nadie le explicó bien” un procedimiento. El equipo dice que
          “se le informó” por email.
        </div>

        <ol className="debate-questions">
          <li>¿Qué diferencia hay entre “informar” y “comunicar” en este caso?</li>
          <li>¿Qué barreras pudieron intervenir (verbal, interpersonal, ambiental)?</li>
          <li>¿Qué canal habría sido más adecuado y por qué?</li>
          <li>¿Cómo comprobarías el feedback sin parecer desconfiado?</li>
          <li>Redacta una respuesta asertiva que mantenga la relación con el cliente.</li>
        </ol>
      </section>

    {/* =========================
    SECCIÓN · ENLACES RECOMENDADOS
   ========================= */}
<section className="topic-section links-section">
  <div className="topic-section__title">
    <h2>Enlaces recomendados</h2>
    <span className="topic-section__meta">Recursos externos</span>
  </div>

  <div className="links-box">
    <h3 className="links-box__title">📎 Recursos para ampliar el tema</h3>

    <ul className="links-list">
      <li className="links-item">
        <a
          href="https://www.youtube.com/watch?v=A4yAXhL-xFg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comunicación efectiva en la empresa
        </a>
        <p className="links-desc">
          Vídeo divulgativo que explica de forma clara los elementos clave de la
          comunicación empresarial y su impacto en la coordinación, la toma de
          decisiones y las relaciones profesionales.
        </p>
      </li>

      <li className="links-item">
        <a
          href="https://www.udemy.com/course/10-claves-para-una-comunicacion-exitosa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          10 claves para una comunicación exitosa
        </a>
        <p className="links-desc">
          Curso introductorio que profundiza en habilidades comunicativas aplicadas
          al entorno laboral, con ejemplos prácticos orientados a mejorar la claridad,
          la escucha activa y la relación con clientes y equipos de trabajo.
        </p>
      </li>
    </ul>
  </div>
</section>

  {/* =========================
    SECCIÓN · TALLER PRÁCTICO + SÍNTESIS
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>🎯 Taller práctico y cierre</h2>
    <span className="topic-section__meta">Ejercicios aplicados + resumen para llevar a la acción</span>
  </div>

  <div className="topic-accordion">

    {/* =====================================================
        1) EJERCICIO 1
       ===================================================== */}
    <details className="topic-details" open>
      <summary>1. Diagnóstico de flujos comunicativos</summary>

      <div className="topic-details__content">
        <p>
          Vamos a aplicar los flujos de comunicación a un caso típico de empresa: los clientes
          se quejan de que reciben información contradictoria entre atención telefónica y presencial.
          Además, el equipo de ventas no está actualizado con las promociones que anuncia marketing.
        </p>

        <div className="callout callout--activity">
          <h4 className="callout-title">📝 Tu tarea</h4>
          <ol>
            <li>Identifica qué flujo o flujos están fallando.</li>
            <li>Propón tres acciones específicas para corregirlo.</li>
            <li>Define cómo medirás si la mejora funciona.</li>
          </ol>
        </div>

        <details className="topic-details">
          <summary>💡 Solución sugerida</summary>
          <div className="topic-details__content">
            <p>
              El problema no es solo “falta de información”, sino falta de coordinación entre áreas
              y ausencia de mecanismos claros para alinear a todas las personas que atienden al cliente.
            </p>

            <ul className="checklist">
              <li>
                <strong>Fallo horizontal:</strong> marketing, ventas y atención no comparten el mismo mensaje.
              </li>
              <li>
                <strong>Fallo descendente:</strong> los cambios (promociones, condiciones, mensajes clave) no
                llegan de forma completa a todos los canales.
              </li>
              <li>
                <strong>Fallo ascendente:</strong> atención no está reportando inconsistencias y dudas frecuentes.
              </li>
            </ul>

            <div className="divider" />

            <h4>Acciones recomendadas</h4>
            <ul className="checklist">
              <li>
                Establecer una <strong>reunión breve semanal</strong> entre marketing, ventas y atención para
                sincronizar campañas, mensajes y dudas.
              </li>
              <li>
                Crear un <strong>repositorio único</strong> (intranet / documento vivo) con promociones vigentes,
                condiciones y respuestas tipo, accesible para todos.
              </li>
              <li>
                Implantar un <strong>protocolo de escalado</strong> para que atención pueda reportar y corregir
                inconsistencias en pocas horas.
              </li>
            </ul>

            <div className="divider" />

            <h4>Métricas de mejora</h4>
            <ul className="checklist">
              <li>Reducción de quejas por información contradictoria.</li>
              <li>Porcentaje de equipos con acceso y consulta del repositorio único.</li>
              <li>Tiempo medio para corregir una inconsistencia detectada.</li>
            </ul>
          </div>
        </details>
      </div>
    </details>

    {/* =====================================================
        2) EJERCICIO 2
       ===================================================== */}
    <details className="topic-details">
      <summary>2. Información vs comunicación</summary>

      <div className="topic-details__content">
        <p>
          En el trabajo diario no siempre necesitas “comunicación completa” con intercambio y negociación.
          A veces basta con <strong>informar</strong>. La clave está en decidir qué necesita cada situación:
          dato objetivo o comprensión y compromiso.
        </p>

        <div className="callout callout--activity">
          <h4 className="callout-title">🎭 Instrucciones</h4>
          <p>
            Lee cada situación y decide si es más efectivo usar <strong>información</strong> (unidireccional)
            o <strong>comunicación</strong> (bidireccional). Después, justifica tu decisión.
          </p>
        </div>

        <div className="card card--muted">
          <h4>Escenario A</h4>
          <p>Notificar un cambio de horario de oficina durante vacaciones.</p>
          <p className="muted">
            Aquí suele bastar <strong>información</strong>: el mensaje es factual, breve y no requiere interpretación.
            Aun así, es recomendable confirmar que el aviso ha llegado a quien debe llegar.
          </p>

          <div className="divider" />

          <h4>Escenario B</h4>
          <p>Implementar una nueva herramienta (CRM) que cambia procesos diarios.</p>
          <p className="muted">
            Aquí necesitas <strong>comunicación</strong>: habrá dudas, resistencias y necesidad de práctica.
            Sin feedback, no puedes asegurar que el equipo entiende cómo aplicarlo.
          </p>

          <div className="divider" />

          <h4>Escenario C</h4>
          <p>Cliente muy molesto porque su pedido llegó con retraso de tres días.</p>
          <p className="muted">
            Aquí también es imprescindible <strong>comunicación</strong>: hay carga emocional y se requiere empatía,
            verificación de comprensión y una solución ajustada al caso.
          </p>
        </div>
      </div>
    </details>

    {/* =====================================================
        3) EJERCICIO 3
       ===================================================== */}
    <details className="topic-details">
      <summary>3. Mejorar el feedback</summary>

      <div className="topic-details__content">
        <p>
          Imagina que eres supervisora y acabas de explicar un nuevo procedimiento. Preguntas:
          “¿Alguna duda?” y todo el mundo responde que no. Una semana después descubres que nadie lo
          aplica correctamente. Este caso es más común de lo que parece.
        </p>

        <h4>¿Qué falló?</h4>
        <p>
          La pregunta “¿Alguna duda?” no verifica comprensión real. Muchas personas dicen “no” por
          vergüenza, por falta de confianza o porque creen que entendieron… hasta que intentan aplicarlo.
          El problema no es ausencia de información, sino ausencia de <strong>feedback verificable</strong>.
        </p>

        <div className="divider" />

        <h4>¿Cómo mejorarías el feedback?</h4>
        <p>
          Para que el feedback funcione como retroalimentación, debe obligar a demostrar comprensión y
          permitir ajustar el mensaje antes de que aparezcan errores.
        </p>

        <ul className="checklist">
          <li>
            <strong>Verificación activa:</strong> “María, ¿cómo lo aplicarías con un cliente VIP?”
          </li>
          <li>
            <strong>Casos prácticos:</strong> presentar situaciones reales para resolver en grupo.
          </li>
          <li>
            <strong>Reformulación:</strong> pedir que lo expliquen con sus palabras y pasos.
          </li>
          <li>
            <strong>Seguimiento:</strong> revisar a los 2–3 días cómo se está aplicando.
          </li>
        </ul>
      </div>
    </details>

    {/* =====================================================
        4) PLAN DE ACCIÓN PERSONAL (sin checkboxes para no meter estado)
       ===================================================== */}
    <details className="topic-details">
      <summary>4. Plan de acción personal</summary>

      <div className="topic-details__content">
        <p>
          El aprendizaje se consolida cuando lo conviertes en práctica. Este plan te ayuda a aplicar
          lo aprendido de forma inmediata en tu puesto o en tus simulaciones de atención al cliente.
        </p>

        <div className="card card--muted">
          <h4>📅 Esta semana voy a…</h4>
          <ul className="checklist">
            <li>Detectar un flujo comunicativo que no funciona bien en mi área.</li>
            <li>Verificar comprensión en tres conversaciones importantes usando preguntas concretas.</li>
            <li>Aplicar una mejora en cómo solicito y registro feedback.</li>
          </ul>

          <div className="divider" />

          <h4>📈 En las próximas dos semanas…</h4>
          <ul className="checklist">
            <li>Proponer una mejora concreta de comunicación interna a mi responsable.</li>
            <li>Compartir con un compañero una técnica útil (escucha activa, reformulación o escalado).</li>
            <li>Medir el impacto con una métrica sencilla (tiempo, errores, quejas o aclaraciones).</li>
          </ul>
        </div>
      </div>
    </details>

    {/* =====================================================
        5) RESUMEN FINAL (sin framework inventado)
       ===================================================== */}
    <details className="topic-details">
      <summary>5. Resumen ejecutivo: lo imprescindible para llevarte</summary>

      <div className="topic-details__content">
        <p>
          Para cerrar el tema, quédate con una idea central: en la empresa, comunicar no es “emitir”
          mensajes, sino conseguir que las personas <strong>comprendan</strong>, <strong>actúen</strong> y
          se <strong>coordinen</strong> sin contradicciones.
        </p>

        <h4>Conceptos clave</h4>
        <ul className="checklist">
          <li>
            <strong>Información:</strong> transmisión unidireccional útil para datos objetivos y avisos claros.
          </li>
          <li>
            <strong>Comunicación:</strong> intercambio bidireccional necesario cuando hay interpretación,
            impacto emocional o cambio de hábitos.
          </li>
          <li>
            <strong>Feedback / retroalimentación:</strong> confirma comprensión y permite ajustar antes de que
            el error aparezca.
          </li>
        </ul>

        <div className="divider" />

        <h4>Aplicación inmediata en atención al cliente</h4>
        <ul className="checklist">
          <li>
            Verifica comprensión con reformulación: “Si he entendido bien, lo que necesitas es…”.
          </li>
          <li>
            Usa preguntas abiertas para obtener información útil: “¿Qué solución te encajaría mejor?”.
          </li>
          <li>
            Valida la emoción antes de la solución: “Entiendo tu frustración; vamos a resolverlo”.
          </li>
        </ul>

        <div className="divider" />

        <h4>Métricas sencillas para saber si mejoras</h4>
        <ul className="checklist">
          <li>Tiempo medio de respuesta y de resolución.</li>
          <li>Número de aclaraciones necesarias (indicador de falta de claridad).</li>
          <li>Porcentaje de resolución en el primer contacto.</li>
          <li>Quejas por información contradictoria.</li>
        </ul>

        <div className="callout callout--tip">
          <h4 className="callout-title">🌟 Reflexión final</h4>
          <p>
            Cuando los productos se parecen, la diferencia real está en cómo se comunica la empresa:
            internamente para coordinarse y externamente para atender con claridad, empatía y coherencia.
            En atención al cliente, cada interacción es una oportunidad de demostrar esa excelencia.
          </p>
        </div>
      </div>
    </details>
      </div>
      </section>
  </div>
</section>

 <Quiz
        title="🧪 Test de repaso: Informar y comunicar"
        meta="Autoevaluación (5 preguntas)"
        questions={quizInformarComunicar}
      />
     
    </TopicLayout>
  );
}
