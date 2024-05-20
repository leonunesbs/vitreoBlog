'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  children?: ReactNode;
}

type Inputs = {
  searchString: string;
};

export function Search({}: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ searchString }) => {
    router.push(`/post/search?q=${searchString}`);
  };
  useEffect(() => {
    const searchString = searchParams.get('q');
    if (!searchString) reset();
  }, [reset, searchParams]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="input input-bordered flex items-center gap-2 max-w-xs mx-auto w-full h-10">
        <IoMdSearch className="h-4 w-4" />
        <input type="text" placeholder="Buscar" className="w-full" {...register('searchString')} />
      </label>
    </form>
  );
}
