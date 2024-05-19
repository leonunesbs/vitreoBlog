import { ReactNode } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  children?: ReactNode;
}

export function Search({}: SearchProps) {
  return (
    <label className="input input-bordered flex items-center gap-2 max-w-xs mx-auto w-full input-sm">
      <IoMdSearch className="h-4 w-4" />
      <input type="text" placeholder="Buscar" className="w-full" />
    </label>
  );
}
