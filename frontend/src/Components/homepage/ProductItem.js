import React from "react"

export default function ProductItem({id,name,description,price}){
    return(
        <section>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <img/>
            <ul>
                <li>description:{description}</li>
                <li>price:{price}</li>
            </ul>
        </section>
    )
}