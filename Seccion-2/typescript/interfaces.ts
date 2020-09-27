(() => {
// Interfaces en typescript

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string; //es opcional en la interfaz
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = (xmen: Xmen) => {
        console.log(`regresando a ${xmen.nombre} al cuartel`);
    }
    const wolverine :Xmen = {
        nombre : "Logan",
        edad   : 60

    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);

})();

