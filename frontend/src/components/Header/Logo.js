import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={logo} alt="A-KEEP-Logo" /></a>
            </div>
        );
    }
}

export default Logo;