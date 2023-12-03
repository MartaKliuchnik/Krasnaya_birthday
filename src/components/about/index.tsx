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
		title: 'Мадам "ТЕХНОЛОГ БРОШКИНА"',
		description:
			'Повелительница сырого мяса и готовой продукции, с дикой страсть к производству со всеми вытекающими последствиями.',
	},
	{
		icon: <GlobeAltIcon className='h-6 w-6' />,
		title: 'Заслуженная "БОГИНЯ ПРИКЛЮЧЕНИЙ"',
		description:
			'Лягушка-путешественица, у которой всегда стоит на готове собранный чемоданчик на случай неожиданной поездки.',
	},
	{
		icon: <ScissorsIcon className='h-6 w-6' />,
		title: 'Мисс "ОСТРЫЕ НОЖНИЧКИ"',
		description:
			'Владытчица ниток и иголок, числится в базе данных ГАИ за превышение скорости на швейной машинке.',
	},
];

const About = ({ setSelectedPage }: Props) => {
	return (
		<section id='rewarding' className='mx-auto min-h-full w-5/6 py-20'>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Rewarding)}
			>
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
					className='md:my-3/5 md:w-3/4'
				>
					<HText>Пебедитель года</HText>
					<p className='my-5 text-justify'>
						Уже 10 лет мы идем по жизни вместе. Дни и ночи напролет обсуждаем
						наши победы и неудачи. Мы выпили море чая и озеро крепких спиртных
						напитков, оплакивая горькие потери и празднуя значимые победы! Ты
						всегда рядом со мной, и я это очень ценю! За это время я поняла, что
						ты универсальный боец с безграничными возможностями и огромными
						амбициями.
					</p>
					<p className='my-5 text-center'>
						<span className='text-primary-500 font-bold'>ТОП НОМИНАЦИЙ</span> в
						которых тебе нет равных:
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
