//conecto API con fetch

fetch('https://app.pokemon-api.xyz/pokemon/random',{
    headers: {
        "Content-Type": "application/json"
    }
}).then((response) =>{
    return response.json();
}).then((json)=>{
    loadRandomPokemon(json);
} )

//fin conectar API con fetch

function loadRandomPokemon(json){
    console.log(json.id);
    console.log(json.name.english);
    console.log(json.type[0]);
}

