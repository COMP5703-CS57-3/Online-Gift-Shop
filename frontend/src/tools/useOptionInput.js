import {useState} from "react";

export const useOptionInput = initialValue =>{
    const [value,setValue] = useState(initialValue);
    return[
        {inputValue:value,onChange:e=>setValue(e.target.value)},
        ()=>setValue(initialValue)
    ];
}