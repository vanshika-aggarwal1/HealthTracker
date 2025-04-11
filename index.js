function trackWater() {
    const count = document.getElementById('waterCount').value;
    document.getElementById('waterResult').innerText = `You drank ${count} glass(es) of water today. Good job!`;
  }

  function logWorkout() {
    const input = document.getElementById('workoutInput');
    const log = input.value.trim();
    if (log) {
      const li = document.createElement('li');
      li.textContent = log;
      li.className = 'list-group-item';
      document.getElementById('workoutList').appendChild(li);
      input.value = '';
    }
  }

  function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    if (height > 0 && weight > 0) {
      const bmi = weight / (height * height);
      let status = "";
      if (bmi < 18.5) status = "Underweight";
      else if (bmi < 24.9) status = "Normal";
      else if (bmi < 29.9) status = "Overweight";
      else status = "Obese";

      document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(2)} (${status})`;
    } else {
      document.getElementById('bmiResult').innerText = "Please enter valid height and weight.";
    }
  }