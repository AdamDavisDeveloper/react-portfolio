//Import Images
import home1 from '../img/home1.png';
//Import Styled
//import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
