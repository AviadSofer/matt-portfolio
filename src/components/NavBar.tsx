import Button from './Button';

const NavBar: React.FC = () => {
  return (
    <nav className='flex h-32 items-center px-[8%]'>
      <div className='flex-grow'>
        <img
          src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1667154645/logo_cg4gdr.png'
          alt='logo'
          className='w-14'
        />
      </div>
      <Button>Mentorship</Button>
      <Button filled>Say Hello</Button>
    </nav>
  );
};

export default NavBar;
