import Navbar from './Navbar'
import Footer from './Footer'
import ScrolltoTop from '../tools/Scrolltotop'
import { addClass } from '../tools/Utils'
import Share from '../tools/Share'

export default function Layouts({ children, pathname }) {
    return (
        <main className={addClass(pathname === '/', 'main')}>
            <Navbar />
            {children}
            <div className='call-to-action'>
                <Share />
                <ScrolltoTop />
            </div>
            <Footer />
        </main>
    )
}