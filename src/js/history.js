import { renderPagination} from './pagination'
import { movieService } from './movie-service'
import { renderCollection } from './render-movies'
export const currentHistoryPage=getCurrentPage()
import refs from './refs'

window.addEventListener('DOMContentLoaded', init);
window.onpopstate = init


async function init  () {
    const currentPage = getCurrentPage();
    await movieService.galleryData();
    refs.moviesCard.innerHTML = '';
    let data = await movieService.getSearchQuery(
    movieService.query,
    currentPage
    );

    if (data.total_pages === 1) {
    pagination.innerHTML = '';
    return;
    }
    renderCollection(data.results);
    renderPagination(movieService.totalPage, currentPage);

    
}
function getCurrentPage() {
    const href = location.href
    const url = new URL(href)
    const page = url.searchParams.get('page')||1
    return +page ?? 1
}  



export const changeNavigation = (page) => {
    const href = location.href
    const url = new URL(href)
    url.searchParams.set('page', page)
    history.pushState({}, '', url.toString());   
}
