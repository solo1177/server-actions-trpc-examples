import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className="h-screen w-36 shadow-md">
      <div>株式会社AAAA</div>
      <div className="navarea">
        <Link href="" className="nav">
          リンク
        </Link>
      </div>
    </section>
  );
}

export default Sidebar;
