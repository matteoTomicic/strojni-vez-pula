import { createGlobalStyle } from "styled-components";

export const colors = {
    darkTxtColor: "#1F1F1F",
    red: "#C35A5A",
    themeGrey: "#FAF9F9",
    themeGreyDarken: "#ECECEC"
};

export const fonts = {
    font: "'Montserrat', sans-serif"
};

export const rem = (px) => px / 16 + "rem";

export const above = (widthPx) => widthPx / 16 + "rem";

export const below = (widthPx) => widthPx / 16 + "rem";

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
    }

    body {
        font-size: ${rem(16)};
        font-family: ${fonts.font};
        background: ${colors.themeGrey};
    }

    ol,
    ul {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
    } 

    .container {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;

        @media (min-width: ${above(768)}) {
            max-width: ${rem(720)};
        }

        @media (min-width: ${above(992)}) {
            max-width: ${rem(960)};
        }

        @media (min-width: ${above(1200)}) {
            max-width: ${rem(1140)};
        }

        @media (min-width: ${above(1400)}) {
            max-width: ${rem(1320)};
        }
    }
`;
