import { links, visitFacts } from '../content/site';
import { CafeImage } from './CafeImage';
import { CupDoodle } from './Doodles';
import { ArrowUpRight } from './icons';

export function VisitSection() {
  return (
    <section id="visit" className="visit">
      <div className="visit-header">
        <p className="eyebrow">
          <CupDoodle /> Harlem, New York City
        </p>
        <h2>
          See you at <em>Union.</em>
        </h2>
      </div>
      <div className="visit-grid">
        <div className="location-art">
          <CafeImage
            id="windows"
            alt="Window seats inside Union Cafe, looking onto 142nd Street"
            sizes="(max-width: 800px) 100vw, 56vw"
          />
        </div>
        <div className="location-info">
          <h3>
            Come for the coffee.
            <br />
            Stay for a while.
          </h3>
          <div className="spec-list">
            <div className="spec-row">
              <span>Find us</span>
              <p>
                {visitFacts.streetLine}
                <br />
                {visitFacts.cityLine}
              </p>
            </div>
            <div className="spec-row">
              <span>Hours</span>
              <p>
                {visitFacts.days}
                <br />
                {visitFacts.hours}
              </p>
            </div>
            <div className="spec-row">
              <span>Phone</span>
              <a href={visitFacts.phoneHref}>{visitFacts.phone}</a>
            </div>
            <div className="spec-row">
              <span>Email</span>
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </div>
            <div className="spec-row">
              <span>WiFi</span>
              <p>{visitFacts.wifi}</p>
            </div>
          </div>
          <a className="button dark" href={links.map} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={18} />
          </a>
          <p className="hours-note">{visitFacts.hoursNote}</p>
        </div>
      </div>
    </section>
  );
}
