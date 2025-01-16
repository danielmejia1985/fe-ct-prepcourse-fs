function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  //forma 1 con bucle for:
  // let elementos_multiplicados = []
  // for (let i = 0; i < array.length; i++){

  //   elementos_multiplicados.push(array [i] * 2)

  // }
  // return elementos_multiplicados


  
  //Forma 2 con el metodo Map():
  return array.map((num)  => num * 2)

}

module.exports = duplicarElementos;
