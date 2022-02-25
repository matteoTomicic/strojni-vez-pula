/* eslint-disable jsx-a11y/alt-text */
import content from "@constants/content.constants";
import Image from "next/image";
import images from "@constants/image.constants";
import { StyledAboutUsBrief } from "@components/AboutUsBrief/AboutUsBrief.style";
import CtaButton from "@UI/CtaButton";

const AboutUsBrief = () => {
	return (
		<StyledAboutUsBrief className="AboutUsBrief">
			<div className="container">
				<div className="image image-dt">
					<Image {...images.banners.konciZaVezenje} />
				</div>
				<div className="content">
					<h2>{content.home.aboutUsBriefSectionTitle}</h2>
					<div className="image image-sp">
						<Image {...images.banners.konciZaVezenje} />
					</div>
					<div className="ctaBox">
						<p>{content.home.aboutUsBriefSectionInfo}</p>
						<CtaButton href="/o-nama" className="cta-dark" linkTitle={content.btn.aboutUsBtn} />
					</div>
				</div>
			</div>
		</StyledAboutUsBrief>
	);
};

export default AboutUsBrief;
