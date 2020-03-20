import React, {Component} from 'react'
import Lpe from './lpe'

class Pict extends Component {
    render() {
        let pics = this.props.pic
        let pco = this.props.pco
        return (
            <ul>
                {
                    pics.map((p, k) => (
                        <li key={k}>
                            <Lpe pic={p} shin={pco[k]} />
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Pict