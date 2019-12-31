const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItImplicitFigures = require('markdown-it-implicit-figures')
const moment = require("moment")

module.exports = function (config) {

  //general markdown options
  let options = {
    typographer: true,
    quotes: '“”‘’',
    html: true
  }
  let md = markdownIt(options)
            .use(markdownItAttrs)
            .use(markdownItImplicitFigures, {
              dataType: false,  // <figure data-type="image">, default: false
              figcaption: true,  // <figcaption>alternative text</figcaption>, default: false
              tabindex: false, // <figure tabindex="1+n">..., default: false
              link: false, // <a href="img.png"><img src="img.png"></a>, default: false,
              copyAttrs: true
            })

  //markdown for direct `.md` file processing
  config.setLibrary("md", md)

  //today's date
  config.addShortcode("today", function (format="Do MMMM YYYY") {
    return moment().format(format)
  })

  //format date
  config.addFilter("date", function(value, format="Do MMMM YYYY") {
    return moment(value).format(format)
  })

  //render markdown
  config.addFilter("md", function (content) {
    return md.render(content)
  })

  //static files
  config.addPassthroughCopy("_source/assets")


  return {
    dir: {
      input: "_source",
      includes: "_includes",
      layouts: "_layouts",
      dataTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk"]
    }
  }
}