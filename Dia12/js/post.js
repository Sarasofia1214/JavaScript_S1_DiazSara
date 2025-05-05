document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const title = document.querySelector("title").value;
    const style = document.getElementById("style").value;
    const date = parseInt(document.getElementById("date").value);
    const picture = document.getElementById("picture").value;
  
    const newObra = {
      Title: title,
      Style: style,
      Date: date,
      Picture: picture
    };
  
    axios.post('https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts', newObra)
      .then(response => {
        document.getElementById("new").innerHTML = `
          <p>Title: ${response.data.Title}</p>
          <img src="${response.data.Picture}" alt="${response.data.Title}" >
        `;
      })
      .catch(error => {
        console.error("Error :(", error);
      });
  });