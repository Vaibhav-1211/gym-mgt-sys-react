import './App.css';
import Footer from './components/Footer/footer';
// import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Join from './components/Joins/join';
import Plans from './components/Plans/plans';
import Programs from './components/Programs/programs';
import Reason from './components/Reasons/reason';
import Testimonials from './components/Testimonials/testimonials';

function App() {
  return (

    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>

  );
}

export default App;
