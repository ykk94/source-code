import React, {Component} from 'react'

class Lpe extends Component {
    render() {
        let pic = this.props.pic
        let a = this.props.shin ? 'active' : ''
        return (
            <img src={pic} className={`slide-image ${a}`} alt=''/>
        )
    }
}

export default Lpe