import {createElement} from '../render.js';

function createFilterTemplate() {
  return (`<div class="trip-main__trip-controls  trip-controls">
            <div class="trip-controls__filters">
              <h2 class="visually-hidden">Filter events</h2>
              <form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>
            </div>
          </div>`);
}

export default class FilterView {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element){
      return createElement(this.getTemplate());
    } else {
      return this.element;
    }
  }

  deleteElement() {
    this.element = null;
  }
}