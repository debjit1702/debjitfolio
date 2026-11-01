import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Career() {
  return (
    <div className="page inner-page content-wrap">
      <div className="page-topline"><span>03 — CAREER</span><span>LEARNING, THEN DOING</span></div>
      <section className="career-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> THE THROUGH-LINE</p>
        <h1>Build a little.<br /><em>Learn a lot.</em></h1>
        <p className="career-intro-copy">A student’s timeline so far: good people, hands-on learning, and a growing pile of tabs about the web.</p>
      </section>

      <section className="timeline" aria-label="Education and work experience">
        <div className="timeline-label"><GraduationCap size={17} /><span>EDUCATION</span><span className="timeline-rule" /></div>
        <article className="timeline-card education-card">
          <div className="college-logo-frame">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Techno_india_logo.jpg?width=600"
              alt="Techno India logo, supplied as the college logo reference"
              loading="lazy"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
            <span className="college-logo-fallback" aria-hidden="true">NSEC</span>
          </div>
          <div className="timeline-card-copy">
            <div className="timeline-overline"><span>CLASS OF 2027</span><span className="status-pill">IN PROGRESS</span></div>
            <h2>Netaji Subhash<br />Engineering College</h2>
            <p className="degree-line">B.Tech · Computer Science & Engineering</p>
            <p className="timeline-description">Learning the foundations behind the software I like to build — algorithms, systems, and how to make good ideas hold up under the hood.</p>
            <div className="timeline-meta"><span><MapPin size={14} /> Kolkata, West Bengal</span><a href="https://commons.wikimedia.org/wiki/File:Techno_india_logo.jpg" target="_blank" rel="noreferrer">College logo reference <ArrowUpRight size={13} /></a></div>
          </div>
          <span className="timeline-card-index">01</span>
        </article>

        <div className="timeline-label experience-label"><BriefcaseBusiness size={16} /><span>EXPERIENCE</span><span className="timeline-rule" /></div>
        <article className="timeline-card experience-card">
          <div className="company-stamp" aria-hidden="true"><span>MS</span><i>✳</i></div>
          <div className="timeline-card-copy">
            <div className="timeline-overline"><span>JUL 2024 — OCT 2024</span><span className="status-pill status-past">INTERNSHIP</span></div>
            <h2>Maribus Solar</h2>
            <p className="degree-line">IT Intern</p>
            <p className="timeline-description">Four months learning from the inside of an IT team and getting hands-on experience in a working environment.</p>
            <div className="timeline-meta"><span><MapPin size={14} /> IIT Kharagpur, West Bengal</span><span>4 MONTHS</span></div>
          </div>
          <span className="timeline-card-index">02</span>
        </article>
      </section>

      <div className="career-footnote"><span className="note-spark">✳</span><p>Still early in the story — I’m keen to keep learning by doing.</p><Link href="/projects" className="text-link">See some work <ArrowUpRight size={15} /></Link></div>
    </div>
  );
}
