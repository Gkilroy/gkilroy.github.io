//-- ContactUs3.js ---

import { useEffect, useState, useRef } from "react";

//-- form validation
//
//-- controlled - using react state
//-- uncontrolled - form maintains state on submit ie: Document.form[0]
//-- refactor: HTML5 validation
//

const ContactUs3 = (props) => {

    const [msg, setMsg] = useState("");

    //example: {name:'name1',email:'email1@email.com'}
    const [formfields, setFormFields] = useState({});

    //example: {name:'* invalid name',email:'* invalid email'}
    const [formfielderrors, setFormFieldErrors] = useState({});   
    
    useEffect(()=>{

        //-- avoid state/data update and infinate loops 

        //class ComponentDisMound ie: OnLoad()

        return ()=>{
            //component unMound = ie: UnLoad()
        }

    },[]);

    const formSubmit = (e) =>{

        e.preventDefault();
        
        let _msg = "** formSubmit3";

        try {

            setMsg((prevval)=>_msg);
            console.log(_msg)

        } catch (error) {
            
            const _err = `${_msg}::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    }

    const handleFormFieldChange = (e) => {

        e.preventDefault();
        
        let _msg = "";

        try {

            console.log(_msg);
            
        } catch (error) {
            
            const _err = `handleFormFieldChange::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    } 

    return(
        <>
            <h4>ContactUs Page - 3.0.0</h4>
            <p>* controlled form validation example - save form data in usestate</p>
            <span>{msg}</span><span></span>
            <div> 
                <form onSubmit={formSubmit}>
                    <div>
                        <label>* name: </label>
                        <input type="text" placeholder="*name required" maxlength="25"/>                        
                    </div>
                    <div>
                        <label>* email: </label>
                        <input type="text" placeholder="*email required" maxlength="50" />
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

export default ContactUs3;