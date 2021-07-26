//Get the string from the Page
//Controller function
function getString(){

   document.getElementById("alert").classList.add("invisible");
    
   let userString = document.getElementById("userString").value;
   
   let revString = reverseString(userString);

   //alert("Reversed String is:" + revString);
    displayString(revString);
}

// Reverse the string
//Logic Function
function reverseString(userSting){

    let reverseString = [];

    //

    for (let index = userSting.length - 1; index >= 0; index--) {
        reverseString += userSting[index];
    }

    return reverseString;
}

//Display the reversed string to user
//View function
function displayString(revString){

    //write msg to page
    document.getElementById("msg").innerHTML = `Your reversed string: ${revString}`;
    //show alert box
    document.getElementById("alert").classList.remove("invisible");

}