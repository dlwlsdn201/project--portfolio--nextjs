import * as React from 'react';
import CircularProgress, {
	CircularProgressProps
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
	props: CircularProgressProps & {
		value: number;
		label: string;
		icon: React.ReactElement;
	}
) {
	const getColor = (value: number) => {
		if (value <= 30) return 'error';
		else if (value <= 60) return 'warning';
		else if (value <= 85) return 'success';
		else if (value <= 100) return 'primary';
	};

	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress
				color={getColor(props.value)}
				size='6em'
				variant='determinate'
				thickness={6}
				{...props}
			/>
			<Box
				sx={{
					top: 4,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				{props.icon}
				<Typography
					variant='caption'
					component='div'
					fontSize='0.5em'
					color='white'>
					{/* {`${Math.round(props.value)}%`} */}
					{props?.label}
				</Typography>
			</Box>
		</Box>
	);
}

export default function CircularStatic(props: {
	value: number;
	label: string;
	icon: React.ReactElement;
}) {
	// const [progress, setProgress] = React.useState(10);

	// React.useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setProgress((prevProgress) =>
	// 			prevProgress >= 100 ? 0 : prevProgress + 10
	// 		);
	// 	}, 800);
	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	return (
		<CircularProgressWithLabel
			icon={props.icon}
			label={props.label}
			value={props.value}
		/>
	);
}
