const readline = require("readline");
const valid = require("./valid");

const validInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



validInterface.question("Enter Your Full Name: " , (firstInput) => {
    const fullName = String(firstInput);
    
    validInterface.question("Enter Your Email: " , (secondInput) => {
        
        const email = String(secondInput)
    
        validInterface.question("Enter Your Password: " , (thirdInput) => {
            const password = String(thirdInput);
            
            validInterface.question("Enter Your Age: " ,(fourthInput) => {
                const age = Number(fourthInput);
        
            validInterface.question("Enter Your Gender: " , (fifthInput) => {
                const gender = String(fifthInput);
               
               
                const result = valid.validFunction(fullName,email , password , age , gender);
                
                console.log(result);
            
            
            
            });
        
        });
            
        });
    });
});



