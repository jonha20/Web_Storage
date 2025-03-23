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
  usuarios = JSON.parse(usuarios);
  usuarios.push(formData);

  // Guardar el array actualizado en localStorage
  localStorage.setItem("persona", JSON.stringify(usuarios));

  let personas = localStorage.getItem("persona") || "[]";
  /* if (!Array.isArray(personas)) {
    personas = []; // Si no es un array, inicialízalo como un array vacío
  }*/
 document.querySelector("form").addEventListener("click", (element) => {
  function borrarUno(element) {
    const index = array.indexOf(element);
    if (index > -1) {
      // only splice array when item is found
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  });
  let array = personas.split("},{").map(String);
  let contactos = document.getElementById("contactos");
  array.forEach((item) => {
    contactos.innerHTML += `<div class="texto">
              <p>${item}</p><button type="click" id="singleDel${i}">Eliminar</button>
          </div>`;

    i++;
    
  });
});

//BORRAR Unico

//BORRAR TODOS
document
  .querySelector("form")
  .addEventListener("reset", () => localStorage.clear());
