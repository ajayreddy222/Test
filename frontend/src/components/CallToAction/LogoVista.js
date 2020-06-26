import React, {Component} from 'react';
import vista from '../../assets/img/VISTA+Logo-01.png'

class LogoVista extends Component {
    render() {
        return (
            <div className="logo-area call-action">
                <img src={vista} alt="A-KEEP-Logo" />
            </div>
        );
    }
}

export default LogoVista;