import { StyledWhatWeDo } from "@components/WhatWeDo/WhatWeDo.style";
import WhatWeDoCard from "@components/WhatWeDo/WhatWeDoCard/WhatWeDoCard";
import images from "@constants/image.constants";

const WhatWeDo = () => (
	<StyledWhatWeDo>
		<div className="container">
			<h2>Što radimo?</h2>
			<WhatWeDoCard
				image={images.icons.foldedShirt}
				cardTitle="Strojno vezenje na radna odjela"
				cardInfo="Kako bi Vaša kompanija bila prepoznatljiva Vašim klijentima, preporučujemo apliciranje loga na radna odijela. Strojni Vez Pula nudi Vam strojno vezenje Vašeg logotipa na sve vrste radnih odijela, kapa, pregača, majica te raznih promotivnih materijala. Logo i ime Vaše firme prvo je što će klijent zapamtiti, a mi ćemo Vam osigurati brzu i kvalitetnu isporuku."
			/>
			<WhatWeDoCard
				image={images.icons.babyShirt}
				cardTitle="Personalizirani pokloni"
				cardInfo="Naše personalizirane dekice, jastučići i ručnici meki su, topli i nježni pokloni za naše najmilije. Osim toga, nudimo Vam i izradu ruksaka te aplikaciju imena zajedno sa najdražim likom iz crtića ili najdraže životinje. Personalizirani pokloni prikladni su za razne prilike - rođendane, rođenja, krštenja ili pak godišnjice, a strojnim vezom učiniti ćete vaše poklone jedinstvenima i unikatnima te stvoriti uspomenu koja traje vječno."
			/>
			<WhatWeDoCard
				image={images.icons.towel}
				cardTitle="Personalizacija opreme za hotele, apartmane i ugostiteljske objekte"
				cardInfo="Ponekad sitnice puno znače, zato pružite svojim gostima jedinstveno iskustvo te se pobrinite da im boravak u Vašim objektima bude upečatljiv. Personalizacijom ručnika, posteljina ili pak presvlaka i jastučiča za stolice osigurati ćete prepoznatljivost Vašeg brenda."
			/>
		</div>
	</StyledWhatWeDo>
);

export default WhatWeDo;
