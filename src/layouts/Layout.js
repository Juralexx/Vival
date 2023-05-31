import { usePathname } from 'next/navigation';
import HeadProvider from './Head';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrolltoTop from 'tools/Scrolltotop';
import Share from 'tools/Share';
import { addClass, convertStringToURL } from 'functions/utils';
import HeaderSlim from 'layouts/HeaderSlim';
import Header from 'layouts/Header';

export default function Layout({ children, datas, title, headerImg }) {
    //Get current pathname
    const pathname = usePathname();
    //Convert current pathname into a class : current-path-name
    const classes = pathname.replace(/\//g, " ").trim();

    return (
        datas && (
            <div className={addClass(pathname === '/', 'main')}>
                <main className={`${convertStringToURL(title || 'home')} ${convertStringToURL(datas.denomination)} ${classes || 'root'}`}>
                    <HeadProvider
                        datas={datas}
                        title={title && `${title} - ${datas.denomination} - ${datas.job} à ${datas.city}`}
                        description={title && `${title} - ${datas.denomination} - ${datas.job} à ${datas.city}`}
                    />
                    <div className='__body'>
                        <Navbar datas={datas} />
                        {pathname === '/' ? (
                            <Header datas={datas} />
                        ) : (
                            <HeaderSlim datas={datas} image={headerImg ? `${process.env.SERVER_URL}${headerImg}` : null} />
                        )}
                        {children}
                        <div className='fixed bottom-4 right-4 z-[1000] h-auto'>
                            <Share />
                            <ScrolltoTop />
                        </div>
                    </div>
                </main>
                <Footer datas={datas} />
            </div>
        )
    )
}