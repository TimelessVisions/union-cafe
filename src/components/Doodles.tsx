/** Original ink doodles. Not copied from the CANOFEE reference. */

export function CupDoodle() {
  return (
    <svg className="doodle" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M14 28h28c2 0 4 2 4 5v8c0 8-6 14-18 14S10 49 10 41v-8c0-3 2-5 4-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M46 34h4a6 6 0 0 1 0 12h-4" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 24c2-4 6-4 8 0M28 22c2-5 7-4 8 1" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="28" cy="54" rx="16" ry="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function LeafDoodle() {
  return (
    <svg className="doodle doodle-tilt" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M12 40c8-18 22-26 40-28-2 18-10 32-28 38-6 2-10-2-12-10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M22 42c6-6 12-14 18-22" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
