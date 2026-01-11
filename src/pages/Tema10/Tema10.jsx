import TemaTemplate from '../../components/TemaTemplate/TemaTemplate';

const Tema10 = () => {
  const topics = [
    'Gestión de mensajería de entrada',
    'Gestión de mensajería de salida',
    'Registro de documentos',
    'Procedimientos con Administración pública',
    'Control de correspondencia'
  ];

  return (
    <TemaTemplate
      numero="10"
      titulo="Tratamiento y circulación de la correspondencia"
      subtitulo="Gestión de la mensajería de entrada y salida, registro de documentos y procedimientos con la Administración pública."
      icon="📮"
      topics={topics}
    />
  );
};

export default Tema10;