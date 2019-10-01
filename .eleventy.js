const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const moment = require("moment")

module.exports = function (config) {

  //general markdown options
  let options = {
    typographer: true,
    quotes: '“”‘’'
  }
  let md = markdownIt(options)
            .use(markdownItAttrs)

  //markdown for direct `.md` file processing
  config.setLibrary("md", md)

  //today's date
  config.addShortcode("today", function (format="Do MMMM YYYY") {
    return moment().format(format)
  })

  //filters
  config.addFilter("date", function(value, format="Do MMMM YYYY") {
    return moment(value).format(format)
  })
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