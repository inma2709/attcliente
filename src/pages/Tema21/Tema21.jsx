import TopicLayout from '../../components/TopicLayout';

const Tema21 = () => {
  return (
    <TopicLayout
      title="Taller Práctico: La Humanización de la Venta"
      headerBgColor="#8b5cf6"
      icon="🎭"
    >
      <div className="topic-container">
        
        {/* INTRODUCCIÓN */}
        <details className="topic-details" open>
          <summary>🎯 Introducción al taller: De la teoría a la acción</summary>
          <div className="topic-details__content">
            <p>
              El éxito en ventas y atención al cliente no reside solo en el conocimiento del producto, 
              sino en la <strong>calidad de la conexión humana</strong>. La teoría es importante, pero 
              sin práctica es como tener un mapa sin caminar.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">💡 Principio fundamental</h4>
              <p>
                "No estás respondiendo a palabras. Estás gestionando emociones detrás de las palabras."
              </p>
            </div>

            <h4>¿Por qué este taller es diferente?</h4>
            <p>
              Este taller está diseñado bajo el método del <strong>"aprender haciendo" (learning by doing)</strong>. 
              No hay clase magistral. Hay simulación, error, corrección y mejora continua.
            </p>

            <div className="callout callout--activity">
              <h4 className="callout-title">🎯 Objetivos del taller</h4>
              <ul className="checklist">
                <li>Desarrollar escucha activa en situaciones reales</li>
                <li>Aplicar empatía estratégica (no solo emocional)</li>
                <li>Gestionar control emocional ante situaciones críticas</li>
                <li>Detectar necesidades ocultas del cliente</li>
                <li>Negociar soluciones profesionales bajo presión</li>
              </ul>
            </div>

            <h4>Preguntas iniciales para reflexionar</h4>
            <div className="callout callout--warning">
              <ul>
                <li>¿Cuántas veces has sentido que no te han escuchado verdaderamente?</li>
                <li>¿Qué diferencia hay entre "escuchar" y "resolver"?</li>
                <li>¿Cómo reaccionas cuando un cliente está enfadado?</li>
                <li>¿Eres capaz de mantener la calma cuando alguien te presiona?</li>
                <li>¿Qué crees que valora más un cliente: la solución o cómo se le trata?</li>
              </ul>
              <p style={{ marginTop: '1em' }}>
                <strong>Nota:</strong> A lo largo del taller responderemos estas preguntas vivencialmente.
              </p>
            </div>
          </div>
        </details>

        {/* ESTRUCTURA DEL TALLER */}
        <details className="topic-details">
          <summary>📋 Estructura general del taller (4 horas)</summary>
          <div className="topic-details__content">
            <p>
              El taller se divide en <strong>7 fases prácticas</strong> con una progresión de dificultad: 
              de cliente básico a cliente crítico.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '1.5em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#8b5cf6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Fase</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Objetivo</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '15%' }}>Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Calentamiento</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Activación emocional y romper rol pasivo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>10 min</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Bloque 1: El Espejo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Escucha activa y parafraseo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>40 min</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Bloque 2: El Detective</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Detección de necesidades con preguntas poderosas</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>45 min</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Bloque 3: Silla Caliente</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Manejo de objeciones y quejas (técnica L.E.A.R.)</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>60 min</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Bloque 4: Coreografía No Verbal</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Lenguaje corporal y tono de voz</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>30 min</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Simulación Final</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Integración total: cliente complejo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>40 min</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Debriefing</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Reflexión, cierre y compromiso de mejora</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>15 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--tip" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">👨‍🏫 Rol del facilitador</h4>
              <p>
                El profesor actúa como <strong>director de escena</strong>, no como profesor tradicional:
              </p>
              <ul className="checklist">
                <li>Interrumpe cuando detecta errores clave</li>
                <li>Obliga a repetir escenas si no se aplica la técnica</li>
                <li>No permite improvisación sin estructura</li>
                <li>Mantiene presión emocional controlada</li>
                <li>Corrige en el momento, no al final</li>
              </ul>
            </div>

            <h4>Tres reglas de oro para los alumnos</h4>
            <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
              <li><strong>Prohibido el juicio:</strong> En las dinámicas, el cliente es siempre el "maestro".</li>
              <li><strong>La vulnerabilidad es poder:</strong> Reconocer dónde te cuesta más ser paciente.</li>
              <li><strong>Enfoque en el "Nosotros":</strong> Cambiar "Usted debe hacer esto" por "Vamos a ver cómo solucionamos esto juntos".</li>
            </ol>
          </div>
        </details>

        {/* FASE 0: CALENTAMIENTO */}
        <details className="topic-details">
          <summary>🔥 Fase 0: Calentamiento (10 minutos)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Romper la expectativa de clase tradicional y activar mentalidad profesional.
            </p>

            <div className="divider" />

            <h4>🎬 Micro activación: "La interrupción controlada"</h4>
            
            <div style={{ padding: '1.2em', background: '#fef3c7', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Instrucciones paso a paso</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li><strong>Formar parejas</strong></li>
                <li>Una persona habla durante 1 minuto sobre "la última vez que no te sentiste escuchado"</li>
                <li>La otra persona <strong>interrumpe constantemente a propósito</strong></li>
                <li>Cambio de roles</li>
                <li>Duración total: 3-4 minutos</li>
              </ol>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">⚠️ Intervención del profesor</h4>
              <p><strong>CORTE después de la dinámica:</strong></p>
              <p>"Stop."</p>
              <p>"¿Esto os resulta cómodo o incómodo?"</p>
              <p style={{ marginTop: '0.8em' }}>
                <em>(Esperar respuestas breves)</em>
              </p>
              <p style={{ marginTop: '0.8em', fontWeight: 'bold', color: '#dc2626' }}>
                "Esto es exactamente lo que vive un cliente cuando no se le escucha."
              </p>
            </div>

            <div className="divider" />

            <h4>Preguntas guía para el cierre del calentamiento</h4>
            <ul className="checklist">
              <li>¿Cómo te has sentido cuando te interrumpían?</li>
              <li>¿Has podido expresar lo que querías?</li>
              <li>¿Qué diferencia habría si la otra persona solo escuchara?</li>
            </ul>

            <div className="callout callout--insight" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">💭 Reflexión para el facilitador</h4>
              <p>
                Si el grupo se siente incómodo, <strong>es que funciona</strong>. La incomodidad genera 
                aprendizaje cuando se canaliza correctamente.
              </p>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Cierre de fase: "Hoy no vamos a estudiar atención al cliente. Vamos a entrenarla como se entrena una habilidad profesional real."
              </p>
            </div>
          </div>
        </details>

        {/* BLOQUE 1: EL ESPEJO */}
        <details className="topic-details">
          <summary>🪞 Bloque 1: El Espejo - Escucha activa y parafraseo (40 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Entrenar escucha activa real (no teórica). El alumno debe aprender que <strong>escuchar no es esperar tu turno para hablar</strong>.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">🎯 Concepto clave</h4>
              <p>
                No vendemos productos, vendemos soluciones a personas que necesitan sentirse comprendidas. 
                Si no hay conexión, no hay transacción.
              </p>
            </div>

            <div className="divider" />

            <h4>🎭 Dinámica: "El Detective de Necesidades"</h4>

            <div style={{ padding: '1.2em', background: '#dbeafe', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Instrucciones para el profesor</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li>Dividir a los alumnos en parejas (Vendedor y Cliente)</li>
                <li>El Cliente recibe una tarjeta con un problema específico y una emoción<br/>
                  <em>Ejemplo: "Estoy frustrado porque mi última compra falló y tengo prisa"</em>
                </li>
                <li>El Cliente habla durante <strong>2 minutos sin interrupción</strong></li>
                <li>El Vendedor <strong>solo escucha (NO puede resolver durante la narración)</strong></li>
              </ol>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">🚨 Regla estricta del profesor</h4>
              <p>
                ❌ <strong>No se puede responder durante la narración</strong>
              </p>
              <p style={{ marginTop: '0.8em' }}>
                El profesor debe caminar entre alumnos y observar silencios incómodos, reforzando:
              </p>
              <ul style={{ marginLeft: '1.2em' }}>
                <li>"No solucionéis aún"</li>
                <li>"Solo escuchad"</li>
                <li>"No deis consejos todavía"</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>Segunda fase: La reformulación</h4>
            <p>
              Después de los 2 minutos de escucha, el Vendedor debe reformular usando la fórmula:
            </p>

            <div style={{ padding: '1.2em', background: '#dcfce7', borderRadius: '8px', marginTop: '1em', borderLeft: '4px solid #22c55e' }}>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1em' }}>
                "Si te he entendido bien, te sientes [emoción] por [hecho] y lo que realmente necesitas es [expectativa], ¿es correcto?"
              </p>
            </div>

            <h4 style={{ marginTop: '1.5em' }}>Ejemplos de reformulación correcta</h4>
            <div style={{ marginTop: '1em' }}>
              <div style={{ padding: '1em', background: '#f9fafb', borderRadius: '4px', marginBottom: '1em' }}>
                <p style={{ margin: 0 }}><strong>Cliente:</strong> "Llevo esperando tres días y nadie me ha llamado. Esto es increíble."</p>
                <p style={{ margin: '0.8em 0 0 0', color: '#059669', fontWeight: 'bold' }}>
                  ✅ Reformulación: "Si te he entendido bien, te sientes frustrado porque han pasado tres días sin respuesta y lo que necesitas es una solución inmediata, ¿es correcto?"
                </p>
              </div>

              <div style={{ padding: '1em', background: '#f9fafb', borderRadius: '4px' }}>
                <p style={{ margin: 0 }}><strong>Cliente:</strong> "No sé cuál elegir, todos me parecen iguales."</p>
                <p style={{ margin: '0.8em 0 0 0', color: '#059669', fontWeight: 'bold' }}>
                  ✅ Reformulación: "Si te he entendido bien, te sientes indeciso porque las opciones son similares y lo que necesitas es una guía clara para decidir, ¿correcto?"
                </p>
              </div>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">⚠️ Corrección del profesor</h4>
              <p>
                Si el alumno <strong>da soluciones prematuras</strong>, el profesor debe cortar suavemente:
              </p>
              <p style={{ marginTop: '0.8em', color: '#dc2626', fontWeight: 'bold' }}>
                "Stop. Eso es resolver, no escuchar todavía."
              </p>
            </div>

            <div className="divider" />

            <h4>Rotación y repetición</h4>
            <ul className="checklist">
              <li>Cambiar roles (el vendedor pasa a cliente)</li>
              <li>Repetir la dinámica con nuevo caso</li>
              <li>Tiempo total: 15-20 minutos de práctica + rotación</li>
            </ul>

            <div className="divider" />

            <h4>Preguntas para el debate final del bloque</h4>
            <div className="callout callout--activity">
              <ul>
                <li>¿Qué cambió en el cliente cuando se sintió verdaderamente entendido?</li>
                <li>¿Fue difícil NO resolver inmediatamente?</li>
                <li>¿Qué diferencia hay entre "escuchar para responder" y "escuchar para entender"?</li>
                <li>¿Cuántas veces interrumpiste mentalmente aunque no habl aras?</li>
              </ul>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Cierre del bloque: "La mayoría de errores en atención al cliente no son técnicos. Son de escucha."
              </p>
            </div>
          </div>
        </details>

        {/* BLOQUE 2: EL DETECTIVE */}
        <details className="topic-details">
          <summary>🔍 Bloque 2: El Detective - Detección de necesidades (45 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Eliminar el "vender rápido" y activar exploración. El alumno debe aprender a <strong>descubrir problemas, no solo vender productos</strong>.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">🎯 Concepto clave</h4>
              <p>
                "El buen vendedor no convence. Investiga."
              </p>
            </div>

            <div className="divider" />

            <h4>🎭 Dinámica: "El Detective de Necesidades"</h4>

            <div style={{ padding: '1.2em', background: '#fef3c7', borderRadius: '8px', marginTop: '1em', border: '2px solid #f59e0b' }}>
              <h4 style={{ marginTop: 0, color: '#f59e0b' }}>🚨 Regla clave (NO NEGOCIABLE)</h4>
              <p style={{ fontSize: '1.2em', fontWeight: 'bold', margin: 0 }}>
                El vendedor tiene PROHIBIDO hablar del producto durante los primeros 3 minutos.
              </p>
            </div>

            <div style={{ padding: '1.2em', background: '#dbeafe', borderRadius: '8px', marginTop: '1.5em' }}>
              <h4 style={{ marginTop: 0 }}>Instrucciones paso a paso</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li>Parejas: Cliente potencial + Vendedor</li>
                <li>El cliente tiene un problema vago<br/>
                  <em>Ejemplo: "No estoy contento con mi proveedor actual"</em>
                </li>
                <li>El vendedor debe usar EXCLUSIVAMENTE preguntas abiertas durante 3 minutos</li>
                <li>Objetivo: Llegar a la "necesidad raíz" (el pain point real)</li>
              </ol>
            </div>

            <div className="divider" />

            <h4>Técnica obligatoria: Preguntas abiertas</h4>
            <p>El alumno solo puede usar preguntas que empiecen con:</p>

            <div style={{ marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#3b82f6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left', width: '20%' }}>Tipo</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>¿Qué?</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¿Qué es exactamente lo que te molesta del servicio actual?"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>¿Cómo?</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¿Cómo te está afectando esto en tu día a día?"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>¿Para qué?</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¿Para qué necesitas que esto cambie?"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>¿Cuándo?</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¿Cuándo empezaste a notar el problema?"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>¿Dónde?</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¿Dónde se manifiesta más el problema?"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">🎬 Rol del profesor (CLAVE)</h4>
              <p><strong>El profesor actúa como cliente difícil en una demo inicial</strong></p>
              <p style={{ marginTop: '0.8em' }}>
                Ejemplo de diálogo:
              </p>
              <div style={{ marginTop: '0.8em', padding: '1em', background: '#ffffff', borderRadius: '4px' }}>
                <p style={{ margin: 0 }}><strong>Profesor (como cliente):</strong> "No estoy contento con mi proveedor…"</p>
                <p style={{ margin: '0.8em 0 0 0' }}><strong>Alumno:</strong> "Tenemos un producto perfecto para usted..."</p>
                <p style={{ margin: '0.8em 0 0 0', color: '#dc2626', fontWeight: 'bold' }}>
                  <strong>Profesor:</strong> "Stop. ❌ Aún no conoces el problema."
                </p>
              </div>
            </div>

            <div className="divider" />

            <h4>Señales de éxito (qué debe descubrir el alumno)</h4>
            <ul className="checklist">
              <li><strong>Problema real:</strong> más allá del síntoma superficial</li>
              <li><strong>Emoción real:</strong> cómo le hace sentir el problema</li>
              <li><strong>Causa real:</strong> por qué ocurre</li>
              <li><strong>Impacto:</strong> qué consecuencias tiene</li>
              <li><strong>Expectativa:</strong> qué solución ideal busca</li>
            </ul>

            <div className="callout callout--example" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">💡 Ejemplo de progresión correcta</h4>
              <div style={{ padding: '1em', background: '#f9fafb', borderRadius: '4px', marginTop: '0.8em' }}>
                <p style={{ margin: 0 }}><strong>Queja superficial:</strong> "No estoy contento con mi proveedor"</p>
                <p style={{ margin: '0.8em 0 0 0' }}><strong>↓ Pregunta:</strong> "¿Qué es exactamente lo que no te está funcionando?"</p>
                <p style={{ margin: '0.8em 0 0 0' }}><strong>Respuesta:</strong> "Los plazos de entrega"</p>
                <p style={{ margin: '0.8em 0 0 0' }}><strong>↓ Pregunta:</strong> "¿Cómo te afecta eso?"</p>
                <p style={{ margin: '0.8em 0 0 0' }}><strong>Respuesta:</strong> "Pierdo clientes porque no puedo cumplir"</p>
                <p style={{ margin: '0.8em 0 0 0', fontWeight: 'bold', color: '#059669' }}><strong>✅ Necesidad raíz descubierta:</strong> Fiabilidad de entrega para no perder clientes</p>
              </div>
            </div>

            <div className="divider" />

            <h4>Frases que debe repetir el profesor durante la práctica</h4>
            <div style={{ padding: '1em', background: '#fef3c7', borderRadius: '4px', marginTop: '1em' }}>
              <ul style={{ marginLeft: '1.2em', marginBottom: 0 }}>
                <li>"<strong>Pregunta. No propongas.</strong>"</li>
                <li>"<strong>Descubre antes de vender.</strong>"</li>
                <li>"<strong>La necesidad real está 3 preguntas más allá.</strong>"</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>Preguntas para el debate final del bloque</h4>
            <div className="callout callout--activity">
              <ul>
                <li>¿Cuántas capas de información descubrimos cuando dejamos de intentar vender y empezamos a investigar?</li>
                <li>¿Fue difícil resistir la tentación de hablar del producto?</li>
                <li>¿Qué diferencia hay entre la queja inicial y la necesidad real?</li>
                <li>¿Cómo cambió la actitud del cliente cuando le hiciste las preguntas correctas?</li>
              </ul>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Cierre del bloque: "No vendéis productos. Descubrís problemas."
              </p>
            </div>
          </div>
        </details>

        {/* BLOQUE 3: SILLA CALIENTE */}
        <details className="topic-details">
          <summary>🔥 Bloque 3: Silla Caliente - Cliente difícil y técnica L.E.A.R. (60 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Gestión emocional bajo presión realista. El alumno debe aprender que <strong>una queja es una oportunidad de oro disfrazada de problema</strong>.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">🎯 Concepto clave</h4>
              <p>
                Si resuelves bien un conflicto, el cliente será más fiel que uno que nunca tuvo problemas.
              </p>
            </div>

            <div className="divider" />

            <h4>🎭 Dinámica central: "La Silla Caliente"</h4>

            <div style={{ padding: '1.2em', background: '#fecaca', borderRadius: '8px', marginTop: '1em', border: '2px solid #dc2626' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>⚠️ Advertencia importante</h4>
              <p style={{ margin: 0 }}>
                Este bloque genera <strong>tensión emocional real</strong>. El profesor debe controlar la intensidad 
                para que sea desafiante pero no traumático.
              </p>
            </div>

            <div style={{ padding: '1.2em', background: '#dbeafe', borderRadius: '8px', marginTop: '1.5em' }}>
              <h4 style={{ marginTop: 0 }}>Configuración de roles</h4>
              <ul style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li><strong>Cliente indignado:</strong> Alumno o profesor (recomendado: profesor en primera ronda)</li>
                <li><strong>Vendedor/Gestor:</strong> Alumno bajo evaluación</li>
                <li><strong>Observador:</strong> Tercer alumno que toma notas</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>📘 Técnica obligatoria: L.E.A.R.</h4>
            <p>El alumno DEBE aplicar esta estructura de 4 pasos:</p>

            <div style={{ marginTop: '1.5em' }}>
              <div style={{ padding: '1.2em', background: '#dcfce7', borderRadius: '8px', marginBottom: '1em', borderLeft: '4px solid #22c55e' }}>
                <h4 style={{ marginTop: 0, color: '#059669' }}>L - Listen (Escuchar)</h4>
                <p>Dejar que el cliente descargue toda su emoción sin interrumpir.</p>
                <p style={{ margin: '0.8em 0 0 0', fontStyle: 'italic' }}>
                  <strong>Frase modelo:</strong> "Entiendo lo que me comenta… cuénteme más"
                </p>
              </div>

              <div style={{ padding: '1.2em', background: '#dbeafe', borderRadius: '8px', marginBottom: '1em', borderLeft: '4px solid #3b82f6' }}>
                <h4 style={{ marginTop: 0, color: '#1e40af' }}>E - Empathize (Empatizar)</h4>
                <p>Validar la emoción ("Entiendo perfectamente por qué esto le causa molestia").</p>
                <p style={{ margin: '0.8em 0 0 0', fontStyle: 'italic' }}>
                  <strong>Frase modelo:</strong> "Es completamente comprensible que se sienta así"
                </p>
              </div>

              <div style={{ padding: '1.2em', background: '#fef3c7', borderRadius: '8px', marginBottom: '1em', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ marginTop: 0, color: '#ea580c' }}>A - Apologize (Disculparse)</h4>
                <p>Pedir disculpas por la situación, no necesariamente admitiendo culpabilidad personal, sino profesional.</p>
                <p style={{ margin: '0.8em 0 0 0', fontStyle: 'italic' }}>
                  <strong>Frase modelo:</strong> "Lamento sinceramente que haya tenido esta experiencia"
                </p>
              </div>

              <div style={{ padding: '1.2em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
                <h4 style={{ marginTop: 0, color: '#7c3aed' }}>R - Resolve (Resolver)</h4>
                <p>Proponer una solución concreta con plazo.</p>
                <p style={{ margin: '0.8em 0 0 0', fontStyle: 'italic' }}>
                  <strong>Frase modelo:</strong> "Lo que voy a hacer ahora mismo es… y tendrá respuesta en [plazo concreto]"
                </p>
              </div>
            </div>

            <div className="divider" />

            <h4>🎬 Progresión de intensidad (control del profesor)</h4>
            <p>El profesor debe subir progresivamente la intensidad del cliente:</p>

            <div style={{ marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#dc2626', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Nivel</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Comportamiento del cliente</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Frase típica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#fef3c7' }}>Fase 1: Molestia leve</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Expresa insatisfacción con tono controlado</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Esto no me parece normal"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#fed7aa' }}>Fase 2: Tono elevado</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Sube el volumen, muestra frustración clara</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Estoy muy molesto con esto"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', background: '#fecaca' }}>Fase 3: Agresividad verbal</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Grita, interrumpe, ataca verbalmente (sin insultos personales)</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"¡Esto es una vergüenza! ¡No sabéis trabajar!"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">🎬 Intervención crítica del profesor</h4>
              <p>Si el alumno se bloquea o comete un error crítico:</p>
              <ol style={{ marginLeft: '1.2em' }}>
                <li><strong>Detener la escena inmediatamente</strong></li>
                <li>Señalar el error específico</li>
                <li>Reiniciar con guía</li>
              </ol>
            </div>

            <div className="divider" />

            <h4>❌ Errores críticos a vigilar</h4>
            <div style={{ marginTop: '1em' }}>
              <div style={{ padding: '1em', background: '#fecaca', borderRadius: '4px', marginBottom: '1em' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#dc2626' }}>❌ Error 1: Defenderse demasiado pronto</p>
                <p style={{ margin: '0.5em 0 0 0' }}>
                  <em>Ejemplo:</em> "Pero nosotros enviamos el producto a tiempo..."
                </p>
                <p style={{ margin: '0.5em 0 0 0', color: '#7c2d12', fontWeight: 'bold' }}>
                  CORRECCIÓN: Primero escucha completa + empatía. Después explicación.
                </p>
              </div>

              <div style={{ padding: '1em', background: '#fedaca', borderRadius: '4px', marginBottom: '1em' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#ea580c' }}>❌ Error 2: Justificar empresa antes de empatizar</p>
                <p style={{ margin: '0.5em 0 0 0' }}>
                  <em>Ejemplo:</em> "Es la política de la empresa..."
                </p>
                <p style={{ margin: '0.5em 0 0 0', color: '#7c2d12', fontWeight: 'bold' }}>
                  CORRECCIÓN: Primero válida emoción, después explica límites.
                </p>
              </div>

              <div style={{ padding: '1em', background: '#fef3c7', borderRadius: '4px' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#ca8a04' }}>❌ Error 3: Tomar el ataque como personal</p>
                <p style={{ margin: '0.5em 0 0 0' }}>
                  <em>Señal:</em> El alumno se pone a la defensiva, eleva su tono
                </p>
                <p style={{ margin: '0.5em 0 0 0', color: '#7c2d12', fontWeight: 'bold' }}>
                  CORRECCIÓN: "La emoción del cliente no va contra ti. Va contra la situación."
                </p>
              </div>
            </div>

            <div className="divider" />

            <h4>🎯 Hoja de observación para el tercer alumno</h4>
            <div style={{ overflowX: 'auto', marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#3b82f6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '15%' }}>Sí (1)</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '15%' }}>No (0)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Dejó hablar al cliente sin interrumpir</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Empat izó antes de resolver</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Se disculpó de forma profesional</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Propuso solución concreta con plazo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Mantuvo la calma bajo presión</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>No se justificó prematuramente</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>___</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            <h4>Preguntas para el debate final del bloque</h4>
            <div className="callout callout--activity">
              <ul>
                <li>¿En qué punto de la cadena L.E.A.R. sueles fallar?</li>
                <li>¿Te defendiste demasiado pronto? ¿Por qué?</li>
                <li>¿Olvidaste la empatía en algún momento?</li>
                <li>¿Cómo te sentiste cuando el cliente gritaba?</li>
                <li>¿Qué cambió cuando aplicaste correctamente la técnica?</li>
              </ul>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Cierre del bloque: "La emoción del cliente no se discute, se gestiona."
              </p>
            </div>
          </div>
        </details>

        {/* BLOQUE 4: COREOGRAFÍA NO VERBAL */}
        <details className="topic-details">
          <summary>🕺 Bloque 4: Coreografía del Lenguaje No Verbal (30 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              El 93% de nuestra comunicación no son las palabras. El tono de voz y la postura corporal 
              dictan la confianza percibida.
            </p>

            <div className="callout callout--insight">
              <h4 className="callout-title">🎯 Concepto clave</h4>
              <p>
                "El cliente puede olvidar lo que dijiste, pero nunca olvidará cómo le hiciste sentir."
              </p>
            </div>

            <div className="divider" />

            <h4>🎭 Dinámica 1: "Adivina la emoción"</h4>

            <div style={{ padding: '1.2em', background: '#dbeafe', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Instrucciones</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li>Grupos de tres: Actor, Cliente, Observador</li>
                <li>El Actor recibe una tarjeta con una emoción (cerrado, abierto, desinteresado, entusiasta)</li>
                <li>Debe actuar una situación de venta SOLO con lenguaje corporal y tono de voz (sin palabras específicas)</li>
                <li>Los otros deben adivinar la emoción</li>
                <li>Rotación cada 3-4 minutos</li>
              </ol>
            </div>

            <h4 style={{ marginTop: '1.5em' }}>Emociones para trabajar</h4>
            <ul className="checklist">
              <li>🚪 <strong>Cerrado:</strong> Brazos cruzados, mirada evitativa, tono frío</li>
              <li>🤗 <strong>Abierto:</strong> Palmas visibles, contacto visual, sonrisa natural</li>
              <li>😐 <strong>Desinteresado:</strong> Postura encorvada, mirada distraída, tono monótono</li>
              <li>🌟 <strong>Entusiasta:</strong> Gestos amplios, voz animada, inclinación hacia adelante</li>
            </ul>

            <div className="divider" />

            <h4>🎭 Dinámica 2: "El Espejo Sutil" (Rapport avanzado)</h4>

            <div style={{ padding: '1.2em', background: '#dcfce7', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Técnica: Acompasamiento y Liderazgo</h4>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li>El cliente adopta una postura y ritmo de voz específico (lento y calmado, o rápido y ansioso)</li>
                <li>El vendedor debe "mimetizar" sutilmente el ritmo del cliente para generar confianza</li>
                <li><strong>Clave:</strong> Sin que parezca una burla o imitación obvia</li>
                <li>Una vez establecido el rapport, el vendedor lleva gradualmente al cliente hacia la calma</li>
              </ol>
            </div>

            <h4 style={{ marginTop: '1.5em' }}>Elementos no verbales a trabajar</h4>
            <div style={{ marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#8b5cf6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Elemento</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Cómo trabajarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Sonrisa telefónica</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Se nota en la voz. Práctica: hablar por teléfono sonriendo vs. sin sonreír</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Contacto visual</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Ni demasiado (intimida) ni muy poco (desconfianza). Regla: 60-70% del tiempo</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Postura abierta</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Brazos sin cruzar, palmas visibles, inclinación leve hacia adelante</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Tono de voz</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Calmado pero seguro. Evitar tono agudo (ansiedad) o muy grave (agresividad)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Ritmo</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Adaptar al cliente: si habla rápido, acelerar ligeramente; si lento, calmar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">⚠️ Errores no verbales comunes</h4>
              <ul className="checklist">
                <li>❌ Brazos cruzados (actitud defensiva)</li>
                <li>❌ Mirar el móvil o reloj constantemente</li>
                <li>❌ Invadir espacio personal (menos de 50cm)</li>
                <li>❌ Gestos bruscos o señalar con el dedo</li>
                <li>❌ Tono monótono (aburrimiento)</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>Ejercicio de autoevaluación</h4>
            <div className="callout callout--activity">
              <p><strong>Instrucción:</strong> Grábate en video (30 segundos) simulando atención al cliente.</p>
              <p><strong>Observa:</strong></p>
              <ul style={{ marginLeft: '1.2em' }}>
                <li>¿Mantienes contacto visual natural?</li>
                <li>¿Tu postura es abierta o cerrada?</li>
                <li>¿Sonríes de forma genuina?</li>
                <li>¿Tu tono de voz transmite seguridad?</li>
                <li>¿Tus gestos acompañan o distraen?</li>
              </ul>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Cierre del bloque: "Tu cuerpo habla antes que tu boca. Asegúrate de que dicen lo mismo."
              </p>
            </div>
          </div>
        </details>

        {/* SIMULACIÓN FINAL */}
        <details className="topic-details">
          <summary>🎯 Simulación Final Integrada (40 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Integración total de todas las habilidades trabajadas en una situación compleja de cliente crítico.
            </p>

            <div style={{ padding: '1.2em', background: '#fecaca', borderRadius: '8px', marginTop: '1em', border: '2px solid #dc2626' }}>
              <h4 style={{ marginTop: 0, color: '#dc2626' }}>🔥 Nivel máximo de dificultad</h4>
              <p style={{ margin: 0 }}>
                Esta es la prueba final. El alumno se enfrenta a un <strong>cliente caso límite</strong> que combina 
                múltiples desafíos simultáneos.
              </p>
            </div>

            <div className="divider" />

            <h4>🎭 Escenario: Cliente en situación crítica</h4>

            <div style={{ padding: '1.2em', background: '#fef3c7', borderRadius: '8px', marginTop: '1em' }}>
              <h4 style={{ marginTop: 0 }}>Características del cliente</h4>
              <ul className="checklist">
                <li>Problema real grave (retraso significativo / error importante)</li>
                <li>Alta carga emocional (enfado + frustración)</li>
                <li>Queja emocional ("Siempre me pasa lo mismo")</li>
                <li>Decisión de abandono activa ("Me voy a cambiar de proveedor")</li>
                <li>Presión de tiempo ("Necesito solución ya")</li>
              </ul>
            </div>

            <h4 style={{ marginTop: '1.5em' }}>El alumno debe aplicar:</h4>
            <div style={{ marginTop: '1em' }}>
              <ol style={{ marginLeft: '1.2em', lineHeight: '2' }}>
                <li><strong>✅ Escucha activa:</strong> Dejar descargar sin interrumpir</li>
                <li><strong>✅ Empatía estratégica:</strong> Validar emoción sin perder control</li>
                <li><strong>✅ Técnica L.E.A.R.:</strong> Escuchar → Empatizar → Disculparse → Resolver</li>
                <li><strong>✅ Detección de necesidad real:</strong> Más allá de la queja superficial</li>
                <li><strong>✅ Lenguaje positivo:</strong> Reformular en opciones, no límites</li>
                <li><strong>✅ Negociación:</strong> Proponer alternativas viables</li>
                <li><strong>✅ Comunicación no verbal:</strong> Postura, tono, contacto visual</li>
                <li><strong>✅ Cierre profesional:</strong> Confirmación + seguimiento</li>
              </ol>
            </div>

            <div className="callout callout--warning" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">🎬 Rol del profesor como director</h4>
              <p><strong>Durante la simulación:</strong></p>
              <ul className="checklist">
                <li>NO interviene (deja fluir la escena completa)</li>
                <li>Solo observa y toma notas</li>
                <li>Aumenta dificultad si el alumno lo gestiona bien</li>
                <li>NO rescata al alumno (es parte del aprendizaje)</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>📊 Rúbrica de evaluación final</h4>
            <div style={{ overflowX: 'auto', marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr style={{ background: '#7c3aed', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '18%' }}>No (1)</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '18%' }}>Parcial (2-3)</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '18%' }}>Sí (4-5)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Comunicación</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>Bloqueado</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Funcional</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Natural y fluida</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Control emocional</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>Se defiende/bloquea</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Mantiene cierta calma</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Calma total</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Técnica aplicada</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>No usa estructura</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Usa parcialmente</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Domina L.E.A.R.</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold' }}>Resolución</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fee2e2' }}>No resuelve</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#fef3c7' }}>Solución básica</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center', background: '#d1fae5' }}>Solución + plazo + seguimiento</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            <h4>Ejemplo de caso límite para la simulación</h4>
            <div className="callout callout--example">
              <h4 className="callout-title">📋 Cliente: María (cliente habitual)</h4>
              <div style={{ padding: '1em', background: '#ffffff', borderRadius: '4px', marginTop: '0.8em' }}>
                <p><strong>Contexto:</strong></p>
                <ul style={{ marginLeft: '1.2em' }}>
                  <li>Esperaba un pedido urgente hace 5 días</li>
                  <li>Ha llamado 3 veces sin respuesta clara</li>
                  <li>Necesita el producto para mañana (evento importante)</li>
                  <li>Está considerando cambiar de proveedor</li>
                  <li>Muy frustrada y molesta</li>
                </ul>
                <p style={{ marginTop: '1em' }}><strong>Primeras frases del cliente:</strong></p>
                <p style={{ fontStyle: 'italic', color: '#7c2d12' }}>
                  "¡Esto es increíble! Llevo cinco días esperando y nadie me da una respuesta clara. 
                  He llamado tres veces y siempre me dicen 'lo miramos'. El evento es mañana y NO tengo el producto. 
                  Esto es inaceptable en todos los niveles. ¿Sabéis lo que significa un compromiso?"
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#ede9fe', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                🎯 Objetivo: Resolver la situación manteniendo al cliente y demostrando profesionalidad total.
              </p>
            </div>
          </div>
        </details>

        {/* DEBRIEFING FINAL */}
        <details className="topic-details">
          <summary>🎓 Debriefing: Reflexión y cierre (15 min)</summary>
          <div className="topic-details__content">
            <h4>Objetivo didáctico</h4>
            <p>
              Consolidación cognitiva y compromiso de mejora. Este es el momento más importante del taller: 
              convertir la experiencia en aprendizaje consciente.
            </p>

            <div className="divider" />

            <h4>🎯 Círculo de cierre (metodología)</h4>
            <p>
              El profesor forma un círculo con todos los alumnos. Cada uno comparte brevemente (1-2 minutos máximo).
            </p>

            <h4>Preguntas guía del profesor</h4>
            <div style={{ marginTop: '1em' }}>
              <ol style={{ marginLeft: '1.2em', lineHeight: '2' }}>
                <li><strong>¿Qué fue lo más difícil de controlar?</strong><br/>
                  <em>(Identificar puntos débiles personales)</em>
                </li>
                <li><strong>¿En qué momento cambió la conversación?</strong><br/>
                  <em>(Reconocer el punto de inflexión)</em>
                </li>
                <li><strong>¿Qué harás diferente mañana en tu trabajo?</strong><br/>
                  <em>(Compromiso de acción concreta)</em>
                </li>
                <li><strong>¿Qué habilidad necesitas seguir entrenando?</strong><br/>
                  <em>(Autodiagnóstico)</em>
                </li>
              </ol>
            </div>

            <div className="callout callout--insight" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">💡 Clave pedagógica</h4>
              <p>
                NO permitir respuestas genéricas del tipo "todo bien" o "lo haré mejor". 
                Exigir <strong>respuestas concretas y específicas</strong>.
              </p>
            </div>

            <div className="divider" />

            <h4>Transformación esperada</h4>
            <p>El alumno debe salir con este cambio de mentalidad:</p>

            <div style={{ marginTop: '1.5em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#8b5cf6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>ANTES del taller</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>DESPUÉS del taller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Quiero resolver rápido"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', color: '#059669' }}>"Primero entiendo, luego resuelvo"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"El cliente está equivocado"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', color: '#059669' }}>"El cliente tiene una emoción válida"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Vendo productos"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', color: '#059669' }}>"Resuelvo problemas"</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Cuando gritan, me defiendo"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', color: '#059669' }}>"Cuando gritan, gestiono emoción"</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>"Atención al cliente = ser amable"</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', fontWeight: 'bold', color: '#059669' }}>"Atención al cliente = gestión humana profesional"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            <h4>🎯 Cierre emocional del docente  (CRUCIAL)</h4>
            <div style={{ padding: '1.5em', background: '#fef3c7', borderRadius: '8px', marginTop: '1.5em', border: '2px solid #f59e0b' }}>
              <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', textAlign: 'center', color: '#7c2d12' }}>
                "Hoy no habéis practicado ventas. Habéis practicado gestión humana."
              </p>
              <p style={{ margin: '1em 0 0 0', textAlign: 'center', fontStyle: 'italic' }}>
                "La perfección intimida. La ayuda genuina conecta."
              </p>
            </div>

            <div className="divider" />

            <h4>Plan de acción personal (tarea post-taller)</h4>
            <div className="callout callout--activity">
              <h4 className="callout-title">📝 Compromiso individual</h4>
              <p>Cada alumno completa:</p>
              <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
                <li><strong>Habilidad que más necesito mejorar:</strong> ___________________</li>
                <li><strong>Situación en la que fallaré si no cambio:</strong> ___________________</li>
                <li><strong>Acción concreta que haré esta semana:</strong> ___________________</li>
                <li><strong>¿Cómo sabré que he mejorado?:</strong> ___________________</li>
              </ol>
            </div>

            <div className="callout callout--insight" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">💬 Cita final (Maya Angelou)</h4>
              <p style={{ fontSize: '1.1em', fontStyle: 'italic', textAlign: 'center' }}>
                "En la atención al cliente, la gente olvidará lo que dijiste, incluso olvidará lo que hiciste, 
                pero nunca olvidará cómo los hiciste sentir."
              </p>
            </div>
          </div>
        </details>

        {/* MATERIALES COMPLEMENTARIOS */}
        <details className="topic-details">
          <summary>📚 Materiales complementarios para el docente</summary>
          <div className="topic-details__content">
            <h4>🃏 Baraja de clientes (20 perfiles)</h4>
            <p>
              Fichas imprimibles con perfiles de clientes para role play. Cada ficha incluye: 
              tipo de cliente, características clave, frases típicas y habilidad requerida del gestor.
            </p>

            <div style={{ marginTop: '1em' }}>
              <h4>Categorías de clientes</h4>
              <ul className="checklist">
                <li><strong>🟢 Nivel 1 - Cliente básico (5 perfiles):</strong> Indeciso, Informativo, Silencioso, Comparador, Frío</li>
                <li><strong>🟡 Nivel 2 - Cliente intermedio (5 perfiles):</strong> Exigente, Inseguro, Impaciente, Escéptico, Impulsivo</li>
                <li><strong>🔴 Nivel 3 - Cliente difícil (5 perfiles):</strong> Enfadado, Frustrado, Agresivo, Desconfiado extremo, Manipulador</li>
                <li><strong>⚫ Nivel 4 - Cliente avanzado (5 perfiles):</strong> Negociador duro, Crítico experto, Indeciso crónico, Emocional mixto, Caso límite</li>
              </ul>
            </div>

            <div className="divider" />

            <h4>📋 Hoja de ruta del gestor (guía de bolsillo)</h4>
            <p>Protocolo operativo en 7 fases:</p>
            <ol style={{ marginLeft: '1.2em', lineHeight: '1.8' }}>
              <li>FASE 1: Identificación del cliente (menos de 60 segundos)</li>
              <li>FASE 2: Apertura y control de tono</li>
              <li>FASE 3: Exploración (descubrimiento de necesidades)</li>
              <li>FASE 4: Conexión emocional (empatía estratégica)</li>
              <li>FASE 5: Solución (resolución operativa)</li>
              <li>FASE 6: Negociación (si aplica)</li>
              <li>FASE 7: Cierre profesional</li>
            </ol>

            <div className="divider" />

            <h4>🎯 Sistema de evaluación por competencias</h4>
            <p>Criterios evaluables en el taller:</p>

            <div style={{ overflowX: 'auto', marginTop: '1em' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#3b82f6', color: 'white' }}>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'left' }}>Competencia</th>
                    <th style={{ padding: '1em', border: '1px solid #ddd', textAlign: 'center', width: '15%' }}>Peso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Escucha activa</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>20%</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Empatía estratégica</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>20%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Control emocional</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>20%</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Técnica aplicada (L.E.A.R.)</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>15%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Comunicación no verbal</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>10%</td>
                  </tr>
                  <tr style={{ background: '#f9fafb' }}>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd' }}>Resolución efectiva</td>
                    <td style={{ padding: '0.8em', border: '1px solid #ddd', textAlign: 'center' }}>15%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="divider" />

            <h4>📖 Bibliografía recomendada</h4>
            <ul className="checklist">
              <li>"Never Split the Difference" - Chris Voss (negociación y empatía táctica)</li>
              <li>"Influence: The Psychology of Persuasion" - Robert Cialdini</li>
              <li>"The Like Switch" - Jack Schafer (FBI, técnicas de rapport)</li>
              <li>"Crucial Conversations" - Kerry Patterson</li>
              <li>"Emotional Intelligence 2.0" - Travis Bradberry</li>
            </ul>

            <div className="callout callout--tip" style={{ marginTop: '1.5em' }}>
              <h4 className="callout-title">💡 Consejo para el docente</h4>
              <p>
                Este taller funciona SOLO si el profesor:
              </p>
              <ul className="checklist">
                <li>Interrumpe cuando hay errores clave</li>
                <li>Obliga a repetir escenas si no se aplica la técnica</li>
                <li>No permite improvisación sin estructura</li>
                <li>Mantiene presión emocional controlada</li>
                <li>Corrige en el momento, no al final</li>
              </ul>
            </div>

            <div style={{ marginTop: '1.5em', padding: '1em', background: '#dcfce7', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                ✅ El taller ha funcionado si al final los alumnos: hablan menos y escuchan más, no intentan "vender rápido", 
                reformulan antes de responder, gestionan silencio sin incomodidad, y negocian en vez de imponer.
              </p>
            </div>
          </div>
        </details>

      </div>
    </TopicLayout>
  );
};

export default Tema21;
