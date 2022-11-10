import Button from './Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [navWindow, setNavWindow] = useState(false);

  return (
    <nav className='px-[6%]'>
      <div className='flex h-32 items-center'>
        <div className='flex-grow'>
          <img
            src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1668112003/logo_jgjuro.png'
            alt='logo'
            className='w-14'
          />
        </div>
        {navWindow ? (
          <AiOutlineClose
            size={20}
            className='cursor-pointer text-font hover:text-blue-700 md:hidden'
            onClick={() => setNavWindow(false)}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className='cursor-pointer text-font hover:text-blue-700 md:hidden'
            onClick={() => setNavWindow(true)}
          />
        )}
        <div className='hidden md:flex '>
          <Button>Mentorship</Button>
          <Button filled>Say Hello</Button>
        </div>
      </div>

      <div style={{ display: navWindow ? 'flex' : 'none' }} className='flex-col items-center gap-4'>
        <Button>Mentorship</Button>
        <Button filled>Say Hello</Button>
      </div>
    </nav>
  );
};

export default NavBar;
