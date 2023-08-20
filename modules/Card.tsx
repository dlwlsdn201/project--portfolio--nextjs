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
import { entryType, skillType } from 'types/projects';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

export default function ModuleCard({ data, onClick }: { data: entryType; onClick: Function }) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  // 	setExpanded(!expanded);
  // };

  return (
    <Card
      // sx={{ maxWidth: 500, minHeight: 360 }}
      onClick={() => onClick()}
      style={{ cursor: 'pointer' }}
    >
      <CardHeader
        avatar={
          <Avatar style={{ marginRight: '.2em' }} aria-label="recipe">
            {data?.titleIcon || <SourceOutlinedIcon />}
          </Avatar>
        }
        style={{ textAlign: 'left', maxWidth: '100%', width: '100%', textOverflow: 'ellipsis' }}
        title={
          <Typography
            variant="h6"
            style={{
              fontSize: '1em',
              maxWidth: '90%',
              whiteSpace: 'nowrap',
              wordBreak: 'keep-all',
              textOverflow: 'ellipsis',
              overflowX: 'hidden',
            }}
          >
            {data.title}
          </Typography>
        }
        subheader={data.workPeriod}
      />
      <CardMedia
        component="img"
        height="194"
        image={data?.thumbnail ?? '../static/images/project-thumbnail.jpg'}
        alt="thumbnail"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {data.skills.map((skill: skillType) => (
          <IconButton aria-label="use skill" disabled>
            {skill}
          </IconButton>
        ))}
      </CardActions>
    </Card>
  );
}
