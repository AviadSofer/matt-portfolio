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
      <div className='absolute flex h-full flex-col justify-center rounded-xl bg-darkBlue opacity-0 duration-500 ease-in-out hover:opacity-100'>
        <h1 className='px-[10%] pb-6 text-center text-xl font-normal text-white'>{title}</h1>
        <Button
          onClick={() => window.open('https://github.com/AviadSofer/matt-portfolio', '_blank')}
          filled
          whiteText
          mxAuto
        >
          <span>Visit Website</span>
          <IoIosArrowForward size={15} className='relative top-[3px]' />
        </Button>
      </div>
      <img src={imgSrc} alt={alt} className='w-full rounded-xl' />
    </div>
  );
};

export default WorkCard;
