import type { Metadata } from 'next';
import Projects from 'components/Projects';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Sign my project and leave your mark.',
};

export const dynamic = 'force-dynamic';

export default function ProjectPage() {
  // * 추후 DB에 저장 후, API 로 불러와볼 예정

  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">Projects</h1>
      <Projects />
    </section>
  );
}
