import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from './icons/Icon';

function titleize(str) {
    let dashesToSpace = str.replace(/-/g, ' ')
    return dashesToSpace.charAt(0).toUpperCase() + dashesToSpace.slice(1)
}

function Crumb({ text, href, last = false }) {
    if (last) {
        return <p>{text}</p>
    } else {
        return (
            <Link href={href} passHref>
                {text}<span><Icon name="CaretRight" /></span>
            </Link>
        )
    }
}

const NextBreadcrumbs = ({ denomination }) => {
    const router = useRouter()
    const isBrowser = typeof window !== "undefined";
    const [current, setCurrent] = React.useState('')

    React.useEffect(() => {
        if (isBrowser) {
            let title = document.title?.split('-')[0]
            if (title)
                setCurrent(title)
            else setCurrent(document.title)
        }
    }, [isBrowser])

    function generateBreadcrumbs() {
        const asPathWithoutQuery = router.asPath.split("?")[0]

        const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0)

        const nestedRoutes = asPathNestedRoutes.filter(route => !route.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/))

        const crumblist = nestedRoutes.slice(0, -1).map((subpath, key) => {
            const href = "/" + nestedRoutes.slice(0, key + 1).join("/")

            return { href, text: titleize(subpath) }
        })

        return [{ href: "/", text: denomination }, ...crumblist, { href: "/" + nestedRoutes, text: current }]
    }

    const breadcrumbs = generateBreadcrumbs()

    return (
        <Breadcrumb aria-label="breadcrumb">
            {breadcrumbs.map((crumb, key) => (
                <Crumb {...crumb} key={key} last={key === breadcrumbs.length - 1} />
            ))}
        </Breadcrumb>
    )
}

export default NextBreadcrumbs

const Breadcrumb = styled.div`
    margin      : 0 auto 30px;
    white-space : nowrap;
    text-align  : center;

    a, p {
        display        : inline;
        font-size      : 13px;
        color          : var(--text-light);
        font-family    : var(--font-fam2);
        white-space    : break-spaces;
        line-height    : 13px;
        vertical-align : middle;

        span {
            vertical-align : middle;
            white-space    : pre-wrap;
        }

        svg {
            width          : 14px;
            height         : 14px;
            margin         : 0 2px;
            display        : inline-block;
            vertical-align : middle;
        }
    }

    a {
        &:hover {
            color : var(--primary);
        }
    }
`


// width              : 100%;
// text-overflow      : ellipsis;
// overflow           : hidden;
// display            : -webkit-box;
// -webkit-line-clamp : 1;
// -webkit-box-orient : vertical;