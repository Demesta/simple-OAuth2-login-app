import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render( 
    <React.StrictMode>
        <Auth0Provider>
            domain = 'get from manage.auth0.com'
            clientid = 'get from manage.auth0.com'
            redirectUri = {window.location.origin}


            <App />
        </Auth0Provider>
    </React.StrictMode>
    , document.getElementById('root') );

/*install:
npm i @auth0/auth0-react axios
*/  