let bar = document.querySelector('#bar');
let dropdown = document.querySelector('#dropdwn');
let body = document.querySelector('body');
let logo = document.querySelector('.x');
let outer = document.querySelector('.outer');



bar.addEventListener('click', ()=>{
    //dropdown to appear
    dropdown.style.display ="block";
    
   body.style.background = "black" ;
    //logo
    logo.style.display ="none";
  
   outer.style.display = "none";
    
  
   
  });


  let exit = document.querySelector('.fa-x');


exit.addEventListener('click', ()=>{
  dropdown.style.display ="none";

  logo.style.display ="flex";

  body.style.background =" #011229";
  

  outer.style.display = "block";


  });


  
  