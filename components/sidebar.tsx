'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '3.8rem',
  },
  '/about': {
    name: 'about',
    x: 60,
    y: 35,
    w: '3.8rem',
  },
  // '/blog': {
  // 	name: 'blog',
  // 	x: 127,
  // 	y: 69,
  // 	w: '56px'
  // },
  '/projects': {
    name: 'Projects',
    x: 120,
    y: 69,
    w: '4.5rem',
  },
};

function Logo() {
  return (
    <Link aria-label="LeeJinWoo's Portfolio" href="/">
      <motion.svg
        className="md:h-[37px] h-[25px] text-black dark:text-white"
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
  let pathname = usePathname() || '/';
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // sticky Header의 style 핸들링 코드
    const rootContainer = document.querySelector('.root-container');
    const handleScroll = () => {
      if (rootContainer.scrollTop > 5) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    rootContainer.addEventListener('scroll', handleScroll);

    return () => {
      rootContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="aside-container" className={`${isScrolling ? 'aside-scrolling' : ''} px-[5%]`}>
      <aside className={`md:mx-0 md:h-[100%] md:w-[150px] md:flex-shrink-0 md:px-0 -mx-4 flex pt-[5%] font-serif`}>
        <div className="laptop:sticky laptop:top-20">
          <div className="md:ml-[12px] md:mb-8 md:flex-row md:px-0 ml-2 mb-2 flex flex-col items-start space-y-10 px-4 ">
            <Logo />
          </div>
          <nav
            className="fade md:relative md:flex-col md:overflow-auto md:px-0 relative flex scroll-pr-6 flex-row items-start px-4 pb-0"
            id="nav"
          >
            <div className="md:mt-0 md:flex-col mb-2 mt-2 flex flex-row space-x-0 pr-10">
              {navItems[pathname] ? (
                <>
                  {/* Desktop version, hidden on mobile, animates y axis */}
                  <div className="md:block hidden">
                    <motion.div
                      className="absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800"
                      layoutId="test2"
                      initial={{ opacity: 0, y: navItems[pathname].y }}
                      animate={{
                        opacity: 1,
                        y: navItems[pathname].y,
                        // width: navItems[pathname].w
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
                  <div className="md:hidden block">
                    <motion.div
                      className={`${
                        isScrolling ? 'border border-dashed' : ''
                      } absolute z-[-1] h-[34px] rounded-md bg-neutral-100 dark:bg-neutral-800`}
                      layoutId="test"
                      initial={{ opacity: 0, x: navItems[pathname].x }}
                      animate={{
                        opacity: 1,
                        x: navItems[pathname].x,
                        width: navItems[pathname].w,
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

              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;

                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'py-[5px] px-[10px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
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
