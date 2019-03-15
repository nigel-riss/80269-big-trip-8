import {typeMap} from './get-trip-point';

/**
 * Render trip offer html
 * @param {string} offerName
 * @param {number} offerPrice
 * @return {string}
 */
const renderTripOffer = (offerName, offerPrice) => `
  <li>
    <button class="trip-point__offer">${offerName} +&euro;&nbsp;${offerPrice}</button>
  </li>
`;


const renderTripOffers = (offerNames) => {
  return [...offerNames]
    .map((offerName) => renderTripOffer(offerName, 20))
    .join(``);
};


/**
 * Render trip point html code
 * @param {Object} trip
 * @return {string}
 */
const renderTripPoint = (trip) => `
  <article class="trip-point">
  <i class="trip-icon">
    ${typeMap[trip.type].icon}
  </i>
  <h3 class="trip-point__title">
    ${typeMap[trip.type].title} ${trip.destination}
  </h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">${trip.timeStart}:00&nbsp;&mdash; ${trip.timeEnd}:00</span>
    <span class="trip-point__duration">1h 30m</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;${trip.price}</p>
  <ul class="trip-point__offers">
    ${renderTripOffers(trip.offers)}
  </ul>
  </article>
`;

export default renderTripPoint;
