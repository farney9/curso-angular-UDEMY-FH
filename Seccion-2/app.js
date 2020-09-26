"use strict";
(() => {
    // Promesas 2
    const retirarDinero = (valorRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (valorRetirar > dineroActual) {
                reject('Fondos insuficientes');
            }
            else {
                dineroActual -= valorRetirar;
                resolve;
            }
        });
    };
    retirarDinero(500);
})();
