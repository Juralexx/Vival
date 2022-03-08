import ThemeContextWrapper from '../theme/ThemeContextWrapper'
import Layouts from '../src/layouts/Layouts'
import '../styles/css/style.css'
import '../styles/css/animate.min.css'
import '../styles/css/tail.css'

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
