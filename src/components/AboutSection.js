//Import Images
import home1 from "../img/home1.png";
//Import Styles
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
// Animations
import { titleAnim, fade, photoAnim } from "../animation";
//Wave Ribbon
import Wave from "./Wave";
//Router
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Wave />
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>I make your</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>websites</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>to life.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime
          hic voluptatum nesciunt exercitationem! Nisi blanditiis dolorum illo
          vel optio at. Natus voluptates voluptatibus facere!
        </motion.p>
        <Link to="/work">
          <motion.button variants={fade}>My work</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
