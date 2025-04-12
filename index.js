let weight = 0;

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  weight = parseFloat(document.getElementById("weight").value);
  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(
      2
    )} (${status})`;
  } else {
    document.getElementById("bmiResult").innerText =
      "Please enter valid height and weight.";
  }
  document.querySelector("#nutrition").classList.remove("hide");
  document.querySelector("#water").classList.remove("hide");
  waterText(weight);
}
let waterreq = 0;
function waterText(weight) {
  var waterdiv = document.getElementById("waterPara");
  waterreq = weight * 30;
  waterdiv.innerText = `You need to drink ${waterreq} ml of water today`;
}
let count = 0;
function trackWater() {
  const input = document.getElementById("waterCount").value;
  document.getElementById("waterCount").value = "";
  count = count + parseInt(input, 10);

  var resultdiv = document.getElementById("waterResult");
  if (count >= waterreq) {
    resultdiv.innerText =
      "You completed your water requirement for today. Great Job!";
    startConfetti();
  } else {
    resultdiv.innerText = `You drank ${count} glass(es) of water today. Good job!`;
  }
}

function logWorkout() {
  const input = document.getElementById("workoutInput");
  const log = input.value.trim();
  if (log) {
    const li = document.createElement("li");
    li.textContent = log;
    li.className = "list-group-item";
    document.getElementById("workoutList").appendChild(li);
    input.value = "";
  }
}
