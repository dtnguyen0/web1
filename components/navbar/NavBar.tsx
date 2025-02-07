import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
    const links = [{key:"home", href:"/", name:"Home"}, {key:"dashboard", href:"/dashboard", name:"Dashboard"},{key:"explore", href:"/explore", name:"Explore"},{key:"faq", href:"/faq", name:"FAQ"}];
  return (
    <div className="flex p-8 justify-between items-center px-8 py-4 bg-white shadow-md dark:bg-gray-900">
       <h1 className='px-4'> <Link href="/">Logo(TBD)</Link></h1>
      <ul className="flex w-48 flex-1 justify-between mx-8">
        {links.map((item) => (
        <>
        <li key={item.key} className='hover:bg-white hover:text-black transition duration-300 px-6 py-2 rounded-full'>
          <Link href={item.href}>{item.name}</Link>
        </li>
        </>
      ))}
      </ul>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
