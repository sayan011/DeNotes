import React, { useState } from "react";
  
function App() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="">
            <h2 className="text-gray-400 text-md">Add Thumbnail</h2>
                <div className="bg-slate-800">
                <input type="file" onChange={handleChange} />
                </div>
            <img src={file}
            
            
            />
  
        </div>
  
    );
}
  
export default App;