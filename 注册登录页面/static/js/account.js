const log = console.log.bind(console)

const ajax = (request) => {
    let r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }
    r.onreadystatechange = () => {
        if (r.readyState === 4) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}

const e = (selector) => document.querySelector(selector)

const accountNew = (form) => {
    let data = JSON.stringify(form)
    let request = {
        method: 'POST',
        url: '/api/account/add',
        contentType: 'application/json',
        data: data,
        callback: (response) => {
            let res = JSON.parse(response)
            if (res.bool) {
                swal('提示', res.messge, 'success')
            } else {
                swal('提示', res.messge, 'error')
            }
        }
    }
    ajax(request)
}

const accountChek = (form) => {
    let data = JSON.stringify(form)
    let request = {
        method: 'POST',
        url: '/api/account/chek',
        contentType: 'application/json',
        data: data,
        callback: (response) => {
            let res = JSON.parse(response)
            if (res.bool) {
                swal('提示', res.messge, 'success')
            } else {
                swal('提示', res.messge, 'error')
            }
        }
    }
    ajax(request)
}

const login = () => {
    let button = e('#id-button-login')
    button.addEventListener('click', (event) => {
        let form = {
            account: e('#id-input-account').value,
            password: e('#id-input-password').value,
        }
        let b = actionLogin()
        if (b) {
            accountChek(form)
        } else {
            let s = '请输入规范用户名和密码，用户名的长度为2-10，首位为字母，其余为字母数字或下划线'
            swal('提示！', s, 'error')
        }
    })
}

const logup = () => {
    let button = e('#id-button-logup')
    button.addEventListener('click', (event) => {
        let form = {
            account: e('#id-input-account').value,
            password: e('#id-input-password').value,
        }
        let b = actionLogin()
        if (b) {
            accountNew(form)
        } else {
            let s = '请输入规范用户名和密码，用户名的长度为2-10，首位为字母，其余为字母数字或下划线'
            swal('提示！', s, 'error');
        }
    })
}

const bindEvents = () => {
    login()
    logup()
}

const __main = () => {
    bindEvents()
}

__main()
