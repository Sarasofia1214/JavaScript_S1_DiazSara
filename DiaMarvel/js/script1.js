document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector(".resultado").innerHTML = "";
  

  axios.get(`https://6818a3a15a4b07b9d1d02100.mockapi.io/Marvel`)
    .then(respuesta => {
      const superhero = respuesta.data;
      const liga = document.getElementById("option").value;

      if (liga == "Marvel") {
        for (let i = 0; i < superhero.length; i++) {
          if (superhero[i]["producer"] == "Marvel Studios") {
            document.querySelector(".resultado").innerHTML += `
            <div class="resultado_container">
              <h2>${superhero[i]['NameCharacter']}</h2>
              <img src="${superhero[i]['poster']}" alt="${superhero[i]['NameCharacter']}">
               <h3>${superhero[i]['NameActor']}</h2>
            </div>
            `;
          }
        }
      } else if (liga == "Dcomics") {
        for (let i = 0; i < superhero.length; i++) {
          if (superhero[i]["producer"] == "DC Comics") {
            document.querySelector(".resultado").innerHTML += `
             <div class="resultado_container">
              <h2>${superhero[i]['NameCharacter']}</h2>
              <img src="${superhero[i]['poster']}" alt="${superhero[i]['NameCharacter']}">
               <h3>${superhero[i]['NameActor']}</h2>
            </div>
            `;
          }
        }
      }
    })
    .catch(error => {
      console.error(error);
      alert("Superhero not found");
    });
});



