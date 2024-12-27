import React from 'react';
import './projects.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Projects = () => {
  return (
    <section id="projects">
      <h5>Explore My</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        {/* Personal Finance Tracker */}
        <div>
          <h3>Personal Finance Tracker</h3>
          <div className="projects_content">
            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Features:Developed a web-based finance management application with real-time data visualization for tracking income, expenses, and budgeting.</h4>
                {/* <p>
                  Developed a web-based finance management application with real-time data visualization for tracking income, expenses, and budgeting.
                </p> */}
              </div>
            </article>

            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Backend Development: Utilized Node.js and Express to build the backend, leveraging a RESTful API for efficient data communication and integrating MongoDB for secure, scalable data storage.</h4>
                {/* <p>
                  Utilized Node.js and Express to build the backend, leveraging a RESTful API for efficient data communication and integrating MongoDB for secure, scalable data storage.
                </p> */}
              </div>
            </article>

            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Frontend Development: Designed an interactive frontend using React and TypeScript, optimized with Vite for improved performance and user experience.</h4>
                {/* <p>
                  Designed an interactive frontend using React and TypeScript, optimized with Vite for improved performance and user experience.
                </p> */}
              </div>
            </article>
          </div>
        </div>

        {/* Real-time Multiplayer Curling Game */}
        <div>
          <h3>Real-time Multiplayer Curling Game</h3>
          <div className="projects_content">
            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Collaboration</h4>
                <p>
                  Collaborated closely with a team of developers, utilizing Git and GitHub for version control to ensure smooth integration of individual contributions.
                </p>
              </div>
            </article>

            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Game Development</h4>
                <p>
                  Developed a dynamic real-time multiplayer curling game with Node.js, enabling seamless head-to-head gameplay using WebSocket.
                </p>
              </div>
            </article>

            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Testing & Compatibility</h4>
                <p>
                  Conducted thorough unit and integration testing, ensuring cross-browser compatibility and a bug-free user experience.
                </p>
              </div>
            </article>

            <article className="projects_details">
              <BsPatchCheckFill className="projects_details-icon" />
              <div>
                <h4>Project Management</h4>
                <p>
                  Managed project timelines by breaking down tasks into milestones, ensuring efficient progress through daily check-ins and milestone reviews.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
