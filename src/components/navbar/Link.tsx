import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: string;
	selecledPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
	setIsMenuToggled: (value: boolean) => void;
};

function Link({
	page,
	selecledPage,
	setSelectedPage,
	setIsMenuToggled,
}: Props) {
	const lowerCasePage = (
		page.toLowerCase() === 'главная'
			? 'home'
			: page.toLowerCase() === 'награждение'
			  ? 'rewarding'
			  : 'wish'
	) as SelectedPage;

	return (
		<AnchorLink
			className={`${
				selecledPage === lowerCasePage ? 'text-primary-500' : ''
			} transition duration-500 hover:text-primary-300`}
			href={`#${lowerCasePage}`}
			onClick={() => {
				setSelectedPage(lowerCasePage), setIsMenuToggled(false);
			}}
		>
			{page}
		</AnchorLink>
	);
}

export default Link;
