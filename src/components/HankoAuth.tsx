'use client';

import { Hanko, register } from '@teamhanko/hanko-elements';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL as string;

export function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import('@teamhanko/hanko-elements').then(({ Hanko }) => setHanko(new Hanko(hankoApi)));
  }, []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace('/dashboard');
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
}
