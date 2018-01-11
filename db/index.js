var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds249707.mlab.com:49707/comicscoll');

exports.db = mongoose;