'use client'; // 이 구문은 해당 컴포넌트 파일을 클라이언트 쪽에서 렌더링함

import { CircularProgress } from '@mui/material';
import { CareerInfoIcon, SkillStackIcon, UserInfoIcon } from 'components/icons';
import CircularStatic from 'modules/Progress';
import React from 'react';

type TDataObj = {
	type: string;
	icon: React.ReactElement;
	items: Array<any>;
};

const data: Array<TDataObj> = [
	{
		type: 'info',
		icon: UserInfoIcon(),
		items: [
			{
				label: '이름',
				content: '이진우'
			},
			{
				label: '출생년도',
				content: '1994년 10월 28일'
			},
			{
				label: '거주지',
				content: '울산광역시 중구 태화동 920-7'
			},
			{
				label: '연락처',
				content: '010-5159-7230'
			}
		]
	},
	{
		type: 'career',
		icon: <CareerInfoIcon />,
		items: [
			{
				label: '근무지',
				content: '(주)엔엑스테크놀로지'
			},
			{
				label: '근무 기간',
				content: '2021.05.11 ~ 재직 중'
			},
			{
				label: '직장 분야',
				content: 'AIoT 기반 스마트 빌딩 에너지 관리 솔루션 기업'
			},
			{
				label: '부서',
				content: '플랫폼 서비스팀'
			},
			{
				label: '직급(직책)',
				content: '연구원(팀원)'
			},
			{
				label: '주요 업무',
				content: (
					<ul style={{ marginLeft: 10 }}>
						<li>- 자사 솔루션 웹 애플리케이션 유지 보수</li>

						<li>- 자사 솔루션 웹 애플리케이션 신규 기능 설계</li>

						<li>- 자사 솔루션 웹 애플리케이션 신규 기능 개발</li>

						<li>- 신규 클라이언트 사이트 페이지 구축</li>

						<li>- 팀 업무 일정 관리</li>

						<li>- 팀 역량 강화 프로그램 관리</li>

						<li>- 프론트엔드 소스 코드 리뷰 관리</li>
					</ul>
				)
			}
		]
	},
	{
		type: 'skills',
		icon: <SkillStackIcon />,
		items: [
			{
				label: 'HTML5',
				content: <CircularStatic value={80} />
			},
			{
				label: 'CSS3',
				content: <CircularStatic value={40} />
			}
		]
	}
];

const skillsGrid = (dataObj) => (
	<div className='grid grid-cols-auto grid-flow-col auto-cols-fr gap-2 px-3.5 py-2'>
		{dataObj.items.map((item) => (
			<div className='flex flex-col item-center justify-center'>
				<span>{item.content}</span>
				<span>{item.label}</span>
			</div>
		))}
	</div>
);

const commonGrid = (dataObj) =>
	dataObj.items.map((item) => (
		<div className='grid grid-flow-col auto-cols-fr gap-2 px-3.5 py-2'>
			<div className='w-24 col-span-1 p-1 label font-bold bg-[#222222] flex items-center'>
				{item.label}
			</div>
			<div className='w-full col-span-5 p-1 content'>{item.content}</div>
		</div>
	));

const container = (data: TDataObj) => (
	<div className=' relative  border-2 border-grey px-1 py-4'>
		{data.type !== 'skills' ? commonGrid(data) : skillsGrid(data)}
		<div
			className='title absolute left-2 -top-3 px-1.5'
			style={{ background: 'black' }}>
			{data.icon}
		</div>
	</div>
);

const Content = () => {
	return (
		<div className='space-y-8'>
			{data.map((dataObj: TDataObj) => container(dataObj))}
		</div>
	);
};

export default Content;
