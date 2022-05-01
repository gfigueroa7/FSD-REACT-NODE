------- GITHUB -------

https://github.com/gfigueroa7/FSD-REACT-NODE



------- PROYECTO -------

La idea del proyecto es una página en donde vas a encontrar varias cosas para tu mascota

Cosa que este todo concentrado en un solo lugar para facilitar a los usuarios

Cualquiera se puede postular sin costo y así salir en la web

Van a ver "pagos" para apoyar a la comunidad y así poder destacar más en la web (no tengo pensado que funcione es solo visual)

También va a ver una parte de comunidad para poder compartir experiencias, tips, etc



------- NODE -------

Se agregó un servidor realizado en NODE integrando una BD en Postgres

TODO lo que salia del servidro falso fue remplazado para pasar por Node + BD y se agregaron nuevas funcionalidades.

VIEJO (ahora pasa por Node + BD)
- Veterinaras, Tiendas y Entrenadores cuando apenas entras a alguna de estas página dispara para cargar toda la información que sale de la BD.
- Cuando entras a un detalle de un lugar o una persona dispara para cargar toda la información que sale de la BD.
- Cuando das clic en las estrellas dispara para guardar la puntuación en la BD.
- Cuando das clic en uno de los 3 botones que hay en la página de Ranking dispara para traer toda la información de la BD.
- Cuando se mandan los datos del formulario que hay en la página de Postularse dispara para guardar toda la información en la BD.

NUEVO
- Cuando se mandan los datos del formulario registrarte que hay en la página de Login dispara para guardar toda la información en la BD.
- Cuando se mandan los datos del formulario acceder que hay en la página de Login dispara para comprobar toda la información en la BD.
- Cuando entras en la página Comunidad dispara para cargar noticias que salen de la BD.
- Cuando entras en la página Blog dispara para cargar toda la información que sale de la BD.
- Cuando se mandan los datos del formulario que hay en la página de Blog dispara para guardar toda la información en la BD.
- Cuando entras en la página Backend dispara para cargar toda la información que sale de la BD.
- Cuando aprobas/desaprobas un blog en la página Backend dispara para guardar toda la información en la BD.
- Cuando eliminas una noticia en la página Backend dispara para borrar toda la información de la BD.
- Cuando se mandan los datos del formulario edit que hay en el modal de la página Backend dispara para guardar toda la información en la BD.
- Cuando se mandan los datos del formulario que hay en la página Business dispara para guardar toda la información en la BD.



------- USUARIOS -------

ADMIN
admin@admin.com / admin

USUARIOS CON NEGOCIOS
sofia@sofia.com / sofia
marcelo@marcelo.com / marcelo
martin@martin.com / martin



------- DESCRIPCION DE PAGINAS Y FUNCIONALIDADES NUEVAS -------

#Login
Contiene los formularios de inicio y registro para acceder a la Comunidad
Mientras no te logues no vas a poder acceder a la Comunidad y por ende no vas a poder ver toda la información que se publica
El registro puede ser solo usuario o usuario con negocio lo que te agrega la opción de editarlo por si queres cambiar algo

#Comunidad
Contiene texto de bienvenida con fotos + 3 noticias que salen de la BD + los GOLD sponsors
También sale un menú extra para acceder al Blog, Negocio*, Backend* y poder salir
*El Negocio solo sale si posees uno
*El backend solo sale si sos administrador
Tanto la página Comunidad, Blog, Negocio y Backend están restringidas y solo los usuarios que cumplan los requisitos podrán acceder

#Postularse
Contiene un texto sobre las pautas + un formulario donde dependiendo la opción que eligas va a ser el lugar donde vas a salir inmediatamente
Ahora el formulario no solo crea tu negocio sino que te hace un usuario (la password va a ser lo que ingreses en el nombre ej: 'carlos pedro')
Cuando vayas a la página de la opción que pusiste (veterinaria, tienda o entrenador) ya vas a salir y podes votar y ordenar, también vas a salir en la página Ranking

#Blog
Contiene todos los post que los usuarios fueron haciendo y un formulario para publicar tu contenido
Todo lo que mandes se guarda en la BD PERO hasta que un administrador no lo revise, tú contenido no va a salir

#Business
Contiene un formulario para que puedas cambiar el título y el texto de tu negocio
Solo es visible para usuarios que tengan negocios

