import toast, { Toaster } from 'react-hot-toast'

import { BurgerIcon, CartIcon, ProfileIcon } from '../../../shared/ui/Icons'
import { SearchInput } from '../../../shared/ui/InputFields'
import { MenuItem } from './MenuItem'

const notify = () => toast.error('Sorry! It does`t work. Soon!')

export const Header = () => {
	return (
		<header className='py-5'>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<div className='hidden md:block' onClick={notify}>
						<SearchInput />
					</div>
					<div className='font-ibm font-normal text-2xl text-dark-hard'>
						Avion
					</div>
					<div
						className='flex justify-between items-center cursor-pointer gap-4'
						onClick={notify}
					>
						<div className='block md:hidden'>
							<SearchInput />
						</div>
						<CartIcon />
						<ProfileIcon />
						<div className='block md:hidden'>
							<BurgerIcon />
						</div>
					</div>
				</div>

				<hr className='w-full border border-solid border-[rgba(0, 0, 0, 0.1)] my-5 hidden md:block' />

				<nav className='hidden md:block'>
					<ul
						className='flex justify-center items-center gap-11'
						onClick={notify}
					>
						<MenuItem>Plant pots</MenuItem>
						<MenuItem>Ceramics</MenuItem>
						<MenuItem>Tables</MenuItem>
						<MenuItem>Chairs</MenuItem>
						<MenuItem>Crockery</MenuItem>
						<MenuItem>Tableware</MenuItem>
						<MenuItem>Cutlery</MenuItem>
					</ul>
				</nav>
			</div>
			<Toaster position='top-center' reverseOrder={false} />
		</header>
	)
}
