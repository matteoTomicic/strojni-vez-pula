/* eslint-disable jsx-a11y/alt-text */
import content from "@constants/content.constants";
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
					<h3>{content.footer.aboutUsTitle}</h3>
					<p>{content.footer.aboutUsInfo}</p>
				</div>

				<div className="section links">
					<h3>{content.footer.linksTitle}</h3>
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
					<h3>{content.footer.contactTitle}</h3>
					<ContactCard href={content.path.tel} icon={images.icons.phone} text={content.contact.contactNo} />
					<ContactCard href={content.path.mailto} icon={images.icons.mail} text={content.contact.contactCardMail} />
					<ContactCard icon={images.icons.location} text={content.contact.contactAdress} />
				</div>

				<div className="section socialMedia">
					<h3>{content.footer.socialMediaTitle}</h3>
					<SocialIcon icon={images.icons.facebook} href={content.path.facebookPage} />
					<SocialIcon icon={images.icons.instagram} href={content.path.instagramPage} />
				</div>

				<div className="section disclaimer">
					<p>
						&#169; 2022 Strojni vez Pula | Sva prava pridržana | Izradili <a href={content.path.mailtoMe}>M&K</a>
					</p>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
