import TopicLayout from "../../components/TopicLayout";
import Quiz from "../../components/Quiz";

const quizComunicacion = [
  {
    id: "q1",
    question: "En servicio, comunicar profesionalmente implica:",
    options: [
      "Dar mucha informacion en poco tiempo.",
      "Asegurar comprension, acuerdo y accion.",
      "Responder rapido aunque no se verifique.",
      "Usar siempre el canal escrito.",
    ],
    correctIndex: 1,
    feedbackOk: "Correcto. El criterio es comprension con resultado.",
    feedbackBad: "La comunicacion de calidad se valida por comprension y accion.",
  },
  {
    id: "q2",
    question: "La diferencia clave entre informar y comunicar es:",
    options: ["La extension", "El feedback", "El cargo del emisor", "La tecnologia"],
    correctIndex: 1,
    feedbackOk: "Exacto. Sin feedback no hay cierre comunicativo.",
    feedbackBad: "El elemento decisivo es el feedback.",
  },
  {
    id: "q3",
    question: "Si cliente recibe versiones distintas entre canales, falla:",
    options: ["Flujo horizontal", "Flujo ascendente", "Solo actitud del agente", "Solo el canal"],
    correctIndex: 0,
    feedbackOk: "Bien. Es un problema de coordinacion interdepartamental.",
    feedbackBad: "La incoherencia entre areas es falla horizontal.",
  },
  {
    id: "q4",
    question: "Cual es el mejor cierre de una incidencia?",
    options: [
      "Cualquier duda nos dices.",
      "Le envio la norma y revisa.",
      "Confirmamos accion, plazo y seguimiento.",
      "Ya esta explicado.",
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Un cierre profesional concreta siguientes pasos.",
    feedbackBad: "El cierre debe quedar verificable y operativo.",
  },
  {
    id: "q5",
    question: "Indicador mas robusto de calidad comunicativa:",
    options: [
      "Cantidad de correos enviados",
      "Duracion media de llamadas",
      "Resolucion en primer contacto con baja reapertura",
      "Numero de reuniones internas",
    ],
    correctIndex: 2,
    feedbackOk: "Correcto. Integra eficiencia, comprension y resultado.",
    feedbackBad: "Medir volumen no equivale a medir calidad.",
  },
];

export default function Tema02() {
  return (
    <TopicLayout
      title="Comunicacion profesional en atencion al cliente"
      intro="Tema inicial de nivel universitario: marco conceptual, flujos organizativos, protocolo de intervencion, evaluacion y transferencia a la practica."
      icon="💬"
    >
      <section className="hero">
        <div>
          <p>
            La atencion al cliente de alto nivel requiere procesos robustos y conversacion
            profesional. La comunicacion no es complemento: es infraestructura del servicio.
          </p>
          <div className="learning-objectives" style={{ marginTop: "1rem" }}>
            <h3>Resultados de aprendizaje</h3>
            <ul>
              <li>Definir comunicacion de servicio con rigor.</li>
              <li>Distinguir informacion y comunicacion en situaciones reales.</li>
              <li>Aplicar feedback para verificar comprension y accion.</li>
              <li>Diagnosticar fallas de flujo con impacto en cliente.</li>
              <li>Evaluar desempeno con indicadores pertinentes.</li>
            </ul>
          </div>
        </div>
        <figure className="media">
          <img src="/t2.png" alt="Comunicacion profesional con cliente" />
          <figcaption>La calidad del servicio se juega en cada interaccion.</figcaption>
        </figure>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>1. Fundamentos</h2>
          <span className="topic-section__meta">Base teorica y operativa</span>
        </div>
        <div className="card">
          <p>
            Comunicar no es solo emitir. Es construir significado compartido y acordar una
            accion verificable que reduzca incertidumbre del cliente.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Definicion operativa</th>
                <th>Criterio de calidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Informacion</strong></td>
                <td>Transmision de datos.</td>
                <td>Claridad y exactitud.</td>
              </tr>
              <tr>
                <td><strong>Comunicacion</strong></td>
                <td>Proceso bidireccional de ajuste.</td>
                <td>Comprension demostrada.</td>
              </tr>
              <tr>
                <td><strong>Feedback</strong></td>
                <td>Retorno para validar o corregir.</td>
                <td>Mejora de resultado.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>2. Informar vs comunicar</h2>
          <span className="topic-section__meta">Decision segun riesgo</span>
        </div>
        <div className="topic-accordion">
          <details className="topic-details" open>
            <summary>Regla profesional</summary>
            <div className="topic-details__content">
              <ul className="checklist">
                <li>Informa: dato objetivo y baja ambiguedad.</li>
                <li>Comunica: interpretacion, emocion o impacto alto.</li>
                <li>Comunica: cuando debes asegurar cumplimiento correcto.</li>
                <li>Comunica: si hay riesgo de conflicto o reputacion.</li>
              </ul>
            </div>
          </details>
          <details className="topic-details">
            <summary>Errores frecuentes</summary>
            <div className="topic-details__content">
              <ul>
                <li>Confundir envio con comprension.</li>
                <li>Cerrar sin acordar siguiente paso.</li>
                <li>Usar canal por habito y no por objetivo.</li>
                <li>Explicar en tecnico sin traducir a accion.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>3. Flujos y coordinacion interna</h2>
          <span className="topic-section__meta">Impacto directo en experiencia</span>
        </div>
        <div className="card card--muted">
          <ul className="checklist">
            <li><strong>Descendente:</strong> criterios y politicas de servicio.</li>
            <li><strong>Ascendente:</strong> incidencias y aprendizaje del terreno.</li>
            <li><strong>Horizontal:</strong> coherencia entre departamentos.</li>
          </ul>
          <div className="callout callout--warning">
            <h4 className="callout-title">Riesgo</h4>
            <p>Si los flujos fallan, el cliente percibe incoherencia y suben las quejas.</p>
          </div>
        </div>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>4. Protocolo de intervencion (5 pasos)</h2>
          <span className="topic-section__meta">Aplicacion practica</span>
        </div>
        <ol>
          <li><strong>Apertura:</strong> encuadre y objetivo.</li>
          <li><strong>Escucha:</strong> hecho, impacto y expectativa.</li>
          <li><strong>Validacion:</strong> reconocer emocion con criterio.</li>
          <li><strong>Propuesta:</strong> solucion concreta y viable.</li>
          <li><strong>Cierre:</strong> accion, plazo y verificacion.</li>
        </ol>
      </section>

      <section className="topic-section">
        <div className="topic-section__title">
          <h2>5. Evaluacion y mejora</h2>
          <span className="topic-section__meta">Metricas de calidad</span>
        </div>
        <ul className="checklist">
          <li>Resolucion en primer contacto (FCR).</li>
          <li>Tasa de reapertura.</li>
          <li>Tiempo medio de respuesta y resolucion.</li>
          <li>Satisfaccion postinteraccion.</li>
          <li>Consistencia entre canales.</li>
        </ul>
      </section>

      <section className="topic-section debate">
        <h2>Taller de integracion</h2>
        <div className="debate-prompt">
          Disena una intervencion para una reclamacion con contradiccion entre web,
          call center y tienda.
        </div>
        <ol className="debate-questions">
          <li>Diagnostica causa raiz.</li>
          <li>Propone respuesta en 5 pasos.</li>
          <li>Define 3 metricas de mejora a 30 dias.</li>
          <li>Justifica impacto en confianza y reputacion.</li>
        </ol>
      </section>

      <Quiz
        title="Evaluacion de repaso: comunicacion profesional"
        meta="Autoevaluacion (5 preguntas)"
        questions={quizComunicacion}
      />
    </TopicLayout>
  );
}
