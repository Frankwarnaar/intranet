/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var stage = document.getElementById("stage");
var project = document.getElementById("project");
var radioProject = document.querySelector("fieldset:nth-of-type(2)>label:first-of-type");
var radioStage = document.querySelector("fieldset:nth-of-type(2)>label:nth-of-type(2)");

// stage.classList.add("invisibleForms");
// project.classList.add("invisibleForms");

$("#stage").fadeOut(0);
$("#project").fadeOut(0);

radioProject.addEventListener("click", function(){
	stage.classList.remove("invisibleForms");
	project.classList.remove("invisibleForms");
	$("#stage").hide(500);
	$("#project").show(500);
});

radioStage.addEventListener("click", function(){
	stage.classList.remove("invisibleForms");
	$("#project").hide(500);
	$("#stage").show(500);
});

