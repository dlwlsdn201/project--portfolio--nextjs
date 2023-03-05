import type { Metadata } from 'next';
import { queryBuilder } from 'lib/planetscale';
import { SignIn, SignOut } from './actions';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import Form from './form';

// async function getProject() {
// 	const data = await queryBuilder
// 		.selectFrom('project')
// 		.select(['id', 'body', 'created_by', 'updated_at'])
// 		.orderBy('updated_at', 'desc')
// 		.limit(100)
// 		.execute();

// 	return data;
// }

export const metadata: Metadata = {
	title: 'Project',
	description: 'Sign my project and leave your mark.'
};

export const dynamic = 'force-dynamic';

export default async function ProjectPage() {
	// let entries;
	// let session;

	// try {
	// 	const [projectRes, sessionRes] = await Promise.allSettled([
	// 		getProject(),
	// 		getServerSession(authOptions)
	// 	]);

	// 	if (projectRes.status === 'fulfilled' && projectRes.value[0]) {
	// 		entries = projectRes.value;
	// 	} else {
	// 		console.error(projectRes);
	// 	}

	// 	if (sessionRes.status === 'fulfilled') {
	// 		session = sessionRes.value;
	// 	} else {
	// 		console.error(sessionRes);
	// 	}
	// } catch (error) {
	// 	console.error(error);
	// }

	const entries = [
		{
			프로젝트명: '프로젝트1',
			value: 0,
			id: 'project-001',
			created_by: 'leejinw',
			body: <div>프로젝트 내용</div>
		},
		{
			프로젝트명: '프로젝트2',
			value: 1,
			id: 'project-002',
			created_by: 'leejinw',
			body: <div>프로젝트 내용</div>
		}
	];

	return (
		<section>
			<h1 className='font-bold text-3xl font-serif mb-5'>Projects</h1>
			{/* {session?.user ? (
				<>
					<Form />
					<SignOut />
				</>
			) : (
				<SignIn />
			)} */}
			{entries.map((entry) => (
				<div key={entry.id} className='flex flex-col space-y-1 mb-4'>
					<div className='w-full text-sm'>
						<span className='text-neutral-600 dark:text-neutral-400 mr-1'>
							{entry.created_by}:
						</span>
						{entry.body}
					</div>
				</div>
			))}
		</section>
	);
}
