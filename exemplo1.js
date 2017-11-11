function getHello(name) {
    return 'Hello ' + name;
}
var nome = "Daniel";
document.body.innerHTML = getHello(nome);
var Carro = (function () {
    function Carro() {
    }
    return Carro;
}());
var getCar = function (carro) {
    console.log(carro.brand, carro.name, carro.power);
};
var camaro = new Carro();
camaro.brand = "Chevrolet";
camaro.name = "Camaro";
//camaro.age = 2015
camaro.power = 450;
getCar(camaro);
