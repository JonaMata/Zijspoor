module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    return {
        dir: {
            layouts: "_layouts",
        },
    };
};
