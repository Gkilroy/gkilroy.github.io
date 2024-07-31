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
//es5+ async / await - promise 
document.getElementById("btn-array-map-1").addEventListener("click", function(e){

    //function local scope 

    //functional testing / behaviorial testing - testing ui/ux 
    //ie: selinium - 

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-array-map-1";

    try {
        
        //data structure example 1
        //class or code structure used to access/create-update/delete in-memory or database data
        //array, list, set, map, other 
        
        //hi-order functional progamming/closure - const/readonly array input and generate output
        //forEach, filter, find, indexOf, Other
        //map, reducr

        //-- es6+ Map, Set class - in-memory dataset 
        //- data can be from file or rest api 

        //data = dataset - json dataset
        
        //array = list 
        let _array1 = [1,2,5,7,10]
        const _array2 = ["one", "two", "three"]

        //object = {} - ie: class in javascript ies1-4 = class syntax
        //class - id, name = property/field/data 
        //function class - es1-4 syntax 
        const _object1 = {id:1, name:"item one"};

        //combine array and object 
        //- nested dataset 
        const _array3 = [
            {id:1, name:"item one", items:[1,34,8,10]},
            {id:2, name:"item two", items:["one", "two", "three"]},
        ]

        const _customers = [
            {id:1, name:"name one", email:"name1@email.com", phone:"832873"},
            {id:2, name:"name two", email:"name2@email.com"},
            {id:3, name:"name three", email:"name3@email.com", phone:"7943432"}
        ]
        
        //#demo# dataset ie: customers, products, orders

        //#demo-2# - data structure/class to access custmer, products. orders

        //#demo-3# - rest, spread, destructoring 
        
        //#demo-1# -data-structures 
        //- loops, crud - creates, update, delete, search
        //map, set, reduce, foreach, find, filter 

        //
        //array.map - returns same amount of items 
        //-- use in react  
        //-- looping throu all item and return the same number of item 
        //-- do not have to use existing array item
        //use map as forEach or for loop or while loop 
        //-- return a new array or does not update existing array 
        //-- return a new array with same number of items and or a different structure 
        //-- function = es5+ array function = ()=>{}
        //-- es5+ asyn/await = promise 
        let _map1 = _array1.map(function(item){
        //_array1.map(function(item){
            //any valid js function/expression             
            //return 1;
            return (item+1);
        });

        _output1.innerText = JSON.stringify(_array1);
        _output1.innerText += `| ${JSON.stringify(_map1)}`;

    } catch (error) {
        
        //es5+ : template literal ie: react 
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});


document.getElementById("btn-array-reduce-1").addEventListener("click", async (e) => {

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-array-reduce-1";

    try {
        
        let _array1 = [1,2,5,7,10]
        const _array2 = ["one", "two", "three"]

        const _object1 = {id:1, name:"item one"};

        const _array3 = [
            {id:1, name:"item one", items:[1,34,8,10]},
            {id:2, name:"item two", items:["one", "two", "three"]},
        ]

        const _customers = [
            {id:1, name:"name one", email:"name1@email.com", phone:"832873"},
            {id:2, name:"name two", email:"name2@email.com"},
            {id:3, name:"name three", email:"name3@email.com", phone:"7943432"}
        ]        

        //array.reduce - loops through all items and return 1 accumulated resut
        //ie: sum,avg, etc.. math expression result 
        //used in React 

        const _ret_total = _array1.reduce((total,item)=>{
            //any valid math expression
            //return 1;
            //eact time through the loop, total is accumulated or updated with the previous value
            //total = total + item
            return (total + item);
        },0); //optional initial accumulator value 

        _output1.innerText = `${JSON.stringify(_array1)} | total: ${_ret_total}`;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});

document.getElementById("btn-array-map-2").addEventListener("click", async (e) => {

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-array-map-2";

    try {
        
        let _array1 = [1,2,5,7,10]
        const _array2 = ["one", "two", "three"]

        const _object1 = {id:1, name:"item one"};

        const _array3 = [
            {id:1, name:"item one", items:[1,34,8,10]},
            {id:2, name:"item two", items:["one", "two", "three"]},
        ]

        const _customers = [
            {id:1, name:"name one", email:"name1@email.com", phone:"832873"},
            {id:2, name:"name two", email:"name2@email.com"},
            {id:3, name:"name three", email:"name3@email.com", phone:"7943432"}
        ]        

        //let _map1 = await _customers.map(async (item) => {
        let _map1 = _customers.map((item) => {
                return {id:item.id, name:item.name, email:item.email};                
        });
    
        _output1.innerText = JSON.stringify(_map1);

    } catch (error) {
        
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});


document.getElementById("btn-class-set-1").addEventListener("click", async (e) => {

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-class-set-1";

    try {
        
        //------------------------------------------------------------------------------------
        //functionsl programming - using the function only without additional functanality 
        //------------------------------------------------------------------------------------
        //arrap.map, reduce, filter, ...

        //set = unique non-repeating list of values 

        //es1-4 set example 
        //not have must additional functionality, create custom additional functionality

        //------------------------------------------------------------------------------------
        //es6+ set class example
        //class has additional functions 
        //------------------------------------------------------------------------------------
        //--- additional functanility ie: sort, other 
        const _set1 = new Set()
        const _set2 = new Set([1,2,3,3,4])

        _set2.add(4);
                
        //if key exists 
        const _3_exists = _set2.has(3);

        //additional set methods
        //_set2.keys()

        //class Set 
        //loop through set and convert to javascript list 

        _output1.innerText = "";
        
        //_set2.forEach
        //es6+ 
        for(let item of _set2)
        {
            _output1.innerText += `${item}|`;
        }
        

    } catch (error) {
        
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});


document.getElementById("btn-class-map-1").addEventListener("click", async (e) => {

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-class-map-1";

    try {
        
        //-----------------------------------------------------------------------------------
        //functionsl programming - using the function only without additional functanality 
        //----------------------------------------------------------------------------------
        //map = array of key / value pair - ie: dictionary, key must be unique
        
        //es1-4 map example 
        //not have must additional functionality, create custom additional functionality

        //----------------------------------------------------------------------------------
        //es6+ map class example
        //----------------------------------------------------------------------------------
        //--- additional functanility ie: set, sort, other 

        //-- new Map(), Set() = create a new instance/copy of object/map in memory 
        //-- new Map(), Set() different copies of map/object in memory with samep/different data
        //-- new Date() -- has own set of methods 

        const _map1 = new Map(
            [
             ["key1",5],
             ["key2",10],
             ["key3",15],
            ]);

        _map1.set("key4",25) //add new key and value 
        _map1.set("key3",12) //update value using key 

        //if key exists 
        const _key2_exists = _map1.has("key2");

        //retrieve items 
        const _key2_value = _map1.get("key2");

        _output1.innerText = "";

        //_map1.forEach
        //es6+ 
        //for(let item of _map1.keys())
        for(let item of _map1.values())
        {
            _output1.innerText += `${item}|`;
        }
        
        _output1.innerText += ` - _key2_value: ${_key2_value}|`;

    } catch (error) {
        
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});

document.querySelector(".btn-custom-set-1").addEventListener("click", async ()=>{

    const _function_name = "btn-custom-set-1";
    const _output1 = document.getElementById("output1");

    try {

        //intro syntax code of creating custom set, map using javasctipt 
        //1. object initializer - Object.create - es1-4 - json document  ie: w3schools
        //2. function classes - new MyClass1() - es1-4  ie: w3schools
        //3. class keyword - new MyClass1() - es5+  ie: w3schools

        //1. object initializer - Object.create - es1-4 or json document  

        //when adding item to the set - check if item already exist
        let MySet1 = {};  //Object.create - es1-4 or json document  
        let MySet2 = [];

        //check if item already exists
        //- different code to validate if an object aready exist 
        //- ie: unique hask code for each item 
        // -or- array.find
        
        //if(!item in MySet1)

        //add item 
        //MySet1.push(item)

        //-or- 
        //loop through items and check if item already exist then add item 
        //ie: forEach, Filter, Find

        //-or-
        //create custom class

        //other best practice example implementations
        //and other data structures ie: queue, stack, link-list, map, set, etc..
        //ie: shopping cart app - list.add, remove, search, filter

        _output1.innerText = _function_name;
        
    } catch (error) {
        _output1.innerText = `${_function_name}::err - ${error}`;
    }
});
 
document.querySelector("#btn-custom-map-1").addEventListener("click", async ()=>{

    const _function_name = "btn-custom-map-1";
    const _output1 = document.getElementById("output1");

    try {

        //intro syntax code of creating custom set, map using javasctipt 
        //1. object initializer - Object.create - es1-4 - json document  ie: w3schools
        //2. function classes - new MyClass1() - es1-4  ie: w3schools
        //3. class keyword - new MyClass1() - es5+  ie: w3schools

        //1. object initializer - Object.create - es1-4 or json document  

        //when adding item to the set - check if item already exist
        let MyMap1 = [];

        //check if item already exists
        //- different code to validate if an object aready exist 
        //- ie: unique hask code for each item 
        // -or- array.find
        
        //item = {key:"key1", value:"value1"}

        //Array.Find()

        //add item 
        //MyMap1.push(item)

        //-or- 
        //loop through items and check if item already exist then add item 
        //ie: forEach, Filter, Find

        //-or-
        //create custom class

        //other best practice example implementations
        //and other data structures ie: queue, stack, link-list, map, set, etc..
        //ie: shopping cart app - list.add, remove, search, filter

        _output1.innerText = _function_name;
        
    } catch (error) {
        _output1.innerText = `${_function_name}::err - ${error}`;
    }
});