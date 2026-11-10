export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="reveal text-3xl font-semibold tracking-tight text-brand-navy md:text-5xl">
      {title}
    </h2>
  );
}
