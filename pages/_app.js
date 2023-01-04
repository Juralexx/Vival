import Script from 'next/script'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import ThemeContextWrapper from '../theme/ThemeContextWrapper'
import Layouts from '../src/layouts/Layouts'
import '../styles/css/tail.css'
import '../styles/css/style.css'
import datas from '../data/datas.json'

const MyApp = ({ Component, pageProps }) => {
    const pathname = usePathname()

    return (
        <ThemeContextWrapper>
            <Script src="/././js/tarteaucitron/tarteaucitronjs/tarteaucitron.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/tarteaucitron.parameters.js" strategy="beforeInteractive" />
            <Script src="/././js/tarteaucitron/google-analytics.js" />
            <Layouts
                pathname={pathname}
            >
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta id="og-locale" property="og:locale" content="fr_FR" key="locale" />
                    <meta id="og-type" property="og:type" content="website" key="type" />
                    <meta id="og-site_name" property="og:site_name" content={datas.site_name} key="site_name" />
                    <meta id="og-url" property="og:url" content={pathname} key="url" />
                    <meta property="og:image:width" content="600" />
                    <meta property="og:image:height" content="314" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="robots" content="all" />
                </Head>
                <Component
                    {...pageProps}
                    datas={datas}
                    pathname={pathname}
                />
            </Layouts>
        </ThemeContextWrapper>
    )
}

export default MyApp