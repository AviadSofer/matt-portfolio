import Button from './Button';
import { IoIosArrowForward } from 'react-icons/io';

interface Props {
  title: string;
  imgSrc: string;
  alt: string;
}

const WorkCard: React.FC<Props> = ({ title, imgSrc, alt }) => {
  return (
    <div className='relative'>
      <div
        className={`absolute h-64 w-96 rounded-xl bg-darkBlue p-7 opacity-0 duration-500 ease-in-out hover:opacity-100`}
      >
        <h1 className='py-6 text-center text-xl font-normal text-white'>{title}</h1>
        <Button filled whiteText mxAuto>
          <span>Visit Website</span>
          <IoIosArrowForward size={15} className='relative top-[3px]' />
        </Button>
      </div>
      <img src={imgSrc} alt={alt} className='h-64 w-96 rounded-xl' />
    </div>
  );
};

export default WorkCard;
