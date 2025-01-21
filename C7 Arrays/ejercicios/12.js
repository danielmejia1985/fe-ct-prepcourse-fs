function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:


let arrayMayus = []
for (let i = 0; i >= array.length; i++ ){

  arrayMayus = array[i].toUpperCase()
}

return arrayMayus
  
 }

module.exports = convertirStringAMayusculas;
