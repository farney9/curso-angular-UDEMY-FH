(() => {
// Promesas 2
    const retirarDinero = (valorRetirar: number): Promise<number> => {
        
        let dineroActual = 1000;

        return new Promise((resolve, reject)=>{
            if (valorRetirar > dineroActual) {
                reject('Fondos insuficientes');
            } else {
                dineroActual -= valorRetirar;
                resolve (dineroActual);
            }
        });
    }
    
    retirarDinero(500)
        .then(montoActual => console.log(`Me quedan ${montoActual}`))
        .catch(console.warn)


})();

