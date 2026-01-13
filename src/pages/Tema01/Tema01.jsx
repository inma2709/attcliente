import { useMemo, useState } from "react";
import TopicLayout from "../../components/TopicLayout";

import t1Img from "../../assets/t1.png";


/**
 * Tema01.jsx
 * ✅ Usa TopicLayout (tu componente)
 * ✅ Estructura: Teoría (details/summary) + Vídeos + Debate + Test (5) con corrección online
 * ✅ Usa SOLO clases globales: container, topic, hero, media, muted, topic-section,
 *    topic-section__title, topic-section__meta, topic-accordion, topic-details,
 *    topic-details__content, video-block, embed, video-title, video-meta,
 *    callout, callout-title, debate, debate-prompt, debate-questions,
 *    quiz, quiz-question, quiz-question__title, quiz-options, quiz-option,
 *    quiz-feedback, quiz-feedback--ok, quiz-feedback--bad, btn, btn-primary, btn-row
 */

export default function Tema01() {
  // ✅ Ajusta a tu imagen real (public/images/...)
 const image = {
  src: t1Img,
  alt: "Organización empresarial y proceso de información",
  caption:
    "La empresa como organismo vivo: estructura, información y decisiones al servicio del cliente.",
};


  // ✅ Cambia estos IDs por vídeos reales en español cuando los tengas
  const VIDEOS = [
    {
      title: "Vídeo 1 · Organización empresarial (visión general)",
      meta: "Duración sugerida: 6–10 min · Ver después de la teoría",
      id: "5xGoNUkHpZQ",
    },
    {
      title: "Vídeo 2 · Comunicación interna y toma de decisiones",
      meta: "Duración sugerida: 6–10 min · Ver antes del debate",
      id: "xOruWLZmVYM",
    },
  ];

  const quiz = useMemo(
    () => [
      {
        id: "q1",
        text: "¿Cuál de los siguientes NO es uno de los cuatro componentes esenciales de la empresa?",
        options: [
          "Factor humano",
          "Bienes económicos (capital)",
          "Publicidad y marketing",
          "Entorno",
        ],
        correctIndex: 2,
        explanation:
          "Los cuatro componentes son: factor humano, bienes económicos, organización y entorno.",
      },
      {
        id: "q2",
        text: "La diferencia principal entre información y comunicación es que…",
        options: [
          "La información es bidireccional y la comunicación unidireccional",
          "La información es unidireccional y la comunicación es bidireccional con feedback",
          "La comunicación solo ocurre por escrito",
          "La información no influye en la toma de decisiones",
        ],
        correctIndex: 1,
        explanation:
          "Información: transmisión en una sola dirección. Comunicación: proceso bidireccional que requiere respuesta.",
      },
      {
        id: "q3",
        text: "¿Qué tipo de comunicación permite que la dirección conozca lo que ocurre en la “primera línea” de atención al cliente?",
        options: ["Descendente", "Ascendente", "Horizontal", "Informal"],
        correctIndex: 1,
        explanation:
          "La comunicación ascendente lleva informes, quejas y sugerencias desde niveles operativos hacia la dirección.",
      },
      {
        id: "q4",
        text: "Las funciones directivas (POCC) son…",
        options: [
          "Planificar, Organizar, Gestionar (Dirección), Controlar",
          "Producir, Operar, Coordinar, Comunicar",
          "Pensar, Ordenar, Crear, Corregir",
          "Prever, Observar, Corregir, Castigar",
        ],
        correctIndex: 0,
        explanation:
          "POCC: Planificar, Organizar, Gestionar (Dirección) y Controlar.",
      },
      {
        id: "q5",
        text: "En atención al cliente, un CRM se utiliza principalmente para…",
        options: [
          "Sustituir por completo a los agentes humanos",
          "Gestionar la relación con el cliente como activo estratégico (historial, necesidades, preferencias)",
          "Evitar la recogida de datos personales",
          "Crear organigramas automáticamente",
        ],
        correctIndex: 1,
        explanation:
          "Un CRM centraliza la relación con el cliente y su información para mejorar la personalización y la toma de decisiones, cumpliendo RGPD/LOPDGDD.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(quiz.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    for (const q of quiz) {
      if (answers[q.id] === q.correctIndex) s += 1;
    }
    return s;
  }, [answers, quiz]);

  const handleSelect = (qid, idx) => {
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Object.fromEntries(quiz.map((q) => [q.id, null])));
    setSubmitted(false);
  };

  return (
    <TopicLayout
      title="Tema 1 · La organización empresarial y el proceso de información"
      intro="Bienvenidos a este primer bloque temático. Como expertos en la excelencia del servicio, debemos entender que una empresa no es solo un edificio o un producto, sino una institución única que funciona como un organismo vivo gracias a la información. En este tema desarrollaremos los pilares de las organizaciones modernas y cómo el flujo de datos determina el éxito o el fracaso en la atención al cliente."
      image={image}
    >
      {/* =====================================================
          TEORÍA (details/summary)
      ====================================================== */}

   <section className="topic-section">
  <div className="topic-section__title">
    <h2>🧩 Lectura guiada de la infografía</h2>
    <span className="topic-section__meta">
      Interpretación visual del tema
    </span>
  </div>

  <div className="topic-accordion">
    <details className="topic-details">
      <summary>La empresa como organismo vivo</summary>

      <div className="topic-details__content">
        <p>
          La infografía <strong>«La Anatomía de una Empresa Exitosa»</strong> representa
          la empresa como un <strong>organismo vivo</strong>, en el que todos sus elementos
          están interconectados y dependen entre sí para garantizar su supervivencia.
        </p>

        <p>
          La imagen sintetiza los <strong>elementos fundamentales de la empresa</strong>
          (personas, recursos, organización y entorno), que se desarrollan de forma
          sistemática en el apartado teórico, y los muestra funcionando de manera conjunta.
        </p>

        <h4>La comunicación como sistema nervioso</h4>
        <p>
          En el centro de la imagen, la figura humana simboliza que la
          <strong> comunicación interna y externa</strong> actúa como el sistema nervioso
          de la organización, permitiendo la coordinación, la toma de decisiones y la
          correcta atención al cliente.
        </p>

        <ul>
          <li><strong>Comunicación descendente:</strong> transmite directrices y valores.</li>
          <li><strong>Comunicación ascendente:</strong> recoge información del cliente.</li>
          <li><strong>Comunicación horizontal:</strong> coordina equipos.</li>
        </ul>

        <h4>Impacto en el cliente</h4>
        <p>
          La infografía destaca que <strong>el 68 % de los clientes se pierde por una mala atención</strong>,
          subrayando que el éxito empresarial no depende solo del producto, sino de la
          experiencia vivida por el cliente.
        </p>

        <div className="callout callout--example">
          <h4 className="callout-title">✈️ Analogía visual</h4>
          <p>
            La empresa funciona como un <strong>aeropuerto</strong>: si fallan los sistemas
            de coordinación y comunicación, el pasajero —el cliente— no llega satisfecho
            a su destino.
          </p>
        </div>
      </div>
    </details>
  </div>
</section>


      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📘 Teoría</h2>
         
        </div>

        <div className="topic-accordion">
          {/* 1 */}
          <details className="topic-details" open>
            <summary>1. Elementos fundamentales de la empresa</summary>
            <div className="topic-details__content">
              <p>
                La empresa se define como una <strong>unidad económica y social</strong>{" "}
                que utiliza un conjunto de personas, bienes materiales y recursos
                financieros para producir bienes o servicios que satisfacen
                necesidades en el mercado. Para que este mecanismo sea eficiente,
                debemos identificar sus <strong>cuatro componentes esenciales</strong>.
              </p>

              <h4>Componentes esenciales</h4>
              <ul>
                <li>
                  <strong>Factor humano:</strong> el elemento más valioso y dinámico.
                  Incluye a propietarios o socios (aportan capital), administradores o
                  directivos (toman decisiones estratégicas) y plantilla (ejecuta tareas
                  operativas). En atención al cliente, es el <em>rostro</em> de la organización.
                </li>
                <li>
                  <strong>Bienes económicos (capital):</strong> recursos{" "}
                  <strong>tangibles</strong> (edificios, maquinaria, materias primas,
                  tesorería) e <strong>intangibles</strong> (prestigio de marca,
                  imagen corporativa, patentes y procedimientos de trabajo que diferencian
                  a la empresa).
                </li>
                <li>
                  <strong>Organización:</strong> sistema de relaciones de autoridad,
                  coordinación y comunicación que ordena la actividad del grupo humano
                  para lograr metas. Sin organización, los recursos no trabajan en sintonía
                  para servir al cliente.
                </li>
                <li>
                  <strong>Entorno:</strong> personas e instituciones con las que la empresa
                  interactúa (competencia, organismos públicos y, por supuesto, el{" "}
                  <strong>cliente</strong>, motivo principal de la existencia del negocio).
                </li>
              </ul>

              <div className="callout callout--info">
                <h4 className="callout-title">💡 Clave para atención al cliente</h4>
                <p>
                  La empresa busca fines económicos (beneficios) y sociales (servicio a la
                  comunidad), pero esto solo es posible si se gestiona el{" "}
                  <strong>ciclo de vida del cliente</strong>: el cliente es quien, en última instancia,
                  paga los salarios de toda la organización.
                </p>
              </div>
            </div>
          </details>
        
 

  <div className="topic-accordion">
    <details className="topic-details">
      <summary>2. El cliente como motor del “organismo empresa”</summary>
                    <h2>🎯 ¿Por qué el cliente es la razón de ser de una empresa?</h2>
      <div className="topic-details__content">
        <p>
          Para entender por qué el cliente es la razón de ser de una empresa, hay
          que mirar la organización como un <strong>organismo vivo</strong> que
          necesita un “nutriente” esencial para sobrevivir:{" "}
          <strong>la satisfacción del usuario</strong>. Sin cliente, no hay
          ingresos, no hay propósito y no hay continuidad.
        </p>

        <h4>1) El cliente como único motor económico</h4>
        <p>
          Desde la perspectiva financiera, el cliente es la{" "}
          <strong>única fuente real de ingresos</strong>. En términos claros:
          el cliente es quien, en última instancia,{" "}
          <strong>paga los salarios</strong> de toda la organización. Sin su decisión
          de compra, los recursos tangibles (local, maquinaria) e intangibles
          (prestigio, marca) pierden sentido.
        </p>

        <h4>2) El cliente define el propósito del producto</h4>
        <p>
          Muchas veces se piensa que una empresa existe “para fabricar productos”,
          pero ocurre lo contrario: <strong>los productos existen porque hay clientes</strong>{" "}
          con necesidades. Por eso, una empresa bien orientada no se centra solo en
          el ciclo de vida del producto, sino en el{" "}
          <strong>ciclo de vida del cliente</strong>: construir relación, confianza
          y continuidad más allá de una venta puntual.
        </p>

        <h4>3) El cliente decide la supervivencia en un mercado competitivo</h4>
        <p>
          En un mercado con alternativas, el cliente tiene{" "}
          <strong>poder de elección</strong>. Si una empresa no cuida la atención,
          otra lo hará. Por eso la experiencia del cliente es estratégica: una mala
          atención no solo genera quejas, genera <strong>pérdida de clientes</strong>.
        </p>

        <h4>4) Fidelización: de cliente a “apóstol”</h4>
        <p>
          El cliente no es un dato: es una persona con expectativas. La atención al
          cliente es la herramienta que le demuestra{" "}
          <strong>lo importante que es</strong>. El objetivo no es solo “satisfacer”,
          sino fidelizar: convertir clientes en{" "}
          <strong>recomendadores</strong> (los que hablan bien, repiten y traen a otros).
        </p>

        <div className="callout callout--tip">
          <h4 className="callout-title">✅ Resumen didáctico (3 ideas clave)</h4>
          <ul>
            <li>
              <strong>Sustento:</strong> el cliente inyecta ingresos para pagar nóminas y proveedores.
            </li>
            <li>
              <strong>Propósito:</strong> el cliente define qué se crea y cómo debe evolucionar el servicio.
            </li>
            <li>
              <strong>Existencia:</strong> la lealtad del cliente determina si la empresa sobrevive o desaparece.
            </li>
          </ul>
        </div>

        <div className="callout callout--example">
          <h4 className="callout-title">⛵ Analogía: la empresa como barco de vela</h4>
          <p>
            Imagina que la empresa es un <strong>barco de vela</strong>: el personal es
            la tripulación, el capital es el casco y el producto es el destino.
            Pero el <strong>cliente es el viento</strong>. Sin viento, por muy preparado
            que esté el equipo y por muy fuerte que sea el barco, no se avanza:
            todo se queda parado.
          </p>
        </div>
      </div>
    </details>
  </div>

        
          <details className="topic-details">
            <summary>3. Estructura jerárquica organizacional</summary>
            <div className="topic-details__content">
              <p>
                Toda empresa necesita un orden para funcionar. La{" "}
                <strong>estructura organizativa</strong> es la forma en que se disponen sus
                elementos para alcanzar los objetivos a largo plazo.
              </p>

              <h4>Principios de la organización empresarial</h4>
              <ul>
                <li>
                  <strong>Jerarquía:</strong> niveles de autoridad desde la alta dirección
                  hasta los niveles operativos, con cadena de mando clara.
                </li>
                <li>
                  <strong>Especialización:</strong> división del trabajo para explotar
                  habilidades específicas; mejora productividad y calidad del servicio.
                </li>
                <li>
                  <strong>Autoridad y responsabilidad:</strong> la facultad de mandar debe
                  ir acompañada de rendición de cuentas por resultados.
                </li>
                <li>
                  <strong>Coordinación:</strong> esfuerzo conjunto entre departamentos para evitar
                  duplicidades y conflictos.
                </li>
                <li>
                  <strong>Flexibilidad:</strong> capacidad de adaptarse a cambios del mercado o a
                  necesidades del cliente para garantizar supervivencia.
                </li>
              </ul>

              <h4>Organización formal e informal</h4>
              <ul>
                <li>
                  <strong>Formal:</strong> estructura planificada y oficial definida por la dirección,
                  representada habitualmente en un <strong>organigrama</strong> (relaciones jerárquicas y
                  flujos de comunicación oficiales).
                </li>
                <li>
                  <strong>Informal:</strong> surge por relaciones personales y afinidades. Aunque no aparece
                  en el organigrama, influye en el clima laboral y en la rapidez con la que se mueve la información.
                </li>
              </ul>

              <h4>Departamentalización</h4>
              <p>
                Las empresas se dividen por función (Ventas, Administración, RR. HH.), territorio o producto.
                En organizaciones modernas, atención al cliente puede tener un papel estratégico prioritario o secundario,
                pero siempre debe estar en estrecha comunicación con comercial y marketing.
              </p>
            </div>
          </details>

          {/* 3 */}
          <details className="topic-details">
            <summary>4. Flujos de información empresarial</summary>
            <div className="topic-details__content">
              <p>
                Es fundamental distinguir entre <strong>información</strong> (transmisión de datos en una sola dirección)
                y <strong>comunicación</strong> (proceso bidireccional que requiere respuesta o feedback).
                En una empresa, la información es el <strong>“sistema nervioso”</strong> que permite la toma de decisiones.
              </p>

              <h4>Flujos de comunicación interna</h4>
              <ul>
                <li>
                  <strong>Descendente:</strong> de superiores a subordinados (órdenes, planes, circulares). Vital para
                  transmitir misión y valores.
                </li>
                <li>
                  <strong>Ascendente:</strong> de subordinados a superiores (informes, quejas, sugerencias). Permite
                  conocer qué ocurre en la “primera línea”.
                </li>
                <li>
                  <strong>Horizontal:</strong> entre personas del mismo nivel para coordinar tareas y resolver problemas rápido.
                </li>
                <li>
                  <strong>Staff y funcional:</strong> canales de asesoramiento técnico que apoyan a la dirección sin autoridad directa de mando.
                </li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ El peligro de los rumores</h4>
                <p>
                  Cuando falla la comunicación formal, aparece la comunicación informal en forma de rumores o
                  especulaciones. Pueden ser destructivos para la imagen interna; por ello, la dirección debe ser
                  transparente y proporcionar información veraz de manera oportuna.
                </p>
              </div>

              <div className="callout callout--example">
                <h4 className="callout-title">🧪 Ejemplo: “Cometa Halley”</h4>
                <p>
                  Ilustra cómo un mensaje original puede distorsionarse al pasar por múltiples niveles jerárquicos
                  si no existen canales claros.
                </p>
              </div>
            </div>
          </details>

          {/* 4 */}
          <details className="topic-details">
            <summary>5. Proceso de toma de decisiones</summary>
            <div className="topic-details__content">
              <p>
                La toma de decisiones es la función principal de la directiva y se basa directamente en la{" "}
                <strong>calidad de la información</strong> disponible.
              </p>

              <h4>Funciones directivas (POCC)</h4>
              <ul>
                <li><strong>Planificar:</strong> fijar objetivos estratégicos y tácticos (p. ej., mejorar satisfacción del cliente).</li>
                <li><strong>Organizar:</strong> diseñar la estructura y repartir responsabilidades.</li>
                <li><strong>Gestionar (Dirección):</strong> liderar y motivar al personal para ejecutar los planes.</li>
                <li><strong>Controlar:</strong> analizar el cumplimiento de objetivos y corregir desviaciones.</li>
              </ul>

              <h4>Teorías de liderazgo (Douglas McGregor)</h4>
              <ul>
                <li>
                  <strong>Teoría X:</strong> mando autoritario; se cree que el empleado evita el trabajo.
                </li>
                <li>
                  <strong>Teoría Y:</strong> mando participativo; se cree que el trabajo es natural y el empleado busca responsabilidad.
                </li>
              </ul>

              <div className="callout callout--info">
                <h4 className="callout-title">✅ Orientación a excelencia en servicio</h4>
                <p>
                  Las organizaciones orientadas a la excelencia suelen fomentar estilos participativos (Teoría Y),
                  porque favorecen la implicación del equipo en la satisfacción del cliente.
                </p>
              </div>
            </div>
          </details>

          {/* 5 */}
          <details className="topic-details">
            <summary>6. Sistemas de información gerencial</summary>
            <div className="topic-details__content">
              <p>
                Un <strong>sistema de información</strong> es el conjunto de métodos de gestión que, mediante la
                colaboración entre personas, tecnologías y procedimientos, apoya la toma de decisiones.
              </p>

              <h4>Componentes del sistema</h4>
              <ul>
                <li><strong>Usuarios:</strong> personas que introducen o reciben información.</li>
                <li><strong>Información:</strong> datos estructurados con significado.</li>
                <li>
                  <strong>Soporte:</strong> hardware (ordenadores, centralitas) y software (programas de gestión)
                  que permiten procesar y almacenar datos.
                </li>
              </ul>

              <h4>CRM y protección de datos</h4>
              <p>
                En atención al cliente, la herramienta tecnológica más potente es el <strong>CRM</strong> (Customer Relationship
                Management), que permite gestionar la relación con el usuario como un activo estratégico.
                Su uso implica responsabilidad legal: cumplir <strong>RGPD</strong> y <strong>LOPDGDD</strong>,
                garantizar confidencialidad, obtener consentimiento y aplicar medidas de seguridad.
              </p>

              <div className="callout callout--activity">
                <h4 className="callout-title">🧠 Momento Cero de la Verdad</h4>
                <p>
                  El cliente llega a la empresa tras investigar por internet. La organización debe procesar esa realidad y
                  ofrecer una respuesta de calidad: muchos clientes se pierden por una mala atención.
                </p>
              </div>

              <div className="callout callout--example">
                <h4 className="callout-title">✈️ Analogía: empresa como aeropuerto</h4>
                <p>
                  La estructura jerárquica son las pistas y la torre de control (dirección); los flujos de información son
                  las señales de radar; y el sistema de información es el software que coordina los despegues.
                  Si la comunicación falla, el sistema colapsa y el pasajero (cliente) no llega satisfecho.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* =====================================================
          VÍDEOS
      ====================================================== */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>🎥 Vídeos</h2>
          <span className="topic-section__meta">Refuerzo audiovisual</span>
        </div>

        {VIDEOS.map((v) => (
          <div className="video-block" key={v.id}>
            <h3 className="video-title">{v.title}</h3>
            <p className="video-meta muted">{v.meta}</p>

            <div className="embed">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </section>

      {/* =====================================================
          DEBATE
      ====================================================== */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>💬 Debate</h2>
          <span className="topic-section__meta">Aplicación a casos reales</span>
        </div>

        <div className="debate">
          <div className="debate-prompt">
            <p>
              En grupo, conectad lo aprendido con situaciones reales de atención al cliente.
              Justificad con ejemplos concretos.
            </p>
          </div>

          <ol className="debate-questions">
            <li>
              ¿Qué falla organizativa genera más problemas de atención al cliente: una jerarquía confusa o
              una coordinación deficiente entre departamentos? ¿Por qué?
            </li>
            <li>
              Pon un ejemplo de <strong>comunicación ascendente</strong> que debería existir para detectar
              y resolver incidencias del servicio.
            </li>
            <li>
              ¿Qué riesgos aparecen cuando la comunicación formal falla y domina el rumor? ¿Qué medidas
              aplicarías para frenarlo?
            </li>
            <li>
              ¿Qué estilo de liderazgo favorece más la excelencia en el servicio: Teoría X o Teoría Y?
              Defiende tu postura con un ejemplo.
            </li>
            <li>
              En un CRM, ¿qué dato del cliente te parece más útil para personalizar la atención sin invadir
              su privacidad?
            </li>
          </ol>
        </div>
      </section>

      {/* =====================================================
          TEST (5 preguntas con corrección online)
      ====================================================== */}
      <section className="topic-section">
        <div className="topic-section__title">
          <h2>📝 Test de repaso</h2>
          <span className="topic-section__meta">5 preguntas · autocorrección</span>
        </div>

        <form className="quiz" onSubmit={handleSubmit}>
          {quiz.map((q, idx) => {
            const chosen = answers[q.id];
            const isCorrect = chosen === q.correctIndex;

            return (
              <div className="quiz-question" key={q.id}>
                <p className="quiz-question__title">
                  {idx + 1}. {q.text}
                </p>

                <div className="quiz-options">
                  {q.options.map((opt, optIdx) => (
                    <label className="quiz-option" key={optIdx}>
                      <input
                        type="radio"
                        name={q.id}
                        checked={chosen === optIdx}
                        onChange={() => handleSelect(q.id, optIdx)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                {submitted && chosen !== null && (
                  <div
                    className={
                      isCorrect
                        ? "quiz-feedback quiz-feedback--ok"
                        : "quiz-feedback quiz-feedback--bad"
                    }
                  >
                    {isCorrect ? (
                      <>
                        ✔ Correcto. <span className="muted">{q.explanation}</span>
                      </>
                    ) : (
                      <>
                        ✖ Incorrecto.{" "}
                        <span className="muted">
                          {q.explanation} (Respuesta correcta:{" "}
                          <strong>{q.options[q.correctIndex]}</strong>)
                        </span>
                      </>
                    )}
                  </div>
                )}

                {submitted && chosen === null && (
                  <div className="quiz-feedback quiz-feedback--bad">
                    ✖ Sin responder.{" "}
                    <span className="muted">Elige una opción para corregir.</span>
                  </div>
                )}
              </div>
            );
          })}

          <div className="btn-row">
            <button type="submit" className="btn btn-primary">
              Corregir test
            </button>
            <button type="button" className="btn" onClick={handleReset}>
              Reiniciar
            </button>

            {submitted && (
              <span className="muted" style={{ alignSelf: "center" }}>
                Puntuación: <strong>{score}</strong> / {quiz.length}
              </span>
            )}
          </div>
        </form>
      </section>
    </TopicLayout>
  );
}
