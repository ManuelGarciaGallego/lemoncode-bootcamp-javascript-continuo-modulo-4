// let altura = 1.8;
// let peso = 73;
// let sexo = 'hombre';
 
// let pesoIdeal;

// if (sexo === 'hombre') {
//   pesoIdeal = (altura * 100 - 150) * 0.75 + 50;
// } else {
//   pesoIdeal = (altura * 100 - 150) * 0.60 + 50;
// }

// console.log('Su peso ideal sería ' + pesoIdeal + ' kilogramos.');

// let excesoPeso = peso - pesoIdeal;

// if (excesoPeso > 1) {
//   console.log('Necesita hacer dieta, su peso es ' + excesoPeso + ' kilogramos superior a su peso ideal.');
// } else if (excesoPeso < -1)  {
//   console.log('Necesita comer más, su peso es ' + Math.abs (excesoPeso) + ' kilogramos inferior a su peso ideal.');
// } else {
//   console.log('Enhorabuena su peso es el ideal.');
// }



let person = {
  sex: 'man',
  height: 1.93,
  weight: 83
}


let calculateIdealWeight = (sex, height) => (height * 100 - 150) * (sex === 'man' ? 0.75 : 0.60) + 50;


let notifyIdealWeight = idealWeight => 'Su peso ideal sería ' + idealWeight + ' kilogramos.'


let calculateOverWeight = (weight, idealWeight) => weight - idealWeight;


let recommendations = (overWeight) => {
  if (overWeight > 1) {
    return 'Necesita hacer dieta, su peso es ' + overWeight + ' kilogramos superior a su peso ideal.';
  } else if (overWeight < -1)  {
    return 'Necesita comer más, su peso es ' + Math.abs(overWeight) + ' kilogramos inferior a su peso ideal.';
  } else {
    return 'Enhorabuena su peso es el ideal.';
  }
}


let idealWeightReport = (person) => {
  let idealWeight = calculateIdealWeight(person.sex, person.height); 
  console.log(notifyIdealWeight(idealWeight));
  console.log(recommendations(calculateOverWeight(person.weight, idealWeight)));
}
idealWeightReport(person);


