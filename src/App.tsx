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
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default App;
