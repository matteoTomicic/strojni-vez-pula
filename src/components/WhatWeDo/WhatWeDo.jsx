import { home } from "@constants/content.constants";
import { StyledWhatWeDo } from "@components/WhatWeDo/WhatWeDo.style";
import WhatWeDoCard from "@components/WhatWeDo/WhatWeDoCard/WhatWeDoCard";
import images from "@constants/image.constants";

const WhatWeDo = () => (
	<StyledWhatWeDo>
		<div className="container">
			<h2>{home.content.whatWeDoSectionTitle}</h2>
			<WhatWeDoCard
				image={images.icons.foldedShirt}
				cardTitle={home.content.whatWeDoFirstCardTitle}
				cardInfo={home.content.whatWeDoFirstCardInfo}
			/>
			<WhatWeDoCard
				image={images.icons.babyShirt}
				cardTitle={home.content.whatWeDoSecondCardTitle}
				cardInfo={home.content.whatWeDoSecondCardInfo}
			/>
			<WhatWeDoCard
				image={images.icons.towel}
				cardTitle={home.content.whatWeDoThirdCardTitle}
				cardInfo={home.content.whatWeDoThirdCardInfo}
			/>
		</div>
	</StyledWhatWeDo>
);

export default WhatWeDo;
