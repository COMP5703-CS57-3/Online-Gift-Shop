import React from "react"
import AccountMenu from "./Header";
import Background from "../../picture/background.png";
import FastDial from "../FastDial";
import GiftProvider from "../../tools/useGift";
import {Outlet} from "react-router-dom";
import Copyright from "../cpright";


export default class Homepage extends React.Component {

    render() {
        return (
            <GiftProvider>
                <div style={{
                    width: '100%',
                    height: 1000,
                    backgroundImage: "url(" + Background + ")",
                    backgroundRepeat: "no-repeat"
                }}>
                    <AccountMenu/>
                    <Outlet/>
                    <FastDial/>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </div>
            </GiftProvider>
        )
    }
}
//ReactDOM.render(<AccountMenu/>, document.getElementById('homepage'))