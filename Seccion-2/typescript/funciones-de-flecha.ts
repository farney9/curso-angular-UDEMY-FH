(function(){
// Funciones de flecha

const miFuncion = function (a: string) {
    return a.toUpperCase();
}

const miFuncionFlecha = (a: string) => a.toUpperCase();

const sumarNormal = function (a: number, b: number) {
    return a + b;
}

const sumarFlecha = (a: number, b:number) => a + b;

const hulk = {
    nombre: 'Hulk',
    smash() {
        setTimeout( () => {
            // al asignar la función de flecha, this esta apuntando al objeto hulk
            console.log(`${this.nombre} smash!!!`);
        }, 1000 );
    }
}

hulk.smash();


})();

