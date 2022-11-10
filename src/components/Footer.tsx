import Button from './Button';
import { TbHandRock } from 'react-icons/tb';

const Footer: React.FC = () => {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center gap-10 bg-primary pt-32 md:pt-0'>
      <div className='absolute top-[-4rem] mx-[6%] flex flex-col items-center justify-between gap-7 rounded-xl bg-font py-14 shadow-md md:flex-row md:px-20'>
        <h1 className='white text-3xl font-bold text-white'>Start a project</h1>
        <p className='w-11/12 text-center text-base font-medium text-white md:w-[35%] md:text-lg'>
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </p>
        <Button filled greenBorder whiteText>
          <TbHandRock className='mx-2' size={20} />
          Let&apos;s do this
        </Button>
      </div>
      <img
        src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1668112003/white-logo_cdenmp.png'
        alt='icon'
        className='w-16'
      />
      <h2 className='text-center text-lg font-normal text-white md:text-xl'>
        Originally Developed By Matt, <br /> Re-Developed By{' '}
        <a className='font-semibold underline' href='https://github.com/AviadSofer'>
          Aviad Sofer
        </a>
        , October 2022
      </h2>
    </div>
  );
};

export default Footer;
