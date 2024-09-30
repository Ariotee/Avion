import { TypographyH2 } from '../../../shared/ui/typography'
import { JoinInput } from '../../../shared/ui/InputFields'
import { ItemList } from './components/itemList'

import Twitter from '../../../assets/icons/twitter.svg'
import Skype from '../../../assets/icons/skype.svg'
import Pinterest from '../../../assets/icons/pinterest.svg'
import Insta from '../../../assets/icons/insta.svg'
import Facebook from '../../../assets/icons/facebook.svg'
import Linkedin from '../../../assets/icons/linkedin.svg'

export const Footer = () => {
	return (
		<footer className='bg-dark-primary pt-14 pb-4'>
			<div className='container'>
				<div className='flex justify-between max-lg:flex-wrap max-lg:justify-center max-lg:gap-16'>
					<div className='flex flex-col gap-3 w-[123px]'>
						<TypographyH2 color={'text-light-gray'} size={'text-xl'}>
							Menu
						</TypographyH2>
						<ul className='flex flex-col gap-3'>
							{/* Добавить линки */}
							<ItemList>New arrivals</ItemList>
							<ItemList>Best sellers</ItemList>
							<ItemList>Recently viewed</ItemList>
							<ItemList>Popular this week</ItemList>
							<ItemList>All products</ItemList>
						</ul>
					</div>

					<div className='flex flex-col gap-3 w-[123px]'>
						<TypographyH2 color={'text-light-gray'} size={'text-xl'}>
							Categories
						</TypographyH2>
						<ul className='flex flex-col gap-3'>
							{/* Добавить линки */}
							<ItemList>Crockery</ItemList>
							<ItemList>Furniture</ItemList>
							<ItemList>Homeware</ItemList>
							<ItemList>Plant pots</ItemList>
							<ItemList>Chairs</ItemList>
							<ItemList>Crockery</ItemList>
						</ul>
					</div>

					<div className='flex flex-col gap-3 w-[135px]'>
						<TypographyH2 color={'text-light-gray'} size={'text-xl'}>
							Our company
						</TypographyH2>
						<ul className='flex flex-col gap-3'>
							{/* Добавить линки */}
							<ItemList>About us</ItemList>
							<ItemList>Vacancies</ItemList>
							<ItemList>Contact us</ItemList>
							<ItemList>Privacy</ItemList>
							<ItemList>Returns policy</ItemList>
						</ul>
					</div>

					<div className='w-[596px] flex flex-col gap-3'>
						<TypographyH2
							color={'text-light-gray'}
							size={'text-xl'}
							res={'pl-4'}
						>
							Join our mailing list
						</TypographyH2>
						<JoinInput
							bg_color_btn={'bg-white'}
							text_color_btn={'text-dark-primary'}
							bg_color_input={'bg-[#4E4D93]'}
							text_color={'text-white'}
						/>
					</div>
				</div>

				<hr className='mt-12 mb-6 border border-solid border-[#4E4D93]' />

				<div className='flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-5'>
					<div className='text-light-gray'>Copyright 2024 Ariotee</div>
					<ul className='flex gap-6'>
						{/* Добавить линки */}
						<li className='flex justify-center items-center'>
							<img src={Twitter} alt='Twitter' />
						</li>
						<li className='flex justify-center items-center'>
							<img src={Insta} alt='Instagarm' />
						</li>
						<li className='flex justify-center items-center'>
							<img src={Facebook} alt='Facebook' />
						</li>
						<li className='flex justify-center items-center'>
							<img src={Pinterest} alt='Pinterest' />
						</li>
						<li className='flex justify-center items-center'>
							<img src={Skype} alt='Skype' />
						</li>
						<li className='flex justify-center items-center'>
							<img src={Linkedin} alt='Linkedin' />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
