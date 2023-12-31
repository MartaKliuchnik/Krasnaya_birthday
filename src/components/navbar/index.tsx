import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo_2.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
	isTopOfPage: boolean;
	selecledPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selecledPage, setSelectedPage }: Props) {
	const flexBetween = 'flex items-center justify-between';
	const isAboutMediumScreens = useMediaQuery('(min-width: 1060px)');
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* LEFT SIDE */}
						<img className='w-40' src={Logo} alt='logo' />

						{/* RIGHT SIDE */}
						{isAboutMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<Link
										page='Главная'
										selecledPage={selecledPage}
										setSelectedPage={setSelectedPage}
										setIsMenuToggled={setIsMenuToggled}
									/>
									<Link
										page='Награждение'
										selecledPage={selecledPage}
										setSelectedPage={setSelectedPage}
										setIsMenuToggled={setIsMenuToggled}
									/>
									<Link
										page='Пожелания'
										selecledPage={selecledPage}
										setSelectedPage={setSelectedPage}
										setIsMenuToggled={setIsMenuToggled}
									/>
								</div>
								<ActionButton setSelectedPage={setSelectedPage}>
									Перейти к поздравлению
								</ActionButton>
							</div>
						) : (
							<button
								className='rounded-full bg-secondary-500 p-2'
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<Bars3Icon className='w-6 h-6 text-white' />
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{!isAboutMediumScreens && isMenuToggled && (
				<div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
					{/* CLOSE ICON */}
					<div className='flex justify-end p-12'>
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className='h-6 w-6 text-gray-400 hover:text-primary-500' />
						</button>
					</div>

					{/* MENU ITEMS */}
					<div className='ml-[33%] flex flex-col gap-10 text-2xl'>
						<Link
							page='Главная'
							selecledPage={selecledPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page='Награждение'
							selecledPage={selecledPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page='Пожелания'
							selecledPage={selecledPage}
							setSelectedPage={setSelectedPage}
							setIsMenuToggled={setIsMenuToggled}
						/>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
