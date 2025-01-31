module.exports = function(eleventyConfig) {
  // نسخ ملف CSS
  eleventyConfig.addPassthroughCopy("style.css");


  eleventyConfig.addPassthroughCopy("p1.webp");
  eleventyConfig.addPassthroughCopy('p2.webp');
  eleventyConfig.addPassthroughCopy('p3.webp');
  eleventyConfig.addPassthroughCopy('p4.webp');
  eleventyConfig.addPassthroughCopy('p5.webp');
  eleventyConfig.addPassthroughCopy('p6.webp');
  eleventyConfig.addPassthroughCopy('p7.webp');
  eleventyConfig.addPassthroughCopy('p8.webp');
  eleventyConfig.addPassthroughCopy('instagrm.png');
  eleventyConfig.addPassthroughCopy('facebook.png');



  return {
    dir: {
      input: ".",  // المجلد الذي يحتوي على الملفات المصدرية
      output: "public"  // المجلد الناتج الذي ستوضع فيه الملفات النهائية
    }
  }
};
