import React from "react"
import AccountMenu from "./Header";
import Background from "../../picture/background.png";
import MainBody from "./MainBody";
import FastDial from "../FastDial";
import SideBar from "./SideBar";
import GiftProvider, {useGift} from "../../tools/useGift";


export default class Homepage extends React.Component {

    render() {
        return (
            <GiftProvider>
                <div style={{width: '100%', height: '100%', backgroundImage: "url(" + Background + ")"}}>
                <AccountMenu/>
                <MainBody/>
                {/*<div style={{float: "right", width: "69%",display:"inline"}}><MainBody/></div>*/}
                {/*<div style={{paddingLeft:"3px",marginTop:"20px",float: "left", width: "30%", maxWidth: "320",display:"inline"}}><SideBar/></div>*/}

                <FastDial/>
                {/*<Outlet />*/}
                {/*<IndexLink to="/cart">Cart</IndexLink>&nbsp;*/}
                {/*<Link to="/login">Login</Link>&nbsp;*/}
                {/*<Link to="/accountmenu">AccountMenu</Link>*/}
            </div>
            </GiftProvider>
        )
    }
}
//ReactDOM.render(<AccountMenu/>, document.getElementById('homepage'))