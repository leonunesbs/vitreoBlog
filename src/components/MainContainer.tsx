import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <h1>MainContainer</h1>
      {children}
    </>
  );
}
