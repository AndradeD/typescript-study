var test = false;
var id = 2;
//--------------------------
var decimal = 5.3;
var hex = 0xf00d;
var binary = 9;
var octal = 484;
//------------------------
var nome = "Daniel";
var car = 'Camaro';
var text = "<p> Name : " + nome + " </p>\n            <p> Carro : " + car + " </p>\n";
document.body.innerHTML = text;
//-----------------------
var fruits = ['Apple', 'Watermelon', 'Limon', 'Banana'];
console.log(fruits);
var fruits = ['Apple', 'Watermelon', 'Limon', 'Banana'];
console.log(fruits);
//----------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color[2]);
//-------------------------------
var list = 23;
console.log(list);
list = "String...";
console.log(list);
//---------------------------------
function printNumber(num) {
    alert(num);
}
printNumber(32);
