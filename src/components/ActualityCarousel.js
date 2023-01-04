import Link from "next/link";
import React from "react";
import actualites from '../../data/actualites.json'
import { Revealer } from '../tools/animations'

const ActualityCarousel = () => {
    return (
        <div className="actuality-carousel container-lg" id="actuality-carousel">
            <h2>À la une</h2>
            <div className="row mb-9">
                {actualites.length > 2 ? (
                    <>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-5">
                            <Revealer>
                                <div className="actuality-card-col">
                                    <div className="image">
                                        <Link href={`/actualites/${actualites[0].date}/${actualites[0].url}`}>
                                            <img
                                                src={`/actualites/${actualites[0].date}/${actualites[0].image}`}
                                                alt={actualites[0].title}
                                                title={actualites[0].title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3><Link href={`/actualites/${actualites[0].date}/${actualites[0].url}`}>{actualites[0].title}</Link></h3>
                                        <p className="date">{actualites[0].date_full}</p>
                                        <p className="text">{actualites[0].text}</p>
                                    </div>
                                </div>
                            </Revealer>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-7 flex flex-col">
                            {actualites.slice(1, 3).map((actu, key) => {
                                return (
                                    <Revealer className="actuality-card-row row" key={key} origin="right">
                                        <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3 image">
                                            <Link href={`/actualites/${actu.date}/${actu.url}`}>
                                                <img
                                                    src={`/actualites/${actu.date}/${actu.image}`}
                                                    alt={actu.title}
                                                    title={actu.title}
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-12 col-sm-8 col-md-9 col-lg-8 col-xl-9 content">
                                            <h3><Link href={`/actualites/${actu.date}/${actu.url}`}>{actu.title}</Link></h3>
                                            <p className="date">{actu.date_full}</p>
                                            <p className="text">{actu.text}</p>
                                        </div>
                                    </Revealer>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    actualites.slice(0, 2).map((actu, key) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={key}>
                                <Revealer className="actuality-card-col">
                                    <div className="image">
                                        <Link href={`/actualites/${actu.date}/${actu.url}`}>
                                            <img
                                                src={`/actualites/${actu.date}/${actu.image}`}
                                                alt={actu.title}
                                                title={actu.title}
                                            />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <h3><Link href={`/actualites/${actu.date}/${actu.url}`}>{actu.title}</Link></h3>
                                        <p className="date">{actu.date_full}</p>
                                        <p className="text">{actu.text}</p>
                                    </div>
                                </Revealer>
                            </div>
                        )
                    })
                )}
            </div>
            <Link href="/actualites" className="btn btn-primary">Voir toute l'actualité</Link>
        </div>
    )
}

export default ActualityCarousel