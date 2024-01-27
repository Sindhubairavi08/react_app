import React, { useState } from "react";

const ABOUT = () => {
    const [college, updateCollege] = useState("KEC");//[state,inital] state is function,,

    const handleCollegeUpdate = () => {
        updateCollege("Kongu Engineering College");
    };

    return (
        <div>
            <h1>This is your About Page</h1>
            <h1>Welcome to {college}</h1>
            <button onDoubleClick={handleCollegeUpdate}>Update College name</button>
        </div>
    );
};
export default ABOUT;