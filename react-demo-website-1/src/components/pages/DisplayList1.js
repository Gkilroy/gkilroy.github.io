//-- DisplayList1.js ---

import { useEffect, useState } from "react";

//-- list of items ------
//
//-- array
//-- fetch json data
//-- fetch api - jsonplaceholder api 
//-- Container components - does not display data, Presentation Components - displays data 

//
//-- Data state context in Global context - data is avaiable to all componets 
//
const list_array = [
    {id:1,name:"item one", completed:false},
    {id:2,name:"item two", completed:false},
    {id:3,name:"item three", completed:true},
    {id:4,name:"item four", completed:false},
    {id:5,name:"item five", completed:false}
];

const DisplayList1 = (props) => {

    const [msg, setMsg] = useState("");

    const [output, setOutput] = useState(null);

    //
    //-- Data state context in DisplayList function - data is avaiable to all sub/child componets of DisplayList1
    //
    const [list, setList] = useState(list_array);

    useEffect(()=>{

        //onload / componentDidMound

        return () =>{
            //unload / componentUnmount 
        }
    },[]);

    
    const list_items_array = (e) => {

        e.preventDefault();

        const _function_name = "* list_items_array";
    
        try {

            setMsg(_function_name);

            const _jsx_items = list.map((item)=><p>{                                
                <span>{item.name}</span>                
            }</p>);

            //
            //ie: DOM - Document.CreateElement, AppendChild
            //-- bulid jsx html output
            //
            const _jsx_output = <>
                <ul>
                    {_jsx_items}
                </ul>
            </>

            setOutput(_jsx_items);
        
        } catch (error) {
                
            const _err = `${_function_name}::err - ${error}`;
    
            console.log(_err);
            setMsg((prevval)=>_err);
        }
    }

    return(
        <>
            <h4>DisplayList Page 1.0.3</h4>         
            <label>{msg}</label>   
            <div>
                <b>list array jsx output example with item key </b>
                <div>
                    <input type="text" maxLength={20} placeholder="* add item"/>
                    {" "}
                    <button>add</button>
                    <p></p>
                    <a href="#0">all</a>{" | "}
                    <a href="#1">completed</a>{" | "}
                    <a href="#2">in-complete</a>
                </div>
                <div>
                  {list_array.map((item)=><p key={item.id}>{
                    <>
                        <input type="checkbox" checked={item.completed}/>
                        {" "}
                        <span key={item.id} style={{'text-decoration':(item.completed)?"line-through":""}}>{item.name}</span>
                        {" "}
                        <button>x</button>
                    </>
                    }</p>)}
                </div>
            </div>
            <div className="output1">
                {output && output}
            </div>                 
            <div className="action" style={{padding:"5px"}}> 
                <button onClick={list_items_array}>list array example</button>                
                <button>list jsondoc example</button>
                <button>list api/json placeholder example</button>
            </div>
        </>
    )
}

export default DisplayList1;