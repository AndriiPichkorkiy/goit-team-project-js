class Pagination {
  constructor() {
    // Поточна сторінка
    this.currentPage = 1;
    // Загальна кількість сторінок
    this.totalPages = 1;
  }

  render(totalPages, currentPage) {
    let liItem = '';
    let beforePages = currentPage - 2;
    let nextPages = currentPage + 2;
    let currentLiItem;

    if (currentPage > 1) {
      liItem += `<li>
        <button class="pagination__button pagination__button--prev">Prev</button>
      </li>`;
    }

    if (currentPage > 3) {
      liItem += `<li>
        <button class="pagination__button pagination__button--js">1</button>
      </li>`;
    }

    if (currentPage > 4) {
      liItem += `<li class="pagination__dots">...</li>`;
    }

    for (
      let buttonsQuantity = beforePages;
      buttonsQuantity <= nextPages;
      buttonsQuantity++
    ) {
      if (buttonsQuantity <= 0) {
        continue;
      }

      if (buttonsQuantity > totalPages) {
        break;
      }

      if (buttonsQuantity === currentPage) {
        currentLiItem = 'pagination__button--current';
      } else {
        currentLiItem = '';
      }
      liItem += `<li>
        <button class="pagination__button ${currentLiItem} pagination__button--js">${buttonsQuantity}</button>
      </li>`;
    }

    if (currentPage < totalPages - 3) {
      liItem += `<li class="pagination__dots">...</li>`;
    }

    if (currentPage < totalPages - 2) {
      liItem += `<li>
        <button class="pagination__button pagination__button--js">${totalPages}</button>
      </li>`;
    }

    if (currentPage < totalPages) {
      liItem += `<li>
        <button class="pagination__button pagination__button--next">Next</button>
      </li>`;
    }
    const pagination = document.querySelector('.pagination__list');
    pagination.innerHTML = liItem;

    const prevBtnEl = document.querySelector('.pagination__button--prev');
    const nextBtnEl = document.querySelector('.pagination__button--next');

    pagination.addEventListener('click', onPaginationBtnClick);

    if (prevBtnEl) {
      prevBtnEl.addEventListener('click', onPrevBtnClick);
    }
    if (nextBtnEl) {
      nextBtnEl.addEventListener('click', onNextBtnClick);
    }
  }
}
