import { ArrowUp, ArrowUpRight, Volume2, VolumeX, Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { playSoftClick } from "@/lib/sound";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Projects", href: "/projects" },
  { label: "Links", href: "/links" },
];

const footerSocials = [
  { label: "GitHub", href: "https://github.com/debjit1702", detail: "@debjit1702" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/debjit-biswas-350783215", detail: "Let’s connect" },
  { label: "Instagram", href: "https://www.instagram.com/debjit_1702/", detail: "@debjit_1702" },
];

function KolkataClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="clock-chip" aria-label={`Live local time in Kolkata: ${time || "loading"}`}>
      <span className="live-dot" aria-hidden="true" />
      <span>Kolkata, IN</span>
      <span className="clock-divider" aria-hidden="true" />
      <time>{time || "--:--"}</time>
    </div>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(() => {
    try {
      return window.localStorage.getItem("debjit-portfolio-sound") !== "off";
    } catch {
      return true;
    }
  });

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    try {
      window.localStorage.setItem("debjit-portfolio-sound", soundOn ? "on" : "off");
    } catch {
      // Sound preference still works for this session if storage is unavailable.
    }
  }, [soundOn]);

  const handleActionSound = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a, button, [role=button]")) {
      if (soundOn) playSoftClick();
    }
  };

  return (
    <div className="site-shell" id="site-top" onClickCapture={handleActionSound}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="wordmark" aria-label="Debjit Biswas, home">
            <span className="wordmark-mark" aria-hidden="true">db<span>/</span></span>
            <span className="wordmark-name">Debjit Biswas<small>Fullstack Software Engineer</small></span>
          </Link>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`nav-link ${location === page.href ? "active" : ""}`}
                aria-current={location === page.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {page.label}
              </Link>
            ))}
          </nav>

          <div className="header-tools">
            <KolkataClock />
            <button
              className="theme-toggle"
              type="button"
              onClick={() => toggleTheme?.()}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
            </button>
            <button
              className="sound-toggle"
              type="button"
              onClick={() => setSoundOn((enabled) => !enabled)}
              aria-label={soundOn ? "Mute interface sounds" : "Enable interface sounds"}
              title={soundOn ? "Mute interface sounds" : "Enable interface sounds"}
            >
              {soundOn ? <Volume2 size={16} strokeWidth={1.8} /> : <VolumeX size={16} strokeWidth={1.8} />}
            </button>
            <button
              className="mobile-menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="page-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-topline" />
        <div className="footer-main">
          <section className="footer-callout" aria-labelledby="footer-callout-title">
            <p className="footer-kicker">A GOOD PLACE TO START</p>
            <h2 id="footer-callout-title">Have a thing<br />to <em>make?</em></h2>
            <p className="footer-callout-copy">A project, a question, or just a thoughtful hello — my inbox is open.</p>
            <a href="mailto:debjitbiswas529@gmail.com" className="footer-cta-button">Write me a note <ArrowUpRight size={16} /></a>
            <span className="footer-callout-spark" aria-hidden="true">✳</span>
          </section>

          <div className="footer-side">
            <div className="footer-brand">
              <Link href="/" className="footer-brand-link" aria-label="Debjit Biswas, home">
                <span className="footer-mark">db<span>/</span></span>
                <span>Debjit Biswas<small>Fullstack Software Engineer</small></span>
              </Link>
              <p>Small ideas, carefully built.<br />Made in Kolkata, West Bengal.</p>
            </div>

            <div className="footer-link-groups">
              <nav className="footer-column" aria-label="Explore the site">
                <h3>EXPLORE</h3>
                {pages.map((page) => <Link href={page.href} key={page.href}>{page.label}<ArrowUpRight size={12} /></Link>)}
                <a href="https://drive.google.com/file/d/1gd03anrsgcOZcKerIK90nzBw8xt1qlIL/view?usp=sharing" target="_blank" rel="noreferrer">Resume<ArrowUpRight size={12} /></a>
              </nav>
              <div className="footer-column">
                <h3>ELSEWHERE</h3>
                {footerSocials.map((social) => <a href={social.href} key={social.label} target="_blank" rel="noreferrer"><span>{social.label}<small>{social.detail}</small></span><ArrowUpRight size={12} /></a>)}
                <a href="mailto:debjitbiswas529@gmail.com"><span>Email<small>Say hello directly</small></span><ArrowUpRight size={12} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Debjit Biswas <span aria-hidden="true">·</span> Made with curiosity in Kolkata</p>
          <p className="footer-bottom-note">Still becoming.</p>
          <a className="footer-back-top" href="#site-top">Back to top <ArrowUp size={13} /></a>
        </div>
      </footer>
    </div>
  );
}
