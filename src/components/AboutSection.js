//Import Images
import home1 from '../img/home1.png';
//Import Styles
import {About, Description, Image, Hide} from '../styles';
//Framer Motion 
import {motion} from 'framer-motion';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maxime hic voluptatum nesciunt exercitationem! Nisi blanditiis
              dolorum illo vel optio at. Natus voluptates voluptatibus facere!
            </p>
            <button>Contact us</button>
        </Description>
         <Image>
             <img src={home1} alt=""/>
         </Image>
    </About>
  );
};

export default AboutSection;
