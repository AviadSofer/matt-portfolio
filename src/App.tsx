import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Header />
      <About />
      <Skills />
    </div>
  );
};

export default App;
