import { createElement, forwardRef, type ReactNode, type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };
type IconNode = readonly [string, Record<string, string>];

function createIcon(name: string, nodes: readonly IconNode[]) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
    { size = 24, strokeWidth = 2, className, children, ...props },
    ref,
  ) {
    const labeled = Boolean(props['aria-label']);
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={['lucide', `lucide-${name}`, className].filter(Boolean).join(' ')}
        aria-hidden={labeled ? undefined : true}
        {...props}
      >
        {nodes.map(([tag, attrs]) => createElement(tag, attrs))}
        {children as ReactNode}
      </svg>
    );
  });
  Icon.displayName = name;
  return Icon;
}

/** Paths match the lucide icons inlined in the recovered production bundle. */
export const ArrowRight = createIcon('arrow-right', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
]);

export const ArrowUpRight = createIcon('arrow-up-right', [
  ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
  ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
]);

export const Coffee = createIcon('coffee', [
  ['path', { d: 'M10 2v2', key: '7u0qdc' }],
  ['path', { d: 'M14 2v2', key: '6buw04' }],
  [
    'path',
    {
      d: 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1',
      key: 'pwadti',
    },
  ],
  ['path', { d: 'M6 2v2', key: 'colzsn' }],
]);

export const MapPin = createIcon('map-pin', [
  [
    'path',
    {
      d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
      key: '1r0f0z',
    },
  ],
  ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
]);

export const Menu = createIcon('menu', [
  ['path', { d: 'M4 5h16', key: '1tepv9' }],
  ['path', { d: 'M4 12h16', key: '1lakjw' }],
  ['path', { d: 'M4 19h16', key: '1djgab' }],
]);

export const X = createIcon('x', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);

export const Minus = createIcon('minus', [['path', { d: 'M5 12h14', key: '1ays0h' }]]);

export const Pause = createIcon('pause', [
  ['rect', { x: '14', y: '3', width: '5', height: '18', rx: '1', key: 'kaeet6' }],
  ['rect', { x: '5', y: '3', width: '5', height: '18', rx: '1', key: '1wsw3u' }],
]);

export const Play = createIcon('play', [
  [
    'path',
    {
      d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z',
      key: '10ikf1',
    },
  ],
]);

export const Plus = createIcon('plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);
