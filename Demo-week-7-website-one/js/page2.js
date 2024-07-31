//es5+

import {log} from "./page2-lib1.js";

//es5+
document.getElementById("btn-log-example-1").addEventListener("click", (e)=>{
    
    const _function_name = "pagae2::btn-log-example-1";
    const _output1 = document.getElementById("output1");

    try {
        
        log(`log::${_function_name}`);

        _output1.innerText = _function_name;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
        log(`${_function_name}::error - ${error}`)
    }
})