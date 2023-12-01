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
import { motion } from 'framer-motion';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id='home'
			// className='gap-16 bg-gray-20 py-10 xs:h-[60rem] md:h-full md:pb-0'
			className='bg-gray-20 pt-24 sx:pt-24 sm:pt-24 md:pt-20'
		>
			{/* IMAGE AND MAIN PAGE */}
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
				className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
			>
				{/* MAIN HEADER */}
				<div className='z-10 md:basis-3/5'>
					{/* HEADINGS */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className='md:-mt-20'
					>
						<div className='relative'>
							<div
								className='before:absolute before:-left-10 before:-top-20 before:z-[-1]
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
					</motion.div>

					{/* ACTIONS */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className='mt-8 flex items-center gap-8'
					>
						<ActionButton setSelectedPage={setSelectedPage}>Join</ActionButton>
						<AnchorLink
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.Moment)}
							href={`#${SelectedPage.Moment}`}
						>
							Learn more
						</AnchorLink>
					</motion.div>
				</div>

				{/* IMAGE */}
				<div
					// className='flex basis-3/5 justify-center md:z-10 md:h-[50rem]
					// md:ml-50 md:mt-56 md:justify-items-end'>
					className='flex basis-3/5 md:justify-end justify-center md:z-10'
				>
					<img
						// className='xs:h-3/4 md:h-[580px]'
						className='h-[580px] sm:h-[700px]'
						src={HomePageGraphic}
						alt='home-page-graphic'
					/>
				</div>
			</motion.div>

			{/* SPONSORS */}
			{/* {isAboveMediumScreens && ( */}
			<div
				// className='h-[150px] w-full bg-primary-100 xs:py-[20px] sm:py-0 md:py-0'
				className='h-[150px] w-full bg-primary-100 flex items-center justify-center'
			>
				{/* <div
						// className='mx-auto w-5/6 sm:w-4/6'
						className=''
					> */}
				<div
					className='flex h-[100px] sm:h-[130px] md:gap-20'
					// className='flex w-2/5 items-center content-center xs:gap-[7%] md:gap-[15%]'
				>
					<img
						className='h-[100px] sm:h-[130px]'
						// className='xs:w-3/5 md:w-[150px] sm:h-[100px] md:h-[150px]'
						src={MeatSponsor}
						alt='meet-sponsor'
					/>
					<img
						className='h-[100px] sm:h-[130px]'
						// className='xs:w-3/5 md:w-[150px] md:h-[150px]'
						src={DrinkSponsor}
						alt='drink-sponsor'
					/>
					<img
						className='h-[100px] sm:h-[130px]'
						// className='xs:w-3/5 md:w-[150px] md:h-[150px]'
						src={SewingSponsor}
						alt='sewing-sponsor'
					/>
					<img
						className='h-[100px] sm:h-[130px]'
						// className='xs:w-3/5 md:w-[150px] md:h-[150px]'
						src={CarSponsor}
						alt='car-sponsor'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
