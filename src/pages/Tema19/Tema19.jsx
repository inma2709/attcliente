import TopicLayout from '../../components/TopicLayout';

const image = {
  src: '/negociacion.png',
  alt: 'Técnicas de negociación profesional',
  caption: 'La negociación como competencia estratégica en la relación con el cliente',
};

export default function Tema19() {
  return (
    <TopicLayout
      numero="19"
      title="Técnicas de Negociación con el Cliente"
      intro="La negociación es una de las competencias más valoradas en el profesional de atención al cliente. No se trata únicamente de regatear precios: negociar es el arte de encontrar acuerdos que satisfagan las necesidades de todas las partes implicadas. Dominando sus principios, fases y herramientas, el profesional transforma conflictos en oportunidades de fidelización."
      image={image}
    >
      {/* ===================== SECCIÓN 1 ===================== */}
      <section className="topic-section">
        <h2>1. ¿Qué es la Negociación? Concepto, Naturaleza y Contextos</h2>

        <p>
          La negociación es un <strong>proceso de comunicación bidireccional</strong> mediante el cual dos o más partes con
          intereses parcialmente divergentes buscan alcanzar un acuerdo mutuamente aceptable. A diferencia de la imposición
          unilateral, la negociación implica voluntad de escucha, flexibilidad y creatividad en la búsqueda de soluciones.
        </p>

        <details className="topic-accordion">
          <summary>Definiciones académicas de referencia</summary>
          <div className="topic-details">
            <p>
              <strong>Roger Fisher y William Ury (Harvard, 1981):</strong> «Negociar es una comunicación de doble sentido
              diseñada para alcanzar un acuerdo cuando usted y la otra parte comparten algunos intereses y tienen otros que
              son opuestos» (<em>Getting to Yes</em>).
            </p>
            <p>
              <strong>Gavin Kennedy:</strong> «La negociación es el proceso por el cual dos o más partes con objetivos
              comunes y conflictivos expresan y examinan propuestas específicas para un posible acuerdo».
            </p>
            <p>
              <strong>Walton y McKersie (1965):</strong> Distinguen entre negociación <em>distributiva</em> (suma cero) y
              negociación <em>integrativa</em> (creación de valor), distinción que sigue siendo el eje teórico central.
            </p>
          </div>
        </details>

        <h3>1.1 Negociación distributiva vs. integrativa</h3>
        <div className="nego-comparison-grid">
          <div className="nego-comp-card nego-dist">
            <div className="nego-comp-header">🔴 Negociación Distributiva</div>
            <ul>
              <li>Mentalidad de <strong>suma cero</strong>: lo que gana uno lo pierde otro</li>
              <li>Posiciones rígidas y apertura extrema</li>
              <li>Poca o nula compartición de información</li>
              <li>Relación cortoplacista o puntual</li>
              <li>Herramienta: <strong>anclaje, presión, plazos</strong></li>
              <li>Ejemplo: negociación de precio en compra de vehículo de segunda mano</li>
            </ul>
          </div>
          <div className="nego-comp-card nego-integ">
            <div className="nego-comp-header">🟢 Negociación Integrativa</div>
            <ul>
              <li>Mentalidad <strong>Win-Win</strong>: ampliar el pastel antes de repartirlo</li>
              <li>Foco en intereses, no en posiciones</li>
              <li>Transparencia activa para generar confianza</li>
              <li>Relación de largo plazo y fidelización</li>
              <li>Herramienta: <strong>intercambio de concesiones, paquetes</strong></li>
              <li>Ejemplo: acuerdo de servicio posventa personalizado con cliente corporativo</li>
            </ul>
          </div>
        </div>

        <h3>1.2 Contextos de negociación en atención al cliente</h3>
        <div className="nego-contexts-grid">
          <div className="nego-ctx">💰 <strong>Precio y descuentos:</strong> Ajuste de tarifas ante volumen o fidelidad</div>
          <div className="nego-ctx">📦 <strong>Condiciones de entrega:</strong> Plazos, urgencias, personalización</div>
          <div className="nego-ctx">⚖️ <strong>Resolución de reclamaciones:</strong> Compensación, sustitución, garantías</div>
          <div className="nego-ctx">🔄 <strong>Cambios y devoluciones:</strong> Políticas flexibles ante casos especiales</div>
          <div className="nego-ctx">📃 <strong>Contratos y renovaciones:</strong> Condiciones de continuidad o upgrade</div>
          <div className="nego-ctx">🤝 <strong>Acuerdos de nivel de servicio (SLA):</strong> Compromisos de respuesta y calidad</div>
        </div>

        <div className="callout callout--tip">
          <strong>💡 Principio clave:</strong> En el contexto de la atención al cliente, <em>toda reclamación es también
          una oportunidad de negociación</em>. El cliente que negocia activamente es el que más desea seguir siendo
          cliente; el peligro real es el cliente silencioso que simplemente se va.
        </div>
      </section>

      {/* ===================== SECCIÓN 2 ===================== */}
      <section className="topic-section">
        <h2>2. El Perfil Negociador: Estilos y Autoconocimiento</h2>

        <p>
          Antes de negociar con otros, el profesional debe conocer su propio estilo negociador. La investigación en
          psicología organizacional identifica estilos diferenciados según dos ejes: <strong>asertividad</strong>
          (orientación al logro propio) y <strong>cooperatividad</strong> (orientación al logro ajeno).
        </p>

        <h3>2.1 Los 5 estilos del modelo Thomas-Kilmann</h3>
        <div className="nego-styles-grid">
          <div className="nego-style-card style-compite">
            <div className="style-icon">⚔️</div>
            <div className="style-name">Competidor</div>
            <div className="style-desc">Alta asertividad, baja cooperación. «Yo gano, tú pierdes». Eficaz en emergencias pero daña relaciones.</div>
          </div>
          <div className="nego-style-card style-colabora">
            <div className="style-icon">🤝</div>
            <div className="style-name">Colaborador</div>
            <div className="style-desc">Alta asertividad, alta cooperación. «Ambos ganamos». El ideal en clientes estratégicos. Requiere tiempo.</div>
          </div>
          <div className="nego-style-card style-compromise">
            <div className="style-icon">⚖️</div>
            <div className="style-name">Comprometido</div>
            <div className="style-desc">Asertividad y cooperación medias. «Cada uno cede algo». Pragmático para plazos cortos.</div>
          </div>
          <div className="nego-style-card style-evita">
            <div className="style-icon">🚪</div>
            <div className="style-name">Evasivo</div>
            <div className="style-desc">Baja asertividad, baja cooperación. Pospone el conflicto. Útil cuando el tema no es estratégico.</div>
          </div>
          <div className="nego-style-card style-cede">
            <div className="style-icon">🕊️</div>
            <div className="style-name">Complaciente</div>
            <div className="style-desc">Baja asertividad, alta cooperación. «Tú ganas». Nutre la relación pero puede erosionar la rentabilidad.</div>
          </div>
        </div>

        <div className="callout callout--info">
          <strong>📐 Test de Thomas-Kilmann (TKI):</strong> Es el instrumento más utilizado a nivel mundial para medir el
          estilo de manejo de conflictos. Disponible para uso profesional, consta de 30 pares de afirmaciones de elección
          forzada. El profesional de atención al cliente de alto rendimiento es <em>flexible</em>: sabe cuándo usar cada
          estilo según el cliente y el contexto.
        </div>

        <h3>2.2 Autoconocimiento: las 3 inteligencias del negociador</h3>
        <details className="topic-accordion">
          <summary>Inteligencia emocional, cognitiva y relacional</summary>
          <div className="topic-details">
            <p>
              <strong>1. Inteligencia emocional (Goleman):</strong> Capacidad de gestionar las propias emociones y leer
              las del interlocutor. El negociador emocionalmente inteligente no reacciona ante la presión: responde.
              Claves: autoconciencia, autorregulación, empatía situacional.
            </p>
            <p>
              <strong>2. Inteligencia cognitiva táctica:</strong> Capacidad de análisis rápido de situaciones, identificar
              el BATNA propio y ajeno, calcular el Punto de Reserva y la Zona de Posible Acuerdo (ZOPA).
            </p>
            <p>
              <strong>3. Inteligencia relacional:</strong> Habilidad para construir rapport, calibrar el lenguaje corporal,
              adaptar el discurso al perfil del cliente (analítico, expresivo, conductor, amigable—modelo DISC).
            </p>
          </div>
        </details>
      </section>

      {/* ===================== SECCIÓN 3 ===================== */}
      <section className="topic-section">
        <h2>3. Las Fases del Proceso de Negociación</h2>

        <p>
          Toda negociación efectiva sigue un proceso estructurado. Improvisar sin metodología es la causa más frecuente
          de acuerdos subóptimos o rupturas innecesarias. El modelo de <strong>5 fases</strong> proporciona el marco
          operativo esencial.
        </p>

        <div className="nego-phases-flow">
          <div className="nego-phase-step phase-prep">
            <div className="phase-num">01</div>
            <div className="phase-content">
              <h4>Preparación</h4>
              <p>Antes de sentarse a negociar: define objetivos, calcula tu BATNA, investiga al cliente, establece mínimos y máximos.</p>
            </div>
          </div>
          <div className="nego-flow-arrow">▼</div>
          <div className="nego-phase-step phase-apertura">
            <div className="phase-num">02</div>
            <div className="phase-content">
              <h4>Apertura y Exploración</h4>
              <p>Crea clima de confianza. Escucha activa para revelar los intereses reales. Formula preguntas abiertas. No hagas concesiones aún.</p>
            </div>
          </div>
          <div className="nego-flow-arrow">▼</div>
          <div className="nego-phase-step phase-propuesta">
            <div className="phase-num">03</div>
            <div className="phase-content">
              <h4>Propuesta y Exploración de Opciones</h4>
              <p>Presenta propuestas concretas. Usa condicionales («si usted…, nosotros podríamos…»). Busca intercambio de concesiones de valor asimétrico.</p>
            </div>
          </div>
          <div className="nego-flow-arrow">▼</div>
          <div className="nego-phase-step phase-bargaining">
            <div className="phase-num">04</div>
            <div className="phase-content">
              <h4>Intercambio y Acuerdo</h4>
              <p>Gestiona concesiones con reciprocidad explícita. Cierra en la ZOPA. Documenta el acuerdo con claridad para evitar ambigüedades posteriores.</p>
            </div>
          </div>
          <div className="nego-flow-arrow">▼</div>
          <div className="nego-phase-step phase-cierre">
            <div className="phase-num">05</div>
            <div className="phase-content">
              <h4>Implementación y Seguimiento</h4>
              <p>El acuerdo es el punto inicial, no el final. Verifica cumplimiento, mide satisfacción y consolida la relación. Un acuerdo bien implementado fideliza.</p>
            </div>
          </div>
        </div>

        <details className="topic-accordion">
          <summary>Detalle de la fase de preparación: la herramienta más subestimada</summary>
          <div className="topic-details">
            <p>
              Los negociadores expertos dedican entre el <strong>50 % y el 70 %</strong> del tiempo total de la
              negociación a la fase de preparación. Esta asimetría es la principal ventaja competitiva del profesional
              versus el amateur.
            </p>
            <p><strong>Lista de comprobación previa a la negociación:</strong></p>
            <ul>
              <li>✅ ¿Cuál es mi objetivo ideal (aspiración máxima)?</li>
              <li>✅ ¿Cuál es mi límite mínimo aceptable (punto de reserva)?</li>
              <li>✅ ¿Cuál es mi BATNA? ¿Cuál es el BATNA probable del cliente?</li>
              <li>✅ ¿Cuáles son los intereses reales del cliente más allá de su posición declarada?</li>
              <li>✅ ¿Qué concesiones puedo ofrecer que tengan alto valor para el cliente y bajo coste para mí?</li>
              <li>✅ ¿Qué argumentos objetivos y criterios de legitimidad puedo utilizar?</li>
              <li>✅ ¿Quién tiene poder de decisión en el lado del cliente?</li>
              <li>✅ ¿Cuáles son los plazos y las presiones temporales de cada parte?</li>
            </ul>
          </div>
        </details>
      </section>

      {/* ===================== SECCIÓN 4 ===================== */}
      <section className="topic-section">
        <h2>4. BATNA, ZOPA y Punto de Reserva: Las Herramientas Analíticas Clave</h2>

        <p>
          El modelo de negociación de Harvard introdujo conceptos que hoy son estándares universales. Dominarlos
          transforma la intuición en método científico aplicado.
        </p>

        <div className="nego-analytical-tools">
          <div className="nego-tool-card tool-batna">
            <div className="tool-acronym">BATNA</div>
            <div className="tool-fullname">Best Alternative To a Negotiated Agreement</div>
            <div className="tool-esp">Mejor Alternativa a un Acuerdo Negociado (MAAN)</div>
            <p>
              La mejor opción que tienes si la negociación fracasa. <strong>Sin BATNA claro, el negociador carece de
              poder real</strong>. Conocer el BATNA propio evita aceptar malos acuerdos; estimar el BATNA ajeno revela
              la presión del otro.
            </p>
            <div className="tool-example">
              <em>Ejemplo:</em> Un cliente amenaza con cambiar de proveedor. Tu BATNA es mantener el contrato estándar
              y perder ese cliente. Si tu cartera está diversificada, tienes poder. Si ese cliente representa el 40 %
              de tus ingresos, tu BATNA es débil y debes fortalecerlo antes de negociar.
            </div>
          </div>

          <div className="nego-tool-card tool-zopa">
            <div className="tool-acronym">ZOPA</div>
            <div className="tool-fullname">Zone Of Possible Agreement</div>
            <div className="tool-esp">Zona de Posible Acuerdo</div>
            <p>
              Rango que se solapa entre el máximo que el comprador está dispuesto a pagar y el mínimo que el vendedor
              acepta. <strong>Si la ZOPA no existe, no hay acuerdo posible</strong> y lo mejor es buscar alternativas
              creativas o aplazar.
            </p>
            <div className="tool-zopa-visual">
              <div className="zopa-bar">
                <div className="zopa-vendor">Mínimo vendedor: 800€ →</div>
                <div className="zopa-overlap">ZOPA: 800€–950€</div>
                <div className="zopa-buyer">← Máximo comprador: 950€</div>
              </div>
            </div>
          </div>

          <div className="nego-tool-card tool-reservation">
            <div className="tool-acronym">PR</div>
            <div className="tool-fullname">Punto de Reserva (Walkaway Point)</div>
            <div className="tool-esp">El límite infranqueable</div>
            <p>
              El peor acuerdo que todavía prefieres frente a tu BATNA. Por debajo de este punto, <strong>es más
              rentable romper la negociación</strong> que firmar. Su determinación previa es crítica para evitar las
              presiones de último momento.
            </p>
            <div className="tool-example">
              <em>Error frecuente:</em> Modificar el punto de reserva bajo presión emocional en la mesa. Una vez
              calculado con datos, debe mantenerse. Si se cambia, debe ser por nueva información objetiva, no por
              ansiedad.
            </div>
          </div>
        </div>

        <div className="callout callout--warning">
          <strong>⚠️ Trampa clásica — El anclaje:</strong> La primera cifra o condición lanzada en la mesa actúa
          como <em>ancla cognitiva</em> (Tversky y Kahneman). El cerebro toma ese número como referencia y todos los
          ajustes posteriores se hacen de forma insuficiente en torno a él. <strong>Principio:</strong> En negociación
          distributiva, abre tú primero con una propuesta ambiciosa pero justificada; en negociación integrativa, primero
          escucha para descubrir intereses antes de anclar.
        </div>
      </section>

      {/* ===================== SECCIÓN 5 ===================== */}
      <section className="topic-section">
        <h2>5. El Método Harvard: Principios de la Negociación por Intereses</h2>

        <p>
          El <strong>Método Harvard de Negociación</strong> (Fisher, Ury y Patton, <em>Getting to Yes</em>, 1981) es
          el marco teórico más influyente del siglo XX en la disciplina. Su propuesta central: negociar sobre
          <strong>intereses</strong>, no sobre <strong>posiciones</strong>.
        </p>

        <div className="nego-harvard-principles">
          <div className="harvard-principle">
            <div className="h-principle-num">I</div>
            <div className="h-principle-body">
              <h4>Separar a las personas del problema</h4>
              <p>
                El cliente no es el problema. El problema es el problema. Atacar la posición del cliente es atacar
                su ego; hay que atacar conjuntamente el problema compartido. Técnica: reencuadrar al cliente como
                <em>«aliado frente al problema común»</em>, no como adversario.
              </p>
            </div>
          </div>
          <div className="harvard-principle">
            <div className="h-principle-num">II</div>
            <div className="h-principle-body">
              <h4>Centrarse en los intereses, no en las posiciones</h4>
              <p>
                La <em>posición</em> es lo que el cliente dice que quiere («quiero un 30 % de descuento»).
                El <em>interés</em> es por qué lo quiere («necesito reducir mi coste total de adquisición»).
                Identificar el interés real abre opciones que la posición cierra. Herramienta: la pregunta
                <strong>«¿Por qué es importante eso para usted?»</strong>.
              </p>
            </div>
          </div>
          <div className="harvard-principle">
            <div className="h-principle-num">III</div>
            <div className="h-principle-body">
              <h4>Inventar opciones de beneficio mutuo</h4>
              <p>
                Antes de decidir, generar. La lluvia de ideas sin compromiso previo amplía el espacio de
                soluciones. Concesiones cruzadas de valor asimétrico: ofreces lo que cuesta poco a tu empresa
                pero vale mucho al cliente (ej: soporte premium gratuito durante 3 meses vs. reducción de precio).
              </p>
            </div>
          </div>
          <div className="harvard-principle">
            <div className="h-principle-num">IV</div>
            <div className="h-principle-body">
              <h4>Insistir en criterios objetivos</h4>
              <p>
                Basarse en estándares independientes de la voluntad de las partes: precios de mercado,
                baremos sectoriales, informes técnicos, precedentes contractuales. Esto despersonaliza la
                negociación y reduce la percepción de arbitrariedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 6 ===================== */}
      <section className="topic-section">
        <h2>6. Tácticas y Técnicas de Negociación</h2>

        <p>
          Las tácticas son maniobras concretas dentro de la estrategia. El profesional de atención al cliente
          necesita conocerlas en dos dimensiones: para <strong>utilizarlas éticamente</strong> cuando sean apropiadas
          y para <strong>reconocerlas y neutralizarlas</strong> cuando las usa el cliente.
        </p>

        <h3>6.1 Tácticas de apertura y posicionamiento</h3>
        <div className="nego-tactics-grid">
          <div className="nego-tactic-card">
            <div className="tactic-name">⚓ Anclaje Alto</div>
            <p>Abrir con una propuesta ambiciosa establece el punto de referencia. El ajuste final estadísticamente se acerca más al ancla inicial.</p>
            <div className="tactic-counter"><strong>Contramedida:</strong> No reaccionar ante el ancla; reformular con criterios objetivos.</div>
          </div>
          <div className="nego-tactic-card">
            <div className="tactic-name">🎁 Paquete de Opciones</div>
            <p>Presentar 3 propuestas con diferentes combinaciones precio/servicio. El cliente elige y percibe control; tú mantienes el ZOPA.</p>
            <div className="tactic-counter"><strong>Efecto psicológico:</strong> La opción central actúa como «cebo» (efecto compromiso).</div>
          </div>
          <div className="nego-tactic-card">
            <div className="tactic-name">🦺 El Bueno y el Malo</div>
            <p>Un interlocutor es inflexible (el malo); el otro aparece más razonable (el bueno). Genera presión por contraste.</p>
            <div className="tactic-counter"><strong>Contramedida:</strong> Nombrar la táctica: «Entiendo que tienen posiciones distintas, ¿cuál es la posición oficial de la empresa?»</div>
          </div>
          <div className="nego-tactic-card">
            <div className="tactic-name">🕰️ Presión de Tiempo</div>
            <p>«Esta oferta solo es válida hasta hoy.» Acelera la decisión reduciendo el análisis del otro.</p>
            <div className="tactic-counter"><strong>Contramedida:</strong> Verificar si el plazo es real. Los plazos artificiales suelen disolverse si no reaccionas con urgencia.</div>
          </div>
          <div className="nego-tactic-card">
            <div className="tactic-name">🧊 Silencio Estratégico</div>
            <p>Tras hacer una propuesta, guardar silencio. Genera incomodidad que el otro llena frecuentemente con concesiones.</p>
            <div className="tactic-counter"><strong>Uso:</strong> Tras presentar precio o condición clave. El silencio es poder; el primero en hablar suele conceder.</div>
          </div>
          <div className="nego-tactic-card">
            <div className="tactic-name">🍕 Salami</div>
            <p>Solicitar pequeñas concesiones sucesivas en lugar de una grande. Cada pieza parece insignificante; el total es sustancial.</p>
            <div className="tactic-counter"><strong>Contramedida:</strong> Llevar cuenta acumulada; condicionar nuevas concesiones a reciprocidad explícita.</div>
          </div>
        </div>

        <h3>6.2 Tácticas de gestión de concesiones</h3>
        <details className="topic-accordion">
          <summary>Las 5 reglas de oro para hacer concesiones</summary>
          <div className="topic-details">
            <p>
              <strong>Regla 1 — Condicionalidad:</strong> Nunca concedas de forma unilateral. Usa siempre la estructura
              condicional: «Si usted acepta X, yo puedo ofrecer Y». La concesión sin condición es percibida como debilidad
              y genera más peticiones.
            </p>
            <p>
              <strong>Regla 2 — Asimetría de valor:</strong> Busca concesiones que cuesten poco a tu empresa pero
              tengan alto valor percibido por el cliente. Ejemplos: tiempo de respuesta garantizado, formación gratuita,
              acceso prioritario, visibilidad en comunicaciones.
            </p>
            <p>
              <strong>Regla 3 — Reducción progresiva:</strong> Las concesiones deben ser de tamaño decreciente (ej:
              5 → 3 → 1.5 → 0.5 %). Esto señala que te acercas al límite, reduciéndose la expectativa de más concesiones.
            </p>
            <p>
              <strong>Regla 4 — Asignación de valor:</strong> Haz visible lo que concedes. «Esto normalmente tiene un
              coste de X; en su caso voy a incluirlo.» Las concesiones invisibles no generan reciprocidad.
            </p>
            <p>
              <strong>Regla 5 — Documentación inmediata:</strong> Confirma cada concesión por escrito en el momento.
              Las ambigüedades post-negociación son fuente de conflicto y erosionan la confianza ganada.
            </p>
          </div>
        </details>

        <h3>6.3 Técnicas de cierre</h3>
        <div className="nego-closing-grid">
          <div className="nego-closing-card">
            <div className="closing-name">✅ Cierre Alternativo</div>
            <p>«¿Prefiere la entrega el martes o el jueves?» No pregunta si cierra, sino cómo cierra. Funciona cuando hay acuerdo implícito.</p>
          </div>
          <div className="nego-closing-card">
            <div className="closing-name">📋 Cierre Resumen</div>
            <p>Recapitula todos los puntos acordados antes de la firma. Refuerza el compromiso y reduce la posibilidad de reabrir puntos ya cerrados.</p>
          </div>
          <div className="nego-closing-card">
            <div className="closing-name">🎯 Cierre de Concesión Final</div>
            <p>«Si firmamos hoy, puedo incluir también X.» Pequeña concesión de bajo coste que cataliza el compromiso. No usar en exceso.</p>
          </div>
          <div className="nego-closing-card">
            <div className="closing-name">⏳ Cierre de Urgencia</div>
            <p>Señalar limitación real de tiempo, stock o precio. Debe ser verdadero; un cierre de urgencia falso destruye la credibilidad a largo plazo.</p>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 7 ===================== */}
      <section className="topic-section">
        <h2>7. Comunicación No Verbal y Paraverbal en la Negociación</h2>

        <p>
          Albert Mehrabian estableció que en la comunicación de actitudes y emociones, el <strong>55 % del impacto</strong>
          es no verbal (postura, expresión facial), el <strong>38 % paraverbal</strong> (tono, ritmo, volumen) y solo el
          <strong>7 % verbal</strong> (las palabras). En negociación, el «cómo» supera frecuentemente al «qué».
        </p>

        <div className="nego-nonverbal-grid">
          <div className="nego-nv-category">
            <h4>👁️ Contacto Visual</h4>
            <ul>
              <li>Mantenerlo el 60-70 % del tiempo indica confianza y escucha activa</li>
              <li>Evitar la mirada al hacer una propuesta sugiere inseguridad</li>
              <li>Mirada fija y sostenida puede ser intimidatoria (dominio)</li>
              <li>En culturas asiáticas, menos contacto visual es señal de respeto</li>
            </ul>
          </div>
          <div className="nego-nv-category">
            <h4>🤲 Postura y Gestos</h4>
            <ul>
              <li>Manos visibles sobre la mesa: apertura y transparencia</li>
              <li>Brazos cruzados: barrera defensiva o desacuerdo</li>
              <li>Inclinarse levemente hacia adelante: interés activo</li>
              <li>Espejo postural (mirroring): genera rapport inconsciente</li>
              <li>Gestos hacia arriba y abiertos: propuesta positiva</li>
            </ul>
          </div>
          <div className="nego-nv-category">
            <h4>🎵 Voz y Paralenguaje</h4>
            <ul>
              <li>Tono descendente al final de frase: asertividad y convicción</li>
              <li>Tono ascendente (pregunta): apertura pero posible debilidad</li>
              <li>Ritmo pausado: autoridad y seguridad</li>
              <li>Pausas antes de responder: señal de reflexión y control</li>
              <li>Volumen ligeramente más bajo: intimidad y confidencialidad</li>
            </ul>
          </div>
          <div className="nego-nv-category">
            <h4>📐 Proxémica (Espacio)</h4>
            <ul>
              <li>Zona social (1.2–3.6 m): negociación formal, primera reunión</li>
              <li>Zona personal (0.5–1.2 m): relación ya establecida, negociación de confianza</li>
              <li>Disposición en mesa: frente a frente (confrontación) vs. en ángulo 90° (colaboración)</li>
              <li>En videollamada: encuadre a nivel de ojos, fondo neutro, iluminación frontal</li>
            </ul>
          </div>
        </div>

        <div className="callout callout--tip">
          <strong>💡 Técnica de la Calibración:</strong> Observa sistemáticamente los cambios en el lenguaje no verbal
          del cliente cuando introduces diferentes propuestas. Un microexpresión de alivio al mencionar un plazo menor,
          o una tensión mandibular ante el precio, son datos valiosos que la negociación verbal no revela. La calibración
          es la habilidad más diferencial del negociador avanzado.
        </div>
      </section>

      {/* ===================== SECCIÓN 8 ===================== */}
      <section className="topic-section">
        <h2>8. Gestión de Objeciones y Resistencias</h2>

        <p>
          Las objeciones son señales de interés, no de rechazo. El cliente que objeta está comprometido con la
          conversación; el cliente indiferente no objeta, simplemente se va. <strong>Tratar la objeción como un
          ataque es el error más frecuente</strong>; tratarla como una petición de información es la respuesta experta.
        </p>

        <h3>8.1 Tipología de objeciones</h3>
        <div className="nego-objections-grid">
          <div className="nego-obj-card obj-price">
            <div className="obj-type">💶 Precio</div>
            <div className="obj-real">Interés real: <em>valor percibido insuficiente</em></div>
            <p>Respuesta: no justificar el precio, sino <strong>maximizar el valor percibido</strong>. Desglosa el ROI, comparativa con coste de la alternativa inferior, coste total de propiedad.</p>
          </div>
          <div className="nego-obj-card obj-time">
            <div className="obj-type">⏱️ Tiempo / «Ahora no»</div>
            <div className="obj-real">Interés real: <em>priorización o coste de cambio</em></div>
            <p>Respuesta: cuantifica el coste de la demora, ofrece una solución de inicio inmediato y mínimo compromiso (prueba piloto, fase 1 reducida).</p>
          </div>
          <div className="nego-obj-card obj-authority">
            <div className="obj-type">🏛️ Autoridad («debo consultarlo»)</div>
            <div className="obj-real">Interés real: <em>necesidad de validación o posición táctica</em></div>
            <p>Respuesta: identifica si es real o táctica. Si es real, ayuda a «vender internamente» con materiales de soporte. Si es táctica, usa: «Si la respuesta de su superior es afirmativa, ¿podemos cerrar hoy?»</p>
          </div>
          <div className="nego-obj-card obj-competitor">
            <div className="obj-type">🏆 Competencia («el otro me da más»)</div>
            <div className="obj-real">Interés real: <em>búsqueda de la mejor propuesta</em></div>
            <p>Respuesta: nunca denigrar al competidor. Diferencia con datos objetivos: «¿Qué incluye exactamente esa propuesta? Permítame mostrarle en qué diferimos.»</p>
          </div>
          <div className="nego-obj-card obj-doubt">
            <div className="obj-type">❓ Duda / desconfianza</div>
            <div className="obj-real">Interés real: <em>riesgo percibido alto</em></div>
            <p>Respuesta: prueba social (casos de éxito verificables), garantías, referencias, periodos de prueba, SLA documentados. Reducir el riesgo percibido, no el precio real.</p>
          </div>
        </div>

        <h3>8.2 El método CREAR para gestionar objeciones</h3>
        <details className="topic-accordion">
          <summary>Metodología paso a paso: C-R-E-A-R</summary>
          <div className="topic-details">
            <p><strong>C — Clarificar:</strong> Antes de responder, asegúrate de entender exactamente la objeción.
            «Cuando dice que es caro, ¿lo compara con una alternativa concreta o es la restricción presupuestaria?»
            El 60 % de los vendedores responden a una objeción diferente a la real.</p>
            <p><strong>R — Reconocer:</strong> Valida la objeción sin aceptarla. «Entiendo que el precio es un factor
            relevante para usted, y es completamente normal valorarlo.» El reconocimiento reduce la defensividad
            y abre el espacio de acuerdo.</p>
            <p><strong>E — Explorar:</strong> Profundiza en el interés subyacente. «¿Qué necesitaría ver para que
            esta inversión tuviera sentido para su empresa?» Las preguntas de exploración generan más información
            que cualquier argumento.</p>
            <p><strong>A — Argumentar:</strong> Solo ahora presenta tu respuesta, basada en los intereses identificados,
            no en un discurso preparado. Personaliza el argumento al cliente, no al producto.</p>
            <p><strong>R — Ratificar:</strong> Confirma que la objeción ha sido resuelta. «¿Esto responde a su
            pregunta sobre el coste?» Un «sí» aquí es un micro-cierre que acumula momentum hacia el acuerdo.</p>
          </div>
        </details>
      </section>

      {/* ===================== SECCIÓN 9 ===================== */}
      <section className="topic-section">
        <h2>9. Negociación en Situaciones Difíciles</h2>

        <p>
          El verdadero test del negociador no es el acuerdo fácil: es mantener la eficacia bajo presión emocional,
          con clientes hostiles, posiciones irrazonables o desequilibrios de poder.
        </p>

        <h3>9.1 El cliente agresivo o dominante</h3>
        <details className="topic-accordion">
          <summary>Estrategia de respuesta ante la agresividad negociadora</summary>
          <div className="topic-details">
            <p>
              El cliente agresivo utiliza la emoción como táctica de presión. Su objetivo: que la otra parte ceda
              por incomodidad, no por lógica. <strong>La respuesta experta no es ni la sumisión ni el contraataque.</strong>
            </p>
            <ul>
              <li><strong>Técnica del «balcón» (Ury):</strong> Cuando la agresividad sube, pausa mentalmente, sube
              al «balcón» y observa la situación con distancia. Reformula internamente: «Esta persona tiene un problema
              que quiere resolver; la agresividad es su señal de frustración.»</li>
              <li><strong>No reactuar al contenido emocional:</strong> Nombra la emoción sin alimentarla: «Veo que
              esta situación le genera una frustración justificada. Quiero ayudarle a resolverla.»</li>
              <li><strong>Redirige la energía:</strong> «¿Qué solución concreta le parecería razonable?» Invita al
              cliente a convertirse en parte de la solución.</li>
              <li><strong>Establece límites sin confrontar:</strong> «Quiero encontrar una solución que le satisfaga.
              Para poder hacerlo necesito que trabajemos juntos en esto. ¿Podemos hacerlo así?»</li>
            </ul>
          </div>
        </details>

        <h3>9.2 La negociación con desequilibrio de poder</h3>
        <div className="nego-power-grid">
          <div className="nego-power-card power-weak">
            <h4>Cuando tienes menos poder</h4>
            <ul>
              <li>Fortalece tu BATNA antes de negociar (reduce dependencia)</li>
              <li>Usa criterios objetivos para desplazar el debate del poder al merecimiento</li>
              <li>Amplía la negociación: el que tiene menos poder en precio puede tener más en plazos, garantías, referencias</li>
              <li>Haz visible el coste de la ruptura para la otra parte</li>
              <li>Busca aliados internos en la empresa del cliente</li>
            </ul>
          </div>
          <div className="nego-power-card power-strong">
            <h4>Cuando tienes más poder</h4>
            <ul>
              <li>Evita la tentación de imponer: los acuerdos coercitivos no se cumplen ni fidelizan</li>
              <li>Usa el poder para clarificar, no para humillar</li>
              <li>Deja al otro «ganar» en puntos no esenciales para ti (orgullo, visibilidad)</li>
              <li>Un acuerdo justo con un cliente pequeño construye reputación y referencias</li>
              <li>El exceso de presión hoy siembra el conflicto de mañana</li>
            </ul>
          </div>
        </div>

        <h3>9.3 El punto muerto y cómo superarlo</h3>
        <details className="topic-accordion">
          <summary>6 técnicas para desbloquear una negociación estancada</summary>
          <div className="topic-details">
            <ul>
              <li><strong>1. Cambiar el nivel:</strong> Si los interlocutores actuales han llegado al límite, elevar
              la conversación a un nivel directivo puede desbloquear el acuerdo.</li>
              <li><strong>2. Introducir nuevas variables:</strong> Si no se puede mover en precio, proponer cambios
              en plazo, condiciones de pago, garantías o servicios adicionales.</li>
              <li><strong>3. Tomar un descanso:</strong> La pausa rompe la dinámica emocional. Un café, aplazar
              24 horas o simplemente un breve silencio puede cambiar la energía de la sala.</li>
              <li><strong>4. Reformular el problema:</strong> «Perdamos de vista las cifras por un momento. ¿Cuál es
              el problema fundamental que queremos resolver juntos?» Volver al interés desnudo.</li>
              <li><strong>5. Mediador neutral:</strong> En negociaciones complejas, incorporar un tercer neutral
              (interno o externo) con credibilidad para ambas partes.</li>
              <li><strong>6. Poner sobre la mesa la alternativa:</strong> «Si no llegamos a un acuerdo, ¿cuál es
              el siguiente paso para cada uno de nosotros?» Verbalizar el BATNA de forma no amenazante puede
              desbloquear el acuerdo.</li>
            </ul>
          </div>
        </details>

        <div className="callout callout--warning">
          <strong>⚠️ Errores fatales que arruinan una negociación:</strong>
          <ul>
            <li>Hacer concesiones sin obtener nada a cambio (percibido como debilidad)</li>
            <li>Ceder demasiado rápido (destruye la credibilidad del punto de partida)</li>
            <li>No haber preparado el BATNA (negocias con miedo, no con criterio)</li>
            <li>Confundir la posición del cliente con su interés real (el 80 % de las aperturas son posiciones)</li>
            <li>Mezclar emociones personales con la negociación profesional</li>
            <li>No documentar en tiempo real los acuerdos parciales alcanzados</li>
          </ul>
        </div>
      </section>

      {/* ===================== SECCIÓN 10 ===================== */}
      <section className="topic-section">
        <h2>10. Negociación Multicanal: Presencial, Telefónica y Digital</h2>

        <p>
          El entorno omnicanal ha multiplicado los contextos de negociación. Las reglas básicas son universales,
          pero la <strong>adaptación táctica al canal</strong> es determinante para la eficacia.
        </p>

        <div className="nego-channels-grid">
          <div className="nego-channel-card chan-presencial">
            <div className="chan-icon">🤝</div>
            <h4>Presencial</h4>
            <p><strong>Ventajas:</strong> Máxima información no verbal, construcción de rapport más rápida, lenguaje corporal disponible.</p>
            <p><strong>Estrategia:</strong> Disposición en mesa en ángulo 90° para colaboración. Lleva documentación visual (gráficos de valor, comparativas). El primer cliente en sentarse en posición de poder marca el tono.</p>
            <p><strong>Momento clave:</strong> Los primeros 4 minutos definen el clima emocional de toda la reunión.</p>
          </div>
          <div className="nego-channel-card chan-telefono">
            <div className="chan-icon">📞</div>
            <h4>Telefónica</h4>
            <p><strong>Reto:</strong> Sin lenguaje corporal; solo voz y palabras. El 93 % de la información no verbal se pierde.</p>
            <p><strong>Estrategia:</strong> Compensa con escucha activa verbal explícita («entiendo», «sí», «continúe»). Sonríe aunque el cliente no te vea: se percibe en la voz. Usa notas escritas durante la llamada.</p>
            <p><strong>Momento clave:</strong> Los primeros 20 segundos definen la disposición del interlocutor.</p>
          </div>
          <div className="nego-channel-card chan-video">
            <div className="chan-icon">💻</div>
            <h4>Videollamada</h4>
            <p><strong>Reto:</strong> Fatiga de Zoom, distracción del entorno, menor presencia física. El contacto visual es técnicamente diferente (miras al monitor, no a la cámara).</p>
            <p><strong>Estrategia:</strong> Mira a la cámara (no a la imagen del interlocutor) para transmitir contacto visual. Iluminación frontal. Fondo neutro. Envía material de soporte antes de la reunión.</p>
            <p><strong>Momento clave:</strong> Limitar a 45 minutos máximo; la atención digital cae exponencialmente después.</p>
          </div>
          <div className="nego-channel-card chan-escrito">
            <div className="chan-icon">✉️</div>
            <h4>Escrito (email / chat)</h4>
            <p><strong>Reto:</strong> Sin tono; alta ambigüedad emocional. Lo escrito queda y puede ser reutilizado fuera de contexto.</p>
            <p><strong>Estrategia:</strong> Nunca negocies por email puntos emocionalmente cargados. Usa el escrito para <em>confirmar</em> lo acordado verbalmente, no para <em>iniciar</em> negociaciones difíciles. Brevedad y claridad sobre retórica.</p>
            <p><strong>Regla de oro:</strong> Si un email requiere más de 3 intercambios sin acuerdo, pasa a voz o vídeo.</p>
          </div>
        </div>
      </section>

      {/* ===================== SECCIÓN 11 ===================== */}
      <section className="topic-section">
        <h2>11. Ética en la Negociación: Los Límites del Negociador Profesional</h2>

        <p>
          La negociación eficaz se sitúa siempre dentro de un marco ético. El profesional de atención al cliente
          representa a una organización; sus actos negociadores construyen o destruyen reputación de marca.
        </p>

        <div className="nego-ethics-grid">
          <div className="nego-ethics-card ethics-ok">
            <div className="ethics-header">✅ Tácticas éticamente aceptables</div>
            <ul>
              <li>Apertura ambiciosa pero justificable</li>
              <li>No revelar el BATNA propio</li>
              <li>Crear tiempo de reflexión antes de responder</li>
              <li>Hacer más atractiva la propia propuesta con énfasis legítimos</li>
              <li>Solicitar más de lo que se espera obtener</li>
              <li>Escuchar sin confirmar la posición del cliente</li>
            </ul>
          </div>
          <div className="nego-ethics-card ethics-nok">
            <div className="ethics-header">❌ Tácticas inaceptables y sus consecuencias</div>
            <ul>
              <li>Mentir sobre hechos verificables (precio, disponibilidad, competencia)</li>
              <li>Crear urgencia falsa o escasez ficticia</li>
              <li>Amenazas o presión coercitiva</li>
              <li>Usar información confidencial del cliente contre sus intereses</li>
              <li>Firmar acuerdos que sabes que no podrás cumplir</li>
              <li>Consecuencia: pérdida de confianza, reclamaciones legales, reputación dañada</li>
            </ul>
          </div>
        </div>

        <div className="callout callout--info">
          <strong>📚 Marco de referencia — La negociación íntegra (Shell, 2006):</strong> Richard Shell propone el
          principio de la «negociación íntegra»: puedes ser duro en los intereses y suave con las personas;
          puedes no revelar todo, pero nunca puedes mentir. El negociador que engaña una vez pierde la credibilidad
          que tardó años en construir. En el contexto de la atención al cliente, esto es especialmente crítico
          porque el cliente habla con otros clientes.
        </div>
      </section>

      {/* ===================== SECCIÓN 12 ===================== */}
      <section className="topic-section">
        <h2>12. Casos Prácticos de Negociación con el Cliente</h2>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">🏦</span>
            <span>Caso 1: Banca de Empresa — Renovación de Línea de Crédito</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente corporativo (PYME de 20 años) solicita ampliar su línea de crédito
            de 200.000 € a 500.000 € para financiar expansión. El riesgo crediticio ha subido por la expansión.
          </p>
          <p>
            <strong>Posición del cliente:</strong> «Llevo 20 años con vosotros y necesito 500.000 € al mismo tipo
            que tengo.»
          </p>
          <p>
            <strong>Interés real:</strong> Financiar el crecimiento con seguridad. El tipo de interés es un coste,
            pero la certeza y la rapidez de la aprobación son igualmente importantes.
          </p>
          <p>
            <strong>Negociación integrativa:</strong> El gestor propone 350.000 € al tipo actual + opción de ampliar
            a 500.000 € en 6 meses si se cumplen hitos de facturación. Añade: revisión trimestral sin costes de
            notaría, gestor dedicado para el proceso de expansión. El cliente percibe soporte estratégico, no
            solo financiero. Cierre: acuerdo en 350.000 € con hoja de ruta documentada para los 500.000 €.
          </p>
        </div>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">🛒</span>
            <span>Caso 2: Retail Premium — Devolución Fuera de Plazo</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente VIP (ticket medio anual 4.800 €) solicita devolución de artículo
            a 45 días (el plazo es 30 días). El artículo está en perfecto estado pero sin embalaje original.
          </p>
          <p>
            <strong>Posición del cliente:</strong> «He sido cliente fiel durante 5 años. Quiero el reembolso.»
          </p>
          <p>
            <strong>Estrategia empleada:</strong> No aplicar la norma de forma ciega. El CLV del cliente es 24.000 €
            en 5 años. El coste de la venta perdida es 180 €. El coste de perder al cliente es de 4.000–5.000 €
            anuales futuros. El asesor ofrece: cambio por vale de 180 € sin caducidad y envío gratuito del nuevo
            artículo a domicilio. No reembolso en efectivo (protege la política) pero máxima flexibilidad en el
            formato (cuida la relación).
          </p>
          <p>
            <strong>Resultado:</strong> Cliente satisfecho. Post-encuesta NPS: 9. Compra adicional por 340 € ese
            mismo día con el vale. ROI de la concesión: +189 %.
          </p>
        </div>

        <div className="case-study">
          <div className="case-header">
            <span className="case-icon">💻</span>
            <span>Caso 3: SaaS B2B — Renovación Anual con Amenaza de Baja</span>
          </div>
          <p>
            <strong>Situación:</strong> Cliente de 3 años amenaza con no renovar contrato anual (18.000 €) alegando
            que la competencia ofrece funcionalidad similar a la mitad de precio.
          </p>
          <p>
            <strong>Investigación previa:</strong> El competidor tiene limitaciones en integraciones y soporte.
            El cliente usa intensamente 4 de las 12 funcionalidades de la plataforma.
          </p>
          <p>
            <strong>Propuesta negociada:</strong> Se identifica que el cliente no usa el 67 % de las funcionalidades.
            Se propone un plan «Core» a 11.000 €/año (39 % de reducción) adaptado a su uso real. Se añade:
            auditoría trimestral de uso gratuita + sesión de formación para aumentar adopción. Se presenta
            comparativa documentada con el competidor (tiempo de respuesta soporte, integraciones disponibles,
            SLA garantizado).
          </p>
          <p>
            <strong>Resultado:</strong> Renovación a 11.000 € con compromiso de revisión a los 12 meses.
            A los 6 meses, el cliente amplía a 14.500 € tras adoptar nuevas funcionalidades en la sesión de formación.
          </p>
        </div>
      </section>

      {/* ===================== SECCIÓN 13 ===================== */}
      <section className="topic-section">
        <h2>13. Actividades Prácticas</h2>

        <div className="callout callout--activity">
          <strong>🎯 Actividad 1 — Role-play de Negociación</strong>
          <p>
            En parejas, uno representa a un cliente que solicita un 25 % de descuento en una renovación de contrato
            de servicios. El otro es el gestor de cuentas. El gestor debe: (a) identificar el interés real del cliente,
            (b) calcular su BATNA mentalmente, (c) ofrecer un paquete de valor alternativo sin ceder en precio.
            Duración: 10 minutos. Feedback grupal: ¿qué táctica funcionó? ¿qué se hubiera hecho diferente?
          </p>
        </div>

        <div className="callout callout--activity">
          <strong>🎯 Actividad 2 — Análisis de BATNA y ZOPA</strong>
          <p>
            Dado el siguiente escenario: proveedor de catering quiere vender un servicio de 5.000 €/mes;
            el cliente tiene presupuesto máximo de 3.800 €/mes y su BATNA es un servicio inferior a 3.200 €/mes.
            Ejercicio: (a) ¿Existe ZOPA? (b) ¿Cuál es el punto de reserva del proveedor si su coste mínimo rentable
            es 3.400 €/mes? (c) ¿Qué variables adicionales podría introducir el proveedor para cerrar el acuerdo?
          </p>
        </div>

        <div className="callout callout--activity">
          <strong>🎯 Actividad 3 — Detección de Tácticas</strong>
          <p>
            Lee las siguientes 6 frases de un cliente en negociación e identifica qué táctica usa en cada caso,
            qué interés real puede esconder y cuál sería la respuesta óptima del profesional:
            (1) «La competencia me lo da a mitad de precio»;
            (2) «Necesito una respuesta antes del viernes»;
            (3) «Mi jefe nunca aprobará esto»;
            (4) «Ya que me hace ese descuento, ¿incluye también la instalación?»;
            (5) «Llevamos años trabajando juntos, espero un trato especial»;
            (6) (silencio prolongado tras tu propuesta de precio).
          </p>
        </div>
      </section>

      {/* ===================== SECCIÓN 14 ===================== */}
      <section className="topic-section">
        <h2>14. Autoevaluación</h2>
        <ol className="self-assessment-list">
          <li>Define la diferencia entre negociación distributiva e integrativa y pon un ejemplo de cada una en el contexto de atención al cliente.</li>
          <li>¿Qué es el BATNA y por qué es la variable de poder más importante en cualquier negociación?</li>
          <li>Explica los 4 principios del Método Harvard y cómo aplicaría el principio II («intereses vs. posiciones») ante un cliente que exige un descuento del 20 %.</li>
          <li>Describe el método CREAR para gestionar objeciones. ¿Por qué es crucial la fase de «Clarificar» antes de argumentar?</li>
          <li>¿Cuáles son las 5 reglas de oro para hacer concesiones? ¿Qué ocurre si haces una concesión sin condición?</li>
          <li>Explica cómo cambia la estrategia de negociación en función del canal (presencial vs. videollamada vs. email).</li>
          <li>¿Cuál es el límite ético de las tácticas de negociación? ¿Qué consecuencias tiene el engaño deliberado en el contexto de la atención al cliente?</li>
        </ol>
      </section>

      {/* ===================== SECCIÓN 15 ===================== */}
      <section className="topic-section">
        <h2>15. Síntesis y Bibliografía de Referencia</h2>

        <div className="nego-summary-cards">
          <div className="nego-summary-card">
            <div className="summary-icon">🧭</div>
            <h4>Fundamentos</h4>
            <p>Toda negociación tiene dos dimensiones: el acuerdo concreto y la relación a largo plazo. El profesional óptimo maximiza ambas.</p>
          </div>
          <div className="nego-summary-card">
            <div className="summary-icon">🔬</div>
            <h4>Método</h4>
            <p>Preparación exhaustiva + intereses sobre posiciones + criterios objetivos + BATNA sólido = ventaja competitiva sostenible.</p>
          </div>
          <div className="nego-summary-card">
            <div className="summary-icon">🎭</div>
            <h4>Adaptación</h4>
            <p>No hay un estilo ideal: el negociador experto es flexible. Usa el estilo Thomas-Kilmann apropiado según el cliente, contexto y objetivos.</p>
          </div>
          <div className="nego-summary-card">
            <div className="summary-icon">⚖️</div>
            <h4>Ética</h4>
            <p>La eficacia negociadora sin ética es cortoplacista y costosa. La reputación de negociador íntegro es el activo más valioso a largo plazo.</p>
          </div>
        </div>

        <details className="topic-accordion">
          <summary>Bibliografía académica y profesional</summary>
          <div className="topic-details">
            <ul>
              <li>Fisher, R., Ury, W. y Patton, B. (1981). <em>Getting to Yes: Negotiating Agreement Without Giving In</em>. Penguin Books.</li>
              <li>Ury, W. (1993). <em>Getting Past No: Negotiating in Difficult Situations</em>. Bantam Books.</li>
              <li>Shell, G. R. (2006). <em>Bargaining for Advantage: Negotiation Strategies for Reasonable People</em>. Penguin.</li>
              <li>Malhotra, D. y Bazerman, M. H. (2007). <em>Negotiation Genius</em>. Bantam Books.</li>
              <li>Thomas, K. W. y Kilmann, R. H. (1974). <em>Thomas-Kilmann Conflict Mode Instrument</em>. Xicom.</li>
              <li>Walton, R. E. y McKersie, R. B. (1965). <em>A Behavioral Theory of Labor Negotiations</em>. McGraw-Hill.</li>
              <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.</li>
              <li>Cialdini, R. B. (1984). <em>Influence: The Psychology of Persuasion</em>. Harper Collins.</li>
              <li>Goleman, D. (1995). <em>Emotional Intelligence</em>. Bantam Books.</li>
              <li>Lewicki, R. J., Saunders, D. M. y Barry, B. (2015). <em>Negotiation</em> (7.ª ed.). McGraw-Hill.</li>
            </ul>
          </div>
        </details>
      </section>
    </TopicLayout>
  );
}
