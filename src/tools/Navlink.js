import NextLink from 'next/link';

const Navlink = ({ href, children, ...props }) => {
    return (
        <NextLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}

export default Navlink