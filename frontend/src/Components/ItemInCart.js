import React from "react";
import {FaTrash} from "react-icons/fa"

export default function ItemInCart({id,name,description,price,onRemove=f=>f}){
    return(
        <section>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <button onClick={()=>onRemove(id)}>
                <FaTrash />
            </button>
            <ul>
                <li>description:{description}</li>
                <li>price:{price}</li>
                {/*{info.map((info,i)=>(*/}
                {/*    <li key={i}>{info.info1}</li>*/}
                {/*))}*/}
            </ul>
        </section>
    )
}