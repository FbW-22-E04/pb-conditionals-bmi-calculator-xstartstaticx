//  i
function calculateBMI(name, weight, height) {
  BMI = weight / (height * height);
  console.log(name, BMI);
}
calculateBMI("Mark", 72.5, 1.65);
calculateBMI("John", 68, 1.87);

// ii

function whoIsBiggest(name1, name2, bmi1, bmi2) {
  if (bmi1 > bmi2) {
    console.log(name1, "is bigger");
  } else {
    console.log(name2, "is bigger");
  }
}
whoIsBiggest("Mark", "John", 26.629935720844816, 19.445794846864363);

// Bonus
function whoIsBiggest(
  name1,
  name2,
  name1weight,
  name2weight,
  name1height,
  name2height
) {
  if (
    name1weight / (name1height * name1height) >
    name2weight / (name2height * name2height)
  ) {
    console.log(name1);
  } else {
    console.log(name2);
  }
}
whoIsBiggest("Mark", "John", 72.5, 68, 1.65, 1.87);
