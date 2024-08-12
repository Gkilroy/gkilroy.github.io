//-- ContactUs1.js ---

import { useEffect, useState, useRef } from "react";

//-- form validation
//
//-- controlled - using react state
//-- uncontrolled - form maintains state on submit ie: Document.form[0]
//-- refactor: HTML5 validation
//

const ContactUs1 = (props) => {

    const [msg, setMsg] = useState("");
    const reftxtname = useRef("");  //ie: getElementById
    const reftxtemail = useRef(""); //ie: getElementById

    const [nameerror, setNameError] = useState("");   
    const refNameError = useRef(""); //ie: getElementById

    useEffect(()=>{

        //-- avoid state/data update and infinate loops 

        //class ComponentDisMound ie: OnLoad()

        return ()=>{
            //component unMound = ie: UnLoad()
        }

    },[]);

    const formSubmit = (e) =>{

        e.preventDefault();
        
        let _msg = "** formSubmit";

        try {

            _msg = `name: ${reftxtname.current.value}, email: ${reftxtemail.current.value}`;

            setMsg((prevval)=>_msg);
            console.log(_msg)
            //alert(_msg)

            setNameError((preval)=>"");
            refNameError.current.innerText = "";

            //ie: short-circuit or condition
            //-- only check 1 condition at a time if condiotn1 == true do not check other codition
            // ie: if any condition is true then do not check the other conditions             
            //if(reftxtname.current.value === null || reftxtname.current.value === "")

            //-- check each condition and if 1 is true then run the true code block 
            if(reftxtname.current.value === null | reftxtname.current.value === "")
            {
                const _msgerr = "* please enter a valid name";
                setNameError((preval)=>_msgerr)
                refNameError.current.innerText = _msgerr;
            }

        } catch (error) {
            
            const _err = `${_msg}::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    }

    return(
        <>
            <h4>ContactUs Page - 1.0.3</h4>
            <p>* un-controlled form validation example - form maintains state/data</p>
            <span>{msg}</span><span></span>
            <div> 
                <form onSubmit={formSubmit}>
                    <div>
                        <label>* name: </label>
                        <input type="text" ref={reftxtname} placeholder="*name required" maxlength="25"/>
                        <label>{nameerror}</label>
                        <label ref={refNameError}></label>
                    </div>
                    <div>
                        <label>* email: </label>
                        <input type="text" ref={reftxtemail} placeholder="*email required" maxlength="50"/>
                    </div>
                    <p></p>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs1;