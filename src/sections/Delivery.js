import Image from 'next/image';
import React from 'react';

export default function Delivery({ datas }) {
    return (
        <div className='av-delivery'>
            <div className='container-xl'>
                <div className='av-delivery-container'>
                    <Image
                        className="av-delivery-map-pin"
                        src='/img/map-pin.png'
                        alt='map-pin'
                        width={368}
                        height={368}
                        unoptimized={true}
                    />
                    <div
                        className='av-delivery-content-banner'
                        dangerouslySetInnerHTML={{ __html: datas.content }}
                    />
                    <Image
                        className="av-delivery-map-pin-group"
                        src='/img/map-pin-group.png'
                        alt='map-pin-group'
                        width={368}
                        height={368}
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    )
}