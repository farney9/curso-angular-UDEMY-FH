(() => {
// Promesas 1
    console.log('inicio');

    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Finalizó el timeout');
        }, 1000);
    });

    promesa1
            .then(mensaje => console.log(mensaje))
            .catch(err => console.warn(err));
            
    console.log('fin');
    


})();

