(function(){
// templates literales del ES6
function getEdad() {
    return 50 + 50 + 38
}

const nombre   = 'Farney';
const apellido = 'Jimenez';
const edad     = 38

// const salida = nombre + " " + apellido + " ( " + edad + " ) ";
const salida = `${ nombre } ${ apellido } (${ getEdad() })`;
console.log(salida);
 
})();

