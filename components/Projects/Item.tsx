'use client';

import { entryType } from 'types/projects';
import ModuleCard from 'modules/Card';
import theme from '../../config/theme';

const moveToLink = (href: string) => {
  window.open(href);
};

const ProjectItem = (data: entryType, index: number) => {
  return (
    <a key={data.id} className="group">
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
