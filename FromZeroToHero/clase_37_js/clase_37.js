// FILTER, (startswith,endswith,tolowercase,includes) MAP AND REDUCE

//FILTER
//buscar libros por parte del nombre de la persona autora 

const autores = ["gil","peres","perejil"];
const libros = ["primavera","otoño","verano"];
const precios = [200,300,400];

const autoresArgentinos= [
["pepe","pipi","popo"],
["pupu","popa","pepa"],
["titi","tota","tutu"],
];

const autoresNombreCompleto= ["pepe jose pipon", "juana de Arco", "Esteban Quito"];

function buscarAutorPorLetra(lista, letra){
    return lista.filter(function(autor){
        return autor.toLowerCase().startsWith(letra.toLowerCase());
    });
}

console.log(buscarAutorPorLetra(autores,"P"));


function buscarAutor(lista, parteDelNombre){
    return lista.filter(function(autor){
        return autor.toLowerCase().includes(parteDelNombre.toLowerCase());
    })

    
}

console.log(buscarAutor(autoresNombreCompleto,"juana"));


// MAP

function formatearListaDePrecios(lista){
    return lista.map(function(precio){
        if(precio.toString().startsWith('$')){
            return precio + ".00";
        }
        return "$"+ precio + ".00";
    })
}

console.log(formatearListaDePrecios(precios));


// REDUCE

//one way of writing it
const sumaDePrecios = precios.reduce(function(acumulado,valorActual){
    return acumulado + valorActual;
},0)
//another way of writing it
function sumaDePrecios2(lista){
    return lista.reduce(function(acumulado,valorActual){
        return acumulado + valorActual;
    },0);
}



console.log(sumaDePrecios2(precios));

// if you use string instead of integer, reduce concatenates them.


// you can use reduce to pass arguments such as "operacion" and make many different useful functions using conditions.
function operarNumeros(lista, operacion){
    if (operacion === "+"){
        return lista.reduce(function(acumulado,valor){
            return acumulado + valor
        },0);
    }
}

console.log(operarNumeros(precios,"+"));

//reduce is useful to combine lists

function fusionarLista(listaDeListas){
    return listaDeListas.reduce(function(acumulado,listaActual){
        return [...acumulado, ...listaActual];
    })
}

console.log(fusionarLista(autoresArgentinos));


const promedio = precios.reduce(function (acumulado, valorActual){
    return acumulado + valorActual;
},0)/precios.length;

console.log(promedio);