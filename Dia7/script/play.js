let higher = document.getElementById("buttom_box_red");
let lower = document.getElementById("buttom_box_green");
let scoreButton = document.getElementById("score_button");
let restartButton = document.getElementById("restart_button");

let ID;
let cartaActual;
let cartaSiguiente;
let puntos = 0;


const backCardURL = "https://www.divulgamat.net/html/images/dorso5c.jpg";


async function llamarAPI() {
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let data = await response.json();
    return data["deck_id"];
}


function convertirValor(valor) {
    if (valor === "ACE") return 1;       
    if (valor === "JACK") return 11;      
    if (valor === "QUEEN") return 12;   
    if (valor === "KING") return 13;   
    return parseInt(valor);               
}

async function empezarJuego() {
    ID = await llamarAPI();
    
    let response = await fetch(`https://www.deckofcardsapi.com/api/deck/${ID}/draw/?count=2`);
    let data = await response.json();
    
    cartaActual = data["cards"][0];
    cartaSiguiente = data["cards"][1];
    
    document.getElementById("card_yo").src = cartaActual["image"];
    document.getElementById("card_rest").src = backCardURL; 
    
    scoreButton.innerText = `Puntos: ${puntos}`;
}


async function jugar(eleccion) {

    document.getElementById("card_rest").src = cartaSiguiente["image"];
    let valorActual = convertirValor(cartaActual["value"]); 
    let valorSiguiente = convertirValor(cartaSiguiente["value"]); 
    let acierto = false;

    if (eleccion === "higher" && valorSiguiente < valorActual) {
        acierto = true;
    } else if (eleccion === "lower" && valorSiguiente > valorActual) {
        acierto = true;
    }

    if (acierto) {
        puntos++;
        scoreButton.innerText = `Points: ${puntos}`;

        cartaActual = cartaSiguiente;
        document.getElementById("card_yo").src = cartaActual["image"];
        let response = await fetch(`https://www.deckofcardsapi.com/api/deck/${ID}/draw/?count=1`);
        let data = await response.json();
        cartaSiguiente = data["cards"][0];
        document.getElementById("card_rest").src = backCardURL; 

    } else {
        scoreButton.innerText = `You lose Total: ${puntos}`;

        higher.disabled = true;
        lower.disabled = true;
    }
}


function reiniciarJuego() {
    puntos = 0;
    scoreButton.innerText = `Puntos: ${puntos}`;
    higher.disabled = false;
    lower.disabled = false;

    empezarJuego();
}


higher.addEventListener("click", () => {
    jugar("higher");
});

lower.addEventListener("click", () => {
    jugar("lower");
});


restartButton.addEventListener("click", reiniciarJuego);
empezarJuego();


//function showCard(ID) {
//    let xml = new XMLHttpRequest();
//    let card = document.getElementById("card_yo");
//    let url = `https://deckofcardsapi.com/api/deck/${ID}/draw/?count=1`;
//    xml.open('GET', url);
//    xml.onreadystatechange = function () {
//        if (this.status === 200 && this.readystate === 4){
//            let response = JSON.parse(this.responseText);
//            card.src = response["cards"][0]["image"]
//        }else {
 //           console.log(this.status);
//            console.log(this.readyState);
//        }
//    };
//    xml.send();
//}



/*function card(){
    let url = `https://deckofcardsapi.com/api/deck/jt4vcmhmapgp/draw/?count=1`;
    let pepito = new XMLHttpRequest();
    let card = document.getElementById("card");
    pepito.open(`GET`,url);
    pepito.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            card.innerHTML = (`<img id="img_yo" src="${response["cards"][0]["image"]}"`);
            console.log("holi")
        }
        else{
            console.log("EHHHH, esta mal; EN QUE CHINGADOS ESTA MAL, EHHHH NOSE PERO ESTA MAL")
        }
    }
    pepito.send();
};
card();
*/