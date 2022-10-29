const mongoose = require('mongoose');

const Album = mongoose.model('Album', {
  href: String,
  title_alt: String,
  img_src: String,
  div2_name: String,
  span: String
})

module.exports = Album;
