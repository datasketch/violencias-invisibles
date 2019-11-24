var nav = document.querySelector('nav');
var postHeader = document.getElementById('post-header');

function handleIntersection(entries, observer) {
  var entry = entries[0];
  nav.classList.toggle('affix', !entry.isIntersecting);
}

var observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.25,
});
observer.observe(postHeader);
