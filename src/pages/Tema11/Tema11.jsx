import TemaTemplate from '../../components/TemaTemplate/TemaTemplate';

const Tema11 = () => {
  const topics = [
    'Métodos de ordenación alfabético',
    'Métodos de ordenación numérico',
    'Métodos de ordenación cronológico',
    'Tipos de archivos empresariales',
    'Soportes de materiales'
  ];

  return (
    <TemaTemplate
      numero="11"
      titulo="Sistemas de clasificación y archivo de la documentación"
      subtitulo="Métodos de ordenación (alfabético, numérico, cronológico), tipos de archivos empresariales y soportes de materiales."
      icon="📂"
      topics={topics}
    />
  );
};

export default Tema11;