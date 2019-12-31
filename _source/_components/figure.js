module.exports = function (figure) {
  return `<figure class="figure ${figure.classes}">
      <div class="figure__images">
        <img src="${figure.url}" alt="${figure.caption}"/>
      </div>
      <figcaption>${caption}</figcaption>
    </figure>`
}