let g_shoppingcart = [];

//bind to click event using dom.addEventListener
/*
    - function parameters , passing functions into a function as parameter 
    - ananymous functions - functions without a name 
    - callback functions 
    - functional programming - defiing functions within another function
    - javascript closure     
*/
document.getElementById("btnsearch").addEventListener("click", function(e)
{
    //can cancel or resume button click 
    //continue button click 
    e.preventDefault();
    const output1 = document.getElementById("output1");
    console.log("* btnsearch")
    output1.innerText = "* btnsearch ";
});

document.getElementById("btnclear").addEventListener("click", clearButton);

function clearButton(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    let = _msg = "btnclear";   
    console.log(_msg)
    output1.innerText = _msg;
}

document.getElementById("btnclose-addnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const additemform = document.querySelector(".addnewitem");

    _msg = "btnclose-addnew"
    console.log(_msg)
    //output1.innerText = _msg;

    additemform.style.display = "none";
});

document.getElementById("btnaddnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const addnewmessage = document.getElementById("addnewitem-message");
    const txtaddname = document.getElementById("txtname-new");
    const txtaddprice = document.getElementById("txtprice-new");
    const lbltotal = document.querySelector("#lbltotal");
    //validate only add max 10 items 

    if(txtaddname.value === "")
    {
        const _msg = "* please enter a name";
        addnewmessage.innerText = _msg;
        return false;
    }
    else if(txtaddprice.value === "")
    {
        const _msg = "* please enter a price";
        addnewmessage.innerText = _msg;
        return false;
    }

    //convert string to number - parseFloat()
    const _price = parseFloat(txtaddprice.value);
    //format number to fixed to 2 decimal places, _price.toFixed(2)
    //validate number isNan() - ie: abc, 1ab
    //error handling 

    //create a new shoppingcart entry/object ie: {name, price}
    //javascript object = json document, NOSQL ie: mongodb and other systems 
    var _cartitem = {name:txtaddname.value, price:_price};

    //add shoppingcart entry/object to ul/list
    //refactor:  es5+ ..rest operator to append items to array 
    g_shoppingcart.push(_cartitem);

    output1.innerHTML = "";

    let _total = 0.0;
    let _str_items = "";
    let _item_price = 0.0;

    //update ui/li with cart item 
    for(let i=0;i<g_shoppingcart.length;i++)
    {
        _item_price = parseFloat(g_shoppingcart[i].price);
        //use Dom.CreateElement, appendChild 
        //output1.innerHTML = output1.innerHTML + JSON.stringify(g_shoppingcart[i]) + "<br/>";
        _str_items += "<div><a href='#' onclick='return btndeleteitem(" + i + ")'>[x]</a> " + 
        "<span> " + g_shoppingcart[i].name + " </span>" + 
        "<span> | " + g_shoppingcart[i].price + " </span></div>";

        _total = _total + _item_price;
    }

    output1.innerHTML = _str_items;

    //lbltotal.innerText = _total.toFixed(2).toString();
    lbltotal.innerText = _total.toString();
    
    txtaddname.value = "";
    txtaddprice.value = "";

    //
    //refactor forloop to es5+ functional programming/cosure: map, reduce, filter, other 
    //- nest loops, nested funtions, recursive programming, nested json object
    //

    //update total field 

    _msg = "btnaddnew"
    console.log(_msg)
    //output1.innerText = _msg;
});

document.getElementById("btnclear-addnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    _msg = "btnclear-addnew"
    console.log(_msg)
    //output1.innerText = _msg;
});

document.getElementById("btnaddnewitem").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const additemform = document.querySelector(".addnewitem");

    _msg = "bntaddnewitem"
    console.log(_msg)
    //output1.innerText = _msg;

    additemform.style.display = "block";

});

function btndeleteitem(index)
{
   
    const _item_name = g_shoppingcart[index].name;

    if(confirm("delete item  " + index + "| " + _item_name + "?"))
    {
        //delete item from arry  
        //refactor: es5+ delete array item 
        //splice add, update, delete 
        g_shoppingcart.splice(index,1);

        //refresh list - re-display list item in screen 
        //@@@ duplicate code - refactor to function @@@

        let _item_price = 0.0
        let _total = 0.0;
        let _str_items = "";
    
        output1.innerHTML = "";

        //update ui/li with cart item 
        for(let i=0;i<g_shoppingcart.length;i++)
        {
            _item_price = parseFloat(g_shoppingcart[i].price);
            //use Dom.CreateElement, appendChild 
            //output1.innerHTML = output1.innerHTML + JSON.stringify(g_shoppingcart[i]) + "<br/>";
            _str_items += "<div><a href='#' onclick='return btndeleteitem(" + i + ")'>[x]</a> " + 
            "<span> " + g_shoppingcart[i].name + " </span>" + 
            "<span> | " + g_shoppingcart[i].price + " </span></div>";
    
            _total = _total + _item_price;
        }
    
        output1.innerHTML = _str_items;    
        lbltotal.innerText = _total.toString();

        alert("item " + index + " | "  + _item_name);

        //@@@ duplicate code - refactor to function @@@
    }
}