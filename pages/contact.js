import React from "react";
import useSWR from 'swr'
import dynamic from "next/dynamic";
import { fetcher } from "functions/utils";
import { fetchSiteDatas } from "api/site";
import Layout from "layouts/Layout";
import Form from "components/Form";
import { Breadcrumb } from 'components/global';

const LeafletMap = dynamic(() => import('components/LeafletMap'), { ssr: false });

export async function getStaticProps() {
    //Fetch site datas
    const { siteDatas } = await fetchSiteDatas();
    return {
        props: { datas: siteDatas }
    };
};

export default function Contact({ datas }) {
    //Keep site datas up-to-date
    const { data } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas });
    const title = 'Contactez-nous';

    return (
        data && (
            <Layout datas={data} title={title}>
                <div className="relative w-full p-0 mx-auto flex flex-col">
                    <div className="lg:grid-cols-1 grid grid-cols-2 flex-grow">
                        <div className="relative h-full z-[2] p-20 xl:px-10 lg:py-10 lg:px-7 sm:px-4">
                            <div className="av-contact-form-container" id='form'>
                                <h1 className="!text-left mb-0">{title}</h1>
                                <Breadcrumb
                                    denomination={data.denomination}
                                    className="inline-block mr-auto pt-0"
                                />
                                <p>
                                    Pour tous renseignements complémentaires concernant <strong>{data.denomination}</strong>,
                                    votre <strong className="lowercase">{data.job}</strong> à&nbsp;<strong>{data.city}</strong>, contactez-nous.
                                </p>
                                <p className="leading-none">
                                    <small>
                                        <strong>Protection de vos données :</strong> les informations que vous nous communiquez sont confidentielles.
                                        Nous nous engageons à ne jamais les diffuser ni à les transmettre à des tiers.
                                    </small>
                                </p>
                                <Form />
                            </div>
                        </div>
                        <div className="relative h-full z-0 lg:h-[600px] xs-to-lg:-mt-36 overflow-hidden">
                            <LeafletMap datas={data} />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
}