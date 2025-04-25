let higher = document.getElementById("buttom_box_red");
let lower = document.getElementById("buttom_box_green");


async function llamarAPI() {
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let data = await response.json();
    let deck_ID = data["deck_id"]
    return deck_ID
}

async function mostrarCarta(ID){
    let response = await fetch(`https://www.deckofcardsapi.com/api/deck/${ID}/draw/?count=2`);
    let data = await response.json();
    let card = document.getElementById("card_yo")
    card.src = data["cards"][0]["image"]
}
async function empezarJuego(){
    let deckID = await llamarAPI()
    mostrarCarta(deckID)
}

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