"use client";

import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/Screenshot 2026-06-11 at 8.49.19 PM.png";
import projImg2 from "../assets/img/Screenshot 2026-06-11 at 9.50.07 PM.png";
import projImg4 from "../assets/img/Screenshot 2026-06-12 at 6.42.23 PM.png";
import projImg3 from "../assets/img/Screenshot 2026-08-25 at 11.15.20 PM.png"
import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Tresume - AI-Powered",
      shortDescription: "Recruitment Management Platform",
      description:
        "Developed and enhanced an enterprise recruitment platform that streamlines candidate sourcing, screening, document processing, and hiring workflows through responsive interfaces and automated recruitment operations.",
      imgUrl: projImg1,
      url: "https://tresume.ai/landing-page",
      technologies: [
        "Angular",
        "TypeScript",
        "Angular Material",
        "Tailwind CSS",
        "REST APIs",
        "Node.js",
        "SQL",
        "Git",
        "Postman",
      ],
    },

    {
      id: 2,
      title: "ASTA Group Corporate Website",
      shortDescription: "Corporate Website",
      description:
        "Developed a modern and responsive corporate website for ASTA Group with a focus on clean UI, responsive layouts, animations, theme switching, company brand showcase, and reusable UI components.",
      imgUrl: projImg3,
      url: "https://www.astagroup.net/",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
      ],
    },

    {
      id: 3,
      title: "ASTA CRS - Recruitment CRM",
      shortDescription: "Recruitment CRM",
      description:
        "Developed and enhanced a recruitment CRM platform supporting candidate management, recruitment workflows, responsive user interfaces, REST API integration, and production support.",
      imgUrl: projImg2,
      url: "https://astacrs.com/",
      technologies: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "REST APIs",
        "Git",
        "Postman",
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);

    setTimeout(() => {
      document.getElementById("project-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleBack = () => {
    setSelectedProject(null);

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  {/* =========================
                      PROJECT HEADER
                  ========================== */}

                  <div className="projects-header">
                    <h2>Projects</h2>

                    <p>
                      Explore some of the projects I&apos;ve worked on,
                      focusing on modern web application development,
                      recruitment technology, responsive UI design, and
                      full-stack solutions.
                    </p>
                  </div>

                  {/* =========================
                      TABS
                  ========================== */}

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="projects"
                  >
                    <Nav className="projects-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="projects">
                          Projects
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="freelancing">
                          Freelancing
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* =================================================
                          PROJECTS TAB
                      ================================================= */}

                      <Tab.Pane eventKey="projects">
                        {!selectedProject ? (
                          <>
                            <div className="project-card-grid">
                              {projects.map((project) => (
                                <button
                                  key={project.id}
                                  type="button"
                                  className="project-item"
                                  onClick={() =>
                                    handleProjectClick(project)
                                  }
                                >
                                  <div className="project-image-wrapper">
                                    <img
                                      src={project.imgUrl}
                                      alt={project.title}
                                    />

                                    <div className="project-overlay">
                                      <span>
                                        View Project →
                                      </span>
                                    </div>
                                  </div>

                                  <div className="project-card-info">
                                    <h4>{project.title}</h4>

                                    <p>
                                      {project.shortDescription}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>

                            <div className="project-click-hint">
                              Click on a project to view details
                            </div>
                          </>
                        ) : (
                          /* =========================
                             PROJECT DETAILS
                          ========================== */

                          <div
                            className="project-details"
                            id="project-details"
                          >
                            <Row className="align-items-center">
                              {/* IMAGE */}

                              <Col
                                xs={12}
                                lg={6}
                                className="project-details-image-column"
                              >
                                <div className="project-main-image">
                                  <img
                                    src={selectedProject.imgUrl}
                                    alt={selectedProject.title}
                                  />
                                </div>
                              </Col>

                              {/* DETAILS */}

                              <Col
                                xs={12}
                                lg={6}
                                className="project-details-info-column"
                              >
                                <div className="project-details-content">
                                  <span className="project-label">
                                    PROJECT DETAILS
                                  </span>

                                  <h3>
                                    {selectedProject.title}
                                  </h3>

                                  <p className="project-description">
                                    {selectedProject.description}
                                  </p>

                                  {/* TECHNOLOGIES */}

                                  <div className="technology-section">
                                    <h5>
                                      Technologies Used
                                    </h5>

                                    <div className="technology-list">
                                      {selectedProject.technologies.map(
                                        (technology) => (
                                          <span key={technology}>
                                            {technology}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>

                                  {/* ACTIONS */}

                                  <div className="project-actions">
                                    <a
                                      href={selectedProject.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="visit-project"
                                    >
                                      Visit Project →
                                    </a>

                                    <button
                                      type="button"
                                      className="back-projects"
                                      onClick={handleBack}
                                    >
                                      ← Back to Projects
                                    </button>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        )}
                      </Tab.Pane>

                      {/* =================================================
                          FREELANCING TAB
                      ================================================= */}

                      <Tab.Pane eventKey="freelancing">
                        <div className="freelancing-content">
                          <span className="project-label">
                            FREELANCING
                          </span>

                          <h2>
                            Need a Website or Web Application?
                          </h2>

                          <p>
                            Looking to build a modern, responsive, and
                            high-performing website for your business
                            or personal brand? I can help transform
                            your ideas into reality.
                          </p>

                          <p>
                            I specialize in developing corporate
                            websites, portfolio websites, recruitment
                            platforms, business applications, and
                            custom web solutions using modern
                            technologies such as React, Next.js,
                            Angular, TypeScript, and Node.js.
                          </p>

                          <p>
                            Whether you need a new website,
                            enhancements to an existing application,
                            UI improvements, API integrations, or
                            ongoing maintenance and support, feel free
                            to get in touch.
                          </p>

                          {/* SERVICES */}

                          <div className="freelancing-grid">
                            <div className="freelancing-card">
                              <h5>Website Development</h5>
                              <p>
                                Modern and responsive websites for
                                businesses, portfolios, and personal
                                brands.
                              </p>
                            </div>

                            <div className="freelancing-card">
                              <h5>Web Applications</h5>
                              <p>
                                Custom web applications with reusable
                                components and scalable architecture.
                              </p>
                            </div>

                            <div className="freelancing-card">
                              <h5>UI Development</h5>
                              <p>
                                Responsive and user-friendly
                                interfaces using modern frontend
                                technologies.
                              </p>
                            </div>

                            <div className="freelancing-card">
                              <h5>API Integration</h5>
                              <p>
                                REST API integration and seamless
                                frontend-backend communication.
                              </p>
                            </div>

                            <div className="freelancing-card">
                              <h5>UI Enhancement</h5>
                              <p>
                                Improvements to existing websites and
                                applications including responsive
                                design, animations, and usability.
                              </p>
                            </div>

                            <div className="freelancing-card">
                              <h5>Maintenance & Support</h5>
                              <p>
                                Bug fixes, enhancements, performance
                                improvements, and ongoing support.
                              </p>
                            </div>
                          </div>

                          {/* TECHNOLOGIES */}

                          <div className="freelancing-tech">
                            <h5>Technologies</h5>

                            <div className="technology-list">
                              <span>React.js</span>
                              <span>Next.js</span>
                              <span>Angular</span>
                              <span>TypeScript</span>
                              <span>JavaScript</span>
                              <span>Tailwind CSS</span>
                              <span>HTML</span>
                              <span>CSS</span>
                              <span>Node.js</span>
                              <span>REST APIs</span>
                              <span>SQL</span>
                              <span>Git</span>
                              <span>GitHub</span>
                              <span>CI/CD</span>
                              <span>Devops</span>
                              <span>Azure</span>
                            </div>
                          </div>

                          {/* CTA */}

                          <div className="freelancing-cta">
                            <strong>
                              🚀 Let&apos;s Build Something Amazing
                              Together!
                            </strong>

                            <span>
                              Scalable • User-Friendly • Responsive •
                              High Performance
                            </span>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};