import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3 className="main-title wow" data-splitting>
                  My mission is develop the best Websites around.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Yasiru Wickramasinghe, a software engineer from Sri Lanka, Moratuwa. I have rich experience in web development and software engineering, and I am skilled in React, Node.js, and MySQL. I look forward to discussing how I can contribute to your projects.
              </p>
              <a href="/Yasiru_Wickramasinghe.pdf" className="simple-btn mt-40" target="_blank" rel="noopener noreferrer">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">Front-End</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Back-End</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Databases</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
