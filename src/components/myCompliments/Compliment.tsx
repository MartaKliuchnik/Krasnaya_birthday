type Props = {
	name: string;
	description: string;
	image: string;
};

const Compliment = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-20 flex
    h-[263px] w-[350px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

	return (
		<li className='relative mx-5 inline-block h-[380px] w-[350px]'>
			<div className={overlayStyles}>
				<p className='text-2xl'>{name}</p>
				<p className='mt-5'>{description}</p>
			</div>
			<div className='w-[350px] h-[263px]'>
				<img className='w-full h-full object-cover' src={image} alt={image} />
			</div>
		</li>
	);
};

export default Compliment;
