import React from "react";
import Images from "sections/Images";
import Parallax from "sections/Parallax";
import Informations from "sections/Informations";
import Contact from "sections/Contact";
import Numbers from "sections/Numbers";
import Prestations from "sections/Prestations";
import Delivery from "sections/Delivery";

export default function ActualityLayout({ children, datas, brands, partners }) {
    return (
        datas && (
            <React.Fragment>
                {children}
                {datas.summary &&
                    <Prestations
                        datas={datas?.summary.small_cards}
                    />
                }
                {datas.delivery &&
                    <Delivery
                        datas={datas.delivery}
                    />
                }
                <Informations
                    datas={datas}
                />
                <Parallax />
                <Numbers
                    datas={datas}
                />
                <Images
                    title="Nos Partenaires"
                    images={partners}
                />
                <Images
                    title="Nos Marques"
                    images={brands}
                />
                <Contact
                    datas={datas}
                />
            </React.Fragment>
        )
    )
}