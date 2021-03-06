// `require` the package at the top of the file with all the others
const embedYouTube = require("eleventy-plugin-youtube-embed");

// 11ty configuration
module.exports = config => {
	
// adds embed plugin
config.addPlugin(embedYouTube);

// sends images from src to build
config.addPassthroughCopy('src/images');

// sends fonts from src to build
config.addPassthroughCopy('src/fonts');

// sends css from src to build
config.addPassthroughCopy('src/css');


  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'docs'
    }

  };
};
