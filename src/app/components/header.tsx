import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-24 pl-3 pr-8 w-full shadow-md flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/logo/logo.svg"
          alt="ロゴ"
          width={304}
          height={48}
        />
      </Link>
      <div>
        ログアウト
      </div>
    </header>
  );
}

export default Header;
