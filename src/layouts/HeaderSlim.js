import React from "react";
import { Button, Dialog, DialogTitle, DialogContent } from 'components/global';
import { addClass } from 'functions/utils';

export default function HeaderSlim({ image, datas }) {
    //Boolean to handle openings modal state
    const [openHours, setOpenHours] = React.useState(false);

    return (
        <div className={`av-slider-slim ${addClass(image, 'is-image')}`}
            id="header"
            style={{ backgroundImage: image ? `url(${image})` : 'url("/img/slider-not-main.jpg")' }}
        >
            <div className="av-slider-slim-container">
                <div className="av-slider-slim-encart">
                    <div className="av-slider-slogan">
                        {datas.job}<br />à&nbsp;<span>{datas.city}</span>
                    </div>
                    <div className='av-slider-infos-container'>
                        <a className="av-slider-infos address" href={datas.googlemap} target="_blank" rel="noreferrer">
                            {datas.adress}
                        </a>
                        <a className="av-slider-infos phone" href={"tel:" + datas.phone}>
                            {datas.phone}
                        </a>
                    </div>
                    <div className='flex items-center max-w-sm xs:max-w-full mt-3'>
                        <Button href='/contact' className="v-primary">
                            Nous contacter
                        </Button>
                    </div>
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