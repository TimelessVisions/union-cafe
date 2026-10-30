import { photoCards } from '../content/site';
import { CafeImage } from './CafeImage';

export function PhotoGrid() {
  return (
    <section className="trio" aria-label="Explore Union">
      {photoCards.map((card) => (
        <a key={card.label} href={card.href} className="photo-card">
          <CafeImage id={card.photo} alt={card.alt} sizes="(max-width: 700px) 34vw, 33vw" />
          <span>
            {card.label.trim()}
          </span>
        </a>
      ))}
    </section>
  );
}
