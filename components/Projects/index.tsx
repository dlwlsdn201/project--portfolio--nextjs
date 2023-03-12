'use client';
import { Container, Grid } from '@mui/material';
import React from 'react';
import { entryType } from 'types/projects';
import ProjectItem from './Item';

const Projects = ({ entries }: { entries: entryType[] }) => {
	return (
		<Container maxWidth='lg' className='px-0.5 py-3.5'>
			<Grid
				container
				columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
				spacing={3}>
				{entries.map((entry: entryType, index: number) =>
					ProjectItem(entry, index)
				)}
			</Grid>
		</Container>
	);
};

export default Projects;
