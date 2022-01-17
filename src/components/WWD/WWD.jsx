import { StyledWWD } from "@components/WWD/WWD.style";
import WWDCard from "@components/WWD/WWDCard/WWDCard";
import images from "@constants/image.constants";

const WWD = () => {
	return (
		<StyledWWD>
			<div className="container">
				<h1>Što radimo?</h1>
				<WWDCard
					imageSrc={images.icons.foldedShirt.src}
					imageAlt={images.icons.foldedShirt.alt}
					imageWidth={images.icons.foldedShirt.width}
					imageHeight={images.icons.foldedShirt.height}
					imageTitle={images.icons.foldedShirt.title}
					cardTitle="Strojno vezenje na radna odjela"
					cardInfo="Kako bi Vaša kompanija bila prepoznatljiva Vašim klijentima, preporučujemo apliciranje loga na radna odijela. Strojni Vez Pula nudi Vam strojno vezenje Vašeg logotipa na sve vrste radnih odijela, kapa, pregača, majica te raznih promotivnih materijala. Logo i ime Vaše firme prvo je što će klijent zapamtiti, a mi ćemo Vam osigurati brzu i kvalitetnu isporuku."
				/>
				<WWDCard
					imageSrc={images.icons.babyShirt.src}
					imageAlt={images.icons.babyShirt.alt}
					imageWidth={images.icons.babyShirt.width}
					imageHeight={images.icons.babyShirt.height}
					imageTitle={images.icons.babyShirt.title}
					cardTitle="Personalizirani pokloni"
					cardInfo="Naše personalizirane dekice, jastučići i ručnici meki su, topli i nježni pokloni za naše najmilije. Osim toga, nudimo Vam i izradu ruksaka te aplikaciju imena zajedno sa najdražim likom iz crtića ili najdraže životinje. Personalizirani pokloni prikladni su za razne prilike - rođendane, rođenja, krštenja ili pak godišnjice, a strojnim vezom učiniti ćete vaše poklone jedinstvenima i unikatnima te stvoriti uspomenu koja traje vječno."
				/>
				<WWDCard
					imageSrc={images.icons.towel.src}
					imageAlt={images.icons.towel.alt}
					imageWidth={images.icons.towel.width}
					imageHeight={images.icons.towel.height}
					imageTitle={images.icons.towel.title}
					cardTitle="Personalizacija opreme za hotele, apartmane i ugostiteljske objekte"
					cardInfo="Ponekad sitnice puno znače, zato pružite svojim gostima jedinstveno iskustvo te se pobrinite da im boravak u Vašim objektima bude upečatljiv. Personalizacijom ručnika, posteljina ili pak presvlaka i jastučiča za stolice osigurati ćete prepoznatljivost Vašeg brenda."
				/>
			</div>
		</StyledWWD>
	);
};

export default WWD;
