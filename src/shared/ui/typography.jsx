export const TypographyH2 = ({
	color = null,
	size = null,
	res = null,
	children,
}) => {
	return (
		<h2
			className={`${color} ${size} ${res} font-medium font-ibm leading-[140%]`}
		>
			{children}
		</h2>
	)
}
