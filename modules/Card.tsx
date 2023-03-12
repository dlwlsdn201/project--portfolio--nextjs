import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { entryType, skillType } from 'types/projects';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
// const ExpandMore = styled((props: any) => {
// 	const { expand, ...other } = props;
// 	return <IconButton {...other} />;
// })(({ theme, expand }) => ({
// 	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// 	marginLeft: 'auto',
// 	transition: theme.transitions.create('transform', {
// 		duration: theme.transitions.duration.shortest
// 	})
// }));

export default function ModuleCard({
	data,
	onClick
}: {
	data: entryType;
	onClick: Function;
}) {
	// const [expanded, setExpanded] = React.useState(false);

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

	return (
		<Card
			sx={{ maxWidth: 500 }}
			onClick={() => onClick()}
			style={{ cursor: 'pointer' }}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: red[500] }}
						style={{ marginRight: '.2em' }}
						aria-label='recipe'>
						{data?.titleIcon || <SourceOutlinedIcon />}
					</Avatar>
				}
				style={{ textAlign: 'left' }}
				title={
					<Typography
						variant='h6'
						style={{
							maxWidth: '100%',
							whiteSpace: 'nowrap',
							wordBreak: 'keep-all',
							textOverflow: 'ellipsis',
							overflowX: 'hidden'
						}}>
						{data.title}
					</Typography>
				}
				subheader={data.workPeriod}
			/>
			<CardMedia
				component='img'
				height='194'
				image='../static/images/project-thumbnail.jpg'
				alt='thumbnail'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{data.desc}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{data.skills.map((skill: skillType) => (
					<IconButton aria-label='use skill' disabled>
						{skill}
					</IconButton>
				))}
				{/* <ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'>
					<ExpandMoreIcon />
				</ExpandMore> */}
			</CardActions>
			{/* <Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and
						set aside for 10 minutes.
					</Typography>
					<Typography paragraph>
						Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
						over medium-high heat. Add chicken, shrimp and chorizo, and cook,
						stirring occasionally until lightly browned, 6 to 8 minutes.
						Transfer shrimp to a large plate and set aside, leaving chicken and
						chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
						onion, salt and pepper, and cook, stirring often until thickened and
						fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
						cups chicken broth; bring to a boil.
					</Typography>
					<Typography paragraph>
						Add rice and stir very gently to distribute. Top with artichokes and
						peppers, and cook without stirring, until most of the liquid is
						absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
						shrimp and mussels, tucking them down into the rice, and cook again
						without stirring, until mussels have opened and rice is just tender,
						5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
					</Typography>
					<Typography>
						Set aside off of the heat to let rest for 10 minutes, and then
						serve.
					</Typography>
				</CardContent>
			</Collapse> */}
		</Card>
	);
}
