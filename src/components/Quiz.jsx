import { useMemo, useState } from "react";

/**
 * Quiz
 * - Reutilizable: pásale un array `questions`
 * - Autocorrección real: calcula nota, marca correctas/incorrectas y muestra feedback
 * - Estilos: usa tus clases globales (.quiz, .quiz-question, .quiz-options, .quiz-feedback...)
 */
export default function Quiz({ title, meta, questions }) {
  const [answers, setAnswers] = useState(() => ({})); // { [questionId]: optionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const total = questions.length;

  const score = useMemo(() => {
    if (!isSubmitted) return 0;
    let ok = 0;
    for (const q of questions) {
      const picked = answers[q.id];
      if (picked === q.correctIndex) ok += 1;
    }
    return ok;
  }, [isSubmitted, answers, questions]);

  const allAnswered = useMemo(() => {
    return questions.every((q) => typeof answers[q.id] === "number");
  }, [answers, questions]);

  function selectOption(qid, optionIndex) {
    setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setIsSubmitted(false);
  }

  return (
    <section className="topic-section">
      <div className="topic-section__title">
        <h2>{title || "🧪 Test de repaso"}</h2>
        <span className="topic-section__meta">{meta || "Autoevaluación"}</span>
      </div>

      <div className="quiz">
        {questions.map((q, idx) => {
          const picked = answers[q.id];
          const isCorrect = isSubmitted && picked === q.correctIndex;
          const isWrong = isSubmitted && typeof picked === "number" && picked !== q.correctIndex;

          return (
            <div className="quiz-question" key={q.id}>
              <p className="quiz-question__title">
                {idx + 1}. {q.question}
              </p>

              <div className="quiz-options">
                {q.options.map((opt, optIndex) => (
                  <label className="quiz-option" key={optIndex}>
                    <input
                      type="radio"
                      name={q.id}
                      checked={picked === optIndex}
                      onChange={() => selectOption(q.id, optIndex)}
                      disabled={isSubmitted} // bloquea cambios tras corregir
                    />
                    {opt}
                  </label>
                ))}
              </div>

              {isSubmitted && (
                <>
                  {isCorrect && (
                    <div className="quiz-feedback quiz-feedback--ok">
                      ✔ {q.feedbackOk || "Correcto."}
                    </div>
                  )}

                  {isWrong && (
                    <div className="quiz-feedback quiz-feedback--bad">
                      ✖ {q.feedbackBad || "Incorrecto."}
                      {typeof q.correctIndex === "number" ? (
                        <div className="muted" style={{ marginTop: ".35rem" }}>
                          Respuesta correcta: <strong>{q.options[q.correctIndex]}</strong>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {!isCorrect && !isWrong && (
                    <div className="quiz-feedback">
                      Selecciona una opción para ver la corrección.
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="btn-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!allAnswered || isSubmitted}
          >
            Corregir test
          </button>

          <button type="button" className="btn" onClick={handleReset}>
            Reiniciar
          </button>

          {isSubmitted && (
            <span className="badge">
              Resultado: <strong>{score}</strong> / {total}
            </span>
          )}
        </div>

        {!allAnswered && !isSubmitted && (
          <p className="muted" style={{ marginTop: ".5rem" }}>
            Responde todas las preguntas para poder corregir.
          </p>
        )}
      </div>
    </section>
  );
}
