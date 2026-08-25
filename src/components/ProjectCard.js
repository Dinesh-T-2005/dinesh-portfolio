import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  onClick,
}) => {
  return (
    <Col xs={12} sm={6} md={4} className="project-grid-column">
      <button
        type="button"
        className="project-clickable"
        onClick={onClick}
      >
        <div className="project-image-wrapper">
          <img
            src={imgUrl}
            alt={title}
            className="project-card-image"
          />

          <div className="project-overlay">
            <span>View Details</span>
          </div>
        </div>

        <div className="project-card-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </button>
    </Col>
  );
};