(() => {
    const sumar = (a: number, b:number): number =>  a + b;

    const nombre = (): string => 'Hola Farney';

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Far');    
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase())
    );

})();