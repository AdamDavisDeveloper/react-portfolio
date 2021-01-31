//Import Images
import home1 from '../img/home1.png';
//Import Styled
import styled from 'styled-components';

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

//Styled Components
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }

`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
