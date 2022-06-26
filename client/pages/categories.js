import React from "react";
import { Button } from "antd"
import { useState} from "react";

const categories = () => {
  
  return (
    <div>
        <Button
        type="primary"
        onClick={()=>console.log(section)}
        >
            Categories Page
        </Button>
     
    </div>
  );
};

export default categories;
