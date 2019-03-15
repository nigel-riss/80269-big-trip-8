import getTripPoint from './modules/get-trip-point';
import renderFilter from './modules/render-filter';
import renderTripPoint from './modules/render-trip-point';
import {getRandomInt, insertHTMLToElement} from './modules/utils';


const addMultipleTripPoints = (quantity) => {
  const tripDayItems = document.querySelector(`.trip-day__items`);
  tripDayItems.innerHTML = ``;
  let tripsHtml = ``;
  for (let i = 0; i < quantity; i++) {
    tripsHtml += renderTripPoint(getTripPoint());
  }
  insertHTMLToElement(tripDayItems, tripsHtml);
};


// Drawing filters
const tripFilter = document.querySelector(`.trip-filter`);
const filtersOptions = [
  {id: `everything`, isChecked: true},
  {id: `future`, isChecked: false},
  {id: `past`, isChecked: false}
];
let filtersHtml = ``;
filtersOptions.forEach((filterOptions) => {
  filtersHtml += renderFilter(filterOptions.id, filterOptions.isChecked);
});
insertHTMLToElement(tripFilter, filtersHtml);

// Drawing trip points
// addMultipleTripPoints(7);

// Add random quantity of trip points on filter click
document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`trip-filter__item`)) {
    addMultipleTripPoints(getRandomInt(1, 7));
  }
});
