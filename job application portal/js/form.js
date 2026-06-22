
const form =
document.getElementById(
"applicationForm"
);


form.addEventListener(
"submit",
function(e){


e.preventDefault();


alert(
"Application received. Our HR team will contact shortlisted candidates."
);



form.reset();


});


const section = document.querySelector(".global-logistics");


window.addEventListener("scroll",()=>{


let position = section.getBoundingClientRect().top;


let screen = window.innerHeight;


if(position < screen - 150){


section.classList.add("show");


}


});
