import React from 'react';
import TopicLayout from '../../components/TopicLayout';
import Quiz from '../../components/Quiz';
import RecursosAudiovisuales from '../../components/RecursosAudiovisuales';

const Tema17 = () => {
  const quizQuestions = [
    {
      question: "¿Cuál es la principal ventaja de crear un GPT personalizado para atención al cliente?",
      options: [
        "Es completamente gratuito",
        "Puede ser entrenado con las normas y políticas específicas de la empresa",
        "Funciona sin conexión a internet",
        "Reemplaza completamente a los agentes humanos"
      ],
      correctAnswer: 1,
      explanation: "Un GPT personalizado puede ser entrenado con las normas, políticas y procedimientos específicos de la empresa, garantizando respuestas coherentes y alineadas con los valores organizacionales."
    },
    {
      question: "¿Qué elemento es fundamental para integrar IA en la gestión de emails?",
      options: [
        "Un servidor dedicado propio",
        "Categorización automática y routing inteligente",
        "Eliminar todos los filtros de spam",
        "Responder automáticamente sin supervisión humana"
      ],
      correctAnswer: 1,
      explanation: "La categorización automática y el routing inteligente permiten que la IA clasifique los emails por prioridad, tema o departamento, mejorando significativamente la eficiencia en la gestión."
    },
    {
      question: "¿Cuál es un componente esencial de un chatbot en una landing page?",
      options: [
        "Videos de alta resolución",
        "Un sistema de FAQ dinámico y escalación humana",
        "Música de fondo automática",
        "Formularios de 20 campos obligatorios"
      ],
      correctAnswer: 1,
      explanation: "Un buen chatbot debe tener un sistema de FAQ dinámico para respuestas comunes y la capacidad de escalar a un agente humano cuando sea necesario."
    },
    {
      question: "¿Qué se debe considerar al entrenar un GPT para atención al cliente?",
      options: [
        "Solo incluir información técnica del producto",
        "Incluir casos reales, tonalidad de marca y procedimientos específicos",
        "Copiar respuestas de la competencia",
        "Enfocarse únicamente en ventas"
      ],
      correctAnswer: 1,
      explanation: "El entrenamiento debe incluir casos reales, la tonalidad de comunicación de la marca, procedimientos específicos y políticas de la empresa para generar respuestas coherentes y útiles."
    },
    {
      question: "¿Cuál es una limitación importante de los chatbots actuales?",
      options: [
        "No pueden procesar texto",
        "Son muy caros de implementar",
        "Pueden tener dificultades con consultas muy específicas o emocionales",
        "Solo funcionan en inglés"
      ],
      correctAnswer: 2,
      explanation: "Los chatbots actuales pueden tener dificultades con consultas muy específicas, situaciones emocionales complejas o casos que requieren empatía humana y creatividad en la resolución."
    }
  ];

  return (
    <TopicLayout>
      {/* Hero Section */}
      <div className="hero hero--stacked">
        <div className="hero-content">
          <h1>Uso de la IA en Atención al Cliente</h1>
          <p>
            Descubre cómo integrar inteligencia artificial en tu estrategia de atención al cliente. 
            Aprende a crear GPTs personalizados, automatizar la gestión de emails y desarrollar 
            chatbots efectivos para mejorar la experiencia del usuario y optimizar los procesos.
          </p>
        </div>
        <div className="hero-media">
          <div className="img-frame">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Inteligencia Artificial en Atención al Cliente - Robot y persona trabajando juntos"
            />
          </div>
        </div>
      </div>

      {/* Objetivos de Aprendizaje */}
      <div className="learning-objectives">
        <h3>🎯 Objetivos de Aprendizaje</h3>
        <ul className="checklist">
          <li>Comprender las aplicaciones prácticas de la IA en atención al cliente</li>
          <li>Aprender a crear y entrenar un GPT personalizado con normas empresariales</li>
          <li>Dominar la integración de IA en la gestión automatizada de emails</li>
          <li>Desarrollar habilidades para implementar chatbots en landing pages</li>
          <li>Identificar las mejores prácticas y limitaciones de la IA en servicio al cliente</li>
          <li>Evaluar métricas de rendimiento y mejora continua de sistemas IA</li>
        </ul>
      </div>

      {/* Sección 1: Introducción a la IA */}
      <div className="topic-section">
        <div className="topic-section__title">
          <h2>🤖 Introducción a la IA en Atención al Cliente</h2>
          <span className="topic-section__meta">Fundamentos y aplicaciones</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Transformación Digital del Servicio al Cliente</summary>
            <div className="topic-details__content">
              <p>
                La inteligencia artificial está revolucionando la forma en que las empresas 
                interactúan con sus clientes. Esta transformación no busca reemplazar el 
                factor humano, sino potenciarlo y hacer más eficientes los procesos.
              </p>

              <div className="callout callout--tip">
                <div className="callout-title">💡 Ventajas Clave de la IA</div>
                <ul>
                  <li><strong>Disponibilidad 24/7:</strong> Atención continua sin interrupciones</li>
                  <li><strong>Escalabilidad:</strong> Manejo simultáneo de múltiples consultas</li>
                  <li><strong>Consistencia:</strong> Respuestas uniformes alineadas con políticas</li>
                  <li><strong>Análisis de datos:</strong> Insights valiosos sobre comportamiento del cliente</li>
                  <li><strong>Reducción de costos:</strong> Optimización de recursos humanos</li>
                </ul>
              </div>

              <h4>Principales Aplicaciones</h4>
              <div className="compare-grid">
                <div className="card">
                  <h5>🔄 Automatización</h5>
                  <p>Respuestas automáticas a consultas frecuentes, routing inteligente de tickets y clasificación automática de prioridades.</p>
                </div>
                <div className="card">
                  <h5>📊 Análisis Predictivo</h5>
                  <p>Anticipación de necesidades del cliente, detección temprana de insatisfacción y personalización de ofertas.</p>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Tipos de IA Aplicables al Servicio al Cliente</summary>
            <div className="topic-details__content">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Tipo de IA</th>
                      <th>Aplicación</th>
                      <th>Beneficio Principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Procesamiento de Lenguaje Natural (NLP)</strong></td>
                      <td>Chatbots, análisis de sentimientos</td>
                      <td>Comprensión contextual de consultas</td>
                    </tr>
                    <tr>
                      <td><strong>Machine Learning</strong></td>
                      <td>Recomendaciones personalizadas</td>
                      <td>Mejora continua basada en datos</td>
                    </tr>
                    <tr>
                      <td><strong>Reconocimiento de Voz</strong></td>
                      <td>Asistentes virtuales, transcripción</td>
                      <td>Interacciones manos libres</td>
                    </tr>
                    <tr>
                      <td><strong>Visión Computacional</strong></td>
                      <td>Análisis de imágenes de productos</td>
                      <td>Soporte visual automatizado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Sección 2: Crear GPT Personalizado */}
      <div className="topic-section">
        <div className="topic-section__title">
          <h2>🎨 Creación de GPT Personalizado para Atención al Cliente</h2>
          <span className="topic-section__meta">Desarrollo paso a paso</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Planificación y Definición de Objetivos</summary>
            <div className="topic-details__content">
              <p>
                Antes de crear un GPT personalizado, es crucial definir claramente los 
                objetivos, el alcance y las limitaciones del sistema.
              </p>

              <div className="callout callout--activity">
                <div className="callout-title">📝 Lista de Verificación Previa</div>
                <ul className="checklist">
                  <li>Identificar los tipos de consultas más frecuentes</li>
                  <li>Definir el tono y personalidad de la marca</li>
                  <li>Establecer políticas y procedimientos estándar</li>
                  <li>Recopilar casos de éxito y situaciones problema</li>
                  <li>Definir métricas de éxito y KPIs</li>
                </ul>
              </div>

              <h4>Estructura del Prompt Base</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.9rem'}}>
{`Eres un asistente especializado en atención al cliente para [NOMBRE_EMPRESA].

PERSONALIDAD:
- Tono: [Profesional/Amigable/Formal]
- Valores: [Transparencia, Eficiencia, Empatía]
- Estilo: [Conciso pero completo]

CONOCIMIENTOS:
- Políticas de devolución: [Detalles específicos]
- Productos/servicios: [Catálogo completo]
- Procedimientos: [Pasos estándar]

LIMITACIONES:
- NO procesar pagos directamente
- NO prometer lo que no puedes cumplir
- SIEMPRE escalar casos complejos a humanos`}
                </pre>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Entrenamiento con Datos Específicos</summary>
            <div className="topic-details__content">
              <p>
                El entrenamiento efectivo requiere datos de calidad y una estrategia 
                de alimentación de información bien estructurada.
              </p>

              <h4>Tipos de Datos a Incluir</h4>
              <div className="media-grid">
                <div className="card">
                  <h5>📚 Base de Conocimiento</h5>
                  <ul>
                    <li>FAQ actualizadas</li>
                    <li>Manuales de productos</li>
                    <li>Políticas empresariales</li>
                    <li>Procedimientos internos</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>💬 Conversaciones Reales</h5>
                  <ul>
                    <li>Chats exitosos anonimizados</li>
                    <li>Emails de soporte</li>
                    <li>Transcripciones de llamadas</li>
                    <li>Casos de estudio</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🎯 Casos Específicos</h5>
                  <ul>
                    <li>Situaciones de crisis</li>
                    <li>Quejas y reclamaciones</li>
                    <li>Escalaciones complejas</li>
                    <li>Casos de satisfacción alta</li>
                  </ul>
                </div>
              </div>

              <div className="callout callout--example">
                <div className="callout-title">🏆 Ejemplo Práctico: Creación de GPT</div>
                <p><strong>Caso:</strong> Empresa de e-commerce quiere automatizar consultas sobre pedidos.</p>
                <p><strong>Proceso:</strong></p>
                <ol>
                  <li>Recopilar 500+ consultas sobre pedidos del último año</li>
                  <li>Categorizar por tipo: seguimiento, cambios, devoluciones</li>
                  <li>Crear templates de respuesta para cada categoría</li>
                  <li>Entrenar con casos reales exitosos</li>
                  <li>Probar con consultas de validación</li>
                  <li>Ajustar basándose en feedback</li>
                </ol>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Implementación y Configuración Avanzada</summary>
            <div className="topic-details__content">
              <p>
                La implementación técnica requiere configuraciones específicas para 
                optimizar el rendimiento y la seguridad del sistema.
              </p>

              <h4>Configuraciones Críticas</h4>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Parámetro</th>
                      <th>Valor Recomendado</th>
                      <th>Propósito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Temperature</strong></td>
                      <td>0.3 - 0.7</td>
                      <td>Balance entre creatividad y consistencia</td>
                    </tr>
                    <tr>
                      <td><strong>Max Tokens</strong></td>
                      <td>150 - 300</td>
                      <td>Respuestas concisas pero completas</td>
                    </tr>
                    <tr>
                      <td><strong>Top P</strong></td>
                      <td>0.9</td>
                      <td>Diversidad controlada de respuestas</td>
                    </tr>
                    <tr>
                      <td><strong>Frequency Penalty</strong></td>
                      <td>0.5</td>
                      <td>Evitar repeticiones innecesarias</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout callout--tip">
                <div className="callout-title">🔧 Mejores Prácticas Técnicas</div>
                <ul>
                  <li><strong>Versionado:</strong> Mantén versiones del prompt para rollback</li>
                  <li><strong>Testing:</strong> Implementa testing A/B con diferentes configuraciones</li>
                  <li><strong>Monitoring:</strong> Supervisa métricas de satisfacción en tiempo real</li>
                  <li><strong>Fallbacks:</strong> Define respuestas por defecto para casos no reconocidos</li>
                  <li><strong>Escalación:</strong> Configura triggers automáticos para transferencia humana</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Los Elementos del Prompt Perfecto</summary>
            <div className="topic-details__content">
              <p>
                Un prompt bien estructurado es como un <strong>briefing profesional</strong>. 
                Cuanto más claro y detallado sea, mejores respuestas obtendrás de tu GPT personalizado.
              </p>

              {/* Placeholder para imagen */}
              <div className="img-frame">
                <img 
                  src="/ia.png" 
                  alt="Elementos del Prompt Perfecto - Infografía"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>

              <h4>Los 6 Elementos Fundamentales</h4>
              
              <h5>1️⃣ Persona (Rol)</h5>
              <div className="card">
                <p><strong>Define quién debe ser el modelo</strong> mientras responde.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Ajusta el enfoque (marketing, profesor, técnico, coach...)</li>
                  <li>Cambia el vocabulario, profundidad y tipo de decisiones</li>
                </ul>
                <p><strong>Cómo escribirlo:</strong> Rol + especialidad + nivel + prioridades</p>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo</div>
                  <p>"Eres un Social Media Manager especializado en marcas B2B de alimentación, 
                  con 5 años de experiencia. Prioriza claridad y ejemplos prácticos."</p>
                </div>
              </div>

              <h5>2️⃣ Contexto (Situación + Datos Clave)</h5>
              <div className="card">
                <p><strong>Información del caso:</strong> qué pasa, para quién es, qué restricciones hay.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Evita respuestas genéricas</li>
                  <li>Reduce suposiciones equivocadas</li>
                  <li>Hace el contenido realista y específico</li>
                </ul>
                <p><strong>Incluye:</strong></p>
                <ul>
                  <li><strong>Marca/sector:</strong> Tipo de empresa y industria</li>
                  <li><strong>Audiencia:</strong> B2B/B2C, nivel, país, canal</li>
                  <li><strong>Objetivo:</strong> Ventas, awareness, leads, formación</li>
                  <li><strong>Limitaciones:</strong> Tiempo, recursos, palabras, formato</li>
                </ul>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo</div>
                  <p>"Trabajas para una startup de software B2B dirigida a PYMEs españolas. 
                  El objetivo es generar leads cualificados con presupuesto limitado."</p>
                </div>
              </div>

              <h5>3️⃣ Tarea (Qué Debe Hacer)</h5>
              <div className="card">
                <p><strong>El bloque más importante:</strong> la acción concreta que debe realizar.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Convierte el texto en un "encargo" claro</li>
                  <li>Le indica qué producir y qué decisiones tomar</li>
                </ul>
                <p><strong>Cómo escribirlo:</strong></p>
                <ul>
                  <li>Usa verbos claros: "crea", "redacta", "analiza", "propón", "resume"</li>
                  <li>Si hay varias tareas, ponlo en pasos o checklist</li>
                </ul>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo</div>
                  <p>"Desarrolla una estrategia de contenidos para 4 semanas, incluyendo 
                  posts para LinkedIn, emails de seguimiento y landing page."</p>
                </div>
              </div>

              <h5>4️⃣ Formato (Cómo Quieres la Salida)</h5>
              <div className="card">
                <p><strong>Define cómo debe entregarte el resultado</strong> para que puedas usarlo directamente.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Te devuelve justo lo que puedes copiar/pegar</li>
                  <li>Evita respuestas largas cuando quieres tabla, bullets, JSON</li>
                </ul>
                <p><strong>Opciones típicas:</strong></p>
                <div className="media-grid">
                  <div className="card card--muted">
                    <ul>
                      <li>Tabla con columnas fijas</li>
                      <li>Lista ordenada por días/prioridad</li>
                      <li>JSON, CSV estructurado</li>
                    </ul>
                  </div>
                  <div className="card card--muted">
                    <ul>
                      <li>Estructura con títulos H2/H3</li>
                      <li>Longitud específica: "máx. 120 palabras"</li>
                      <li>Plantilla con campos a completar</li>
                    </ul>
                  </div>
                </div>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo</div>
                  <p>"Entrega el resultado en una tabla con columnas: Fecha, Red Social, 
                  Texto del post, Hashtags, Tipo de contenido, CTA específico."</p>
                </div>
              </div>

              <h5>5️⃣ Tono (Estilo de Voz)</h5>
              <div className="card">
                <p><strong>Indica cómo debe sonar</strong> la comunicación para mantener coherencia de marca.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Ajusta la "personalidad" del texto</li>
                  <li>Mantiene coherencia de marca</li>
                  <li>Define el nivel de formalidad apropiado</li>
                </ul>
                <p><strong>Mejor que poner solo "cercano":</strong> 2-3 adjetivos + 1 frase de guía</p>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo</div>
                  <p>"Lenguaje claro y conciso, seguro pero cercano y amistoso. 
                  Evita tecnicismos excesivos y usa ejemplos cotidianos cuando sea posible."</p>
                </div>
              </div>

              <h5>6️⃣ Ejemplo (Referencia a Imitar)</h5>
              <div className="card">
                <p><strong>Es un "molde"</strong> que le enseña cómo se ve una buena respuesta.</p>
                <p><strong>Para qué sirve:</strong></p>
                <ul>
                  <li>Disminuye muchísimo la ambigüedad</li>
                  <li>Marca estructura, nivel de detalle y estilo</li>
                  <li>Proporciona un estándar de calidad claro</li>
                </ul>
                <p><strong>Consejo:</strong> Pon un ejemplo pequeño pero real, y especifica: 
                "Sigue el mismo formato que este ejemplo."</p>
                <div className="callout callout--example">
                  <div className="callout-title">💡 Ejemplo de Ejemplo</div>
                  <div className="card card--muted">
                    <p><strong>Post LinkedIn ejemplo:</strong></p>
                    <blockquote>
                      "🚀 ¿Tu empresa pierde clientes por emails lentos?<br/>
                      Implementamos IA en [Empresa X] y redujimos 75% el tiempo de respuesta.<br/>
                      Resultado: +40% satisfacción del cliente.<br/>
                      #AutomatizacionIA #AtencionCliente #Resultados"
                    </blockquote>
                    <p><em>Sigue exactamente esta estructura: gancho + estadística + resultado + hashtags</em></p>
                  </div>
                </div>
              </div>

              <h4>Elementos Extra que Mejoran Drasticamente el Resultado</h4>
              
              <div className="compare-grid">
                <div className="card">
                  <h5>✅ Criterios de Calidad (Checklist)</h5>
                  <ul>
                    <li>"No repitas ideas o conceptos"</li>
                    <li>"Incluye CTA en al menos 3 posts"</li>
                    <li>"Usa entre 5 y 8 hashtags relevantes"</li>
                    <li>"Cada post debe tener valor específico"</li>
                    <li>"Incluye datos o estadísticas cuando sea posible"</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>❌ Qué NO Hacer (Anti-errores)</h5>
                  <ul>
                    <li>"No inventes datos o estadísticas"</li>
                    <li>"No uses claims médicos sin respaldo"</li>
                    <li>"No uses lenguaje demasiado informal"</li>
                    <li>"No hagas promesas que no puedes cumplir"</li>
                    <li>"Evita emojis excesivos (máx. 2 por post)"</li>
                  </ul>
                </div>
              </div>

              <h4>Plantilla Lista para Usar</h4>
              <div className="callout callout--activity">
                <div className="callout-title">📋 Template Copy & Paste</div>
                <div className="card card--muted">
                  <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.85rem'}}>
{`**PERSONA:** [Rol específico + especialidad + experiencia + prioridades]

**CONTEXTO:** 
- Marca/sector: [Tipo de empresa e industria]
- Audiencia: [B2B/B2C, nivel, ubicación, canal preferido]
- Objetivo: [Ventas, leads, awareness, educación, retención]
- Limitaciones: [Presupuesto, tiempo, recursos, compliance]

**TAREA:** [Verbo claro + acción específica + entregables concretos]

**FORMATO:** [Estructura exacta: tabla, lista, JSON, longitud, secciones]

**TONO:** [2-3 adjetivos + frase guía de comunicación]

**EJEMPLO:** [Muestra real del resultado esperado + "sigue este formato"]

**CRITERIOS DE CALIDAD:**
- [Regla 1 específica]
- [Regla 2 específica]  
- [Regla 3 específica]

**QUÉ NO HACER:**
- [Prohibición 1]
- [Prohibición 2]
- [Prohibición 3]`}
                  </pre>
                </div>
              </div>

              <div className="callout callout--case">
                <div className="callout-title">🎯 Ejemplo Completo: GPT para E-commerce</div>
                <div className="card card--muted">
                  <p><strong>PERSONA:</strong> Eres un especialista en atención al cliente para e-commerce con 8 años de experiencia en resolución de incidencias. Prioriza empatía y soluciones rápidas.</p>
                  
                  <p><strong>CONTEXTO:</strong> Trabajas para una tienda online de electrónicos dirigida a consumidores españoles. Objetivo: resolver consultas manteniendo alta satisfacción. Limitaciones: no puedes procesar reembolsos directamente.</p>
                  
                  <p><strong>TAREA:</strong> Responde a consultas de clientes sobre pedidos, devoluciones y productos, proporcionando soluciones claras y escalando cuando sea necesario.</p>
                  
                  <p><strong>FORMATO:</strong> Respuesta directa en máximo 150 palabras, incluyendo: saludo personalizado, solución específica, próximos pasos, información de contacto si aplica.</p>
                  
                  <p><strong>TONO:</strong> Empático, profesional y solucionador. Usa un lenguaje cercano pero no informal, siempre enfocado en ayudar.</p>
                  
                  <p><strong>CRITERIOS DE CALIDAD:</strong></p>
                  <ul>
                    <li>Personaliza con el nombre del cliente</li>
                    <li>Ofrece al menos 2 opciones de solución</li>
                    <li>Incluye timeline específico para resolución</li>
                  </ul>
                  
                  <p><strong>QUÉ NO HACER:</strong></p>
                  <ul>
                    <li>No prometas reembolsos inmediatos</li>
                    <li>No culpes a terceros (transportista, proveedor)</li>
                    <li>No uses respuestas genéricas</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Sección 3: IA en Gestión de Emails */}
      <div className="topic-section">
        <div className="topic-section__title">
          <h2>📧 Integración de IA en Gestión de Emails</h2>
          <span className="topic-section__meta">Automatización inteligente</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Clasificación Automática de Emails</summary>
            <div className="topic-details__content">
              <p>
                La clasificación automática permite organizar, priorizar y rutear emails 
                de manera inteligente, mejorando significativamente los tiempos de respuesta.
              </p>

              <h4>Categorías de Clasificación</h4>
              <div className="media-grid">
                <div className="card">
                  <h5>🔴 Prioridad Alta</h5>
                  <ul>
                    <li>Quejas y reclamaciones</li>
                    <li>Problemas técnicos críticos</li>
                    <li>Clientes VIP</li>
                    <li>Términos como "urgente", "problema"</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🟡 Prioridad Media</h5>
                  <ul>
                    <li>Consultas sobre productos</li>
                    <li>Solicitudes de información</li>
                    <li>Seguimiento de pedidos</li>
                    <li>Cambios en cuenta</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🟢 Prioridad Baja</h5>
                  <ul>
                    <li>Newsletter y suscripciones</li>
                    <li>Confirmaciones automáticas</li>
                    <li>Feedback general</li>
                    <li>Consultas informativas</li>
                  </ul>
                </div>
              </div>

              <div className="callout callout--case">
                <div className="callout-title">📊 Caso de Éxito: E-commerce Internacional</div>
                <p>
                  Una empresa de e-commerce implementó clasificación por IA y logró:
                </p>
                <ul>
                  <li><strong>75% reducción</strong> en tiempo de primera respuesta</li>
                  <li><strong>60% mejora</strong> en routing a departamento correcto</li>
                  <li><strong>40% reducción</strong> en escalaciones innecesarias</li>
                  <li><strong>85% precisión</strong> en clasificación automática</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Respuestas Automáticas Inteligentes</summary>
            <div className="topic-details__content">
              <p>
                Las respuestas automáticas van más allá de los autoresponders tradicionales, 
                proporcionando información contextual y relevante basada en el contenido del email.
              </p>

              <h4>Tipos de Respuestas Automáticas</h4>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Trigger</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>FAQ Automática</strong></td>
                      <td>Consultas comunes identificadas</td>
                      <td>Respuesta completa + enlaces útiles</td>
                    </tr>
                    <tr>
                      <td><strong>Confirmación + Info</strong></td>
                      <td>Consultas sobre pedidos</td>
                      <td>Estado actual + próximos pasos</td>
                    </tr>
                    <tr>
                      <td><strong>Escalación Suave</strong></td>
                      <td>Consultas complejas</td>
                      <td>Reconocimiento + tiempo estimado</td>
                    </tr>
                    <tr>
                      <td><strong>Recursos Adicionales</strong></td>
                      <td>Consultas técnicas</td>
                      <td>Links a tutoriales + contacto especializado</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout callout--example">
                <div className="callout-title">✉️ Ejemplo de Respuesta Inteligente</div>
                <div className="card card--muted">
                  <p><strong>Email recibido:</strong> "Hola, mi pedido #12345 no ha llegado y era para regalo."</p>
                  
                  <p><strong>Respuesta automática generada:</strong></p>
                  <blockquote style={{borderLeft: '3px solid #2fb7aa', paddingLeft: '1rem', margin: '1rem 0'}}>
                    "Hola [Nombre],<br/><br/>
                    He revisado tu pedido #12345 y veo que está en tránsito desde hace 3 días. 
                    Entiendo que es para regalo y la situación puede ser frustrante.<br/><br/>
                    <strong>Estado actual:</strong> En reparto local - llegada prevista mañana<br/>
                    <strong>Opciones disponibles:</strong><br/>
                    • Seguimiento en tiempo real: [link]<br/>
                    • Contacto directo con transportista: [teléfono]<br/>
                    • Si necesitas el regalo hoy, contáctame para opciones urgentes<br/><br/>
                    Un especialista revisará tu caso en las próximas 2 horas.<br/><br/>
                    Saludos,<br/>
                    Equipo de Atención al Cliente"
                  </blockquote>
                </div>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Análisis de Sentimiento y Escalación</summary>
            <div className="topic-details__content">
              <p>
                El análisis de sentimiento permite identificar emociones en los emails 
                y tomar acciones proactivas para mantener la satisfacción del cliente.
              </p>

              <h4>Niveles de Sentimiento</h4>
              <div className="compare-grid">
                <div className="card" style={{borderLeft: '4px solid #dc2626'}}>
                  <h5>😤 Negativo Intenso</h5>
                  <p><strong>Acción:</strong> Escalación inmediata a supervisor + notificación urgente</p>
                  <p><strong>Palabras clave:</strong> terrible, odio, nunca más, estafa, legal</p>
                </div>
                <div className="card" style={{borderLeft: '4px solid #f59e0b'}}>
                  <h5>😕 Negativo Moderado</h5>
                  <p><strong>Acción:</strong> Prioridad alta + respuesta en 2 horas máximo</p>
                  <p><strong>Palabras clave:</strong> frustrado, decepcionado, problema, error</p>
                </div>
              </div>

              <div className="compare-grid">
                <div className="card" style={{borderLeft: '4px solid #6b7280'}}>
                  <h5>😐 Neutral</h5>
                  <p><strong>Acción:</strong> Proceso estándar + respuesta en 24 horas</p>
                  <p><strong>Palabras clave:</strong> consulta, información, ayuda, duda</p>
                </div>
                <div className="card" style={{borderLeft: '4px solid #16a34a'}}>
                  <h5>😊 Positivo</h5>
                  <p><strong>Acción:</strong> Agradecimiento + oportunidad de feedback</p>
                  <p><strong>Palabras clave:</strong> excelente, perfecto, recomiendo, gracias</p>
                </div>
              </div>

              <div className="callout callout--tip">
                <div className="callout-title">⚡ Configuración de Alerts Automáticos</div>
                <ul>
                  <li><strong>SMS a supervisor:</strong> Sentimiento muy negativo detectado</li>
                  <li><strong>Email prioritario:</strong> Cliente VIP con cualquier sentimiento negativo</li>
                  <li><strong>Slack notification:</strong> Acumulación de emails negativos del mismo producto</li>
                  <li><strong>Dashboard update:</strong> Métricas de sentimiento en tiempo real</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Configuración Práctica de Automatización con Gmail y Outlook</summary>
            <div className="topic-details__content">
              <p>
                Implementaremos paso a paso la automatización de respuestas de email usando 
                herramientas accesibles y APIs populares para que puedas aplicarlo directamente en tu negocio.
              </p>

              <h4>Paso 1: Configuración de Filtros Inteligentes en Gmail</h4>
              <div className="callout callout--example">
                <div className="callout-title">📧 Configuración Práctica Gmail</div>
                <ol>
                  <li><strong>Accede a Configuración:</strong> Gmail → Configuración → Filtros y direcciones bloqueadas</li>
                  <li><strong>Crear filtro nuevo:</strong> Clic en "Crear un filtro nuevo"</li>
                  <li><strong>Criterios de filtrado:</strong>
                    <ul>
                      <li><em>Para consultas frecuentes:</em> Asunto contiene "pedido", "seguimiento", "estado"</li>
                      <li><em>Para quejas:</em> Asunto contiene "problema", "queja", "reclamación", "urgente"</li>
                      <li><em>Para solicitudes técnicas:</em> Asunto contiene "error", "no funciona", "técnico"</li>
                    </ul>
                  </li>
                  <li><strong>Acciones automáticas:</strong>
                    <ul>
                      <li>Aplicar etiqueta específica (ej: "Auto-Pedidos", "Auto-Quejas")</li>
                      <li>Marcar como importante (para quejas)</li>
                      <li>Reenviar a departamento específico</li>
                      <li>Enviar respuesta automática personalizada</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <h4>Paso 2: Templates de Respuesta Automática</h4>
              <div className="card card--muted">
                <h5>Template para Consultas de Pedidos:</h5>
                <blockquote style={{borderLeft: '3px solid #2fb7aa', paddingLeft: '1rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '0.9rem'}}>
{`Asunto: Re: [ASUNTO_ORIGINAL] - Información automática

Estimado/a [NOMBRE_CLIENTE],

Gracias por contactarnos. He recibido tu consulta sobre tu pedido.

🔍 INFORMACIÓN AUTOMÁTICA DISPONIBLE:
• Estado de pedidos: [ENLACE_SEGUIMIENTO]
• Política de devoluciones: [ENLACE_POLITICA]  
• Tiempos de entrega: [ENLACE_ENTREGAS]
• FAQ completa: [ENLACE_FAQ]

📞 SI NECESITAS AYUDA ADICIONAL:
Un especialista revisará tu caso específico en las próximas 4 horas 
(horario laboral) y te contactará directamente.

Mientras tanto, puedes:
• Consultar el estado en tiempo real: [PORTAL_CLIENTE]
• WhatsApp directo: +34 900 XXX XXX
• Chat en vivo: [ENLACE_CHAT]

Gracias por tu paciencia.

Atentamente,
Sistema Automatizado de Atención al Cliente
[NOMBRE_EMPRESA]

---
Este email ha sido generado automáticamente. 
Si tu consulta requiere atención inmediata, 
llama al +34 900 XXX XXX`}
                </blockquote>
              </div>

              <div className="card card--muted">
                <h5>Template para Quejas y Reclamaciones:</h5>
                <blockquote style={{borderLeft: '3px solid #f59e0b', paddingLeft: '1rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '0.9rem'}}>
{`Asunto: PRIORIDAD ALTA - Re: [ASUNTO_ORIGINAL]

Estimado/a [NOMBRE_CLIENTE],

Lamentamos profundamente cualquier inconveniente que hayas experimentado.

🚨 TU CASO HA SIDO MARCADO COMO PRIORITARIO

✅ ACCIONES INMEDIATAS TOMADAS:
• Tu caso se ha registrado con ID: #[ID_AUTOMATICO]
• Notificación enviada a supervisor de área
• Asignado a especialista senior

⏰ PRÓXIMOS PASOS:
• Un supervisor te contactará en las próximas 2 HORAS
• Revisión completa de tu caso por equipo especializado  
• Solución propuesta en un máximo de 24 horas

📋 INFORMACIÓN ADICIONAL:
• Portal de seguimiento: [ENLACE_SEGUIMIENTO_PRIORITARIO]
• Contacto directo: atencion.prioritaria@[EMPRESA].com
• Teléfono directo supervisor: +34 900 XXX XXX (Ext. 1)

Nuevamente, nuestras disculpas y agradecemos tu paciencia 
mientras resolvemos esta situación de manera prioritaria.

Atentamente,
Sistema de Atención Prioritaria
[NOMBRE_EMPRESA]

---
IMPORTANTE: Este email confirma que tu caso está en proceso.
No es necesario reenviar la consulta original.`}
                </blockquote>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Integración con Zapier para Automatización Avanzada</summary>
            <div className="topic-details__content">
              <p>
                Zapier nos permite conectar Gmail/Outlook con múltiples herramientas para crear 
                workflows de automatización sofisticados sin necesidad de programación.
              </p>

              <h4>Paso 3: Configuración de Zaps Básicos</h4>
              <div className="callout callout--example">
                <div className="callout-title">⚡ Zap 1: Email → Clasificación → Slack</div>
                <ol>
                  <li><strong>Trigger:</strong> "Nuevo email en Gmail" con filtro específico</li>
                  <li><strong>Action 1:</strong> "Analizar texto con OpenAI" para clasificar urgencia</li>
                  <li><strong>Action 2:</strong> "Enviar mensaje a Slack" al canal correspondiente</li>
                  <li><strong>Action 3:</strong> "Crear fila en Google Sheets" para tracking</li>
                  <li><strong>Action 4:</strong> "Enviar respuesta automática en Gmail"</li>
                </ol>
              </div>

              <div className="callout callout--example">
                <div className="callout-title">🔄 Zap 2: Email de Queja → Escalación Múltiple</div>
                <ol>
                  <li><strong>Trigger:</strong> Email con palabras clave negativas detectadas</li>
                  <li><strong>Filtro:</strong> Solo si contiene "problema", "terrible", "nunca más"</li>
                  <li><strong>Action 1:</strong> Crear ticket prioritario en Zendesk/Freshdesk</li>
                  <li><strong>Action 2:</strong> SMS al supervisor via Twilio</li>
                  <li><strong>Action 3:</strong> Agregar contacto a lista CRM con tag "Queja-Urgente"</li>
                  <li><strong>Action 4:</strong> Programar seguimiento automático en 2 horas</li>
                </ol>
              </div>

              <h4>Paso 4: Configuración de Análisis de Sentimiento</h4>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Herramienta</th>
                      <th>Función</th>
                      <th>Integración</th>
                      <th>Coste Aprox.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>OpenAI GPT</strong></td>
                      <td>Análisis completo de contexto</td>
                      <td>API directa via Zapier</td>
                      <td>$0.002 por email</td>
                    </tr>
                    <tr>
                      <td><strong>Google Cloud NLP</strong></td>
                      <td>Sentimiento + entidades</td>
                      <td>Webhook + Zapier</td>
                      <td>$1 por 1000 emails</td>
                    </tr>
                    <tr>
                      <td><strong>Microsoft Text Analytics</strong></td>
                      <td>Sentimiento básico</td>
                      <td>Power Automate</td>
                      <td>$2 por 1000 emails</td>
                    </tr>
                    <tr>
                      <td><strong>MonkeyLearn</strong></td>
                      <td>Clasificación personalizable</td>
                      <td>API + webhooks</td>
                      <td>Plan gratuito disponible</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout callout--tip">
                <div className="callout-title">🎯 Configuración Recomendada para Pequeñas Empresas</div>
                <ul>
                  <li><strong>Volumen bajo (&lt;100 emails/día):</strong> Gmail filtros + templates manuales</li>
                  <li><strong>Volumen medio (100-500/día):</strong> Zapier + OpenAI + Slack</li>
                  <li><strong>Volumen alto (&gt;500/día):</strong> Zendesk/Freshdesk + API personalizada</li>
                  <li><strong>Presupuesto limitado:</strong> Gmail + Google Sheets + scripts gratuitos</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Implementación con Scripts de Google Apps (Gratuito)</summary>
            <div className="topic-details__content">
              <p>
                Para empresas con presupuesto limitado, Google Apps Script ofrece automatización 
                potente y gratuita directamente integrada con Gmail y Google Workspace.
              </p>

              <h4>Paso 5: Script Básico de Automatización</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.8rem'}}>
{`function procesarEmailsAutomaticos() {
  // Configuración inicial
  const LABEL_PROCESADOS = 'Procesado-IA';
  const SHEET_ID = 'TU_GOOGLE_SHEET_ID';
  
  // Buscar emails no procesados con palabras clave
  const queries = [
    'subject:(pedido OR estado OR seguimiento) -label:' + LABEL_PROCESADOS,
    'subject:(problema OR queja OR urgente) -label:' + LABEL_PROCESADOS,
    'subject:(técnico OR error OR "no funciona") -label:' + LABEL_PROCESADOS
  ];
  
  queries.forEach((query, index) => {
    const threads = GmailApp.search(query, 0, 10);
    
    threads.forEach(thread => {
      const firstMessage = thread.getMessages()[0];
      const subject = firstMessage.getSubject();
      const body = firstMessage.getPlainBody();
      const sender = firstMessage.getFrom();
      
      // Análisis básico de sentimiento
      const sentiment = analizarSentimiento(subject + ' ' + body);
      
      // Clasificar y responder
      switch(index) {
        case 0: // Consultas normales
          responderConsultaPedido(thread, sender);
          break;
        case 1: // Quejas
          escalarQueja(thread, sender, sentiment);
          break;
        case 2: // Técnico
          responderConsultaTecnica(thread, sender);
          break;
      }
      
      // Registrar en Google Sheets
      registrarEnSheet(SHEET_ID, {
        fecha: new Date(),
        remitente: sender,
        asunto: subject,
        categoria: ['Pedido', 'Queja', 'Técnico'][index],
        sentimiento: sentiment,
        procesado: 'Sí'
      });
      
      // Marcar como procesado
      thread.addLabel(GmailApp.getUserLabelByName(LABEL_PROCESADOS));
    });
  });
}

function analizarSentimiento(texto) {
  const palabrasNegativas = ['problema', 'terrible', 'odio', 'nunca', 'pésimo', 'horrible'];
  const palabrasPositivas = ['excelente', 'perfecto', 'genial', 'fantástico', 'recomiendo'];
  
  const textoMin = texto.toLowerCase();
  let puntuacion = 0;
  
  palabrasNegativas.forEach(palabra => {
    if (textoMin.includes(palabra)) puntuacion -= 1;
  });
  
  palabrasPositivas.forEach(palabra => {
    if (textoMin.includes(palabra)) puntuacion += 1;
  });
  
  if (puntuacion <= -2) return 'Muy Negativo';
  if (puntuacion === -1) return 'Negativo';
  if (puntuacion === 0) return 'Neutral';
  if (puntuacion === 1) return 'Positivo';
  return 'Muy Positivo';
}

function responderConsultaPedido(thread, sender) {
  const respuesta = \`
Estimado cliente,

Gracias por contactarnos sobre tu pedido.

Puedes consultar el estado actualizado aquí: [ENLACE]
Si necesitas ayuda específica, un agente te contactará en 4 horas.

Saludos,
Equipo de Atención Automática
\`;
  
  thread.reply(respuesta);
}

function escalarQueja(thread, sender, sentiment) {
  // Enviar email a supervisor
  GmailApp.sendEmail(
    'supervisor@tuempresa.com',
    '🚨 QUEJA DETECTADA - Requiere Atención Inmediata',
    \`Cliente: \${sender}\\nAsunto: \${thread.getFirstMessageSubject()}\\nSentimiento: \${sentiment}\\nAcción requerida: Contactar en menos de 2 horas\`
  );
  
  // Respuesta automática al cliente
  const respuesta = \`
Estimado cliente,

Lamentamos cualquier inconveniente. Tu caso es prioritario.
Un supervisor te contactará en las próximas 2 HORAS.

ID de seguimiento: QJ-\${new Date().getTime()}

Atentamente,
Equipo de Atención Prioritaria
\`;
  
  thread.reply(respuesta);
}

function registrarEnSheet(sheetId, data) {
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  sheet.appendRow([
    data.fecha,
    data.remitente,
    data.asunto,
    data.categoria,
    data.sentimiento,
    data.procesado
  ]);
}

// Configurar trigger automático cada 15 minutos
function configurarTrigger() {
  ScriptApp.newTrigger('procesarEmailsAutomaticos')
    .timeBased()
    .everyMinutes(15)
    .create();
}`}
                </pre>
              </div>

              <h4>Paso 6: Dashboard de Métricas en Tiempo Real</h4>
              <div className="callout callout--example">
                <div className="callout-title">📊 Google Sheets como Dashboard</div>
                <p>Crea un dashboard automático con estas fórmulas:</p>
                <ul>
                  <li><strong>Emails procesados hoy:</strong> <code>=COUNTIF(A:A, "&gt;"&amp;TODAY())</code></li>
                  <li><strong>Quejas del día:</strong> <code>=COUNTIFS(A:A, "&gt;"&amp;TODAY(), D:D, "Queja")</code></li>
                  <li><strong>Sentimiento promedio:</strong> Usando gráfico dinámico de columna E</li>
                  <li><strong>Tiempo de respuesta medio:</strong> Calculado con timestamp de respuesta</li>
                </ul>
              </div>

              <div className="callout callout--activity">
                <div className="callout-title">🛠️ Implementación Paso a Paso</div>
                <ol>
                  <li><strong>Preparación:</strong>
                    <ul>
                      <li>Crear Google Sheet para tracking</li>
                      <li>Configurar etiquetas en Gmail</li>
                      <li>Definir templates de respuesta</li>
                    </ul>
                  </li>
                  <li><strong>Configuración:</strong>
                    <ul>
                      <li>Acceder a script.google.com</li>
                      <li>Crear nuevo proyecto</li>
                      <li>Copiar y personalizar el código</li>
                      <li>Autorizar permisos de Gmail y Sheets</li>
                    </ul>
                  </li>
                  <li><strong>Testing:</strong>
                    <ul>
                      <li>Probar manualmente con emails de prueba</li>
                      <li>Verificar respuestas automáticas</li>
                      <li>Comprobar registro en Sheet</li>
                    </ul>
                  </li>
                  <li><strong>Producción:</strong>
                    <ul>
                      <li>Activar trigger automático</li>
                      <li>Monitorear primeras 48 horas</li>
                      <li>Ajustar según resultados</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Automatización Avanzada con Microsoft Power Automate</summary>
            <div className="topic-details__content">
              <p>
                Para usuarios de Outlook y Microsoft 365, Power Automate ofrece 
                capacidades avanzadas de automatización integradas con el ecosistema Microsoft.
              </p>

              <h4>Paso 7: Flow Básico en Power Automate</h4>
              <div className="callout callout--example">
                <div className="callout-title">🔄 Flow: Nuevo Email → Análisis → Acción</div>
                <ol>
                  <li><strong>Trigger:</strong> "Cuando llega un nuevo email (V3)" - Outlook</li>
                  <li><strong>Condición:</strong> Filtrar por asunto o remitente específico</li>
                  <li><strong>Análisis IA:</strong> "AI Builder - Analyze sentiment" del cuerpo del email</li>
                  <li><strong>Bifurcación por sentimiento:</strong>
                    <ul>
                      <li><em>Si Negativo:</em> Crear item en SharePoint + notificar supervisor</li>
                      <li><em>Si Neutral:</em> Respuesta automática estándar</li>
                      <li><em>Si Positivo:</em> Agregar a lista de testimonios</li>
                    </ul>
                  </li>
                  <li><strong>Registro:</strong> Agregar fila a tabla Excel Online</li>
                </ol>
              </div>

              <h4>Configuración de Templates Dinámicos</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.8rem'}}>
{`// Template dinámico en Power Automate
{
  "emailResponse": {
    "to": "@{triggerBody()?['From']}",
    "subject": "Re: @{triggerBody()?['Subject']}",
    "body": "@{
      if(
        outputs('Analyze_sentiment')?['body/sentiment'] == 'negative',
        concat(
          'Estimado ', items('Apply_to_each')?['displayName'], ',\\n\\n',
          'Lamentamos cualquier inconveniente. Su consulta es prioritaria.\\n',
          'Un especialista le contactará en las próximas 2 horas.\\n\\n',
          'ID de seguimiento: ', guid(), '\\n\\n',
          'Atentamente,\\nEquipo de Atención Prioritaria'
        ),
        concat(
          'Estimado ', items('Apply_to_each')?['displayName'], ',\\n\\n',
          'Gracias por contactarnos. Hemos recibido su consulta.\\n',
          'Le responderemos en un máximo de 24 horas laborables.\\n\\n',
          'Mientras tanto, puede consultar:\\n',
          '• FAQ: https://empresa.com/faq\\n',
          '• Estado de pedidos: https://empresa.com/pedidos\\n\\n',
          'Saludos,\\nEquipo de Atención al Cliente'
        )
      )
    }"
  }
}`}
                </pre>
              </div>

              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Componente</th>
                      <th>Función</th>
                      <th>Configuración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>AI Builder</strong></td>
                      <td>Análisis de sentimiento y clasificación</td>
                      <td>Modelo preentrenado + personalización</td>
                    </tr>
                    <tr>
                      <td><strong>SharePoint</strong></td>
                      <td>Base de datos de tickets</td>
                      <td>Lista personalizada con workflows</td>
                    </tr>
                    <tr>
                      <td><strong>Teams</strong></td>
                      <td>Notificaciones al equipo</td>
                      <td>Webhook a canal específico</td>
                    </tr>
                    <tr>
                      <td><strong>Excel Online</strong></td>
                      <td>Dashboard y métricas</td>
                      <td>Tabla dinámica auto-actualizada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Métricas y Optimización Continua del Sistema</summary>
            <div className="topic-details__content">
              <p>
                Una vez implementada la automatización, es crucial monitorear el rendimiento 
                y optimizar continuamente para mejorar la efectividad del sistema.
              </p>

              <h4>Dashboard de KPIs Esenciales</h4>
              <div className="media-grid">
                <div className="card">
                  <h5>⚡ Velocidad de Respuesta</h5>
                  <ul>
                    <li><strong>Objetivo:</strong> &lt; 5 minutos automática</li>
                    <li><strong>Medición:</strong> Timestamp recepción vs respuesta</li>
                    <li><strong>Alerta:</strong> Si supera 10 minutos</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🎯 Precisión de Clasificación</h5>
                  <ul>
                    <li><strong>Objetivo:</strong> &gt; 85% precisión</li>
                    <li><strong>Medición:</strong> Revisión manual semanal</li>
                    <li><strong>Mejora:</strong> Reentrenar modelo mensualmente</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>😊 Satisfacción del Cliente</h5>
                  <ul>
                    <li><strong>Objetivo:</strong> &gt; 4.2/5.0 promedio</li>
                    <li><strong>Medición:</strong> Survey post-resolución</li>
                    <li><strong>Seguimiento:</strong> Trending semanal</li>
                  </ul>
                </div>
              </div>

              <h4>Proceso de Mejora Continua</h4>
              <div className="callout callout--case">
                <div className="callout-title">📈 Ciclo Mensual de Optimización</div>
                <p><strong>Semana 1:</strong> Recopilación y análisis de datos</p>
                <ul>
                  <li>Extraer métricas del dashboard automatizado</li>
                  <li>Identificar emails mal clasificados o sin responder</li>
                  <li>Analizar feedback negativo de clientes</li>
                </ul>
                
                <p><strong>Semana 2:</strong> Identificación de patrones y problemas</p>
                <ul>
                  <li>Agrupar consultas similares sin respuesta automática</li>
                  <li>Detectar nuevas palabras clave emergentes</li>
                  <li>Identificar tiempos de respuesta problemáticos</li>
                </ul>
                
                <p><strong>Semana 3:</strong> Implementación de mejoras</p>
                <ul>
                  <li>Crear nuevos templates para consultas frecuentes</li>
                  <li>Ajustar filtros y clasificadores</li>
                  <li>Actualizar escalación automática</li>
                </ul>
                
                <p><strong>Semana 4:</strong> Testing y validación</p>
                <ul>
                  <li>Probar cambios con subset de emails</li>
                  <li>Medir impacto en métricas clave</li>
                  <li>Documentar cambios y resultados</li>
                </ul>
              </div>

              <div className="callout callout--tip">
                <div className="callout-title">🔍 Herramientas de Monitoreo Recomendadas</div>
                <ul>
                  <li><strong>Google Analytics:</strong> Para tracking de enlaces en respuestas automáticas</li>
                  <li><strong>Hotjar:</strong> Para heatmaps de interacción con FAQ automáticos</li>
                  <li><strong>Mixpanel:</strong> Para eventos de clasificación y respuesta</li>
                  <li><strong>Slack/Teams:</strong> Para alertas en tiempo real del sistema</li>
                  <li><strong>Data Studio:</strong> Para dashboards visuales avanzados</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Sección 4: Landing Page con Chatbot */}
      <div className="topic-section">
        <div className="topic-section__title">
          <h2>🌐 Desarrollo de Landing Page con Chatbot</h2>
          <span className="topic-section__meta">Implementación práctica</span>
        </div>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>Planificación y Diseño UX del Chatbot</summary>
            <div className="topic-details__content">
              <p>
                El diseño de un chatbot efectivo requiere una cuidadosa planificación 
                de la experiencia del usuario y flujos de conversación intuitivos.
              </p>

              <h4>Principios de Diseño UX</h4>
              <div className="media-grid">
                <div className="card">
                  <h5>🎯 Propósito Claro</h5>
                  <ul>
                    <li>Definir objetivos específicos</li>
                    <li>Identificar tareas principales</li>
                    <li>Establecer límites de funcionalidad</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🗣️ Conversación Natural</h5>
                  <ul>
                    <li>Tono consistente con la marca</li>
                    <li>Lenguaje simple y directo</li>
                    <li>Opciones de respuesta clara</li>
                  </ul>
                </div>
                <div className="card">
                  <h5>🔄 Flujos Lógicos</h5>
                  <ul>
                    <li>Caminos de conversación claros</li>
                    <li>Opciones de salida siempre visibles</li>
                    <li>Recuperación de errores elegante</li>
                  </ul>
                </div>
              </div>

              <h4>Estructura del Flujo de Conversación</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.85rem'}}>
{`1. SALUDO INICIAL
   ├─ Presentación del bot
   ├─ Opciones principales disponibles  
   └─ Invitación a consultar

2. MENÚ PRINCIPAL
   ├─ Información sobre productos/servicios
   ├─ Soporte técnico
   ├─ Información de contacto
   ├─ Estado de pedidos
   └─ Hablar con agente humano

3. SUBMENÍ (ejemplo: Productos)
   ├─ Categorías de productos
   ├─ Precios y ofertas
   ├─ Disponibilidad
   └─ Volver al menú principal

4. ESCALACIÓN
   ├─ Recopilar información básica
   ├─ Transferir contexto
   └─ Conectar con agente`}
                </pre>
              </div>

              <div className="callout callout--activity">
                <div className="callout-title">🎨 Elementos Visuales del Chatbot</div>
                <ul className="checklist">
                  <li>Widget flotante no intrusivo</li>
                  <li>Avatar o icono representativo</li>
                  <li>Indicadores de escritura y tiempo de respuesta</li>
                  <li>Burbujas de mensaje diferenciadas (bot vs usuario)</li>
                  <li>Botones de respuesta rápida</li>
                  <li>Historial de conversación visible</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Implementación Técnica Básica</summary>
            <div className="topic-details__content">
              <p>
                Implementaremos un chatbot básico usando HTML, CSS y JavaScript, 
                con integración a APIs de IA para procesamiento de lenguaje natural.
              </p>

              <h4>Estructura HTML del Widget</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.8rem'}}>
{`<!-- Widget del Chatbot -->
<div id="chatbot-widget" class="chatbot-widget">
  <div class="chatbot-header">
    <div class="chatbot-avatar">
      <img src="bot-avatar.png" alt="Asistente Virtual">
    </div>
    <div class="chatbot-info">
      <h4>Asistente Virtual</h4>
      <span class="status-online">En línea</span>
    </div>
    <button class="chatbot-minimize">−</button>
  </div>
  
  <div class="chatbot-messages" id="messages-container">
    <!-- Los mensajes aparecerán aquí dinámicamente -->
  </div>
  
  <div class="chatbot-input">
    <input 
      type="text" 
      id="user-input" 
      placeholder="Escribe tu mensaje..."
      maxlength="500"
    >
    <button id="send-button">Enviar</button>
  </div>
  
  <div class="chatbot-quick-actions">
    <button class="quick-btn" data-action="productos">Ver Productos</button>
    <button class="quick-btn" data-action="soporte">Soporte</button>
    <button class="quick-btn" data-action="contacto">Contacto</button>
  </div>
</div>

<!-- Botón flotante para abrir chat -->
<button id="chatbot-trigger" class="chatbot-trigger">
  💬 ¿Necesitas ayuda?
</button>`}
                </pre>
              </div>

              <h4>Estilos CSS Responsive</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.8rem'}}>
{`.chatbot-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.chatbot-widget.active {
  transform: translateY(0);
}

.chatbot-header {
  background: linear-gradient(135deg, #2fb7aa, #6edbd0);
  color: white;
  padding: 15px;
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.chatbot-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background: #f9fcfb;
}

.message {
  margin-bottom: 12px;
  max-width: 80%;
}

.message.bot {
  align-self: flex-start;
}

.message.user {
  align-self: flex-end;
  margin-left: auto;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.message.user .message-bubble {
  background: #2fb7aa;
  color: white;
}

@media (max-width: 768px) {
  .chatbot-widget {
    width: calc(100vw - 20px);
    height: calc(100vh - 40px);
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
}`}
                </pre>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Lógica JavaScript y Integración con IA</summary>
            <div className="topic-details__content">
              <p>
                La implementación JavaScript manejará la interacción del usuario, 
                el procesamiento de mensajes y la integración con servicios de IA.
              </p>

              <h4>Funcionalidad Principal</h4>
              <div className="card card--muted">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.8rem'}}>
{`class ChatBot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.apiKey = 'TU_API_KEY'; // Configurar con tu clave
    this.init();
  }

  init() {
    this.bindEvents();
    this.showWelcomeMessage();
  }

  bindEvents() {
    // Abrir/cerrar chat
    document.getElementById('chatbot-trigger').addEventListener('click', 
      () => this.toggleChat()
    );

    // Enviar mensaje
    document.getElementById('send-button').addEventListener('click', 
      () => this.sendMessage()
    );

    // Enter para enviar
    document.getElementById('user-input').addEventListener('keypress', 
      (e) => {
        if (e.key === 'Enter') this.sendMessage();
      }
    );

    // Acciones rápidas
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        this.handleQuickAction(action);
      });
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const widget = document.getElementById('chatbot-widget');
    widget.classList.toggle('active', this.isOpen);
  }

  async sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (!message) return;

    // Mostrar mensaje del usuario
    this.addMessage(message, 'user');
    input.value = '';

    // Mostrar indicador de escritura
    this.showTypingIndicator();

    // Procesar con IA
    try {
      const response = await this.processWithAI(message);
      this.hideTypingIndicator();
      this.addMessage(response, 'bot');
    } catch (error) {
      this.hideTypingIndicator();
      this.addMessage('Lo siento, hubo un problema. ¿Puedo ayudarte de otra manera?', 'bot');
    }
  }

  async processWithAI(message) {
    // Integración con OpenAI GPT o similar
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${this.apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente de atención al cliente amigable y profesional...'
          },
          {
            role: 'user', 
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('messages-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = \`message \${sender}\`;
    
    messageDiv.innerHTML = \`
      <div class="message-bubble">
        <p>\${text}</p>
        <span class="message-time">\${new Date().toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        })}</span>
      </div>
    \`;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    this.messages.push({text, sender, timestamp: Date.now()});
  }

  handleQuickAction(action) {
    const responses = {
      productos: '¿Qué tipo de productos te interesan? Tenemos varias categorías disponibles...',
      soporte: 'Estoy aquí para ayudarte con cualquier problema técnico. ¿Cuál es tu consulta?',
      contacto: 'Puedes contactarnos por teléfono al 900-123-456 o email: info@empresa.com'
    };
    
    this.addMessage(responses[action] || 'Gracias por tu consulta.', 'bot');
  }

  showWelcomeMessage() {
    setTimeout(() => {
      this.addMessage('¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?', 'bot');
    }, 1000);
  }
}

// Inicializar chatbot cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
  new ChatBot();
});`}
                </pre>
              </div>

              <div className="callout callout--tip">
                <div className="callout-title">🔧 Mejoras Adicionales</div>
                <ul>
                  <li><strong>Persistencia:</strong> Guardar conversaciones en localStorage</li>
                  <li><strong>Analytics:</strong> Tracking de interacciones para mejoras</li>
                  <li><strong>Multilingual:</strong> Detección y respuesta en múltiples idiomas</li>
                  <li><strong>Rich Media:</strong> Soporte para imágenes, links y archivos</li>
                  <li><strong>Voice:</strong> Integración con reconocimiento de voz</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>Métricas y Optimización Continua</summary>
            <div className="topic-details__content">
              <p>
                El éxito de un chatbot se mide através de métricas específicas 
                que permiten identificar áreas de mejora y optimizar continuamente.
              </p>

              <h4>KPIs Principales</h4>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Métrica</th>
                      <th>Objetivo</th>
                      <th>Cómo Medir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Tasa de Resolución</strong></td>
                      <td>&gt; 70%</td>
                      <td>Consultas resueltas sin escalación humana</td>
                    </tr>
                    <tr>
                      <td><strong>Tiempo de Respuesta</strong></td>
                      <td>&lt; 3 segundos</td>
                      <td>Tiempo desde consulta hasta respuesta del bot</td>
                    </tr>
                    <tr>
                      <td><strong>Satisfacción del Usuario</strong></td>
                      <td>&gt; 4.0/5.0</td>
                      <td>Rating post-conversación</td>
                    </tr>
                    <tr>
                      <td><strong>Tasa de Abandono</strong></td>
                      <td>&lt; 20%</td>
                      <td>Usuarios que cierran el chat sin interacción</td>
                    </tr>
                    <tr>
                      <td><strong>Escalaciones</strong></td>
                      <td>&lt; 30%</td>
                      <td>Consultas que requieren agente humano</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout callout--case">
                <div className="callout-title">📈 Plan de Optimización Mensual</div>
                <ol>
                  <li><strong>Análisis de logs:</strong> Identificar consultas no resueltas frecuentes</li>
                  <li><strong>A/B Testing:</strong> Probar diferentes versiones de respuestas</li>
                  <li><strong>Feedback integration:</strong> Incorporar sugerencias de usuarios</li>
                  <li><strong>Knowledge base update:</strong> Agregar nuevos FAQs identificados</li>
                  <li><strong>Performance tuning:</strong> Optimizar tiempos de respuesta</li>
                  <li><strong>Training data expansion:</strong> Añadir nuevos casos de entrenamiento</li>
                </ol>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Test de Conocimientos */}
      <Quiz questions={quizQuestions} />

      {/* Debate y Reflexión */}
      <div className="topic-section">
        <div className="topic-section__title">
          <h2>💭 Debate y Reflexión</h2>
          <span className="topic-section__meta">Análisis crítico</span>
        </div>

        <div className="debate">
          <div className="debate-prompt">
            <h3>🤔 Preguntas para Reflexionar</h3>
            <p>
              La implementación de IA en atención al cliente plantea importantes 
              consideraciones éticas y estratégicas. Reflexiona sobre estos aspectos:
            </p>
          </div>

          <ol className="debate-questions">
            <li>
              <strong>Balance Humano-IA:</strong> ¿Cómo mantener el toque humano mientras 
              automatizamos procesos? ¿Cuándo es esencial la intervención humana?
            </li>
            <li>
              <strong>Transparencia:</strong> ¿Los clientes deben saber siempre que están 
              interactuando con una IA? ¿Cómo afecta esto a la confianza?
            </li>
            <li>
              <strong>Privacidad de datos:</strong> ¿Qué medidas son necesarias para proteger 
              la información personal procesada por sistemas de IA?
            </li>
            <li>
              <strong>Dependencia tecnológica:</strong> ¿Qué riesgos presenta depender 
              excesivamente de la IA para atención al cliente?
            </li>
            <li>
              <strong>Futuro del trabajo:</strong> ¿Cómo puede la IA complementar (no reemplazar) 
              a los agentes humanos? ¿Qué nuevas habilidades necesitarán desarrollar?
            </li>
          </ol>

          <div className="callout callout--activity">
            <div className="callout-title">🎯 Actividad Práctica</div>
            <p><strong>Diseña tu estrategia de IA:</strong></p>
            <ol>
              <li>Elige un tipo de negocio (e-commerce, SaaS, servicios financieros, etc.)</li>
              <li>Identifica los 5 tipos de consultas más frecuentes</li>
              <li>Diseña el flujo de conversación para un chatbot</li>
              <li>Define cuándo y cómo escalar a agentes humanos</li>
              <li>Establece métricas de éxito específicas</li>
              <li>Presenta tu propuesta considerando aspectos éticos y de privacidad</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Recursos Audiovisuales */}
      <RecursosAudiovisuales
        videos={[
          {
            id: 1,
            title: "Introducción a la IA en Atención al Cliente",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Conceptos básicos y aplicaciones prácticas de la inteligencia artificial en servicio al cliente."
          },
          {
            id: 2,
            title: "Creación de Chatbots Efectivos",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
            description: "Guía paso a paso para diseñar e implementar chatbots que realmente ayuden a los usuarios."
          },
          {
            id: 3,
            title: "Automatización de Email Marketing con IA",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas avanzadas para automatizar y personalizar la comunicación por email usando IA."
          }
        ]}
        enlaces={[
          {
            titulo: "OpenAI Platform - Documentación oficial",
            url: "https://platform.openai.com/docs",
            descripcion: "Guías completas para integrar GPT y otros modelos de IA en tus aplicaciones."
          },
          {
            titulo: "Dialogflow by Google - Herramienta de chatbots",
            url: "https://cloud.google.com/dialogflow",
            descripcion: "Plataforma completa para crear agentes conversacionales inteligentes."
          },
          {
            titulo: "Microsoft Bot Framework",
            url: "https://dev.botframework.com/",
            descripcion: "Framework robusto para desarrollar bots empresariales con integración a múltiples canales."
          },
          {
            titulo: "Zendesk Answer Bot - IA para soporte",
            url: "https://www.zendesk.com/answer-bot/",
            descripcion: "Solución empresarial para automatización inteligente de soporte al cliente."
          },
          {
            titulo: "IBM Watson Assistant",
            url: "https://www.ibm.com/cloud/watson-assistant/",
            descripcion: "Plataforma de IA conversacional para empresas con capacidades avanzadas de NLP."
          },
          {
            titulo: "Intercom Resolution Bot",
            url: "https://www.intercom.com/resolution-bot",
            descripcion: "Bot de resolución que aprende de las interacciones para mejorar continuamente."
          }
        ]}
      />
    </TopicLayout>
  );
};

export default Tema17;
