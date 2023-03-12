'use client';

export type skillType = React.ReactElement;

export type entryType = {
	title: string;
	titleIcon?: React.ReactElement;
	workPeriod: string;
	desc: string;
	skills: skillType[];
	id: string;
	href: string;
};
