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
    output1.innerText = _msg;

    additemform.style.display = "none";
});

document.getElementById("btnaddnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");

    const addnewmessage = document.getElementById("addnewitem-message");
    const addname = document.getElementById("txtname-new");
    const addprice = document.getElementById("txtprice-new");

    let shoppingcart = [];

    if (txtaddname.value === "")
    {
        const _msg = "*please enter a name";
        addnewmessage.innerText = _msg;
        e.stopImmediatePropagation();

    }
    else if(txtaddprice.value === "")
    {
        const _msg = "*please enter a price";
        addnewmessage.innerText = _msg;
        e.stopImmediatePropagation();
    }
 
    const _price = parseFloat(txtaddprice.value);

    var_cartitem = {name:textaddname, price:_price};

    _shoppingcart.push(_cartitem);

    for(let i=0;i<_shoppingcart.length;i++)
    {
        output1.innerHTML = output1.innerHTML + _shoppingcart[i] + "<br/>"
        _total = _total + _price;
    }

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
    output1.innerText = _msg;
});

document.getElementById("btnaddnewitem").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const additemform = document.querySelector(".addnewitem");

    _msg = "bntaddnewitem"
    console.log(_msg)
    output1.innerText = _msg;

    additemform.style.display = "block";

});