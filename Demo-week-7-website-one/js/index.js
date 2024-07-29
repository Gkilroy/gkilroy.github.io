//----------------------------------
//-- global scope -- 
//----------------------------------

//javasript callback- javascipt calls function when button is clicked
//-or- ananymous function - function without a name
//-or- es5+ array (e) => {}
//functional programming/closure - access data from global scope or local scope

//
//functional programming - used in recursive programming ie: looping algorithems and other development
//- arrays, list, etc..
// often used in react 
// array.map - map - high order functional method including closure 
// data structures, data analysys, ai/ml
// ie: other: forEach, find, filter
//

//
// OOP - multi system re-useable components, ui/libraries 
//


//
//es5+ optional: asnc/await - promise - non blocking function
//es5+ array function  = (e) => {}
//
document.getElementById("btn-ds1").addEventListener("click", function(e){

    //function local scope 

    //functional testing / behaviorial testing - testing ui/ux 
    //ie: selinium - 

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-ds1";

    try {
        
        //data structure example 1
        //class or code structure used to access/create-update/delete in-memory or database data
        //array, list, set, map, other 

        _output1.innerText = _function_name;

    } catch (error) {
        
        //es5+ : template literal ie: react 
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});