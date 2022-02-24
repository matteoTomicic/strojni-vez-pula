import content from "@constants/content.constants";
import { StyledWhatWeDo } from "@components/WhatWeDo/WhatWeDo.style";
import WhatWeDoCard from "@components/WhatWeDo/WhatWeDoCard/WhatWeDoCard";
import images from "@constants/image.constants";

const WhatWeDo = () => (
	<StyledWhatWeDo>
		<div className="container">
			<h2>{content.home.whatWeDoSectionTitle}</h2>
			<WhatWeDoCard
				image={images.icons.foldedShirt}
				cardTitle={content.home.whatWeDoFirstCardTitle}
				cardInfo={content.home.whatWeDoFirstCardInfo}
			/>
			<WhatWeDoCard
				image={images.icons.babyShirt}
				cardTitle={content.home.whatWeDoSecondCardTitle}
				cardInfo={content.home.whatWeDoSecondCardInfo}
			/>
			<WhatWeDoCard
				image={images.icons.towel}
				cardTitle={content.home.whatWeDoThirdCardTitle}
				cardInfo={content.home.whatWeDoThirdCardInfo}
			/>
		</div>
	</StyledWhatWeDo>
);

export default WhatWeDo;
