let currentStep = 0;

const screens = document.querySelectorAll(".screen");
const steps = document.querySelectorAll(".steps span");

function showStep(){

screens.forEach((screen,index)=>{
screen.classList.remove("active");

if(index === currentStep){
screen.classList.add("active");
}
});

steps.forEach((step,index)=>{
step.classList.remove("active");

if(index === currentStep){
step.classList.add("active");
}
});

}

function nextStep(){

if(currentStep < screens.length - 1){
currentStep++;
showStep();
}

}

function prevStep(){

if(currentStep > 0){
currentStep--;
showStep();
}

}