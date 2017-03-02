export default function fillInResult(el, data) {
// this.el = el;

  el.querySelector('.title').innerText = data.show_title;
  el.querySelector('.rating').innerText = data.rating;
  el.querySelector('.genre').innerText = data.category;
  el.querySelector('.image').src = data.poster;
  el.querySelector('.summary__paragraph').innerText = data.summary;
  el.querySelector('.actors__paragraph').innerText = data.show_cast;

}
