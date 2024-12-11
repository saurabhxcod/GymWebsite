
// menu bar js
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Type js

const typed = new Typed('.multiple-text',  {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running','Health'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });
//  BMI JS 
 function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    var bmi = weight / (height * height);
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);

    var bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi <=29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    document.getElementById('bmi-category').textContent = bmiCategory;
}
