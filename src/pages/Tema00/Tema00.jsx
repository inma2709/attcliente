import TopicLayout from '../../components/TopicLayout';

const image = {
  src: '/t0.png',
  alt: 'Errores críticos en atención al cliente',
  caption: 'La atención al cliente: entre la tensión, la ética y la excelencia',
};

const errores = [
  {
    id: 1,
    titulo: 'No escuchar activamente',
    explicacion:
      'Ocurre cuando el profesional oye al cliente, pero no lo comprende realmente. Interrumpe, presupone o prepara la respuesta antes de que el cliente termine.',
    ejemplo: '“Sí, sí, ya sé lo que le pasa…”',
    consecuencia:
      'El cliente siente que tiene que defenderse o repetirlo todo. Aumenta la tensión.',
    correccion:
      'Escuchar, resumir y confirmar: “Entonces, si le he entendido bien, el problema es…”',
  },
  {
    id: 2,
    titulo: 'Culpabilizar al cliente',
    explicacion:
      'Consiste en trasladar la responsabilidad al cliente en lugar de ayudarle a resolver la situación.',
    ejemplo: '“Eso le pasa por no haber leído las condiciones.”',
    consecuencia:
      'Rompe la confianza y convierte una incidencia en un conflicto personal.',
    correccion:
      'Separar responsabilidad de solución: “Vamos a revisar qué ha ocurrido y qué opciones tenemos.”',
  },
  {
    id: 3,
    titulo: 'Prometer lo que no se puede cumplir',
    explicacion:
      'Se produce cuando se ofrece una solución, plazo o compensación sin confirmarlo antes.',
    ejemplo: '“Mañana lo tiene resuelto seguro.”',
    consecuencia:
      'Si no se cumple, el cliente acumula dos enfados: el problema inicial y la promesa rota.',
    correccion:
      'Prometer solo lo verificable: “Voy a comprobarlo y le confirmo un plazo realista.”',
  },
  {
    id: 4,
    titulo: 'Tratar al cliente de forma impersonal o robótica',
    explicacion:
      'Aparece cuando el profesional se limita a repetir frases estándar sin adaptarse al caso concreto.',
    ejemplo: '“Su solicitud está siendo procesada.”',
    consecuencia:
      'El cliente siente que habla con una máquina, no con una persona.',
    correccion:
      'Personalizar el trato: usar su nombre, reconocer su situación y adaptar el lenguaje.',
  },
  {
    id: 5,
    titulo: 'No documentar la interacción',
    explicacion:
      'Sucede cuando no se registra lo hablado, lo acordado o los pasos dados para resolver el caso.',
    ejemplo: 'El cliente llama de nuevo y nadie sabe qué se le dijo anteriormente.',
    consecuencia:
      'El cliente tiene que repetir su historia y percibe desorganización.',
    correccion:
      'Registrar datos clave: motivo, emoción del cliente, solución propuesta y próximos pasos.',
  },
  {
    id: 6,
    titulo: 'Responder emocionalmente ante la hostilidad',
    explicacion:
      'El profesional reacciona desde el enfado, la defensa o el orgullo cuando el cliente está alterado.',
    ejemplo: '“No me hable así, yo no tengo la culpa.”',
    consecuencia:
      'El conflicto escala y la conversación deja de centrarse en la solución.',
    correccion:
      'Mantener autocontrol: bajar el ritmo, validar la emoción y reconducir al problema.',
  },
  {
    id: 7,
    titulo: 'No ofrecer alternativas',
    explicacion:
      'Consiste en cerrar la conversación con una negativa sin explorar opciones posibles.',
    ejemplo: '“No se puede hacer nada.”',
    consecuencia:
      'El cliente percibe abandono, rigidez y falta de interés.',
    correccion:
      'Ofrecer opciones realistas: “No puedo hacer A, pero sí puedo ofrecerle B o C.”',
  },
  {
    id: 8,
    titulo: 'No hacer seguimiento',
    explicacion:
      'El caso se da por cerrado internamente, pero no se verifica si el cliente quedó satisfecho.',
    ejemplo: 'Se tramita la devolución, pero nadie confirma si el dinero llegó.',
    consecuencia:
      'Se pierde una oportunidad de recuperar confianza y fidelizar.',
    correccion:
      'Programar una comprobación: “Le escribiremos mañana para confirmar que todo quedó resuelto.”',
  },
  {
    id: 9,
    titulo: 'No reconocer el tiempo o molestia del cliente',
    explicacion:
      'El profesional responde como si la espera, el error o la repetición no hubieran afectado al cliente.',
    ejemplo: '“Tiene que esperar otra vez.”',
    consecuencia:
      'El cliente siente que su tiempo no importa.',
    correccion:
      'Reconocer el impacto: “Entiendo que esto le ha hecho perder tiempo. Vamos a agilizarlo.”',
  },
  {
    id: 10,
    titulo: 'Revelar información confidencial',
    explicacion:
      'Consiste en compartir datos personales, económicos, médicos, comerciales o privados sin autorización.',
    ejemplo: 'Comentar el caso de un cliente con otra persona que no participa en la gestión.',
    consecuencia:
      'Puede generar daño ético, legal y reputacional.',
    correccion:
      'Aplicar una regla simple: si no es necesario para resolver el caso, no se comparte.',
  },
  {
    id: 11,
    titulo: 'Confundir la emoción del cliente con el problema',
    explicacion:
      'El profesional se centra en el tono del cliente y deja de atender la causa de su malestar.',
    ejemplo: '“Como está usted enfadado, no voy a seguir ayudándole.”',
    consecuencia:
      'El cliente se siente rechazado justo cuando más necesita contención.',
    correccion:
      'Separar emoción y solución: “Entiendo que está molesto. Vamos a centrarnos en resolverlo.”',
  },
  {
    id: 12,
    titulo: 'Ignorar el feedback',
    explicacion:
      'Ocurre cuando las quejas, sugerencias o señales de insatisfacción no se analizan ni se usan para mejorar.',
    ejemplo: '“Siempre se ha hecho así.”',
    consecuencia:
      'Los mismos errores se repiten y la empresa no aprende.',
    correccion:
      'Convertir el feedback en mejora: registrar patrones, revisar procesos y proponer cambios.',
  },
];

