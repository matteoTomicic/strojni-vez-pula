/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import content from "@constants/content.constants";
import { StyledHomepageBanner } from "@components/HomepageBanner/HomepageBanner.style";
import CtaButton from "@UI/CtaButton";
import images from "@constants/image.constants";

const HomepageBanner = () => (
	<StyledHomepageBanner>
		<div className="homepageBanner">
			<Image {...images.banners.homepageBanner} priority={true} className="image" />
			<div className="container">
				<div className="content">
					<h1 className="contentHeading">{content.home.bannerTitle}</h1>
					<p className="contentInfo">{content.home.bannerInfo}</p>
					<div className="contentCta">
						<CtaButton href={content.path.contact} className="cta-red" linkTitle={content.btn.contactUsBtn} />
						<CtaButton href={content.path.ourWork} className="cta-white" linkTitle={content.btn.ourWorkBtn} />
					</div>
				</div>
			</div>
		</div>
	</StyledHomepageBanner>
);

export default HomepageBanner;
