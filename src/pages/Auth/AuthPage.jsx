import React from 'react'

import { TypographyH2 } from '../../shared/ui/typography'
import { AuthForm } from '../../widgets/auth/ui/AuthForm'
import { Link } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'

export const AuthPage = () => {
	return (
		<div className=''>
			<div className='flex justify-center items-center h-screen'>
				<div className='p-10 border-2 border-gray-600 rounded-lg w-2/5'>
					<Link
						to={'/'}
						className='flex items-center gap-2 font-ibm font-normal text-xl mb-5'
					>
						<SlArrowLeft /> Back
					</Link>

					<TypographyH2 color={'text-dark-primary'} size={'text-[32px]'}>
						Registration
					</TypographyH2>

					<AuthForm />
				</div>
			</div>
		</div>
	)
}
