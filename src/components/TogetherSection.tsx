import { ArrowUpRight } from './icons';

export function TogetherSection() {
  return (
    <section id="together" className="together">
      <div className="together-art">
        <span className="big-spark">✳</span>
        <p>
          YOU + ME
          <br />+ COFFEE.
        </p>
        <div className="handwritten">that’s a good union.</div>
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