export default function Tema00() {
  return (
    <TopicLayout
      numero="0"
      title="Errores Críticos en Atención al Cliente: Diagnóstico y Prevención"
      intro="En atención al cliente, los errores no deben entenderse solo como fallos individuales, sino como señales que permiten mejorar la comunicación, los procesos y la calidad del servicio. Este tema sirve como punto de partida para aprender a detectar, analizar y prevenir los errores más frecuentes antes de que dañen la relación con el cliente."
      image={image}
    >
      <section className="topic-section">
        <h2>1. Punto de partida: ¿por qué estudiar primero los errores?</h2>

        <p>
          Empezar por los errores tiene una ventaja didáctica: permite reconocer
          situaciones reales que cualquier profesional puede vivir bajo presión.
          La atención al cliente no se evalúa solo cuando todo va bien, sino
          especialmente cuando aparece una queja, una incidencia, una espera o un
          cliente molesto.
        </p>

        <p>
          Un error no convierte a nadie en mal profesional. Lo que define la
          profesionalidad es la capacidad para reconocerlo, corregirlo y evitar
          que se repita.
        </p>

        <div className="callout callout--tip">
          <strong>Idea clave:</strong> la culpa paraliza; la responsabilidad permite actuar.
          En este tema no buscamos culpables, sino patrones de mejora.
        </div>
      </section>

      <section className="topic-section">
        <h2>2. Actividad inicial: antes de estudiar los errores</h2>

        <p>
          Responde individualmente antes de continuar. Al final del tema volverás
          a estas preguntas para comprobar si tu criterio profesional ha cambiado.
        </p>

        <ol>
          <li>¿Qué error crees que es más fácil cometer cuando hay presión?</li>
          <li>¿Qué error te molestaría más si tú fueras el cliente?</li>
          <li>¿Qué diferencia hay entre cometer un error y actuar de forma poco profesional?</li>
          <li>¿Qué puede hacer una empresa para prevenir errores?</li>
          <li>¿Qué puede hacer cada trabajador para corregirse a tiempo?</li>
        </ol>
      </section>

      <section className="topic-section">
        <h2>3. Los 12 errores críticos en atención al cliente</h2>

        <p>
          Estos doce errores aparecen en muchos contextos profesionales:
          comercios, servicios, administración, sanidad, banca, hostelería,
          telecomunicaciones o atención telefónica. Todos tienen algo en común:
          dañan la confianza del cliente.
        </p>

        <div className="errors-grid">
          {errores.map((error) => (
            <article className="error-card" key={error.id}>
              <div className="error-num">{error.id}</div>
              <h3>{error.titulo}</h3>

              <p>
                <strong>Qué significa:</strong> {error.explicacion}
              </p>

              <p>
                <strong>Ejemplo:</strong> {error.ejemplo}
              </p>

              <p>
                <strong>Consecuencia:</strong> {error.consecuencia}
              </p>

              <p>
                <strong>Cómo corregirlo:</strong> {error.correccion}
              </p>
            </article>
          ))}
        </div>

        <div className="callout callout--warning">
          <strong>Patrón común:</strong> la mayoría de estos errores aparecen
          cuando faltan tres elementos: escucha, autocontrol y claridad operativa.
        </div>
      </section>

      <section className="topic-section">
        <h2>4. Explicación didáctica de los errores</h2>

        <h3>4.1 Errores de escucha</h3>
        <p>
          Incluyen no escuchar activamente, tratar al cliente de forma robótica
          o ignorar el feedback. En estos casos el cliente no se siente
          reconocido. Puede que el profesional esté haciendo tareas, pero no está
          generando una relación de confianza.
        </p>

        <h3>4.2 Errores de responsabilidad</h3>
        <p>
          Incluyen culpabilizar al cliente, prometer sin verificar, no documentar
          o no hacer seguimiento. Son errores especialmente graves porque el
          cliente percibe desorganización, falta de compromiso o ausencia de
          control.
        </p>

        <h3>4.3 Errores emocionales</h3>
        <p>
          Incluyen responder con hostilidad, confundir la emoción del cliente con
          el problema o no reconocer su tiempo. Estos errores suelen aparecer
          cuando el profesional se siente atacado y olvida que su función es
          reconducir la situación, no ganar una discusión.
        </p>

        <h3>4.4 Errores éticos</h3>
        <p>
          El más claro es revelar información confidencial. Este error no solo
          afecta al servicio, sino también a la confianza, la privacidad y la
          imagen de la empresa.
        </p>
      </section>

      <section className="topic-section">
        <h2>5. Cómo diagnosticar un error</h2>

        <p>
          Para corregir bien un error hay que saber de dónde viene. No basta con
          decir “lo hice mal”. Hay que identificar la causa.
        </p>

        <div className="diagnosis-matrix">
          <div className="diagnosis-level">
            <h3>Nivel personal</h3>
            <ul>
              <li>Falta de escucha activa.</li>
              <li>Impaciencia o cansancio.</li>
              <li>Dificultad para gestionar clientes enfadados.</li>
              <li>Desconocimiento del procedimiento.</li>
            </ul>
          </div>

          <div className="diagnosis-level">
            <h3>Nivel organizativo</h3>
            <ul>
              <li>Procesos poco claros.</li>
              <li>Falta de autoridad para resolver.</li>
              <li>Sistemas de registro deficientes.</li>
              <li>Exceso de presión por rapidez.</li>
            </ul>
          </div>

          <div className="diagnosis-level">
            <h3>Nivel comunicativo</h3>
            <ul>
              <li>Información interna incompleta.</li>
              <li>Mensajes contradictorios entre departamentos.</li>
              <li>Falta de coordinación.</li>
              <li>Cultura de ocultar errores por miedo al castigo.</li>
            </ul>
          </div>
        </div>

        <div className="callout callout--info">
          <strong>Pregunta útil:</strong> “¿Este error depende solo de mi conducta
          o también del sistema de trabajo que tengo alrededor?”
        </div>
      </section>

      <section className="topic-section">
        <h2>6. Cómo prevenir los errores</h2>

        <p>
          La prevención no consiste en trabajar con miedo, sino en trabajar con
          método. Un buen profesional no improvisa siempre: usa protocolos,
          confirma datos y deja constancia de lo importante.
        </p>

        <h3>6.1 Técnicas preventivas</h3>

        <ul>
          <li>
            <strong>Escuchar antes de responder:</strong> dejar terminar,
            resumir y confirmar.
          </li>
          <li>
            <strong>No prometer sin verificar:</strong> comprobar plazos,
            condiciones y autorizaciones.
          </li>
          <li>
            <strong>Registrar la interacción:</strong> anotar qué ocurre, qué se
            acuerda y cuál es el siguiente paso.
          </li>
          <li>
            <strong>Separar emoción y solución:</strong> validar el malestar sin
            entrar en confrontación.
          </li>
          <li>
            <strong>Hacer seguimiento:</strong> confirmar que la solución ha
            funcionado.
          </li>
          <li>
            <strong>Proteger la confidencialidad:</strong> compartir solo la
            información necesaria y con quien corresponda.
          </li>
        </ul>

        <h3>6.2 Frases profesionales útiles</h3>

        <ul>
          <li>“Entiendo la situación. Vamos a revisarla paso a paso.”</li>
          <li>“Antes de darle una respuesta, prefiero comprobarlo para no prometer algo incorrecto.”</li>
          <li>“Lamento la molestia. Vamos a ver qué opciones tenemos.”</li>
          <li>“Le resumo lo que hemos hablado para confirmar que lo he entendido bien.”</li>
          <li>“Voy a dejar registrado lo acordado para que no tenga que repetirlo.”</li>
        </ul>
      </section>

      <section className="topic-section">
        <h2>7. Caso práctico guiado</h2>

        <div className="case-study">
          <h3>Situación</h3>
          <p>
            Un cliente llama enfadado porque lleva una semana esperando una
            respuesta. El profesional no encuentra información en el sistema y
            responde: “Pues aquí no aparece nada, tendría que haber llamado
            antes”.
          </p>

          <h3>Errores presentes</h3>
          <ul>
            <li>Culpabilizar al cliente.</li>
            <li>No reconocer su tiempo.</li>
            <li>No documentar correctamente.</li>
            <li>Responder desde la defensa.</li>
          </ul>

          <h3>Respuesta corregida</h3>
          <p>
            “Entiendo su molestia si lleva una semana esperando. Voy a revisar
            ahora mismo qué ha pasado y, si no aparece registrado, dejaré la
            incidencia abierta con todos los datos para que no tenga que repetir
            esta información.”
          </p>

          <h3>Por qué es mejor</h3>
          <p>
            Reconoce la emoción, evita culpar, asume control profesional y ofrece
            un siguiente paso concreto.
          </p>
        </div>
      </section>

      <section className="topic-section">
        <h2>8. Actividades prácticas</h2>

        <h3>Actividad 1: Infografía individual</h3>
        <p>
          Crea una infografía titulada <strong>“Mis errores críticos en atención
          al cliente”</strong>. Debe incluir:
        </p>

        <ul>
          <li>Los tres errores que consideras más graves.</li>
          <li>Un ejemplo real o inventado de cada uno.</li>
          <li>La consecuencia para el cliente.</li>
          <li>Una frase profesional para corregir cada error.</li>
        </ul>

        <p>
          <strong>Entrega:</strong> PDF o imagen.  
          <strong> Tiempo recomendado:</strong> 45 minutos.
        </p>

        <h3>Actividad 2: Role-playing “Detecta el error”</h3>
        <p>
          Por parejas, representad una escena breve de atención al cliente donde
          aparezca uno de los doce errores. El resto del grupo debe identificar:
        </p>

        <ul>
          <li>Qué error se ha cometido.</li>
          <li>Qué frase o conducta lo demuestra.</li>
          <li>Cómo debería haberse respondido.</li>
        </ul>

        <p>
          <strong>Duración por pareja:</strong> 2-3 minutos.  
          <strong> Objetivo:</strong> aprender a reconocer errores en situaciones reales.
        </p>

        <h3>Actividad 3: Debate profesional</h3>
        <p>Debate en grupo una de estas preguntas:</p>

        <ul>
          <li>¿Debe castigarse siempre un error en atención al cliente?</li>
          <li>¿Qué errores son más graves: los técnicos, los emocionales o los éticos?</li>
          <li>¿Qué responsabilidad tiene la empresa cuando un trabajador atiende mal?</li>
          <li>¿Puede un error bien gestionado mejorar la relación con el cliente?</li>
        </ul>
      </section>

      <section className="topic-section">
        <h2>9. Autoevaluación final</h2>

        <p>
          Puntúa del 1 al 5 tu riesgo personal en cada bloque:
        </p>

        <ul>
          <li><strong>Escucha:</strong> ¿interrumpo, presupongo o respondo demasiado rápido?</li>
          <li><strong>Responsabilidad:</strong> ¿prometo, justifico o derivo demasiado?</li>
          <li><strong>Emoción:</strong> ¿me afecta demasiado el tono del cliente?</li>
          <li><strong>Organización:</strong> ¿registro y comunico bien lo acordado?</li>
          <li><strong>Ética:</strong> ¿protejo siempre la información del cliente?</li>
        </ul>

        <div className="callout callout--activity">
          <strong>Compromiso de mejora:</strong> elige un error que quieras reducir
          esta semana y escribe una acción concreta para prevenirlo.
        </div>
      </section>

      <section className="topic-section">
        <h2>10. Síntesis del tema</h2>

        <p>
          Los errores en atención al cliente no son solo fallos de comunicación:
          son puntos donde se rompe la confianza. Algunos errores dañan porque el
          cliente no se siente escuchado; otros porque percibe falta de
          responsabilidad, desorganización o poca empatía.
        </p>

        <p>
          La excelencia profesional no consiste en no equivocarse nunca, sino en
          detectar rápido el error, reparar el daño y modificar la forma de
          trabajar para que no se repita.
        </p>

        <div className="callout callout--tip">
          <strong>Idea final:</strong> un buen profesional no se define por la
          ausencia de errores, sino por la calidad de su respuesta cuando algo
          falla.
        </div>
      </section>
    </TopicLayout>
  );
}