import { css } from "styled-components";


const variablesConfig = css`
    :root {
        --rounded-xs   : 0.125rem;
        --rounded-sm   : 0.250rem;
        --rounded-md   : 0.375rem;
        --rounded-lg   : 0.5rem;
        --rounded-xl   : 0.75rem;
        --rounded-2xl  : 1rem;
        --rounded-3xl  : 1.5rem;
        --rounded-full : 9999px;

        --shadow-one          : 0px 12px 34px rgb(32 52 89 / 25%);
        --shadow-two          : 0px 9px 28px 0px rgb(0 0 0 / 15%);
        --shadow-three        : 0 10px 20px 0 rgb(0 0 0 / 5%);
        --shadow-smooth       : 0px 9px 26px 0px rgba(22, 107, 255, 0.1);
        --shadow-x-smooth     : 0 20px 30px 0 rgba(22, 107, 255, 0.1);
        --shadow-top          : 0 -12px 20px -2px rgba(0, 0, 0, 0.10);
        --shadow-bottom       : 0 12px 8px -5px rgba(0, 0, 0, 0.05);
        --shadow-left         : 8px 0 15px -5px rgb(0 0 0 / 15%);
        --shadow-right        : -8px 0 8px -3px rgba(0, 0, 0, 0.25);
        --shadow-inset-bottom : inset 0px -30px 33px -10px rgb(28 9 80 / 5%);
        --shadow-tiny         : rgb(35 34 33 / 17%) 0px 1px 4px 1px;
        --shadow-xtiny        : rgba(33, 33, 52, 0.1) 0px 1px 4px;
        --shadow-colored      : 0 1.4375rem 2.8125rem rgba(22, 107, 255, 0.1);
        --shadow-relief       : inset 0 1px 0 0 hsl(0deg 0% 100% / 5%);

        --xs : 576px;
        --sm : 768px;
        --md : 992px;
        --lg : 1200px;
        --xl : 1400px;

        --font-fam-list : system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --font-fam1     : 'Mona Sans', var(--font-fam-list);
        --font-fam2     : 'Philosopher', var(--font-fam-list);

        --easing     : cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition : all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`

export default variablesConfig