const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItImplicitFigures = require('markdown-it-implicit-figures')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAbbr = require('markdown-it-abbr')
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
              copyAttrs: false
            })
            .use(markdownItFootnote)
            .use(markdownItAbbr)

  //markdown for direct `.md` file processing
  config.setLibrary("md", md)

  //set deepmerge
  config.setDataDeepMerge(true)

  //today's date
  config.addShortcode("today", function (format="Do MMMM YYYY") {
    return moment().format(format)
  })

  //format date
  config.addFilter("date", function(value, format="Do MMMM YYYY") {
    return moment(value).format(format)
  })

  //format dateslug
  config.addFilter("dateslug", function (value) {
    return moment(value).format("YYYY-MM-DD")
  })

  //render markdown
  config.addFilter("md", function (content) {
    return md.render(content)
  })

  //spread
  config.addFilter("spread", function (obj) {
    return {...obj}
  })

  //static files
  config.addPassthroughCopy("_source/assets")

  //case studies
  config.addCollection("case-study", function(collection) {
    return articles = collection.getFilteredByGlob(["./_source/case-studies/*.njk"]).sort( function(a, b) {
      return b.date - a.date
    })
  })

  config.addCollection("work", function(collection) {
    return collection.getFilteredByGlob(["./_source/work/*.njk"]).sort( function(a, b) {
      return b.date - a.date
    })
  })

  //design system
  config.addCollection("dsBrand", collection => {
    const docs = collection.getFilteredByGlob("_source/design-system/brand/*.njk")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  })
  config.addCollection("dsStyles", (collection) =>
    collection.getFilteredByGlob("_source/design-system/styles/*.njk")
  )
  config.addCollection("dsComponents", (collection) =>
    collection.getFilteredByGlob("_source/design-system/components/*.njk").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
  )


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