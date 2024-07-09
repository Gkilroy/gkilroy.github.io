/*

validation requirements
------------------------------------
- name 
    required fields not empty
    text field max 30 characters

- email 
    required fields not empty
    text field max 30 characters
*/
function validate_form(){
var elename = document.getElementById("txtname");

let elephone = document.getElementById("txtphone");

const eleemail = document.getElementById("txtemail");

const elecomment = document.getElementById("txtcomment");

if(elecomment.value =="")
    {
        alert("* please enter a valid name")
        return false;

    }
    
    return true;
}
