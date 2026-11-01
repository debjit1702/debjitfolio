import { ArrowRight, Compass, GraduationCap, Terminal } from "lucide-react";
import { Link } from "wouter";
import { Marquee } from "@/components/Marquee";

const aboutCopy = "I’m Debjit: a Kolkata-based CS student who likes turning “what if?” into a working tab (and then three more). At Netaji Subhash Engineering College, I’m pursuing a BTech in Computer Science, class of 2027. I’ve also interned in IT at Maribus Solar, built an AI-powered résumé workflow and a multi-agent research tool, and put those ideas online. Currently collecting keyboard shortcuts, not excuses. Curious, collaborative, and slightly over-attached to a terminal.";

const aboutPhotos = [
  { src: "/about/about-01.webp", alt: "Debjit and teammates at a developer event, with laptops open." },
  { src: "/about/about-02.webp", alt: "A large group of attendees at a technology community event." },
  { src: "/about/about-03.webp", alt: "Students working together on laptops during a technology event." },
  { src: "/about/about-04.webp", alt: "A large group of attendees gathered at a developer community event." },
  { src: "/about/about-05.webp", alt: "Debjit speaking into a microphone at a technology event." },
  { src: "/about/about-06.webp", alt: "Debjit with friends in front of an Avalanche community event backdrop." },
  { src: "/about/about-07.webp", alt: "People collaborating around laptops in a bright workshop space." },
  { src: "/about/about-08.webp", alt: "A speaker presenting to a seated audience at a developer event." },
  { src: "/about/about-09.webp", alt: "An audience at a software demo, with an apparel data table on screen." },
  { src: "/about/about-10.webp", alt: "A developer presenting an AI project to an auditorium audience." },
  { src: "/about/about-11.webp", alt: "Debjit at a Google Developer community event." },
  { src: "/about/about-12.webp", alt: "A colorful display of assorted chocolate bars." },
  { src: "/about/about-13.webp", alt: "A Callchimp product-design presentation on a large display." },
];

function PhotoRow({ photos }: { photos: typeof aboutPhotos }) {
  return (
    <div className="about-photo-group">
      {photos.map((photo, index) => (
        <figure className="about-photo-card" key={photo.src}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        </figure>
      ))}
    </div>
  );
}

export default function About() {
  const firstRow = aboutPhotos.slice(0, 7);
  const secondRow = aboutPhotos.slice(7);

  return (
    <div className="page inner-page content-wrap">
      <div className="page-topline"><span>02 — ABOUT</span><span>THE PERSON BEHIND THE PIXELS</span></div>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A HUMAN, NOT A FRAMEWORK</p>
          <h1>Curious enough<br />to <em>keep building.</em></h1>
          <p className="about-lead">Hi, I’m Debjit. I study computer science, build things for the web, and enjoy that satisfying moment when an idea finally clicks into place.</p>
          <p className="about-word-count">{aboutCopy.trim().split(/\s+/).length} WORDS · SHORT ENOUGH FOR A COFFEE BREAK</p>
        </div>
        <aside className="about-photo-stage" aria-label="Personal and developer-community photo gallery">
          <div className="about-photo-stage-head"><span>OUTSIDE THE TERMINAL</span><span>13 FRAMES · PEOPLE + PLACES</span></div>
          <div className="about-photo-lanes">
            <Marquee className="about-photo-marquee about-photo-marquee-forward" label="Personal photos, first row. Focus or hover to pause the marquee.">
              <PhotoRow photos={firstRow} />
            </Marquee>
            <Marquee className="about-photo-marquee about-photo-marquee-reverse" label="Personal photos, second row. Focus or hover to pause the marquee." reverse>
              <PhotoRow photos={secondRow} />
            </Marquee>
          </div>
          <div className="about-photo-stage-foot"><span>GROWING, LEARNING, SHOWING UP</span><span>01 — 13</span></div>
        </aside>
      </section>

      <section className="about-copy-card">
        <div className="copy-card-index">A LITTLE<br />CONTEXT <span>↘</span></div>
        <p>{aboutCopy}</p>
        <div className="copy-card-spark" aria-hidden="true">✳</div>
      </section>

      <section className="about-values" aria-label="Things Debjit cares about">
        <article className="value-card value-lavender"><span className="value-icon"><GraduationCap size={20} /></span><small>01 / LEARN</small><h2>Know a bit.<br /><em>Keep asking.</em></h2><p>Computer science at NSEC, Kolkata. Graduating in 2027.</p></article>
        <article className="value-card value-chartreuse"><span className="value-icon"><Terminal size={20} /></span><small>02 / MAKE</small><h2>From sketch<br />to <em>ship.</em></h2><p>Useful web products, with both the UI and the plumbing in mind.</p></article>
        <article className="value-card value-tomato"><span className="value-icon"><Compass size={20} /></span><small>03 / EXPLORE</small><h2>Follow the<br /><em>interesting bit.</em></h2><p>AI-assisted workflows, research systems, and whatever makes the next build click.</p></article>
      </section>

      <div className="about-next"><span>CURIOUS ABOUT THE DETOURS?</span><Link href="/career" className="text-link">See the timeline <ArrowRight size={16} /></Link></div>
    </div>
  );
}
