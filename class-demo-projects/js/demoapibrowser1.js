document.getElementById("btnsearch1").addEventListener("click",async function(e) {

    const output1 = document.getElementById("output1");
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    const _function_name = "btnsearch1";

    //error handling - if an error occurs goto cath statement and print error 

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
    
        //output1.innerText = _function_name;

        const _url1 = "./data/giphy1.json";

        //https://developers.giphy.com/docs/api/
        //https://developers.giphy.com/explorer/

        const _giphy_api_key = "giphy-key";

        const _gifyapiurl = 'https://api.giphy.com/v1/gifs/search?';
        const _apiKey = `&api_key=${_giphy_api_key}`;
        const _query = `&q=${txtsearch.value}`;

        //other giphy parameters
        //- limit , rating, etc..

        const _url = `${_gifyapiurl}${_apiKey}${_query}`;

        searchmessage.innerText = `${_url}`;

        //output1.innerText = _url;

        //promise.then() - non nested api request 

        //async/await - multi/nested api , multiple api calls 

        //disply content - for, forEach, map, filter, other         
        //display max ie: 10 results 

        //-- html string or dom createelement, appendchile...

        fetch(_url1)
        .then(response => response.json())
        .then(data => {
    
           //let _img_list = "<div style='display:flex'>";
           let _img_list = "<div>";

           data.data.forEach((item,index) => {

            if(index <= 4)
                _img_list += `<div><img src="${item.images.original.url}" width="200" height="80"></div>`;
           });

           _img_list += "</div>";

           output1.innerHTML = _img_list;

        });


    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`;
    }

});

document.getElementById("btnsearch2").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    const _function_name = "btnsearch2";

    //error handling - if an error occurs goto cath statement and print error 

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

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`;
    }

});

document.getElementById("btnclear").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const searchmessage = document.querySelector(".searchmessage");
    const _function_name = "btnclear";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        searchmessage.innerText = "";
        txtsearch.value = "";

        //output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});



document.getElementById("btnjqueryex1").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnjqueryex1";

    //error handling - if an error occurs goto cath statement and print error 
    try 
    {
    
        //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_get
        
        e.preventDefault();

        const _url = "./data/demo1.json";
        //const _url = "./data/demo2.json";
        //const _url = "https://jsonplaceholder.org/posts/1";

        $.get(_url, function(data, status){
            
            _data = "Data: " + JSON.stringify(data) + "\nStatus: " + status;

            //
            //convert data to json object - JSON.parse(data)
            //
            //for, forEach, map, find, filter, other
            //

            output1.innerText = _data;
          });

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});


document.getElementById("btnjqueryex2").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnjqueryex2";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});

document.getElementById("btnfetchex1").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnfetchex1";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        //
        //-- default fecth implement proimse - callback use then() method when the data is available 
        //-- then() allows code to continue without blocking
        //-- ui is no-blocking 
        //-- can use asyn/await insted of then()
        //

        //const _url = "./data/demo1.json";
        //const _url = "./data/demo2.json";
        //const _url = "https://jsonplaceholder.org/posts/1";
        const _url = "./data/giphy1.json";

        //https://developers.giphy.com/docs/api/
        //https://developers.giphy.com/explorer/

        const _gifyapiurl = 'https://api.giphy.com/v1/gifs/search?';
        const _apiKey = '&api_key=gify-api-key';
        const _query = '&q=cars'
        //const _url = `${_gifyapiurl}${_apiKey}${_query}`;

        //giphy.data[i].images.original.url

        fetch(_url)
        .then(response => response.json())
        .then(data => {
    
           //output1.innerText = JSON.stringify(data);

           const _row = data.data[0];
           const _image_url = _row.images.original.url;

           //output1.innerText = JSON.stringify(_row);
           //output1.innerText = _image_url;

           //const _img = `<div><img src="${_image_url}" width="200" height="80"></div>`;

           let _img_list = "";

           data.data.forEach((item,index) => {

            if(index <= 4)
                _img_list += `<div><img src="${item.images.original.url}" width="200" height="80"></div>`;

                /*
                if(index > 4){
                    return
                }
                */
                
                //if(index > 4)  return;
                //console.log(`** foreach.index: ${index}`)
                if(index > 4) 
                    return false;
           });

           output1.innerHTML = _img_list;

            //
            //convert data to json object - JSON.parse(data)
            //
            //for, forEach, map, find, filter, other
            //

        });

        /*
            fetch('https://jsonplaceholder.org/users')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                console.log(users);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        */

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});


document.getElementById("btnfetchex2").addEventListener("click",async function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnfetchex2";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        //const _url = "./data/demo1.json";
        //const _url = "./data/demo2.json";
        //const _url = "./data/demo2.json";        
        //const _url = "https://jsonplaceholder.org/posts/1";
        const _url = "./data/giphy1.json";      

        //https://developers.giphy.com/docs/api/
        //https://developers.giphy.com/explorer/

        const _gifyapiurl = 'https://api.giphy.com/v1/gifs/search?';
        const _apiKey = '&api_key=gify-api-key';
        const _query = '&q=cars'
        //const _url = `${_gifyapiurl}${_apiKey}${_query}`;

        //giphy.data[i].images.original.url

        //wait for data to be returned 
        const response = await fetch(_url);
        const data = await response.json();
        
        //output1.innerText = JSON.stringify(data);
        
        const _row = data.data[0];
        const _image_url = _row.images.original.url;

        //output1.innerText = JSON.stringify(_row);
        output1.innerText = _image_url;

        //
        //convert data to json object - JSON.parse(data)
        //
        //for, forEach, map, find, filter, other
        //
        

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});