// Partie 1

function calculateGrade(grades) {
  let totalWeightedScore = 0;
  let totalWeight = 0;

  for (let i = 0; i < grades.length; i++) {
    const score = grades[i].score;
    const weight = grades[i].weight;

    totalWeightedScore += score * weight;
    totalWeight += weight;
  }

  const averageScore = totalWeightedScore / totalWeight;
  console.log(`Total weighted score: ${totalWeightedScore}`);
  console.log(`Total weight: ${totalWeight}`);
  console.log(`Average score: ${averageScore}`);

  if (averageScore >= 90) {
    return "A";
  } else if (averageScore >= 80) {
    return "B";
  } else if (averageScore >= 70) {
    return "C";
  } else if (averageScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}
//La structure de données de ce calculateur de note est un tableau d'objets, où chaque objet représente une note avec deux propriétés : score et pondération (weight). La propriété score représente le score numérique obtenu par l'étudiant pour un devoir ou un examen particulier, tandis que la propriété weight représente le poids ou l'importance de ce devoir ou de cet examen dans le calcul de la note globale.


const grades = [{
    score: 60,
    weight: 0.1
  },
  {
    score: 60,
    weight: 0.3
  },
  {
    score: 50,
    weight: 0.2
  },
  {
    score: 50,
    weight: 0.2
  },
  {
    score: 60,
    weight: 0.2
  }
];

const finalGrade = calculateGrade(grades);
console.log(`The final grade is ${finalGrade}`);
