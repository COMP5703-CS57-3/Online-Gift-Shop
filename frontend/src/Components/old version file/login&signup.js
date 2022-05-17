//index.js
import axios from 'axios'
import React from 'react'
import Button from '@mui/material/Button';
import {ip} from "../../node_modules/ip"

function UserLogin(props) {
    return (
        <div className="container">
            Email:<input name="Email" onChange={(val) => props.HandleChange(val)}/> <br/>
            Password:<input type= "password" id= "password" name="Password" onChange={(val) => props.HandleChange(val)}/><br/>
        </div>
    )
}


function GuestLogin(props) {
    return (
        <div className="container">
            Invite Code:<input name="InviteCode" onChange={(val) => props.HandleChange(val)}/> <br/>
        </div>
    )

}


function Signup(props) {
    return (
        <div className="container">
            Nickname:<input name="Username" onChange={(val) => props.HandleChange(val)}/>
            {props.props.isShow ? (
                <span>{props.props.errNick}</span>
            ) : null} <br/>
            Email:<input name="Email" onChange={(val) => props.HandleChange(val)}/> {props.props.isShow ? (
            <span>{props.props.errEmail}</span>
        ) : null} <br/>
            Phone Number:<input name="Phone" onChange={(val) => props.HandleChange(val)}/> {props.props.isShow ? (
            <span>{props.props.errPhone}</span>
        ) : null} <br/>
            Password:<input name="Password" onChange={(val) => props.HandleChange(val)}/> {props.props.isShow ? (
            <span>{props.props.errPwd}</span>
        ) : null} <br/>
            Confirm password<input name="ConfirmedPwd"
                                   onChange={(val) => props.HandleChange(val)}/> {props.props.isShow ? (
            <span>{props.props.errCPwd}</span>
        ) : null} <br/>
        </div>
    )

}


function SLPart(props) {
    if (props.Login === "1") {
        if (props.WantLogin === "0") {
            return (
                <div id="GURadioBox">
                    <GuestLogin HandleChange={props.HandleChange}/>
                    <input type="radio" name="WantLogin" value={1} checked={props.WantLogin === "1"}
                           onChange={(e) => props.HandleChange(e)}/> <label htmlFor="user">User</label>
                    <input type="radio" name="WantLogin" value={0} checked={props.WantLogin === "0"}
                           onChange={(e) => props.HandleChange(e)}/><label htmlFor="guest">Guest</label>
                </div>
            )
        } else {
            return (
                <div id="GURadioBox">
                    <UserLogin HandleChange={props.HandleChange}/>
                    <input type="radio" name="WantLogin" value={1} checked={props.WantLogin === "1"}
                           onChange={(e) => props.HandleChange(e)}/> <label htmlFor="user">User</label>
                    <input type="radio" name="WantLogin" value={0} checked={props.WantLogin === "0"}
                           onChange={(e) => props.HandleChange(e)}/><label htmlFor="guest">Guest</label>
                </div>
            )
        }
    } else {
        return <Signup props={props} HandleChange={props.HandleChange}/>
    }
}

function checkNickName(val) {
    const reg = new RegExp(/[[a-zA-Z0-9_]+/);
    if (val.length > 12) {
        return "* Nick name is limited to 12 characters"
    } else if (val.length === 0) {
        return "* Nick name is empty"
    } else if (val.length < 6) {
        return "* Nick name should be at least 6 characters"
    } else if (val.match(reg) === null || val.match(reg).length !== val.length) {
        return "* Nick name should only allow a-zA-z0-9_"
    } else {
        return true
    }


}

function checkEmail(val) {
    const reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/)
    if (val.length === 0) {
        return "* Email is empty"
    } else if (val.match(reg) === null || val.match(reg).length !== val.length) {
        return "* Please input a valid email"
    } else {
        return true
    }

}

