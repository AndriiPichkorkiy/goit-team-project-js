import { renderPagination } from './pagination'
import { movieService } from './movie-service'
import { renderCollection } from './render-movies'
export const currentHistoryPage=getCurrentPage()

addEventListener("popstate",function(e){
    e.preventDefault()
    setTimeout(async function ad() {
    const data = await movieService.getSearchQuery(movieService.query, getCurrentPage());
    renderPagination(movieService.totalPage, data.page);
    renderCollection(data.results);
}
,0)
},false);


export function changeNavigation(page){
    const href = location.href
    const url = new URL(href)
    url.searchParams.set('page', page)
    history.pushState({}, '', url.toString())

}

function getCurrentPage() {
    const href = location.href
    const url = new URL(href)
    const page = url.searchParams.get('page')
    return page ?? 1
    
}
