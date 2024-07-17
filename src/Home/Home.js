import '../App.css';
import Hero from '../Hero/Hero';
import FeaturesAndAbout from '../FeaturesAndAbout/FeaturesAndAbout';
import OurFreeServices from '../OurFreeServices/OurFreeServices';
import ProfessionalExperts from '../ProfessionalExperts/ProfessionalExperts';
import ExcellentServices from '../ExcellentServices/ExcellentServices';
import Testimonials from '../Testimonials/Testimonials';

function App() {
 
  return (
    <div className="App">
      <Hero />
      <FeaturesAndAbout />
      <OurFreeServices />
      <ProfessionalExperts />
      <ExcellentServices />
      <Testimonials />
      
      
    </div>
  );
}

export default App;