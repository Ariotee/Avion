import { Link } from 'react-router-dom'
import { Button } from '../../../shared/ui/buttons'
import { Textarea } from '../../../shared/ui/textarea'
import { TypographyH2 } from '../../../shared/ui/typography'
import { Card } from '../../../shared/ui/cards'

import { getDataCardBrand } from '../../../entities/Item-list'

import HeroIll from '../images/heroILL.png'

export const Home = () => {
	const dataMake = getDataCardBrand

	return (
		<main className='my-[60px] max-sm:my-0 max-md:my-[15px]'>
			<section className='mb-[60px] max-sm:bg-dark-primary max-sm:pt-10 max-sm:pb-6 max-sm:px-6'>
				<div className='container max-sm:p-0'>
					<div className='sm:flex'>
						<div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full w-4/6 p-[60px] max-[850px]:p-[30px] max-sm:p-0 bg-dark-primary'>
							<div className='xl:w-3/4 max-xl:w-11/12 max-[500px]:w-full'>
								<TypographyH2
									res={
										'max-xl:text-2xl max-sm:text-center max-[500px]:text-left'
									}
									color={'text-white'}
									size={'text-[32px]'}
								>
									The furniture brand for the future, with timeless designs
								</TypographyH2>
								<Link to={'/collection'} className='mt-10 block max-sm:hidden'>
									<Button
										pp_res={'max-xl:py-3 max-xl:px-6'}
										bg_color={'bg-light-purple'}
										text_color={'text-white'}
									>
										View collection
									</Button>
								</Link>
							</div>
							<div className='mt-[90px] w-11/12 max-[500px]:text-left max-sm:mt-8 max-[915px]:w-full max-sm:text-center max-md:hidden max-sm:block'>
								<Textarea
									res={'max-lg:text-base'}
									color={'text-white'}
									size={'text-[18px]'}
								>
									A new era in eco friendly furniture with Avelon, the French
									luxury retail brand with nice fonts, tasteful colors and a
									beautiful way to display things digitally using modern web
									technologies.
								</Textarea>
							</div>
							<Link
								to={'/collection'}
								className='flex justify-center mt-10 sm:hidden w-11/12'
							>
								<Button
									res={'max-xl:py-3 max-xl:px-6 max-[500px]:w-11/12'}
									bg_color={'bg-light-purple'}
									text_color={'text-white'}
								>
									View collection
								</Button>
							</Link>
						</div>
						<div className='justify-end max-sm:hidden'>
							<img className='h-full' src={HeroIll} alt='Chair' />
						</div>
					</div>
				</div>
			</section>

			<section className='my-[72px]'>
				<div className='container'>
					<div className='text-center mb-[50px]'>
						<TypographyH2 color={'text-dark-primary'} size={'text-2xl'}>
							What makes our brand different
						</TypographyH2>
					</div>
					<div className='max-xl:flex max-xl:justify-center'>
						<ul
							className='grid grid-cols-4 grid-rows-1 gap-[60px] justify-center items-center 
									   max-xl:w-4/5 max-xl:grid-cols-2 max-xl:grid-rows-2 max-xl:gap-y-7
									   max-sm:grid-cols-1 max-sm:grid-rows-1'
						>
							{dataMake?.map((obj, i) => (
								// ...obj - передача пропса
								<Card key={i} {...obj} />
							))}
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}
