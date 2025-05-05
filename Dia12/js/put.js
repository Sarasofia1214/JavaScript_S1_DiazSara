const form = document.getElementById("formEdit");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const id = document.getElementById("artId").value;

  try {
    const response = await axios.get(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`);
    const artwork = response.data;

    // Cargar datos en los campos
    document.getElementById("title").value = artwork.Title;
    document.getElementById("style").value = artwork.Style;
    document.getElementById("date").value = artwork.Date;
    document.getElementById("picture").value = artwork.Picture;

    // Confirmar actualización
    form.onsubmit = async (e) => {
      e.preventDefault();
      const newData = {
        Title: document.getElementById("title").value,
        Style: document.getElementById("style").value,
        Date: document.getElementById("date").value,
        Picture: document.getElementById("picture").value
      };

      await axios.put(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`, newData);
      alert("Artwork updated successfully");
    };

  } catch (error) {
    alert("Artwork not found or error loading");
    console.error(error);
  }
});
