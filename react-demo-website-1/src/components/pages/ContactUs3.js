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

    //example: {txtname:'name1',txtemail:'email1@email.com'}
    const [formfields, setFormFields] = useState({});

    //example: {txtname:'* invalid name',txtemail:'* invalid email'}
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

            _msg = `${JSON.stringify(formfields)}`;

            setMsg((prevval)=>_msg);
            console.log(_msg)

            //----
            //-- React state update error ---- 
            //-- object/array rest operator ... to copy previous state/data 
            //...array example: {...array1,
            //... in arrow funtion exmple: (prevval) => ({...prevval,
            //
            //-- ## app error/issue 
            // using array ..rest to copy/rest state/date 
            // instead of array functions (prevval) as ...rest copy/data
            //
            //setFormFieldErrors((preval)=>({...formfielderrors,txtname1:""}));
            //
            // ## update code without error/issue 
            //
            //setFormFieldErrors((preval)=>({...prevval,txtname1:""}));
            //

            //-- error/issue 
            //
            //setFormFieldErrors((preval)=>({...formfielderrors,txtname1:""}));
            //setFormFieldErrors((preval)=>({...formfielderrors,txtemail:""}));

            
            //
            //--- validate input ----- 
            //-- update code / no error/issue 
            //

            setFormFieldErrors((preval)=>({...preval,txtname:""}));
            setFormFieldErrors((preval)=>({...preval,txtemail:""}));

            if(formfields.txtname === null || formfields.txtname === undefined || formfields.txtname === "" 
                || formfields.txtname.trim().length === 0
            )
            {
                const _msgerr = "* please enter a valid name";
                //example: {txtname:'* invalid name',txtemail:'* invalid email'}
                
                //-- error/issue 
                //setFormFieldErrors((preval)=>({...formfielderrors,txtname:_msgerr}))
                //update no error/issue 
                setFormFieldErrors((preval)=>({...preval,txtname:_msgerr}))
            }
            
            if(formfields.txtemail === null || formfields.txtemail === undefined || formfields.txtemail === "" 
            || formfields.txtemail.trim().length === 0)
            {
                const _msgerr = "* please enter a valid email";
                //example: {txtname:'* invalid name',txtemail:'* invalid email'}
                //-- error/issue
                //setFormFieldErrors((prevval)=>({...formfielderrors,txtemail:_msgerr}))
                //-- updated code/no error/issue 
                setFormFieldErrors((prevval)=>({...prevval,txtemail:_msgerr}))
            }

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

            const _name = e.target.name;
            const _value = e.target.value;

            //
            //-- (...object spread operator, update key/value)
            //
            //example: {txtname:'name1',txtemail:'email1@email.com'}
            setFormFields((prevval)=>({...prevval,[_name]:_value}));
            //... object/array spread operator = add all existing object/array values ie: copy all object/array values 
            //({...prevval})
            //[_name]:_value = update object/array key with value * if key does not exist create key and add value 
            //txtname:"name one"
            //-- es1-4
            //Object.assign(prevval,{txtname:"name one"})
            //-- es5+ ...spread operator 
            //
            //--- same as --- 
            //
            //obj1 = {txtname:"name one", txtemail:"email1@email.com"}
            //obj1.txtname = "name two"
            //obj1["txtname"] = "name two"
            //
            //
             
            //
            //setFormFieldErrors(()=>{});   //object reference error 
            
            //
            //setFormFieldErrors({});  //no reccommended 

            //
            //--- validate input ----- 
            //-- update code / no error/issue 
            //
            
            setFormFieldErrors((preval)=>({...preval,txtname:""}));
            setFormFieldErrors((preval)=>({...preval,txtemail:""}));

            if(formfields.txtname === null || formfields.txtname === undefined || formfields.txtname === "" 
                || formfields.txtname.trim().length === 0
            )
            {
                const _msgerr = "* please enter a valid name";
                //example: {txtname:'* invalid name',txtemail:'* invalid email'}
                
                //-- error/issue 
                //setFormFieldErrors((preval)=>({...formfielderrors,txtname:_msgerr}))
                //update no error/issue 
                setFormFieldErrors((preval)=>({...preval,txtname:_msgerr}))
            }
            
            if(formfields.txtemail === null || formfields.txtemail === undefined || formfields.txtemail === "" 
            || formfields.txtemail.trim().length === 0)
            {
                const _msgerr = "* please enter a valid email";
                //example: {txtname:'* invalid name',txtemail:'* invalid email'}
                //-- error/issue
                //setFormFieldErrors((prevval)=>({...formfielderrors,txtemail:_msgerr}))
                //-- updated code/no error/issue 
                setFormFieldErrors((prevval)=>({...prevval,txtemail:_msgerr}))
            }


        } catch (error) {
            
            const _err = `handleFormFieldChange::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    } 

    return(
        <>
            <h4>ContactUs Page - 3.0.4</h4>
            <p>* controlled form validation example - save form data in usestate</p>
            <span>{msg}</span>            
            <p>{JSON.stringify(formfielderrors)}</p>    
            <div> 
                <form onSubmit={formSubmit}>
                    <div>
                        <label>* name: </label>
                        <input type="text" placeholder="*name required" maxlength="25"                                                  
                          name="txtname" onChange={(e)=>handleFormFieldChange(e)} 
                          value={formfields.txtname || ""}
                         />
                         {/* if (formfields.txtname != null) display formfields.txtname else "" */}
                         {/* (formfields.txtname != null) ? formfields.txtname : "" */}
                         {/* (formfields.txtname) ? formfields.txtname : "" */}
                         {formfielderrors.txtname && <label>{formfielderrors.txtname}</label>}
                         {/* if (formfielderrors.txtname) != null then display formfielderrors.txtname -- no else statement*/}
                    </div>
                    <div>
                        <label>* email: </label>
                        <input type="text" placeholder="*email required" maxlength="50"                          
                          name="txtemail" onChange={(e)=>handleFormFieldChange(e)}
                          value={formfields.txtemail || ""}
                         />
                         {/* if (formfields.txtemail != null) display formfields.txtemail else "" */}
                         {/* (formfields.txtemail != null) ? formfields.txtemail : "" */}
                         {/* (formfields.txtemail) ? formfields.txtemail : "" */}
                         {formfielderrors.txtemail && <label>{formfielderrors.txtemail}</label>}
                         {/* if (formfielderrors.txtemail) != null then display formfielderrors.txtemail -- no else statement*/}
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