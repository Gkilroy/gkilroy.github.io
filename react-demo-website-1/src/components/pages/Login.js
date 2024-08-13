//-- Login.js ---

import { useEffect, useState, useRef } from "react";
import {Link} from 'react-router-dom';

const Login = (props) => {

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
        
        let _msg = "** Login";

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
            <h4>Login Page - 1.0.0</h4>
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
                    <p></p>
                    <div>
                        <button type="submit">Submit</button>
                        {" "}                        
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;