function countVowels(str) {
  let counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      counter += 1;
  }
  return counter;
}
function countVowels2(str) {
  let vocals = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (vocal of vocals) {
    for (var i = 0; i < str.length; i++) {
      if (vocal === str[i]) counter += 1;
    }
  }
  return counter;
}

// Ejercicio 12
// Crear una función en JavaScript llamada countVowels (Contar Vocales) que reciba como parámetro un string y retorne el número correspondiente a la cantidad de vocales que aparecen en dicho string.
// Nota: Para hacer este ejercicio no se pueden utilizar expresiones regulares. Esto se discutirá más adelante en clase.
// Ejemplos:

// Input ---> Output
// countVowels("Hola") ---> 2
// countVowels("Hola MUNDO") ---> 4