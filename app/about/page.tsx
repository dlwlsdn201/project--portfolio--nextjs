import Content from './Content';

export default function AboutPage() {
  return (
    <section className="overflow-x-hidden">
      <h1 className="font-serif text-3xl font-bold">About Me</h1>
      <div className="my-5 text-neutral-800 dark:text-neutral-200">
        <Content />
      </div>
    </section>
  );
}
