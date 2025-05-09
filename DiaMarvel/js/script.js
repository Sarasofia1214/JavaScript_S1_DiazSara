document.addEventListener("DOMContentLoaded", () => {
  const botonNuevo = document.querySelector(".boton_new");
  const contenedor = document.querySelector(".registro");

  botonNuevo.addEventListener("click", () => {
    contenedor.innerHTML = `
      <div class="registro_container">
        <div><p class="resgistro_header">Registro de Trajes</p></div>
        <div><p class="resgistro_title">Trajes del personaje</p></div>
        <div><p class="registro_title2">
          En esta sección podrá registrar los nombres de los trajes usados por el actor en cada una de las películas.
        </p></div>
        <div><button class="mas">+</button></div>
        <div class="buttom_mas"></div>
      </div>
    `;
  });

  contenedor.addEventListener("click", (event) => {
    if (event.target.classList.contains("mas")) {
      const contenedorMas = document.querySelector(".buttom_mas");
      contenedorMas.innerHTML += ` 
        <div class="item_traje">
          <div><p class="nombre_traje">Nombre Traje</p></div>
          <div>
            <input class="nombre_traje_container" type="text">
            <button class="menos">-</button>
          </div>
        </div>
      `;
    }

    if (event.target.classList.contains("menos")) {
      const item = event.target.closest(".item_traje");
      if (item) item.remove(); 
    }
  });

  const botonGuardar = document.querySelector(".boton_guardar");
  botonGuardar.addEventListener("click", agregarHeroe);
});

async function agregarHeroe() {
  try {
    const nombre_personaje = document.querySelector(".input_nombre_personaje").value;
    const nombre_actor = document.querySelector(".input_nombre_actor").value;
    const edad = document.querySelector(".input_edad_actor").value;
    const ubi = document.querySelector(".ubicacion_text").value;
    const poster = document.querySelector(".input_poster").value;
    const fecha = document.querySelector(".input_fecha").value;

    const select = document.getElementById("option");
    const value_option = select.value;

    const trajeInputs = document.querySelectorAll(".buttom_mas .nombre_traje_container");
    const suits = [];

    trajeInputs.forEach(input => {
      if (input.value.trim() !== "") {
        suits.push(input.value.trim());
      }
    });

    const nuevoHeroe = {
      NameCharacter: nombre_personaje,
      NameActor: nombre_actor,
      age: edad,
      address: ubi,
      poster: poster,
      date: fecha,
      producer: value_option,
      costums: suits
    };

    const response = await axios.post("https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel", nuevoHeroe);

    console.log("Héroe agregado:", response.data);
    alert("¡Héroe registrado con éxito!");

  
    document.querySelector(".input_nombre_personaje").value = "";
    document.querySelector(".input_nombre_actor").value = "";
    document.querySelector(".input_edad_actor").value = "";
    document.querySelector(".ubicacion_text").value = "";
    document.querySelector(".input_poster").value = "";
    document.querySelector(".input_fecha").value = "";
    document.getElementById("option").selectedIndex = 0;

    document.querySelector(".buttom_mas").innerHTML = "";
    document.querySelector(".registro_container").style.display = "none";

    alert("¡El personaje se ha guardado correctamente!");
  } catch (error) {
    console.error("Error al agregar héroe:", error);
    alert("Ocurrió un error al agregar el héroe.");
  }
}
