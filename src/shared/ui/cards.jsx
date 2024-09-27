import { Textarea } from './textarea'
import { TypographyH2 } from './typography'

export const Card = obj => {
	return (
		<li className='flex flex-col gap-[14px]'>
			<img className='w-6 h-6' src={obj.imgSrc} alt={obj.alt} />
			<div className='flex flex-col gap-2'>
				<TypographyH2 color={'text-dark-primary'} size={'text-[20px]'}>
					{obj.title}
				</TypographyH2>
				<Textarea size={'text-base'} color={'text-dark-primary'}>
					{obj.introduction}
				</Textarea>
			</div>
		</li>
	)
}
