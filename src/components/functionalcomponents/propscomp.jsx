import React from "react";
import { ReactDOM } from "react";

function TestComp(props){
    return(
        <div>
            <h1>Hello,I am {props.name}<br></br>{props.role}</h1>
        </div>
    );
}
export default TestComp;
//const fC= ReactDOM.createRoot(document.getElementById('root'))
//fC.render(
//    <TestComp/>
//)