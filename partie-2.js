
//Partie 2

const double = nombre => nombre * 2;
const division = nombre => nombre / 2;

function calculer(nombre, callback) {
    const result = [];
    for (let i = 0; i < nombre.length; i++) {
        result.push(callback(nombre[i]));
    }
    return result;
}

const nombres = [10, 25, 44];

const resultDouble = calculer(nombres, double);
console.log(resultDouble);

const resultDivision = calculer(nombres, division);
console.log(resultDivision);
