document.addEventListener("DOMContentLoaded"), ()=>{
    const datoscontenedor = document.querySelector(".opciones");
    async function fetchData(){
        const res = await fetch("https://6818a3a15a4b07b9d1d02100.mockapi.io/try");
        data = await res.json();
        return data;
    }
    function displayCapsula(data){
        datoscontenedor.innerHTML=``;
        data.forEach(cap =>{
            const capDiv=document.createElement('div');
            if (cap.status="On hold"){
                    capDiv.innerHTML=`
                <div class="capsula">
                    <div class="text">
        <p>${cap.task}</p>
    </div>
    <div class="botones">
        <div class="terminadonegativa">
            <img class="completado" src="./storage/img/pngwing.com (2).png" alt="">
        </div>
        <div class="eliminado">
            <img class="eliminado" src="./storage/img/pngwing.com (3).png" alt="">

        </div>
    </div>
    `;
            } 
            else{
                if(cap.status=="ready"){`
                    <div class="capsulanegativa">
        <div class="text">
            <p>${cap.task}</p>
        </div>
        <div class="botonesnegativa">
        <div class="terminadonegativo">
            <img class="completado" src="./storage/img/pngwing.com (2).png" data-id="${cap.id}" alt="">
        </div>
        <div class="eliminadonegativa">
            <img class="eliminado" src="./storage/img/pngwing.com (3).png" data-id="${cap.id}" alt="">

        </div>`
                }
            }
            datoscontenedor.appendChild(capDiv);
                })
    }
    fetchData().then(data=>{
        console.log(data);
        displayCapsula(data);
    })
}