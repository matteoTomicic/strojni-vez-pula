/* eslint-disable jsx-a11y/alt-text */
import content from "@constants/content.constants";
import { StyledHomepageBanner } from "@components/HomepageBanner/HomepageBanner.style";
import CtaButton from "@UI/CtaButton";
import images from "@constants/image.constants";
import Image from "next/image";

const HomepageBanner = () => (
	<StyledHomepageBanner>
		<div className="homepageBanner">
			<Image {...images.banners.homepageBanner} className="homepageBanner__image" />
			<div className="container">
				<div className="homepageBanner__content">
					<h1 className="homepageBanner__contentHeading">{content.home.bannerTitle}</h1>
					<p className="homepageBanner__contentInfo">{content.home.bannerInfo}</p>
					<div className="homepageBanner__contentCta">
						<CtaButton href="/kontakt" className="cta--red" linkTitle={content.btn.contactUsBtn} />
						<CtaButton href="/nasi-radovi" className="cta--white" linkTitle={content.btn.ourWorkBtn} />
					</div>
				</div>
			</div>
		</div>
	</StyledHomepageBanner>
);

export default HomepageBanner;
