import React, {Component} from 'react';
import logo from '../../assets/img/clogo.png'

class CLogo extends Component {
    render() {
        return (
            <div className="logo-area call-action">
                <img src={logo} alt="A-KEEP-Logo" />
            </div>
        );
    }
}

export default CLogo;