const mongoose = require('mongoose');

const Section = mongoose.model('Section', {
  id_section: String,
  href: String,
  title: String,
  name: String
})

module.exports = Section;