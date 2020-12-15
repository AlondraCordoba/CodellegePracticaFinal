import { importType } from "@angular/compiler/src/output/output_ast";

import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class HeroesService {

    private Heros: any[] = 
    [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    constructor(){
        console.log('HeroServiceWorks');
    }
// tslint:disable
public getHeros (){
    return this.Heros;
}

public getHero (id){
  return this.Heros[id];
}

public searchHeros(termino){
  // Ver el valor que se esta recibiendo en ese termino.
  // Componente de la busqueda
  console.log(termino);
  // Consolear el termino que se esta buscando

  // Declarar un array para almacenar todos los resultados
  let resultados: any = [];
  termino = termino.toLowerCase(); 

  // Tomar el termino que se tiene y lo que se tiene de "DATA"
  // CICLO para comprar el termino de busqueda contra la propiedad nombre de cada heroe.
  // hero es un objeto.
  // Se modificara el for of
  for ( let i = 0; i < this.Heros.length; i++ ){
    let hero = this.Heros[i]
    const nombre = hero.nombre.toLowerCase();
    if (nombre.indexOf(termino) >= 0){
      // Se agregara una nueva propiedad
      hero.index = i;
    // Regresa la posicion de la cadena chica tiene con la mas grande, del termino que se busco, en caso de que no lo encuentre regresa -1.
    resultados.push(hero);
  }
}
 // Al terminar de iterar se va a regresar nuestro arreglo de resultados.
    return resultados;
}

}