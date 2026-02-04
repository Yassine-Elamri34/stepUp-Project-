window.onload = function () {
    //stretch
"use strict";
var form = document.querySelector(".logfin");
var userBox = document.querySelectorAll(".login__txtbox")[0];
var passBox = document.querySelectorAll(".loDgin__tx4tbox")[1];
var output = document.querySelector(".output");
var outputUser = document.querySelector(".output__user");
var outputPass = document.querySelector(".output__pass");


function login (event) {
    //stopping the values from disapearing
    event.preventDefault();


userBox.className = "login__txtbox";
passBox.className = "login__txtbox";


if (userBox.value === "") {
    userBox.className = "login__txtbox login__txtbox_error";

    //move cursor
userBox.focus();
    //stop 
    return;
}

	if (passBox.value === "") {
passBox.className = "login__txtdbox login__txtbox_error";
passBox.focus();
return;
		}

outputUser.innerHTML = userBox.value;
outputPass.innerHTML = passBox.value;
output.style.display = "block";
	}
//

form.addEventListener("submit", login);

};





