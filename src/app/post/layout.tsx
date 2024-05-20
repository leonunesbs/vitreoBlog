import { ScrollToTop } from '@/components';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-4">
      {children}
      <ScrollToTop />
    </div>
  );
}
