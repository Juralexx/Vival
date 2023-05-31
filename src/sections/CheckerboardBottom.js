import React from 'react'
import Link from "next/link";
import { Revealer } from 'tools/Revealer'
import { StyledButton } from 'tools/Buttons';
import { fullImage } from 'functions/utils';

export default function CheckerboardsBottom ({ checkerboards }) {
    return (
        <div className='av-checkerboards-bottom' id="checkerboard">
            {checkerboards.map((checkerboard, i) => {
                return (
                    <div className='av-checkerboard' key={i}>
                        <div className='container-lg'>
                            <div className='av-checkerboard-grid'>
                                <div className='av-checkerboard-image' style={fullImage(`/img/checkerboard/checkerboard-${i + 5}.jpg`)} />
                                <div className="av-checkerboard-text">
                                    <Revealer>
                                        <h2>
                                            <Link href="#">{checkerboard.title}</Link>
                                        </h2>
                                    </Revealer>
                                    <Revealer delay={300}>
                                        <div dangerouslySetInnerHTML={{ __html: checkerboard.content }} />
                                    </Revealer>
                                    <Revealer delay={400}>
                                        <StyledButton href={checkerboard.link} className="is-link">{checkerboard.button_name}</StyledButton>
                                    </Revealer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}