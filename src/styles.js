import { createGlobalStyle } from "styled-components";

export const colors = {
    darkTxtColor: "#1F1F1F",
    darkTxtGreyBackground: "#343434",
    lightTxtColor: "#5A5A5A",
    red: "#9A3737",
    themeGrey: "#FAF9F9",
    themeGreyDarken: "#ECECEC",
    themeGreenLight: "#D1EBE6"

};

export const fonts = {
    font: "'Montserrat', sans-serif"
};

export const sizes = {
    smBreakMin: "36rem",
    mdBreakMin: "48rem",
    lgBreakMin: "62rem",
    xlBreakMin: "75rem",
    xxlBreakMin: "87.5rem",
    mdBreakMax: "47.999rem"
};

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: ${fonts.font};
        background: ${colors.themeGrey};
    }

    h1 {
        font-size: 3.2rem;
        color: ${colors.darkTxtColor};

        @media (min-width: ${sizes.mdBreakMin}) {
            font-size: 3.8rem;
        }

        @media (min-width: ${sizes.lgBreakMin}) {
            font-size: 4.8rem;
        }
    }

    h2 {
        font-size: 2.4rem;
        color: ${colors.darkTxtColor};

        @media (min-width: ${sizes.mdBreakMin}) {
            font-size: 2.8rem;
        }

        @media (min-width: ${sizes.lgBreakMin}) {
            font-size: 3.6rem;
        }
    }

    h3 {
        font-size: 1.8rem;
        color: ${colors.darkTxtColor};

        @media (min-width: ${sizes.mdBreakMin}) {
            font-size: 2rem;
        }

        @media (min-width: ${sizes.lgBreakMin}) {
            font-size: 2.4rem;
        }
    }

    p {
        color: ${colors.lightTxtColor};
        line-height: 1.2em;
    }

    p,
    a {
        font-size: 1.4rem;

        @media (min-width: ${sizes.mdBreakMin}) {
            font-size: 1.6rem;
        }

        @media (min-width: ${sizes.lgBreakMin}) {
            font-size: 1.8rem;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ol,
    ul {
        list-style: none;
    }


    img {
        max-width: 100%;
    } 

    .container {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 0 3rem;

        &-column {
            flex-direction: column;
        }

        @media (min-width: ${sizes.mdBreakMin}) {
            max-width: 72rem;
            padding: 0;
        }

        @media (min-width: ${sizes.lgBreakMin}) {
            max-width: 96rem;
        }

        @media (min-width: ${sizes.xlBreakMin}) {
            max-width: 114rem;
        }

        @media (min-width: ${sizes.xxlBreakMin}) {
            max-width: 132rem;
        }
    }

    .cta {
        padding: 0.72em 1.58em;
        font-weight: bold;
        border-radius: 0.4em;
        transition: all 0.2s ease-in-out;

        &-red {
            background: ${colors.red};
            color: white;
        }

        &-white {
            background: white;
        }

        &-dark {
            background: ${colors.darkTxtColor};
            color: white;
        }

        &:active,
        &:focus {
            outline: .1rem solid black;
        }

        &:hover {
            transform: scale(1.05);
        }
    }
`;
