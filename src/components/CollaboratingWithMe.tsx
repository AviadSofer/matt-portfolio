import Button from './Button';
import { BiMessageDetail } from 'react-icons/bi';

const CollaboratingWithMe: React.FC = () => {
  return (
    <div className='border-b border-lightGrey pb-36 text-center'>
      <h1 className='text-2xl font-semibold text-font'>Interested in collaborating with me?</h1>
      <h2 className='pt-7 pb-16 text-xl font-medium text-font '>
        I’m always open to discussing product design work or partnership opportunities.
      </h2>
      <Button mxAuto filled>
        <BiMessageDetail className='relative top-0.5 my-auto mx-2' size={25} />
        <span>Start a conversation</span>
      </Button>
    </div>
  );
};

export default CollaboratingWithMe;
