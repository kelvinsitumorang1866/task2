let name_lengkap = "Kelvin Samuel Rinaldo Situmorang";
let count = name_lengkap.length;
let manipulateUpper = name_lengkap.toUpperCase();
let manipulateLower = name_lengkap.toLowerCase();
let first_letter = name_lengkap.substring(0,1);
let first_name = name_lengkap.split(" ");
let word= "love javascript";
let last_letter = name_lengkap.slice(-1);

console.log(count, "===> Length");
console.log(manipulateUpper, "===> Uppercase");
console.log(manipulateLower, "===> LowerCase");
console.log(first_letter, "===> FirstLatter");
console.log(first_name[0], "===> Firstname");
console.log(first_name[0] + " " + word, "==>firtname+lovejava");
console.log(last_letter, "==> lastletter");


let umur = "20";

let convertToNumber = +umur;

let tinggi ="172.9";

let convertToFloat = parseFloat(tinggi);

console.log(convertToNumber, "===>" ,typeof(convertToNumber) );
console.log(convertToFloat, "===>" ,typeof(convertToFloat) );


let orang = {
        nama : "kelvin",
        ciri_ciri : "ganteng dan baik hati"

}
console.log(typeof(orang), "menampilkan tipe data");



let num1 = 10;
let num2 = 5;

console.log(num1 + num2, "==> penjumlahan");
console.log(num1 - num2, "==> pengurangan");



let num3 = 6;
let num4 = 2;
console.log(num3 / num4, "==> pembagian");
console.log(num3 * num4, "==> perkalian");

let base = 3;
let exponent = 4;
console.log(base.toExponential(exponent));

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

if (!isNaN(number) && number >= 0) {
    // cek, jika number di modulus 2 == 0
    if (number % 2 === 0) {
      console.log("Genap"); // maka genap
    } else {
      console.log("Ganjil"); // maka ganjil
    }
  } else { // jika inputan salah
    console.log("Input salah");
  }