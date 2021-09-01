var storedLogin = localStorage.getItem("storedLogin");
var storedFidelidade = localStorage.getItem("storedFidelidade");


function get() {
    localStorage.getItem("storedLogin");
    localStorage.getItem("storedFidelidade");

    // <p id="login-name"> </p>
    // <p id="login-password"> </p>

    document.getElementById("login-name").innerHTML = "Bem-Vindo, "+storedLogin+"!";
    document.getElementById("login-fidelidade").innerHTML = storedFidelidade;

}

var storedLogin2 = localStorage.getItem("storedLogin2");
var storedFidelidade2 = localStorage.getItem("storedFidelidade2");

function get2() {
    localStorage.getItem("storedLogin2");
    localStorage.getItem("storedFidelidade2");

    // <p id="login-name2"> </p>
    // <p id="login-fidelidade2"> </p>

    document.getElementById("login-name2").innerHTML = storedLogin2;
    document.getElementById("login-fidelidade2").innerHTML = storedFidelidade2;

}

function start() {
    get();
    get2();
}

// -----------------------------------------------------------

function openclientes(){
    window.location.href="arclientes.html"
}

function opencardapio() {
    window.location.href="arcardapio.html"
}

function sairforhome(){

    localStorage.removeItem("storedLogin");
    localStorage.removeItem("storedFidelidade");

    localStorage.removeItem("storedLogin2");
    localStorage.removeItem("storedFidelidade2");
    
    window.location.href="arcadlog.html"
}
