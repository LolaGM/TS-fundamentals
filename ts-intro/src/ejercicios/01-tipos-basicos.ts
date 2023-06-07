/*
    ===== Código de TypeScript =====
*/

let nombre: string = "Mi Nombre";
nombre = "Otro nombre";
let hp:number|string = 95; //podríamos usar usar la pipe | para decirle el otro tipo de dato a la variable pero el tipado estricto es el sentido de usar typescript
let estaVivo: boolean = true;


hp ="Full"; //cambiamos el valor a la variable

console.log(nombre, hp);

