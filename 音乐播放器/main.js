const log = console.log.bind(console)

const e = function(selector) {
    let element = document.querySelector(selector)
    return element
}

const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    return elements
}

const appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

const removeClassAll = function(className) {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.classList.remove(className)
    }
}

const bindAll = function(selector, eventName, callback) {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

class Musichandle {
    constructor() {
        this.audio = e('#id-audio-player')
        this.play = e('#button-play')
        this.pause = e('#button-pause')
        this.before = e('#button-before')
        this.next = e('#button-next')
        this.store = e('#button-store')
        this.voice = e('#button-voice')
        this.quite = e('#button-quite')
        this.loop = e('#button-loop')
        this.oneloop = e('#button-oneloop')
        this.random = e('#button-random')
        this.list = e('#button-list')
        this.lric1 = {
            '[00:00.10]': 'よねづ けんし',
            '[00:01.60]': '夢ならば',
            '[00:02.50]': 'どれほどよかったでしょう',
            '[00:06.96]': '未だにあなたのことを夢にみる',
            '[00:12.14]': '忘れた物を取りに帰るように',
            '[00:17.68]': '古びた思い出の埃を払う',
            '[00:26.13]': '戻らない幸せがあることを',
            '[00:31.43]': '最後にあなたが教えてくれた',
            '[00:36.93]': '言えずに隠してた昏い過去も',
            '[00:42.53]': 'あなたがいなきゃ',
            '[00:44.91]': '永遠に昏いまま',
            '[00:48.67]': 'きっともうこれ以上',
            '[00:51.15]': '傷つくことなど',
            '[00:53.80]': 'ありはしないとわかっている',
            '[00:58.54]': 'あの日の悲しみさえ',
            '[01:01.28]': 'あの日の苦しみさえ',
            '[01:04.11]': 'そのすべてを愛してた',
            '[01:07.04]': 'あなたとともに',
            '[01:09.64]': '胸に残り離れない',
            '[01:12.59]': '苦いレモンの匂い',
            '[01:15.65]': '雨が降り止むまでは帰れない',
            '[01:21.30]': '今でもあなたはわたしの光',
            '[01:37.93]': '暗闇であなたの背をなぞった',
            '[01:43.16]': 'その輪郭を鮮明に覚えている',
            '[01:48.78]': '受け止めきれないものと',
            '[01:51.81]': '出会うたび',
            '[01:54.24]': '溢れてやまないのは涙だけ',
            '[02:00.37]': '何をしていたの',
            '[02:02.81]': '何を見ていたの',
            '[02:05.58]': 'わたしの知らない横顔で',
            '[02:10.66]': 'どこかであなたが今',
            '[02:13.12]': 'わたしと同じ様な',
            '[02:15.92]': '涙にくれ',
            '[02:17.31]': '淋しさの中にいるなら',
            '[02:21.41]': 'わたしのことなどどうか',
            '[02:24.67]': '忘れてください',
            '[02:27.48]': 'そんなことを心から願うほどに',
            '[02:33.17]': '今でもあなたはわたしの光',
            '[02:41.76]': '自分が思うより',
            '[02:46.96]': '恋をしていたあなたに',
            '[02:52.37]': 'あれから思うように',
            '[02:58.00]': '息ができない',
            '[03:03.58]': 'あんなに側にいたのに',
            '[03:08.97]': 'まるで嘘みたい',
            '[03:14.18]': 'とても忘れられない',
            '[03:19.80]': 'それだけが確か',
            '[03:30.69]': 'あの日の悲しみさえ',
            '[03:33.16]': 'あの日の苦しみさえ',
            '[03:35.87]': 'そのすべてを愛してた',
            '[03:38.67]': 'あなたとともに',
            '[03:41.27]': '胸に残り離れない',
            '[03:44.41]': '苦いレモンの匂い',
            '[03:47.29]': '雨が降り止むまでは帰れない',
            '[03:52.83]': '切り分けた果実の片方の様に',
            '[03:58.39]': '今でもあなたはわたしの光', 
        }
        this.lric2 = {
            '[00:00.67]': 'だんご　だんご　だんご　だんご　だんご',
            '[00:10.11]': 'だんご　だんご　だんご　だんご　だんご',
            '[00:19.36]': 'やんちゃな焼きだんご　やさしいあんだんご', 
            '[00:29.11]': 'すこし夢見がちな　月見だんご',
            '[00:38.61]': 'おすましごまだんご　四つ子串だんご',
            '[00:48.24]': 'みんなみんなあわせて　１００人家族',
            '[00:57.99]': '赤ちゃんだんごはいつも幸せの中で',
            '[01:07.55]': '年寄りだんごは目を細めてる',
            '[01:15.93]': 'なかよしだんご　手をつなぎ 大きなまるい輪になるよ', 
            '[01:25.49]': '町をつくり　だんご星の上　みんなで笑いあうよ',
            '[01:34.81]': 'うさぎもそらで手をふってみてる でっかいおつきさま',
            '[01:44.74]': 'うれしいこと　悲しいことも　全部まるめて',
            '[02:00.50]': '团子大家族（だんご大家族）',
            '[02:37.82]': 'なかよしだんご 手をつなぎ　大きなまるい輪になるよ',
            '[02:47.13]': '町をつくり　だんご星の上　みんなで笑いあうよ',
            '[02:56.75]': 'うさぎもそらで手をふってみてる　でっかいおつきさま',
            '[03:06.38]': 'うれしいこと　悲しいことも　全部まるめて',
            '[03:16.19]': 'lalalala…………',
            '[03:53.20]': 'だんご　だんご　だんご　だんご　だんご',
            '[04:02.82]': 'だんご　だんご　だんご　だんご　だんご',
            '[04:11.58]': 'だんご　だんご　だんご　だんご　だんご',
            '[04:21.95]': 'だんご　だんご　だんご　だんご　だんご',
        }
        this.songsmsg = [
            {
                src: "./audio/Lemon.mp3",
                author: '米津玄师',
                bg: "./images/backimg/lemon.jpg",
                style: "appbg1",
                lric: this.lric1,
            },
            {
                src: "./audio/Clannad.mp3",
                author: '大河内一楼',
                bg: "./images/backimg/pafu.jpg",
                style: "appbg2",
                lric: this.lric2,
            },
            {
                src: "./audio/castlevannie.mp3",
                author: '山根大妈',
                bg: "./images/backimg/castivannie.jpg",
                style: "appbg3",
                lric: '',
            },
        ]
        this.md = [
            {
                num: 0,
                name: 'loop',
                elemnt: this.loop,
                func: this.modelloop.bind(this),
            },
            {
                num: 1,
                name: 'oneloop',
                elemnt: this.oneloop,
                func: this.modeloneloop.bind(this),
            },
            {
                num: 2,
                name: 'random',
                elemnt: this.random,
                func: this.modelrandom.bind(this),
            },
        ]
        this.index = 0
        this.state = false
        this.vlent = 1
        this.set = 0
        this.state2 = false
        this.full = false
    }
    setup() {
        this.handleplay()
        this.handlepause()
        this.handlebefore()
        this.handlenext()
        this.modelset()
        this.modelend()
        this.showall()
        this.handlestore()
        this.liveProgress()
        this.showView()
        this.voiceContro()
        this.handlevoice()
        this.handlelist()
        this.oprateList()
    }
    addstyle(a, b, s) {
        a.classList.add(s)
        b.classList.remove(s)
    }
    modelplay() {
        this.audio.play()
        this.full = true
        this.recordStart()
        this.addstyle(this.pause, this.play, 'showb')
    }
    handleplay() {
        bindEvent(this.play, 'click', () => {
            this.modelplay()
        })
    }
    handlepause() {
        bindEvent(this.pause, 'click', () => {
            this.audio.pause()
            this.full = false
            this.recordPause()
            this.addstyle(this.play, this.pause, 'showb')
        })
    }
    replay() {
        this.recordStop()
        this.modelplay()
        this.showView()
    }
    modelcut(t) {
        let l = this.songsmsg.length
        this.index = (this.index + t + l) % l
        this.audio.src = this.songsmsg[this.index]['src']
        this.replay()
    }
    handlebefore() {
        bindEvent(this.before, 'click', () => {
            this.modelcut(-1)
        })
    }
    handlenext() {
        bindEvent(this.next, 'click', () => {
            this.modelcut(1)
        })
    }
    modelset() {
        bindAll('.mod', 'click', (event) => {
            removeClassAll('active')
            let t = event.target
            for (let e of this.md) {
                if (e.elemnt === t) {
                    let l = this.md.length
                    let index = (e.num + 1 + l) % l
                    let s = this.md[index]
                    this.audio.dataset.model = s.name
                    s.elemnt.classList.add('active')
                    break
                }
            }
        })
    }
    modelend() {
        bindEvent(this.audio, 'ended', () => {
            let mod = this.audio.dataset.model
            for (let e of this.md) {
                if (e.name === mod) {
                    e.func()
                    break
                }
            }
        })
    }
    modelloop() {
        this.modelcut(1)
    }
    modeloneloop() {
        this.replay()
    }
    modelrandom() {
        let s = this.songsmsg
        let a = Math.random()
        let b = a * s.length
        let c = Math.ceil(b - 1)
        this.index = c
        this.audio.src = s[c]['src']
        this.replay()
    }
    transtime(time) {
        let s = String(time)
        let t = parseInt(s, 10)
        let t1 = t % 60
        let t2 = (t - t1) / 60
        if (t1 < 10) {
            t1 = `0${t1}`
        }
        let f = `${t2} : ${t1}`
        return f
    }
    handlecanplay() {
        let audio = this.audio
        let t = e('#totaltime')
        bindEvent(audio, 'canplay', () => {
            let duration = audio.duration
            let d = this.transtime(duration)
            t.innerHTML = d
        })
    }
    momentime() {
        let audio = this.audio
        let cur = audio.currentTime
        let c = this.transtime(cur)
        let now = e('#nowtime')
        now.innerHTML = c
    }
    autoshow() {
        let interval = 1000
        let m = this.momentime.bind(this)
        setInterval(function() {
            m()
        }, interval)
    }
    showall() {
        this.handlecanplay()
        this.autoshow()
    }
    handlestore() {
        bindEvent(this.store, 'click', () => {
            let s = this.state
            if (s) {
                this.store.src = './images/controlls/store.png'
            } else {
                this.store.src = './images/controlls/store2.png'
            }
            this.state = !s
        })
    }
    progressContro() {
        let inner = e('.drag')
        let outer = e('.progress')
        let dot = e('.dot')
        let audio = this.audio
        let max = outer.offsetWidth
        let moving = false
        let offset = 0
        dot.addEventListener('mousedown', (event) => {
            offset = event.clientX - dot.offsetLeft
            moving = true
        })
        document.addEventListener('mouseup', (event) => {
            moving = false
        })
        document.addEventListener('mousemove', (event) => {
            if (moving) {
                let x = event.clientX - offset
                if (x > max) {
                    x = max
                }
                if (x < 0) {
                    x = 0
                }
                let width = (x / max) * 98 + 2
                inner.style.width = String(width) + '%'
                audio.currentTime = ((width - 2) / 98) * audio.duration
            }
        })
    }
    normProgress() {
        let audio = this.audio
        let width = audio.currentTime / audio.duration * 98 + 2
        return String(width) + '%'
    }
    autoProgress() {
        let inner = e('.drag')
        let n = this.normProgress.bind(this)
        setInterval(() => {
            inner.style.width = n(this.audio)
        }, 0)
    }
    liveProgress() {
        this.progressContro()
        this.autoProgress()
    }
    showTitle() {
        let i = this.index
        let t = e('.songtitle')
        let n = e('.stitle') 
        let s = this.songsmsg
        let k = s[i]['src'].slice(8, -4)
        let m = s[i]['author']
        t.innerHTML = `${k} - ${m}`
        n.innerHTML = k
    }
    clockreover(s) {
        let a = Number(s.slice(0, 1)) * 10 + Number(s.slice(1, 2))
        let b = Number(s.slice(3, 4)) * 10 + Number(s.slice(4, 5))
        let c = Number('0.' + s.slice(6, 8))
        let a2 = a * 60
        let b2 = a2 + b
        let c2 = b2 + c
        return c2
    }
    showLric() {
        let k = e('.lric')
        let audio = this.audio
        let l = this.songsmsg[this.index]['lric']
        if (l === '') {
            k.innerHTML = '纯音乐或暂无歌词'
            return
        }
        let clock = this.clockreover.bind(this)
        this.world = setInterval(() => {
            if (this.full) {
                for (let key in l) {
                    let s = key.slice(1, 10)
                    let a = clock(s)
                    let t = audio.currentTime - a
                    if (t < 0.001) {
                        k.innerHTML = l[key]
                        break
                    }
                }
            }
        }, 10)
    }
    showrecord() {
        let i = this.index
        let t = e('#inner-img')
        let n = e('#currentimg')
        let s = this.songsmsg
        let k = s[i]['bg']
        t.src = k
        n.src = k
    }
    showHback() {
        let body = document.body
        let i = this.index
        let s = this.songsmsg
        let k = s[i]['style']
        let l = ['appbg1', 'appbg2', 'appbg3']
        for (let t of l) {
            body.classList.remove(t)
        }
        body.classList.add(k)
    }
    showView() {
        this.showTitle()
        this.showHback()
        this.showrecord()
        if (this.world !== null) {
            clearInterval(this.world)
        }
        this.showLric()
    }
    voiceContro() {
        let inner = e('.voice-outer')
        let outer = e('.voice-adjust')
        let dot = e('.voice-dot')
        let audio = this.audio
        let max = outer.offsetWidth
        let moving = false
        let offset = 0
        dot.addEventListener('mousedown', (event) => {
            offset = event.clientX - dot.offsetLeft
            moving = true
        })
        document.addEventListener('mouseup', (event) => {
            moving = false
        })
        document.addEventListener('mousemove', (event) => {
            if (moving) {
                let x = event.clientX - offset
                if (x > max) {
                    x = max
                }
                if (x < 0) {
                    x = 0
                }
                let width = (x / max) * 90 + 10
                inner.style.width = String(width) + '%'
                audio.volume = (width - 10) / 90
                this.vlent = audio.volume
                if (this.vlent === 0) {
                    this.makeSlience(audio)
                } else {
                    this.makeRelize(this.quite, this.voice)
                }
            }
        })
    }
    handlevoice() {
        let audio = this.audio
        bindEvent(this.voice, 'click', () => {
            this.makeSlience(audio)
        })
        bindEvent(this.quite, 'click', () => {
            this.makeRelize(this.quite, this.voice)
            audio.volume = this.vlent
            let inner = e('.voice-outer')
            let width = this.vlent * 90 + 10
            inner.style.width = String(width) + '%'
        })
    }
    makeRelize(a, b) {
        a.style.display = 'none'
        b.style.display = 'inline'
    }
    makeSlience(audio) {
        let inner = e('.voice-outer')
        inner.style.width = '0%'
        this.makeRelize(this.voice, this.quite)
        audio.volume = 0
    }
    recordStart() {
        let c = e('.stylus_1')
        c.style.transform = 'rotate(-25deg)'
        this.mathord()  
    }
    recordPause() {
        let c = e('.stylus_1')
        c.style.transform = 'rotate(-40deg)'
        clearInterval(this.timer)
    }
    recordStop() {
        this.set = 0
        if (this.timer !== null) {
            clearInterval(this.timer)
        }
    }
    mathord() {
        let img = e('#sp')
        let speed = 0.05
        let set = this.set
        let interval = 0
        this.timer = setInterval(() => {
            img.style.transform = `rotate(${set}deg)`
            set += speed
            this.set = set
        }, interval)
    }
    insertList() {
        let a = e('.list-container')
        let t = `
            <div class="playlist">
                <div class="playlist-header">
                    播放列表<span id="songsnum">（共3首）</span>
                </div>
                <div class="playlist-body">
                    <div class="list-songs" data-id="0">
                        Lemon<span class="right-author">米津玄师</span>
                    </div>
                    <div class="list-songs" data-id="1">
                        Clannad<span class="right-author">大河内一楼</span>
                    </div>
                    <div class="list-songs" data-id="2">
                        Castlevannie<span class="right-author">山根大妈</span>
                    </div>
                </div>
            </div>
        `
        appendHtml(a, t)
    }
    handlelist() {
        bindEvent(this.list, 'click', () => {
            if (this.state2) {
                let p = e('.list-container')
                p.innerHTML = ''
                this.state2 = !this.state2
            } else {
                this.insertList()
                this.state2 = !this.state2
            }
        })
    }
    oprateList() {
        let l = e('.list-container')
        bindEvent(l, 'click', (e) => {
            let self = e.target
            this.index = Number(self.dataset.id)
            this.audio.src = this.songsmsg[this.index]['src']
            this.replay()
        })
    }
}

const insertDom = () => {
    let b = e('#bone')
    let t = `
        <div class="record">
            <div class='stylusBox'>
                <div class='stylus_1'>
                    <div class='stylus_2'>
                        <div class='stylus_3'></div>
                        <div class='stylus_4'>
                            <div class='stylus_5'>
                                <div class='stylus_6'></div>
                                <div class='stylus_7'>
                                    <div class='stylus_8'>
                                        <div class='stylus_9 stylus_10'></div>
                                        <div class='stylus_9 stylus_11'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scpc">
                <div id="sp">
                    <img src="./images/backimg/lemon.jpg" alt="" id="inner-img"/>
                </div>
            </div>
        </div>
        <div class="lric-container">
            <div class="stitle"></div>
            <div class="lric"></div>
        </div>
        <div class="mcontaiener">
            <img src="./images/backimg/lemon.jpg" alt="" id="currentimg"/>
            <div class="mc-left">
                <img src="./images/controlls/before.png" id="button-before" class="controbut" title="上一曲"/>
                <img src="./images/controlls/next.png" id="button-next" class="controbut" title="下一曲"/>
                <img src="./images/controlls/play.png" id="button-play" class="controbut showb" title="播放"/>
                <img src="./images/controlls/pause.png" id="button-pause" class="controbut" title="暂停"/>
            </div>
            <div class="mc-center">
                <div class="progress-container">
                    <div class="showtimer">
                        <span id="nowtime"></span> &nbsp;/&nbsp; <span id="totaltime"></span>
                    </div>
                    <div class="progress">
                        <div class="drag">
                            <div class="dot"></div>
                        </div>
                    </div>
                    <div class="songtitle"></div>
                </div>
                <img src="./images/controlls/store.png" title="收藏" id="button-store" class="controbut"/>
                <div class="ap-line">
                    <div class="ap-line-draw"></div>
                </div>
            </div>
            <div class="mc-right">
                <img src="./images/controlls/voice.png" title="音量" id="button-voice" class="controbut"/>
                <img src="./images/controlls/quite.png" title="静音" id="button-quite" class="controbut"/>
                <div class="voice-adjust">
                    <div class="voice-outer">
                        <div class="voice-dot"></div>
                    </div>
                </div>
                <img src="./images/controlls/loop.png" title="循环播放" id="button-loop" class="controbut mod active"/>
                <img src="./images/controlls/oneloop.png" title="单曲循环" id="button-oneloop" class="controbut mod"/>
                <img src="./images/controlls/random.png" title="随机播放" id="button-random" class="controbut mod"/>
                <img src="./images/controlls/list.png" title="播放列表" id="button-list" class="controbut"/>
            </div>
            <div class="list-container"></div>
        </div>
    `
    appendHtml(b, t)
}

const __main = () => {
    insertDom()
    let m = new Musichandle()
    m.setup()
}

__main()
