'use client';
import React from 'react';
import { entryType } from 'types/projects';
import ProjectItem from './Item';
import { rawData } from './rawData';

const Projects = () => {
  return (
    // <Container maxWidth="lg" className="px-0.5 py-3.5">
    //   </Container>
    <div className="relative mx-auto h-[100%] max-w-2xl overflow-y-auto overflow-x-hidden py-8 px-4 mobile:py-5 mobile:px-8 tablet:px-16 laptop:max-w-7xl laptop:px-8">
      <div id="section05" className="grid gap-y-10 gap-x-6 mobile:grid-cols-1 laptop:grid-cols-2  desktop:gap-x-8">
        {/* {entries.map((entry: entryType, index: number) => ProjectItem(entry, index))} */}
        {rawData.map((entry: entryType, index: number) => ProjectItem(entry, index))}
      </div>
    </div>
  );
};

export default Projects;
