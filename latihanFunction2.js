function calculator (numA,numB,operation){
    if(operation == "tambah"){
        if(typeof numA != "number" || typeof numB != "number"){
            console.log("bukan angka")  
        }else
       { let total = numA + numB
        console.log(numA,"+",numB,"=",total)}
    }
    else if(operation == "kurang"){
        if(typeof numA != "number" || typeof numB != "number"){
            console.log("bukan angka")  
        }else
       { let total = numA - numB
        console.log(numA,"-",numB,"=",total)}
    }
    else if(operation =="kali"){
        if(typeof numA != "number" || typeof numB != "number"){
            console.log("bukan angka")  
        } else
      {  let total = numA * numB
        console.log(numA,"x",numB,"=",total)}
    }
    else if(operation =="bagi"){
        if(typeof numA != "number" || typeof numB != "number"){
            console.log("bukan angka")  
        } else
        {let total = numA / numB
        console.log(numA,"/",numB,"=",total)
    }}
   
}

calculator(27,3,"kali");
calculator(4,5,"tambah");
calculator(9,5,"kurang");
calculator(4,"","bagi");
calculator(4,4,"bagi")



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
