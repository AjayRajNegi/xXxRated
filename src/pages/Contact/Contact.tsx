import FuzzyOverlayExample from "../../components/ContactComponents/FuzzyOverlay/FuzzyOverlay";
import {
  Footer,
  Navbar,
  Navigation,
  ContactMain,
  ClipPathLinks,
} from "../../components/Index";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <FuzzyOverlayExample />
      <ContactMain />
      <div className="bg-white">
        <ClipPathLinks />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
