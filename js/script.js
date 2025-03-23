let formulario = document.querySelector("form");
let i = 0;

function mostrarDatos() {
  
  let personas = localStorage.getItem("persona") || "[]";
  /* if (!Array.isArray(persona)) {
    persona = []; // Si no es un array, inicialízalo como un array vacío
  }*/
  let array = personas.split("},{").map(String);
  let contactos = document.getElementById("contactos");
  contactos.innerHTML = ""
  return array.forEach((item) => {
    contactos.innerHTML += `<div class="texto">
              <p>${item.replaceAll(`","`, " ").replaceAll(`[{`, "").replaceAll("}]" , "").replaceAll(`"`, "")}</p>
          </div>`;
    i++;
  });
}

function enviarDatos(formData) {
  let usuarios = localStorage.getItem("persona") || "[]"; // Si no hay datos, usa '[]'
  usuarios = JSON.parse(usuarios);
  usuarios.push(formData);

  // Guardar el array actualizado en localStorage
  return localStorage.setItem("persona", JSON.stringify(usuarios));
}
function borrarContacto(index) {
  let contactos = JSON.parse(localStorage.getItem('persona')) || [];
  contactos.splice(index, 1);
  localStorage.setItem('persona', JSON.stringify(contactos));
  
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
