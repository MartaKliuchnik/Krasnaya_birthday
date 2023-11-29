import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from './shared/types';
import Home from './components/home';
import About from './components/about';
import MyCompliments from './components/myCompliments';
import Footer from './components/footer';

function App() {
	const [selecledPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='app bg-gray-20'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selecledPage={selecledPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<About setSelectedPage={setSelectedPage} />
			<MyCompliments setSelectedPage={setSelectedPage} />
			<Footer />
		</div>
	);
}

export default App;
