import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              maxime hic voluptatum nesciunt exercitationem! Nisi blanditiis
              dolorum illo vel optio at. Natus voluptates voluptatibus facere!
            </p>
            <button>Contact us</button>
         <div className="image">
             <img src={home1} alt=""/>
         </div>
      </div>
    </div>
  );
};

export default AboutSection;
