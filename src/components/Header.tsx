import { useState } from 'react';
import { links } from '../content/site';
import { ArrowRight, ArrowUpRight, Menu, X } from './icons';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-left">
        <a href="#favorites">The good stuff</a>
        <a href="#visit">Find us</a>
      </nav>
      <a className="logo" href="#" aria-label="Union Cafe home">
        union<span>CAFE · HARLEM</span>
      </a>
      <nav className="nav-right">
        <a href={links.instagram} target="_blank" rel="noreferrer">
          Instagram <ArrowUpRight size={14} />
        </a>
        <a href="#visit" className="nav-pill">
          Come on in <ArrowRight size={15} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav">
          <a href="#favorites" onClick={() => setOpen(false)}>
            The good stuff
          </a>
          <a href="#visit" onClick={() => setOpen(false)}>
            Find us
          </a>
          <a href={links.instagram}>Instagram ↗</a>
        </nav>
      )}
    </header>
  );
}
