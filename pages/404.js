import React from "react";
import useSWR from 'swr';
import { fetchSiteDatas } from "../api/site";
import { fetcher } from "functions/utils";
import Layout from "layouts/Layout";
import { StyledButton } from "components/tools/Buttons";
import { Breadcrumb } from "components/global";

export async function getStaticProps() {
    //Fetch site datas
    const { siteDatas } = await fetchSiteDatas();
    return {
        props: { datas: siteDatas }
    };
};

export default function Error({ datas }) {
    //Keep site datas up-to-date
    const { data } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas });
    const title = 'Page introuvable';

    return (
        data && (
            <Layout datas={datas} title={title}>
                <div className="container-xl h-full">
                    <Breadcrumb
                        denomination={data.denomination}
                        className="!pt-5"
                    />
                    <div className="row py-7 min-md:mt-15 md:mt-4">
                        <div className="col-12 col-lg-5">
                            <img
                                src="/././img/404.png"
                                alt="Erreur 404 - Page introuvable"
                                className="w-full max-w-xs h-auto mx-auto"
                            />
                        </div>
                        <div className="col-12 col-lg-7 flex flex-col items-start md:items-center justify-center md:justify-start md:mt-6">
                            <p className="text-6xl color-primary font-bold mb-2 sm:text-center">Oups...</p>
                            <p className="text-2xl mb-6 sm:text-center">
                                La page que vous recherchez est introuvable.
                            </p>
                            <StyledButton href="/" className="is-link">
                                Revenir à l'accueil
                            </StyledButton>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
}