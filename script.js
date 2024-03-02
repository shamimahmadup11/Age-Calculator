
const inputDate = document.querySelector('.input');
const calculateBtn = document.querySelector('.btn');
const yearsOutput = document.querySelector('.year');
const monthsOutput = document.querySelector('.month');
const daysOutput = document.querySelector('.day');

calculateBtn.addEventListener('click', function() {
    const birthDate = new Date(inputDate.value);
    const today = new Date();
    
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    // console.log(ageInMilliseconds)
    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears * 365.25) % 30);
    
    yearsOutput.innerText = years ;
    monthsOutput.innerText = months ;
    daysOutput.innerText = days ;
});