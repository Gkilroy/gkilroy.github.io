
//bind to click event using dom.addEventListener
document.getElementById("btnsearch").addEventListener("click", function(e)
{
        e.preventDefault();
        const output1 = document.getElementById("output1");

        console.log("*btnsearch")
        output1.innerText = "*btnsearch";

});
