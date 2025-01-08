import React from 'react';
import skills from "../assets/skills.json";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <div className="heading">
          <h2 className="title">My Skills</h2>
          <hr class="wide"></hr>
          <span className="alternative">what i know</span>
        </div>
        <div className="skills-content">
          <div className="left">
            <div className="text">My Creative Skills And Experiences.</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam porro cupiditate suscipit cumque accusamus harum omnis perferendis velit quibusdam temporibus? Dolore ad dicta itaque laudantium? Praesentium natus accusamus voluptatem voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, error dolorum magni blanditiis a sequi beatae pariatur reprehenderit quia molestiae? Optio molestias tempore nisi voluptatum ullam dolore deleniti tempora doloremque.</p>
            <a href="#details">Read More</a>

          </div>
          <div className="right">
            {skills.map((skill, index) => (
              <div className="bars" key={index}>
                <div className="info">
                  <span>{skill.skill}</span>
                  <span>{skill.percent}%</span>
                </div>
                {/* Apply percentage width dynamically */}
                <div
                  className="line"
                  style={{
                    position: "relative",
                    height: "7.5px",
                    backgroundColor: "#ddd",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      content: '""',
                      position: "absolute",
                      height: "100%",
                      left: "0",
                      top: "0",
                      backgroundColor: "crimson", // Adjust color as needed
                      width: `${skill.percent}%`, // Dynamic width from JSON
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}