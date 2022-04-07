import React from "react";
import Background from "../../picture/background.png";
import AccountMenu from "./Header";
import MainBody from "./MainBody";
import GiftProvider from "../../tools/useGift";
import FastDial from "../FastDial";

export default class SubHomepage extends React.Component {
    render() {
        return (
            <GiftProvider>
                    <div style={{width: '100%', height: 1500, backgroundImage: "url(" + Background + ")"}}>
                    <AccountMenu/>
                    <outlet/>
                    <FastDial/>
                </div>
            </GiftProvider>
        )
    }
}