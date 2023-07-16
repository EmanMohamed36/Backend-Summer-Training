const readline = require("readline");
const cal = require("./cal");

const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const validOperation = ["*" , "-" , "/" , "+"];
calcInterface.question("Enter The First Number: " , (firstInput)=>{
    const firstNumber = Number(firstInput);
    if(isNaN(firstNumber)) 
    {
        console.log("invalid input,please try again");
        return calcInterface.close();
    }
    calcInterface.question("Enter The Operation : " , (operationInput)=>{
        if(!validOperation.includes(operationInput))
        {
            console.log("invalid operation");
            return calcInterface.close();
        }
    
        calcInterface.question("Enter The Second Number: " , (secondInput)=>{
            const secondNumber = Number(secondInput);
            if(isNaN(secondNumber)) 
            {
                console.log("invalid input,please try again");
                return calcInterface.close();
            }
        
            const result = cal.calclogic(firstNumber,operationInput,secondNumber);
            
            console.log(`Your Result : ${result}`);

            
        });
    });
});



