//La structure de données de ce calculateur de note est un tableau d'objets, où chaque objet représente une note avec deux propriétés : score et pondération (weight). La propriété score représente le score numérique obtenu par l'étudiant pour un devoir ou un examen particulier, tandis que la propriété weight représente le poids ou l'importance de ce devoir ou de cet examen dans le calcul de la note globale.


const grades = [
  {score: 80, weight: 0.1},
  {score: 90, weight: 0.3},
  {score: 75, weight: 0.2},
  {score: 62, weight: 0.2},
  {score: 84, weight: 0.2}
];

const finalGrade = calculateGrade(grades);
//console.log(`The final grade is ${finalGrade}`);
