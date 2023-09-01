function calculator (numA,numB,operation){
    if(typeof numA != "number" || typeof numB != "number"){
        return "bukan angka"; }
        else{
            if(operation =="tambah"){
                let total = numA + numB;
                return total;
            }
             else if(operation =="kurang"){ 
                let total = numA + numB;
                return total;
             }
             else if(operation =="bagi"){ 
                let total = numA / numB;
                return total;
             }
             else if(operation =="kali"){ 
                let total = numA * numB;
                return total;
             }
        }
    
   
}

console.log(calculator(2,"3","kali"));
console.log(calculator(2,9,"tambah"));


// Expression function
let name_lengkap = "Kelvin Samuel Rinaldo Situmorang";
const countVocal = function(Name){
    var sum = 0;
    for (let index = 0; index < Name.length; index++) {
        if (Name[index] == 'a' || Name[index] == 'i'  || Name[index] == 'u' || Name[index] == 'e' || Name[index] == 'o' ){
            sum++
        }
        
    }
    total = sum;
    return total;
}


    console.log(countVocal(name_lengkap));
