import React from 'react';
import Image from 'next/image';
import Opening from 'components/Opening';
import { Revealer } from 'tools/Revealer';
import HeaderAlert from 'components/HeaderAlert';
import Icon from 'components/icons/Icon';
import { Button, Dialog, DialogTitle, DialogContent } from 'components/global';

const Header = ({ datas }) => {
    //Boolean to handle openings modal state
    const [openHours, setOpenHours] = React.useState(false);

    return (
        <div className='av-slider' id="header">
            <div className="av-slider-container">
                <div className="av-slider-encart">
                    <Revealer delay={0}>
                        <div className="av-slider-slogan">
                            {datas.job}<br /><span className='font-semibold'>à</span>&nbsp;<span className='primary'>{datas.city}</span>
                        </div>
                    </Revealer>
                    {/* <Revealer delay={100}>
                        <div className='__subslogan'>
                            {datas.slogan}
                        </div>
                    </Revealer> */}
                    <Revealer delay={100}>
                        <div className='av-slider-infos-container'>
                            <a className="av-slider-infos address" href={datas.googlemap} target="_blank" rel="noreferrer">
                                {datas.adress}
                            </a>
                            <a className="av-slider-infos phone" href={"tel:" + datas.phone}>
                                {datas.phone}
                            </a>
                        </div>
                    </Revealer>
                    <Revealer delay={200}>
                        <div className='flex items-center max-w-sm xs:max-w-full mt-3'>
                            <Button href='#form' className="v-primary mr-2">
                                Nous contacter
                            </Button>
                        </div>
                    </Revealer>
                    {datas.display_opening &&
                        <Revealer delay={300}>
                            <Opening datas={datas} />
                        </Revealer>
                    }
                    {datas.information &&
                        <Revealer delay={400}>
                            <HeaderAlert
                                datas={datas.information}
                            />
                        </Revealer>
                    }
                </div>
                <div className='hero-img-container'>
                    <Image
                        className='hero-img'
                        src='/img/hero-header.jpg'
                        alt='Vival Meillonnas'
                        width={500}
                        height={370}
                        priority={true}
                    />
                    <Icon
                        name="DotSquare"
                        className="hero-img-dots-one"
                    />
                    <Icon
                        name="DotSquare"
                        className="hero-img-dots-two"
                    />
                </div>
            </div>
            <Dialog open={openHours} className="!max-w-md" onClose={() => setOpenHours(false)}>
                <DialogTitle className="justify-center">
                    Heures d'ouverture
                </DialogTitle>
                <DialogContent>
                    {datas.opening.map((el, key) => {
                        return (
                            <p className="text-center" key={key}>
                                <span className="font-semibold">{el.day ? el.day : ''} : </span>{el.range ? el.range : ''}
                            </p>
                        )
                    })}
                </DialogContent>
            </Dialog>
            <div className='av-slider-tools'>
                <div onClick={() => setOpenHours(!openHours)}>
                    Horaires
                </div>
                <div className='dot'>•</div>
                {datas.googlemap &&
                    <a href={datas.googlemap} target='_blank' rel="noreferrer">
                        Nous trouver
                    </a>
                }
                <div className='dot'>•</div>
                {datas.facebook &&
                    <a href={`https://www.facebook.com/${datas.facebook}`} target='_blank' rel="noreferrer">
                        Facebook
                    </a>
                }
            </div>
        </div>
    )
}

export default Header;