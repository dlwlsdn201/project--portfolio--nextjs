import type { Metadata } from 'next';
// import { queryBuilder } from 'lib/planetscale';
// import { SignIn, SignOut } from './actions';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from 'pages/api/auth/[...nextauth]';
import Form from './form';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import ProjectItem from 'components/Projects/Item';
import { entryType } from 'types/projects';
import Projects from 'components/Projects';
import { GrReactjs } from 'react-icons/gr';
import { FaHtml5 } from 'react-icons/fa';
import {
	CSS3Icon,
	HTML5Icon,
	JSIcon,
	NextJSIcon,
	REACTIcon,
	SASSIcon,
	TSIcon
} from 'components/icons';
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

	// * 추후 DB에 저장 후, API 로 불러와볼 예정
	const entries: entryType[] = [
		{
			title: '국내 Covid-19 통계 현황',
			workPeriod: '2022.09.24 ~ 2022.11.30',
			desc: '국내의 주간/일간 Covid-19 통계 현황 데이터를 조회할 수 있는 웹페이지 입니다.',
			skills: [
				HTML5Icon({ size: 'sm' }),
				SASSIcon({ size: 'sm' }),
				JSIcon({ size: 'sm' }),
				TSIcon({ size: 18 }),
				REACTIcon({ size: 'sm' }),
				NextJSIcon({ size: 22 })
			],
			id: '0',
			href: 'https://github.com/dlwlsdn201/project--statistic-covid19--nextjs'
		},
		{
			title: '박스오피스 랭킹 조회 서비스',
			workPeriod: '2021.02.16 ~ 2022.02.25',
			desc: '특정 날짜 기준으로 국내/해외의 영화 랭킹 정보를 조회할 수 있는 웹페이지 입니다.',
			skills: [
				JSIcon({ size: 'sm' }),
				CSS3Icon({ size: 'sm' }),
				TSIcon({ size: 18 }),
				REACTIcon({ size: 'sm' }),
				NextJSIcon({ size: 22 })
			],
			id: '1',
			href: 'https://github.com/dlwlsdn201/project--box-office--react'
		},
		{
			title: 'News viewer',
			workPeriod: '2021.5.30 ~ 2021.06.13',
			desc: 'open API을 활용하여 뉴스 기사 데이터를 조회할 수 있는 웹페이지 입니다.',
			skills: [
				HTML5Icon({ size: 'sm' }),
				JSIcon({ size: 'sm' }),
				CSS3Icon({ size: 'sm' })
			],
			id: '2',
			href: 'https://github.com/dlwlsdn201/project--news-viewer--js'
		},
		{
			title: 'Clone Web design',
			workPeriod: '2021.02.20 ~ 2021.04.25',
			desc: 'free web Template 의 디자인을 참고하여 순수 클론코딩으로 웹 퍼블리싱 결과물을 제작한 프로젝트입니다.',
			skills: [
				HTML5Icon({ size: 'sm' }),
				JSIcon({ size: 'sm' }),
				SASSIcon({ size: 'sm' })
			],
			id: '3',
			href: 'https://github.com/dlwlsdn201/project--web-publishing--html'
		}
	];

	return (
		<section>
			<h1 className='font-bold text-3xl font-serif mb-5'>Projects</h1>
			<Projects entries={entries} />
		</section>
	);
}
