import { Link } from 'react-router-dom';

export default function FarmsWriteup() {
  return (
    <div className="article-page">
      <Link to="/" className="article-back">← Back to portfolio</Link>
      <h1>Umar Farouk Farms</h1>
      <p className="article-meta">Web Development · Live</p>

      <h2>The Problem</h2>
      <p>
        Umar Farouk Farms is a family-run livestock business. Like many small farm businesses,
        it had no online presence no way for people to find the farm, see what it offers, or
        get in touch outside of word of mouth.
      </p>

      <h2>What I Built</h2>
      <p>
        A website that gives the farm a real online presence, laying out the services it
        offers: livestock sales, livestock sourcing, and farm support services for other farms
        that need help managing their own operations.
      </p>
      <p>
        The site also includes a livestock listing feature, where available animals are shown
        for anyone looking to purchase.
      </p>

      <div className="article-links">
        <a href="https://umar-farouk-farms.vercel.app/" target="_blank" rel="noopener" className="btn-primary">
          View Live Site
        </a>
      </div>
    </div>
  );
}