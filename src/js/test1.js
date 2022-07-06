
// const div = document.getElementById('test1');

// import * as imageNameKakaiHachyTakIHa3aVy from '../images/bg-home-320-1x-min.jpg';

// div.innerHTML = `<img src="${imageNameKakaiHachyTakIHa3aVy}" alt="abc" />`;





function addEvents() {
    const watchedBtn = document.querySelector('.add-to-watched');
    const queueBtn = document.querySelector('.add-to-queue');
    if (watchedBtn) {
      watchedBtn.addEventListener('click', addToWatched);
      queueBtn.addEventListener('click', addedToQueue);
    } else {
        alert('NO BTN WAS WOUND');
    }
}

export {addEvents}