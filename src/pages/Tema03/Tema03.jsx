// src/pages/Tema03/Tema03.jsx
import TopicLayout from "../../components/TopicLayout";
import Quiz from "../../components/Quiz";
const quizAtencionClienteFinal = [
  {
    id: "q1",
    question: "¿Cuál es la diferencia esencial entre informar y comunicar?",
    options: [
      "Informar implica diálogo y comunicar no.",
      "Comunicar requiere feedback que confirme la comprensión.",
      "Informar es más empático que comunicar.",
      "No existe una diferencia clara entre ambos conceptos."
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. Comunicar implica verificar que el mensaje ha sido entendido.",
    feedbackBad: "La clave está en el feedback: sin él solo hay transmisión de información."
  },
  {
    id: "q2",
    question: "Según la Pirámide de Maslow, ¿qué necesidad domina cuando un cliente exige garantías y plazos claros?",
    options: [
      "Necesidades sociales",
      "Autorrealización",
      "Autoestima",
      "Necesidades de seguridad"
    ],
    correctIndex: 3,
    feedbackOk: "Correcto. El cliente busca certeza, control y protección.",
    feedbackBad: "Cuando el cliente pide garantías y plazos, la necesidad dominante es la seguridad."
  },
  {
    id: "q3",
    question: "Un cliente agresivo suele estar defendiendo principalmente:",
    options: [
      "Reconocimiento social",
      "Seguridad y sensación de control",
      "Autorrealización personal",
      "Pertenencia al grupo"
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. La agresividad suele aparecer cuando el cliente siente amenazada su seguridad.",
    feedbackBad: "La agresividad suele estar relacionada con miedo, pérdida de control o sensación de injusticia."
  },
  {
    id: "q4",
    question: "¿Cuál es un error habitual que empeora una incidencia en atención al cliente?",
    options: [
      "Dar plazos claros",
      "Confirmar la solución por escrito",
      "Justificar el error sin ofrecer solución",
      "Mostrar empatía"
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Explicar sin resolver genera frustración y desconfianza.",
    feedbackBad: "El problema no es explicar, sino explicar sin resolver."
  },
  {
    id: "q5",
    question: "¿Qué técnica es propia de la escucha activa?",
    options: [
      "Hablar rápido para cerrar la conversación",
      "Parafrasear para confirmar comprensión",
      "Evitar preguntas para no incomodar",
      "Centrarse solo en el problema técnico"
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. El parafraseo confirma que el mensaje ha sido comprendido.",
    feedbackBad: "La escucha activa implica confirmar y verificar, no solo oír."
  },
  {
    id: "q6",
    question: "Ser asertivo en atención al cliente significa:",
    options: [
      "Ceder siempre para evitar conflictos",
      "Imponer normas sin explicarlas",
      "Defender límites con respeto y alternativas",
      "Evitar decir 'no' en cualquier caso"
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. La asertividad combina firmeza, respeto y solución.",
    feedbackBad: "La asertividad no es ni agresividad ni sumisión."
  },
  {
    id: "q7",
    question: "¿Cuál es la principal consecuencia de una mala atención?",
    options: [
      "Solo una reclamación puntual",
      "Pérdida de confianza y fidelidad",
      "Mayor volumen de información",
      "Mejor clima laboral"
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. El cliente suele irse por cómo se le trató, no solo por el problema.",
    feedbackBad: "La mala atención afecta directamente a la fidelidad del cliente."
  },
  {
    id: "q8",
    question: "¿Qué secuencia es más eficaz para recuperar a un cliente insatisfecho?",
    options: [
      "Justificación + silencio + solución",
      "Empatía + excusas + cierre rápido",
      "Claridad + empatía + solución + confirmación + seguimiento",
      "Descuento inmediato sin explicación"
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Esa secuencia transmite control, respeto y profesionalidad.",
    feedbackBad: "La recuperación del cliente requiere método, no improvisación."
  }
];


export default function Tema03() {
  return (
    <TopicLayout
        title="Tema 3. Psicología del cliente: comprensión del comportamiento y tipologías"
        intro="Factores psicológicos que influyen en el comportamiento del cliente, pirámide de Maslow aplicada, tipologías por lealtad y carácter, y habilidades clave."
        icon="🧠"
    >
      {/* =========================
          HERO DEL TEMA
         ========================= */}
      <section className="hero">
        <div>
          
          <p>
            En este tema aprenderás a <strong>comprender</strong> cómo piensa, siente y decide el
            cliente, y a <strong>adaptar tu comunicación</strong> a diferentes perfiles.
            La idea central es clara: <strong>no existe “un” cliente</strong>, existen personas con
            necesidades, expectativas y estilos de relación distintos, y tu eficacia profesional
            depende de saber leerlos y responder con método.
          </p>

          <div className="learning-objectives" style={{ marginTop: "1rem" }}>
            <h3>Objetivos de aprendizaje</h3>
            <ul>
              <li>Comprender los <strong>factores psicológicos</strong> que influyen en el comportamiento del cliente.</li>
              <li>Aplicar la <strong>pirámide de Maslow</strong> a situaciones reales de atención.</li>
              <li>Identificar tipologías por <strong>lealtad</strong> (apóstoles, leales, mercenarios, rehenes, indiferentes, terroristas).</li>
              <li>Reconocer perfiles por <strong>carácter</strong> (agresivo, minucioso, indeciso, autoritario, etc.).</li>
              <li>Dominar técnicas de <strong>empatía</strong>, <strong>escucha activa</strong> y <strong>asertividad</strong>.</li>
            </ul>
          </div>
        </div>

        <figure className="media">
          <img
            src="/t3.png"
            alt="Atención al cliente: comprensión del comportamiento y tipologías"
          />
          <figcaption>
            Personalizar no es “ser simpático”: es <strong>adaptar</strong> mensaje, canal y solución al perfil del cliente.
          </figcaption>
        </figure>
      </section>

      {/* =========================
          SECCIÓN 1 · MARCO PSICOLÓGICO
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1. Psicología del cliente: comprender antes de actuar</h2>
          <span className="topic-section__meta">Qué explica el comportamiento del cliente</span>
        </div>

        <p className="muted">
          Un mismo hecho (un retraso, una incidencia, un cambio de condiciones) puede generar reacciones
          completamente distintas. La psicología del cliente te ayuda a entender <strong>por qué</strong> ocurre
          y, sobre todo, <strong>qué hacer</strong> para mantener la relación y resolver con eficacia.
        </p>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>Factores psicológicos que influyen en la conducta</summary>
            <div className="topic-details__content">
              <ul className="checklist">
                <li>
                  <strong>Motivaciones:</strong> impulsos internos (comodidad, seguridad, ahorro, estatus, pertenencia).
                </li>
                <li>
                  <strong>Personalidad:</strong> rasgos estables (más impulsivo, prudente, dominante, reservado…).
                </li>
                <li>
                  <strong>Percepción:</strong> cómo interpreta lo que ocurre (lo “mismo” puede parecer grave o normal).
                </li>
                <li>
                  <strong>Aprendizaje:</strong> experiencias previas (si ya fue mal atendido, llega a la defensiva).
                </li>
                <li>
                  <strong>Creencias:</strong> ideas preconcebidas (“esta empresa nunca resuelve”, “aquí siempre engañan”).
                </li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Idea clave</h4>
                <p>
                  El cliente no reacciona solo al problema, sino al <strong>significado</strong> del problema:
                  “me han fallado”, “no me escuchan”, “me están tomando el pelo”, “me han respetado”.
                </p>
              </div>

              <div className="divider" />

              <h4>Factores personales y sociales (muy frecuentes en atención)</h4>
              <ul>
                <li><strong>Edad y etapa vital:</strong> prioridades diferentes (tiempo, seguridad, confianza).</li>
                <li><strong>Nivel cultural y experiencia:</strong> comprensión de tecnicismos y procesos.</li>
                <li><strong>Contexto emocional:</strong> estrés, prisa, cansancio, sensación de injusticia.</li>
                <li><strong>Rol en la decisión:</strong> decisor final, intermediario, influenciador.</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Ejemplo</h4>
                <p>
                  Dos clientes con el mismo retraso: uno solo quiere una fecha clara; otro quiere una explicación
                  porque interpreta el retraso como falta de respeto. La solución técnica puede ser igual,
                  pero la <strong>comunicación</strong> debe ser distinta.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Cómo usar esta psicología en 3 pasos</summary>
            <div className="topic-details__content">
              <ol>
                <li>
                  <strong>Detecta la necesidad dominante:</strong> ¿seguridad, rapidez, claridad, reconocimiento?
                </li>
                <li>
                  <strong>Lee el estilo del cliente:</strong> ¿directo, emocional, detallista, desconfiado?
                </li>
                <li>
                  <strong>Adapta tu respuesta:</strong> nivel de detalle, tono, ritmo, canal y confirmación final.
                </li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Micro-hábito</h4>
                <p>
                  Antes de dar una solución, resume en una frase: “Entonces, lo importante para usted ahora es…”
                  y confirma: “¿Correcto?”. Eso te evita el 80% de malentendidos.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

     {/* =========================
    SECCIÓN 2 · MASLOW APLICADO
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>2. Necesidades del cliente: Pirámide de Maslow aplicada al servicio</h2>
    <span className="topic-section__meta">Qué busca realmente el cliente</span>
  </div>

  <div className="card">
    <p>
      La <strong>Pirámide de Maslow</strong> es una herramienta para comprender cómo se organizan las
      <strong> necesidades humanas</strong> en distintos niveles de prioridad. La idea central es que,
      por norma general, las necesidades más básicas tienden a reclamar atención antes que las superiores.
      En el ámbito empresarial esto es clave: el cliente no compra un producto “por el producto”, sino para
      cubrir una <strong>carencia</strong> o resolver una necesidad concreta.
    </p>

    <p className="muted">
      En atención al cliente, Maslow ayuda a interpretar qué está defendiendo el usuario cuando reclama,
      duda o decide comprar. Por eso, no basta con “resolver”: hay que responder a la <strong>necesidad</strong>
      que el cliente siente amenazada o insatisfecha.
    </p>

    <div className="callout callout--tip">
      <h4 className="callout-title">🧠 Idea clave</h4>
      <p>
        Dos clientes pueden pedir lo mismo, pero por motivos distintos. Y un mismo producto puede satisfacer
        necesidades diferentes según la persona. Tu trabajo consiste en detectar el “para qué” real.
      </p>
    </div>
  </div>

  <div className="divider" />

  {/* =========================
      HUECO PARA IMAGEN
     ========================= */}
  <figure className="media">
    {/* Sustituye src por tu imagen */}
    <img
      src="/maslow.png"
      alt="Pirámide de Maslow: niveles de necesidades aplicados a la atención al cliente"
      loading="lazy"
    />
    <figcaption>
      Esquema de la Pirámide de Maslow para identificar la necesidad que el cliente intenta cubrir.
    </figcaption>
  </figure>

  <div className="divider" />

  {/* =========================
      TABLA APLICADA A SERVICIO
     ========================= */}
  <table className="table">
    <thead>
      <tr>
        <th>Nivel</th>
        <th>Necesidad</th>
        <th>Qué suele expresar el cliente</th>
        <th>Cómo responder</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1</strong></td>
        <td>Fisiológicas</td>
        <td>“Lo necesito ya”, “Es urgente”, “No puedo esperar”</td>
        <td>Prioriza rapidez, pasos claros, minimiza fricción y confirma el siguiente paso</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>Seguridad</td>
        <td>Garantía, devoluciones, miedo a perder dinero, desconfianza</td>
        <td>Da certezas: plazos, condiciones, evidencias y confirmación por escrito</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>Sociales</td>
        <td>Necesita cercanía, pertenencia, sentirse atendido como persona</td>
        <td>Calidez, escucha activa, acompañamiento: “estamos contigo”</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td>Autoestima</td>
        <td>Busca reconocimiento, respeto, trato preferente o personalización</td>
        <td>Respeto, lenguaje cuidadoso, soluciones con dignidad (sin “culpa suya”)</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td>Autorrealización</td>
        <td>Valores, propósito, coherencia con una marca con la que se identifica</td>
        <td>Coherencia, transparencia, comunicación con sentido y compromiso</td>
      </tr>
    </tbody>
  </table>

  <div className="divider" />

  <div className="card card--muted">
    <h3>Cómo usar Maslow para detectar la necesidad real</h3>
    <p className="muted">
      Para aplicar Maslow, no te quedes en las palabras literales del cliente. Practica la empatía:
      “caminar con sus zapatos” significa entender qué necesidad está intentando proteger. A veces el
      cliente habla de un precio, pero en realidad busca <strong>seguridad</strong>; otras veces se queja
      de un detalle, pero lo que necesita es <strong>respeto</strong> y reconocimiento.
    </p>

    <ul className="checklist">
      <li>
        <strong>Si la emoción es miedo o incertidumbre</strong>, probablemente domina la necesidad de seguridad:
        pide garantías, confirmaciones y claridad.
      </li>
      <li>
        <strong>Si la emoción es enfado por trato recibido</strong>, puede estar en juego la autoestima:
        necesita respeto, reparación y un lenguaje no culpabilizador.
      </li>
      <li>
        <strong>Si busca pertenencia o cercanía</strong>, responde desde lo social: tono humano y acompañamiento.
      </li>
    </ul>

    <div className="callout callout--example">
      <h4 className="callout-title">🎯 Ejemplos rápidos por necesidad</h4>
      <ul>
        <li>
          <strong>Seguridad:</strong> quien contrata un seguro de viaje o un plan de pensiones busca estabilidad y protección.
        </li>
        <li>
          <strong>Social:</strong> un niño que pide un balón no busca “el objeto”, sino jugar y encajar con su grupo.
        </li>
        <li>
          <strong>Autoestima:</strong> quien elige un smartphone exclusivo puede estar buscando prestigio o reconocimiento.
        </li>
      </ul>
    </div>
  </div>

  <div className="divider" />

  {/* =========================
      HUECO PARA VÍDEO
     ========================= */}
  <div className="video-block">
    <h4 className="video-title">🎥 Vídeo de refuerzo: Pirámide de Maslow aplicada al cliente</h4>
    <p className="video-meta muted">
      Inserta aquí un vídeo que explique los niveles de Maslow con ejemplos de consumo y atención al cliente.
    </p>

    <div className="embed">
      <iframe
        src="https://www.youtube.com/embed/DJUAF0KdZ78"
        title="Pirámide de Maslow aplicada a la atención al cliente"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>

  <div className="divider" />

  <div className="callout callout--insight">
    <h4 className="callout-title">💡 Insight</h4>
    <p>
      Una misma solución puede fracasar si no responde a la <strong>necesidad emocional</strong> del cliente.
      Ante un error, la <strong>seguridad</strong> se recupera con claridad y garantías; y la
      <strong> autoestima</strong> se recupera con respeto, evitando frases que suenen a “culpa suya”.
      El objetivo no es solo cerrar una incidencia, sino construir confianza y fidelidad a lo largo del
      <strong> ciclo de vida del cliente</strong>.
    </p>
  </div>

  <div className="callout callout--case">
    <h4 className="callout-title">🪜 Analogía didáctica</h4>
    <p>
      Imagina las necesidades humanas como los peldaños de una escalera: no puedes saltar al último peldaño
      si los primeros están dañados. Tu labor es identificar en qué “peldaño” está el cliente y ofrecerle
      el apoyo exacto para avanzar.
    </p>
  </div>
</section>

      {/* =========================
          SECCIÓN 3 · CLIENTES SEGÚN LEALTAD
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Tipología del cliente según su lealtad (valor estratégico)</h2>
          <span className="topic-section__meta">Relación, fidelidad y riesgo reputacional</span>
        </div>

        <p className="muted">
          Esta clasificación ayuda a decidir <strong>qué cuidar</strong>, <strong>qué recuperar</strong> y
          <strong> qué prevenir</strong>. No todos los clientes tienen el mismo vínculo con la empresa.
        </p>

        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>Mapa de perfiles por lealtad</summary>
            <div className="topic-details__content">
              <table className="table">
                <thead>
                  <tr>
                    <th>Perfil</th>
                    <th>Cómo es</th>
                    <th>Qué necesita</th>
                    <th>Tu objetivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Apóstoles</strong></td>
                    <td>Muy satisfechos, recomiendan</td>
                    <td>Reconocimiento y coherencia</td>
                    <td>Fidelizar y convertir en embajadores</td>
                  </tr>
                  <tr>
                    <td><strong>Leales</strong></td>
                    <td>Estables, compran con frecuencia</td>
                    <td>Buen servicio constante</td>
                    <td>Mantener calidad y prevenir fallos</td>
                  </tr>
                  <tr>
                    <td><strong>Mercenarios</strong></td>
                    <td>Se mueven por precio/ofertas</td>
                    <td>Ventaja inmediata</td>
                    <td>Retener con valor (no solo descuento)</td>
                  </tr>
                  <tr>
                    <td><strong>Rehenes</strong></td>
                    <td>Insatisfechos sin alternativa</td>
                    <td>Soluciones rápidas y sensación de justicia</td>
                    <td>Recuperar confianza antes de que se vayan</td>
                  </tr>
                  <tr>
                    <td><strong>Indiferentes</strong></td>
                    <td>Bajo vínculo, poca implicación</td>
                    <td>Facilidad y claridad</td>
                    <td>Mejorar experiencia para evitar fuga</td>
                  </tr>
                  <tr>
                    <td><strong>Terroristas</strong></td>
                    <td>Muy insatisfechos, difunden críticas</td>
                    <td>Reparación + escucha + responsabilidad</td>
                    <td>Contener daño y aprender del fallo</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Punto crítico</h4>
                <p>
                  Un cliente “terrorista” no es “malo” por naturaleza: suele ser el resultado de una
                  experiencia negativa mal gestionada. La prioridad es <strong>reparar</strong>,
                  <strong> asumir</strong> y <strong>evitar repetición</strong>.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Cómo actuar según el perfil (guía rápida)</summary>
            <div className="topic-details__content">
              <div className="card card--muted">
                <h3>🧭 Guía práctica</h3>
                <ul className="checklist">
                  <li>
                    <strong>Apóstoles:</strong> agradece, personaliza, pide feedback y, si procede, invitación a reseña.
                  </li>
                  <li>
                    <strong>Leales:</strong> consistencia + resolución ágil (no “te descuides”: se van por acumulación de fallos).
                  </li>
                  <li>
                    <strong>Mercenarios:</strong> explica valor y alternativas (lo barato vs lo que incluye), no entres en guerra de precio.
                  </li>
                  <li>
                    <strong>Rehenes:</strong> prioriza justicia y control (“esto es lo que vamos a hacer y cuándo”).
                  </li>
                  <li>
                    <strong>Indiferentes:</strong> facilita al máximo (claridad, pasos, cero fricción).
                  </li>
                  <li>
                    <strong>Terroristas:</strong> protocolo de quejas: escucha → empatía → solución → confirmación → seguimiento.
                  </li>
                </ul>
              </div>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Regla de oro</h4>
                <p>
                  A mayor riesgo emocional o reputacional, mayor necesidad de <strong>comunicación bidireccional</strong>
                  y <strong>feedback verificable</strong> (no basta con “se le informó”).
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =========================
          SECCIÓN 4 · CLIENTES SEGÚN CARÁCTER
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Tipos de clientes según su carácter y tratamiento recomendado</h2>
          <span className="topic-section__meta">Personalización del trato</span>
        </div>

        <p>
          Esta tipología describe <strong>cómo se comporta</strong> el cliente en la interacción.
          No es para etiquetar, sino para <strong>adaptar la comunicación</strong> y evitar errores típicos.
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Cómo se manifiesta</th>
              <th>Qué le calma / convence</th>
              <th>Qué evitar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agresivo</strong></td>
              <td>Eleva tono, acusa, exige</td>
              <td>Calma + firmeza + pasos concretos</td>
              <td>Responder con agresividad o justificarte en exceso</td>
            </tr>
            <tr>
              <td><strong>Minucioso</strong></td>
              <td>Pide detalles, revisa todo</td>
              <td>Datos, pruebas, orden, confirmación</td>
              <td>Vaguedad, prisas, “no se preocupe” sin explicar</td>
            </tr>
            <tr>
              <td><strong>Indeciso</strong></td>
              <td>Le cuesta elegir, duda mucho</td>
              <td>Opciones limitadas + recomendación</td>
              <td>Demasiadas alternativas o presión</td>
            </tr>
            <tr>
              <td><strong>Autoritario</strong></td>
              <td>Quiere imponer su criterio</td>
              <td>Respeto + límites claros + alternativa</td>
              <td>Contradecir frontalmente o “ganar” la discusión</td>
            </tr>
            <tr>
              <td><strong>Polémico</strong></td>
              <td>Busca debate, provoca</td>
              <td>Hechos + calma + volver al objetivo</td>
              <td>Entrar en el juego, ironías, confrontación</td>
            </tr>
            <tr>
              <td><strong>Socializador</strong></td>
              <td>Conversador, valora cercanía</td>
              <td>Trato humano + control del tiempo</td>
              <td>Cortar en seco, frialdad, rigidez excesiva</td>
            </tr>
          </tbody>
        </table>

        <div className="callout callout--example">
          <h4 className="callout-title">🎭 Mini-ejemplo</h4>
          <p>
            <strong>Cliente minucioso:</strong> “¿Dónde está escrito eso?” → Respuesta eficaz: “Se lo detallo y se lo envío por email
            con el punto exacto. Además, le resumo la opción más recomendable para su caso.”
          </p>
        </div>
     
 <h2>Recursos audiovisuales</h2>

{/* =========================
    RECURSO 1 · CURSO UDEMY
   ========================= */}
<div className="video-block">
  <div className="video-title">Curso recomendado (Udemy)</div>
  <p className="video-meta muted">
    Objetivo: aprender técnicas para tratar clientes difíciles y mejorar el cierre desde la comunicación.
  </p>

  <p>
    <a
      href="https://www.udemy.com/course/conviertete-en-un-experto-cerrando-clientes-bryan-escobar/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Conviértete en un experto cerrando clientes (curso en español)
    </a>
  </p>
</div>

<div className="divider" />

{/* =========================
    VÍDEO 2 · YOUTUBE
   ========================= */}
<div className="video-block">
  <div className="video-title">Vídeo 2 · Tipos de clientes y cómo tratarlos</div>
  <p className="video-meta muted">
    Objetivo: identificar distintos tipos de clientes según su carácter y adaptar el trato.
  </p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/y-tkIZ_EPt4"
      title="Tipos de clientes y cómo tratarlos"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

<div className="divider" />

{/* =========================
    VÍDEO 3 · YOUTUBE
   ========================= */}
<div className="video-block">
  <div className="video-title">Vídeo 3 · Tipos de clientes y principios de atención</div>
  <p className="video-meta muted">
    Objetivo: reforzar técnicas de comunicación y control emocional según el perfil del cliente.
  </p>

  <div className="embed">
    <iframe
      src="https://www.youtube.com/embed/OF5Q7ZIPrw8"
      title="Tipos de clientes y principios de atención al cliente"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>

      </section>

  


{/* =========================
    SECCIÓN 7 · TALLER PRÁCTICO (AMPLIADO)
   ========================= */}
<section className="topic-section">
  <div className="topic-section__title">
    <h2>🎯 Taller práctico: identificar, comunicar y actuar</h2>
    <span className="topic-section__meta">
      Integración de necesidades, tipologías y habilidades comunicativas
    </span>
  </div>

  <p>
    Este taller tiene como objetivo <strong>entrenar la toma de decisiones comunicativas</strong>
    en situaciones reales de atención al cliente. No se trata de memorizar frases, sino de
    aplicar un método que combine <strong>análisis de la necesidad</strong>, elección del
    <strong>tono</strong>, uso de <strong>empatía, escucha activa y asertividad</strong>, y
    cierre con <strong>feedback verificable</strong>.
  </p>

  <div className="topic-accordion">

    {/* =====================================================
        CASO 1 · CLIENTE AGRESIVO
       ===================================================== */}
    <details className="topic-details" open>
      <summary>🧩 Caso 1: Cliente agresivo (tensión alta)</summary>

      <div className="topic-details__content">
        <p>
          El cliente llega visiblemente alterado y eleva el tono:
          <em> “¡Siempre igual! ¡Esto es una vergüenza! ¡Quiero hablar con el encargado!”</em>
        </p>

        <h4>Objetivo del ejercicio</h4>
        <p>
          Practicar la <strong>desescalada emocional</strong> sin perder el control ni ceder a exigencias
          improcedentes.
        </p>

        <h4>Tu tarea</h4>
        <ol>
          <li>Identifica la <strong>necesidad dominante</strong> según Maslow.</li>
          <li>Redacta tres frases que combinen <strong>empatía + asertividad</strong>.</li>
          <li>Define cómo cerrarás con <strong>confirmación y control</strong>.</li>
        </ol>

        <details>
          <summary>💡 Solución orientativa</summary>
          <div className="topic-details__content">
            <p>
              <strong>Necesidad dominante:</strong> seguridad (quiere control, justicia y certeza).
            </p>

            <ul className="checklist">
              <li>“Entiendo su enfado y vamos a revisarlo ahora mismo.”</li>
              <li>“Permítame que compruebe qué ha ocurrido para darle una respuesta clara.”</li>
              <li>“Esta es la solución que puedo ofrecerle y este es el plazo exacto.”</li>
            </ul>

            <p className="muted">
              <strong>Cierre:</strong> “Entonces queda así: … ¿Está de acuerdo? Se lo confirmo por escrito ahora mismo.”
            </p>
          </div>
        </details>
      </div>
    </details>

    {/* =====================================================
        CASO 2 · CLIENTE MINUCIOSO
       ===================================================== */}
    <details className="topic-details">
      <summary>🔍 Caso 2: Cliente minucioso (exige precisión)</summary>

      <div className="topic-details__content">
        <p>
          El cliente solicita todo con detalle:
          <em> “Explíqueme exactamente el proceso, qué incluye, qué no incluye y dónde está por escrito.”</em>
        </p>

        <h4>Objetivo del ejercicio</h4>
        <p>
          Entrenar la <strong>claridad estructurada</strong> y el uso de evidencias para generar confianza.
        </p>

        <h4>Tu tarea</h4>
        <ol>
          <li>Estructura la respuesta en <strong>4 bloques claros</strong>.</li>
          <li>Indica qué documento, enlace o prueba aportarías.</li>
          <li>Redacta la frase final de <strong>confirmación</strong>.</li>
        </ol>

        <details>
          <summary>💡 Solución orientativa</summary>
          <div className="topic-details__content">
            <ol>
              <li>Qué es el servicio y cuál es su objetivo.</li>
              <li>Pasos y tiempos aproximados.</li>
              <li>Qué incluye y qué no incluye.</li>
              <li>Qué ocurre si hay una incidencia.</li>
            </ol>

            <p className="muted">
              <strong>Confirmación:</strong> “¿Le queda claro así? Se lo envío por email con el punto exacto del documento.”
            </p>
          </div>
        </details>
      </div>
    </details>

    {/* =====================================================
        CASO 3 · CLIENTE CENTRADO EN PRECIO
       ===================================================== */}
    <details className="topic-details">
      <summary>💰 Caso 3: Cliente centrado solo en el precio</summary>

      <div className="topic-details__content">
        <p>
          El cliente compara y presiona:
          <em> “En otra tienda está más barato. Si no me lo igualas, me voy.”</em>
        </p>

        <h4>Objetivo del ejercicio</h4>
        <p>
          Evitar el enfrentamiento y desplazar la conversación de <strong>precio</strong> a
          <strong>valor y seguridad</strong>.
        </p>

        <h4>Tu tarea</h4>
        <ol>
          <li>Reformula sin discutir ni desacreditar a la competencia.</li>
          <li>Ofrece <strong>dos alternativas</strong> (ajustada y completa).</li>
          <li>Cierra con una pregunta que mantenga la relación.</li>
        </ol>

        <details>
          <summary>💡 Solución orientativa</summary>
          <div className="topic-details__content">
            <p>
              “Para comparar bien, le explico qué incluye este precio: garantía, soporte y devolución.
              Si lo prefiere, tengo una opción más económica y otra con más cobertura.
              ¿Qué valora más en su caso: precio mínimo o tranquilidad?”
            </p>
          </div>
        </details>
      </div>
    </details>

    {/* =====================================================
        CASO 4 · CLIENTE INDECISO
       ===================================================== */}
    <details className="topic-details">
      <summary>🧭 Caso 4: Cliente indeciso (duda constante)</summary>

      <div className="topic-details__content">
        <p>
          El cliente no se decide y vuelve una y otra vez sobre lo mismo:
          <em> “No sé… ¿y si luego no me convence? ¿Y si pasa algo?”</em>
        </p>

        <h4>Objetivo del ejercicio</h4>
        <p>
          Reducir ansiedad y facilitar la decisión sin presionar.
        </p>

        <h4>Tu tarea</h4>
        <ol>
          <li>Identifica la necesidad dominante.</li>
          <li>Limita opciones a un máximo de dos.</li>
          <li>Redacta una recomendación clara y calmada.</li>
        </ol>
      </div>
    </details>

    {/* =====================================================
        CASO 5 · CLIENTE SOCIALIZADOR
       ===================================================== */}
    <details className="topic-details">
      <summary>🗣️ Caso 5: Cliente socializador (habla mucho)</summary>

      <div className="topic-details__content">
        <p>
          El cliente busca cercanía y conversación, pero el tiempo es limitado.
        </p>

        <h4>Objetivo del ejercicio</h4>
        <p>
          Mantener el trato humano sin perder eficiencia ni foco.
        </p>

        <h4>Tu tarea</h4>
        <ol>
          <li>Escribe una frase de transición amable.</li>
          <li>Redirige la conversación al objetivo.</li>
          <li>Cierra con sensación positiva.</li>
        </ol>
      </div>
    </details>
  </div>

  <div className="callout callout--insight">
    <h4 className="callout-title">🌟 Cierre del taller</h4>
    <p>
      La excelencia en atención al cliente no está en improvisar, sino en aplicar un método:
      <strong> detectar la necesidad → adaptar el tono → usar la técnica adecuada → ofrecer solución → confirmar</strong>.
      Cuanto más practiques este proceso, más natural y eficaz será tu comunicación.
    </p>
  </div>
</section>


      {/* =========================
          SECCIÓN 8 · RESUMEN EJECUTIVO
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📋 Resumen ejecutivo</h2>
          <span className="topic-section__meta">Lo imprescindible para aplicar</span>
        </div>

        <div className="card card--muted">
          <ul className="checklist">
            <li>El comportamiento del cliente depende de motivaciones, personalidad, percepción y experiencia previa.</li>
            <li>Maslow te ayuda a identificar la necesidad dominante y ajustar tu respuesta.</li>
            <li>La tipología por lealtad orienta la estrategia: fidelizar, mantener, recuperar o contener daño.</li>
            <li>La tipología por carácter guía el trato: agresivo, minucioso, indeciso, autoritario, etc.</li>
            <li>Empatía + escucha activa + asertividad son habilidades críticas.</li>
            <li>Sin feedback no hay comunicación completa: confirma comprensión y cierre.</li>
          </ul>
        </div>
      </section>

     

      {/* =========================
          SECCIÓN 10 · CIERRE
         ========================= */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🔚 Cierre del tema</h2>
          <span className="topic-section__meta">Idea final</span>
        </div>

        <div className="callout callout--case">
          <h4 className="callout-title">🎯 Para recordar</h4>
          <p>
            La excelencia en atención al cliente no consiste en “hablar bien”, sino en <strong>comprender</strong>
            qué necesita esa persona, ajustar el trato, proponer una solución realista y cerrar con feedback.
            Cuando lo haces, conviertes una interacción en una relación.
          </p>
        </div>
      </section>
       <Quiz
        title="🧪 Test final: Comunicación y atención al cliente"
        meta="Autoevaluación del tema"
        questions={quizAtencionClienteFinal}
      />
    </TopicLayout>
  );
}
