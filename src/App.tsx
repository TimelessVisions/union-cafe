import { conceptNote, footer } from './content/site';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuPreview } from './components/MenuPreview';
import { PhotoGrid } from './components/PhotoGrid';
import { SocialStrip } from './components/SocialStrip';
import { Ticker } from './components/Ticker';
import { TogetherSection } from './components/TogetherSection';
import { VisitSection } from './components/VisitSection';
import { UnionWordmark } from './motion';

export default function App() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <div className="announcement">
        A LITTLE COFFEE. A LITTLE COMMUNITY. A LOT OF UNION. <span>HARLEM, NYC ↗</span>
      </div>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <PhotoGrid />
        <MenuPreview />
        <TogetherSection />
        <VisitSection />
        <SocialStrip />
      </main>
      <UnionWordmark {...footer} />
      <div className="concept-note">{conceptNote}</div>
    </>
  );
}
