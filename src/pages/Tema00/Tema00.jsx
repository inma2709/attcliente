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
      {/* ===================== ACTIVIDAD INICIAL ===================== */}
      <section className="topic-section" style={{ backgroundColor: '#f0f4ff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #4f46e5', marginBottom: '2rem' }}>
        <h2 style={{ color: '#4f46e5' }}>🎯 Actividad Inicial: Preguntas que Responderemos Juntos</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          <em>Antes de continuar, plantéate estas preguntas. No hay respuestas "correctas"—solo tu perspectiva actual. Volveremos a ellas al final del tema.</em>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #ec4899' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05em' }}>❓ Pregunta 1: El Error que Más Temes Cometer</p>
            <p style={{ color: '#666', marginBottom: '0.8rem' }}>De los 12 errores críticos, ¿cuál crees que es más fácil cometer bajo presión? ¿Por qué?</p>
            <p style={{ fontSize: '0.9em', color: '#888', fontStyle: 'italic' }}>💡 Pista: Los errores ocurren en momentos de estrés, no cuando todo va bien.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05em' }}>❓ Pregunta 2: Reconocimiento del Error</p>
            <p style={{ color: '#666', marginBottom: '0.8rem' }}>¿Alguna vez has cometido uno de estos errores sin darte cuenta en el momento? ¿Cómo lo descubriste?</p>
            <p style={{ fontSize: '0.9em', color: '#888', fontStyle: 'italic' }}>💡 Pista: Con frecuencia, los clientes son los primeros en notarlo.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05em' }}>❓ Pregunta 3: Diferencia Entre Error y Fracaso</p>
            <p style={{ color: '#666', marginBottom: '0.8rem' }}>¿Cuál es la diferencia entre cometer un error en atención al cliente y ser un mal profesional?</p>
            <p style={{ fontSize: '0.9em', color: '#888', fontStyle: 'italic' }}>💡 Pista: El error es un evento; tu respuesta al error define quién eres como profesional.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #0ea5e9' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05em' }}>❓ Pregunta 4: Prevención vs. Reacción</p>
            <p style={{ color: '#666', marginBottom: '0.8rem' }}>¿Es mejor predecir dónde vas a fallar o esperar a que el cliente se queje?</p>
            <p style={{ fontSize: '0.9em', color: '#888', fontStyle: 'italic' }}>💡 Pista: Un error previsto es un error controlado.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #8b5cf6' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05em' }}>❓ Pregunta 5: Cultura del Error en Tu Empresa</p>
            <p style={{ color: '#666', marginBottom: '0.8rem' }}>¿En tu empresa se castiga el error o se aprende de él? ¿Cómo afecta esto a tu disposición a reconocer fallos?</p>
            <p style={{ fontSize: '0.9em', color: '#888', fontStyle: 'italic' }}>💡 Pista: Si tienes miedo a ser castigado, ocultarás errores. Si esperas aprender, los reconocerás rápido.</p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
          <p style={{ marginBottom: 0, fontWeight: 'bold' }}>📝 Tu Tarea Ahora:</p>
          <p style={{ marginBottom: 0, color: '#666' }}>Anota tus respuestas en un documento (word, note, o papel). Serán tu "foto instantánea" de tu perspectiva HOY. Al final del tema, volveremos a estas preguntas y verás cómo ha evolucionado tu comprensión.</p>
        </div>
      </section>

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

      {/* ===================== ACTIVIDADES PRÁCTICAS FINALES ===================== */}
      <section className="topic-section" style={{ marginBottom: '2rem', backgroundColor: '#fef3c7', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
        <h2 style={{ color: '#d97706' }}>💼 ACTIVIDADES PRÁCTICAS: Identificar, Representar, Reconocer</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
          Estas tres actividades te permitirán aplicar lo aprendido de forma inmediata y práctica. Cada una tiene un objetivo claro y un resultado mensurable.
        </p>

        {/* ACTIVIDAD 1: CANVA */}
        <details style={{ marginBottom: '1.5rem', backgroundColor: '#ecfdf5', borderRadius: '8px', padding: '1rem', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#10b981', padding: '1rem', cursor: 'pointer' }}>
            📊 Actividad 1: Infografía en Canva - "Mis Errores Críticos"
          </summary>
          <div style={{ padding: '1.5rem', backgroundColor: '#fff', marginTop: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Objetivo:</strong> Responder visualmente las 5 preguntas iniciales y crear un documento reflexivo sobre tus puntos débiles.
            </p>

            <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #10b981', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>📋 ¿Qué debes hacer?</p>
              <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.8rem' }}>Abre <strong>Canva</strong> (versión gratuita es suficiente)</li>
                <li style={{ marginBottom: '0.8rem' }}>Elige una plantilla de <strong>infografía, póster o presentación</strong></li>
                <li style={{ marginBottom: '0.8rem' }}>Responde estas 5 preguntas de forma visual:
                  <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <li>¿Cuál es tu error crítico personal bajo presión?</li>
                    <li>¿Cuándo lo ha cometido sin darte cuenta?</li>
                    <li>¿Cómo se diferencia un error de un fracaso profesional?</li>
                    <li>¿Cómo preventor? (Qué estructura o protocolo necesitas)</li>
                    <li>¿Cómo es la cultura del error en tu empresa?</li>
                  </ul>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>Incluye <strong>iconos, colores y ejemplos reales</strong> del tema</li>
                <li style={{ marginBottom: '0.8rem' }}>Guarda como PDF y comparte con el formador</li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>⏱️ Tiempo estimado:</strong> 45-60 minutos | <strong>Entrega:</strong> PDF con 5 respuestas visuales
              </p>
            </div>
          </div>
        </details>

        {/* ACTIVIDAD 2: ROLE-PLAYING */}
        <details style={{ marginBottom: '1.5rem', backgroundColor: '#fdf2f8', borderRadius: '8px', padding: '1rem', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#ec4899', padding: '1rem', cursor: 'pointer' }}>
            👥 Actividad 2: Role-Playing por Parejas - "Cacería de Errores"
          </summary>
          <div style={{ padding: '1.5rem', backgroundColor: '#fff', marginTop: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Objetivo:</strong> Por parejas, representar uno de los 12 errores. El resto del grupo tiene que identificar cuál es y explicar por qué es un error crítico.
            </p>

            <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>🎭 Dinámica del Juego (Paso a Paso)</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontWeight: 'bold', color: '#d97706', marginBottom: '0.8rem' }}>📌 PREPARACIÓN (10 minutos)</p>
                <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Se divide el grupo en <strong>n parejas</strong> (si hay 20 alumnos, 10 parejas)</li>
                  <li>Cada pareja elige <strong>UNO de los 12 errores</strong> (sin que otras parejas lo sepan)</li>
                  <li>Escriben un <strong>mini-escenario de 3-4 líneas</strong> donde cometen ese error de forma clara:
                    <ul style={{ marginTop: '0.5rem', marginLeft: '1rem', fontSize: '0.95em' }}>
                      <li>Ejemplo: Si eligen "No escuchar activamente", preparan: "Cliente llama pidiendo solución. Profesional prepara respuesta mientras cliente habla e interrumpe"</li>
                      <li>El error debe ser <strong>obvio pero reconocible</strong></li>
                    </ul>
                  </li>
                  <li>Ensayan 2-3 veces para estar seguros</li>
                </ol>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontWeight: 'bold', color: '#d97706', marginBottom: '0.8rem' }}>🎬 REPRESENTACIÓN (25-30 minutos)</p>
                <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Primera pareja sube (o sale) y representa su escenario (<strong>2-3 minutos máximo</strong>)</li>
                  <li>El resto del grupo observa en SILENCIO (sin interrumpir)</li>
                  <li>Al terminar, el formador pregunta: <strong>"¿Qué error crítico acaban de ver?"</strong></li>
                  <li>Los observadores tienen <strong>30 segundos</strong> para levantar la mano y proponer la respuesta</li>
                  <li>Si acierten, reciben <strong>punto para su equipo</strong>. Si fallan, la pareja que actuó revela el error</li>
                  <li>Explicación rápida (30 seg): ¿Por qué es este error crítico? ¿Cuál es su coste?</li>
                  <li>Siguiente pareja sale. <strong>Repitiendo hasta que todas hayan actuado</strong></li>
                </ol>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontWeight: 'bold', color: '#d97706', marginBottom: '0.8rem' }}>🏆 CIERRE (5 minutos)</p>
                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li>Contabilizar puntos: Equipo que más errores identificó gana</li>
                  <li>Reflexión: "¿Cuál fue el error más 'camuflado'? ¿Cuál el más obvio? ¿Por qué?"</li>
                  <li>Preguntar: "¿Habéis cometido alguno de estos en la vida real?"</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: '#f5f3ff', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.8rem' }}>📑 Los 12 Errores Posibles (para elegir):</p>
              <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95em' }}>
                <li>No escuchar activamente | 2. Culpabilizar al cliente | 3. Prometer lo que no se puede cumplir</li>
                <li>Ser impersonal/robótico | 5. Perder la paciencia | 6. Usar jerga técnica sin simplificar</li>
                <li>No documentar la interacción | 8. Ignorar feedback | 9. Justificarse en lugar de disculparse</li>
                <li>Violar confidencialidad | 11. Asumir la emoción del cliente | 12. No dar seguimiento</li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>⏱️ Tiempo estimado:</strong> 40-50 minutos en clase | <strong>Participantes:</strong> Todos | <strong>Resultado:</strong> Vivencia práctica + reconocimiento grupal de errores
              </p>
            </div>
          </div>
        </details>

        {/* ACTIVIDAD 3: DEBATE */}
        <details style={{ marginBottom: '1.5rem', backgroundColor: '#f5f3ff', borderRadius: '8px', padding: '1rem', cursor: 'pointer' }}>
          <summary style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#8b5cf6', padding: '1rem', cursor: 'pointer' }}>
            🎤 Actividad 3: Debate/Mesa Redonda - "Dilemas de Recuperación"
          </summary>
          <div style={{ padding: '1.5rem', backgroundColor: '#fff', marginTop: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Objetivo:</strong> Discutir en grupo cómo recuperarse de cada error crítico y qué factores sistémicos lo podrían haber prevenido.
            </p>

            <div style={{ backgroundColor: '#fdf2f8', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ec4899', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>❓ Preguntas Abiertas (El Formador Elige 3-4)</p>
              
              <div style={{ marginBottom: '1.2rem', borderBottom: '1px solid #ec4899', paddingBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 1: Culpabilidad Compartida</p>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  "Si un empleado comete el error #2 (culpabilizar al cliente), ¿de quién es la culpa: del empleado, del jefe que no lo entrenó, o del sistema que presiona por cerrar rápido?"
                </p>
              </div>

              <div style={{ marginBottom: '1.2rem', borderBottom: '1px solid #ec4899', paddingBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 2: Recuperación vs. Prevención</p>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  "¿Es mejor capacitar a los empleados para NO cometer errores o entrenarlos para RECUPERARSE brillantemente cuando los cometen? ¿Por qué?"
                </p>
              </div>

              <div style={{ marginBottom: '1.2rem', borderBottom: '1px solid #ec4899', paddingBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 3: Confidencialidad en Crisis</p>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  "Error #10 (confidencialidad). Si se rompe, ¿es recoverable? Si sí, ¿cómo? Si no, ¿qué significa eso para la cultura empresarial?"
                </p>
              </div>

              <div style={{ marginBottom: '1.2rem', borderBottom: '1px solid #ec4899', paddingBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 4: Estrés vs. Excusa</p>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  "¿Hasta qué punto el estrés laboral EXPLICA los errores? ¿Dónde termina la explicación y empieza la excusa?"
                </p>
              </div>

              <div style={{ marginBottom: '1.2rem', borderBottom: '1px solid #ec4899', paddingBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 5: Diferencia Entre Industrias</p>
                <p style={{ color: '#666', fontSize: '0.95em' }}>
                  "¿Hay errores que son críticos en retail pero tolerables en telecomunicaciones? ¿Por qué algunos errores son más 'perdonables' en ciertos sectores?"
                </p>
              </div>

              <div>
                <p style={{ fontWeight: 'bold', color: '#ec4899', marginBottom: '0.5rem' }}>Pregunta 6: Cultura vs. Castigo</p>
                <p style={{ color: '#666', fontSize: '0.95em', marginBottom: 0 }}>
                  "Si tu empresa castiga severamente los errores, ¿qué pasará? ¿Los empleados cometerán MENOS errores o simplemente los OCULTARÁN mejor?"
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>🎙️ Dinámica del Debate</p>
              <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>Formador plantea <strong>una pregunta</strong></li>
                <li>Cada persona tiene <strong>máximo 1 minuto</strong> para dar su posición (si quiere intervenir)</li>
                <li>Se abre <strong>discusión libre</strong> durante <strong>5-7 minutos</strong></li>
                <li>Formador sintetiza los puntos clave y los conecta con el tema</li>
                <li>Se anotan las <strong>mejores ideas/insights</strong> en un documento compartido</li>
              </ol>
            </div>

            <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
              <p style={{ marginBottom: 0 }}>
                <strong>⏱️ Tiempo estimado:</strong> 45-60 minutos | <strong>Resultado:</strong> Construcción colectiva de comprensión + pensamiento crítico
              </p>
            </div>
          </div>
        </details>

        {/* RESUMEN DE ACTIVIDADES */}
        <div style={{ marginTop: '2rem', backgroundColor: '#ecfdf5', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.1em', color: '#10b981' }}>✅ Resumen: Tres Práctica, Un Objetivo</p>
          <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>Actividad 1 (Canva):</strong> Reflexión personal → Documentación visual de tus aprendizajes</li>
            <li><strong>Actividad 2 (Role-Playing):</strong> Vivencia inmersiva → Reconocimiento grupal de errores reales</li>
            <li><strong>Actividad 3 (Debate):</strong> Pensamiento estratégico → Conexión con realidad empresarial</li>
          </ul>
          <p style={{ marginTop: '1.5rem', marginBottom: 0, fontStyle: 'italic', color: '#666' }}>
            Al final de estas tres actividades, habrás identificado tus errores personales, practicado reconocer errores en otros, y desarrollado pensamiento crítico sobre cómo prevenirlos sistémicamente.
          </p>
        </div>
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
