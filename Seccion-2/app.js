"use strict";
(() => {
    //  Clses en typescript
    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;
    //     constructor(
    //         nombre: string, 
    //         equipo: string, 
    //         nombreReal?: string,
    //         puedePelear: boolean,
    //         peleasGanadas: number) {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;
    //     }
    // }
    /*
    Con esta nueva forma de declarar las propiedades de una clase
    e inicializar sus valores se permite disminuir el elcódigo
    incluso se puede indicar si las propiedades de clase son p¿ublicas
    (accesibles dentro y fuera de la clase) oprivadas.
    */
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nomre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nomre = nomre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
