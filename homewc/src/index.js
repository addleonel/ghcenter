import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App.jsx';
// import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    fab,
    faGithub, 
    faWhatsapp,
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter, 
    faTwitch,
    faTiktok,
    faReddit,
    faTumblr,
} from '@fortawesome/free-brands-svg-icons'
import { fas, faGlobe, faMapMarker, faPlay, faBookmark, faShareAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(
    fab,
    fas,
    far, 
    faGithub, 
    faWhatsapp,
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter, 
    faTwitch,
    faTiktok,
    faReddit,
    faTumblr,
    faGlobe,
    faMapMarker,
    faPlay,
    faBookmark,
    faShareAlt,
    faPlus
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
