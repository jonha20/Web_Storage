let formulario = document.querySelector("form");
let i = 0;
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    url: document.getElementById("url").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("message").value,
  };
  let usuarios = localStorage.getItem("persona") || "[]"; // Si no hay datos, usa '[]'
  usuarios = JSON.parse(usuarios); // Convertir la cadena JSON en un array
  // Agregar el nuevo objeto al array
  usuarios.push(formData);

  // Guardar el array actualizado en localStorage
  localStorage.setItem("persona", JSON.stringify(usuarios));

  let personas = localStorage.getItem("persona") || "[]";
  /* if (!Array.isArray(personas)) {
    personas = []; // Si no es un array, inicialízalo como un array vacío
  }*/
  let array = personas.split("},{").map(String);
  let contactos = document.getElementById("contactos");
  array.forEach((item) => {
    contactos.innerHTML += `<div class="texto">
              <p>${item}</p><button>Eliminar</button>
          </div>`;
  });
});

// let archive = [], // Notice change here
//   keys = Object.keys(localStorage),
//   i = keys.length;

// while (i--) {
//   archive[keys[i]] = localStorage.getItem(keys[i]);
// }

//BORRAR TODOS
document
  .querySelector("form")
  .addEventListener("reset", () => localStorage.clear());
