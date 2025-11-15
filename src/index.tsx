import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const GITHUB_REPO_URL = "https://github.com/yshuman1/Loki.git";

const Header = () => (
  <header>
    <div className="container">
      <a href="#" className="logo">Loki<span>.</span></a>
      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1>LOKI</h1>
      <p>The Mischievously Fast & Open Source Email Client.</p>
      <div className="cta-buttons">
        <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
        <a href="#" className="btn btn-secondary">Download (Soon)</a>
      </div>
    </div>
  </section>
);

const features = [
  {
    title: "Blazing Fast",
    description: "Built with performance in mind. Loki flies through your inbox without breaking a sweat."
  },
  {
    title: "Secure & Private",
    description: "Your data is yours. With end-to-end encryption and no tracking, your privacy is paramount."
  },
  {
    title: "AI-Powered Assistance",
    description: "Let Loki's AI draft replies, summarize long threads, and prioritize what's important. Your personal email assistant."
  },
  {
    title: "Infinitely Customizable",
    description: "Tweak every aspect of your email experience. Themes, plugins, and custom layouts."
  },
  {
    title: "Advanced Search",
    description: "Find anything in your archive instantly with powerful, lightning-fast search operators and filters."
  },
  {
    title: "Truly Open Source",
    description: "Loki is free and open source forever. Inspect the code, contribute, and be part of the community."
  }
];

const Features = () => (
  <section className="features-section">
    <div className="container">
      <h2>Why Loki?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="footer-col footer-left">
      &copy; {new Date().getFullYear()}{' '}
      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
        Loki
      </a>
      . Released under a FOSS license.
    </div>
    <div className="footer-col footer-center">
      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
        Contribute on GitHub
      </a>
    </div>
    <div className="footer-col footer-right">
      Made with ❤️ & ☕ by{' '}
      <a href="https://github.com/yshuman1" target="_blank" rel="noopener noreferrer">
        YASIN SHUMAN
      </a>
    </div>
  </footer>
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
