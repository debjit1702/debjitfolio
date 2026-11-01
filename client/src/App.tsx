import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteShell from "./components/SiteShell";
import About from "./pages/About";
import Career from "./pages/Career";
import Home from "./pages/Home";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./contexts/ThemeContext";

const titles: Record<string, string> = {
  "/": "Debjit Biswas — Fullstack Software Engineer",
  "/about": "About — Debjit Biswas",
  "/career": "Career — Debjit Biswas",
  "/projects": "Projects — Debjit Biswas",
  "/links": "Links — Debjit Biswas",
  "/404": "Not found — Debjit Biswas",
};

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    document.title = titles[location] ?? titles["/404"];
  }, [location]);

  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/projects" component={Projects} />
        <Route path="/links" component={Links} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
