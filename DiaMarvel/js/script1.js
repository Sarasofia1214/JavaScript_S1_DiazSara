document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    axios.get(`https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel`)
      .then(respuesta => {
        console.log(superhero)
        const superhero = respuesta.data;
        document.querySelector(".resultado").innerHTML =
        `
          <h2>${superhero[marvel][0][NameCharacter]}</h2>
          <img src="${superhero.poster}" alt="${superhero.producer}">
        `;
      })
      .catch(error => {
        console.error(error);
        alert("Superhero not found");
      });
  });

  fetch(`https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel`)
  .then(response => response.json())
  
  .then(data => {
    data.forEach(item => {
      item.marvel.forEach(character => {
        document.querySelector(".resultado").innerHTML =("Nombre:", character.NameCharacter);

      });
    });
  })
  .catch(error => console.error('Error al obtener datos:', error));
