const checkHead = function(s) {
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let c = s[0]
    return letter.includes(c)
}

const checkLength = function(s) {
    return s.length >= 2 && s.length <= 10
}

const checkTail = function(s) {
    let t = s[s.length - 1]
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let digit = '0123456789'
    return letter.includes(t) || digit.includes(t)
}

const checkString = function(s) {
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let digit = '0123456789'
    let underscore = '_'
    let valid = letter + digit + underscore

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (!valid.includes(c)) {
            return false
        }
    }
    return true
}

const actionLogin = function() {
    let input = e('#id-input-account')
    let value = input.value
    let validHead = checkHead(value)
    let validLength = checkLength(value)
    let validTail = checkTail(value)
    let validString = checkString(value)
    
    if (validHead && validLength && validTail && validString) {
        return true
    } else {
        return false
    }
}
