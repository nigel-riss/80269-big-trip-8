const renderFilter = (filterId, isChecked = false) => `
  <input type="radio" id="filter-${filterId}" name="filter" value="${filterId}" ${isChecked ? `checked` : ``}>
  <label class="trip-filter__item" for="filter-${filterId}">${filterId}</label>
`;

export default renderFilter;
