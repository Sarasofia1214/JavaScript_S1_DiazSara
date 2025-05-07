document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    axios.get(`https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel`)
      .then(respuesta => {
        const superhero = respuesta.data;
        console.log(superhero)
        document.querySelector(".resultado").innerHTML =
        `
          <h2>${superhero[0]['marvel'][0]['NameCharacter']}</h2>
          <img src="${superhero[0]['marvel'][0]['poster']}">
        `;
      })
      .catch(error => {
        console.error(error);
        alert("Superhero not found");
      });
  });

//   fetch(`https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel`)
//   .then(response => response.json())
  
//   .then(data => {
//     data.forEach(item => {
//       item.marvel.forEach(character => {
//         document.querySelector(".resultado").innerHTML =("Nombre:", character.NameCharacter);

//       });
//     });
//   })
//   .catch(error => console.error('Error al obtener datos:', error));
