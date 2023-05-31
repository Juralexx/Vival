import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { shuffleArray } from 'functions/utils';

const Prestations = ({ datas }) => {
    return (
        <div className='av-prestations'>
            <div className='container-xl'>
                <h2>Nos prestations</h2>
                <div className='av-prestations-bricks-container animated'>
                    {shuffleArray(datas).slice(0, 8).map((prestation, key) => {
                        return (
                            <div className='av-prestations-brick' key={key}>
                                <div className="av-prestations-inner-brick">
                                    <Link href={prestation?.link} passHref>
                                        <div className="av-prestations-brick-top">
                                            <Image
                                                src={prestation.image ? `/img${prestation.image}` : `/img/image-default.jpg`}
                                                alt={prestation.title}
                                                width={500}
                                                height={370}
                                            />
                                        </div>
                                        <div className='av-prestations-brick-content'>
                                            <div className='line-clamp-1 font-semibold text-lg'>{prestation.title}</div>
                                            <p className='line-clamp-1 text-sm'>{prestation.content}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Prestations;