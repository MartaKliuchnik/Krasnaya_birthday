import Logo from '@/assets/Logo_2.png';

const Footer = () => {
	return (
		<footer className='py-10'>
			<div className='md:flex flex-col mx-auto w-5/6 gap-8'>
				<img className='w-60' src={Logo} alt={Logo} />

				<div className='justify-content w-5/6 gap-16 md:flex'>
					<div className='mt-16 md:mt-0 basis-2/3'>
						<h4 className='font-bold'>Итого</h4>
						<p className='mt-5'>Пускай ты на год постарела...</p>
						<p className='my-3.5'>Пускай ты уже не тот сочный персик...</p>
					</div>
					<div className='mt-16 basis-2/3 md:mt-0'>
						<h4 className='font-bold'>Помни</h4>
						<p className='mt-5'>
							Главное, что ты еще не курага, ты тот еще фрукт!
						</p>
						<p className='my-3.5'>У тебя много пороха в пороховнице!</p>
					</div>
					<div className='mt-16 basis-11/12 md:mt-0'>
						<h4 className='font-bold'>Contact</h4>
						<p className='mt-5'>С днем рождения, стареющая, дряхлеющая,</p>
						<p className='my-3.5'>
							но по-прежнему озорная и любимая, Красненькая!
						</p>
					</div>
				</div>

				<div>
					<p className='font-bold'>Сайт сделан с любовью ❤</p>
					<p className='font-bold'>Но данные никак не защищены ☺️</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
