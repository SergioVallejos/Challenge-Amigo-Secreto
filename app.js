let amigos = [];

// Función agregarAmigos(),permite al usuario ingresar un nombre en el campo de texto 
// y añadirlo a la lista de amigos creada.

function agregarAmigo() {
  
  let nombreAmigo = document.querySelector("#amigo").value;
  
  if (nombreAmigo.trim() === "") {
    alert("Por favor, ingrese el nombre de un amigo ");
    return;
  }
  
  amigos.push(nombreAmigo);
  
  actualizarLista();

  document.getElementById("amigo").value = "";
}

// Función actualizarLista(), recorre el array amigos 
// y agrega cada nombre como un elemento <li> dentro de una lista HTML.

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    const list = document.createElement('li');
    list.textContent = amigos[i];
    lista.appendChild(list);
  }
}


