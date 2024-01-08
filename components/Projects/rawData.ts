import { entryType } from 'types/projects';
import {
  CSS3Icon,
  HTML5Icon,
  JSIcon,
  MuiIcon,
  NextJSIcon,
  NextUiIcon,
  REACTIcon,
  SASSIcon,
  TailwindCSSIcon,
  TSIcon,
} from 'components/icons';

export const rawData: entryType[] = [
  {
    title: '국내 수소 충전소 데이터 조회 서비스',
    workPeriod: '2023.11 ~ 2024.01 (고도화 작업 중)',
    desc: '공공 open API 기반으로 국내 수소 충전소 평균 판매 가격 현황, 충전소 정보 등의 데이터를 제공하는 서비스 웹 애플리케이션입니다.',
    skills: [
      TailwindCSSIcon({ size: 18 }),
      NextUiIcon({ size: 18 }),
      TSIcon({ size: 18 }),
      NextJSIcon({ size: 22 }),
    ],
    id: '0',
    href: 'https://project-recommend-recipes-nextjs-client.vercel.app/',
    thumbnail: '../../static/images/projects/8.png',
  },
  {
    title: 'openai API 를 이용한 음식 레시피 추천 서비스',
    workPeriod: '2023.06.01 ~ 2023.08.10',
    desc: '사용자가 입력한 재료 및 기호 선택값 기반으로 두 가지의 음식 레시피를 추천해주는 웹 서비스 입니다.',
    skills: [
      TailwindCSSIcon({ size: 18 }),
      MuiIcon({ size: 18 }),
      TSIcon({ size: 18 }),
      REACTIcon({ size: 'sm' }),
      NextJSIcon({ size: 22 }),
    ],
    id: '0',
    href: 'https://project-recommend-recipes-nextjs-client.vercel.app/',
    thumbnail: '../../static/images/projects/7.png',
  },
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
