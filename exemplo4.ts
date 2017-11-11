class Car{
    constructor(
        public name:string,
        public color:string,
        public power:number
    ){};

    printCar():void{
        console.log(this.name,this.color,this.power);
    }
}

var camaro = new Car("Camaro","Blue",450);
camaro.printCar();

class Car2{
    private _name:string;
    private color:string;
    private power:number;
    public static list: Array<string> = [];
    constructor(name:string,color:string,power:number){
        this._name = name;
        this.color = color;
        this.power = power;
        Car2.list.push(name);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    getColor():string{
        return this.color;
    }

    setColor(value:string){
        this.color = value;
    }
}

var ferrari = new Car2("Ferrari","Red",500);
console.log(Car2.list);
console.log(ferrari);

var Ford = new Car2("Ford","Green",100);
console.log(Car2.list);

ferrari.name = "Carrinho";
console.log(ferrari.name);

ferrari.setColor("Pink");
console.log(ferrari.getColor());