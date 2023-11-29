import HText from '@/shared/HText';
import { SelectedPage, ComplimentType } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import Compliment from './Compliment';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const compliments: Array<ComplimentType> = [
	{
		name: 'Weight Training Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image1,
	},
	{
		name: 'Yoga Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image2,
	},
	{
		name: 'Ab Core Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image3,
	},
	{
		name: 'Adventure Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image4,
	},
	{
		name: 'Fitness Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image5,
	},
	{
		name: 'Training Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: image6,
	},
];

const MyCompliments = ({ setSelectedPage }: Props) => {
	return (
		<section id='mycompliments' className='w-full bg-primary-100 py-20'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Wish)}>
				<motion.div
					className='mx-auto w-5/6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className='md:w-5/6'>
						<HText>My Wish</HText>
						<p className='py-5'>
							Dolore enim consequat est qui. Voluptate ullamco quis dolore
							deserunt eu nostrud adipisicing nisi exercitation adipisicing amet
							deserunt excepteur.
						</p>
					</div>
				</motion.div>

				<div className='mt-10 h-[353px] w-full oserflow-x-auto overflow-y-hidden'>
					<ul className='w-[2800px] whitespace-nowrap'>
						{compliments.map((item: ComplimentType, index) => (
							<Compliment
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default MyCompliments;
