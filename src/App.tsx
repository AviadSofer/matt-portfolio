import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <NavBar />
      <Header />
      <About />
    </div>
  );
};

export default App;
