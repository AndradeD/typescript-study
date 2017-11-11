var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car("Camaro", "Blue", 450);
camaro.printCar();
var Car2 = (function () {
    function Car2(name, color, power) {
        this._name = name;
        this.color = color;
        this.power = power;
        Car2.list.push(name);
    }
    Object.defineProperty(Car2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car2.prototype.getColor = function () {
        return this.color;
    };
    Car2.prototype.setColor = function (value) {
        this.color = value;
    };
    Car2.list = [];
    return Car2;
}());
var ferrari = new Car2("Ferrari", "Red", 500);
console.log(Car2.list);
console.log(ferrari);
var Ford = new Car2("Ford", "Green", 100);
console.log(Car2.list);
ferrari.name = "Carrinho";
console.log(ferrari.name);
ferrari.setColor("Pink");
console.log(ferrari.getColor());
