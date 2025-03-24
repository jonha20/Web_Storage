let formulario = document.querySelector("form");

function mostrarDatos() {
  let usuarioss = localStorage.getItem("usuarios") || "[]";
  let array = usuarioss.split("},{").map(String);
  let contactos = document.getElementById("contactos");
  contactos.innerHTML = ""
  return array.forEach((item) => {
    contactos.innerHTML += `<div class="texto">
              <p>${item.replaceAll(`","`, " ").replaceAll(`[{`, "").replaceAll("}]" , "").replaceAll(`"`, "")}</p>
          </div>`;
  });
}

function enviarDatos(formData) {
  let usuarios = localStorage.getItem("usuarios") || "[]"; 
  usuarios = JSON.parse(usuarios);
  usuarios.push(formData);
  return localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
function borrarContacto(index) {
  let contactos = JSON.parse(localStorage.getItem('usuarios')) || [];
  contactos.splice(index, 1);
  localStorage.setItem('usuarios', JSON.stringify(contactos));
}


formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    url: document.getElementById("url").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("message").value,
  };
  enviarDatos(formData);
  mostrarDatos();
});

//BORRAR Unico

document.getElementById('botonBorrar').addEventListener('click', function() {
  borrarContacto(parseInt(prompt("Introduce el indice de la fila a borrar, comenzado por el 0"))); 
  mostrarDatos();
});
//BORRAR TODOS
document
  .querySelector("form")
  .addEventListener("reset", () => {
    localStorage.clear()
    mostrarDatos()
  } );
