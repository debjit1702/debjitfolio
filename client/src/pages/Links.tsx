import { ArrowDownRight, ArrowUpRight, AtSign, FileText, Github, Instagram, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { socials } from "@/lib/portfolio";

const iconByKind = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  instagram: Instagram,
  resume: FileText,
} as const;

export default function Links() {
  return (
    <div className="page inner-page content-wrap links-page">
      <div className="page-topline"><span>05 — LINKS</span><span>AROUND THE INTERNET</span></div>
      <section className="links-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> FIND THE RIGHT TAB</p>
        <h1>Good people.<br /><em>Good links.</em></h1>
        <p>For code, conversation, collaboration, or the occasional “hey, I saw your work” — here are the doors.</p>
      </section>

      <section className="links-list" aria-label="Contact and profile links">
        {socials.map((social, index) => {
          const Icon = iconByKind[social.kind];
          return (
            <a key={social.label} className={`contact-link contact-${social.kind}`} href={social.href} target={social.kind === "email" ? undefined : "_blank"} rel={social.kind === "email" ? undefined : "noreferrer"}>
              <span className="contact-index">0{index + 1}</span>
              <span className="contact-icon"><Icon size={22} strokeWidth={1.6} /></span>
              <span className="contact-copy"><strong>{social.label}</strong><small>{social.detail}</small></span>
              <span className="contact-arrow"><MoveUpRight size={19} /></span>
            </a>
          );
        })}
      </section>
      <div className="links-postcard"><div className="postcard-stamp">KOL<br />IN</div><span className="postcard-kicker">POSTCARD FROM KOLKATA</span><p>“There’s always one more thing to learn. Good thing there’s always one more cup of chai, too.”</p><span className="postcard-signature">— Debjit <AtSign size={14} /></span><ArrowDownRight className="postcard-arrow" size={28} /></div>
      <p className="links-bottom"><span className="note-spark">✳</span> The quickest way to reach me is <a href="mailto:debjitbiswas529@gmail.com">email <ArrowUpRight size={13} /></a>.</p>
    </div>
  );
}
