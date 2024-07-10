function vlaidate_form1()
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


function vlaidate_form2()
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


function vlaidate_form3()
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
    const ele_nme_error = document.querySelector(".errorMessage");
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
        ele_nme_error.innerText = "<b>" +  _msg  + "</b>";

        return false;
    }

    //cancel form submit
    //return false;

    //continue form submit
    return true;
}