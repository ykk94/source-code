const account = require('../model/account')

const mdhash = (s) => {
    let crypto = require('crypto')
    let md5 = crypto.createHash('md5')
    let digest = md5.update(s, 'utf8').digest('hex')
    return digest
}

const add = {
    path: '/api/account/add',
    method: 'post',
    func: (request, response) => {
        let form = request.body
        let ft = (form.account !== '') && (form.password !== '')
        form.password = mdhash(form.password)
        let fe = account.exist(form)
        if (ft && fe) {
            account.new(form)
            let o = {}
            o.messge = '注册成功'
            o.bool = true
            let r = JSON.stringify(o)
            response.send(r)
        } else {
            let o = {}
            o.messge = '注册失败,用户名已存在'
            o.bool = false
            let r = JSON.stringify(o)
            response.send(r)
        }
    }
}

const chek = {
    path: '/api/account/chek',
    method: 'post',
    func: (request, response) => {
        let form = request.body
        form.password = mdhash(form.password)
        let fc = account.chek(form)
        if (fc) {
            let o = {}
            o.messge = '登录成功'
            o.bool = true
            let r = JSON.stringify(o)
            response.send(r)
        } else {
            let o = {}
            o.messge = '登录失败,请确认用户名及密码是否正确'
            o.bool = false
            let r = JSON.stringify(o)
            response.send(r)
        }
    }
}

const routes = [
    add,
    chek,
]

module.exports.routes = routes
