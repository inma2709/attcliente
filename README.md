# Manual de Atención al Cliente

Un manual completo y didáctico desarrollado en React que cubre los aspectos fundamentales de la atención al cliente a través de 15 temas extensos.

## Descripción

Este proyecto presenta un manual integral de atención al cliente que funciona como el **sistema nervioso** de una empresa: permite que cada departamento sienta las necesidades del cliente y responda de manera coordinada para mantener el organismo comercial sano y productivo.

## Características

- ✅ **15 Temas Completos** - Cobertura integral de la atención al cliente
- ✅ **Navegación Intuitiva** - Sidebar con acceso rápido a todos los temas
- ✅ **Diseño Responsive** - Adaptado para dispositivos móviles y escritorio
- ✅ **Interfaz Moderna** - Diseño limpio y profesional
- ✅ **Estructura Didáctica** - Organización pensada para el aprendizaje

## Contenido del Manual

1. **La organización empresarial y el proceso de información**
2. **Fundamentos y flujos de la comunicación empresarial**
3. **Psicología y tipología del cliente**
4. **Calidad y oportunidad en el servicio al cliente**
5. **Comunicación presencial y habilidades sociales**
6. **Protocolo empresarial e imagen personal**
7. **Comunicación telefónica y gestión de centralitas**
8. **Comunicación escrita y redacción de documentos**
9. **Uso de nuevas tecnologías y canales telemáticos**
10. **Tratamiento y circulación de la correspondencia**
11. **Sistemas de clasificación y archivo de la documentación**
12. **Detección de necesidades y evaluación de la satisfacción**
13. **Atención de quejas, reclamaciones y gestión de conflictos**
14. **Fidelización del cliente y servicio posventa**
15. **Protección de datos, seguridad y confidencialidad**

## Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para interfaces de usuario
- **React Router DOM** - Enrutamiento del lado del cliente
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con variables CSS
- **ES6+** - JavaScript moderno

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd attcliente
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## Estructura del Proyecto

```
src/
├── components/
│   ├── Layout/          # Componente de layout principal
│   ├── Header/          # Encabezado de la aplicación
│   ├── Sidebar/         # Barra de navegación lateral
│   ├── Footer/          # Pie de página
│   └── TemaTemplate/    # Plantilla base para temas
├── pages/
│   ├── Home/            # Página principal
│   ├── Tema01/          # Tema 1: Organización empresarial
│   ├── Tema02/          # Tema 2: Comunicación empresarial
│   └── ...              # Temas 03-15
├── styles/
│   └── global.css       # Estilos globales
└── App.jsx              # Componente principal
```

## Desarrollo Futuro

- [ ] Implementación del contenido completo de los 15 temas
- [ ] Sistema de búsqueda avanzada
- [ ] Marcadores y favoritos
- [ ] Modo oscuro
- [ ] Exportación a PDF
- [ ] Sistema de evaluación y seguimiento

## Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Proyecto desarrollado como material educativo didáctico para la formación en atención al cliente.

---

*"Un manual de atención al cliente funciona como el sistema nervioso de una empresa"*

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
