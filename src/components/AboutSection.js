//Import Images
import home1 from '../img/home1.png';
//Import Styles
import {About, Description, Image, Hide} from '../styles';
//Framer Motion 
import {motion} from 'framer-motion';
// Animations
import { titleAnim, fade, photoAnim } from "../animation";
//Wave Ribbon
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim} >We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maxime hic voluptatum nesciunt exercitationem! Nisi blanditiis
              dolorum illo vel optio at. Natus voluptates voluptatibus facere!
            </motion.p>
            <motion.button variants={fade}>Contact us</motion.button>
        </Description>
         <Image>
             <motion.img variants={photoAnim} src={home1} alt=""/>
         </Image>
         <Wave />
    </About>
  );
};

export default AboutSection;
