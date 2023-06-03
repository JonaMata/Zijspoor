module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("media");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    return {
        dir: {
            layouts: "_layouts",
        },
    };
};
