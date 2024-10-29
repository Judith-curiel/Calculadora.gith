var valor1 = null;
var valor2 = null;

function suma() {
    valor1 = document.getElementsByName("num1")[0].value;
    valor2 = document.getElementsByName("num2")[0].value;
    suma = parseInt(valor1) + parseInt(valor2);
    alert("El resultado es " + suma);
};
function multi() {
    valor1 = document.getElementsByName("num1")[0].value;
    valor2 = document.getElementsByName("num2")[0].value;
    prod = parseInt(valor1) * parseInt(valor2);
    alert("El resultado es " + prod);
};
function resta() {
    valor1 = document.getElementsByName("num1")[0].value;
    valor2 = document.getElementsByName("num2")[0].value;
    rest = parseInt(valor1) - parseInt(valor2);
    alert("El resultado es " + rest);

};
function divi() {
    valor1 = document.getElementsByName("num1")[0].value;
    valor2 = document.getElementsByName("num2")[0].value;
    divis = parseInt(valor1) / parseInt(valor2);
    alert("El resultado es " + divis);
};