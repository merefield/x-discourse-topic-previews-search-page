

//import { name, draw, reportArea, reportPerimeter } from 'discourse/plugins/discourse-topic-previews/discourse/lib/utilities';

import { renderUnboundPreview, testImageUrl, buttonHTML, animateHeart, featuredImagesEnabled, getDefaultThumbnail } from 'discourse/plugins/discourse-topic-previews/discourse/lib/utilities';


console.log (renderUnboundPreview);
// let utilities;
// let masonry;
// let imagesloaded;

// try {
//   utilities = requirejs('discourse/plugins/discourse-topic-previews/discourse/lib/utilities.js.es6');
// } catch(error) {
//   //layouts = { createLayoutsWidget: createWidget };
//   console.error(error);
// }

// try {
//   masonry = requirejs('discourse/plugins/discourse-topic-previews/discourse/lib/masonry/masonry');
// } catch(error) {
//   //layouts = { createLayoutsWidget: createWidget };
//   console.error(error);
// }

// try {
//   imagesloaded = requirejs('discourse/plugins/discourse-topic-previews/discourse/lib/imagesloaded/imagesloaded');
// } catch(error) {
//   //layouts = { createLayoutsWidget: createWidget };
//   console.error(error);
// }

console.log (utilities);
console.log (imagesloaded);
console.log (masonry);

export default {
  name: 'search-previews-init',
  initialize(container, app) {
  }
}