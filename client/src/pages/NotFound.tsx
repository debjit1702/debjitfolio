import { ArrowLeft, Compass } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

const NOT_FOUND_PATH = "/404";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    if (window.location.pathname.replace(/\/$/, "") !== NOT_FOUND_PATH) window.history.replaceState({}, "", NOT_FOUND_PATH);
    return () => robots.remove();
  }, []);

  return (
    <section className="not-found-page content-wrap">
      <span className="not-found-icon"><Compass size={26} /></span>
      <p className="eyebrow"><span className="eyebrow-line" /> WRONG TURN, GOOD TIMING</p>
      <h1>Nothing<br /><em>over here.</em></h1>
      <p>This route isn’t on the map. The rest of the portfolio is right where you left it.</p>
      <button className="button-primary" type="button" onClick={() => setLocation("/")}><ArrowLeft size={16} /> Back home</button>
      <style>{`.not-found-page{min-height:68vh;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-top:50px;padding-bottom:70px}.not-found-icon{display:grid;place-items:center;width:53px;height:53px;margin-bottom:23px;border:1px solid var(--ink);border-radius:50%;background:var(--chartreuse)}.not-found-page h1{margin:0 0 16px;font:600 clamp(60px,9vw,96px)/.88 'Space Grotesk',sans-serif;letter-spacing:-.08em}.not-found-page h1 em{color:#8c70ce;font-style:normal}.not-found-page>p:not(.eyebrow){max-width:400px;margin:0 0 22px;color:#6c655d;font-size:14px;line-height:1.6}`}</style>
    </section>
  );
}
