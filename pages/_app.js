import React from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import 'styles/css/tail.css'
import 'styles/css/container.css'
import 'styles/css/cols.css'
import 'styles/css/font.css'
import 'styles/css/lightbox.css'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }) => {
    const router = useRouter()

    return (
        <React.Fragment>
            <GlobalStyles />
            <Script src="/././js/tarteaucitron/tarteaucitronjs/tarteaucitron.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/tarteaucitron.parameters.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/google-analytics.js" strategy="beforeInteractive" />
            <Component
                {...pageProps}
                router={router}
            />
        </React.Fragment>
    )
}

export default App