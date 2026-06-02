import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <section className="w-[100%] grid grid-cols-1 gap-[40px] p-[0 auto] p-[24px] lg:pt-[var(--s-7)]">
      {children}
    </section>
  );
}

export default PageLayout;
