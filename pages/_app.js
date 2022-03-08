import ThemeContextWrapper from '../theme/ThemeContextWrapper'
import Layouts from '../src/layouts/Layouts'
import '../styles/globals.css'
import '../styles/style.css'
import '../styles/animate.min.css'
import '../styles/tail.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeContextWrapper>
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </ThemeContextWrapper>
    )
}

export default MyApp
