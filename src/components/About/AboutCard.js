import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Jash Nimesh Dharia Jaliwala</span> from Syracuse

          <p>
 
I am currently pursuing a Master of Science in Applied Data Science at Syracuse University.  
<br />  
I have completed my undergraduate degree in Computer Engineering and have hands-on experience in data science, machine learning, and business analytics. Throughout my academic journey, I've developed a deep understanding of data management, predictive modeling, and analytics tools, and I am passionate about using these skills to drive impactful solutions in various domains.  
<br />  
Professionally, I have gained valuable experience through various roles, including:  
<br />  
- Graduate Technology Analyst Intern at Upstate Medical University  
<br />  
- Graduate Data Science Intern at J. Galt Finance Suite 
<br />  
- Graduate Research Assistant at Syracuse University 
<br />  
- Graduate Student Researcher at NEXIS Student Technology Lab  
<br />  
In addition to my academic and professional pursuits, I am actively involved in community service with Lions Club International, contributing to social initiatives and working to make a positive impact.  
<br />  
Apart from working with data, I enjoy exploring new technologies, solving complex problems, and collaborating with teams to bring innovative ideas to life!  
</p>

          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
          "Data science is not about the data you have, but the questions you ask and the stories you uncover.""{" "}
          </p>
          <footer className="blockquote-footer">Jash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
