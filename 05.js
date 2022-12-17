/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:
  var palabra = [];
  var newWord = "";

  for (var i = 0; i < array.length; i++){
    palabra = array[i].split(" ");
    for(var j = 0; j < palabra.length; j++){
      if(palabra[j].length > newWord.length){
        newWord = palabra[j];
      }
    }
  }
  return newWord;
}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga