
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