import React from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import GlobalStyles from 'styles/GlobalStyles';
import 'styles/variables.colors.css';
import 'styles/variables.config.css';
import 'styles/css/container.css';
import 'styles/css/cols.css';
import 'styles/css/classes.css';
import 'styles/css/ckeditor.css';
import 'styles/css/tail.css';
import 'styles/css/font.css';
import 'styles/css/styles.css';
import 'styles/css/lightbox.css';

const App = ({ Component, pageProps }) => {
    //NextJS router
    const router = useRouter();

    return (
        <div className={`__root`}>
            <GlobalStyles />
            <Script src="/././js/tarteaucitron/tarteaucitronjs/tarteaucitron.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/tarteaucitron.parameters.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/google-analytics.js" strategy="beforeInteractive" />
            <Component
                {...pageProps}
                router={router}
            />
        </div>
    )
}

export default App;