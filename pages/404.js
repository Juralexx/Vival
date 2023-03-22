import React from "react";
import useSWR from 'swr'
import styled from "styled-components";
import { fetchSiteDatas } from "../api/site";
import { fetcher } from "functions/utils";
import Layout from "layouts/Layout";
// import NextBreadcrumbs from 'tools/Breadcrumb'
import { LinkStyledButton } from "components/tools/Buttons";

export default function Error({ datas }) {
    const { data } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const title = 'Page introuvable'

    return (
        data &&
        <Layout
            datas={datas}
            title={title}
        >
            <ErrorPage className="container-lg">
                <div className="row py-7">
                    <div className="col-12 col-md-5">
                        <img src="/././img/404.png" alt="Erreur 404 - Page introuvable" />
                    </div>
                    <div className="col-12 col-md-7 flex flex-col items-center md:items-start justify-center">
                        <p className="title">Oups...</p>
                        <p>La page que vous recherchez est introuvable.</p>
                        <LinkStyledButton href="/">
                            Revenir à l'accueil
                        </LinkStyledButton>
                    </div>
                </div>
            </ErrorPage>
        </Layout>
    )
}

export async function getStaticProps() {
    const { siteDatas } = await fetchSiteDatas()
    return {
        props: {
            datas: siteDatas
        },
    };
}

const ErrorPage = styled.div`
    img {
        max-width : 400px;
        height    : auto;
        margin    : 0 auto;
    }

    .title {
        color         : var(--primary);
        line-height   : 90px;
        font-size     : 66px;
        font-weight   : 700;
        margin-bottom : 0;
    }

    p {
        font-size     : 26px;
        text-align    : left;
        margin-bottom : 30px;
    }

    @media(max-width: 768px) {
        .title {
            text-align : center;
        }

        p {
            font-size  : 26px;
            text-align : center;
        }
    }

    @media(max-width: 992px) {
        img {
            max-width : 300px;
        }
    }
`