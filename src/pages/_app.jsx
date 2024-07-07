import React from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps}) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;