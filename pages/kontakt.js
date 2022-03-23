import Layout from "@components/Layout/Layout";
import ContactCard from "@components/ContactCard/ContactCard";
import ContactCardMiniWrapper from "@components/ContactCardMiniWrapper/ContactCardMiniWrapper";

const Contact = () => {
	return (
		<Layout title="Kontakt | Strojni vez Pula">
			<ContactCard />
			<ContactCardMiniWrapper />
		</Layout>
	);
};

export default Contact;
