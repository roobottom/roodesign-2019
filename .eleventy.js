module.exports = function (eleventyConfig) {

  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {
    typographer: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLib);

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