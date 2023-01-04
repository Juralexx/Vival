import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';

function titleize(str) {
    let dashesToSpace = str.replace(/-/g, ' ')
    return dashesToSpace.charAt(0).toUpperCase() + dashesToSpace.slice(1)
}

function Crumb({ text, href, last = false }) {
    if (last) return <p>{text}</p>
    return (<Link href={href}>{text}<span><HiChevronRight /></span></Link>)
}

const NextBreadcrumbs = ({ denomination }) => {
    const router = useRouter()
    const isBrowser = typeof window !== "undefined";
    const [current, setCurrent] = useState('')

    useEffect(() => {
        if (isBrowser) setCurrent(document.querySelector('meta[name="description"]').content)
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
        <div className='breadcrumb' aria-label="breadcrumb">
            {breadcrumbs.map((crumb, key) => (
                <Crumb {...crumb} key={key} last={key === breadcrumbs.length - 1} />
            ))}
        </div>
    )
}

export default NextBreadcrumbs