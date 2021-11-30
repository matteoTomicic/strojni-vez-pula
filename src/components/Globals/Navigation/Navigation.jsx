import { useRouter } from "next/router";
import { useState } from "react";
import { StyledNavigation } from "./Navigation.style";
import Image from "next/image";
import images from "../../../constants/image.constants";

const Navigation = () => {
    const router = useRouter();
    const [onClass, setOnClass] = useState(false);
    const [open, setOpen] = useState(false);

    const classToggle = () => {
        setOnClass(!onClass);
    };

    const checkNav = () => {
        setOpen(!open);
    };

    const togglerClick = () => {
        classToggle();
        checkNav();
    };

    const isPageActive = (route) => (route == router.pathname ? "currentPage" : "");

    return (
        <StyledNavigation>
            <header className="nav">
                <div className="container">
                    <div className="nav__toggler-logo">
                        <div onClick={togglerClick} className={`nav__toggler ${onClass ? "opened" : ""}`}>
                            <span></span>
                        </div>
                        <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} title={images.logo.title} priority />
                    </div>
                    <nav className={`nav__items ${open ? "nav__items--shown" : ""}`}>
                        <a href="/" title="Početna" className={`nav__item ${isPageActive("/")}`}>
                            Početna
                        </a>
                        <a href="/o-nama" title="O nama" className={`nav__item ${isPageActive("/o-nama")}`}>
                            O nama
                        </a>
                        <a href="/nasi-radovi" title="Naši radovi" className={`nav__item ${isPageActive("/nasi-radovi")}`}>
                            Naši radovi
                        </a>
                        <a href="/kontakt" title="Kontakt" className={`nav__item ${isPageActive("/kontakt")}`}>
                            Kontakt
                        </a>
                    </nav>
                </div>
            </header>
        </StyledNavigation>
    );
};

export default Navigation;
