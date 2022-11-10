import Button from './Button';
import { BiMessageDetail } from 'react-icons/bi';

const CollaboratingWithMe: React.FC = () => {
  return (
    <div className='mx-[6%] border-b border-lightGrey pb-36 text-center'>
      <h1 className='text-xl font-bold text-font md:text-2xl md:font-semibold'>
        Interested in collaborating with me?
      </h1>
      <h2 className='pt-7 pb-16 text-xl font-medium text-font '>
        I’m always open to discussing product design work or partnership opportunities.
      </h2>
      <Button
        onClick={() => window.open('https://github.com/AviadSofer/matt-portfolio', '_blank')}
        mxAuto
        filled
      >
        <BiMessageDetail className='relative top-0.5 my-auto mx-2' size={25} />
        <span>Start a conversation</span>
      </Button>
    </div>
  );
};

export default CollaboratingWithMe;
