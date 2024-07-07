Proyecto Blog en Next.js
Este proyecto es un sitio web tipo blog desarrollado con Next.js, integrado con la API pública de WordPress de Fernanda Familiar. El sitio contiene dos vistas principales: una página de inicio que muestra un listado de los posts y una vista de detalle para cada post. Además, se ha configurado Google Analytics a través de Google Tag Manager para realizar un seguimiento de los visitantes del sitio.

Objetivo
El objetivo de este proyecto es mostrar la capacidad para desarrollar una aplicación web utilizando Next.js, integrar APIs externas y configurar herramientas de analítica web como Google Analytics y Google Tag Manager.

Tecnologías Utilizadas
Next.js: Framework de React para aplicaciones web.
Tailwind CSS: Framework de CSS para el diseño y la estilización.
Axios: Librería para realizar peticiones HTTP.
Google Analytics: Herramienta para el análisis de datos de usuarios.
Google Tag Manager: Sistema de gestión de etiquetas para facilitar la integración de herramientas de análisis y marketing.


Configuración del Proyecto:

Instalación:
Para instalar las dependencias necesarias, ejecuta:
npm install


Ejecución en Desarrollo:
Para ejecutar el proyecto en modo de desarrollo, usa:
npm run dev


Despliegue
El proyecto está desplegado en vercel, en el siguiente link: https://blog-next-blog.vercel.app/

Funcionalidades Implementadas
Página de Inicio
La página de inicio muestra un listado de posts obtenidos de la API pública de WordPress. Cada post se muestra en una tarjeta con un efecto hover. La tarjeta incluye:

Título del post
Imagen destacada
Extracto del post
Número de comentarios (placeholder)
Botón de "like" que incrementa el conteo al hacer clic
Vista de Detalle del Post
La vista de detalle muestra el contenido completo del post, junto con:

Fecha de publicación
Autor del post (si está disponible)
Contenido del post estilizado
Sección de comentarios (los comentarios se muestran en tiempo real pero no se guardan)
Búsqueda y Filtrado
En la página de inicio, el usuario puede buscar posts por título y filtrar por categoría usando una barra lateral que lista todas las categorías disponibles.

Integración con Google Analytics
Google Analytics se ha configurado a través de Google Tag Manager para rastrear las visitas al sitio y los eventos específicos. La configuración incluye:

Adición del código de Google Tag Manager en _document.jsx.
Creación de etiquetas y disparadores en Google Tag Manager para Google Analytics.
Verificación de datos en Google Analytics.


Pasos para Evaluar(Que considero que deberian evaluar en el sitio):

Revisa el uso de Axios para obtener datos de la API pública de WordPress.
Verifica que los posts se muestran correctamente en la página de inicio y en la vista de detalle.

Revisar la estilización con Tailwind CSS:
Asegúrate de que los componentes están estilizados correctamente y son responsivos.
Verifica el uso de clases de Tailwind CSS para el diseño de las tarjetas, formularios y otros elementos de la UI.
Probar las funcionalidades de búsqueda y filtrado:

Realiza búsquedas de posts por título y verifica que los resultados se actualizan en tiempo real.
Prueba el filtrado por categorías en la barra lateral.
Probar la funcionalidad de comentarios:

Añade comentarios en la vista de detalle del post y verifica que se muestran en tiempo real.
Comentarios Finales
Este proyecto muestra una implementación básica que hice de un blog utilizando Next.js y Tailwind CSS, con una integración completa de Google Analytics a través de Google Tag Manager. Creo que deben evaluar y prestar atención a la estructura del código, la correcta configuración de las herramientas de análisis y la experiencia de usuario proporcionada por las funcionalidades implementadas. Me hiviera gustado implementar mas features y agregar backend pero por tiempo limitado no me fue posible, sin emabrgo, si lo requieren, podria habalr sobre esto mas al respecto o mostrar otras aplicaciones en las que si lo hice.
