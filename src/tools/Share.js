import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { addClass } from "./Utils";
import useClickOutside from '../hooks/useClickOutside'
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import datas from '../../data/datas.json'
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiShare, HiX } from "react-icons/hi";

const Share = () => {
    const pathname = usePathname()
    const url = datas.site_name + pathname

    const [active, setActive] = useState(false)
    const shareRef = useRef()
    useClickOutside(shareRef, () => setActive(false))

    const socialsArr = [{
        button: FacebookShareButton,
        name: 'Facebook',
        picto: <FaFacebookF />
    }, {
        button: LinkedinShareButton,
        name: 'Linkedin',
        picto: <FaLinkedinIn />
    }, {
        button: PinterestShareButton,
        name: 'Pinterest',
        picto: <FaPinterest />
    }, {
        button: TwitterShareButton,
        name: 'Twitter',
        picto: <FaTwitter />
    }, {
        button: WhatsappShareButton,
        name: 'Whatsapp',
        picto: <FaWhatsapp />
    }]

    return (
        <>
            <div className={`share-handler ${addClass(active, 'masked')}`} onClick={() => setActive(true)}>
                <HiShare />
            </div>
            <div className={`share-buttons ${addClass(active, 'active')}`} ref={shareRef}>
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
                        <HiX />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Share