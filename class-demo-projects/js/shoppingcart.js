
//bind to click event using dom.addEventListener
document.getElementById("btnsearch").addEventListener("click", function(e)
{
        e.preventDefault();
        const output1 = document.getElementById("output1");

        console.log("*btnsearch")
        output1.innerText = "*btnsearch";

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

        _msg = "btnclose-addnew"
        console.log(_msg)
        output1.innerText = _msg;

        additemform.style.display = "none";


});

document.getElementById("btnaddnew").addEventListener("click", function(e)
{
        e.preventDefault();
        const output1 = document.getElementById("output1");

        _msg = "btnaddnew"
        console.log(_msg)
        output1.innerText = _msg;

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

        _msg = "btnaddnewitem"
        console.log(_msg)
        output1.innerText = _msg;

        additemform.style.display = "block";

});