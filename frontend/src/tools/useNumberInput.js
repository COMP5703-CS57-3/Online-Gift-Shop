import {useState} from "react";

export const useInput = initialValue =>{
    const [value,setValue] = useState(initialValue);
    return[
        {value,onChange:e=>setValue(parseInt(e.target.value))},
        ()=>setValue(initialValue)
    ];
}