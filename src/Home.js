import './App.css';
import Hero from './Hero';
import FeaturesAndAbout from './FeaturesAndAbout';
import OurFreeServices from './OurFreeServices';
import ProfessionalExperts from './ProfessionalExperts';
import ExcellentServices from './ExcellentServices';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
 
  return (
    <div className="App">
      <Hero />
      <FeaturesAndAbout />
      <OurFreeServices />
      <ProfessionalExperts />
      <ExcellentServices />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;