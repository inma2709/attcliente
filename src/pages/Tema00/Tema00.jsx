import TopicLayout from '../../components/TopicLayout';

const image = {
  src: '/t0.png',
  alt: 'Errores críticos en atención al cliente',
  caption: 'La atención al cliente: entre la tensión, la ética y la excelencia',
};

export default function Tema00() {
  return (
    <TopicLayout
      numero="0"
      title="Errores Críticos en Atención al Cliente: Diagnóstico y Prevención"
      intro="Este tema no pretende señalar culpables, sino identificar los errores más frecuentes en la atención al cliente para transformarlos en oportunidades de mejora. Reconocer que los errores son síntomas del sistema —no fracasos personales— es el primer paso hacia una atención profesional y ética. Comenzamos por aquí porque comprender dónde se falla es el mejor aprendizaje."
      image={image}
    >
      {/* ===================== SECCIÓN 1 ===================== */}
      <section className="topic-section">
        <h2>1. ¿Por Qué Empezar por los Errores?</h2>

        <p>
          La atención al cliente es una de las profesiones más exigentes del mundo laboral. Los errores rara vez nacen de falta de voluntad, sino de una convergencia de factores: <strong>presión operativa</strong>, <strong>sobrecarga emocional</strong>, <strong>falta de protocolos claros</strong>, <strong>herramientas insuficientes</strong>, <strong>objetivos contradictorios</strong> y <strong>cultura organizativa desalineada</strong>.
        </p>

        <p>
          Abordar los errores al inicio del manual cumple tres funciones formativas críticas:
        </p>

        <div className="error-functions-grid">
          <div className="error-func-card func-normalize">
            <div className="func-icon">✓</div>
            <h4>Normalizar sin culpabilizar</h4>
            <p>El error es universal. Los profesionales de élite no son quienes nunca fallan, sino quienes reconocen sus fallos y aprenden de ellos. Esto reduce la vergüenza y activa el aprendizaje.</p>
          </div>
          <div className="error-func-card func-system">
            <div className="func-icon">⚙️</div>
            <h4>Introducir una cultura de mejora</h4>
            <p>Un error es datos del sistema. Señala dónde falta método, estructura, entrenamiento o claridad. La pregunta no es «¿quién falló?» sino «¿qué en el sistema permitió este error?»</p>
          </div>
          <div className="error-func-card func-lab">
            <div className="func-icon">🔬</div>
            <h4>Convertir la experiencia cotidiana en laboratorio</h4>
            <p>Tu experiencia real es el mejor curriculum. Cada caso que has enfrentado es un caso de estudio. Este tema transforma esa experiencia en comprensión transferible.</p>
          </div>
        </div>

        <div className="callout callout--tip">
          <strong>💡 Principio fundamental:</strong> Un error detectado es una oportunidad de diferenciación. Mientras la competencia comete los mismos errores sin reflexión, tú estás desarrollando excelencia.
        </div>
      </section>

      {/* ===================== SECCIÓN 2 ===================== */}
      <section className="topic-section">
        <h2>2. Los 12 Errores Críticos en Atención al Cliente</h2>

        <p>
          Los siguientes errores aparecen con consistencia en múltiples sectores: retail, servicios, banca, sanidad, telecomunicaciones. Cada uno tiene un coste específico en relación cliente-empresa y en reputación personal del profesional.
        </p>

        <div className="errors-grid">
          <div className="error-card error-1">
            <div className="error-num">1</div>
            <div className="error-title">No escuchar activamente</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Preparar respuesta mientras el cliente habla, interrumpir, cambiar tema.</p>
              <p><strong>Causa:</strong> Prisa, estrés, falta de habilidad de escucha activa.</p>
              <p><strong>Coste:</strong> 78% de clientes insatisfechos reportan «no sentirse escuchados» (HBR Research, 2023).</p>
            </div>
          </div>

          <div className="error-card error-2">
            <div className="error-num">2</div>
            <div className="error-title">Culpabilizar al cliente</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> "Debería haber leído las condiciones", "Es por su culpa", "Eso no es nuestra responsabilidad".</p>
              <p><strong>Causa:</strong> Defensa emocional, falta de empatía, protocolo de empresa deficiente.</p>
              <p><strong>Coste:</strong> Destruye confianza instantáneamente. Un cliente culpabilizado es un cliente perdido.</p>
            </div>
          </div>

          <div className="error-card error-3">
            <div className="error-num">3</div>
            <div className="error-title">Prometer lo que no se puede cumplir</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> "Te lo mando mañana", "Lo resuelvo hoy", promesas de descuento sin autorización.</p>
              <p><strong>Causa:</strong> Deseo de complacer, falta de conocimiento de procesos internos, presión por cerrar rápido.</p>
              <p><strong>Coste:</strong> Genera doble frustración: la situación inicial más el incumplimiento de promesa.</p>
            </div>
          </div>

          <div className="error-card error-4">
            <div className="error-num">4</div>
            <div className="error-title">Ser impersonal o robótico</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Leer scripts sin adaptación, no usar el nombre del cliente, ignorar contexto personal.</p>
              <p><strong>Causa:</strong> Exceso de estandarización, agotamiento, falta de autoridad para personalizar.</p>
              <p><strong>Coste:</strong> El cliente se siente como un número. Genera baja lealtad y busca alternativas.</p>
            </div>
          </div>

          <div className="error-card error-5">
            <div className="error-num">5</div>
            <div className="error-title">No documentar o comunicar internamente</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Acordar algo pero no registro en sistema, no informar al equipo, no dejar anotación.</p>
              <p><strong>Causa:</strong> Sistemas débiles, falta de protocolo, prisa operativa.</p>
              <p><strong>Coste:</strong> El cliente tiene que repetir su caso múltiples veces. Multiplica frustración exponencialmente.</p>
            </div>
          </div>

          <div className="error-card error-6">
            <div className="error-num">6</div>
            <div className="error-title">Responder emocionalmente a hostilidad</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Defenderse, contraatacar, tomar personal la frustración del cliente.</p>
              <p><strong>Causa:</strong> Falta de gestión emocional, agotamiento, cultura punitiva.</p>
              <p><strong>Coste:</strong> Escala el conflicto. Convierte un problema solucionable en una guerra.</p>
            </div>
          </div>

          <div className="error-card error-7">
            <div className="error-num">7</div>
            <div className="error-title">No ofrecer alternativas o soluciones creativas</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> "No se puede", "Es la política", "No hay nada que hacer".</p>
              <p><strong>Causa:</strong> Falta de empoderamiento, mentalidad rígida, falta de entrenamiento en resolución.</p>
              <p><strong>Coste:</strong> Transforma un error reparable en un cliente definitivamente perdido.</p>
            </div>
          </div>

          <div className="error-card error-8">
            <div className="error-num">8</div>
            <div className="error-title">Olvidar el seguimiento tras la resolución</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Resolver y desaparecer, no verificar que el cliente quedó satisfecho.</p>
              <p><strong>Causa:</strong> Presión por volumen, falta de métricas de satisfacción, cultura de «cerrar casos».</p>
              <p><strong>Coste:</strong> Pierdes la oportunidad de fidelizar. El cliente no sabe si se resolvió realmente.</p>
            </div>
          </div>

          <div className="error-card error-9">
            <div className="error-num">9</div>
            <div className="error-title">No reconocer valor o tiempo del cliente</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Hacer esperar sin explicación, no agradecer, no reconocer inconveniente.</p>
              <p><strong>Causa:</strong> Automatización de servicio, presión operativa, falta de empatía programada.</p>
              <p><strong>Coste:</strong> El cliente se siente desvalorizado. Busca competencia que sí lo valore.</p>
            </div>
          </div>

          <div className="error-card error-10">
            <div className="error-num">10</div>
            <div className="error-title">Revelar información confidencial o privada</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Hablar de otros clientes, revelar datos de transacciones anteriores, compartir información sensible.</p>
              <p><strong>Causa:</strong> Falta de formación en confidencialidad, cultura permisiva, despreocupación.</p>
              <p><strong>Coste:</strong> Legal, reputacional y ético. Una vez perdida, la confianza no se recupera.</p>
            </div>
          </div>

          <div className="error-card error-11">
            <div className="error-num">11</div>
            <div className="error-title">No separar la emoción del cliente de la solución</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Rechazar al cliente porque está enfadado, negar ayuda por su tono.</p>
              <p><strong>Causa:</strong> Falta de inteligencia emocional, defensa del ego, ambiente tóxico.</p>
              <p><strong>Coste:</strong> Convierte un cliente frustrado en un cliente rechazado que hablará mal de ti.</p>
            </div>
          </div>

          <div className="error-card error-12">
            <div className="error-num">12</div>
            <div className="error-title">Ignorar retroalimentación o feedback</div>
            <div className="error-desc">
              <p><strong>Manifestación:</strong> Rechazar sugerencias, no valorar quejas constructivas, no cambiar procesos.</p>
              <p><strong>Causa:</strong> Rigidez, defensa de territorialidad, falta de cultura de mejora.</p>
              <p><strong>Coste:</strong> Los mismos errores se repiten. La empresa no aprende. El servicio no mejora.</p>
            </div>
          </div>
        </div>

        <div className="callout callout--warning">
          <strong>⚠️ Patrón observable:</strong> Los 12 errores comparten una raíz común: la falta de <strong>empatía aplicada</strong> + <strong>claridad operativa</strong> + <strong>empoderamiento profesional</strong>. Mejorando estos tres pilares, el 80% de los errores desaparecen naturalmente.
        </div>
      </section>

      {/* ===================== SECCIÓN 3 ===================== */}
      <section className="topic-section">
        <h2>3. Diagnóstico: ¿Dónde Está el Error?</h2>

        <p>
          Antes de corregir, hay que diagnosticar. Un mismo error puede tener orígenes distintos y, por tanto, soluciones diferentes.
        </p>

        <div className="diagnosis-matrix">
          <div className="diagnosis-level">
            <h4>Nivel Personal</h4>
            <ul>
              <li>Falta de habilidades (escucha activa, gestión emocional, resiliencia)</li>
              <li>Agotamiento emocional o burnout</li>
              <li>Creencias o prejuicios sobre los clientes</li>
              <li>Falta de autorregulación</li>
            </ul>
          </div>
          <div className="diagnosis-level">
            <h4>Nivel Estructural/Organizativo</h4>
            <ul>
              <li>Procesos no claros o contradictorios</li>
              <li>Sistemas de información deficientes</li>
              <li>Métricas mal alineadas (p.ej.: velocidad en lugar de calidad)</li>
              <li>Falta de autoridad para tomar decisiones</li>
            </ul>
          </div>
          <div className="diagnosis-level">
            <h4>Nivel Comunicativo/Cultural</h4>
            <ul>
              <li>Falta de información al equipo sobre cambios</li>
              <li>Cultura punitiva frente a errores</li>
              <li>Comunicación descendente sin feedback</li>
              <li>Desalineación entre lo que se predica y lo que se practica</li>
            </ul>
          </div>
        </div>

        <details className="topic-accordion">
          <summary>Herramienta de diagnóstico: Matriz de 5 Porqués (Toyota)</summary>
          <div className="topic-details">
            <p>Cuando identifiques un error, pregúntate «¿por qué?» cinco veces: </p>
            <ul>
              <li>¿Por qué ocurrió el error?</li>
              <li>¿Por qué eso sucedió?</li>
              <li>¿Por qué se permitió esa situación?</li>
              <li>¿Por qué no hay un control para evitarlo?</li>
              <li>¿Por qué no se ha abordado a nivel de sistema?</li>
            </ul>
            <p>La respuesta a la quinta pregunta revela generalmente la <strong>causa raíz</strong>, no el síntoma.</p>
          </div>
        </details>
      </section>

      {/* ===================== SECCIÓN 4 ===================== */}
      <section className="topic-section">
        <h2>4. Prevención: Protocolos y Mentalidades</h2>

        <p>
          La prevención no es punición; es empoderamiento. Los profesionales de élite previenen errores no por miedo, sino por método.
        </p>

        <h3>4.1 Protocolos preventivos</h3>
        <ul>
          <li><strong>Escucha documentada:</strong> Tomar notas durante la interacción, confirmar comprensión, registrar en CRM inmediatamente.</li>
          <li><strong>Promesas calibradas:</strong> Antes de prometer, verifica con tu jefe o sistema. Promete plazos mayores y cumple antes.</li>
          <li><strong>Seguimiento programado:</strong> Agenda automáticamente un follow-up tras 24-48h de resolución.</li>
          <li><strong>Escalada clara:</strong> Si no tienes autoridad, define dónde escala y con qué información.</li>
          <li><strong>Confidencialidad verificada:</strong> Pregúntate antes de cada dato: «¿puedo compartir esto?»</li>
        </ul>

        <h3>4.2 Mentalidades preventivas</h3>
        <ul>
          <li><strong>El cliente es información:</strong> No es un problema a esquivar, sino datos para mejorar.</li>
          <li><strong>Tu error es del sistema:</strong> Si cometes un error, pregúntate: ¿qué en la empresa lo permitió? Esto desactiva culpa y activa solución.</li>
          <li><strong>La presión te moldea:</strong> Bajo presión, reflejas tu verdadero carácter. Cultiva el carácter para que ante presión sigas siendo ético.</li>
          <li><strong>El seguimiento es el verdadero servicio:</strong> La venta/resolución es el punto medio, no el final. El seguimiento es lo que fideliza.</li>
        </ul>

        <div className="callout callout--info">
          <strong>📊 Dato:</strong> Las empresas que invierten en prevención de errores (entrenamiento de empatía, automatización de procesos, empoderamiento de equipos) reducen errores en un 60% en 6 meses y mejoran NPS un 35% (McKinsey, 2024).
        </div>
      </section>

      {/* ===================== SECCIÓN 5 ===================== */}
      <section className="topic-section">
        <h2>5. Del Error a la Excelencia: 3 Casos de Transformación</h2>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">📞</span>
            <span>Caso 1: Telemarketing → Consultor de Soluciones</span>
          </div>
          <p>
            <strong>Situación inicial:</strong> Representante de telecomunicaciones que comete el error #3 (prometer sin verificar). Promete plazo de entrega que el sistema no puede cumplir. Cliente enojado vuelve a llamar. Problema escalado.
          </p>
          <p>
            <strong>Transformación:</strong> Se implementa protocolo de «promesa verificada» y se le da autoridad para ofrecer compensación si el plazo se retrasa. La mentalidad cambia: ahora es responsable de la promesa, no mero «colocador» de producto. Resultado: misma base de clientes, pero NPS sube de 32 a 71 en 3 meses.
          </p>
        </div>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">🏪</span>
            <span>Caso 2: Retail Premium → Experiencia Memorable</span>
          </div>
          <p>
            <strong>Situación inicial:</strong> Vendedor comete error #1 (no escucha). Cliente intenta explicar su necesidad (regalo para cumpleaños especial), vendedor abre venta rápidamente basada en asunciones. Cliente recibe producto que no es lo que quería. Devuelve.
          </p>
          <p>
            <strong>Transformación:</strong> Entrada en programa de escucha activa (30 min/semana durante 8 semanas). Aprende a hacer 3 preguntas antes de mostrar producto. Resultado: El 70% de clientes menciona «me escuchó» en encuesta postventa. Tasa de devoluciones baja un 40%. Comisiones suben porque hay menos devoluciones y más recompras.
          </p>
        </div>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">💰</span>
            <span>Caso 3: Banca → Confianza a Largo Plazo</span>
          </div>
          <p>
            <strong>Situación inicial:</strong> Asesor comete error #10 (confidencialidad). En descanso, comenta con compañera el tipo de préstamo que pidió un cliente. Esa compañera es amiga del cliente. Cliente se entera. Rompe la relación de 20 años.
          </p>
          <p>
            <strong>Transformación:</strong> Implementación de política de confidencialidad reforzada + cultura de castigo por brechas (no despido, pero restricción de comisiones). Mentalidad cambia: confidencialidad es competencia diferencial, no carga. Resultado: Clientes reportan mayor confianza. Retención mejora. Referrals suben porque clientes van con amigos confiando en confidencialidad.
          </p>
        </div>
      </section>

      {/* ===================== SECCIÓN 6 ===================== */}
      <section className="topic-section">
        <h2>6. Autoevaluación Personal</h2>

        <p>
          Reflexión honesta: Este es el verdadero valor de este tema. No se trata de obtener puntuación perfecta, sino de diagnosticar en qué errores caes más frecuentemente.
        </p>

        <div className="callout callout--activity">
          <strong>🎯 Ejercicio de autoevaluación:</strong>
          <p>
            Para cada uno de los 12 errores, responde: «¿Qué probabilidad tengo de cometerlo en una semana mala, bajo presión?» (escala 1–10). Los que puntúes 7+ son tus «errores de vulnerabilidad». Son exactamente en los que necesitas trabajar primero.
          </p>
        </div>

        <ol className="self-assessment-list">
          <li>De los 12 errores, ¿cuál reconoces como propio? ¿Cuál es la causa raíz?</li>
          <li>¿Qué error cometes más bajo presión? ¿Bajo agotamiento?</li>
          <li>¿Qué protocolo externo te falta para prevenir tu error principal?</li>
          <li>¿Qué mentalidad o creencia necesitas cambiar para mejorar?</li>
          <li>¿Quién en tu equipo merecería reconocimiento por cometer pocos de estos errores? ¿Qué hace diferente?</li>
        </ol>
      </section>

      {/* ===================== SECCIÓN 7 ===================== */}
      <section className="topic-section">
        <h2>7. Síntesis: De la Culpa a la Responsabilidad</h2>

        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-icon">🔍</div>
            <h4>Reconocimiento</h4>
            <p>Los errores son universales. La excelencia no es no fallar, sino fallar, reconocer y corregir rápidamente.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚙️</div>
            <h4>Diagnóstico</h4>
            <p>Cada error tiene raíz personal, estructural o cultural. La prevención empieza en el diagnóstico correcto.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🛡️</div>
            <h4>Prevención</h4>
            <p>Los protocolos empodern, no limitan. La estructura da libertad para hacer bien las cosas.</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📈</div>
            <h4>Transformación</h4>
            <p>De cada error, si se aprende, emerge un vendedor, asesor o representante mejor. La excelencia se construye con errores.</p>
          </div>
        </div>

        <div className="callout callout--tip">
          <strong>💡 Mensajera final:</strong> Cometerás errores. Todos los cometemos. La pregunta no es si fallarás, sino: cuando falles, ¿reconocerás el fallo, aprenderás de él y cambiarás? Eso es lo que define profesionalidad.
        </div>
      </section>
    </TopicLayout>
  );
}
