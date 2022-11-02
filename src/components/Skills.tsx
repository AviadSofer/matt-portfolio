import skillsColumns from '~/static/skillsColumns';

const Skills: React.FC = () => {
  return (
    <div className='relative top-[-9rem] mx-[6%] grid grid-cols-3 gap-[1px] overflow-hidden rounded-xl border border-lightGrey bg-lightGrey shadow-md'>
      {skillsColumns.map((value) => (
        <div className='bg-white px-8 py-16 text-center' key={value.id}>
          <header>
            <img src={value.iconSrc} alt={value.alt} className='pointer-events-none mx-auto w-20' />
            <h1 className='py-5 text-2xl font-semibold'>{value.title}</h1>
            <p className='font-normal'>{value.explain}</p>
          </header>
          <div className='py-12'>
            <h2 className='text-lg font-medium text-primary'>{value.skillsTitle}</h2>
            <p className='text-lg font-normal'>{value.skills}</p>
          </div>
          <footer>
            <h2 className='text-lg font-medium text-primary'>{value.toolsTitle}</h2>
            <p className='whitespace-pre-line text-lg font-normal'>{value.tools} </p>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default Skills;
