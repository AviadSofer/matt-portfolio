import projectsCards from '~/static/projectsCards';
import ProjectCard from './ProjectCard';

const StartupProjects: React.FC = () => {
  return (
    <div className='relative top-[-8rem] grid gap-6 px-[6%] md:grid-cols-2 lg:grid-cols-3'>
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
