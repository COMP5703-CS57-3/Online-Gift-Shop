export function checkNickName(val) {
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

export function checkEmail(val) {
    const reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/)
    if (val.length === 0) {
        return "* Email is empty"
    } else if (val.match(reg) === null || val.match(reg).length !== val.length) {
        return "* Please input a valid email"
    } else {
        return true
    }

}

export function checkPhone(val) {
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

export function checkPassword(val, val_twice) {
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