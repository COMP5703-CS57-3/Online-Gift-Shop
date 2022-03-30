import React from "react"
import ReactDOM from "react-dom";
import AccountMenu from "./homepage/Header";



export default class homepage extends React.Component{
    render() {
        return(
            <div>
                <AccountMenu/>
            </div>

        )
    }
}
//ReactDOM.render(<AccountMenu/>, document.getElementById('homepage'))