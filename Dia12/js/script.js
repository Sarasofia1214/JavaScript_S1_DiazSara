
function showArts() {
    axios.get('https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts')
      .then(respuesta => {
        const Arts = respuesta.data;
        let tbody = document.getElementById("table");
  
        Arts.forEach(obra => {
          tbody.innerHTML += `
              <tr>
                <td>${obra.Title}</td>
                <td><img src="${obra.Picture}" alt="${obra.Title}"></td>
              </tr>
          `;
        });
      })
      .catch(error => {
        console.error('Error;(', error);
      });
  }
  
  function editArts(){
    axios.put('https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArtshttps://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}')

  }

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    let action = document.getElementById("option").value;
  
    if (action === "get") {
      showArts();
    };
    elif (action === "put")
        editArts();
    
  });
  