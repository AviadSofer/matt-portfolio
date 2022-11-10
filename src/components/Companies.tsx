import companiesIcons from '~/static/companiesIcons';

const Companies: React.FC = () => {
  return (
    <div className='flex h-screen flex-col justify-center gap-16 px-[6%]'>
      <h1 className='text-center text-xl font-bold text-font md:mx-[25%] md:text-3xl'>
        I’m proud to have collaborated with some awesome companies:
      </h1>
      <div className='grid grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4'>
        {companiesIcons.map(({ imgSrc, alt, key }) => (
          <img src={imgSrc} alt={alt} key={key} className='w-72' />
        ))}
      </div>
    </div>
  );
};

export default Companies;