function checkPhone(val) {
    const reg_aus = new RegExp(/^(\+?61|0)4\d{8}$/)// australian type
    const reg_chn = new RegExp(/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/) //chinese type
    if (val.length === 0) {
        return "* Phone number is empty"
    } else if (val.match(reg_aus) !== null || val.match(reg_chn) !== null) {
        return true
    } else {
        return "* Please input a valid phone number"
    }
}

function checkPassword(val, val_twice) {
    let res = {"Pwd": true, "CPwd": true}
    const reg = new RegExp(/[0-9]+/)
    if (val.length === 0) {
        res["Pwd"] = "* Password is empty"
    } else if (val.length < 8 || val.match(reg) === null) {
        res["Pwd"] = "* Password must be more than eight characters and contain at least one number"
    }
    if (val !== val_twice) {
        res["CPwd"] = "* Please confirm your input"
    }
    return res
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InviteCode: "",
            Email: "",
            Password: "",
        }
    }

    HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        this.setState({[name]: value},)
    }
    HandleClick = () => {
        if (this.state.Login === "1") {
            if (this.state.WantLogin === "1") {
                if (this.state.Password===""){
                    alert("please input password")
                }
                else{
                    // console.log(this.state.Username,this.state.Password)
                    axios.post('http://'+ ip +'/login_signup/login', {
                        user_email: this.state.Email,
                        user_password: this.state.Password
                    }).then((response) => {
                        let status = response;
                        (status, 1)
                        if (status.data.message === 'Information waiting for confirmation') {
                            ("Success!")
                        } else {
                            ("Error!")
                        }
                    })
                        .catch((response) => {
                            if (response.toString().indexOf("403")!==-1){
                                alert("User did not exit, please sign up first")
                            }else if (response.toString().indexOf("404")!==-1){
                                alert("Unknown Error")
                            }
                            else if (response.toString().indexOf("400")!==-1){
                                alert("Please input correct password")
                            }
                        });
                }
            }
            else {
                if (this.state.InviteCode===""){
                    alert("please input invite code")
                }
                (this.state.InviteCode)
            }
        } else {
            const res_name = checkNickName(this.state.Username)
            const res_email = checkEmail(this.state.Email)
            const res_phone = checkPhone(this.state.Phone)
            const res_password = checkPassword(this.state.Password, this.state.ConfirmedPwd)

            if (res_name === true && res_email === true && res_phone === true && res_password === true) {
                this.setState({isShow: false})
                ("send message to backend")
            } else {
                (res_phone)
                this.setState({
                    isShow: true,
                    errNick: res_name === true ? "" : res_name,
                    errEmail: res_email === true ? "" : res_email,
                    errPhone: res_phone === true ? "" : res_phone,
                    errPwd: res_password["Pwd"] === true ? "" : res_password["Pwd"],
                    errCPwd: res_password["CPwd"] === true ? "" : res_password["CPwd"],
                }, () => {
                    // console.log(this.state)
                })


            }
        }
    }

    render() {
        return (
            <>
                <h1>Hello</h1>
                <div id="SLRadioBox">
                    <input type="radio" name="Login" value={1} checked={this.state.Login === "1"}
                           onChange={(e) => this.HandleChange(e)}/> <label htmlFor="login">Login</label>
                    <input type="radio" name="Login" value={0} checked={this.state.Login === "0"}
                           onChange={(e) => this.HandleChange(e)}/><label htmlFor="signup">Sign Up</label>
                </div>
                <div>
                    <div id="LoginPart">
                        <SLPart HandleChange={this.HandleChange}
                                WantLogin={this.state.WantLogin}
                                Login={this.state.Login}
                                isShow={this.state.isShow}
                                errNick={this.state.errNick}
                                errEmail={this.state.errEmail}
                                errPhone={this.state.errPhone}
                                errPwd={this.state.errPwd}
                                errCPwd={this.state.errCPwd}
                        />

                    </div>
                </div>

                <Button variant="contained" onClick={() => this.HandleClick()}>submit</Button>
            </>
        )
    }
}

// ReactDOM.render(<Login/>, document.getElementById('root'))
