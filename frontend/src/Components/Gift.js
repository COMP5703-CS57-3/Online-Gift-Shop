import React,{useState} from "react";

export default function Gift({id,name,description,price}){
    return(
        <section>
            <h1>{id}</h1>
            <h1>{name}</h1>
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