import { useRef, useState } from 'react';
import { fluidColors, visitFacts } from '../content/site';
import { CoffeeFluid, type CoffeeFluidHandle } from '../motion';
import { ArrowUpRight, Coffee, Pause, Play } from './icons';

export function Hero() {
  const fluid = useRef<CoffeeFluidHandle>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="hero">
      <CoffeeFluid
        ref={fluid}
        className="coffee-fluid"
        colors={fluidColors}
        glow={0}
        dissipation={0.1}
        curl={14}
        splatRadius={0.65}
        quality="medium"
        paused={paused}
        captureTouch={false}
        label="Interactive espresso and cream fluid animation"
      >
        <div className="hero-shade" />
        <div className="hero-top">
          <span>YOUR NEIGHBORHOOD, IN A CUP.</span>
          <span>{visitFacts.heroLocator}</span>
        </div>
        <div className="hero-center" aria-hidden="true">
          <div className="union-outline">UNION</div>
          <div className="circle-stamp">
            GOOD COFFEE
            <br />
            <Coffee size={30} />
            <span>BETTER TOGETHER</span>
          </div>
        </div>
        <div className="hero-bottom">
          <div>
            <p className="eyebrow light">COFFEE. PEOPLE. CONNECTION.</p>
            <h1>
              A little more
              <br />
              <em>together.</em>
            </h1>
            <div className="hero-actions">
              <a className="button cream" href="#favorites">
                Find your favorite <span aria-hidden="true">↓</span>
              </a>
              <a className="button outline" href="#visit">
                Meet us at Union <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="fluid-controls">
            <button type="button" onClick={() => fluid.current?.splat()} className="stir">
              ↻ Stir the coffee
            </button>
            <button
              type="button"
              className="pause"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? 'Play coffee animation' : 'Pause coffee animation'}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <small>MOVE YOUR CURSOR. MAKE SOME WAVES.</small>
          </div>
        </div>
      </CoffeeFluid>
    </section>
  );
}
