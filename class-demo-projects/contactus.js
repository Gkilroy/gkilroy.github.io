function validate_form1()
{

    //es1..4 -- updatable variable
    var elename = document.getElementById("txtname");

    //es5+ // updatable variable
    let elephone = document.getElementById("txtphone");

    //es5+ // readonly variable
    const eleemail = document.getElementById("txtemail");

    //es5+ // readonly variable
    const elecomment = document.getElementById("txtcomment");

    //x === 5, validates that x and 5 are the same time ie: number then validates that x is equal to 5
    if (elename.value === "")
    {
        //if true
        alert("* please enter a valid name");

        //cancel form submit
        return false;
    }

    //phone is optional - no evaluate phone field

    //x==5, only validates that x is equal to 5
    if (eleemail.value == "")
    {
        //if true
        alert("* please enter a valid email");

        //cancel form submit
        return false;
    }

    //cancel form submit
    //return false;

    //continue form submit
    return true;
}


function validate_form2()
{

    //es1..4 -- updatable variable
    var elename = document.getElementById("txtname");

    //es5+ // updatable variable
    let elephone = document.getElementById("txtphone");

    //es5+ // readonly variable
    const eleemail = document.getElementById("txtemail");

    //es5+ // readonly variable
    const elecomment = document.getElementById("txtcomment");

    //phone is optional - no evaluate phone field

    //x === 5, validates that x and 5 are the same time ie: number then validates that x is equal to 5
    if (elename.value === "")
    {
        //if true
        alert("* please enter a valid name");

        //cancel form submit
        return false;
    }
    //x==5, only validates that x is equal to 5
    else if (eleemail.value == "")
    {
        //if true
        alert("* please enter a valid email");

        //cancel form submit
        return false;
    }

    //cancel form submit
    //return false;

    //continue form submit
    return true;
}


function validate_form3()
{

    //es1..4 -- updatable variable
    var elename = document.getElementById("txtname");

    //es5+ // updatable variable
    let elephone = document.getElementById("txtphone");

    //es5+ // readonly variable
    const eleemail = document.getElementById("txtemail");

    //es5+ // readonly variable
    const elecomment = document.getElementById("txtcomment");

    //const ele_nme_error = document.getElementById("errorMessage");
    const ele_name_error = document.querySelector(".errorMessage");
    //const ele_nme_error = document.querySelector("#errorMessage");

    let _msg = "";

    //phone is optional - no evaluate phone field

    //x === 5, validates that x and 5 are the same time ie: number then validates that x is equal to 5
    if (elename.value === "")
    {

        _msg = "* please enter a valid name";
        ele_nme_error.innerHTML = "<b>" + _msg  + "</b>";

        return false;
    }
    //x==5, only validates that x is equal to 5
    else if (eleemail.value == "")
    {
        _msg = "* please enter a valid email";
        ele_name_error.innerText = "<b>" +  _msg  + "</b>";

        return false;
    }

    //cancel form submit
    //return false;

    //continue form submit
    return true;
}
function validate_form4()
{
    

    var elename = document.getElementById("txtname");
    let elephone = document.getElementById("txtphone");
    const eleemail = document.getElementById("txtemail");
    const elecomment = document.getElementById("txtcomment");

    const ele_error_message = document.querySelector(".errorMessage");
    
    const ele_name_error = document.querySelector(".nameError");

    let _msg = "";

    ele_name_error.style.display = "none";

    if (elename.value === "")
    {

        _msg = "* please enter a valid name";
        ele_error_message.innerHTML = "<b>" + _msg  + "</b>";
    
        ele_name_error.style.display = "block";
        return false;
    }

    else if (eleemail.value == "")
    {
        _msg = "* please enter a valid email";
        ele_error_message.innerText = "<b>" +  _msg  + "</b>";

        return false;
    }
   

    return true;

}
function validate_form5()
{
    

    var elename = document.getElementById("txtname");
    let elephone = document.getElementById("txtphone");
    const eleemail = document.getElementById("txtemail");
    const elecomment = document.getElementById("txtcomment");

    const ele_error_message = document.querySelector(".errorMessage");
    
    const ele_name_error = document.querySelector(".nameError");

    const ele_form_error_list = document.querySelector(".form-Field-Error-List");

    let_form_error_array = [];

    let _msg = "";

    //add or remove class -if 2 or more classes
    ele_name_error.style.display = "none";

    if (elename.value === "")
    {

        _msg = "* please enter a valid name";
        _form_error_array.push(_msg);

        ele_error_message.innerHTML = "<b>" + _msg  + "</b>";
        // can also remove add or remove class
        ele_name_error.style.display = "block";
        //return false;
    }

    if (eleemail.value == "")
    {
        _msg = "* please enter a valid email";
        _form_error_array.push(_msg);
        ele_error_message.innerText = "<b>" +  _msg  + "</b>";

        //return false;
    }
   
    if(_form_error_array.length>0){
//loop through array and display array items
//- html code string
//- domelement code
let text = "<ul>";

for(let i=0; (i<_form_error_array.length);i++)
    {
_text += "<li>" + _form_error_array[i]+ "</li>";

}
_text += "</ul>";
ele_form_error_list.innerHTML = _text;
//stop submit button
        return false;
    }

    return true;

}