import Head from 'next/head'
import HeaderSlim from '../src/components/HeaderSlim'
import NextBreadcrumbs from '../src/tools/Breadcrumb'

export default function PolitiqueCookies({ datas }) {
    const title = 'Politique d\'utilisation des cookies'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <meta id="og-title" property="og:title" content={datas.denomination + ' - ' + datas.slogan + ' à ' +  datas.city} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-description" property="og:description" content={datas.denomination + ' - ' + datas.slogan + ' à ' + datas.city} key="description" />
            </Head>

            <HeaderSlim />
            <NextBreadcrumbs denomination={datas.denomination} />

            <h1 className='mb-7'>{title}</h1>

            <div className="mentions-container container">
                <p>Cette politique s’applique aux site {datas.denomination} (ci-après le « Site »).
                    Pour donner ou retirer votre consentement concernant la pose de cookies sur le site wwf.fr, cliquez sur le bouton ci-dessous :</p>
                <a href="#cookies-manager" className="btn btn-cookies">Gérer mes cookies</a>

                <div id="cookie-description">
                    <h3>Qu'est-ce qu'un cookie ?</h3>

                    <p>Un cookie est un petit fichier texte et recouvre tout type de traceurs « déposés et lus par exemple lors de la consultation
                        d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une
                        application mobile et ce, quel que soit le type de terminal utilisé ». Il peut être déposé par le serveur du Site visité ou
                        par un serveur tiers (régie publicitaire, service de web analytique, etc.). Les cookies ne compromettent pas la sécurité du site.</p>
                </div>

                <div id="cookies">
                    <h3>Les cookies déposés par {datas.denomination}</h3>

                    <p>Lorsque vous vous connectez sur notre Site, nous sommes susceptibles d’installer divers cookies sur votre terminal.<br />
                        Les cookies que nous émettons nous permettent :</p>
                    <br />
                    <ul className='list-styled pl-7'>
                        <li>De maintenir le bon fonctionnement du Site</li>
                        <li>D’enregistrer et adapter les fonctionnalités du Site en fonction de vos préférences de navigation (identification, s’adapter aux types d’appareils utilisés)</li>
                        <li>De gérer l’acceptation et la durée de conservation des cookies</li>
                    </ul>
                    <br />
                    <p>Conformément à la réglementation, les cookies ont une durée de vie maximum de 13 mois.</p>
                </div>

                <div id="cookies-tiers">
                    <h3>Les cookies émis par l’intermédiaire de tiers</h3>

                    <ul className='list-styled pl-7 mb-5'>
                        <li><strong>Les cookies analytics :</strong></li>
                    </ul>

                    <p className='mb-5'>Ils nous permettent de suivre les audiences de notre Site et de connaître votre navigation sur notre Site (cookies Google Analytics) et
                        de générer des données statistiques quant aux utilisations du Site. Cela nous permet d’améliorer la performance du Site.</p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li><strong>Les cookies des réseaux sociaux :</strong></li>
                    </ul>

                    <p className='mb-5'>En naviguant sur notre Site, vous avez la possibilité de cliquer sur les boutons « réseaux sociaux » afin de consulter nos profils
                        Facebook, Twitter. Ces applications tierces sont susceptibles de déposer des cookies pour vous proposer de la publicité ciblée.
                        En cliquant sur l’icône correspondante au réseau social, ce dernier est susceptible de vous identifier. Si vous êtes connectés
                        au réseau social lors de votre navigation sur notre Site, les boutons de partage permettent de relier les contenus consultés
                        à votre compte utilisateur.</p>

                    <p>Nous ne pouvons contrôler le processus employé par les réseaux sociaux pour collecter les informations relatives à votre navigation
                        sur notre Site. Nous vous invitons donc à consulter leur politique de protection des données à caractère personnel afin de
                        connaître leur finalité d’utilisation ainsi que les informations de navigation qu’ils peuvent recueillir.</p>
                </div>

                <div id="gestion-cookies">
                    <h3>La gestion des cookies</h3>

                    <p>Lorsque vous visitez notre Site pour la première fois, une bandeau cookies s’affiche vous proposant de consentir ou refuser
                        à la pose de ces cookies.</p>
                    <br />

                    <p>Vous pouvez à tout moment modifier votre choix en cliquant sur le lien Gestion des cookies en bas de chaque page ou en cliquant
                        directement sur le lien suivant : <a href='#footer'>« <strong>Gérer mes cookies</strong> »</a>.</p>
                </div>

                <div id="blocage-cookies">
                    <h3>Blocage des Cookies</h3>

                    <p>Dans tous les cas, l’Internaute a le contrôle de ces cookies, puisqu’ils sont stockés sur son ordinateur, et a la possibilité
                        de les lire, de les filtrer, de les refuser et de les détruire.</p>

                    <p className='mt-5 mb-3'><strong>Comment détruire les fichiers « cookies » déjà installés sur votre ordinateur ?</strong></p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li>Allez sur votre poste de travail</li>
                        <li>Sélectionnez dans C:\ le dossier Windows</li>
                        <li>Ouvrez le dossier « Temporary Internet Files »</li>
                        <li>Sélectionnez tous les fichiers (CTRL A)</li>
                        <li>Choisissez l’option « supprimer »</li>
                    </ul>

                    <p className='mt-5 mb-3'><strong>Comment refuser ou être averti de l’installation de tous les fichiers « cookies » ?</strong></p>

                    <p>Navigation avec Internet Explorer 5 :</p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li>Choisir « Outils »</li>
                        <li>« Options Internet »</li>
                        <li>« Sécurité »</li>
                        <li>« Personnaliser le niveau »</li>
                        <li>Dans le menu déroulant allez à « cookies »</li>
                        <li>Rubrique « autoriser les cookies sur votre ordinateur »</li>
                        <li>Choisir « demander » pour être avertis ou « désactiver » pour refuser tous les « cookies »</li>
                    </ul>

                    <p>Navigation avec Internet Explorer 6, 7 ou 8 :</p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li>Choisir « Outils »</li>
                        <li>« Options Internet »</li>
                        <li>« Confidentialité »</li>
                        <li>Puis le niveau que vous souhaitez appliquer</li>
                    </ul>

                    <p>Navigation avec Firefox :</p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li>Choisir « Outils »</li>
                        <li>« Options »</li>
                        <li>Dans « Vie privée » décocher « Accepter les cookies »</li>
                    </ul>

                    <p>Navigation avec Google Chrome :</p>

                    <ul className='list-styled pl-7 mb-5'>
                        <li>Cliquer sur « Personnaliser et contrôler Google Chrome »</li>
                        <li>Choisir « Paramètres »</li>
                        <li>Dans « Confidentialité » cliquer sur « Paramètres de contenu » et cocher « Bloquer les cookies et les données de site tiers »</li>
                    </ul>
                </div>
            </div>
        </>
    )
}