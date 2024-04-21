
//pricing page

let bar = document.querySelector('#bar');
let dropdown = document.querySelector('#dropdwn');
let body = document.querySelector('body');
let logo = document.querySelector('.x');
let plans = document.querySelector('.plans');


bar.addEventListener('click', ()=>{
  //dropdown to appear
  dropdown.style.display ="block";
  
 body.style.background = "white" ;
  //logo
  logo.style.display ="none";
//price plans
  plans.style.display ="none";

  

 
});


let exit = document.querySelector('.fa-x');


exit.addEventListener('click', ()=>{
  dropdown.style.display ="none";

  logo.style.display ="flex";

  plans.style.display ="flex";

  


  });