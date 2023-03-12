import {
	FontAwesomeIcon,
	FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import {
	faBitbucket,
	faCss3,
	faFigma,
	faGithub,
	faHtml5,
	faInstagram,
	faJs,
	faPython,
	faReact,
	faSass
} from '@fortawesome/free-brands-svg-icons';
import {
	faBlog,
	faBriefcase,
	faCode,
	faEnvelope,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const customStyle = {
	icon: {
		home: {
			width: '1.2em'
		},
		about: {
			badge: { width: '1.3em' }
		}
	}
};

export function HTML5Icon(customOptions?): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faHtml5}
			color='#F15120'
			size={'2xl'}
			{...customOptions}
		/>
	);
}
export function CSS3Icon(customOptions?): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faCss3}
			size={'2xl'}
			color='#3391C9'
			{...customOptions}
		/>
	);
}
export function SASSIcon(customOptions?): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faSass}
			size={'2xl'}
			color='#C35D91'
			{...customOptions}
		/>
	);
}
export function JSIcon(customOptions?): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faJs}
			size={'2xl'}
			color='#E9D11A'
			{...customOptions}
		/>
	);
}
export function TSIcon(customOptions?): React.ReactElement {
	return <SiTypescript color='0172c1' size='2em' {...customOptions} />;
}
export function PythonIcon(customOptions?): React.ReactElement {
	return <FontAwesomeIcon icon={faPython} size={'2xl'} {...customOptions} />;
}
export function REACTIcon(customOptions?): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faReact}
			size={'2xl'}
			color='#61DBFB'
			{...customOptions}
		/>
	);
}
export function NextJSIcon(customOptions?): React.ReactElement {
	return <TbBrandNextjs size='2em' color='#000000' {...customOptions} />;
}
export function FigmaIcon(customOptions?): React.ReactElement {
	return <FontAwesomeIcon icon={faFigma} size={'2xl'} {...customOptions} />;
}
export function BitbucketIcon(customOptions?): React.ReactElement {
	return <FontAwesomeIcon icon={faBitbucket} size={'2xl'} {...customOptions} />;
}
export function GithubIcon(
	customOptions?: FontAwesomeIconProps
): React.ReactElement {
	return <FontAwesomeIcon icon={faGithub} size={'2xl'} {...customOptions} />;
}

export function SkillStackIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faCode}
			style={{ width: customStyle.icon.about.badge.width }}
		/>
	);
}

export function UserInfoIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faUser}
			style={{ width: customStyle.icon.about.badge.width }}
		/>
	);
}

export function CareerInfoIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faBriefcase}
			style={{ width: customStyle.icon.about.badge.width }}
		/>
	);
}

export function InstagramIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faInstagram}
			style={{ width: customStyle.icon.home.width }}
		/>
	);
}

export function VelogIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faBlog}
			style={{ width: customStyle.icon.home.width }}
		/>
	);
}

export function EmailIcon(): React.ReactElement {
	return (
		<FontAwesomeIcon
			icon={faEnvelope}
			style={{ width: customStyle.icon.home.width }}
		/>
	);
}

export function TwitterIcon() {
	return (
		<svg
			width='20'
			height='16'
			viewBox='0 0 24 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#a)'>
				<path
					d='M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h24v19.636H0z' />
				</clipPath>
			</defs>
		</svg>
	);
}

export function GitHubIcon() {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_9914_10)'>
				<path
					d='M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_9914_10'>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}

export function ViewsIcon() {
	return (
		<svg
			className='mr-2'
			width='20'
			height='20'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.25 18.0001L9 11.2501L13.306 15.5571C14.5507 13.1029 16.6044 11.1535 19.12 10.0381L21.86 8.81809M21.86 8.81809L15.92 6.53809M21.86 8.81809L19.58 14.7591'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export function ArrowIcon() {
	return (
		<svg
			className='mr-2'
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
				fill='currentColor'
			/>
		</svg>
	);
}

export function YoutubeIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='800'
			width='800'
			viewBox='0 0 461.001 461.001'
			className='w-5 h-5'
			fill='currentColor'>
			<path d='M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z' />
		</svg>
	);
}
