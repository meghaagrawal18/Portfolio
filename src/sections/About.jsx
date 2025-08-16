import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title" style={{ color: "var(--text-primary)" }}>
            About Me
          </h2>
          <p className="section-subtitle" style={{ color: "var(--text-primary)" }}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="about-content">
          <div className="who-am-i-section" >
            <div className="section-header">
              <span className="section-icon">&lt;/&gt;</span>
              <h3 style={{ color: "var(--text-primary)" }}>Who I Am</h3>
            </div>
            <div className="who-am-i-content" >
              <p style={{ color: "var(--text-primary)" }}>
                I am Megha Agrawal, a passionate developer currently pursuing
                Information Science and Engineering at BMS College of
                Engineering. I am deeply committed to solving real-world
                problems through technology and enjoy working on projects that
                blend creativity with technical depth.
              </p>
              <p style={{ color: "var(--text-primary)" }}>
                I have worked on AI-driven systems like CareSync, a healthcare
                platform designed for rural environments, and a machine
                learning-based vehicle recognition and analytics solution. I
                enjoy exploring new technologies, contributing to open-source
                initiatives, and collaborating with communities that push the
                boundaries of what's possible in tech.
              </p>
              <button
                className="github-btn"
                onClick={() =>
                  window.open("https://github.com/meghaagrawal18", "_blank")
                }
              >
                <span className="btn-icon" >&lt;/&gt;</span>
                GitHub Profile
              </button>
            </div>
          </div>

          <div className="about-tabs">
            <div className="tab-content">
              <div className="tab-section">
                <div className="section-header">
                  <span className="section-icon">⚡</span>
                  <h4 style={{ color: "var(--text-primary)" }}>Currently Exploring</h4>
                </div>
                <p className="section-description" style={{ color: "var(--text-primary)" }}>
                  These are the areas I am actively learning and working on:
                </p>
                <ul className="bullet-list" style={{ color: "var(--text-primary)" }}>
                  <li style={{ color: "var(--text-primary)" }}>
                    Developing a machine learning-based vehicle analytics system
                    that detects and tracks vehicle count, speed, and number
                    plates using computer vision
                  </li>
                  <li style={{ color: "var(--text-primary)" }}>
                    Advancing my knowledge in artificial intelligence and
                    machine learning, especially in image processing and NLP
                    applications
                  </li>
                  <li style={{ color: "var(--text-primary)" }}>
                    Understanding system design patterns for building scalable,
                    maintainable applications
                  </li>
                  <li style={{ color: "var(--text-primary)" }}>
                    Building real-time, interactive web applications such as a
                    multiplayer house game and an advanced scientific calculator
                  </li>
                  <li style={{ color: "var(--text-primary)" }}>
                    Participating in hackathons and technical events to test
                    ideas and learn from others
                  </li>
                  <li style={{ color: "var(--text-primary)" }}>
                    Writing technical articles to document and share insights
                    from my projects and learning journey
                  </li>
                </ul>
              </div>

              <div className="tab-section">
                <div className="section-header">
                  <span className="section-icon">💼</span>
                  <h4 style={{ color: "var(--text-primary)" }}>Experience</h4>
                </div>
                <p className="section-description" style={{ color: "var(--text-primary)" }}>
                  Key experiences and achievements that define my journey:
                </p>
                <div className="experience-list" style={{ color: "var(--text-primary)" }}>
                  <div className="experience-item">
                    <h5 style={{ color: "var(--text-primary)" }}>Winner at MEDNXT Hackathon 2025</h5>
                    <p style={{ color: "var(--text-primary)" }}>SwasthyaAI - AI-powered health assistant for rural healthcare delivery</p>
                    <span className="experience-date">2025</span>
                  </div>
                  <div className="experience-item">
                    <h5 style={{ color: "var(--text-primary)" }}>Full Stack Developer</h5>
                    <p style={{ color: "var(--text-primary)" }}>
                      Creator of several full-stack projects including productivity
                      tools and AI-driven applications
                    </p>
                    <span className="experience-date">2023 - Present</span>
                  </div>
                  <div className="experience-item">
                    <h5 style={{ color: "var(--text-primary)" }}>Open Source Contributor</h5>
                    <p style={{ color: "var(--text-primary)" }}>
                      Active contributor to developer communities and technical discussions
                    </p>
                    <span className="experience-date">2022 - Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
