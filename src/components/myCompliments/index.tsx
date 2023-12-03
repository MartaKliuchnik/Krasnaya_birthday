import HText from '@/shared/HText';
import { SelectedPage, ComplimentType } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/image1.jpeg';
import image2 from '@/assets/image2.jpeg';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import image7 from '@/assets/image7.png';
import Compliment from './Compliment';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const compliments: Array<ComplimentType> = [
	{
		name: 'Уверенности',
		description:
			' Пусть глаза твои сияют радостью ярче, чем летние звёзды; пусть твоё женское очарование не знает преград и бьёт наповал, без пощады и предупреждения!',
		image: image1,
	},

	{
		name: 'Везения',
		description:
			'Желаю, чтобы волшебным магнитиком в твою жизнь притягивались чудесные события, увлекательные приключения и замечательные люди.',
		image: image4,
	},

	{
		name: 'Терпения',
		description:
			'Красненькая, порхай, как бабочка, жаль, как пчела, веселись, как стрекоза, прыгай к цели, как кузнечик! Не разменивайся на мелочи! Счастья, тебе по самые помидоры и удачи на все случаи жизни!',
		image: image6,
	},
	{
		name: 'Любви',
		description:
			'Желаю много-много взаимной и чистой любви! Желаю много-много общения и бесконечных моментов счастья! Чтобы на твои уши не падала лапша, чтобы на твои мозги не капала совесть!',
		image: image2,
	},
	{
		name: 'Удовлетворения',
		description:
			'Пусть дело, которым ты занимаешься, приносит не только зарплату, но и максимальное творческое удовлетворение! Пусть на пути будет меньше преград и больше возможностей!',
		image: image5,
	},
	{
		name: 'Решительности',
		description:
			'Иди всегда вперед и не тормози, смело открывай новые возможности для себя, расти и развивайся в интересных направлениях, меняй к лучшему свою жизнь, рискуй и выигрывай.',
		image: image3,
	},
	{
		name: 'Мечтай',
		description:
			'Желаю мечтать сколько угодно, и чтоб не треснула губа! Жить сладкой жизнью, и чтоб нигде ничего не слиплось! Желаю удовлетворять все желания веселых тараканов в твоей голове!',
		image: image7,
	},
];

const MyCompliments = ({ setSelectedPage }: Props) => {
	return (
		<section id='wish' className='w-full bg-primary-100 py-20'>
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
					<HText>Пусть все будет так, как ты захочешь</HText>
					<div className='md:w-3/4 text-justify'>
						<p className='py-5'>
							В этот особенный день пожеланий в твой адрес будет множество:
							кто-то здоровья пожелает, кто-то — счастья, успехов, удачи, денег
							и, конечно, любви. Пусть все исполнится! Пусть желанными будут
							подарки и поздравления!
						</p>
					</div>
				</motion.div>

				<div className='mt-10 h-[280px] w-full overflow-x-auto overflow-y-hidden'>
					<ul className='w-[2300px] whitespace-nowrap'>
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
