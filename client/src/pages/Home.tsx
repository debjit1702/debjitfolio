import { ArrowRight, ArrowUpRight, Braces, BriefcaseBusiness, Code2, ExternalLink, MapPin, Sparkles } from "lucide-react";
import { FaAws, FaBrain, FaCss3Alt, FaDatabase, FaFileExcel, FaJava, FaMagnifyingGlass, FaRobot } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SiCplusplus, SiDocker, SiDrizzle, SiGit, SiGithub, SiGnubash, SiHtml5, SiHuggingface, SiJavascript, SiLangchain, SiLinux, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiReact, SiStreamlit } from "react-icons/si";
import { Link } from "wouter";
import { Marquee } from "@/components/Marquee";
import { platforms, profile, projects } from "@/lib/portfolio";

const pastExperience = {
  role: "IT Intern",
  company: "Maribus Solar",
  dates: "July 2024 – October 2024",
  location: "IIT Kharagpur, West Bengal",
  workMode: "Onsite",
};

const currentExperience = {
  role: "CEO & Founding Engineer",
  company: "Blinkpharm",
  since: "September 2026",
};

type StackLogo = { icon: IconType; color: string };
type Technology = { name: string; logos: StackLogo[] };
const logo = (icon: IconType, color: string): StackLogo => ({ icon, color });

const techStack: Technology[] = [
  { name: "C++", logos: [logo(SiCplusplus, "#00599C")] },
  { name: "JavaScript", logos: [logo(SiJavascript, "#D6B800")] },
  { name: "Python", logos: [logo(SiPython, "#3776AB")] },
  { name: "Java", logos: [logo(FaJava, "#E76F00")] },
  { name: "Git / GitHub", logos: [logo(SiGit, "#F05032"), logo(SiGithub, "#24292F")] },
  { name: "PL/SQL", logos: [logo(FaDatabase, "#C74634")] },
  { name: "Bash", logos: [logo(SiGnubash, "#4EAA25")] },
  { name: "Next.js", logos: [logo(SiNextdotjs, "#101010")] },
  { name: "React.js", logos: [logo(SiReact, "#149ECA")] },
  { name: "Node.js", logos: [logo(SiNodedotjs, "#5FA04E")] },
  { name: "Drizzle ORM", logos: [logo(SiDrizzle, "#A2C945")] },
  { name: "Prisma", logos: [logo(SiPrisma, "#2D3748")] },
  { name: "Linux", logos: [logo(SiLinux, "#C99800")] },
  { name: "LLMs", logos: [logo(FaBrain, "#8B5CF6")] },
  { name: "LangChain", logos: [logo(SiLangchain, "#1C3C3C")] },
  { name: "Hugging Face", logos: [logo(SiHuggingface, "#E4A800")] },
  { name: "Streamlit", logos: [logo(SiStreamlit, "#D93838")] },
  { name: "HTML5", logos: [logo(SiHtml5, "#E34F26")] },
  { name: "CSS3", logos: [logo(FaCss3Alt, "#1572B6")] },
  { name: "AWS", logos: [logo(FaAws, "#E98900")] },
  { name: "Docker", logos: [logo(SiDocker, "#2496ED")] },
  { name: "RAG", logos: [logo(FaMagnifyingGlass, "#7C58C4")] },
  { name: "Agentic AI", logos: [logo(FaRobot, "#ED4E3D")] },
  { name: "MS Excel", logos: [logo(FaFileExcel, "#217346")] },
];
const techStackRows = [techStack.slice(0, 12), techStack.slice(12)];

