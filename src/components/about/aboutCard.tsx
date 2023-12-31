import { motion } from 'framer-motion';

type Props = {
	icon: JSX.Element;
	title: string;
	description: string;
};

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};
const AboutCard = ({ icon, title, description }: Props) => {
	return (
		<motion.div
			variants={childVariant}
			className='mt-5 rounded-md border-2 border-gray-100 px-5 h-[400px] py-16 text-center basis-1/2'
		>
			<div className='mb-4 flex justify-center'>
				<div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
					{icon}
				</div>
			</div>
			<h4 className='font-bold'>{title}</h4>
			<p className='my-3'>{description}</p>
		</motion.div>
	);
};

export default AboutCard;
