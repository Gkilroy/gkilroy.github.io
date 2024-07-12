document.getElementById("btnReset").addEventListener("click", function(event)
{
        event.preventDefault();

        console.log("** reset button click");

});

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

function vlaidate_form4()
{

    var elename = document.getElementById("txtname");
    let elephone = document.getElementById("txtphone");
    const eleemail = document.getElementById("txtemail");
    const elecomment = document.getElementById("txtcomment");

    const ele_error_message = document.querySelector(".errorMessage");
    //const ele_error_message = document.querySelector("#errorMessage");
    //const ele_error_message = document.getElementById("errorMessage");

    const ele_name_error = document.querySelector(".nameError");

    let _msg = "";

    //phone is optional - no evaluate phone field

    //* can also add/remove class - if 2 more classes
    ele_name_error.style.display = "none";

    //x === 5, validates that x and 5 are the same time ie: number then validates that x is equal to 5
    if (elename.value === "")
    {
        _msg = "* please enter a valid name";
        ele_error_message.innerHTML = "<b>" + _msg  + "</b>";

        //* can also add/remove class - if 2 more classes
        ele_name_error.style.display = "block";
        return false;
    }
    //x==5, only validates that x is equal to 5
    else if (eleemail.value == "")
    {
        _msg = "* please enter a valid email";
        ele_error_message.innerText = "<b>" +  _msg  + "</b>";

        return false;
    }

    //continue form submit
    return true;
}

function vlaidate_form5()
{

    var elename = document.getElementById("txtname");
    let elephone = document.getElementById("txtphone");
    const eleemail = document.getElementById("txtemail");
    const elecomment = document.getElementById("txtcomment");

    const ele_error_message = document.querySelector(".errorMessage");
    //const ele_error_message = document.querySelector("#errorMessage");
    //const ele_error_message = document.getElementById("errorMessage");

    const ele_name_error = document.querySelector(".nameError");

    const ele_form_error_list = document.querySelector(".form-Field-Error-List");
    //const ele_form_error_list = document.querySelector("#form-Field-Error-List");
    //const ele_form_error_list = document.getElementById("form-Field-Error-List");

    let _form_error_array = [];
    //let _form_error_array = new Array();

    let _msg = "";

    //phone is optional - no evaluate phone field

    //* can also add/remove class - if 2 more classes
    ele_name_error.style.display = "none";

    //x === 5, validates that x and 5 are the same time ie: number then validates that x is equal to 5
    if (elename.value === "")
    {
        _msg = "* please enter a valid name";
        _form_error_array.push(_msg);

        ele_error_message.innerHTML = "<b>" + _msg  + "</b>";

        //* can also add/remove class - if 2 more classes
        ele_name_error.style.display = "block";
        //return false;
    }

    //x==5, only validates that x is equal to 5
    if (eleemail.value == "")
    {
        _msg = "* please enter a valid email";
        _form_error_array.push(_msg);
        ele_error_message.innerText = "<b>" +  _msg  + "</b>";

        //return false;
    }

    if(_form_error_array.length>0){

        //loop through array and display array items in the div

        //- html code string
        let _text = "<ul>";

        for(let i=0; (i<_form_error_array.length);i++)
        {
            _text += "<li>" + _form_error_array[i] + "</li>";
        }

        _text += "</ul>";

        //ele_form_error_list.innerHTML = _text;

        //- dom element code
        let ele_ul = document.createElement("ul");

        for(let i=0; (i<_form_error_array.length);i++)
        {
            let ele_li = document.createElement("li");

            //let ele_text = document.createTextNode(_form_error_array[i]);
            let ele_p = document.createElement("p");
            ele_p.innerText = _form_error_array[i];

            //ele_li.appendChild(ele_text);
            ele_li.appendChild(ele_p);
            ele_ul.appendChild(ele_li);
        }

        //retrieve to html or text output from the ul
        //ele_form_error_list.innerHTML = ele_ul.innerHTML;
        ele_form_error_list.innerHTML = "";
        ele_form_error_list.appendChild(ele_ul);

        //stop submit button
        return false;
    }

    //continue form submit
    return true;
}
