/* eslint-disable jsx-a11y/alt-text */
import { footerContent } from "@constants/content.constants";
import { StyledFooter } from "@components/Globals/Footer/Footer.style";
import navLinks from "@constants/navigation.constants";
import images from "@global/constants/image.constants";
import SocialIcon from "@components/Globals/Footer/SocialIcon/SocialIcon";
import ContactCard from "@global/components/Globals/Footer/ContactCard/ContactCard";
import Link from "next/link";

const Footer = () => {
	return (
		<StyledFooter className="footer">
			<div className="container">
				<div className="section aboutUs">
					<h3>{footerContent.aboutUsTitle}</h3>
					<p>{footerContent.aboutUsInfo}</p>
				</div>

				<div className="section links">
					<h3>{footerContent.linksTitle}</h3>
					<div className="links-items">
						{navLinks.map((navItem, index) => {
							return (
								<Link href={navItem.path} key={index}>
									<a title={navItem.title} className="links-item">
										{navItem.name}
									</a>
								</Link>
							);
						})}
					</div>
				</div>

				<div className="section contact">
					<h3>{footerContent.contactTitle}</h3>
					<ContactCard icon={images.icons.phone} text="+385 98 315 155" />
					<ContactCard icon={images.icons.mail} text="strojnivezpula@gmail.com" />
					<ContactCard icon={images.icons.location} text="Ruže Petrović 14, 52100 Pula" />
				</div>

				<div className="section socialMedia">
					<h3>{footerContent.socialMediaTitle}</h3>
					<SocialIcon icon={images.icons.facebook} href="https://www.facebook.com/strojnivezpula/" />
					<SocialIcon icon={images.icons.instagram} href="https://www.instagram.com/strojnivezpula" />
				</div>

				<div className="section disclaimer">
					<p>
						&#169; 2022 Strojni vez Pula | Sva prava pridržana | Izradili <a href="mailto:tomicic.matteo7@gmail.com">M&K</a>
					</p>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
