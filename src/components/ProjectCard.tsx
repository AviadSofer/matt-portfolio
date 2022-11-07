import { GoLinkExternal } from 'react-icons/go';
import { VscSourceControl } from 'react-icons/vsc';

interface Props {
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

const ProjectCard: React.FC<Props> = ({ imgSrc, alt, title, link, inDevelopment }) => {
  return (
    <div className='rounded-xl border border-lightGrey bg-white px-10 py-16 text-center shadow-sm'>
      <img src={imgSrc} alt={alt} className='mx-auto w-32' />
      <h2 className='py-8 text-base font-medium'>{title}</h2>
      <div
        className={`inline-flex justify-center gap-1 rounded-md px-3 py-1 font-medium ${
          inDevelopment ? 'bg-gray-200 text-font' : 'bg-blue-50 text-blue-600'
        }`}
      >
        {inDevelopment ? (
          <VscSourceControl className='my-auto' />
        ) : (
          <GoLinkExternal className='my-auto' />
        )}
        <span>{link}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
