import { Link } from 'react-router-dom';

export default function WhyHireMe() {
  return (
    <div className="article-page">
      <Link to="/" className="article-back">← Back to portfolio</Link>
      <h1>Why You Should Hire Me</h1>
      <p>
        Anyone can prompt an AI into a working demo now, that's a baseline, not a skill.
        The real question isn't "can they build something," it's do they know what they're
        building, and when it breaks, can they find where the problem is.
      </p>

      <h2>What I can do</h2>
      <p>
        I build real solutions, not just demos. Look at my Livestock Tracking and Monitoring
        System as an example, a working system, hardware and software, built to solve a
        real problem for a real farm.
      </p>

      <h2>What I can't do</h2>
      <p>
        I haven't worked on a large engineering team, and I haven't shipped anything under
        real production traffic. I've pushed my own systems until I found where they break,
        and fixed it but I know that's not the same as production traffic finding those
        breaks for me. I'd rather you know that going in than find out later. I believe I
        can scale up and meet the demands quickly, but I haven't had that experience yet.
      </p>

      <h2>Three reasons to consider me anyway</h2>
      <p>
        <strong>1. I don't trust code until I've tested it including mine.</strong><br />
        I test what I build to see that it actually works well, not just that it runs.
      </p>
      <p>
        <strong>2. I know how to work with AI, not just talk to it.</strong><br />
        I can catch it when it's going wrong missing a step, or misunderstanding what I
        asked it to do. That's a real skill on its own, separate from just telling it "build
        this for me." I use it deliberately, only when I choose to.
      </p>
      <p>
        <strong>3. Circumstances don't stop me.</strong><br />
        I've dealt with real financial constraints, no proper setup to work full time.
        There were times I had to tape my screen just to see what I was typing, or shrink my
        whole window to half the screen and still code through it. That's not a circumstance
        that can stop me, I adapt. I won't wait for ideal conditions to start doing good work, and I won't wait for them
        on your team either if I get the chance.
      </p>
    </div>
  );
}