import React from 'react'
import * as Img from 'next/image';
import { Blurhash } from 'react-blurhash';

const LazyImage = (props) => {
    const { src, alt, title, className, imgClassName, onClick, blurHash, placeholder, blurDataURL } = props

    const [isLoaded, setIsLoaded] = React.useState(false);
    const handleImageOnLoad = () => setIsLoaded(true);

    const css = {
        thumbnail: {
            visibility: isLoaded ? 'hidden' : 'visible',
            filter: 'blur(8px)',
            transition: 'visibility 0ms ease-out 500ms',
        },
        fullSize: {
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 500ms ease-in 0ms',
        },
    };

    const style = {
        wrap: {
            position: 'relative',
            width: '100%',
            height: '100%',
            margin: 'auto',
            background: '#F6F8F9'
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
        },
    }

    return (
        <React.Fragment>
            <div style={style.wrap} className={className}>
                <React.Fragment>
                    {blurHash &&
                        <Blurhash
                            hash={blurHash}
                            width='100%'
                            height='100%'
                        />
                    }
                    <Img
                        className={imgClassName}
                        src={src}
                        alt={alt}
                        title={title}
                        width={0}
                        height={0}
                        onLoad={handleImageOnLoad}
                        placeholder={placeholder}
                        blurDataURL={blurDataURL}
                        style={{
                            ...style.image,
                            ...css.fullSize,
                            width: 'auto',
                            height: 'auto'
                        }}
                        unoptimized={true}
                        onClick={onClick}
                    />
                </React.Fragment>
            </div>
        </React.Fragment>
    )
}

export default LazyImage