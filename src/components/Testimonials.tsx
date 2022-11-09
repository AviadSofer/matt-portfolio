import { useState } from 'react';
import testimonials from '~/static/testimonials';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='py-32 text-center'>
      <h1 className='text-3xl font-semibold'>Testimonials</h1>
      <h2 className='py-7 text-xl font-semibold'>
        People I’ve worked with have said some nice things...
      </h2>
      <div className='overflow-hidden whitespace-nowrap'>
        {testimonials.map(({ key, profileSrc, alt, testimonial, name, jobTitle }) => (
          <div
            className={`inline-block py-14 translate-x-[-${index * 100}%] duration-700 ease-linear`}
            key={key}
          >
            <img src={profileSrc} alt={alt} className='mx-auto w-24 rounded-full' />
            <p className='mx-80 whitespace-normal py-12 text-2xl font-normal'>{testimonial}</p>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <h3 className='text-base font-normal'>{jobTitle}</h3>
          </div>
        ))}
      </div>
      <div>
        {testimonials.map(({ key }) => (
          <div
            key={key}
            className={`mx-2 inline-block h-4 w-4 cursor-pointer rounded-full ${
              index === key - 1 ? 'bg-primary' : 'border-2 border-lightGrey'
            }`}
            onClick={() => {
              setIndex(key - 1);
            }}
            aria-hidden='true'
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
