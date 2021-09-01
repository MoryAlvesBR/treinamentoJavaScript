// adquirir uma class ao body

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js"
    
});

btnSignup.addEventListener("click", function() {
    body.className = "sign-up-js"
});

// funcoes onclick encaminhando para home

// function login() {
//     window.location.href="arhome.html"
    
// }
// function cadastro() {
//     window.location.href="arhome.html"    
// }



function cadastro() {

    var Login = document.getElementById("input-login").value;
    var Fidelidade  = document.getElementById("input-fidelidade").value;

    localStorage.setItem("storedLogin",  Login);
    localStorage.setItem("storedFidelidade", Fidelidade);
    

    window.location.href="arhome.html"
}



function login() {

    var Login2 = document.getElementById("input-login2").value;
    var Fidelidade2  = document.getElementById("input-fidelidade2").value;

    localStorage.setItem("storedLogin2",  Login2);
    localStorage.setItem("storedFidelidade2", Fidelidade2);
    

    window.location.href="arhome.html"
}
