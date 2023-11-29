export enum SelectedPage {
	Home = 'home',
	About = 'about',
	Moment = 'moment',
	Wish = 'wish',
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
