'use client';

import { Grid, Paper } from '@mui/material';
import { entryType } from 'types/projects';
import { styled } from '@mui/material/styles';
import ModuleCard from 'modules/Card';
import theme from '../../config/theme';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'dark',
  // ...theme?.typography?.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  minHeight: '100%',
}));

const moveToLink = (href: string) => {
  window.open(href, '_blank');
};

const ProjectItem = (data: entryType, index: number) => {
  return (
    <a key={data.id} href={data.href} className="group">
      <ModuleCard
        data={data}
        onClick={() => {
          moveToLink(data?.href);
        }}
      />
    </a>
  );
};

export default ProjectItem;
