'use client';
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { entryType } from 'types/projects';
import ProjectItem from './Item';

const Projects = ({ entries }: { entries: entryType[] }) => {
  return (
    // <Container maxWidth="lg" className="px-0.5 py-3.5">
    //   </Container>
    <div className="relative mx-auto max-w-2xl py-8 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        id="section05"
        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
      >
        {/* {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))} */}
        {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))}
      </div>
    </div>
  );
};

export default Projects;
