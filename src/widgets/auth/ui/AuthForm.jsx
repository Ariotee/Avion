import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { AuthInput } from '../../../shared/ui/InputFields'
import { AuthValidation } from '../utils/validation'

export const AuthForm = () => {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(AuthValidation),
		defaultValues: {
			surname: '',
			name: '',
			mail: '',
			phone: '',
			password: '',
		},
	})

	const onSubmit = data => {
		localStorage.setItem('UserData', JSON.stringify(data))
		console.log(data)
	}
	const onError = errors => console.log(errors)

	return (
		<form
			className='flex flex-col gap-5 mt-5'
			onSubmit={handleSubmit(onSubmit, onError)}
		>
			<AuthInput
				name={'surname'}
				type={'text'}
				register={register}
				placeholder='Surname'
			/>
			<AuthInput
				name={'name'}
				type={'text'}
				register={register}
				placeholder='Name'
			/>
			<AuthInput
				name={'mail'}
				type={'mail'}
				register={register}
				placeholder='E-mail'
			/>
			<AuthInput
				name={'dob'}
				type={'date'}
				register={register}
				placeholder='Birthady'
			/>
			<AuthInput
				name={'password'}
				type={'password'}
				register={register}
				placeholder='Password'
			/>
			<AuthInput
				name={'phone'}
				type={'phone'}
				register={register}
				placeholder='Phone'
			/>

			<button
				type='submit'
				className='rounded-sm bg-[#fafafa] py-3 px-6 font-satoshi font-semibold leading-[150%] text-[#8b8b8b]'
			>
				Submit
			</button>
		</form>
	)
}
