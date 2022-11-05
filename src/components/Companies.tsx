import companiesIcons from '~/static/companiesIcons';

const Companies: React.FC = () => {
  return (
    <div className='flex h-screen flex-col justify-center gap-16 px-[6%]'>
      <h1 className='mx-[25%] text-center text-3xl font-bold text-font'>
        I’m proud to have collaborated with some awesome companies:
      </h1>
      <div className='grid grid-cols-4 grid-rows-2 gap-6'>
        {companiesIcons.map(({ imgSrc, alt, key }) => (
          <img src={imgSrc} alt={alt} key={key} className='w-72' />
        ))}
      </div>
    </div>
  );
};

export default Companies;
