import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2026-06-11 at 8.49.19 PM.png";
import projImg2 from "../assets/img/Screenshot 2026-06-11 at 9.50.07 PM.png";
import projImg4 from "../assets/img/Screenshot 2026-06-12 at 6.42.23 PM.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
    },
    {
      title: "Tresume - AI-Powered",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://tresume.ai/landing-page"
    }
  ];
  const project2 = [
    {},
    {
      title: "Asta - Recruitment CRM",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://astacrs.com/"
    }
  ];
  const project3 = [
    {},
    {
      title: "Custom Web Applications",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://astacrs.com/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore some of the projects I've worked on, focusing on recruitment technology and modern web application development. These projects demonstrate my expertise in Angular, REST API integration, responsive UI design, and full-stack development.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>

                        <div className="project-summary mt-5">
                          <span className="summary-tag">KEY CONTRIBUTIONS</span>

                          <h3>Tresume – Recruitment Management Platform</h3>

                          <p className="summary-text">
                            Developed and enhanced an enterprise recruitment platform that streamlined
                            candidate sourcing, screening, document processing, and hiring workflows
                            through responsive interfaces and automated recruitment operations.
                          </p>

                          <div className="contribution-grid">

                            <div className="contribution-card">
                              <h5>Candidate Management</h5>
                              <ul>
                                <li>Built candidate listing modules.</li>
                                <li>Implemented search and filters.</li>
                                <li>Added sorting and pagination.</li>
                                <li>Managed candidate stages and status updates.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Document Workflow</h5>
                              <ul>
                                <li>Developed document checklist modules.</li>
                                <li>Implemented document uploads.</li>
                                <li>Added verification workflows.</li>
                                <li>Managed document status tracking.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Dashboard & Reports</h5>
                              <ul>
                                <li>Created recruiter dashboards.</li>
                                <li>Built summary widgets.</li>
                                <li>Developed reporting views.</li>
                                <li>Displayed hiring metrics.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>API Integration</h5>
                              <ul>
                                <li>Integrated REST APIs.</li>
                                <li>Handled API error scenarios.</li>
                                <li>Managed frontend-backend communication.</li>
                                <li>Validated and mapped data.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>UI Development</h5>
                              <ul>
                                <li>Built reusable Angular components.</li>
                                <li>Implemented Reactive Forms.</li>
                                <li>Used Angular Material and Tailwind CSS.</li>
                                <li>Ensured responsive design.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Production Support</h5>
                              <ul>
                                <li>Investigated production issues.</li>
                                <li>Fixed UI and workflow defects.</li>
                                <li>Implemented enhancements.</li>
                                <li>Maintained application stability.</li>
                              </ul>
                            </div>

                          </div>

                          <div className="tech-stack">
                            <h5>Technologies Used</h5>

                            <div className="tech-badges">
                              <span>Angular</span>
                              <span>TypeScript</span>
                              <span>Angular Material</span>
                              <span>Tailwind CSS</span>
                              <span>REST APIs</span>
                              <span>Node.js</span>
                              <span>SQL</span>
                              <span>Git</span>
                              <span>Postman</span>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>

                        <div className="project-summary mt-5">
                          <span className="summary-tag">KEY CONTRIBUTIONS</span>

                          <h3>ASTA CRS – Corporate Website & Digital Experience Platform</h3>

                          <p className="summary-text">
                            Developed and enhanced a corporate digital platform that showcases
                            ASTA CRS's services, industry expertise, business ecosystem, and career
                            opportunities through a modern and responsive user experience.
                          </p>

                          <div className="contribution-grid">

                            <div className="contribution-card">
                              <h5>UI Development</h5>
                              <ul>
                                <li>Built responsive Angular interfaces.</li>
                                <li>Developed reusable UI components.</li>
                                <li>Implemented modern layouts.</li>
                                <li>Ensured cross-browser compatibility.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Corporate Website Modules</h5>
                              <ul>
                                <li>Designed service showcase sections.</li>
                                <li>Built business overview pages.</li>
                                <li>Developed industry solution modules.</li>
                                <li>Created career information pages.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Navigation & UX</h5>
                              <ul>
                                <li>Implemented smooth scrolling.</li>
                                <li>Enhanced user interactions.</li>
                                <li>Added animations and transitions.</li>
                                <li>Improved overall usability.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Contact & Inquiry</h5>
                              <ul>
                                <li>Integrated inquiry forms.</li>
                                <li>Handled user validations.</li>
                                <li>Connected backend services.</li>
                                <li>Improved lead engagement flow.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Responsive Design</h5>
                              <ul>
                                <li>Optimized desktop layouts.</li>
                                <li>Implemented tablet support.</li>
                                <li>Enhanced mobile experiences.</li>
                                <li>Maintained consistent UI.</li>
                              </ul>
                            </div>

                            <div className="contribution-card">
                              <h5>Production Support</h5>
                              <ul>
                                <li>Resolved production issues.</li>
                                <li>Fixed UI defects.</li>
                                <li>Implemented enhancements.</li>
                                <li>Collaborated with QA teams.</li>
                              </ul>
                            </div>

                          </div>

                          <div className="tech-stack">
                            <h5>Technologies Used</h5>

                            <div className="tech-badges">
                              <span>Angular</span>
                              <span>TypeScript</span>
                              <span>HTML</span>
                              <span>CSS</span>
                              <span>Bootstrap</span>
                              <span>JavaScript</span>
                              <span>REST APIs</span>
                              <span>Git</span>
                              <span>Postman</span>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project3.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                        <div className="service-content">
                          <h2>💻 Need a Website or Web Application?</h2>

                          <p>
                            Looking to build a modern, responsive, and high-performing website
                            for your business or personal brand? I can help transform your ideas
                            into reality.
                          </p>

                          <p>
                            I specialize in developing corporate websites, portfolio websites,
                            recruitment platforms, business applications, and custom web
                            solutions using modern technologies such as React, Angular,
                            TypeScript, and Node.js.
                          </p>

                          <p>
                            Whether you need a new website, enhancements to an existing
                            application, UI improvements, API integrations, or ongoing
                            maintenance and support, feel free to get in touch.
                          </p>

                          <div className="service-highlight">
                            <strong>🚀 Let's Build Something Amazing Together!</strong>
                            <span>
                              Scalable • User-Friendly • Responsive • High Performance
                            </span>
                          </div>
                  
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
