const fs = require('fs')

const accountFilePath = 'db/account.json'

class ModelAccount {
    constructor(form) {
        this.account = form.account || ''
        this.password = form.password || ''
        this.created_time = Math.floor(new Date() / 1000)
    }
}

const loadAccounts = () => {
    let content = fs.readFileSync(accountFilePath, 'utf8')
    let accounts = JSON.parse(content)
    return accounts
}

const a = {
    data: loadAccounts(),
}

a.new = function(form) {
    let m = new ModelAccount(form)
    let d = this.data[this.data.length - 1]
    if (d === undefined) {
        m.id = 1
    } else {
        m.id = d.id + 1
    }
    this.data.push(m)
    this.save()
    return m
}

a.save = function() {
    let s = JSON.stringify(this.data, null, 2)
    fs.writeFile(accountFilePath, s, (error) => {
        if (error !== null) {
            console.log('error', error)
        } else {
            console.log('保存成功')
        }
    })
}

a.exist = function(form) {
    for (let k of this.data) {
        if (form.account === k.account) {
            return false
        }
    }
    return true
}

a.chek = function(form) {
    for (let k of this.data) {
        if (form.account === k.account) {
            if (form.password === k.password) {
                return true
            }
        }
    }
    return false
}

module.exports = a