#Backend
Contiene todo el listado de los blogs y las noticias
En los blogs podes ver todos los aprobados y dar de baja sino te gusta alguno, también ves los desaprobados y podes aprobar para que salgan en la página de blog
En las noticias podes borrarlas para siempre con la papelera* o sino podes editarlas con el lapiz*
*La papelera te borra de una
*El lapiz te abre un modal con un formulario que contiene toda la información donde ahí podes editar



------- DEPENDENCIAS -------

react-router-dom
Para el manejo de rutas haciendo la web navegable

react-burger-menu
Para la creación del menú estilo hamburguesa

react-modal
Para la creación de modales

react-spinners
Para la creación de spinners/loaders cuando se necesita conectar con el servidor falso

react-stars
Para la creación de calificaciones



------- ESTRUCTURA -------

index.js
Archivo inicial donde renderiza la aplicación y llama al App.js

App.js
Archivo principal donde contiene la estructura común para todas las páginas y en donde se llama a las páginas

assets 
Carpeta donde están todos los recursos del sitio como los css, iconos y las imágenes

components
Carpeta donde están todos los componentes del sitio estructurados en carpetas



------- COMPONENTS -------

Para una mejor organización se pusieron todos los componentes en diferentes carpetas

Componentes comunes/compartidos entre las páginas se pusieron en shared

Componentes que son páginas se pusieron en pages

Componentes que son detalles de una página se pusieron en pages/detail

Componentes más macros/globales se pusieron en general

Componentes de formulario se pusieron en forms

Componentes de tipo card/carta se pusieron en cards



------- DESCRIPCION DE PAGINAS Y FUNCIONALIDADES VIEJAS -------

#Home
Página principal del sitio, en ella puedes encontrar información sobre la empresa y algunos contenidos que proporciona la web
También va a tener las opciones de pago, un formulario de contacto, los logos de todos los sponsors y el footer
*en las opciones de pago cuando le das en unirte, te salta un modal y un formulario para completar
 dicho formulario tiene validación de nombre (solo letras) mostrando un mensaje si algo está mal y un mensaje cuando se "manda" todo bien
 los datos no se guardan

#Veterinarias, Tiendas y Entrenadores
Son páginas con las mismas características y funcionalidades pero distinto contenido 
En ellas podrás encontrar
    - el listado de los lugares/personas con su respectiva foto, título y descripción + calificaciones + si es sponsor
    - select con distintas opciones para ordenar el listado, tales como (ascendente, descendente, mayor rating, menor rating y sponsors)
El sponsor se representa con una corona del color (gold, silver, bronze)
SOLO si sos gold entonces va a tener un link en la foto, título y texto para acceder a una página exclusiva con todo el detalle del lugar/persona
*las calificaciones son custom, el complemento solo te da las estrellas y el valor que seleccionas, lo demas se hizo todo
 podes votar pinchando las estrellas y luego las oculto para "obligar" al usuario a recargar la página
 solo al recargar vas a ver el nuevo puntaje
 se hizo asi para no volver a tener que llamar al servidor y así optimizar un poco
*el orden 'sponsors' ordenaría primero todos los gold luego silver, luego bronze y por último el resto

#Sponsor 
Contiene un texto sobre las pautas y los mismos componentes y funcionalidades de la home (opciones de pago + los logos de todos los sponsors)

#Ranking
Van a aparecer 3 botones (Veterinarias, Tiendas o Entrenadores) 
Al seleccionar uno te va a traer toda la información detallada de las votaciones de ese lugar/persona
Dicha información se va a mostrar ordenada por la cantidad de puntos que obtuvo
Los datos a listar son la posición, nombre, puntos, votos, promedio y las estrellas
*las estrellas en esta página no son seleccionables
*la posición en caso de ser compartida por varios lo lista solo uno y luego el/los de abajo no van a tener el número y luego sigue secuencialmente
 así se evita que sí están empatados puedan discutir por quien sale primero en el listado ya que la posición es la misma
 ej: 
 1 - A
   - B
 2 - C
 3 - D
   - E
   - F
 A y B están los dos en el primer puesto
 C en el segundo
 D, E y F en el tercero

#404
Página por si accedes a una url que no exista dentro de la web
Ej: /vet o /pepe