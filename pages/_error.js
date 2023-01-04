import React from "react";
import Head from "next/head";
import Link from "next/link";
import HeaderSlim from "../src/components/HeaderSlim";
import NextBreadcrumbs from '../src/tools/Breadcrumb'
import datas from '../data/datas.json'

export default function Error() {
    const title = 'Page introuvable'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderSlim />
            <NextBreadcrumbs denomination={datas.denomination} />

            <div className="error-container container-lg">
                <div className="row py-7">
                    <div className="col-12 col-md-5">
                        <img src="/././img/404.png" alt="Erreur 404 - Page introuvable" />
                    </div>
                    <div className="col-12 col-md-7 flex flex-col items-center md:items-start justify-center">
                        <p className="title">Oups...</p>
                        <p>La page que vous recherchez est introuvable.</p>
                        <Link href="/" className="btn btn-primary">Revenir à l'accueil</Link>
                    </div>
                </div>
            </div>
        </>
    )
}