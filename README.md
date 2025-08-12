# Challenge Amigo Secreto - Alura Latam
![gif-Amigo Secreto](https://github.com/user-attachments/assets/0829cdf3-ed74-4ef7-9f86-58c7d5410f54)

# Índice

- Descripción del proyecto📝
- Funciones⚙️
- Demostración🎉
- Autor🧑🏻
- Tecnologías utilizadas🛠️

------------------------------------------------------------------------------------------------------------------------------

## Descripción del proyecto 📝
El reto del **“Amigo Secreto”** fue la Eoportunidad perfecta para consolidar y poner en práctica todo el conocimiento en programación que adquirí gracias a Alura Latam. Consistió en desarrollar el backend de una página cuyo objetivo es almacenar los nombres de amigos que un usuario ingrese mediante un campo de texto y un botón de **“Añadir”**. Estos nombres se alojaran en una lista y, posteriormente, se utilizan para realizar un sorteo aleatorio. El sorteo se inicia al presionar el botón **“Iniciar sorteo”**, momento en el que el sistema selecciona automáticamente un nombre, revelando así quién es el **"amigo secreto"**. Esta función permite al usuario añadir un nuevo nombre a la lista de amigos para el sorteo. Primero, obtiene el texto que el usuario ha escrito en el campo de entrada y comprueba que no esté vacío ni contenga únicamente espacios en blanco. Si el campo está vacío, se muestra un mensaje de alerta solicitando que se ingrese un nombre y se detiene la ejecución. En caso contrario, el nombre se añade al arreglo global que almacena todos los amigos. Luego, se actualiza la lista visible en la página para reflejar este nuevo elemento y, finalmente, se limpia el campo de texto para que el usuario pueda ingresar otro nombre sin tener que borrar el anterior manualmente.

## Funciones ⚙️
**Función agregarAmigo()**

Esta función permite al usuario añadir un nuevo nombre a la lista de amigos para el sorteo. Primero, obtiene el texto que el usuario ha escrito en el campo de entrada y comprueba que no esté vacío ni contenga únicamente espacios en blanco. Si el campo está vacío, se muestra un mensaje de alerta solicitando que se ingrese un nombre y se detiene la ejecución. En caso contrario, el nombre se añade al arreglo global que almacena todos los amigos. Luego, se actualiza la lista visible en la página para reflejar este nuevo elemento y, finalmente, se limpia el campo de texto para que el usuario pueda ingresar otro nombre sin tener que borrar el anterior manualmente.

**Función actualizarLista()**

Su propósito es mostrar en la página web todos los nombres que se han agregado al arreglo de amigos. Para lograrlo, primero accede al elemento HTML que representa la lista visible y elimina cualquier contenido previo, de modo que no se dupliquen los elementos. A continuación, recorre todos los nombres guardados en el arreglo de amigos y, por cada uno de ellos, crea un nuevo elemento de lista **"li"**. Estos elementos se van añadiendo uno a uno al componente de lista en el HTML, lo que permite que el usuario vea en pantalla la lista actualizada con todos los nombres registrados hasta el momento.

**Función sortearAmigo()**

Esta función se encarga de elegir aleatoriamente a uno de los nombres que se han agregado previamente a la lista. Antes de realizar el sorteo, verifica si la lista está vacía; en ese caso, muestra una alerta indicando que no hay amigos para sortear y finaliza la ejecución. Si hay nombres disponibles, genera un número aleatorio que corresponde a la posición de uno de los elementos dentro del arreglo de amigos. Luego, obtiene el nombre que se encuentra en esa posición y lo muestra en un área específica de la página web, indicando al usuario quién ha sido seleccionado como el “amigo secreto”.

-----------------------------------------------------------------------------------------------------------------------------


## Demostración 🎉
**Inicio.**

<img width="1894" height="874" alt="inico" src="https://github.com/user-attachments/assets/dc6d8026-279d-481b-899d-f9b7defb28bf" /> ..



**Alerta solicitando que se ingrese el nombre de un amigo en el caso de haber ingresado el un string vacio.**

<img width="1919" height="894" alt="alerta solicitando que se ingrese un nombre" src="https://github.com/user-attachments/assets/bfebdec4-e0c5-4079-826b-fb7051335d35" /> ..



**Ingresando los nombres de los amigos utilizando el imput para realizarlo y haciendo clink en "añadir".**

<img width="1891" height="873" alt="Lista de amigos" src="https://github.com/user-attachments/assets/8a2d05de-ac58-4df6-a9ff-751b9e7ffed6" /> ..


**Alerta en caso de cliquear el botón "Sortear amigo" y no haber ingresado ningun nombre.**

<img width="1919" height="895" alt="Alerta advirtiendo que no hay amigos para sortear" src="https://github.com/user-attachments/assets/dad8a903-3c88-4423-9012-7dd33a45a25a" /> ..


**Finalmente al dar click en el boton "sortear amigo" se eligira un nombre aleatorio el cual sera el "amigo secreto".**

<img width="1893" height="869" alt="Sorteo del amigo secreto" src="https://github.com/user-attachments/assets/6125904d-3dca-4737-861c-56dbbe8beeef" /> ..

------------------------------------------------------------------------------------------------------------------------------
## Autor 🧑🏻
[<img src="https://avatars.githubusercontent.com/u/223773965?s=400u=1a819c5cc3809d277ce34102ea702152645009dbv=4" width=115><br><sub>Sergio Vallejos</sub>](https://github.com/SergioVallejos)

------------------------------------------------------------------------------------------------------------------------------
## Tecnologías utilizadas 🛠️
- Javascript
- HTML
- CSS
