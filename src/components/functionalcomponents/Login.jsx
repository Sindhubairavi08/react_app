import { useReducer } from "react";
const value ={count:0};
// const countFunc = (state,action) =>{
//     if(action.type == "sub"){
//         console.log("Hello");
//         return {state:state.count-1}
//     }
//     else if(action.type === "add")
//     {
//         return {state:state.count+1}
//     }
// };
function countFunction(countVal,action){
    switch (action.type){
        case "sub":
            // console.log("Hello")
            return {count:countVal.count -1};
        case "add":
            return {count:countVal.count +1};
        case "reset":
            return {count:countVal.count =0};
    }        

}

const Login = () =>{
    const [countVal,updateCount]= useReducer(countFunction,value);
    return (
        <div>
            <h1>This is userReducer Example</h1>
            <h2>Count :{countVal.count}</h2>
            <button onClick={()=>updateCount({type:'sub'})}>Sub</button>
            <button onClick={()=>updateCount({type:'add'})}>Add</button>
            <button onClick={()=>updateCount({type:'reset'})}>Reset</button>
            {/* <h1>This is use reducer</h1>
            <button onClick={() => dispatch({type: 'sub'})}>Subtract</button>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'add'})}>Add</button> */}
        </div>
        );
        // <div>
        //     <h1>This is page is meant for your login.</h1>
        // </div>
    
}
export default Login;