//es5+

//--
//-- es5+ object destructoring = create variables from object 
//-- react 
//--
import {log} from "./page2-lib1.js";
import {calc_add, calc_multiply} from "./page2-lib2.js";

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

document.getElementById("btn-calc-example-1").addEventListener("click", (e)=>{
    
    const _function_name = "pagae2::btn-calc-example-1";
    const _output1 = document.getElementById("output1");

    try {
        
        const _ret = calc_add(5,10);

        _output1.innerText = `${_function_name}:: ${_ret}`;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
        log(`${_function_name}::error - ${error}`)
    }
})