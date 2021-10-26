import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
//import HomeA from "../Inicio/homeA/HomeA";
const googleClientId =  '218116100864-hk3qinak7se1pqeflnevs87qkj50qvvc.apps.googleusercontent.com';// process.env.REACT_APP_GOOGLE_CLIENT_ID;

 
const loadGoogleScript = () => {
 
  //loads the Google JavaScript Library
  (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
 
      //we have at least one script (React)
      const firstJs = document.getElementsByTagName('script')[0];
 
      //prevent script from loading twice
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script'); 
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad; 
      firstJs.parentNode.insertBefore(js, firstJs);
  }());    
 
}
 
 
function App() {
 
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
 
  const onSuccess = (googleUser) => {
    debugger;
    console.log('result from google', googleUser);
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };
 
  const onFailure = () => {
    setIsLoggedIn(false);
  }
 
  const logOut = () => {
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };
 
  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }
 
 
  useEffect(() => {
 
    //window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
 
      const _gapi = window.gapi;
      setGapi(_gapi);
 
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
 
    //ensure everything is set before loading the script
    loadGoogleScript();
 
  }, []);
 
 
 
 
  return (
    <div className="container pt-5 w-50">
      <header className="alert alert-secondary">

        <div>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <div className="alert alert-warning">
            <h3>Bienvenido</h3>
            <h6>Sistema de ventas web</h6>
          </div>
          <div>
            <p>Inicia sesion con Google</p>
            <hr/>
          </div>
          
          {!isLoggedIn &&
            <div>
              <div id="google-signin"></div>
            </div>
          }
  
          {isLoggedIn &&
            <div>
              <div>
                <img src={imageUrl} />
              </div><br/>
              <div>{name}</div>
              <div>{email}</div><br/>
              
              <button className='btn btn-outline-danger' onClick={logOut}>Log Out</button>
              <div>
                  <NavLink exact to="/homeA" className="btn btn-warning m-1">Ingresar</NavLink>
              </div>
            </div>
          }
          
        </div>

      </header>
    </div>
  );
}
 
 
export default App;