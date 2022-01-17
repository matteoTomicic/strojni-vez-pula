import styled from "styled-components";
import { sizes, colors } from "@global/styles";

export const StyledNavigation = styled.header`
    .nav {
        box-shadow: 0 .4rem 1rem -.5rem rgba(0, 0, 0, 0.25);

        > .container {
            width: 100%;
            padding: 0;
        }

        &__togglerLogo {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 3rem;

            @media (min-width: ${sizes.mdBreakMin}) {
                width: 20%;
                padding: .5rem 0;
                margin-right: auto;
            }

            @media (min-width: ${sizes.lgBreakMin}) {
                padding: 1rem 0;
            }
        }

        &__toggler {
                display: flex;
                align-items: center;
                width: 3.6rem;
                height: 4.2rem;
                margin-right: auto;

                span {
                    position: relative;
                    display: block;

                    &::before,
                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: -.9rem;
                    }

                    &:after {
                        top: .9rem;
                    }
                }

                span,
                span::before,
                span::after {
                    width: 100%;
                    height: .2rem;
                    background-color: ${colors.darkTxtColor};
                    transition: all 0.3s ease-out;
                }

                &.active {
                    span {
                        background-color: transparent;
                        &::before {
                            transform: rotate(45deg) translate(.5rem, .5rem);
                        }
                        &::after {
                            transform: rotate(-45deg) translate(.7rem, -.8rem);
                        }
                    }
                }

                @media (min-width: ${sizes.mdBreakMin}) {
                    display: none;
                }
            }

        &__items {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            opacity: 0;
            height: 0;
            transition: all 0.7s ease-in-out;

            &--shown {
                opacity: 1;
                height: auto;

                .nav__item {
                    transform: translateX(0);
                }
            }

            @media (min-width: ${sizes.mdBreakMin}) {
                opacity: 1;
                height: auto;
                width: 75%;
                flex-direction: row;
                justify-content: flex-end;
                transition: none;
            }
        }

        &__item {
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                font-weight: 700;
                font-size: 1.8rem;
                color: ${colors.darkTxtColor};
                padding: 2rem 0 2rem 3rem;
                transform: translateX(-100%);

                &:nth-child(even) {
                    background: ${colors.themeGreyDarken};
                }

                &:nth-child(odd),
                &:nth-child(even) {
                    @media (min-width: ${sizes.mdBreakMin}) {
                        background: none;
                    }
                }

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    width: 1rem;
                    height: 0;
                    background: ${colors.red};
                    transition: width 0.3s ease-in-out;

                    @media (min-width: ${sizes.mdBreakMin}) {
                        height: .4rem;
                        bottom: -.6rem;
                        width: 0;
                    }
                }

                &:active,
                &:focus {
                    outline: .1rem solid ${colors.red};
                }

                &.currentPage {
                    &::before {
                        @media (max-width: ${sizes.mdBreakMax}) {
                            height: 100%;
                        }

                        @media (min-width: ${sizes.mdBreakMin}) {
                            width: 100%;
                        }
                    }
                }

                &:not(.currentPage) {
                    &:hover {
                        &::before {
                            width: 100%;
                        }
                    }
                }

                + .nav__item {
                    @media (min-width: ${sizes.mdBreakMin}) {
                        margin-left: 3vw;
                    }

                    @media (min-width: ${sizes.lgBreakMin}) {
                        margin-left: 4vw;
                    }
                }

                @media (min-width: ${sizes.mdBreakMin}) {
                    transform: none;
                    padding: 0;
                    width: auto;
                }
            }
    }
`;
