const cpets = document.getElementById('pets')
const urlt = `https://api.petfinder.com/v2/oauth2/token`;
const urla = `https://api.petfinder.com/v2/animals`
    function todo() {
        fetch(urlt, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'MRAslGGU89l7sF8D30GLOsclEo4vb0z15B7J4LRDHXtyQArsfu',
            client_secret: 'wYCXstYxej9tPMP9L6oXMTubxzsAx8DgBeLeZfhj'
          })
        })
          .then(res => res.json())
          .then(data => {
            const token = data.access_token;
            console.log(token)
            fetch(urla, {
              method: 'GET',
              headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            })
              .then(response => response.json())
              .then(data => {
                for (i=0;i<data.animals.length;i++){
                    console.log(data)
                    let mascotas = data.animals[i]
                    let imagesrc = mascotas.photos[0]?.full || mascotas.photos[0]?.large || mascotas.photos[0]?.medium || mascotas.photos[0]?.small || '';
                    cpets.innerHTML += `
                    <div class="mascota">
                        <div class="imagen_mascota_container"><img class="imagen_mascota" src="${imagesrc}" alt=""></div>
                        <p class="nombre_mascota">${mascotas.name}</p>
                        <p class="tamaño_mascota">${mascotas.description}</p>
                        <p class="lugar_mascota"></p>
                        <buttom class="boton_information">Mas información</buttom>
                    </div>
                    `;
                }
              });
          });
      }

      document.addEventListener('DOMContentLoaded', todo);