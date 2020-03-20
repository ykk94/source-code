import React, {Component} from 'react'

class Litr extends Component {
    show = () => {
        let i = this.props.idn
        let func = this.props.consup
        func(i)
    }

    render() {
        let c = this.props.color ? '' : 'white'
        return (
            <div className={`slide-indi ${c}`} onClick={this.show}></div>
        )
    }
}

export default Litr