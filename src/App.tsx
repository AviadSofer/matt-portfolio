import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Companies from './components/Companies';

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <RecentWork />
      <Companies />
    </div>
  );
};

export default App;
