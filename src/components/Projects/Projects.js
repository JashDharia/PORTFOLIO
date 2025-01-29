import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import deepfake from "../../Assets/deepfake.png";
import datawh from "../../Assets/datawh.png";
import energy from "../../Assets/energy.png";
import recidivism from "../../Assets/recidivism.png";
import ecg from "../../Assets/ecg.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepfake}
              isBlog={false}
              title="Counteracting Misinformation by AI using Neural Networks."
              description="Built a deepfake detection model with CNNs, AlexNet, and OpenCV for face detection, preprocessing 10,000 real and 6,900 fake images, gaining 98% training and 84.6% test accuracy for real-time content moderation"
              ghLink="https://github.com/JashDharia/DeepFake-detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datawh}
              isBlog={false}
              title="
                Multi-Domain Enterprise Data Warehouse Using Snowflake and DBT"
              description="Defined data pipelines with SQL, Snowflake, and dbt to integrate data from 4 business units, deployed Power BI across domains to monitor KPIs, and improved problem-solving and customer targeting by 20%"
              ghLink="https://github.com/JashDharia/Multi-domain-enterprise-data-warehouse"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energy}
              isBlog={false}
              title="
South Carolina Energy Analysis"
              description="Led a team to address energy challenges for 5,000 homes in North and South Carolina, developing two regression models with 77.8% and 99% accuracy to reduce peak energy demand.Utilized R and Shiny for data preparation, cleaning, and visualization, strengthening grid stability and sustainability by identifying key energy consumption drivers."
              ghLink="https://github.com/JashDharia/South-Carolina-Energy-Analysis"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recidivism}
              isBlog={false}
              title="Predicting Recidivism Using Machine Learning"
              description="Collaborated on the Predicting Recidivism Using Machine Learning project as part of my Big Data Analytics course.
Utilized Apache Spark for preprocessing and achieved a 74.6% accuracy with XGBoost for predicting recidivism"
             ghLink="https://github.com/JashDharia/Big-Data-Analytic-Project"
        
            />
          </Col>
          


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
