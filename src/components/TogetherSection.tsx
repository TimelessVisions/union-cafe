import { useEffect, useRef, useState, type CSSProperties } from 'react';
import '@fontsource/anton/latin-400.css';
import { ArrowUpRight } from './icons';

/**
 * Kinetic block for "YOU + ME + COFFEE."
 *
 * Type is Anton (Vernon Adams, SIL Open Font License 1.1) via
 * @fontsource/anton. The letterforms are that font, not a trace of the
 * reference wordmarks. Black bars are an original sliding-door treatment:
 * they scale from one edge once, when the panel enters the viewport, then
 * hold. The reference clip conceals and loops; this panel reveals and holds
 * so the line stays readable.
 *
 * The crema wash is an owner-supplied photograph (October 30, 2026),
 * optimized to public/textures/espresso-crema.jpg. It is not a third-party logo.
 */

const ROWS = [
  { text: 'YOU', side: 'start', rest: 0.76, delay: '0s' },
  { text: '+ ME', side: 'end', rest: 0.7, delay: '0.08s' },
  { text: '+ COFFEE.', side: 'start', rest: 0.46, delay: '0.16s' },
] as const;

export function TogetherSection() {
  const artRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const art = artRef.current;
    if (!art || open) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(art);
    return () => observer.disconnect();
  }, [open]);

  return (
    <section id="together" className="together">
      <div ref={artRef} className="together-art" data-reveal={open ? 'open' : 'closed'}>
        <div className="crema-wash" aria-hidden="true" />
        <div className="poster">
          {ROWS.map((row) => (
            <div key={row.text} className={`poster-row poster-row-${row.side}`}>
              <span className="poster-word">{row.text}</span>
              <span
                className="poster-door"
                aria-hidden="true"
                style={{ '--rest': row.rest, '--delay': row.delay } as CSSProperties}
              />
            </div>
          ))}
        </div>
        <p className="poster-caption">that’s a good union.</p>
      </div>
      <div className="together-copy">
        <p className="eyebrow">SOME THINGS ARE BETTER SHARED</p>
        <h2>
          Your cup.
          <br />
          Your corner.
          <br />
          <em>Your Union.</em>
        </h2>
        <p>
          A coffee break can be more than a coffee break. A familiar face. A new conversation. A
          little room to slow down.
        </p>
        <p>Find us in Harlem. Grab something fresh, connect to the WiFi, and make yourself at home.</p>
        <a className="button dark" href="#visit">
          Pull up a chair <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
