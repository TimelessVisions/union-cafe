import type { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { Bn, ke } from './recoveredRuntime.js';

/**
 * Typed surface over the RECONSTRUCTED motion runtime.
 * Prop names follow the recovered FluidCanvas-style API.
 */

export type CoffeeStatus = 'starting' | 'running' | 'unsupported';

export type CoffeeFluidProps = {
  colors?: readonly string[] | string;
  dissipation?: number;
  curl?: number;
  splatRadius?: number;
  quality?: 'low' | 'medium' | 'high';
  glow?: number;
  idle?: boolean;
  paused?: boolean;
  /** When false (the cafe default), touch scrolling is preserved via pan-y. */
  captureTouch?: boolean;
  label?: string;
  onStatusChange?: (status: CoffeeStatus) => void;
  className?: string;
  children?: ReactNode;
};

export type CoffeeFluidHandle = {
  splat: (x?: number, y?: number) => void;
};

export const CoffeeFluid = Bn as unknown as ForwardRefExoticComponent<
  CoffeeFluidProps & RefAttributes<CoffeeFluidHandle>
>;

export type UnionWordmarkProps = {
  wordmark?: string;
  brand?: string;
  blurb?: string;
  tagline?: string;
  preset?: string;
  palette?: { background: string; ink: string; accent: string };
  fontFamily?: string;
  serifFamily?: string;
  height?: string;
  crew?: Array<{
    kind: string;
    letter: number;
    seat: string;
    name?: string;
    says?: string;
    flip?: boolean;
  }>;
  doodles?: readonly string[];
  columns?: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  actions?: Array<{ label: string; href: string; variant?: string; icon?: string }>;
  legal?: Array<{ label: string; href: string }>;
  socials?: Array<{ label: string; href: string }>;
  copyright?: string;
};

export const UnionWordmark = ke as (props: UnionWordmarkProps) => ReactNode;
