const About: React.FC = () => {
  return (
    <div className='h-screen bg-primary py-36 text-center'>
      <h2 className='mx-auto text-3xl font-bold text-white'>Hi, I’m Matt. Nice to meet you.</h2>
      <p className='mx-auto whitespace-pre-line pt-7 text-xl font-semibold text-white'>
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
