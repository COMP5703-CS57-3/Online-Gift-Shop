export function checkNickName(val) {
    const reg = new RegExp(/[[a-zA-Z0-9_]+[\s*]/);
    if (val.length > 12) {
        return "* Nick name is limited to 12 characters"
    } else if (val.length === 0) {
        return "* Nick name is empty"
    } else if (val.length < 4) {
        return "* Nick name should be at least 4 characters"
    } else if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        return "* Nick name should only allow a-zA-z0-9_"
    } else {
        return true
    }
}

export function checkEmail(val) {
    const reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/)
    if (!val || val.length === 0) {
        return "* Email is empty"
    } else if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        return "* Please input a valid email"
    } else {
        return true
    }

}

export function checkNumber(val){
    const reg = new RegExp(/^[A-Za-z0-9]+/)
    if (val.length===0){
        return false
    }else if (val.match(reg) !== null && val.match(reg)[0].length === val.length){
        return true
    }else{
        return false
    }
}

export function checkEmpty(val){
    if(val.length===0){
        return false
    }else{
        return true
    }
}

export function checkPhone(val) {
    const reg_aus = new RegExp(/^(\+?61|0)4\d{8}$/)// australian type
    const reg_chn = new RegExp(/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/) //chinese type
    if (val.length === 0) {
        return "* Phone number is empty"
    } else if ((val.match(reg_aus) !== null && val.match(reg_aus)[0].length === val.length) || (val.match(reg_chn) !== null && val.match(reg_chn)[0].length === val.length)) {
        return true
    } else {
        return "* Please input a valid phone number"
    }
}

export function checkPassword(val, val_twice) {
    let res = {"Pwd": true, "CPwd": true}
    // const reg = new RegExp(/[0-9]+/)
    if (val.length === 0) {
        res["Pwd"] = "* Password is empty"
    } else if (val.length < 8) {
        res["Pwd"] = "* Password must be more than eight characters"
    }
    if (val !== val_twice) {
        res["CPwd"] = "* Please confirm your input"
    }
    return res
}

export function checkTitel(val) {
    const reg = new RegExp(/[a-zA-Z0-9_]+/);
     if (val.length === 0) {
        return "* Titel name is empty"
    }  else {
        return true
    }

}

export function checkFirstName(val) {
    const reg = new RegExp(/[a-zA-Z]+/);
     if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        // return "* First name should only allow a-zA-z"
         return false
    } else {
        return true
    }
}

export function checkLastName(val) {
    const reg = new RegExp(/[[a-zA-Z]+/);
     if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        // return "* First name should only allow a-zA-z"
         return false
    } else {
        return true
    }
}

export function checkTime(val) {
    const reg = new RegExp(/[[0-9_/]+/);
     if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        // return "* First name should only allow a-zA-z"
         return false
    } else {
        return true
    }
}

export function checkPostcode(val) {
    const reg = new RegExp(/^[0-9]+/);
    if (val.length < 6) {
        return false
    } else if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        return false
    } else {
        return true
    }
}

export function checkContry(val) {
    const reg = new RegExp(/[[a-zA-Z]+/);
     if (val.match(reg) === null || val.match(reg)[0].length !== val.length) {
        // return "* First name should only allow a-zA-z"
         return false
    } else {
        return true
    }
}

export function checkStreet(val) {
    const reg = new RegExp(/[a-zA-Z0-9_]+/);
     if (val.match(reg) === null ) {
        // return "* First name should only allow a-zA-z"
         return false
    } else {
        return true
    }
}