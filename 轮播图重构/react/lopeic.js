import React, {Component} from 'react'
import Pict from './pict'
import Lictr from './lictr'
import picture1 from './image/1.jpg'
import picture2 from './image/2.jpg'
import picture3 from './image/3.jpg'
import picture4 from './image/4.jpg'
import picture5 from './image/5.jpg'
import './slide.css'

class Lopeic extends Component {
    constructor(props) {
        super(props)
        this.pic = [picture1, picture2, picture3, picture4, picture5]
        this.state = {
            pco: [true, false, false, false, false],
            index: 0,
        }
    }

    consup = (index) => {
        let p = this.state.pco
        for (let i = 0; i < p.length; i++) {
            if (index === i) {
                p[i] = true
            } else {
                p[i] = false
            }
        }
        this.setState({
            pco: p,
            index: index,
        })
    }

    handleStepl = () => {
        let index = (this.state.index + 1) % this.pic.length
        this.consup(index)
    }

    handleStepr = () => {
        let index = (this.state.index - 1 + this.pic.length) % this.pic.length
        this.consup(index)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.handleStepl()
        }, 1000)
    }

    loop = () => {
        this.interval = setInterval(() => {
            this.handleStepl()
        }, 1000)
    }

    handleStop = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="slide" onMouseEnter={this.handleStop} onMouseLeave={this.loop}>
                <Pict pic={this.pic} pco={this.state.pco} />
                <button className="slide-button slide-left vertical-center" onClick={this.handleStepr}>&lt;</button>
                <button className="slide-button slide-right vertical-center" onClick={this.handleStepl}>&gt;</button>
                <div className="slide-indicators">
                    <Lictr pco={this.state.pco} consup={this.consup} />
                </div>
            </div>
        )
    }
}

export default Lopeic