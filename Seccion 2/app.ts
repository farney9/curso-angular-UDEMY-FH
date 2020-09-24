(function(){
// parámetros Obligatorios Opcionales y por defecto
/*
El operador ?: sirve para indicar que el parámetro puede ser opcional
Al parámetro objeto : string = 'batiseñal' se está inicando que tiene un valor por defecto en este caso batiseñal
*/
function activar(quien : string, //obligatorio
                momento?: string, //opconal
                objeto : string = 'batiseñal') { // por defecto

 
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}.`);
        } else {
            console.log(`${quien} activó la ${objeto}.`);
        }
    }
    
    activar('Gordon', 'batiseñal', 'tarde');
})();

