import React, {createContext, useContext, useState} from "react";
import cookie from "react-cookies";
import axios from "axios";
import {checkPassword} from "../logic/ValCheck";
import {ip} from "../ip";


const AccountContext = createContext();
export const useAccount = () => useContext(AccountContext);
const sample = {
    "id": cookie.load("login"),
    "user_name": "",
    "user_email": "",
    "user_date_of_birth": null,
    "user_mobile": "",
    "user_address": null
}
export default function AccountProvider({children}) {
    const [open, setOpen] = useState(false)
    const [oldPwd, setOldPwd] = React.useState("")
    const [newPwd, setNewPwd] = React.useState("")
    const [conPwd, setConPwd] = React.useState("")
    const [errInfo, setErrInfo] = React.useState({errOld: true, errNew: true, errCon: true})
    const [userProfile, setUserProfile] = React.useState(sample)
    const [newUserProfile, setNewUserProfile] = React.useState(sample)
    const [loading, setLoading] = React.useState(true)

    const [isReadonly, setIsReadonly] = useState(true)
    const changePwd = () => {

        const res = checkPassword(newPwd, conPwd)
        if (res["Pwd"] !== true || res["CPwd"] !== true) {
            setErrInfo({errOld: true, errNew: res["Pwd"], errCon: res["CPwd"]})
        } else {
            axios.put("http://"+ ip +"/api/login_signup/change_password", {
                id: cookie.load("login"),
                user_old_password: oldPwd,
                user_new_password: newPwd
            }).then(r => {
                    alert("success")
                }
            ).catch(r => {
                if (r.message.indexOf("400") !== -1) {
                    const res_old = r.response.data.message
                    setErrInfo({errOld: res_old, errNew: true, errCon: true})
                }
            })
        }
    }
    const getUserProfile = () => {
        axios.get(`http://`+ ip +`/api/user_information/user_profile/${cookie.load("login")}`)
            .then(r => {
                // console.log(r.data)
                const user = r.data
                if (user.address) {
                    user["user_country"] = user.address.split(", ")[0]
                    user["user_state"] = user.address.split(", ")[1]
                    user["user_detail_street"] = user.address.split(", ")[2]
                } else {
                    user["user_country"] = "Australia"
                    user["user_state"] = "New South Wales"
                    user["user_detail_street"] = ""
                }
                setUserProfile(user)
                setNewUserProfile({...user})
                setLoading(false)
            })
            .catch(r => console.log(r))
    }
    const Submit = () => {

        // console.log(newUserProfile)
        const data = newUserProfile
        data["user_address"] = [data["user_country"], data["user_state"], data["user_detail_street"]].join(", ")
        // this.setState({new_user: userProfile})
        // console.log(sessionStorage.getItem("id"))
        axios.put("http://"+ ip +"/api/user_information/user_profile/update_user_information", {

                "id": cookie.load("user"),
                "user_name": data.user_name,
                "user_mobile": data.user_mobile,
                "user_date_of_birth": data.user_date_of_birth,
                "user_address": data.user_address
            }
        ).then(() => {
                setUserProfile(data)
                setIsReadonly(true)
            }//after axios
            // console.log("success")
        ).catch(
            r => console.log(r)
        )


    }
    return (
        <AccountContext.Provider value={{
            open, setOpen, oldPwd, setOldPwd,
            newPwd, setNewPwd,
            conPwd, setConPwd,
            errInfo, setErrInfo,
            loading, setLoading,
            getUserProfile,
            userProfile,
            changePwd,
            newUserProfile, setNewUserProfile,
            Submit,
            isReadonly, setIsReadonly
        }}>
            {children}
        </AccountContext.Provider>
    )
}