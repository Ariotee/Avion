export const Textarea = ({
	res = null,
	color = null,
	size = null,
	children,
}) => {
	return (
		<p
			className={`${res} ${color} ${size} font-satoshi font-normal leading-[150%]`}
		>
			{children}
		</p>
	)
}
