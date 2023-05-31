import React from "react";
import { Revealer } from 'tools/Revealer'
import { StyledButton } from 'tools/Buttons'
import CardVertical from "./CardVertical";
import CardHorizontal from "./CardHorizontal";

export default function ActualityCarousel({ actualities }) {
    //Store the actualities to display
    const [actus, setActus] = React.useState(actualities);
    //Variable to handle actualities to display
    //If 0 => return the 1, 2 and 3thrd actualities
    //If 1 => return the 4, 5 and 6th actualities
    const [state, setState] = React.useState(0);
    /**
     * Hook to change the 3 actualities to display
     */
    React.useEffect(() => {
        if (actualities.length > 5) {
            if (state === 0) {
                const timer = setTimeout(() => {
                    setActus(actualities.slice(3, 6));
                    setState(1);
                }, 10400)
                return () => clearTimeout(timer);
            }
            if (state === 1) {
                const timer = setTimeout(() => {
                    setActus(actualities.slice(0, 3));
                    setState(0);
                }, 10400)
                return () => clearTimeout(timer);
            }
        }
    }, [state, actualities])

    return (
        <div className="av-actuality-carousel container-lg" id="actuality-carousel">
            <h2>À la une</h2>
            {actus?.length > 2 ? (
                <div className={`__grid ${actualities.length > 5 && 'animated'}`}>
                    <Revealer>
                        <CardVertical actuality={actus[0]} className='animated-to-left' />
                    </Revealer>
                    <div className="__grid-right">
                        {actus && (
                            actus.length > 1 && (
                                actus.slice(1, 3).map((actu, key) => {
                                    return (
                                        <Revealer key={key} origin="right">
                                            <CardHorizontal
                                                className={key % 2 ? '__to-right animated-to-bottom' : '__to-left animated-to-right'}
                                                actuality={actu}
                                            />
                                        </Revealer>
                                    )
                                })
                            ))}
                    </div>
                </div>
            ) : (
                actus?.length > 1 ? (
                    <div className="__grid-both">
                        {actus?.slice(0, 2).map((actu, key) => {
                            return (
                                <Revealer key={key}>
                                    <CardVertical actuality={actu} />
                                </Revealer>
                            )
                        })}
                    </div>
                ) : (
                    <Revealer>
                        <CardVertical actuality={actus[0]} />
                    </Revealer>
                )
            )}
            <StyledButton href="/actualites" className="is-link more-btn">
                Voir toute l'actualité
            </StyledButton>
        </div>
    )
}