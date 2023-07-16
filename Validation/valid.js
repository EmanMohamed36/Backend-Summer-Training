

function validName(FullName)
{
    let name = FullName;
    if(name.length >= 6) return true;
    else
    {
        console.log("Invalid Name,Name should at least 6 chars");
        return false;
    }
}
function validEmail(Email)
{
    

    let email = Email;
    const regex =  new RegExp("^[a-z0-9A-Z_.]+@((gmail|yahoo)).com");
    if(regex.test(email)) return true;
    else 
    {
        console.log("Invalid Email,Email should be at yahoo.com or at gmail.com");
        return false;
    }

    // another code for check email 

    // let count = 0;
    // for(let i = 0 ; i < email.length ; i++)
    // {
    //     if(email[i] == '@')
    //     {

    //         let x = email.substring( i + 1 , i + 6);
    //         // console.log(x);
    //         if(x == 'gmail' || x == 'yahoo')
    //         {
    //             count++;
    //         } 
    //     }
        
    // }
    // if(count == 1) return true;
    // else
    // {
    //     console.log("Invalid Email,Email should be at yahoo.com or at gmail.com");
    //     return false;
    // }


}
function validPassword(Password)
{
    let pass = Password;
    if(pass.length >= 6) return true;
    else
    {
        console.log("Invalid password,password should at least 6 chars");
        return false;
    }
}
function validAge(Age)
{
    let age = Age;
    if(age >= 18) return true;
    else
    {
        return("Invalid Age,Age should be at least 18 years old");
      //  return false;
    }
}
function validGender(Gneder)
{
    let gender = Gneder;
    if(gender == "female" || gender == "male")
        return true;
    else
    {
        return("Invalid Gneder,Gender should be female or male with small letter");
        return false;
    }
}
function validFunction (FullName , Email , Password ,  Age , Gneder){
    
    if(validName(FullName) && validEmail(Email)  && validPassword(Password) && validAge(Age) && validGender(Gneder))
    {
        return("Accepted Validation!!");
    }
    else
    {
        return('' + "Please try again!!");
    }
    
   // console.log("hi");
}
module.exports =
{
    validFunction
}