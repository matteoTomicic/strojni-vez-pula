import { useRouter } from "next/router";
import { useState } from "react";
import { StyledNavigation } from "./Navigation.style";
import Image from "next/image";
import images from "../../../constants/image.constants";
import navLinks from "../../../constants/navigation.constants";

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
                        {navLinks.map((navItem, index) => {
                            return (
                                <a key={index} href={navItem.path} title={navItem.title} className={`nav__item ${isPageActive(navItem.path)}`}>
                                    {navItem.name}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </StyledNavigation>
    );
};

export default Navigation;
