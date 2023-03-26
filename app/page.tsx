import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
	ArrowIcon,
	EmailIcon,
	GitHubIcon,
	InstagramIcon,
	TwitterIcon,
	VelogIcon,
	ViewsIcon
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
	let starCount, views, tweetCount;

	try {
		[starCount, views, tweetCount] = await Promise.all([
			getStarCount(),
			getBlogViews(),
			getTweetCount()
		]);
	} catch (error) {
		console.error(error);
	}

	return (
		<section>
			<h1 className='font-bold text-3xl font-serif'>{name}</h1>
			<div className='my-5 max-w-[570px] text-neutral-800 dark:text-neutral-200'>
				{about()}
			</div>
			<div className='flex items-start md:items-center my-8 flex-col md:flex-row'>
				<Image
					alt={name}
					className='rounded-full'
					src={avatar}
					placeholder='blur'
					width={100}
					priority
				/>
				<div className='mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://www.instagram.com/fe_dev.jinw/'
						className='flex items-center gap-2'>
						<InstagramIcon />
						{`SNS Page`}
					</a>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://github.com/dlwlsdn201'
						className='flex items-center gap-2'>
						<GitHubIcon />
						{`${starCount.toLocaleString()} stars on this repo`}
					</a>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://velog.io/@ljw4536'
						className='flex items-center gap-2'>
						<VelogIcon />
						{'Velog page'}
					</a>
					<Link href='/blog' className='flex items-center'>
						<ViewsIcon />
						{`${views.toLocaleString()} blog views all time`}
					</Link>
				</div>
			</div>
			<div className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
				{bio()}
			</div>
			<ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400'>
				<li>
					<a
						className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all'
						rel='noopener noreferrer'
						target='_blank'
						href='https://leerob.substack.com'>
						<EmailIcon />
						<p className='h-7 ml-2'>send to email</p>
					</a>
				</li>
			</ul>
		</section>
	);
}
