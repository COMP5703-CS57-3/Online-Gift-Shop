import React from "react";
import {FixedSizeList} from "react-window";


const bigList = [...Array(5000)].map(()=>({
    name: "123",
    email: "example@qq.com"
}))

export default function Example(){
    const render = ({index})=>(
        <div>
            <p>{bigList[index].name}</p>
            <p>{bigList[index].email}</p>
        </div>
    )
    return(
        <FixedSizeList
        width={window.innerHeight}
        height={window.innerWidth}//
        itemCount={bigList.length}
        itemSize={50}>
            {render}
        </FixedSizeList>
    )
}