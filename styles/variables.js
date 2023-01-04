import { css } from 'styled-components';

const variables = css`
    :root {
        --color-primary         : #65795c;
        --color-primary-light   : #98ab90;
        --color-primary-xlight  : #c2d1bb;
        --color-primary-xxlight : #eef1ed;
        --color-primary-dark    : #4d5c46;
        --color-body            : #ffffff;
        --color-dark            : #343434;
        --color-title           : #292929;
        --color-text            : #545454;
        --color-text-light      : #a0a0a0;
        --color-grey            : #78807a;
        --color-grey-light      : #b9b9b9;

        --color-primary-rgb         : 101, 121, 92;
        --color-primary-light-rgb   : 152, 171, 144;
        --color-primary-xlight-rgb  : 194, 209, 187;
        --color-primary-xxlight-rgb : 238, 241, 237;
        --color-primary-dark-rgb    : 77,  92,  70;
        --color-body-rgb            : 255, 255, 255;
    }

    .dark {
        --color-primary         : #65795c;
        --color-primary-light   : #98ab90;
        --color-primary-xlight  : #c2d1bb;
        --color-primary-xxlight : #eef1ed;
        --color-primary-dark    : #4d5c46;
        --color-body            : #1a2928;
        --color-dark            : #b5b5b5;
        --color-title           : #c6c6c6;
        --color-text            : #aab5ad;
        --color-grey            : #78807a;

        --color-primary-rgb         : 101, 121, 92;
        --color-primary-light-rgb   : 152, 171, 144;
        --color-primary-xlight-rgb  : 194, 209, 187;
        --color-primary-xxlight-rgb : 238, 241, 237
        --color-primary-dark-rgb    : 77,  92,  70;
        --color-body-rgb            : 26, 41, 40;
    }

    :root {
        --rounded-sm   : 0.125rem;
        --rounded-md   : 0.375rem;
        --rounded-lg   : 0.5rem;
        --rounded-xl   : 0.75rem;
        --rounded-2xl  : 1rem;
        --rounded-3xl  : 1.5rem;
        --rounded-full : 9999px;

        --shadow-one : 0px 12px 34px rgb(32 52 89 / 25%);
        --shadow-two : 0px 9px 28px 0px rgb(0 0 0 / 15%);
        --shadow-three : 0 10px 20px 0 rgb(0 0 0 / 5%);
        --shadow-smooth : 0px 9px 26px 0px rgb(0 0 0 / 15%);
        --shadow-x-smooth : 0 20px 30px 0 rgb(28 9 80 / 5%);
        --shadow-top : 0 -12px 20px -2px rgba(0, 0, 0, 0.10);
        --shadow-bottom : 0 12px 8px -5px rgba(0, 0, 0, 0.23);
        --shadow-left : 8px 0 15px -5px rgb(0 0 0 / 15%);
        --shadow-right : -8px 0 8px -3px rgba(0, 0, 0, 0.25);
        --shadow-inset-bottom : inset 0px -30px 33px -10px rgb(28 9 80 / 5%);

        --screen-sm  : '576px';
        --screen-md  : '768px';
        --screen-lg  : '992px';
        --screen-xl  : '1200px';
        --screen-2xl : '1400px';
    }
`;

export default variables;