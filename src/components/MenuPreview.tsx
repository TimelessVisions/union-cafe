import { useState } from 'react';
import { links, picks } from '../content/site';
import { CafeImage } from './CafeImage';
import { LeafDoodle } from './Doodles';
import { ArrowUpRight, Minus, Plus } from './icons';

export function MenuPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="favorites" className="favorites">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <LeafDoodle /> Meet your next usual
          </p>
          <h2>
            Good things.
            <br />
            <em>Great company.</em>
          </h2>
        </div>
        <p>
          For the early starts, the long catch-ups,
          <br />
          and the “just one more” kind of days.
        </p>
      </div>
      <div className="picks">
        {picks.map((pick, index) => {
          const expanded = open === index;
          return (
            <article key={pick.name} className="pick" data-needs-confirmation="menu">
              <div className="pick-image">
                <CafeImage
                  id={pick.photo}
                  alt={pick.name}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span className="number">0{index + 1}</span>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-controls={`pick-${index}`}
                  aria-label={`Read about ${pick.name}`}
                >
                  {expanded ? <Minus /> : <Plus />}
                </button>
              </div>
              <p className="eyebrow">{pick.tag}</p>
              <h3>{pick.name}</h3>
              {expanded && (
                <p id={`pick-${index}`} className="pick-copy">
                  {pick.copy}
                </p>
              )}
            </article>
          );
        })}
      </div>
      <div className="menu-note">
        <span>Fresh selections change. Ask us what’s on the counter today.</span>
        <a href={links.instagram} target="_blank" rel="noreferrer">
          See what’s brewing <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
