'use client';
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { entryType } from 'types/projects';
import ProjectItem from './Item';

const Projects = ({ entries }: { entries: entryType[] }) => {
  return (
    // <Container maxWidth="lg" className="px-0.5 py-3.5">
    //   </Container>
    <div className="relative mx-auto max-w-2xl py-8 px-4 mobile:py-20 mobile:px-6 laptop:max-w-7xl laptop:px-8">
      <div
        id="section05"
        className="grid grid-cols-1 gap-y-10 gap-x-6 mobile:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 desktop:gap-x-8"
      >
        {/* {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))} */}
        {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))}
      </div>
    </div>
  );
};

export default Projects;
