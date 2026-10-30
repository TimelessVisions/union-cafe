import { Fragment } from 'react';
import { tickerParts } from '../content/site';

/**
 * Separator cropped from the owner-supplied painting signed MS '16.
 * Found via Cosmos (https://www.cosmos.so/e/1815613725); the pin credits
 * author karenmvaz. Rights are not confirmed. Do not ship this to
 * production until the owner clears usage.
 */
const SEPARATOR = '/art/cloud-coffee-cup.png';

export function Ticker() {
  return (
    <div className="ticker">
      <div>
        {tickerParts.map((phrase, index) => (
          <Fragment key={index}>
            {phrase}
            <span className="ticker-mark">
              <img src={SEPARATOR} alt="" />
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
