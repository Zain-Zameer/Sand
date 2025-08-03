import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <div className='fixed w-full bg-white top-0 left-0 z-9999 p-3 flex justify-between items-center'>
      <img width={60} src="/logo.png" alt="logo" />
      

      <div className='flex gap-10 items-center'>
        <div className="flex gap-8 text-black text-sm font-medium tracking-wide">
        <p className="hover:text-yellow-400 cursor-pointer transition"><a href="/">Home</a></p>
        <p className="hover:text-yellow-400 cursor-pointer transition"><a href="/about">About</a></p>
        
      </div>
        {!isSignedIn && (
          <Button className='cursor-pointer'>Sign In</Button>
        )}
      </div>
    </div>
  );
}

export default Header;

