//js global scope 
//window - global scope 
// also called hoisting 

//-- code reuse----

//-- libary include, dependency 
//-- libary include, secuence 
//-- libary include, namespace and same function/class names  
//--- other 

document.getElementById("btn-log-example-1").addEventListener("click", ()=>{

    const _function_name = "page1::btn-log-example-1";
    const _output1 = document.getElementById("output1");

    try {
        
        log(`log::${_function_name}`);

        _output1.innerText = _function_name;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
        log(`${_function_name}::error - ${error}`)
    }
});


document.getElementById("btn-calc-example-1").addEventListener("click", ()=>{

    const _function_name = "page1::btn-calc-example-1";
    const _output1 = document.getElementById("output1");

    try {
        
        const _ret = calc_add(5,10);
        
        _output1.innerText = `page1::calc_add: ${_ret}`;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
        log(`${_function_name}::error - ${error}`)
    }
});