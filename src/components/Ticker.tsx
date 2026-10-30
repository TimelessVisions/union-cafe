import { Fragment } from 'react';
import { tickerParts } from '../content/site';

export function Ticker() {
  return (
    <div className="ticker">
      <div>
        {tickerParts.map((phrase, index) => (
          <Fragment key={index}>
            {phrase}
            <span>✳</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
