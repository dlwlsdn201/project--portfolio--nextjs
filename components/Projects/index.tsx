'use client';
import React from 'react';
import { entryType } from 'types/projects';
import ProjectItem from './Item';
import { CSS3Icon, HTML5Icon, JSIcon, NextJSIcon, REACTIcon, SASSIcon, TSIcon } from 'components/icons';

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
      NextJSIcon({ size: 22 }),
    ],
    id: '0',
    href: 'https://github.com/dlwlsdn201/project--statistic-covid19--nextjs',
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
      NextJSIcon({ size: 22 }),
    ],
    id: '1',
    href: 'https://github.com/dlwlsdn201/project--box-office--react',
  },
  {
    title: 'News viewer',
    workPeriod: '2021.5.30 ~ 2021.06.13',
    desc: 'open API을 활용하여 뉴스 기사 데이터를 조회할 수 있는 웹페이지 입니다.',
    skills: [HTML5Icon({ size: 'sm' }), JSIcon({ size: 'sm' }), CSS3Icon({ size: 'sm' })],
    id: '2',
    href: 'https://github.com/dlwlsdn201/project--news-viewer--js',
  },
  {
    title: 'Clone Web design',
    workPeriod: '2021.02.20 ~ 2021.04.25',
    desc: 'free web Template 의 디자인을 참고하여 순수 클론코딩으로 웹 퍼블리싱 결과물을 제작한 프로젝트입니다.',
    skills: [HTML5Icon({ size: 'sm' }), JSIcon({ size: 'sm' }), SASSIcon({ size: 'sm' })],
    id: '3',
    href: 'https://github.com/dlwlsdn201/project--web-publishing--html',
  },
  {
    title: 'Clone Web design',
    workPeriod: '2021.02.20 ~ 2021.04.25',
    desc: 'free web Template 의 디자인을 참고하여 순수 클론코딩으로 웹 퍼블리싱 결과물을 제작한 프로젝트입니다.',
    skills: [HTML5Icon({ size: 'sm' }), JSIcon({ size: 'sm' }), SASSIcon({ size: 'sm' })],
    id: '4',
    href: 'https://github.com/dlwlsdn201/project--web-publishing--html',
  },
  {
    title: 'Clone Web design',
    workPeriod: '2021.02.20 ~ 2021.04.25',
    desc: 'free web Template 의 디자인을 참고하여 순수 클론코딩으로 웹 퍼블리싱 결과물을 제작한 프로젝트입니다.',
    skills: [HTML5Icon({ size: 'sm' }), JSIcon({ size: 'sm' }), SASSIcon({ size: 'sm' })],
    id: '5',
    href: 'https://github.com/dlwlsdn201/project--web-publishing--html',
  },
];

const Projects = () => {
  return (
    // <Container maxWidth="lg" className="px-0.5 py-3.5">
    //   </Container>
    <div className="relative mx-auto max-w-2xl py-8 px-4 mobile:py-20 mobile:px-6 laptop:max-w-7xl laptop:px-8">
      <div
        id="section05"
        className="grid grid-cols-1 gap-y-10 gap-x-6 mobile:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 desktop:gap-x-8"
      >
        {/* {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))} */}
        {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))}
      </div>
    </div>
  );
};

export default Projects;
