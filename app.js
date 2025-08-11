// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

    let nombreDeAmigo = document.querySelector("#amigo").value;

    if(nombreDeAmigo === "") {

        alert("El campo esta vacio, ingrese un nombre por favor");
    }
     else {
        amigos.push(nombreDeAmigo);
        document.querySelector("#amigo").value = "";

}
}
