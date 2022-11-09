import Button from './Button';
import { TbHandRock } from 'react-icons/tb';

const Footer: React.FC = () => {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center gap-10 bg-primary'>
      <div className='absolute top-[-4rem] mx-[6%] flex items-center justify-between rounded-xl bg-font px-20 py-14 shadow-md'>
        <h1 className='white text-3xl font-bold text-white'>Start a project</h1>
        <p className='w-[35%] text-center text-lg font-medium text-white'>
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </p>
        <Button filled greenBorder whiteText>
          <TbHandRock className='mx-2' size={20} />
          Let&apos;s do this
        </Button>
      </div>
      <img
        src='https://res.cloudinary.com/dmjmaixrd/image/upload/v1668026213/icon_usbvop.png'
        alt='icon'
        className='w-20'
      />
      <h2 className='text-center text-xl font-normal text-white'>
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
