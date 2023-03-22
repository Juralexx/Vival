import { css } from 'styled-components';

const variablesColors = css`
    :root {
        --primary             : #65795c;
        --primary-rgb         : 101, 121, 92;
        --primary-light       : #98ab90;
        --primary-light-rgb   : 152, 171, 144;
        --primary-xlight      : #c2d1bb;
        --primary-xlight-rgb  : 194, 209, 187;
        --primary-xxlight     : #eef1ed;
        --primary-xxlight-rgb : 238, 241, 237;
        --primary-dark        : #4d5c46;
        --primary-dark-rgb    : 77,  92,  70;

        --secondary     : #ff8a65;
        --secondary-rgb : 255, 138, 101;

        --body        : #ffffff;
        --body-rgb    : 255, 255, 255;
        --dark        : #343434;
        --title       : #2d3748;
        --text        : #47546b;
        --text-light  : #a0a0a0;
        --text-xlight : #cfd6e0;
        --white       : #ffffff;
        --grey        : #78807a;
        --grey-md     : #9D9D9D;
        --grey-light  : #b9b9b9;
        --grey-xlight : #eeeeee;

        --input-text  : #47546b;
        --placeholder : #9a9fa7;

        --content         : #ffffff;
        --content-rgb     : 248, 250, 252;
        --content-light   : #F6F8F9;
        --content-x-light : #1A2D48;
        
        --light-border : #DCDEDD;

        --success     : #198754;
        --success-rgb : 25,  135, 84;
        --info        : #0dcaf0;
        --info-rgb    : 13,  202, 240;
        --warning     : #ffc107;
        --warning-rgb : 255, 193, 7;
        --danger      : #dc3545;
        --danger-rgb  : 220, 53,  69;

        --facebook  : #1a478a;
        --instagram : #c72a9d;
        --twitter   : #55acef;
        --snapchat  : #fffc00;
        --youtube   : #e91e00;
        --twitch    : #9147ff;
        --pinterest : #cb2229;
        --linkedin  : #007bb6;
        --whatsapp  : #25D366;
        --messenger : #00B2FF;
    }

    .dark {
        --primary         : #65795c;
        --primary-light   : #98ab90;
        --primary-xlight  : #c2d1bb;
        --primary-xxlight : #eef1ed;
        --primary-dark    : #4d5c46;
        --body            : #1a2928;
        --dark            : #b5b5b5;
        --title           : #c6c6c6;
        --text            : #aab5ad;
        --grey            : #78807a;

        --primary-rgb         : 101, 121, 92;
        --primary-light-rgb   : 152, 171, 144;
        --primary-xlight-rgb  : 194, 209, 187;
        --primary-xxlight-rgb : 238, 241, 237;
        --primary-dark-rgb    : 77,  92,  70;
        --body-rgb            : 26,  41,  40;
    }
`;

export default variablesColors;