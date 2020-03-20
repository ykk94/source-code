import React, {Component} from 'react'
import Litr from './litr'

class Lictr extends Component {
    render() {
        let pco = this.props.pco
        return (
            <ul>
                {
                    pco.map((p, k) => (
                        <li key={k}>
                            <Litr color={p} idn={k} consup={this.props.consup} />
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Lictr