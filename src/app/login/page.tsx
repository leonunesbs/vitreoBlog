import dynamic from 'next/dynamic';

const HankoAuth = dynamic(() => import('@/components/HankoAuth').then((mod) => mod.HankoAuth), { ssr: false });

export default function LoginPage() {
  return (
    <div>
      <HankoAuth />
    </div>
  );
}
