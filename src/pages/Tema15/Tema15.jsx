import TopicLayout from "../../components/TopicLayout";

const Tema15 = () => {
  return (
    <TopicLayout
      numero="14"
      title="Protección de datos, seguridad y confidencialidad"
      intro="Este tema aborda las implicaciones del Reglamento General de Protección de Datos (RGPD) en el trabajo diario de atención al cliente y gestión posventa. Se profundiza en la licitud del tratamiento, la obtención del consentimiento, los derechos del interesado y las medidas técnicas y organizativas de seguridad para garantizar la confidencialidad, integridad y disponibilidad de la información."
    >
      {/* ============================= */}
      {/* SECCIÓN 1 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">1. Implicaciones del RGPD en atención al cliente</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>1.1. Qué regula el RGPD y por qué afecta a la atención al cliente</summary>
            <div className="topic-details__content">
              <p>
                El RGPD se aplica a cualquier tratamiento de <strong>datos personales</strong> realizado por una
                organización: recoger, almacenar, consultar, modificar, comunicar, suprimir, etc. En atención al
                cliente esto ocurre continuamente: altas de clientes, incidencias, tickets, envíos, facturación,
                garantías, encuestas, grabaciones de llamadas, chats y correos.
              </p>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧠 Enfoque práctico</h4>
                <p>
                  En atención al cliente, “cumplir RGPD” no es un trámite legal: es una forma de trabajar.
                  Significa <strong>pedir solo lo necesario</strong>, <strong>explicar por qué</strong>, <strong>proteger la información</strong> y
                  <strong>respetar los derechos</strong> de la persona.
                </p>
              </div>

              <h4>Principios que debes interiorizar</h4>
              <ul>
                <li><strong>Licitud, lealtad y transparencia:</strong> tratar datos con base jurídica y explicando el “para qué”.</li>
                <li><strong>Limitación de la finalidad:</strong> usar los datos solo para el objetivo informado.</li>
                <li><strong>Minimización:</strong> solicitar únicamente los datos imprescindibles.</li>
                <li><strong>Exactitud:</strong> mantener datos actualizados (evitar errores que perjudiquen al cliente).</li>
                <li><strong>Limitación del plazo de conservación:</strong> no guardar “por si acaso”.</li>
                <li><strong>Integridad y confidencialidad:</strong> proteger frente a accesos no autorizados y pérdidas.</li>
                <li><strong>Responsabilidad proactiva:</strong> poder demostrar que cumples (registros, protocolos, evidencias).</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Ejemplo típico</h4>
                <p>
                  Si una persona llama para una incidencia, no puedes pedir “todos sus datos” por costumbre.
                  Debes verificar identidad con un criterio proporcional (por ejemplo, número de pedido + dato
                  de verificación) y registrar solo lo necesario para resolver el caso.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>1.2. Roles: responsable, encargado y personal autorizado</summary>
            <div className="topic-details__content">
              <p>
                Entender los roles evita errores frecuentes (y graves). En la práctica:
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Rol</th>
                    <th>Qué significa</th>
                    <th>Ejemplo en atención al cliente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Responsable del tratamiento</strong></td>
                    <td>Decide fines y medios del tratamiento.</td>
                    <td>La empresa que presta el servicio y gestiona la base de clientes.</td>
                  </tr>
                  <tr>
                    <td><strong>Encargado del tratamiento</strong></td>
                    <td>Trata datos por cuenta del responsable.</td>
                    <td>Proveedor de CRM, call center externo, plataforma de tickets.</td>
                  </tr>
                  <tr>
                    <td><strong>Personal autorizado</strong></td>
                    <td>Empleados que acceden a datos por su función.</td>
                    <td>Agentes que gestionan incidencias o devoluciones.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Error frecuente</h4>
                <p>
                  Compartir datos con un proveedor “sin contrato” o sin cláusulas de encargo (o con accesos
                  sin control) suele ser un incumplimiento serio. La seguridad empieza por el control de
                  <strong>quién</strong> accede y <strong>por qué</strong>.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 2 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">2. Tratamiento de datos personales y bases de legitimación</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>2.1. Qué es un dato personal y qué operaciones son “tratamiento”</summary>
            <div className="topic-details__content">
              <p>
                Un dato personal es cualquier información que identifica o puede identificar a una persona:
                nombre, teléfono, email, dirección, DNI, IP, grabación de voz, historial de compras,
                reclamaciones, preferencias, etc.
              </p>

              <h4>Tratamiento (en la operativa real)</h4>
              <ul>
                <li>Registrar un ticket en CRM, adjuntar documentos o capturas.</li>
                <li>Enviar un correo de seguimiento posventa.</li>
                <li>Verificar identidad antes de facilitar información de un pedido.</li>
                <li>Derivar una incidencia a logística, taller o proveedor.</li>
                <li>Grabar una llamada y almacenarla para “calidad” o “prueba”.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Regla de oro</h4>
                <p>
                  Si estás manipulando información de una persona para un fin empresarial,
                  estás realizando tratamiento y debes aplicar principios y garantías.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>2.2. Bases jurídicas (cuándo es lícito tratar datos)</summary>
            <div className="topic-details__content">
              <p>
                No todo se basa en “consentimiento”. En atención al cliente, las bases más habituales son:
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Base jurídica</th>
                    <th>Cuándo aplica</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Ejecución de contrato</strong></td>
                    <td>Necesario para prestar el servicio o gestionar la compra.</td>
                    <td>Gestión de pedido, entrega, garantía, incidencias.</td>
                  </tr>
                  <tr>
                    <td><strong>Obligación legal</strong></td>
                    <td>Una norma obliga a conservar o comunicar datos.</td>
                    <td>Facturación, contabilidad, consumo, fiscalidad.</td>
                  </tr>
                  <tr>
                    <td><strong>Interés legítimo</strong></td>
                    <td>Interés real del responsable, equilibrado con derechos del cliente.</td>
                    <td>Prevención del fraude, seguridad del sistema, mejoras internas justificadas.</td>
                  </tr>
                  <tr>
                    <td><strong>Consentimiento</strong></td>
                    <td>Cuando la persona decide libremente y de forma informada.</td>
                    <td>Marketing no esencial, cookies no técnicas, comunicaciones promocionales.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Atención</h4>
                <p>
                  Elegir mal la base jurídica es un problema estructural: si lo que haces es “necesario para el contrato”,
                  no deberías “pedir consentimiento” para cubrirte. Y si es marketing, no lo disfraces como “necesario”.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 3 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">3. Obtención del consentimiento</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>3.1. Requisitos del consentimiento válido</summary>
            <div className="topic-details__content">
              <p>
                El consentimiento debe ser una <strong>acción afirmativa clara</strong>. No vale el silencio,
                la inacción ni casillas premarcadas. Debe ser:
              </p>

              <ul className="checklist">
                <li><strong>Libre:</strong> sin coacción ni condicionamiento injustificado.</li>
                <li><strong>Específico:</strong> para finalidades concretas (no “todo en uno”).</li>
                <li><strong>Informado:</strong> la persona entiende quién trata, para qué y sus derechos.</li>
                <li><strong>Inequívoco:</strong> se expresa mediante una acción clara.</li>
                <li><strong>Revocable:</strong> tan fácil retirarlo como darlo.</li>
              </ul>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Buen diseño</h4>
                <p>
                  Consentimiento = claridad + granularidad + trazabilidad.
                  Si no puedes demostrar “cuándo y cómo” se otorgó, estás en riesgo.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>3.2. Cómo pedir consentimiento en canales habituales</summary>
            <div className="topic-details__content">
              <h4>Web / formularios</h4>
              <ul>
                <li>Casillas <strong>desmarcadas por defecto</strong> para fines no esenciales.</li>
                <li>Texto simple: quién es el responsable, finalidades, base, conservación, derechos.</li>
                <li>Prueba: guardar logs de aceptación, versión del texto legal y timestamp.</li>
              </ul>

              <h4>Teléfono</h4>
              <ul>
                <li>Explicar en lenguaje claro el fin y registrar la aceptación.</li>
                <li>Si hay grabación, informar de la grabación y su finalidad.</li>
                <li>Evitar “consentimiento por presión” (p. ej., “si no aceptas no te atiendo”).</li>
              </ul>

              <h4>Email / campañas</h4>
              <ul>
                <li>Consentimiento previo para comunicaciones promocionales (si aplica).</li>
                <li>Enlace visible para <strong>darse de baja</strong> y efecto real inmediato.</li>
              </ul>

              <div className="callout callout--warning">
                <h4 className="callout-title">🚫 Lo que NO vale</h4>
                <p>
                  “Si no dices nada entendemos que aceptas”, “casilla ya marcada”, “continuar navegando es consentir”
                  (sin un sistema válido de elección), o mezclar consentimiento con condiciones del servicio cuando
                  no es imprescindible.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 4 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">4. Derechos del interesado y gestión en atención al cliente</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>4.1. Derechos principales</summary>
            <div className="topic-details__content">
              <p>
                El RGPD reconoce derechos que permiten a la persona controlar sus datos. En atención al cliente,
                estos derechos se materializan en solicitudes concretas que deben gestionarse con procedimiento,
                plazos y evidencias.
              </p>

              <table className="table">
                <thead>
                  <tr>
                    <th>Derecho</th>
                    <th>Qué permite</th>
                    <th>Ejemplo de solicitud</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Acceso</strong></td>
                    <td>Conocer si se tratan sus datos y obtener copia/información.</td>
                    <td>“Quiero saber qué datos tenéis sobre mí y por qué.”</td>
                  </tr>
                  <tr>
                    <td><strong>Rectificación</strong></td>
                    <td>Corregir datos inexactos.</td>
                    <td>“Mi dirección está mal, actualizadla.”</td>
                  </tr>
                  <tr>
                    <td><strong>Supresión</strong> (“olvido”)</td>
                    <td>Eliminar datos cuando proceda.</td>
                    <td>“Borrad mi cuenta y mis datos.”</td>
                  </tr>
                  <tr>
                    <td><strong>Limitación</strong></td>
                    <td>Restringir el tratamiento temporalmente.</td>
                    <td>“No los borréis aún, pero no los uséis mientras se revisa.”</td>
                  </tr>
                  <tr>
                    <td><strong>Portabilidad</strong></td>
                    <td>Recibir datos en formato estructurado y transferirlos.</td>
                    <td>“Enviadme mi historial en un formato reutilizable.”</td>
                  </tr>
                  <tr>
                    <td><strong>Oposición</strong></td>
                    <td>Oponerse a tratamientos basados en interés legítimo o marketing.</td>
                    <td>“No quiero que uséis mis datos para perfiles/ofertas.”</td>
                  </tr>
                  <tr>
                    <td><strong>Decisiones automatizadas</strong></td>
                    <td>No ser objeto de decisiones basadas solo en automatización, en ciertos casos.</td>
                    <td>“Quiero revisión humana de esta denegación automática.”</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details className="topic-details">
            <summary>4.2. Protocolo operativo para gestionar solicitudes (paso a paso)</summary>
            <div className="topic-details__content">
              <ol>
                <li><strong>Recepción:</strong> registrar la solicitud (canal, fecha, identidad).</li>
                <li><strong>Verificación:</strong> confirmar identidad de forma proporcional (sin exceso).</li>
                <li><strong>Clasificación:</strong> identificar el derecho ejercido y el alcance real.</li>
                <li><strong>Gestión interna:</strong> localizar datos (CRM, email, tickets, grabaciones, backups según política).</li>
                <li><strong>Respuesta:</strong> clara, comprensible, sin tecnicismos, y dentro de plazo.</li>
                <li><strong>Evidencia:</strong> dejar trazabilidad del proceso (para demostrar cumplimiento).</li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">🧩 Transparencia</h4>
                <p>
                  La información y respuestas sobre derechos deben facilitarse de manera accesible y comprensible.
                  Un buen servicio de atención al cliente convierte el cumplimiento en confianza.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 5 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">5. Medidas de seguridad de la información</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>5.1. Enfoque basado en riesgos y objetivo de la seguridad</summary>
            <div className="topic-details__content">
              <p>
                La seguridad en RGPD se basa en el <strong>riesgo</strong>. No todas las organizaciones necesitan lo mismo,
                pero todas deben aplicar medidas apropiadas para asegurar un nivel de seguridad adecuado:
                <strong>confidencialidad</strong>, <strong>integridad</strong>, <strong>disponibilidad</strong> y <strong>resiliencia</strong>.
              </p>

              <div className="callout callout--example">
                <h4 className="callout-title">🎯 Traducción al día a día</h4>
                <p>
                  Confidencialidad: que nadie “no autorizado” vea datos. Integridad: que no se alteren sin control.
                  Disponibilidad: que el servicio no se caiga y pierdas información. Resiliencia: poder recuperar
                  y seguir operando ante incidentes.
                </p>
              </div>

              <h4>Buenas prácticas mínimas (siempre)</h4>
              <ul className="checklist">
                <li>Control de accesos por rol (cada persona, lo mínimo necesario).</li>
                <li>Contraseñas robustas + MFA (doble factor) cuando sea posible.</li>
                <li>Bloqueo de pantalla y política de escritorio limpio.</li>
                <li>Formación: phishing, ingeniería social, manejo de documentación.</li>
                <li>Backups y restauración probada (no solo “tener copia”).</li>
              </ul>
            </div>
          </details>

          <details className="topic-details">
            <summary>5.2. Medidas técnicas y organizativas (catálogo práctico)</summary>
            <div className="topic-details__content">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Medida</th>
                    <th>Aplicación real</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Técnica</strong></td>
                    <td>Cifrado / seudonimización</td>
                    <td>Datos sensibles en reposo y en tránsito (HTTPS, discos cifrados).</td>
                  </tr>
                  <tr>
                    <td><strong>Técnica</strong></td>
                    <td>Registro de accesos (logs)</td>
                    <td>Saber quién consultó/modificó un expediente y cuándo.</td>
                  </tr>
                  <tr>
                    <td><strong>Técnica</strong></td>
                    <td>Gestión de vulnerabilidades</td>
                    <td>Actualizaciones, parches, antivirus/EDR, revisiones periódicas.</td>
                  </tr>
                  <tr>
                    <td><strong>Organizativa</strong></td>
                    <td>Políticas y procedimientos</td>
                    <td>Protocolos de atención, de brechas, de conservación y borrado.</td>
                  </tr>
                  <tr>
                    <td><strong>Organizativa</strong></td>
                    <td>Formación y confidencialidad</td>
                    <td>Acuerdos, recordatorios, evaluación de buenas prácticas.</td>
                  </tr>
                  <tr>
                    <td><strong>Organizativa</strong></td>
                    <td>Gestión de proveedores</td>
                    <td>Contratos de encargo, auditorías, control de subencargados.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout callout--warning">
                <h4 className="callout-title">⚠️ Punto crítico en atención al cliente</h4>
                <p>
                  El mayor riesgo suele ser humano: prisas, exceso de confianza, “reenvíos” incorrectos,
                  documentación adjunta en tickets, pantallas visibles, y verificación deficiente de identidad.
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>5.3. Brechas de seguridad: qué hacer si ocurre un incidente</summary>
            <div className="topic-details__content">
              <p>
                Una brecha de seguridad puede ser: acceso indebido, pérdida de dispositivos, filtración,
                ransomware, envío erróneo de datos a otra persona, publicación accidental, etc.
              </p>

              <h4>Protocolo básico (en lenguaje operativo)</h4>
              <ol>
                <li><strong>Contener:</strong> frenar el daño (revocar accesos, bloquear cuenta, aislar equipo).</li>
                <li><strong>Evaluar:</strong> qué datos, cuántas personas, gravedad y probabilidad de impacto.</li>
                <li><strong>Documentar:</strong> registrar hechos, tiempos y medidas.</li>
                <li><strong>Notificar internamente:</strong> responsables / DPO si existe.</li>
                <li><strong>Comunicar:</strong> si procede, a autoridad y/o interesados según riesgo.</li>
                <li><strong>Mejorar:</strong> corregir causa raíz y prevenir repetición.</li>
              </ol>

              <div className="callout callout--tip">
                <h4 className="callout-title">✅ Cultura de seguridad</h4>
                <p>
                  Una organización madura no “oculta” incidentes: aprende de ellos. La transparencia interna,
                  el registro y la mejora continua son parte del cumplimiento.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* SECCIÓN 6 */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">6. Confidencialidad: ética profesional y buenas prácticas</h2>

        <div className="topic-accordion">
          <details className="topic-details">
            <summary>6.1. Confidencialidad en la comunicación con clientes</summary>
            <div className="topic-details__content">
              <p>
                La confidencialidad exige que la información del cliente se trate con discreción,
                respeto y control. No se limita a “no contar”: incluye evitar exposiciones accidentales
                y comunicaciones inapropiadas.
              </p>

              <ul className="checklist">
                <li>No facilitar información de un pedido si la identidad no está verificada.</li>
                <li>No enviar datos por canales inseguros si existe alternativa.</li>
                <li>No adjuntar documentos innecesarios en tickets.</li>
                <li>Evitar pantallas visibles al público o a terceros.</li>
                <li>Usar BCC/CC con criterio en emails masivos.</li>
              </ul>

              <div className="callout callout--example">
                <h4 className="callout-title">📌 Caso típico</h4>
                <p>
                  Un agente envía por error la factura de un cliente a otro. No es “un fallo menor”:
                  es una brecha que debe registrarse, analizarse y corregirse con medidas (p. ej.,
                  doble verificación, plantillas, restricciones).
                </p>
              </div>
            </div>
          </details>

          <details className="topic-details">
            <summary>6.2. Checklist de “operativa segura” para el equipo</summary>
            <div className="topic-details__content">
              <p>Lista breve para estandarizar hábitos de protección:</p>
              <ul className="checklist">
                <li>Accedo al CRM solo desde dispositivos autorizados.</li>
                <li>Bloqueo pantalla al levantarme.</li>
                <li>Verifico identidad antes de revelar información.</li>
                <li>Registro lo imprescindible (minimización).</li>
                <li>Uso plantillas oficiales y evito improvisar textos sensibles.</li>
                <li>No comparto credenciales ni sesiones abiertas.</li>
                <li>Reporto emails sospechosos (phishing) y adjuntos extraños.</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ============================= */}
      {/* CIERRE */}
      {/* ============================= */}
      <section className="topic-section">
        <h2 className="topic-section__title">Conclusión</h2>
        <p>
          La protección de datos, la seguridad y la confidencialidad son inseparables de un servicio de atención al
          cliente excelente. Aplicar el RGPD implica trabajar con transparencia, tratar datos con base jurídica,
          pedir consentimiento correctamente cuando corresponda, atender derechos con procedimientos claros y
          desplegar medidas de seguridad proporcionales al riesgo. En la práctica, cumplir es proteger a la persona
          y fortalecer la confianza: un activo estratégico tan valioso como el producto.
        </p>
      </section>
    </TopicLayout>
  );
};

export default Tema15;