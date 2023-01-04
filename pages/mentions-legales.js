import Head from 'next/head'
import HeaderSlim from '../src/components/HeaderSlim'
import NextBreadcrumbs from '../src/tools/Breadcrumb'

export default function MentionsLégales({ datas }) {
    const title = 'Mentions légales'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <meta id="og-title" property="og:title" content={datas.denomination + ' - ' + datas.slogan + ' à ' + datas.city} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-description" property="og:description" content={datas.denomination + ' - ' + datas.slogan + ' à ' + datas.city} key="description" />
            </Head>

            <HeaderSlim />

            <NextBreadcrumbs denomination={datas.denomination} />
            <h1 className='mb-7'>{title}</h1>

            <div className="mentions-container container">
                <p>Conformément aux dispositions des articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N, il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.</p>

                <div id="informations-légales">
                    <h3>1. Informations Légales.</h3>

                    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>

                    <p><strong>Éditeur</strong> : <strong><a href="https://www.alexandre-vurbier.com" target="_blank">Alexandre Vurbier</a> </strong>- 39190 Cousance<br />
                        <u><i>Ci-après l'éditeur</i></u></p>

                    <p><strong>Organisme représenté </strong> : {datas.legals.raison_social}<br />
                        <strong>Ayant son siège social à l’adresse suivante </strong> : {datas.legals.adresse_siege}<br />
                        <strong>Immatriculée au RCS </strong> de {datas.legals.ville_RCS} N° de SIRET : {datas.legals.SIRET}<br />
                        <strong>Téléphone </strong> : {datas.phone}<br />
                        <u><i>Ci-après l'Organisme représenté</i></u></p>

                    <p><strong>Responsable publication</strong> : {datas.denomination}<br />
                        <u><i>Ci-après le Responsable publication</i></u></p>

                    <p><strong>Hébergeur</strong> : OVH 140 Quai du Sartel - 59100 Roubaix - France Tél&nbsp;: 08 203 203 63 n°&nbsp;indigo (0.118 €/min)<br />
                        <u><i>Ci-après l'Hébergeur</i></u></p>

                    <p>Sont considérés comme utilisateurs tous les internautes qui naviguent, lisent, visionnent et utilisent ce site<br />
                        <u><i>Ci-après les Utilisateurs</i></u></p>

                    <p><strong>Crédit photos : </strong>
                        {datas.legals.credit_photos.map((credit, i) => {
                            return <span key={i}>{credit} </span> 
                        })}
                    </p>
                </div>

                <div id="CGU">
                    <h3>2. Conditions générales d’utilisation du site.</h3>

                    <p>La connexion, l’utilisation et l’accès à ce site impliquent l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>
                    <p>Le site est mis à jour régulièrement par le responsable de publication pour l'éditeur. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

                </div>

                <div id="description-services">
                    <h3>3. Description des services fournis.</h3>

                    <p>Le site a pour objet de fournir une information concernant l’ensemble des activités de l'organisme représenté.</p>
                    <p>Le responsable publication s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                    <p>Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                </div>

                <div id="limitations-contractuelles">
                    <h3>4. Limitations contractuelles sur les données techniques.</h3>

                    <p>Le site utilise la technologie JavaScript.</p>

                    <p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.</p>
                </div>

                <div id="propriete-intellectuelle">
                    <h3>5. Propriété intellectuelle.</h3>

                    <p>L'organisme représenté est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>

                    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'organisme représenté.</p>

                    <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                </div>

                <div id="limitations-responsabilite">
                    <h3>6. Limitations de responsabilité.</h3>

                    <p>Le responsable publication ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

                    <p>Le responsable publication ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site.</p>

                    <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Le responsable publication se réserve le droit de supprimer, sans mise en demeure préalable, tout main-content déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, le responsable publication se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>
                </div>

                <div id="gestion-donnees">
                    <h3>7. Gestion des données personnelles.</h3>

                    <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978 modifiée, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995 ; ainsi que par le Règlement Général sur la Protection des Données (RGPD) de l’Union Européenne qui a été adopté le 14 avril 2016 et est entré en application le 25 mai 2018.</p>

                    <p>À l'occasion de l'utilisation du site, peuvent êtres recueillies. Les Données Personnelles que nous sommes susceptibles de collecter sont par exemple&nbsp;:</p>

                    <ul>
                        <li><strong>des données d’identification</strong>, telles que vos nom et prénom, votre adresse, votre numéro de téléphone, votre adresse e-mail&nbsp;;</li>
                        <li><strong>des données professionnelles</strong>, telles que nom, prénom, vos fonctions, votre entreprise d’appartenance, si vous êtes un fournisseur ou prestataire de service de Talan</li>
                    </ul>

                    <p className='mt-5 mb-3'><strong>Pour quelles finalités vos données sont-elles collectées&nbsp;?</strong></p>

                    <p>Chaque Personne concernée est informée de manière claire et précise, de la finalité et de l’objectif recherché par la collecte et le Traitement de ses Données. Vos Données Personnelles sont collectées et traitées afin de vous permettre de bénéficier de nos offres de services, d’exécuter nos contrats et de participer à nos événements.</p>

                    <p>Le Traitement de vos Données Personnelles tend à répondre notamment à une ou plusieurs des finalités suivantes&nbsp;:&nbsp;</p>

                    <ul>
                        <li>Permettre l’exécution et la gestion administratives et commerciales des contrats, exécuter les projets.</li>
                        <li>Répondre et gérer toute question, toute demande de contact, toute demande de rendez-vous.</li>
                        <li>Vous proposer nos offres commerciales sur des services susceptibles de vous intéresser, la participation à nos événements, l’inscription à nos newsletters, étant entendu que vous gardez, à tout moment, la possibilité de vous opposer sans frais à la prospection commerciale, en cliquant sur le lien de désabonnement figurant dans chaque email ou en nous contactant via les contacts indiqués au paraphe 1 ci-dessus.</li>
                        <li>Maintenir à jour nos fichiers clients afin de toujours mieux répondre à vos attentes.</li>
                    </ul>

                    <p>En tout état de cause le responsable publication ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site l’obligation ou non de fournir ces informations.</p>

                    <p className='mt-5 mb-3'><strong>Combien de temps vos données sont-elles conservées ?</strong></p>

                    <p>L'organisme représenté s’engage à conserver vos données personnelles pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées.</p>

                    <p>Les durées de conservation sont définies en fonction des finalités de traitement mis en œuvre par l'organisme représenté et tiennent notamment compte des dispositions légales applicables imposant une durée de conservation précise pour certaines catégories de données, d’éventuels délais de prescription applicables ainsi que des recommandations de la CNIL concernant certaines catégories de traitements de données.</p>

                    <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>

                    <p>Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de l'organisme bénéficiaire et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis-à-vis de l'utilisateur du site.</p>

                    <p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>

                    <p className='mt-5 mb-3'><strong>Comment exercer vos droits ?</strong></p>

                    <p>Conformément à la réglementation applicable en matière de protection des données personnelles, vous pouvez, à tout moment, exercer vos droits d'accès, de rectification, de suppression des données vous concernant ainsi que vos droits de limitation et d'opposition au traitement et à la portabilité de vos données personnelles.</p>

                    <p>En outre, vous disposez légalement du droit de définir des directives relatives au sort de vos données à caractère personnel post mortem.</p>

                    <p>Par ailleurs, toute personne mineure au moment de la collecte de ses données personnelles peut en obtenir l'effacement dans les meilleurs délais.</p>

                    <p>Ces droits s'exercent par courrier à l'adresse de l'organisme représenté (indiqué ci-dessus) ou par l'intermédiaire du formulaire contact disponible sur le site.</p>

                    <p>Dans ce cadre, nous vous prions de bien vouloir accompagner votre demande des éléments nécessaires à votre identification (nom, prénom, e-mail) ainsi que toute autre information nécessaire à la confirmation de votre identité. Vous disposez également d'un droit de recours auprès de la Commission Nationale de l'Informatique et des Libertés en cas de violation de la réglementation applicable en matière de protection des Données Personnelles et notamment du RGPD.</p>
                </div>

                <div id="liens-cookies">
                    <h3>8. Liens hypertextes et cookies.</h3>

                    <p>Le site contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation du responsable publication. Cependant, le responsable de publication n'a pas la possibilité de vérifier le main-content des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>

                    <p>La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>

                    <p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur pour refuser l’installation des cookies en se référant à la documentation disponible auprès de la société éditrice du navigateur web utilisé par l'utilisateur.</p>
                </div>

                <div id="droit-applicable">
                    <h3>9. Droit applicable et attribution de juridiction.</h3>

                    <p>Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents.</p>
                </div>

                <div id="principales-lois">
                    <h3>10. Les principales lois concernées.</h3>

                    <p>Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.<br />
                        Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.<br />
                        Règlement Général sur la Protection des Données (RGPD) de l’Union Européenne adopté le 14 avril 2016 et applicable au 25 mai 2018.<br />
                        Loi n° 2018-493 du 20 juin 2018 relative à la protection des données personnelles.</p>
                </div>

                <div id="lexique">
                    <h3>11. Lexique.</h3>

                    <p><strong>main-content :</strong>&nbsp;Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>

                    <p><strong>Informations utilisateurs :</strong>&nbsp;Ci après dénommée(s) « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par&nbsp;l'organisme représenté&nbsp;pour la gestion de votre compte, de la gestion de la relation utilisateurs et à des fins d’analyses et de statistiques.</p>

                    <p><strong>Utilisateur :</strong>&nbsp;Internaute se connectant, utilisant le site susnommé.</p>

                    <p><strong>Informations personnelles :</strong>&nbsp;« Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>

                    <p>Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
                </div>
            </div>
        </>
    )
}