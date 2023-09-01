// arrow function
let calculator = (numA, numB, operation) => {
        if(typeof numA !== "number" || typeof numB !== "number"){
            return "Invalid Input";
        }
        else{
            if(operation =="+"){
                return numA + numB;
            } else if (operation =="-"){
                return numA - numB;
            } else if(operation =="/"){
                return numA / numB;
            }else if(operation == "*"){
                return numA * numB;
            } else { return "invalid operation";}
        }

    }

console.log(calculator(6,"2","+"));
console.log(calculator(6,2,"*"));

// calculator curry   

const noIdea1 = 9/5;
const noIdea2 =32;
let conversionToFharenheit = (x)=> {
    return function  (b) {
       let total = x * b 
        return  function (c){
            return total + c;
        }
    }

}

console.log(conversionToFharenheit(5)(noIdea1)(noIdea2));
