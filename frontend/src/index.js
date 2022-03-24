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

function LoginPart(props) {

    if (props.type === "guest") {
        return <GuestLogin HandleChange={props.HandleChange}/>
    } else {
        return <UserLogin HandleChange={props.HandleChange}/>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            WantLogin: "1",
            InviteCode: "",
            Email: "",
            Password: ""
        }
    }

    HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value)
        // console.log(this)
        this.setState({[name]: value},)
    }
    HandleClick = ()=>{
        if (this.state.WantLogin==="1"){
            // console.log(this.state.Username,this.state.Password)
                axios.post('http://localhost:5000/login_signup/login', {
                    user_email: this.state.Email,
                    user_password:this.state.Password
                }).then((response)=> {
                    let status = response;
                    console.log(status,1)
                    if (status.data.message === 'Information waiting for confirmation') {
                        console.log("Success!")
                    } else {
                        console.log("Error!")
                    }
                })
                .catch((response)=>{
                    console.log(response,2)
                    });
        }else{
            // console.log(this.state.InviteCode)
        }
    }
    render() {
        return (
            <>
                <h1>Hello</h1>
                <div id="RadioBox">
                    <input type="radio" name="WantLogin" value={1} checked={this.state.WantLogin === "1"}
                           onChange={(e) => this.HandleChange(e)}/> <label htmlFor="user">User</label>
                    <input type="radio" name="WantLogin" value={0} checked={this.state.WantLogin === "0"}
                           onChange={(e) => this.HandleChange(e)}/><label htmlFor="guest">Guest</label>
                </div>
                <div id="LoginPart">
                    <LoginPart HandleChange={this.HandleChange}
                               type={this.state.WantLogin === "0" ? "guest" : "user"}/>
                </div>
                <Button variant="contained" onClick={()=>this.HandleClick()}>submit</Button>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
