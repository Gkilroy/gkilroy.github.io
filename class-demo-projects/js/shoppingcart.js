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
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    console.log("* btnsearch")
    //output1.innerText = "* btnsearch ";

    if(txtsearch.value === ""){
        searchmessage.innerText = "* please enter search keyword(s)"
        return false;
    }
    else {
        //es5+ string template literal 
        searchmessage.innerText = `* searching for: ${txtsearch.value}`;
    }

    //const _searchitems = [];

    //search for item in array 
    //for, forEach, filter,opt: map 
    /*for(let i=0;i<g_shoppingcart.length;i++)
    {
        //vallidate if item exist in array 
        //example-1: name="item one".indexOf("one")
        //index = 5
        //example-1: name="item one".indexOf("two")
        //index = -1
        const _item_found_at_index = g_shoppingcart[i].name.toLowerCase().indexOf(txtsearch.value.toLowerCase());

        if(_item_found_at_index > -1){
            _searchitems.push(g_shoppingcart[i]);            
            //es5+
            //spread operator - get all items from existing array , append new items to the end of the array 
            //_searchitems = [..._searchitems,g_shoppingcart[i]];
        }
    }
    */
    
    //es5+
    //--
    //-- hi order functions - functional programming - closure 
    //-- similar to for loop 
    //--
    
    //es5+
    //function findArrayItems(item, index, arr)    
    //g_shoppingcart.forEach(function(item,index,arr) {
    //array.foreach - similar to array.map() -- always retruns same number of items 
    /*
    g_shoppingcart.forEach(function(item) {

        const _item_found_at_index = item.name.toLowerCase().indexOf(txtsearch.value.toLowerCase());

        if(_item_found_at_index > -1){
            _searchitems.push(item);            
            //es5+
            //spread operator - get all items from existing array , append new items to the end of the array 
            //_searchitems = [..._searchitems,g_shoppingcart[i]];
        }
    });
    */

    let _searchitems = null; //[]

    //es5+ 
    //high order funciton filter  ie: forEach, map
    //_searchitems = g_shoppingcart.filter(function(item, index, arr){
    _searchitems = g_shoppingcart.filter(function(item) {
    
        const _item_found_at_index = item.name.toLowerCase().indexOf(txtsearch.value.toLowerCase());

        /*
        if(_item_found_at_index > -1){
            return true;
        }
        else
        {
            return false;
        }
        */
    
        //1 line or in-line of statement 
        return (_item_found_at_index > -1) ? true : false;

    });

    if(_searchitems.length == 0)
    {
        //es5+ 
        searchmessage.innerText = `* no items found`;
        return false;
    }

    //refresh ui with search items found
    //@@ -- duplicate code -- 
    
    let _item_price = 0.0
    let _total = 0.0;
    let _str_items = "";

    output1.innerHTML = "";

    //update ui/li with cart item 
    for(let i=0;i<_searchitems.length;i++)
    {
        _item_price = parseFloat(_searchitems[i].price);
        //use Dom.CreateElement, appendChild 
        //output1.innerHTML = output1.innerHTML + JSON.stringify(g_shoppingcart[i]) + "<br/>";
        _str_items += "<div><a href='#' onclick='return btndeleteitem(" + i + ")'>[x]</a> " + 
        "<span> " + _searchitems[i].name + " </span>" + 
        "<span> | " + _searchitems[i].price + " </span></div>";

        _total = _total + _item_price;
    }

    output1.innerHTML = _str_items;    
    lbltotal.innerText = _total.toString();

    //-- update total 
    //@@ -- duplicate code 

});

document.getElementById("btnclear").addEventListener("click", clearButton);

function clearButton(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const txtsearch = document.getElementById("txtsearch");
    const searchmessage = document.getElementById("searchmessage");

    txtsearch.value = "";
    searchmessage.innerText = "";

    let = _msg = "btnclear";   
    console.log(_msg)
    //output1.innerText = _msg;

    //refresh list - re-display list item in screen 
    //@@@ duplicate code - refactor to function @@@
    
    let _item_price = 0.0
    let _total = 0.0;
    let _str_items = "";

    output1.innerHTML = "";

    //
    //- forEach, Map, 
    //
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

    //@@@ duplicate code - refactor to function @@@
    
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
    //-- unique id 
    var _cartitem = {id: (new Date()).getTime(),name:txtaddname.value, price:_price};

    //---object destructoring -- 
    //creating variables from javascript object 
    //var {name, price} = {name:txtaddname.value, price:_price};
    
    //array distructoring 
    //create variables from array elements 
    //[item1, item2] = arr();
    //add shoppingcart entry/object to ul/list
    //refactor:  es5+ ..rest operator to append items to array 
    g_shoppingcart.push(_cartitem);

    output1.innerHTML = "";

    let _total = 0.0;
    let _str_items = "";
    let _item_price = 0.0;

    //update ui/li with cart item 
    //--- @@@ duplicate ui update code @@@ ---
    //-- refactr: functional programming/closure 
    //loop through array: arry.map, filer, foreach,find,  other 

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

    //@@-- duplicate code -- 

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
   //
   //functional programming, closure, used for nexted loops , recursion
   //refactor: es5+, map, filter, find, indexof, foreach using unique id 
   //combine or nest - map(filter) ie: nested for loops, do loops, custom functions etc..
   //
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

        //@@@ duplicate code - refactor to function @@@

        alert("item " + index + " | "  + _item_name);

    }
}