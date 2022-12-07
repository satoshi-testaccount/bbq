let rek = document.querySelectorAll(".text_input");
let date= document.querySelector(".date");
window.addEventListener("load", function(){
	addTitle();
});

function addTitle(){
	for (i=0; i < rek.length; i++){
		rek[i].setAttribute("title","This field is required");
		rek[i].required = "required";
	}
	
}