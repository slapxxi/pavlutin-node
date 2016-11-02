import $ from 'jquery';


export function addAnchors() {
  $('.layout-content')
    .find('h1,h2,h3,h4,h5,h6')
    .not('.title__main, .title__secondary')
    .each((i, h) => {addAnchor(h, i)});
}

function addAnchor(heading, id) {
  const $heading = $(heading);
  const attr = toUniqueID(id, $heading.text());
  const Link = $(`<a class="anchor" href="#${attr}">#</a>`);
  $heading.attr('id', attr);
  $heading.append(Link);
}

function toUniqueID(id, text) {
  return '_section__' + id + '__' + toDashCase(text);
}

function toDashCase(text) {
  return text.replace(' ', '-').toLowerCase();
}
