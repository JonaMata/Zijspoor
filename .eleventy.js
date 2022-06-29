module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("media");
    return {
        dir: {
            layouts: "_layouts",
        },
    };
};
