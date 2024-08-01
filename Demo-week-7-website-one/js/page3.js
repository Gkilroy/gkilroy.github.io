
document.getElementById("btn-oop-obj-ex1").addEventListener("click", (e)=>{
    
    const _function_name = "page3::btn-oop-obj-ex1";
    const _output1 = document.getElementById("output1");

    try {        

        _output1.innerText = oop_obj_es4_ex1();

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
    }
});

document.getElementById("btn-oop-obj-ex2").addEventListener("click", (e)=>{
    
    const _function_name = "page3::btn-oop-obj-ex2";
    const _output1 = document.getElementById("output1");

    try {        

        _output1.innerText = oop_obj_es4_ex2();

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
    }
});

document.getElementById("btn-oop-obj-func-ex1").addEventListener("click", (e)=>{
    
    const _function_name = "page3::btn-oop-obj-func-ex1";
    const _output1 = document.getElementById("output1");

    try {        

        _output1.innerText = _function_name;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
    }
});

document.getElementById("btn-oop-es5-class-ex1").addEventListener("click", (e)=>{
    
    const _function_name = "page3::btn-oop-es5-class-ex1";
    const _output1 = document.getElementById("output1");

    try {        

        _output1.innerText = _function_name;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::error - ${error}`;
    }
});