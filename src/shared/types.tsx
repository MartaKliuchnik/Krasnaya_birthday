export enum SelectedPage {
	Home = 'Главная',
	Rewarding = 'Награждение',
	Wish = 'Пожелания',
}

export interface AboutType {
	icon: JSX.Element;
	title: string;
	description: string;
}

export interface ComplimentType {
	name: string;
	description: string;
	image: string;
}
