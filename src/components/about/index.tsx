import HText from '@/shared/HText';
import { SelectedPage, AboutType } from '@/shared/types';
import {
	ScissorsIcon,
	GlobeAltIcon,
	AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import AboutCard from './aboutCard';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const aboutInfo: Array<AboutType> = [
	{
		icon: <AcademicCapIcon className='h-6 w-6' />,
		title: 'Technolog in birth',
		description:
			'Nulla eiusmod dolore minim irure exercitation mollit veniam magna occaecat amet consequat officia culpa.',
	},
	{
		icon: <ScissorsIcon className='h-6 w-6' />,
		title: 'Sharp Scissors',
		description:
			'Nulla eiusmod dolore minim irure exercitation mollit veniam magna occaecat amet consequat officia culpa.',
	},
	{
		icon: <GlobeAltIcon className='h-6 w-6' />,
		title: 'Frog travel',
		description:
			'Nulla eiusmod dolore minim irure exercitation mollit veniam magna occaecat amet consequat officia culpa.',
	},
];

const About = ({ setSelectedPage }: Props) => {
	return (
		<section id='about' className='mx-auto min-h-full w-5/6 py-20'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
				{/* HEADER */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='md:my-3/5 md:w-3/5'
				>
					<HText>
						{/* Немного информации о ней */}
						More than
					</HText>
					<p className='my-5 text-sm'>
						{/* Красненькая - не просто хороший человек. Она универсальный боец,
						способный выдержать самые сложные испытания и противостоять любым
						вызовам. */}
						Duis consequat consectetur non in et eiusmod elit nisi eu dolore
						commodo cupidatat excepteur cupidatat. Fugiat magna ipsum veniam ad
						velit.
					</p>
				</motion.div>

				{/* ABOUT */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
					className='md:flex items-center justify-between gap-8 mt-5'
				>
					{aboutInfo.map((about) => (
						<AboutCard
							key={about.title}
							icon={about.icon}
							title={about.title}
							description={about.description}
							// setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
