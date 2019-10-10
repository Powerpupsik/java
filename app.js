document.addEventListener("DOMContentLoaded", function(){
console.log("TERE!");

let hello = "Hello World";
console.log(hello);

let rangeStart =1;
let rangeEnd = 100;
let numberToCheck = 99;
let inRange = false

for(let i = rangeStart; i<= rangeEnd; i++) {
  if(numberToCheck === i) {
     inRange= true;
     break;
  }
}

/*if(inRange){
    console.log("The number is in range");
}else{
    console.log("The number is out of range");
}*/

//Ternary Operator. Vaid siis, kui 2 valikut
let result = inRange ? "In Range" : "Out of Range";
console.log(result);

//Korrutustabel (1-le numbrile)
//Test data
//number: 5
//expected output
//5x1=5
//5x2=10
//...

/*let number = 5;

for(let i= 1; i <= 10; i++){
    console.log(number, "x", i, "=", number*i);
}
 let number2 = 7;

 for(let i=1; i<=10; i++){
    console.log(number2, "x", i, "=", number2*i);
 }

 /*for(let i= 1; i <= 10; i++){
     let string = ${number} x ${i} = ${number * i};
     console.log(string);
 }*/

let stringLenght;
let string="Hello World!";
stringLength=string.length;
console.log(stringLength);

/*for(let i= 0; i < 12; i++){
    console.log(string[i]);
}*/

/*for(let i = string.length-1; i >= 0; i--){
    console.log(string[i]);
    
}*/

for(let i=0; i < 12; i++){
    if(string[i]=== 'o'){
        console.log('*');
    }else{
        console.log(string[i]);
    }
}

let substitute = string.substitute("o", "*");

console.log(substitute);

});