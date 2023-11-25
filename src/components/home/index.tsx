import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MeatSponsor from '@/assets/MeatSponsor.png';
import DrinkSponsor from '@/assets/DrinkSponsor.png';
import SewingSponsor from '@/assets/SewingSponsor.png';
import CarSponsor from '@/assets/CarSponsor.png';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
	return (
		<section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
			{/* IMAGE AND MAIN PAGE */}
			<div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
				{/* MAIN HEADER */}
				<div className='z-10 mt-20 ms:basis-3/5 '>
					{/* HEADINGS */}
					<div className='md:-mt-20'>
						<div className='relative'>
							<div
								className='before:absolute before:-top-20 before:-left-10 before:z-[-1]
								md:before:content-krasnayatext'
							>
								<img
									// className='md:pb-[20px]'
									src={HomePageText}
									alt='home-page-text'
								/>
							</div>
						</div>

						<p className='mt-8 text-sm'>
							Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
							Studios to get the Body Shapes That you Dream of.. Get Your Dream
							Body Now.
						</p>
					</div>

					{/* ACTIONS */}
					<div className='mt-8 flex items-center gap-8'>
						<ActionButton setSelectedPage={setSelectedPage}>Join</ActionButton>
						<AnchorLink
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.Moment)}
							href={`#${SelectedPage.Moment}`}
						>
							Learn more
						</AnchorLink>
					</div>
				</div>

				{/* IMAGE */}
				<div
					className='flex basis-3/5 justify-center md:z-10 h-[50rem]
				md:ml-50 md:mt-56 md:justify-items-end'
				>
					<img
						className='md:h-[580px]'
						src={HomePageGraphic}
						alt='home-page-graphic'
					/>
				</div>
			</div>

			{/* SPONSORS */}
			{/* {isAboveMediumScreens && ( */}
			<div className='h-[150px] w-full bg-primary-100 xs:py-[20px] sm:py-0 md:py-0'>
				<div className='mx-auto w-5/6 sm:w-4/6'>
					<div className='flex w-2/5 items-center justify-between md:gap-[15%]'>
						<img
							className='xs:w-3/5 md:w-[150px] sm:h-[100px] md:h-[150px]'
							src={MeatSponsor}
							alt='meet-sponsor'
						/>
						<img
							className='xs:w-3/5 md:w-[150px] md:h-[150px]'
							src={DrinkSponsor}
							alt='drink-sponsor'
						/>
						<img
							className='xs:w-3/5 md:w-[150px] md:h-[150px]'
							src={CarSponsor}
							alt='car-sponsor'
						/>
						<img
							className='xs:w-3/5 md:w-[150px] md:h-[150px]'
							src={SewingSponsor}
							alt='sewing-sponsor'
						/>
					</div>
				</div>
			</div>
			{/* )} */}
		</section>
	);
};

export default Home;
