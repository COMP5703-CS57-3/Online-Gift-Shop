import {useState} from "react";

export const useNumberInput = initialValue =>{
    const [value,setValue] = useState(initialValue);
    return[
        {value,onChange:e=>setValue(parseInt(e.target.value))},
        ()=>setValue(initialValue)
    ];
}