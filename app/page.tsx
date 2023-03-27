import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import { EmailIcon, GitHubIcon, InstagramIcon, TwitterIcon, VelogIcon, ViewsIcon } from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="section-home">
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
      <div className="my-5 max-w-[570px] text-neutral-800 dark:text-neutral-200">{about()}</div>
      <div className="my-8 flex flex-col items-start md:flex-row md:items-center">
        <Image alt={name} className="rounded-full" src={avatar} placeholder="blur" width={100} priority />
        <div className="mt-8 ml-0 space-y-2 text-neutral-500 dark:text-indigo-300 md:mt-0 md:ml-6">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/fe_dev.jinw/"
            className="flex items-center gap-2"
          >
            <InstagramIcon />
            {`SNS Page`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/dlwlsdn201"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`Github Page`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://velog.io/@ljw4536"
            className="flex items-center gap-2"
          >
            <VelogIcon />
            {'Velog page'}
          </a>
        </div>
      </div>
      <div className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">{bio()}</div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-500 dark:text-indigo-300 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <EmailIcon />
            <p className="ml-2 h-7">send to email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
