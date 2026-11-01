import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { projects } from "@/lib/portfolio";

export default function Projects() {
  return (
    <div className="page inner-page content-wrap">
      <div className="page-topline"><span>04 — PROJECTS</span><span>THINGS THAT LEFT THE NOTEBOOK</span></div>
      <section className="projects-intro">
        <div><p className="eyebrow"><span className="eyebrow-line" /> THE WORK SO FAR</p><h1>Little worlds,<br /><em>made useful.</em></h1></div>
        <p className="projects-intro-note">Three live builds on the board. Three more spots left open for the next good idea.</p>
      </section>
      <div className="projects-countline"><span>PROJECT BOARD <b>06</b></span><span><i className="live-dot" /> 03 LIVE <span className="count-divider">/</span> 03 SAVED FOR LATER</span></div>

      <section className="project-grid" aria-label="Six project slots">
        {projects.map((project) => (
          <article className={`project-card ${project.status === "reserved" ? "is-reserved" : ""}`} key={project.number}>
            <div className={`project-art project-art-${project.color}`}>
              {project.image ? (
                <img src={project.image} alt={`${project.name} project illustration`} loading="lazy" />
              ) : (
                <div className="reserved-art" aria-hidden="true"><span className="reserved-orbit" /><span className="reserved-plus"><Plus size={38} strokeWidth={1} /></span><span className="reserved-spark">✳</span></div>
              )}
              <span className="project-number">{project.number}</span>
              {project.status === "live" ? <span className="project-live-pill"><i /> LIVE</span> : <span className="project-reserved-pill"><Sparkles size={12} /> RESERVED</span>}
            </div>
            <div className="project-card-content">
              <div className="project-card-heading"><h2>{project.name}</h2>{project.href && <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`}><ArrowUpRight size={19} /></a>}</div>
              <p className="project-card-description">{project.description}</p>
              <div className="project-tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-card-footer"><span>{project.date}</span>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">LIVE DEMO <ArrowUpRight size={13} /></a> : <span className="project-future">COMING WHEN IT’S REAL</span>}</div>
            </div>
          </article>
        ))}
      </section>
      <p className="project-date-note">Dates are repository start dates where a matching public repository is available; they are not platform launch dates.</p>
    </div>
  );
}
