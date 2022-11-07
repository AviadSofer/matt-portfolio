import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Companies from './components/Companies';
import MyStartupTitle from './components/MyStartupTitle';
import StartupProjects from './components/StartupProjects';

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
    </div>
  );
};

export default App;
