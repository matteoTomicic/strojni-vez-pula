import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledContactCard = styled.section`
    padding: 4vw 0;

    .container {
        @media (min-width: ${sizes.mdBreakMin}) {
            justify-content: space-between;
            align-items: center;
        }
    }

    h1 {
        margin: .5em 0;

        @media (min-width: ${sizes.mdBreakMin}) {
            margin-top: 0;
        }
    }

    a {
        display: flex;
        margin: 1em 0;
        font-weight: bold;
        text-decoration: underline;
    }

    .image-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        @media (min-width: ${sizes.mdBreakMin}) {
            width: 48%;
        }
    }

    .text-wrapper {
        @media (min-width: ${sizes.mdBreakMin}) {
            width: 48%;
        }
    }
`;