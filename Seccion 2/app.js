"use strict";
(function () {
    // parámetros Obligatorios Opcionales y por defecto
    /*
    El operador ?: sirve para indicar que el parámetro puede ser opcional
    Al parámetro objeto : string = 'batiseñal' se está inicando que tiene un valor por defecto en este caso batiseñal
    */
    function activar(quien, //obligatorio
    momento, //opconal
    objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activ\u00F3 la " + objeto + " en la " + momento + ".");
        }
        else {
            console.log(quien + " activ\u00F3 la " + objeto + ".");
        }
    }
    activar('Gordon', 'batiseñal', 'tarde');
})();
