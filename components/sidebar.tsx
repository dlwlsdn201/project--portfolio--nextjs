'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const initialState = {
  home: {
    name: 'home',
    x: 0,
    y: 0,
    w: undefined,
  },
  about: {
    name: 'about',
    x: 64,
    y: 35,
    w: undefined,
  },
  // '/blog': {
  // 	name: 'blog',
  // 	x: 127,
  // 	y: 69,
  // 	w: '56px'
  // },
  projects: {
    name: 'projects',
    x: 150,
    y: 69,
    w: undefined,
  },
};

function Logo() {
  return (
    <Link aria-label="LeeJinWoo's Portfolio" href="/">
      <motion.svg
        className="h-[25px] text-black dark:text-white tablet:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() !== '/' ? usePathname().split('/')[1] : '/';
  const [isScrolling, setIsScrolling] = useState(false);
  const [config, setConfig] = useState(initialState);

  if (!pathname || pathname === '/') pathname = 'home';

  useEffect(() => {
    // nav link text 의 width 기준으로 motion div width 값 동적 정의
    let homeTextWidth = 80;
    let aboutTextWidth = 80;
    let projectsTextWidth = 80;
    if (document) {
      const ElementHomeLink = document.querySelector('#home');
      const ElementAboutLink = document.querySelector('#about');
      const ElementProjectsLink = document.querySelector('#projects');

      if (ElementHomeLink && ElementAboutLink && ElementProjectsLink) {
        homeTextWidth = ElementHomeLink.clientWidth;
        aboutTextWidth = ElementAboutLink.clientWidth;
        projectsTextWidth = ElementProjectsLink.clientWidth;
      }

      setConfig({
        home: {
          ...config.home,
          w: homeTextWidth,
        },
        about: {
          ...config.about,
          x: 16 + homeTextWidth,
          w: aboutTextWidth,
        },
        projects: {
          ...config.projects,
          x: 32 + homeTextWidth + aboutTextWidth,
          w: projectsTextWidth,
        },
      });
    }
  }, []);

  useEffect(() => {
    // sticky Header의 style 핸들링 코드
    if (screen.width < 768) {
      const innerContainer = document.querySelector('.inner-container');

      const handleScroll = () => {
        if (innerContainer.scrollTop > 5) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };
      innerContainer.addEventListener('scroll', handleScroll);

      return () => {
        innerContainer.removeEventListener('scroll', handleScroll);
      };
    }
    return () => false;
  }, [window, screen.width]);
  return (
    <div id="aside-container" className={`${isScrolling ? 'aside-scrolling' : ''} px-[5%]`}>
      <aside
        className={`-mx-4 flex pt-[5%] font-serif tablet:mx-0 tablet:h-[100%] tablet:w-[150px] tablet:flex-shrink-0 tablet:px-0`}
      >
        <div className="w-[100%] mobile:sticky mobile:top-20 tablet:relative tablet:top-0">
          <div className="ml-2 mb-2 flex flex-col items-start space-y-10 px-4 tablet:ml-[12px] tablet:mb-8 tablet:flex-row tablet:px-0 ">
            <Logo />
          </div>
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 tablet:relative tablet:flex-col tablet:overflow-auto tablet:px-0"
            id="nav"
          >
            <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 tablet:mt-0 tablet:flex-col">
              {config[pathname] ? (
                <>
                  {/* Desktop version, hidden on mobile, animates y axis */}
                  <div className="hidden tablet:block">
                    <motion.div
                      className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                      layoutId="test2"
                      initial={{ opacity: 0, y: config[pathname].y }}
                      animate={{
                        opacity: 1,
                        y: config[pathname].y,
                        // width: config[pathname].w
                        width: '60%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  </div>
                  {/* Mobile version, hidden on desktop, animates x axis */}
                  <div className="block tablet:hidden">
                    <motion.div
                      className={`${
                        isScrolling ? 'border border-dashed' : ''
                      } absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800`}
                      layoutId="test"
                      initial={{ opacity: 0, x: config[pathname].x }}
                      animate={{
                        opacity: 1,
                        x: config[pathname].x,
                        width: config[pathname].w,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  </div>
                </>
              ) : null}

              {Object.entries(config).map(([path, { name }]) => {
                const isActive = `/${path}` === pathname || path === pathname;
                return (
                  <Link
                    key={path}
                    href={path === 'home' ? '/' : `/${path}`}
                    id={path}
                    className={clsx(
                      'py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200 mobile:!mr-4 mobile:w-auto mobile:px-2',
                      {
                        'text-indigo-300': !isActive,
                        'font-bold': isActive,
                      },
                    )}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
