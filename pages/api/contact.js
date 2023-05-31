import * as nodemailer from 'nodemailer'

export default function (req, res) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: process.env.EMAIL_ROUTER,
            pass: process.env.EMAIL_ROUTER_PASSWORD,
        },
    })
    const mailData = {
        from: process.env.EMAIL_ROUTER,
        to: process.env.SITE_MAIL,
        name: process.env.SITE_DOMAIN,
        subject: `Message de ${req.body.name} ${req.body?.lastname} via ${process.env.SITE_DOMAIN}`,
        text: emailTemplate(req),
        html: emailTemplate(req)
    }
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.log(err)
        }
    })
    return res.status(200).send('Done.');
}

const emailTemplate = (req) => {
    return (`
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Vous avez reçu un message de ${req.body.name} ${req.body?.lastname} via ${process.env.SITE_DOMAIN}</title>
                <style>
                    ${templateStyles}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="content">
                        <p>Bonjour,</p>
                        <p>Vous avez reçu un message de <strong>${req.body.name} ${req.body?.lastname}</strong> via <strong>${process.env.SITE_DOMAIN}</strong>.</p>
                        <div>
                            <span class="colored bold">Nom : </span> ${req.body.lastname}
                        </div>
                        <div class="mt5">
                            <span class="colored bold">Prénom : </span> ${req.body.name}
                        </div>
                        <div class="mt5">
                            <span class="colored bold">Email : </span> ${req.body.email}
                        </div>
                        <div class="mt5">
                            <span class="colored bold">Téléphone : </span> ${req.body.phone}
                        </div>
                        <div class="mt10">
                            <span class="colored bold">Sujet : </span> ${req.body.subject}
                        </div>
                        <div class="mt10">
                            <p>${req.body.message}</p>
                        </div>
                        <p class="pt20 mt20 border-top">Ceci est un email de soumission automatique, merci de ne pas y répondre directement. Vous pouvez répondre à l'email suivant : ${req.body.email}.</p>
                        <p>Alexandre Vurbier</p>
                    </div>
                    <!-- START FOOTER -->
                    <div class="footer">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="content-block powered-by">
                                    Powered by <a href="https://www.alexandrevurbier.com/">Alexandre Vurbier</a>.
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- END FOOTER -->
                </div>
            </body>
        </html>
    `)
}

const templateStyles = `
    /* -------------------------------------
    GLOBAL RESETS
    ------------------------------------- */

    /*All the styling goes here*/

    img {
        border                 : none;
        -ms-interpolation-mode : bicubic;
        max-width              : 100%;
    }

    body {
        background-color         : #f6f6f6;
        color                    : #000000;
        font-family              : -apple-system, blinkmacsystemfont, 'segoe ui', roboto, helvetica, arial, sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';
        -webkit-font-smoothing   : antialiased;
        font-size                : 14px;
        line-height              : 1.4;
        width                    : 100%;
        margin                   : 0;
        padding                  : 0;
        -ms-text-size-adjust     : 100%;
        -webkit-text-size-adjust : 100%;
    }

    /* -------------------------------------
    BODY & CONTAINER
    ------------------------------------- */

    .container {
        display    : block;
        margin     : 0 auto !important;
        background : #ffffff;
    }

    .content {
        box-sizing    : border-box;
        display       : block;
        margin        : 0 auto;
        max-width     : 100%;
        padding       : 20px;
        background    : #F7F8FF;
        border-radius : 8px;
    }

    @media(max-width: 768px) {
        .content {
            border-radius : 0;
        }
    }

    /* -------------------------------------
    HEADER, FOOTER, MAIN
    ------------------------------------- */

    .content-block {
        padding-bottom : 10px;
        padding-top    : 10px;
    }

    .footer {
        clear      : both;
        margin-top : 10px;
        padding    : 5px 10px;
        text-align : center;
        width      : 100%;
    }
    .footer td,
    .footer p,
    .footer span,
    .footer a {
        color      : #999999;
        font-size  : 12px;
        text-align : center;
    }

    /* -------------------------------------
    TYPOGRAPHY
    ------------------------------------- */
    h1,
    h2,
    h3,
    h4 {
        color         : #000000;
        font-family   : sans-serif;
        font-weight   : 400;
        line-height   : 1.4;
        margin        : 0;
        margin-bottom : 30px;
    }

    h1 {
        font-size      : 35px;
        font-weight    : 300;
        text-align     : center;
        text-transform : capitalize;
    }

    p,
    ul,
    ol {
        font-size     : 14px;
        font-weight   : normal;
        margin        : 0;
        margin-bottom : 15px;
    }
    
    li {
        list-style-position : inside;
        margin-left         : 5px;
    }

    a {
        color           : #2f1c6a !important;
        text-decoration : none;
        font-size       : 14px;
    }

    p,
    span,
    div {
        color     : #000000;
        font-size : 14px;
    }

    /* -------------------------------------
    BUTTONS
    ------------------------------------- */
    .btn {
        box-sizing : border-box;
        width      : 100%;
    }
    .btn > tbody > tr > td {
        padding-bottom : 15px;
    }
    .btn table {
        width : auto;
    }
    .btn table td {
        background-color : #ffffff;
        border-radius    : 5px;
        text-align       : center;
    }
    .btn a {
        background-color : #ffffff;
        border           : solid 1px #3498db;
        border-radius    : 5px;
        box-sizing       : border-box;
        color            : #3498db;
        cursor           : pointer;
        display          : inline-block;
        font-size        : 14px;
        font-weight      : bold;
        margin           : 0;
        padding          : 12px 25px;
        text-decoration  : none;
        text-transform   : capitalize;
    }

    .btn-primary table td {
        background-color : #3498db;
    }

    .btn-primary a {
        background-color : #3498db;
        border-color     : #3498db;
        color            : #ffffff;
    }

    /* -------------------------------------
    OTHER STYLES THAT MIGHT BE USEFUL
    ------------------------------------- */

    .mt0 {
        margin-top : 0;
    }

    .mb0 {
        margin-bottom : 0;
    }

    .mt5 {
        margin-top : 5px;
    }

    .mt10 {
        margin-top : 10px;
    }

    .mt20 {
        margin-top : 20px;
    }

    .pt10 {
        padding-top : 10px;
    }

    .pt20 {
        padding-top : 20px;
    }

    .colored {
        color : #2f1c6a;
    }

    .bold {
        font-weight : 600;
    }

    .border-top {
        border-top : 1px solid #D9DEFF;
    }

    .preheader {
        color      : transparent;
        display    : none;
        height     : 0;
        max-height : 0;
        max-width  : 0;
        opacity    : 0;
        overflow   : hidden;
        mso-hide   : all;
        visibility : hidden;
        width      : 0;
    }

    .powered-by a {
        text-decoration : none;
    }

    hr {
        border        : 0;
        border-bottom : 1px solid #f6f6f6;
        margin        : 20px 0;
    }
`