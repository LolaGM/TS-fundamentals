/*
    ===== Código de TypeScript =====
*/
//usamos el símbolo ? para dar opcionalidad a las propiedades del objeto


interface Pasajero {
    nombre: string;
    hijos?: string[]
  }
  
  const pasajero1: Pasajero = {
    nombre: 'Fernando'
  }
  
  const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
  }
  
  
  function imprimeHijos( pasajero: Pasajero ): void {
  
    const cuantosHijos = pasajero.hijos?.length || 0;
    
    console.log( cuantosHijos );
  
  }
  //los hijos son opcionales. En caso de no haber propiedad como tal, damos la opcion a 0
  
  imprimeHijos( pasajero1 );