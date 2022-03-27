//index.js
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@mui/material/Button';

function UserLogin(props) {
    return (
        <div className="container">
            Email:<input name="Email" onChange={(val) => props.HandleChange(val)}/> <br/>
            Password:<input name="Password" onChange={(val) => props.HandleChange(val)}/> <br/>
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
            Nickname:<input name="Username" onChange={(val) => props.HandleChange(val)}/> <br/>
            Email:<input name="Email" onChange={(val) => props.HandleChange(val)}/> <br/>
            Phone Number:<input name="Phone" onChange={(val) => props.HandleChange(val)}/> <br/>
            Password:<input name="Password" onChange={(val) => props.HandleChange(val)}/> <br/>
            Confirm password<input name="ConfirmedPwd" onChange={(val) => props.HandleChange(val)}/> <br/>
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
        return <Signup HandleChange={props.HandleChange}/>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: "1",
            WantLogin: "1",
            InviteCode: "",
            Email: "",
            Password: "",
            Username: "",
            Phone: "",
            ConfirmedPwd: ""
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
                // console.log(this.state.Username,this.state.Password)
                axios.post('http://localhost:5000/login_signup/login', {
                    user_email: this.state.Email,
                    user_password: this.state.Password
                }).then((response) => {
                    let status = response;
                    console.log(status, 1)
                    if (status.data.message === 'Information waiting for confirmation') {
                        console.log("Success!")
                    } else {
                        console.log("Error!")
                    }
                })
                    .catch((response) => {
                        console.log(response, 2)
                    });
            } else {
                console.log(this.state.InviteCode)
            }
        } else {
            //^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+
            console.log(this.state)
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
                                Login={this.state.Login}/>

                    </div>
                </div>

                <Button variant="contained" onClick={() => this.HandleClick()}>submit</Button>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
//ReactDOM.render(<Cart giftlist={giftdata} />, document.getElementById('root'))