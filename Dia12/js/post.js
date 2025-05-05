document.getElementById("form-crear").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const title = document.getElementById("crear-title").value;
    const style = document.getElementById("crear-style").value;
    const date = parseInt(document.getElementById("crear-date").value);
    const picture = document.getElementById("crear-picture").value;
  
    const nuevaObra = {
      Title: title,
      Style: style,
      Date: date,
      Picture: picture
    };
  
    axios.post('https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts', nuevaObra)
      .then(response => {
        document.getElementById("crear-resultado").innerHTML = `
          <h3>¡Obra creada!</h3>
          <p>Título: ${response.data.Title}</p>
          <img src="${response.data.Picture}" alt="${response.data.Title}" >
        `;
      })
      .catch(error => {
        console.error("Error al crear la obra:", error);
      });
  });