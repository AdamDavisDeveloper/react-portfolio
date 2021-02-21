//Import Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//Framer Motion
import { motion } from "framer-motion";
//Animations
import { pageAnimation } from "../animation";

const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        </motion.div>
    );
};

export default AboutUs;