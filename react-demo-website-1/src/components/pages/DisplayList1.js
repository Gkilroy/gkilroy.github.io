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
const _list_array = [
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
    const [list, setList] = useState(_list_array);

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

            const _jsx_items = list.map((item)=>{                                
                <span>{item.name}</span>                
            });

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
            <h1>DisplayList Page 1.0.1</h1>         
            <label>{msg}</label>   
            <div className="output1">
                {output && JSON.stringify(output)}
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