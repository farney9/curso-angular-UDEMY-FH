(() => {
    // Desestructuración de Objetos y arreglos
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }
    /*
        Se puede extraer cada una de las proiedades de un objeto
        creando variables
        const {} = avenger;
    
        toma el objeto avenger y extrae una o todas sus propiedades
    */
    // const {nombre, clave, poder} = avenger;
    const extraer = ({ nombre, poder }: any) => {
        console.log(nombre);
        console.log(poder);

    }
    extraer(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [, , hombreArana] = avengers;
    // console.log(loki);
    // console.log(hombreAcero);
    // console.log(hombreArana);
    

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {

        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }
    extraerArr(avengers);





})();

