import workCards from '~/static/workCards';
import Button from './Button';
import WorkCard from './WorkCard';
import { IoBasketballOutline } from 'react-icons/io5';

const RecentWork: React.FC = () => {
  return (
    <div className='border-b border-lightGrey px-[6%] pb-40 text-center'>
      <h1 className='text-3xl font-bold text-font'>My Recent Work</h1>
      <h2 className='pt-6 text-xl font-semibold text-font'>
        Here are a few past design projects I&apos;ve worked on. Want to see more?
        <a href='matt@pendeavor.com' className='text-blue-500 hover:text-blue-700'>
          {' '}
          Email me
        </a>
        .
      </h2>
      <div className='grid grid-cols-3 grid-rows-2 gap-6 py-20'>
        {workCards.map(({ title, imgSrc, alt }) => (
          <WorkCard title={title} imgSrc={imgSrc} alt={alt} key={alt} />
        ))}
      </div>
      <Button filled mxAuto>
        <IoBasketballOutline size={20} className='relative top-[1px] mx-1' />
        <span> See more on Dribbble</span>
      </Button>
    </div>
  );
};

export default RecentWork;
