function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   return array[Math.floor(array.length * Math.random())]

}

module.exports = obtenerElementoAleatorio;
