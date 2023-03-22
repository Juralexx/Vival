import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const Checkerboard = (props) => {
    const { datas, checkerboard } = props
    const { title, title_placement, content, image, image_side } = checkerboard
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    return (
        <CheckerboardContainer>
            {title && title_placement !== 'Dans le contenu' &&
                <h2 className='checkerboard-title'>
                    {title}
                </h2>
            }
            <div className={`__grid ${image_side === 'Gauche' ? '__to-right' : '__to-left'}`}>
                <Image
                    className="image"
                    loader={() => `${process.env.SERVER_URL}${image.url}`}
                    src={`${process.env.SERVER_URL}${image.url}`}
                    alt={title || datas.denomination}
                    title={title || datas.denomination}
                    width={368}
                    height={368}
                    unoptimized={true}
                    onClick={() => setLightbox({ open: true, image: `${process.env.SERVER_URL}${image.url}`, title: title })}
                />
                {lightbox.open &&
                    <Lightbox
                        mainSrc={lightbox.image}
                        onCloseRequest={() => setLightbox({ open: false, image: null, title: title })}
                        imageTitle={lightbox.title}
                        imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                    />
                }
                <div className="text ck-content">
                    {title && title_placement === 'Dans le contenu' &&
                        <h2 className='checkerboard-content-title'>
                            {title}
                        </h2>
                    }
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </CheckerboardContainer>
    )
}

export default Checkerboard

const CheckerboardContainer = styled.div`
    padding : 40px 0;

    .checkerboard-title {
        margin-bottom : 30px;
    }

    .checkerboard-content-title {
        font-weight : 600;
    }

    .__grid {
        display : grid;
        width   : 100%;

        .image {
            position      : relative;
            width         : 100%;
            height        : auto;
            border-radius : var(--rounded-md);
        }

        .text {
            text-align : justify;
        }

        &.__to-left {
            grid-template-columns : 2fr 1fr;
            
            .image {
                order : 2;
            }

            .text {
                order         : 1;
                padding-right : 40px;
            }

            @media(max-width: 768px) {
                grid-template-columns : 1fr;
                .text {
                    order         : 2;
                    padding-right : 0;
                }

                .image {
                    order : 1;
                }
            }
        }

        &.__to-right {
            grid-template-columns : 1fr 2fr;

            .text {
                padding-left : 40px;
            }

            @media(max-width: 768px) {
                grid-template-columns : 1fr;

                .text {
                    padding-left : 0;
                }
            }
        }

        @media(max-width: 768px) {
            .image {
                max-width : 500px;
                margin    : 0 auto;
            }
            .text {
                padding-top    : 40px;
                padding-bottom : 40px;
                padding-left   : 0;
                padding-right  : 0;
            }
        }
    }
`