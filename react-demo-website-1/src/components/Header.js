
//-- sending data/state to a component/function 
//-- functional programming/closure -- accept readonly data/state = props and return new data 
//-- refactor: to react class

//const Header = function() {
//export function Header() {    
//asyn/await 
//const Header = (props) => {
//--object destructoring - creating variable(s) from an object 
const Header = ({title="*default-title"}) => {

    //-- saving data/state = props within a function/closure 

    return (
    //-- must be a root or main html-jax container html-jsx
    //-- can not be side by side 
    //-- ie-valid: <div>.html-jax..</div>
    //-- ie-valid: <>.html-jax..</>
    //-- ie-invalid: <div>.html-jax..</div><div>..html-jsx..</div>
    //-- ie-invalid: <h1>.html-jax..</h1>h1>..html-jsx..</h1>
    //--- props access --
    //{props.title}
    //-- props object destructoring 
    //({title})
    <h4>
        {title}
    </h4>
    )    
}

export default Header;