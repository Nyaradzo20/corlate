let bar = document.querySelector('#bar');
let dropdown = document.querySelector('#dropdwn');
let body = document.querySelector('body');
let logo = document.querySelector('.x');
let links = document.querySelector('.links');
let form = document.querySelector('.form');
let link = document.querySelector('.link');


bar.addEventListener('click', ()=>{
  //dropdown to appear
  dropdown.style.display ="block";
  
 body.style.background = "black" ;

 //link.style.display ="none";
  //logo
  logo.style.display ="none";

  //
  form.style.display ="none";

  links.style.display ="none";

 
});

let exit = document.querySelector('.fa-x');


exit.addEventListener('click', ()=>{
  dropdown.style.display ="none";

  logo.style.display ="flex";

  form.style.display ="block";

 body.style.background =" #011229";

 //links.style.display = "block";


  });