document.addEventListener("DOMContentLoaded", () => {
    const botonNuevo = document.querySelector(".boton_new");
    const contenedor = document.querySelector(".registro");
    const botonMenos = document.querySelector(".buttom_menos");
  
    botonNuevo.addEventListener("click", () => {
      contenedor.innerHTML = `
        <div class="registro_container">
          <div><p class="resgistro_header">Registro de Trajes</p></div>
          <div><p class="resgistro_title">Trajes del personaje</p></div>
          <div><p class="registro_title2">
            En esta sección podrá registrar los nombres de los trajes usados por el actor en cada una de las películas.
          </p></div>
          <div><button class="mas">+</button></div>
          <div class="buttom_mas"></div> <!-- Asegúrate de que este contenedor exista en el HTML -->
        </div>
      `;
    });
  
 
    contenedor.addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("mas")) {
        const contenedorMas = document.querySelector(".buttom_mas");
        contenedorMas.innerHTML += ` 
          <div><p class="nombre_traje">Nombre Traje</p></div>
            <div>
              <input class="nombre_traje_container" type="text"><button class="menos">-</button>
            </div>
          </div>
        `;
      } 
      
    contenedor.addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("menos")) {
        document.querySelector(".buttom_menos").style.display = 'none';}})
    });
  });




  