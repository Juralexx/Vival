import React from 'react';
import dynamic from 'next/dynamic';
import Form from 'components/Form';

const LeafletMap = dynamic(() => import('../components/LeafletMap'), {
    ssr: false,
})

export default function Contact({ datas }) {
    return (
        <div className='av-contact' id='form'>
            <div className='container-xl !p-0'>
                <div className='av-contact-form'>
                    <h2>Nous contacter</h2>
                    <p>Pour tous renseignements complémentaires, contactez-nous.</p>
                    <p className='small'>
                        <small>
                            <strong>Protection de vos données :</strong> les informations que vous nous communiquez sont confidentielles.
                            Nous nous engageons à ne jamais les diffuser ni à les transmettre à des tiers.
                        </small>
                    </p>
                    <Form />
                </div>
                <div className='av-contact-map'>
                    <LeafletMap datas={datas} />
                </div>
            </div>
        </div>
    )
}