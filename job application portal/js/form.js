
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
