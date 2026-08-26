import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      slidesToSlide: 1,
    },

    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Experienced in developing modern web applications using Angular, TypeScript, and JavaScript. Proficient in building responsive user interfaces with HTML, CSS, Angular Material, and Tailwind CSS. Skilled in REST API integration, Reactive Forms, and creating reusable components. Familiar with Node.js, SQL, Git, Postman, and collaborating with cross-functional teams to deliver high-quality solutions.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1600}
                transitionDuration={800}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="HTML" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="CSS" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Angular" />
                  <h5>Angular</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="TypeScript" />
                  <h5>TypeScript</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Express.js" />
                  <h5>Express.js</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Next.js" />
                  <h5>Next.js</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Microsoft SQL Server" />
                  <h5>Microsoft SQL Server</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="REST API" />
                  <h5>REST API</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
