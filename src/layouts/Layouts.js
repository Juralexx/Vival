import Navbar from './Navbar'

export default function Layouts({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}