const activityPattern = Array.from({ length: 84 }, (_, index) => {
  const wave = (index * 17 + Math.floor(index / 7) * 11) % 23;
  if (index % 13 === 0 || wave < 7) return 0;
  if (wave < 13) return 1;
  if (wave < 19) return 2;
  return 3;
});

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="page page-home">
      <section className="home-hero content-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> FULLSTACK ENGINEER <span className="eyebrow-dot">·</span> KOLKATA, INDIA</div>
          <div className="hero-intro-row">
            <div className="avatar-frame">
              <img src={profile.avatar} alt="Debjit Biswas profile picture" className="profile-avatar" />
              <span className="avatar-status" aria-label="Building and learning" />
            </div>
            <span className="avatar-caption">A little bit of<br />code, a lot of curiosity.</span>
          </div>
          <h1 id="hero-title">Debjit<br /><span className="name-last">Biswas<span className="title-period">.</span></span></h1>
          <div className="role-row"><span className="role-chip">{profile.role}</span><span className="role-note">I make the useful internet stuff.</span></div>
          <p className="hero-description">From a half-formed idea to a clean, working product — I like being around for the whole build.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">See what I’ve shipped <ArrowRight size={17} /></Link>
            <Link href="/about" className="button-quiet">A little about me <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-location"><span className="location-pin" aria-hidden="true">✳</span> Based in Kolkata, West Bengal <span className="location-slash">/</span> open to good problems</div>
        </div>

        <aside className="experience-bento-column" aria-labelledby="experience-bento-title">
          <div className="experience-bento-heading">
            <span className="section-kicker">02 — EXPERIENCE</span>
            <span className="bento-heading-note">CURRENT + PAST</span>
          </div>
          <div className="experience-bento-grid">
            <div className="experience-bento-card bento-feature">
              <div className="bento-feature-top"><span>CURRENT ROLE / 01</span><span className="bento-current-indicator" aria-label="Current role" /></div>
              <div className="bento-feature-center">
                <div className="bento-current-role">
                  <span className="bento-current-company">{currentExperience.company}</span>
                  <h2 className="bento-current-role-title" id="experience-bento-title">{currentExperience.role}</h2>
                </div>
              </div>
              <div className="bento-feature-bottom"><span>SINCE {currentExperience.since.toUpperCase()}</span><span>CURRENT</span></div>
            </div>
            <article className="experience-bento-card bento-role-card" aria-label="Past internship at Maribus Solar">
              <div className="bento-role-top"><span>PAST EXPERIENCE</span><BriefcaseBusiness size={16} strokeWidth={1.6} /></div>
              <div className="bento-role-main"><span>{pastExperience.role}</span><h3>{pastExperience.company}</h3></div>
              <div className="bento-role-meta">
                <span>{pastExperience.dates}</span>
                <span><MapPin size={12} /> {pastExperience.workMode} · {pastExperience.location}</span>
              </div>
            </article>
            <section className="experience-bento-card bento-techstack" aria-labelledby="tech-stack-title">
              <div className="bento-techstack-copy">
                <span className="bento-stack-kicker">STACK / IN MOTION</span>
                <h3 id="tech-stack-title">Tools I build with<span>.</span></h3>
                <span className="bento-stack-count">{techStack.length} TECHNOLOGIES</span>
              </div>
              <div className="bento-techstack-tracks" aria-labelledby="tech-stack-title">
                {techStackRows.map((row, rowIndex) => (
                  <Marquee
                    className={`tech-stack-marquee tech-stack-marquee-${rowIndex + 1}`}
                    key={rowIndex}
                    label={rowIndex === 0 ? "Programming languages, developer tools and frameworks in Debjit's stack." : "Infrastructure, AI and data tools in Debjit's stack."}
                    reverse={rowIndex === 1}
                  >
                    <ul className="tech-float-list">
                      {row.map((technology) => (
                        <li className="tech-float-item" key={technology.name}>
                          <span className="tech-logo-mark" aria-hidden="true">
                            {technology.logos.map(({ icon: Icon, color }, logoIndex) => (
                              <Icon key={`${technology.name}-${logoIndex}`} size={13} style={{ color }} aria-hidden="true" />
                            ))}
                          </span>
                          <span>{technology.name}</span>
                        </li>
                      ))}
                    </ul>
                  </Marquee>
                ))}
              </div>
            </section>
          </div>
        </aside>
      </section>

      <section className="home-about-strip content-wrap" aria-label="Short introduction">
        <p className="strip-label">A QUICK HELLO</p>
        <p className="strip-copy">Computer science student by day, <span>full-stack tinkerer</span> by every other available hour. I like products with a point of view — and code that knows where it’s going.</p>
        <Link href="/about" className="round-arrow-link" aria-label="Read more about Debjit"><ArrowUpRight size={18} /></Link>
      </section>

      <section className="home-projects content-wrap" aria-labelledby="home-projects-title">
        <div className="section-heading-row">
          <div><p className="section-kicker">01 — THINGS I’VE MADE</p><h2 id="home-projects-title">Small ideas.<br /><em>Real links.</em></h2></div>
          <Link href="/projects" className="text-link">All six slots <ArrowUpRight size={16} /></Link>
        </div>
        <div className="home-project-list">
          {featured.map((project) => (
            <a className={`home-project-row tone-${project.color}`} key={project.number} href={project.href} target="_blank" rel="noreferrer">
              <span className="project-row-num">{project.number}</span>
              <div className="project-row-title"><h3>{project.name}</h3><p>{project.description}</p></div>
              <div className="project-row-tags">{project.technologies.slice(0, 2).map((tech) => <span key={tech}>{tech}</span>)}</div>
              <span className="row-open"><ArrowUpRight size={17} /></span>
            </a>
          ))}
        </div>
        <div className="project-inline-note"><span className="note-spark">✳</span> Three live builds, three open tabs for the future.</div>
      </section>

      <section className="problem-section content-wrap" id="problem-solving" aria-labelledby="problem-title">
        <div className="problem-panel">
          <div className="problem-topline"><span className="section-kicker">02 — THE PRACTICE CORNER</span><span className="problem-live-tag"><span className="live-dot" /> PUBLIC PROFILE SNAPSHOT</span></div>
          <div className="problem-heading-row">
            <div><h2 id="problem-title">Problem<br /><em>solving.</em></h2><p className="problem-intro">A little logic workout, one problem at a time. Progress counts more than streaks.</p></div>
            <div className="solved-metric"><strong>6</strong><span>confirmed<br />public solves</span><small>LeetCode 6 · Codeforces 0</small></div>
          </div>
          <div className="activity-card">
            <div className="activity-card-head"><div><span className="activity-title">Practice pulse</span><span className="activity-subtitle">a GitHub-style activity canvas</span></div><span className="activity-range">PROFILE LINKS ↗</span></div>
            <div className="activity-grid" role="img" aria-label="Decorative activity-style heatmap; daily activity is not synchronized because platform history is not publicly available as one combined feed.">
              {activityPattern.map((level, index) => <span key={index} className={`activity-cell level-${level}`} />)}
            </div>
            <div className="activity-foot"><span>QUIET</span><span className="activity-legend"><i className="level-0" /><i className="level-1" /><i className="level-2" /><i className="level-3" /></span><span>IN THE ZONE</span><span className="activity-disclaimer">Decorative motif — not synced to daily submissions.</span></div>
          </div>
          <div className="platform-grid">
            {platforms.map((platform) => (
              <a className="platform-card" key={platform.label} href={platform.href} target="_blank" rel="noreferrer">
                <span className={`platform-logo ${platform.color}`}>{platform.icon}</span>
                <span className="platform-copy"><strong>{platform.label}</strong><small>{platform.handle} · {platform.solved}</small></span>
                <ExternalLink size={15} className="platform-arrow" />
              </a>
            ))}
          </div>
          <p className="stats-note">Verified total is the visible LeetCode and Codeforces count. HackerRank and HackerEarth do not show a solved total publicly.</p>
        </div>
      </section>

      <section className="home-end content-wrap">
        <div className="home-end-glyph"><Braces size={29} strokeWidth={1.4} /><span>✳</span></div>
        <p>THE NEXT GOOD IDEA IS PROBABLY AROUND THE CORNER.</p>
        <h2>Let’s make<br /><em>something useful.</em></h2>
        <Link href="/links" className="button-dark">Find me around <ArrowUpRight size={17} /></Link>
        <span className="end-decoration" aria-hidden="true"><Code2 size={40} /><Sparkles size={19} /></span>
      </section>
    </div>
  );
}
