module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("media");
    eleventyConfig.addPassthroughCopy("robots.txt");
    return {
        dir: {
            layouts: "_layouts",
        },
    };
};
