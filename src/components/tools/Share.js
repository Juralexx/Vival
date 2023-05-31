import React from "react";
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import Icon from "../icons/Icon";
import { addClass } from "functions/utils";
import useClickOutside from 'hooks/useClickOutside';

export default function Share() {
    const url = typeof window !== undefined ? window.location.href : '';

    const [active, setActive] = React.useState(false)
    const shareRef = React.useRef()
    useClickOutside(shareRef, () => setActive(false))

    const socialsArr = [{
        button: FacebookShareButton,
        name: 'Facebook',
        picto: <Icon name="Facebook" />
    }, {
        button: LinkedinShareButton,
        name: 'Linkedin',
        picto: <Icon name="Linkedin" />
    }, {
        button: PinterestShareButton,
        name: 'Pinterest',
        picto: <Icon name="Pinterest" />
    }, {
        button: TwitterShareButton,
        name: 'Twitter',
        picto: <Icon name="Twitter" />
    }, {
        button: WhatsappShareButton,
        name: 'Whatsapp',
        picto: <Icon name="WhatsappOutline" />
    }]

    return (
        <React.Fragment>
            <div className={`av-share-handler ${addClass(active, 'masked')}`} onClick={() => setActive(true)}>
                <Icon name="Share" />
            </div>
            <div className={`av-share-module ${addClass(active, 'active')}`} ref={shareRef}>
                <div className="title">Partager cette page</div>
                <div className="share-container">
                    {socialsArr.map((network, key) => {
                        return (
                            <network.button resetButtonStyle={false} url={url} key={key}>
                                {network.picto}
                            </network.button>
                        )
                    })}
                    <div className="closer" onClick={() => setActive(false)}>
                        <Icon name="Cross" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}