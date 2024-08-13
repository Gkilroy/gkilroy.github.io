//-- Register.js ---

import { useEffect, useState, useRef } from "react";
import {Link} from 'react-router-dom';

const Register = (props) => {

    const [msg, setMsg] = useState("");
    
    useEffect(()=>{

        //-- avoid state/data update and infinate loops 

        //class ComponentDisMound ie: OnLoad()

        return ()=>{
            //component unMound = ie: UnLoad()
        }

    },[]);

    const formSubmit = (e) =>{

        e.preventDefault();
        
        let _msg = "** Register";

        try {

            setMsg((prevval)=>_msg);
            console.log(_msg)

        } catch (error) {
            
            const _err = `${_msg}::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }    

    } 

    return(
        <>
            <h4>Register Page - 1.0.0</h4>
            <span>{msg}</span>            
            <div> 
                <form onSubmit={formSubmit}>
                    <div>
                        <label>* username: </label>
                        <input type="text" placeholder="*username required" maxlength="25"
                         />
                    </div>
                    <div>
                        <label>* pawword: </label>
                        <input type="text" placeholder="*password required" maxlength="50"                                                  
                         />
                    </div>
                    <div>
                        <label>* Confirm password: </label>
                        <input type="text" placeholder="*confirm password required" maxlength="50"                                                  
                         />
                    </div>
                    <p></p>
                    <div>
                        <button type="submit">Submit</button>
                        {" "}                        
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;