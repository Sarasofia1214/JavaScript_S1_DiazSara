document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    if (!id) {
      alert("Insert a ID");
      return;
    }

    axios.get(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`)
      .then(respuesta => {
        const obra = respuesta.data;
        document.getElementById("resultado").innerHTML =
        `
          <h2>${obra.Title}</h2>
          <p><strong>Style:</strong> ${obra.Style}</p>
          <p><strong>Date:</strong> ${obra.Date}</p>
          <img src="${obra.Picture}" alt="${obra.Title}">
        `;
      })
      .catch(error => {
        console.error(error);
        alert("Work of Art not found");
      });
  });