let name_lengkap = "Kelvin Samuel Rinaldo Situmorang";


function countLength(name){
    let totalLength = name.length;
    return totalLength;

}

function convertToUpper(name){
            let manipulateUpper = name.toUpperCase();
            return manipulateUpper;
}
function convertToLower(name){
        let manipulateLower= name.toLowerCase();
        return manipulateLower;

}

function findFirstLatter(name){
    let first_letter = name.substring(0,1);
    return first_letter

}
function findFirstName(name){
    let first_name = name.split(" ");
    let getFirstName= first_name[0];
    return getFirstName;
}

function javaDeclareLove(name){
    let first_name = name.split(" ");
    let getFirstName= first_name[0];
    let word = " love java"
    let declaration = getFirstName + word
    return declaration;

}

function getLastLetter(name){
    let last_letter = name.slice(-1)
    return last_letter
}

console.log(countLength(name_lengkap), " ==>length");
console.log(convertToUpper(name_lengkap),"==> uppercase");
console.log(convertToLower(name_lengkap)," ==> lowercase");
console.log(findFirstLatter(name_lengkap),"==> first latter");
console.log(findFirstName(name_lengkap),"==> first name");
console.log(javaDeclareLove(name_lengkap));
console.log(getLastLetter(name_lengkap), "==> last_latter");


let umur = "20";
let tinggi ="172.9";

function stringToNumber(x){
    let convertToNumber = +x;
    return convertToNumber;
}

function stringToFLoat(x){
    let convertToFloat = parseFloat(x);
    return convertToFloat
}



console.log(stringToNumber(umur), "==>", typeof stringToNumber(umur));
console.log(stringToFLoat(tinggi), "==>", typeof stringToFLoat(tinggi))

let y= "aku kapiten";
function dataTypeDetection(variable){
 type = typeof(variable);
 return type;
}

console.log("var =",y,"|", "dataType =", dataTypeDetection(y));

let num1 = 10;
let num2 = 5;

function sumVariable(x,y){
    let total = x + y;
    return total
}

function subtractionVariable(x,y){
    let total = x - y;
    return total
}

console.log("result of sum operation =", sumVariable(num1,num2))
console.log("result of subtraction operation =", subtractionVariable(num1,num2))

let base = 3;
let exponent = 4;

function powerOf(x,exponent){
    let total = Math.pow(x,exponent)
    return total;
}

console.log("result =", powerOf(base,exponent));
arr = [5, 8, 12, 4, 6];

function avg(arr) {
   var sum = 0;
 
   arr.forEach(function (item, idx) {
      
      sum += item;
   });
  
   return sum / arr.length;
}
console.log("Average of all the numbers is: "+avg(arr));


let number = 7;

function oddAndEven(x){
    if (x % 2 === 0) {
        console.log("Genap"); // maka genap
      } else {
        console.log("Ganjil"); // maka ganjil
      }

}
oddAndEven(number);


let cDegree = 5;

function celciusToFaranheit(x){
   let faranheit = (x * 9/5) + 32;
   return faranheit;

}
console.log("faranheit result = ", celciusToFaranheit(cDegree));

let numBase = 10;
let exspo = 5;
function powerOf2(x,exponent){
    let total = Math.pow(x,exponent)
    return total;
}

console.log("result = ", powerOf2(numBase,exspo));

function countVocal(name){
var sum = 0;
for (let index = 0; index < name.length; index++) {
    if (name[index] == 'a' || name[index] == 'i'  || name[index] == 'u' || name[index] == 'e' || name[index] == 'o' ){
        sum++
    }
    
}
total = sum;
return total;
}
console.log(countVocal(name_lengkap));

function detectVocal(name){
 
    for (let index = 0; index < name.length; index++) {
        if (name[index] == 'a' || name[index] == 'i'  || name[index] == 'u' || name[index] == 'e' || name[index] == 'o' ){
        console.log(name[index],"==> huruf vocal")

    }
}
}    

detectVocal(name_lengkap);