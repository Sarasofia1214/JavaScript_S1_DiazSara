
let selectop=document.getElementById("option");
let edit=document.getElementById("Fromedit");


function showArts() {
    axios.get('https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts')
      .then(respuesta => {
        const Arts = respuesta.data;
        let content = document.getElementById("table");
  
        Arts.forEach(obra => {
          content.innerHTML += 
          `<td>${obra.Title}</td>
           <td><img src="${obra.Picture}" alt="${obra.Title}"></td>`;
        });
      })
      .catch(error => {
        console.error('Error;(', error);
      });
  }
  
  function editArts(id, newData) {
    axios.put(`https://681401d6225ff1af1627ad7f.mockapi.io/Famous_WorksOfArts/${id}`, newData)
      .then(response => {
        console.log('Obra editada:', response.data);
        mostrarObras(); 
      })
      .catch(error => {
        console.error('Error', error);
      });
  }  

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    let action = document.getElementById("option").value;
  
    if (action === "get") {
      showArts();
    }
    else if (action === "put"){
        editArts();
    }
  });
document.querySelector('#Formedit').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let Id = document.getElementById("id").value;
    let Newtitle =document.getElementById("title").value;
    let Newpicture=document.getElementById("picture").value;
  
    const newData = {
      Title: Newtitle,
      Picture:Newpicture
    };
  
    editArts(Id, newData);
  });