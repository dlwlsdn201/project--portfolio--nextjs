import Content from './Content';

export default function AboutPage() {
	return (
		<section>
			<h1 className='font-bold text-3xl font-serif'>About Me</h1>
			<div className='my-5 text-neutral-800 dark:text-neutral-200'>
				<Content />
			</div>
		</section>
	);
}
