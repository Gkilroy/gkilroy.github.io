
//global state - js window object ie: hoisting 
//functional programming closure - function can contain state/data

//ES1-4 - OOP intro - Object initializer 

//w3schools.com - javascript objects 

//refactor: namespace 

//es1-4 - Object initializer 
function oop_obj_es4_ex1()
{

    //const _ret = ""; //read-only -- does not allow re-update 
    let _ret = "";

    //1.-- define a class
    //-- javasctipt class/template - structure 
    //-- fields/data - properties 
    //-- methods/functions 

    //2. use class/template 
    //creating 1 or more copies or [instances] of class/template in memory 

    const person = {
        //data/fields/properties 
        firstName: "john",
        lastName: "doe",
        age: 50
        //method/functions 
    }
    
    //3. access, update instance data 
    //refrencing person object/instance in memory and accessing person object data 
    _ret = ` person: name: ${person.firstName} age: ${person.age}`;

    //ie: 
    //-- create object in memory 
    //const _date = new Date();
    //_date.getHour(); //access object method 

    return _ret;
}


//es1-4 - Object initializer 
function oop_obj_es4_ex2()
{
    let _ret = "";

    //1.-- define a class
    //-- javasctipt class/template - structure 
    //-- fields/data - properties 
    //-- methods/functions 

    //2. use class/template 
    //creating 1 or more copies or [instances] of class/template in memory 

    //const person = new Object();  //intstance 1 copy in memory 
    const person = {} //intstance 1 copy in memor

    //create a new intstance or 1 copy in memory y 
    //const person2 = Object.create(person); 

    //data/fields/properties 
    //-- can dynamically add fields when code is running - ie: runtime

    person.firstName = "jane";
    person.lastName = "doe";
    person.age = 40;
    //method/functions 
    
    //copy of same object reference in memory
    //if modify person1 object person object will be updated
    //person1 references the same object in memory 
    let person1 = person; //shallow copy 
    //let person1 = Object.assign({},person); //shallow copy 

    person1.age = 41;

    //-- create a new instance;
    //create a new intstance or 1 copy in memory 
    //const person2 = Object.create(person); 
    //let person2 = JSON.parse(JSON.strinify(person)); //deep copy - new object 

    //3. access, update instance data 
    //refrencing person object/instance in memory and accessing person object data 
    _ret = ` person: name: ${person.firstName} age: ${person["age"]}`;

    return _ret;
}