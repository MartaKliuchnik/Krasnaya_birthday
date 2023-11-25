import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	page: string;
	selecledPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selecledPage, setSelectedPage }: Props) {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

	return (
		<AnchorLink
			className={`${
				selecledPage === lowerCasePage ? 'text-primary-500' : ''
			} transition duration-500 hover:text-primary-300`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
}

export default Link;