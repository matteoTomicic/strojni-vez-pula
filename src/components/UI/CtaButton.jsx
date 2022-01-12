import Link from "next/link";

const CtaButton = props => {
	return (
		<Link href={props.href}>
			<a className={["cta", props.className].join(" ")}>{props.linkTitle}</a>
		</Link>
	);
};

export default CtaButton;
