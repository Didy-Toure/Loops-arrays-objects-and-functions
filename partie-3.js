//Partie 3
function testArrayElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

// Je definie un array en nombres
const numbers = [0, 2, 3, 4, 5];

// Je definis une fonction callback qui teste si un nombre est pair 
function isEven(number) {
  return number % 2 === 0;
}

// Teste si tous les éléments du tableau utilisent même la fonction testArrayElements
const allEven = testArrayElements(numbers, isEven);

// Resultat
console.log(allEven); //ca retourne false évidemment car les elements de larray ne sont pas tous pairs. On peut changer les chiffres de l'array pour voir les differents resultats.
