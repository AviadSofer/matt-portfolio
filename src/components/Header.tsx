const Header: React.FC = () => {
  return (
    <header className='relative flex h-[145vh] flex-col items-center text-center'>
      <h1 className='mt-20 text-5xl font-bold text-font'>Designer, Frontend Developer & Mentor</h1>
      <h2 className='my-9 text-2xl font-normal text-font'>
        I design and code beautifully simple things, and I love what I do.
      </h2>
      <img
        src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1667213533/mf-avatar_l8zdck.svg'
        alt='avatar'
        className='w-1/6'
      />
      <img
        src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1667230941/hero-devices_xrljbx.svg'
        alt='devices'
        className='absolute bottom-0 w-3/5'
      />
    </header>
  );
};

export default Header;
