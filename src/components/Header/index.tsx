'use client';

import Link from 'next/link';
import type { FC } from 'react';

interface IHeaderItems {
  id: number;
}


const Header: FC<IHeaderItems> = () => {
  return (
    <header className="px-8 py-8 flex justify-between bg-blue-900 text-violet-50">
      <Link href="/">
        <span>Home</span>
      </Link>
      <button
        className="bg-violet-50 text-blue-900 px-4 py-2 rounded-md"
        type="button"
      >
        Login
      </button>
    </header>
  );
};

export default Header;