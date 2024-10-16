import { Button } from './buttons'
import { SearchIcon } from './Icons'

export const SearchInput = () => {
	return (
		<div className='cursor-pointer'>
			<SearchIcon />
		</div>
	)
}

export const JoinInput = ({
	res = null,
	resForm = null,
	bg_color_btn = null,
	text_color_btn = null,
	bg_color_input = null,
	text_color = null,
}) => {
	return (
		<form className={`${resForm} flex justify-center items-center flex-nowrap`}>
			<input
				type='email'
				name='email'
				className={`${res} py-4 px-8 w-3/4 font-satoshi outline-dark-primary ${bg_color_input} ${text_color}`}
				placeholder='your@email.com'
			/>
			<Button
				bg_color={`${bg_color_btn}`}
				text_color={`${text_color_btn}`}
				type={'submit'}
			>
				Sign Up
			</Button>
		</form>
	)
}

export const AuthInput = ({ name, type, register, placeholder }) => {
	return (
		<input
			className='block font-ibm text-base font-normal text-gray-600 leading-[150%] py-3 px-4 border border-gray-400 rounded-sm'
			placeholder={placeholder}
			{...register(name)}
			name={name}
			type={type}
		/>
	)
}
