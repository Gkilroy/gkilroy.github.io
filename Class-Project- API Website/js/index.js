function closenavmenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

document.getElementById("btnsearch").addEventListener("click",async function(e) {

    const divcontent = document.getElementById("divcontent");
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    const _function_name = "btnsearch";

    try 
    {
        
        e.preventDefault();

        if(txtsearch.value === ""){
            searchmessage.innerText = "* please enter search keyword(s)"
            return false;
        }
        else {
            searchmessage.innerText = `* searching for: ${txtsearch.value}`;
        }
    
        const _url1 = "./data/giphy2.json";
       


        const _giphy_api_key = "giphy-key";

        const _gifyapiurl = 'https://api.giphy.com/v1/gifs/qXNwOLg52yZT8guE1l47A0HLgKeinyFf';
        const _apiKey = `&api_key=${_giphy_api_key}`;
        const _query = `&q=${txtsearch.value}`;

        const _url = `${_gifyapiurl}${_apiKey}${_query}`;
        
        fetch(_url1)
        .then(response => response.json())
        .then(data => {
    
           divcontent.innerHTML = "";

           //-- refactor: html string or dom createelement, appendchile...
           let _img_list = "";

           data.data.forEach((item,index) => {

                if(index <= 11)
                    _img_list += `<div class='imagediv'><img src="${item.images.original.url}" width="200" height="100"></div>`;

            });
            
            divcontent.innerHTML = _img_list;
        });
        


    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`;
    }

});