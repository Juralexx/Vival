import React from 'react'
import Head from 'next/head'

const HeadProvider = ({ datas, title, description, image }) => {
    const root = typeof window !== 'undefined' ? window.location : ''
    const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

    const metadatas = {
        site_name: datas.domain_name || root,
        title: title || (`${datas.denomination} - ${datas.job} à ${datas.city}`),
        description: description || (datas.denomination + ' - ' + datas.job + ' à ' + datas.city),
        image: `https://${datas.domain_name}/${image || 'img/og.jpg'}`,
        url: `${datas.domain_name}${pathname}`
    }

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />

            <meta name="description" content={metadatas.description} />
            <meta name="image" content={metadatas.image} />

            <title>{metadatas.title}</title>

            <meta id="og-locale" property="og:locale" content="fr_FR" key="locale" />
            <meta property="og:site_name" content={metadatas.site_name} />
            <meta property="og:title" content={metadatas.title} />
            <meta property="og:description" content={metadatas.description} />
            <meta property="og:image" content={metadatas.image} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="314" />
            <meta id="og-image-secure_url" property="og:image:secure_url" content={metadatas.image} />
            <meta property="og:url" content={metadatas.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadatas.title} />
            <meta name="twitter:description" content={metadatas.description} />
            <meta name="twitter:image" content={metadatas.image} />
            <meta name="twitter:site" content={metadatas.site_name} />
        </Head>
    )
}

export default HeadProvider