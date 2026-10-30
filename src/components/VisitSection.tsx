import { links, needsOwnerConfirmation, visitFacts } from '../content/site';
import { ArrowUpRight, MapPin } from './icons';

export function VisitSection() {
  return (
    <section id="visit" className="visit">
      <div className="visit-header">
        <p className="eyebrow">SAME CITY. YOUR LITTLE CORNER.</p>
        <h2>
          See you at <em>Union.</em>
        </h2>
      </div>
      <div className="visit-grid">
        <div className="location-art">
          <span className="street street-one">W 142ND STREET</span>
          <span className="street street-two">HARLEM, NEW YORK</span>
          <div className="pin">
            <MapPin size={42} />
            <strong>union</strong>
            <span>YOU BELONG HERE.</span>
          </div>
          <span className="map-caption">A LITTLE PLACE TO COME TOGETHER.</span>
        </div>
        <div className="location-info">
          <span className="location-tag">HARLEM · NEW YORK CITY</span>
          <h3>
            Come for the coffee.
            <br />
            Stay for a while.
          </h3>
          <div className="location-row" data-needs-confirmation={needsOwnerConfirmation.address ? 'address' : undefined}>
            <span>FIND US</span>
            <p>
              {visitFacts.streetLine}
              <br />
              {visitFacts.cityLine}
            </p>
          </div>
          <div className="location-row" data-needs-confirmation={needsOwnerConfirmation.hours ? 'hours' : undefined}>
            <span>COME BY</span>
            <p>
              {visitFacts.days}
              <br />
              {visitFacts.hours}
            </p>
          </div>
          <div className="location-row" data-needs-confirmation={needsOwnerConfirmation.email ? 'email' : undefined}>
            <span>SAY HELLO</span>
            <a href={`mailto:${links.email}`}>{links.email}</a>
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
