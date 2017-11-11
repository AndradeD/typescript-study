function getHello(name:string){
    return 'Hello ' + name;
}

var nome = "Daniel";

document.body.innerHTML = getHello(nome);

interface iCar {
    brand:string;
    name:string;
    power:number;
}

class Carro {
    brand:string;
    name:string;
    //age:number
    power:number;
}

var getCar = function(carro:iCar){
    console.log(carro.brand,carro.name,carro.power);
}

var camaro = new Carro();

camaro.brand = "Chevrolet";
camaro.name = "Camaro";
//camaro.age = 2015
camaro.power = 450;

getCar(camaro);