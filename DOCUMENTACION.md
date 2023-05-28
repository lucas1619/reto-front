## Documentación del Reto

### Introducción
Esta documentación proporciona una descripción detallada del proyecto, incluyendo su estructura de carpetas, las tecnologías utilizadas, las instrucciones de instalación, ejecución y despliegue. El objetivo del proyecto es desarrollar una aplicación web utilizando Next.js, aprovechando las ventajas del SSR (Server-Side Rendering) y las librerías populares de React.

### Estructura de Carpetas
La estructura de carpetas del proyecto sigue una organización basada en categorías para facilitar la navegación y el mantenimiento del código. A continuación, se presenta la estructura de carpetas:

```
- app/
- components/
- data/
- domain/
- styles/
- utility/
```

- **app/**: Esta carpeta contiene el app routing de Next.js, encargado de gestionar las rutas de la aplicación y proporcionar una experiencia de navegación fluida. Para obtener más información sobre la estructura y funcionalidad de esta carpeta, consulta la documentación oficial de Next.js.

- **components/**: En esta carpeta se encuentran todos los componentes reutilizables utilizados en las diferentes páginas de la aplicación. La estructura de componentes ayuda a organizar y mantener un código modular y eficiente.

- **data/**: La carpeta "data" actúa como una capa de acceso a fuentes externas. En este proyecto, se utiliza para acceder al archivo "servicio.json", que proporciona los datos necesarios para la aplicación. Esta estructura facilita la gestión y la separación de las fuentes de datos.

- **domain/**: La carpeta "domain" contiene la lógica del negocio de la aplicación. Aquí se encuentran los modelos y otros componentes relacionados con la lógica empresarial específica del proyecto. Al mantener la lógica del negocio en una ubicación separada, se promueve la modularidad y el mantenimiento.

- **styles/**: En esta carpeta se encuentran las configuraciones de estilos CSS de la aplicación. Se utilizan tecnologías como Material UI v5.13.2 y TailwindCSS para personalizar y estilizar los componentes de manera sencilla y altamente customizable.

- **utility/**: La carpeta "utility" contiene funciones auxiliares que ayudan en el desarrollo del proyecto. Estas funciones se utilizan para realizar tareas comunes o proporcionar funcionalidades adicionales que pueden ser reutilizadas en diferentes partes de la aplicación.

### Tecnologías Utilizadas

- **Next.js v13.4.4**: Next.js es un framework popular para desarrollar aplicaciones SSR (Server-Side Rendering) con React. Proporciona una estructura de proyecto organizada y herramientas poderosas para la creación de aplicaciones web robustas y eficientes.

- **Material UI v5.13.2**: Material UI es una biblioteca de componentes completa y altamente customizable para React. Proporciona una amplia gama de componentes preestilizados que facilitan el desarrollo de interfaces atractivas y funcionales.

- **TailwindCSS**: TailwindCSS es un framework de CSS utilitario que permite hacer modificaciones rápidas y sencillas en el diseño de la aplicación sin tener que escribir mucho código CSS personalizado. Proporciona una amplia gama de clases utilitarias listas para usar.

- **PostCSS**: PostCSS es una herramienta que se utiliza en combinación con TailwindCSS para
 eliminar clases CSS no utilizadas. Esto ayuda a optimizar el rendimiento de la aplicación al eliminar el código CSS innecesario.

- **AWS Amplify**: AWS Amplify es un servicio de AWS que facilita el despliegue de aplicaciones de forma sencilla utilizando los servicios en la nube de AWS. Amplify simplifica el proceso de implementación y permite escalar y administrar fácilmente la infraestructura subyacente.

### Instalación
Sigue los pasos a continuación para instalar y configurar el proyecto en tu entorno local:

1. Clona el repositorio en tu máquina local:
```
git clone https://github.com/tu-usuario/tu-proyecto.git
```

2. Navega hasta la carpeta del proyecto:
```
cd tu-proyecto
```

3. Instala todas las dependencias requeridas utilizando npm:
```
npm install
```

### Ejecución
Una vez instaladas todas las dependencias, puedes ejecutar el proyecto en modo de desarrollo con el siguiente comando:

```
npm run dev
```

Esto iniciará la aplicación y podrás acceder a ella a través de tu navegador en la siguiente dirección: `http://localhost:3000`.

### Despliegue
El despliegue del proyecto se realiza a través de AWS Amplify. Se configura para que se realice automáticamente cada vez que se realiza un push a la rama "main" del repositorio. Para añadir código externo, se debe enviar un pull request. La aplicación se encuentra desplegada en la siguiente URL: [https://main.d3ju4evtsto0gt.amplifyapp.com/](https://main.d3ju4evtsto0gt.amplifyapp.com/)