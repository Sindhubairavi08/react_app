import React, { useState} from "react";

const Callback = () => {
    const [count, setCount] = useState(0);
    const list=[10,20,30,40,50]
    const list1=[...list,60,70,100,200,300]
    list.forEach(element => {
        console.log(element)
    });
     // const handlingCallbackFunc = useCallback(() => {
    //     console.log(`button clicked or not if clicked print the count else don't print the count Count: ${count}`);
    // }, [count]);

    return (
        <div>
            <h1>This is Call Back Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add one</button><br></br>
            {/* <button onClick={handlingCallbackFunc}>Callback count</button> */}
            <ol>
                
                {list1.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
            </ol>
        </div>
    );
}

export default Callback;