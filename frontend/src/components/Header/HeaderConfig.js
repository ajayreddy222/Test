import React from 'react';
import { useHistory } from 'react-router-dom';


function HeaderConfig(props) {
    const history = useHistory()

    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const login = async () => {
        const response = await fetch('/api/user', { credentials: 'include' });
        const body = await response.text();
        if (body === '') {
            let port = (window.location.port ? ':' + window.location.port : '');
            if (port === ':3000') {
                port = ':8080';
            }
            window.location.href = '//' + window.location.hostname + port + '/private';
        }
    }

    const logout = async () => {
        fetch('/api/logout', {
            method: 'POST', credentials: 'include',
            //  headers: { 'X-XSRF-TOKEN': this.state.csrfToken }
        })
            .then(res => res.json())
            .then(response => {
                 window.location.href = response.logoutUrl + "?id_token_hint=" +
              response.idToken + "&post_logout_redirect_uri=" + window.location.origin;

            });

    }

    // const MobileMenuHandler = () => {
    //     const offCanvasMenu = document.querySelector('.off-canvas-menu');
    //     offCanvasMenu.classList.add('active');
    // }

    return (

        // html codes;
        <div className="header-action mt-lg-3 text-right">
            <a href="/site-map"> <i className="fa fa-sitemap"/>Site Map</a>
            <a href="https://secure.squarespace.com/checkout/donate?donatePageId=5beef19f1ae6cfbc3ccd99e0">
                <button className="btn-about">Donate</button>
            </a>
            <button onClick={login} className="btn-cog">Login</button>

        </div>
    );
}

export default HeaderConfig;
