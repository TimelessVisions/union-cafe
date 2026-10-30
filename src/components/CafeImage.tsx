const widths = [640, 1280] as const;

const files = {
  drinks: 'ig-01-drinks',
  banquette: 'gm-05-banquette',
  case: 'gm-01-case',
  windows: 'gm-03-windows',
} as const;

export type CafePhotoId = keyof typeof files;

function srcSet(base: string, ext: string) {
  return widths.map((width) => `/photos/${base}-${width}.${ext} ${width}w`).join(', ');
}

export function CafeImage({
  id,
  alt,
  sizes,
  loading = 'lazy',
}: {
  id: CafePhotoId;
  alt: string;
  sizes: string;
  loading?: 'lazy' | 'eager';
}) {
  const base = files[id];
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(base, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(base, 'webp')} sizes={sizes} />
      <img
        src={`/photos/${base}-1280.jpg`}
        srcSet={srcSet(base, 'jpg')}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
