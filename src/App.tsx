import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Companies from './components/Companies';
import MyStartupTitle from './components/MyStartupTitle';
import StartupProjects from './components/StartupProjects';
import CollaboratingWithMe from './components/CollaboratingWithMe';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <RecentWork />
      <Companies />
      <MyStartupTitle />
      <StartupProjects />
      <CollaboratingWithMe />
      <Testimonials />
    </div>
  );
};

export default App;
