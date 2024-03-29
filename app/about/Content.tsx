'use client'; // 이 구문은 해당 컴포넌트 파일을 클라이언트 쪽에서 렌더링함

import { Box, CircularProgress, Grid } from '@mui/material';
import {
  AntdIcon,
  BitbucketIcon,
  CareerInfoIcon,
  CSS3Icon,
  FigmaIcon,
  GithubIcon,
  HTML5Icon,
  JSIcon,
  PythonIcon,
  REACTIcon,
  SASSIcon,
  SkillStackIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  UserInfoIcon,
} from 'components/icons';
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
    icon: <UserInfoIcon />,
    items: [
      {
        label: '이름',
        content: '이진우',
      },
      {
        label: '출생년도',
        content: '1994년 10월 28일',
      },
      {
        label: '거주지',
        content: '울산광역시 중구 태화동',
      },
      {
        label: 'E-mail',
        content: 'dev.leejinw@gmail.com',
      },
    ],
  },
  {
    type: 'career',
    icon: <CareerInfoIcon />,
    items: [
      {
        label: '근무지',
        content: '(주)엔엑스테크놀로지',
      },
      {
        label: '근무 기간',
        content: '2021.05.11 ~ 재직 중',
      },
      {
        label: '직장 분야',
        content: 'AIoT 기반 스마트 빌딩 에너지 관리 솔루션 기업',
      },
      {
        label: '부서',
        content: '플랫폼 서비스팀',
      },
      {
        label: '직급(직책)',
        content: '연구원(팀원)',
      },
      {
        label: '주요 업무',
        content: (
          <ul>
            <li>- 자사 웹 애플리케이션 유지 보수</li>

            <li>- 자사 웹 애플리케이션 신규 기능 및 고도화 개발 기획 및 설계</li>

            <li>- 자사 웹 애플리케이션 신규 기능 및 고도화 개발</li>

            <li>- 자사 웹 애플리케이션 릴리즈 담당</li>

            <li>- CI/CD pipelines 관리</li>

            <li>- git 백업 시스템 관리</li>

            <li>- 프론트엔드 소스 코드 리뷰 리드</li>
          </ul>
        ),
      },
    ],
  },
  {
    type: 'skills',
    icon: <SkillStackIcon />,
    items: [
      {
        label: 'HTML5',
        content: <CircularStatic icon={HTML5Icon()} label="HTML5" value={65} />,
      },
      {
        label: 'CSS3',
        content: <CircularStatic icon={CSS3Icon()} label="CSS3" value={60} />,
      },
      {
        label: 'SASS',
        content: <CircularStatic icon={SASSIcon()} label="SASS" value={60} />,
      },
      {
        label: 'TailwindCSS',
        content: <CircularStatic icon={TailwindCSSIcon()} label="Tailwind CSS" value={60} />,
      },
      {
        label: 'styled-components',
        content: <CircularStatic icon={StyledComponentsIcon()} label="Styled components" value={60} />,
      },
      {
        label: 'Ant Design',
        content: <CircularStatic icon={AntdIcon()} label="Ant Design" value={85} />,
      },
      {
        label: 'Material UI',
        content: <CircularStatic icon={AntdIcon()} label="Material UI" value={45} />,
      },
      {
        label: 'JavaScript',
        content: <CircularStatic icon={JSIcon()} label="JavaScript" value={70} />,
      },
      {
        label: 'React',
        content: <CircularStatic icon={REACTIcon()} label="React" value={75} />,
      },
      {
        label: 'Figma',
        content: <CircularStatic icon={FigmaIcon()} label="Figma" value={45} />,
      },
      {
        label: 'Python',
        content: <CircularStatic icon={PythonIcon()} label="Python" value={30} />,
      },
      {
        label: 'Bitbucket',
        content: <CircularStatic icon={BitbucketIcon()} label="Bitbucket" value={80} />,
      },
      {
        label: 'Github',
        content: <CircularStatic icon={GithubIcon()} label="Github" value={70} />,
      },
    ],
  },
];

// <div className='grid grid-cols-auto grid-flow-col auto-cols-fr gap-2 px-3.5 py-2'>
const skillsGrid = (dataObj) => (
  <Box
    sx={{
      position: 'relative',
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Grid container spacing={{ xs: 6, md: 4 }} columns={{ xs: 2, mobile: 2, md: 4, laptop: 4 }}>
      {dataObj.items.map((item, index) => (
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          key={index}
          style={{
            display: 'flex',
            flexFlow: 'nowrap column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>{item.content}</span>
          {/* <span>{item.label}</span> */}
        </Grid>
      ))}
    </Grid>
  </Box>
);
{
  /* </div> */
}

const commonGrid = (dataObj) =>
  dataObj.items.map((item) => (
    <div className="grid auto-cols-fr grid-flow-col gap-2 break-keep px-3.5  py-2 mobile:text-sm tablet:text-lg">
      <div className="label col-span-1 flex w-24 items-center p-1 font-bold">{item.label}</div>
      <div className="content col-span-5 w-full p-1 mobile:col-start-3">{item.content}</div>
    </div>
  ));

const container = (data: TDataObj, idx: number) => (
  <div className={`${idx === 0 && 'mt-8'} border-grey relative border-2 px-2 py-4`}>
    {data.type !== 'skills' ? commonGrid(data) : skillsGrid(data)}
    <div
      className="title absolute -top-[24px] -left-[0px]"
      // style={{background: 'black'}}
    >
      {data.icon}
    </div>
  </div>
);

const Content = () => {
  return (
    <div className="space-y-10 overflow-y-auto">
      {data.map((dataObj: TDataObj, idx: number) => container(dataObj, idx))}
      {/* <div>
        <div className="scroll-more-info">
          <span></span>
          <strong>Scroll</strong>
        </div>
      </div> */}
    </div>
  );
};

export default Content;
