//Framer Motion
import { motion } from "framer-motion";
//Animations
import { pageAnimation, titleAnim } from "../animation";
// Styled Components
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2>Get in touch.</motion.h2>
        </Hide>
      </Title>
    </ContactStyle>
  );
};

//Styles
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000000;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ContactUs;
