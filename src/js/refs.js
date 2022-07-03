const refs = {
}
export default refs;
const elements = document.querySelectorAll('[data-id]');
elements.forEach(elem => {
    refs[elem.dataset.id] = elem;
});
