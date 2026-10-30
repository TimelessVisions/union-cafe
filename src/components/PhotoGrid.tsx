import { photoCards, photoSrc } from '../content/site';
import { ArrowUpRight } from './icons';

export function PhotoGrid() {
  return (
    <section className="trio" aria-label="Explore Union">
      {photoCards.map((card) => (
        <a key={card.label} href={card.href} className="photo-card">
          <img src={photoSrc(card.image)} alt={card.alt} data-photo="illustrative" />
          <span>
            {card.label}
            <ArrowUpRight />
          </span>
        </a>
      ))}
    </section>
  );
}
