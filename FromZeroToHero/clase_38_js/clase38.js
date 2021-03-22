//integrating logic with view.

// acceder a un elemento de html utilizando document.querySelector , y pasando como parámetro un selector CSS válido.
// asignar un evento a una funcion nombrada o pasarla como anonima

/*
const inputColor= document.querySelector("#color");

inputColor.addEventListener("click", function(){
    alert("hiciste click en el color");
} )


//arrow function
inputColor.addEventListener("click", () =>{
    //codigo
})
*/
//-----------------------------------------------------------------


const inputColor = document.querySelector('#color');

const botonCambiarColor = document.querySelector("#cambiar-color");

botonCambiarColor.addEventListener("click", () =>{
    
    //1. Leer y guardar en una constante el valor del inputColor
    const color = inputColor.value;
    

    // 2. Cambiar el color de fondo de la pagina utilizando alguna propiedad de document.body

    document.body.style.backgroundColor = color;

});

//form