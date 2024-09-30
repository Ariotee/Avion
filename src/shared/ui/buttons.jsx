export const Button = ({
	bg_color = null,
	text_color = null,
	res = null,
	type = null,
	children,
}) => {
	return (
		<button
			className={`${bg_color} ${text_color} ${res} py-4 px-8 font-normal text-base leading-[150%] font-satoshi text-nowrap`}
			type={`${type}`}
		>
			{children}
		</button>
	)
}
