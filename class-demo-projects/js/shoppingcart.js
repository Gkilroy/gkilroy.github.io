
let g_shoppingcart = [];


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
   
    var _cartitem = {name:txtaddname.value, price:_price};


    g_shoppingcart.push(_cartitem);

    output1.innerHTML = "";

    let _total = 0.0;
    let _str_items = "";

    //update ui/li with cart item 
    for(let i=0;i<g_shoppingcart.length;i++)
    {
        //use Dom.CreateElement, appendChild 
        //output1.innerHTML = output1.innerHTML + JSON.stringify(g_shoppingcart[i]) + "<br/>";
        _str_items += "<div><a href='#' onclick='return btndeleteitem(" + i + ")'>[x]</a> " + 
        "<span> " + g_shoppingcart[i].name + " </span>" + 
        "<span> | " + g_shoppingcart[i].price + " </span></div>";

        _total = _total + _price;
    }

    output1.innerHTML = _str_items;

    //lbltotal.innerText = _total.toFixed(2).toString();
    lbltotal.innerText = _total.toString();
    
    txtaddname.value = "";
    txtaddprice.value = "";



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

    _msg = "btnaddnewitem"
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

        //refresh list - re-display list item in screen 

        alert("item " + index + " | "  + _item_name);
    }
}