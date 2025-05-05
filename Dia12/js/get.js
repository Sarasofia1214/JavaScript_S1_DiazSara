document.getElementById("form-buscar").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    if (!id) {
      alert("Por favor ingresa un ID");
      return;
    }

    axios.get(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`)
      .then(res => {
        const obra = res.data;
        document.getElementById("resultado").innerHTML =
        `
          <h2>${obra.Title}</h2>
          <p><strong>Estilo:</strong> ${obra.Style}</p>
          <p><strong>Fecha:</strong> ${obra.Date}</p>
          <img src="${obra.Picture}" alt="${obra.Title}">
        `;
      })
      .catch(err => {
        console.error(err);
        alert("Obra no encontrada");
      });
  });