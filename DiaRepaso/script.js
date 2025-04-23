const Nombrepoke = document.querySelector('.Nombre');
const Numeropoke = document.querySelector('.Numero');
const Pokemon = document.querySelector('.Pokemon');
const form = document.querySelector('.formulario');
const respuesta = document.querySelector('.busqueda');
const prev = document.querySelector('.previo');
const next = document.querySelector('.siguiente');

let id_pokemon = 1;

const fetchPokemon = async (pokemon) =>{

    const estado = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    

    if(estado.status == 200){
        const data = await estado.json();
        return data;
    }
}

const pokemoname= async (pokemon) => {
    Nombrepoke.innerHTML = 'Loading...';
    Numeropoke.innerHTML ='';

    const data = await fetchPokemon(pokemon);

    if (data){
      
        Nombrepoke.innerHTML=data.name;
        Numeropoke.innerHTML = data.id;
        Pokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        respuesta.value='';
        id_pokemon=data.id;
    }else{
        Pokemon.style.display='none';
        Nombrepoke.innerHTML="Not Found";
        Numeropoke.innerHTML= '';
    }
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    pokemoname(respuesta.value.toLowerCase());
})


prev.addEventListener('click',()=>{
    if (id_pokemon >1){
        id_pokemon -= 1;
        pokemoname(id_pokemon);
    }
});

next.addEventListener('click',()=>{
    
        id_pokemon += 1;
        pokemoname(id_pokemon);
    
});

pokemoname(id_pokemon);