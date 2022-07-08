export default function wоchMovie() {
  const videos = v.results;
  console.log('-------функція wochMovie--------');
  const btn = document.querySelector('.add-to-watched');
  console.log('Arr: ', videos);
  console.log('1');
  console.log(btn);

  btn.addEventListener('click', () => {
    woch(videos);
  });
}

function woch(videos) {
  console.log("You click to button 'Woch movie'!");
  console.log('Arr: ', videos);
}
