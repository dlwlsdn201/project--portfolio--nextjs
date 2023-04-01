'use client';

export type skillType = any;

export type entryType = {
  title: string;
  titleIcon?: React.ReactElement;
  workPeriod: string;
  desc: string;
  skills: skillType[];
  id: string;
  href: string;
};
