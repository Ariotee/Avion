import { Button } from './buttons'
import { SearchIcon } from './Icons'

export const SearchInput = () => {
	return (
		<div className='cursor-pointer'>
			<SearchIcon />
		</div>
	)
}

export const JoinInput = ({ res = null, resForm = null }) => {
	return (
		<form className={`${resForm} flex justify-center items-center flex-nowrap`}>
			<input
				type='email'
				name='email'
				className={`${res} py-4 px-8 w-3/4 font-satoshi outline-dark-primary bg-light-gray`}
				placeholder='your@email.com'
			/>
			<Button
				bg_color={'text-white'}
				text_color={'bg-dark-primary'}
				type={'submit'}
			>
				Sign Up
			</Button>
		</form>
	)
}
