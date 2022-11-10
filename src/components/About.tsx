const About: React.FC = () => {
  return (
    <div className='bg-primary pt-24 pb-52 text-center md:h-screen md:py-36'>
      <h2 className='mx-auto text-2xl font-bold text-white md:text-3xl'>
        Hi, I’m Matt. Nice to meet you.
      </h2>
      <p className='mx-[6%] pt-7 text-lg font-semibold text-white md:mx-auto md:whitespace-pre-line md:text-xl'>
        {`Since beginning my journey as a freelance designer over 11 years ago, I've 
        done remote work for agencies, consulted for startups, and collaborated with 
        talented people to create digital products for both business and consumer 
        use. I'm quietly confident, naturally curious, and perpetually working on 
        improving my chops one design problem at a time.`}
      </p>
    </div>
  );
};

export default About;
