"use client";

import { useState } from "react";

type Project = {
  id: number;
  category: string;
  name: string;
  shortDescription: string;
  status: string;
  problem: string;
  solution: string;
  building: string;
  technologies: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    category: "AI AUDIO PLATFORM",
    name: "MUKIIQ",
    shortDescription:
      "AI-powered audio stem separation for creators and music enthusiasts.",
    status: "ACTIVE PROJECT",
    problem:
      "Music creators often need vocals, instrumentals, drums, and other audio components separately. Traditional editing workflows can be complicated, expensive, and time-consuming.",
    solution:
      "MUKIIQ uses AI-powered stem separation to make extracting different audio components simpler and more accessible.",
    building:
      "A platform where users can upload audio, process it using an AI separation engine, and access separated stems through a clean and simple interface.",
    technologies: [
      "Next.js",
      "React",
      "Python",
      "AI",
      "Audio Processing",
    ],
    link: "https://mukiiq.vercel.app",
  },
  {
    id: 2,
    category: "INTELLIGENT ENERGY",
    name: "GRIDBEE",
    shortDescription:
      "Exploring smarter systems for energy monitoring and intelligent management.",
    status: "IN DEVELOPMENT",
    problem:
      "Energy systems generate large amounts of information, but users often lack simple tools to understand usage, identify inefficiencies, and make better decisions.",
    solution:
      "GRIDBEE explores intelligent monitoring and data-driven insights to make energy systems easier to understand and manage.",
    building:
      "An intelligent energy platform concept focused on monitoring, insights, system intelligence, and practical decision-making.",
    technologies: [
      "Python",
      "Data Analysis",
      "AI",
      "Energy Systems",
    ],
  },
  {
    id: 3,
    category: "PERSONAL GROWTH",
    name: "MOMENTUM AI",
    shortDescription:
      "AI-powered guidance designed to help people build momentum in everyday life.",
    status: "CONCEPT & DEVELOPMENT",
    problem:
      "People often know what they want to achieve but struggle with consistency, motivation, direction, and knowing what step to take next.",
    solution:
      "MOMENTUM AI explores personalized AI guidance that can support users across study, work, fitness, goals, and personal challenges.",
    building:
      "A motivation and guidance platform that helps users reflect, regain momentum, and take practical next steps.",
    technologies: [
      "AI",
      "Python",
      "Personalization",
      "Product Design",
    ],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* NAVIGATION */}

      <nav className="navbar">
        <button
          className="logo"
          onClick={() => scrollTo("home")}
        >
          MUKESH<span>.</span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </div>

        <a
          href="https://github.com/mukeshbn2007-hue"
          target="_blank"
          className="github-button"
        >
          GitHub ↗
        </a>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            AI DEVELOPER · PRODUCT BUILDER
          </p>

          <h1>
            Building ideas
            <br />
            into <span>products.</span>
          </h1>

          <p className="hero-description">
            I'm Mukesh B N, a Computer Science student exploring
            AI, technology and product development by turning
            real problems into practical solutions.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => scrollTo("projects")}
            >
              View My Work
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollTo("about")}
            >
              About Me
            </button>
          </div>

        </div>

        <div className="hero-side">
          <div className="side-card">
            <span>01</span>
            <p>Explore</p>
            <strong>Problems</strong>
          </div>

          <div className="side-card">
            <span>02</span>
            <p>Build</p>
            <strong>Solutions</strong>
          </div>

          <div className="side-card">
            <span>03</span>
            <p>Learn</p>
            <strong>By Creating</strong>
          </div>
        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="section">

        <div className="section-header">

          <div>
            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              What I'm building.
            </h2>
          </div>

          <p className="section-description">
            Every project begins with a question or problem.
            I explore the challenge, design a solution, and build
            something practical around it.
          </p>

        </div>

        <div className="project-grid">

          {projects.map((project, index) => (
            <button
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >

              <div className="project-top">
                <span>
                  0{index + 1}
                </span>

                <span className="arrow">
                  ↗
                </span>
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.name}
                </h3>

                <p className="project-description">
                  {project.shortDescription}
                </p>

              </div>

              <div className="project-bottom">
                <span>
                  View project details
                </span>

                <span>→</span>
              </div>

            </button>
          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about-section">

        <div className="about-left">

          <p className="eyebrow">
            ABOUT ME
          </p>

          <h2>
            Curious by nature.
            <br />
            <span>Driven by building.</span>
          </h2>

        </div>

        <div className="about-right">

          <p className="about-main-text">
            I'm Mukesh B N, a Computer Science student who enjoys
            exploring how technology can solve real problems.
            I'm currently building my skills around AI, Python,
            product development and software engineering.
          </p>

          <p>
            I don't want to just learn technology for the sake of
            learning it. I want to understand problems, experiment
            with ideas, build products and continuously improve
            through the process.
          </p>

          <div className="about-grid">

            <div>
              <span>MY AIM</span>

              <p>
                Build meaningful technology products and grow into
                an AI and product-focused developer capable of
                creating solutions that people can actually use.
              </p>
            </div>

            <div>
              <span>MY PERSONALITY</span>

              <p>
                Curious, ambitious and hands-on. I enjoy learning
                through experimentation, asking questions and
                turning ideas into something real.
              </p>
            </div>

            <div>
              <span>MY CAREER</span>

              <p>
                I'm exploring AI, Machine Learning, Python and
                product development while building a portfolio of
                real projects and working toward a career in
                technology.
              </p>
            </div>

            <div>
              <span>MY MINDSET</span>

              <p>
                Start small, learn continuously, build consistently
                and improve with every project.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* JOURNEY */}

      <section className="journey-section">

        <p className="eyebrow">
          CURRENT DIRECTION
        </p>

        <div className="journey-grid">

          <div>
            <span>01</span>

            <h3>
              AI & Technology
            </h3>

            <p>
              Exploring artificial intelligence and learning how
              intelligent systems can solve practical problems.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>
              Building Products
            </h3>

            <p>
              Moving beyond ideas by creating projects, testing
              concepts and improving them through experience.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>
              Growing MUKIIQ
            </h3>

            <p>
              Beginning a personal technology brand around
              experimentation, AI projects and useful digital
              products.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <p className="eyebrow">
          LET'S CONNECT
        </p>

        <h2>
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h2>

        <p>
          I'm always interested in technology, ideas,
          collaborations and conversations about building
          something useful.
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/mukeshbn2007-hue"
            target="_blank"
          >
            GitHub ↗
          </a>

          <a href="mailto:your-email@example.com">
            Email ↗
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div>
          MUKESH<span>.</span>
        </div>

        <p>
          Exploring. Building. Improving.
        </p>

        <p>
          © 2026 Mukesh B N
        </p>

      </footer>

      {/* PROJECT MODAL */}

      {selectedProject && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="modal-header">

              <div>
                <p className="eyebrow">
                  {selectedProject.category}
                </p>

                <h2>
                  {selectedProject.name}
                </h2>
              </div>

              <span className="status">
                {selectedProject.status}
              </span>

            </div>

            <div className="project-details">

              <div className="detail-block">

                <span>
                  THE PROBLEM
                </span>

                <p>
                  {selectedProject.problem}
                </p>

              </div>

              <div className="detail-block">

                <span>
                  THE SOLUTION
                </span>

                <p>
                  {selectedProject.solution}
                </p>

              </div>

              <div className="detail-block">

                <span>
                  WHAT I'M BUILDING
                </span>

                <p>
                  {selectedProject.building}
                </p>

              </div>

            </div>

            <div className="technology-section">

              <span>
                TECHNOLOGIES & AREAS
              </span>

              <div className="tech-list">

                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {selectedProject.link && (

              <a
                href={selectedProject.link}
                target="_blank"
                className="visit-project"
              >
                Visit Live Project ↗
              </a>

            )}

          </div>

        </div>

      )}

    </main>
  );
}