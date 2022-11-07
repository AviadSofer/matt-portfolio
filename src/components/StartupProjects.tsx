import projectsCards from '~/static/projectsCards';
import ProjectCard from './ProjectCard';

const StartupProjects: React.FC = () => {
  return (
    <div className='relative top-[-9rem] grid grid-cols-3 grid-rows-3 gap-6 px-[6%]'>
      {projectsCards.map(({ key, imgSrc, alt, title, link, inDevelopment }) => (
        <ProjectCard
          key={key}
          imgSrc={imgSrc}
          alt={alt}
          title={title}
          link={link}
          inDevelopment={inDevelopment}
        />
      ))}
    </div>
  );
};

export default StartupProjects;
