import React from "react";

const Parallax = () => {
    React.useEffect(() => {
        const parallax = document.getElementById('parallax');

        const onWindowScroll = () => {
            window.requestAnimationFrame(() => {
                const { offsetTop, clientHeight } = parallax;
                const isFullyVisible = (offsetTop < (window.scrollY + clientHeight)) && ((offsetTop + clientHeight) > window.scrollY);
                const isPartiallyVisible = (offsetTop < (window.scrollY + clientHeight)) || ((offsetTop + clientHeight) > window.scrollY);
                if (isFullyVisible || isPartiallyVisible) {
                    const speed = 0.3;
                    const newY = (offsetTop - window.pageYOffset) * speed;
                    parallax.style.backgroundPosition = `100% ${newY / 2.5}%`;
                }
            });
        };

        window.addEventListener('scroll', onWindowScroll);
        return () => window.removeEventListener('scroll', onWindowScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="av-parallax" id='parallax'>
            <p><span>Nous vendons divers articles</span> <br />dont les ménages ont besoin quotidiennement.</p>
        </div>
    )
}

export default Parallax;