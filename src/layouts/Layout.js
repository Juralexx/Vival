import { usePathname } from 'next/navigation'
import HeadProvider from './Head'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import ScrolltoTop from 'tools/Scrolltotop'
import Share from 'tools/Share'
import { addClass } from 'functions/utils'
import HeaderSlim from 'layouts/HeaderSlim'
import Header from 'layouts/Header'

export default function Layout({ children, datas, title, headerImg }) {
    const pathname = usePathname()
    
    return (
        datas &&
        <main className={addClass(pathname === '/', 'main')}>
            <HeadProvider
                datas={datas}
                title={title && `${title} - ${datas.denomination} - ${datas.job} à ${datas.city}`}
                description={title && `${title} - ${datas.denomination} - ${datas.job} à ${datas.city}`}
            />
            <Main>
                <Navbar datas={datas} />
                {pathname === '/' ? (
                    <Header datas={datas} />
                ) : (
                    <HeaderSlim datas={datas} image={headerImg ? `${process.env.SERVER_URL}${headerImg}` : null} />
                )}
                {children}
                <CallToAction>
                    <Share />
                    <ScrolltoTop />
                </CallToAction>
            </Main>
            <Footer datas={datas} />
        </main>
    )
}

const Main = styled.div`
    width      : 100vw;
    min-height : 100vh;
`

const CallToAction = styled.div`
    position : fixed;
    bottom   : 2vh;
    right    : 15px;
    z-index  : 1000;
    height   : auto;
`