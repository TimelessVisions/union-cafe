import { links } from '../content/site';
import { ArrowUpRight } from './icons';

export function SocialStrip() {
  return (
    <section className="social-strip">
      <div>
        <span className="eyebrow">MORE UNION, LESS SCROLLING.</span>
        <h2>But while you’re here…</h2>
      </div>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        @unioncafenyc <ArrowUpRight />
      </a>
    </section>
  );
}
