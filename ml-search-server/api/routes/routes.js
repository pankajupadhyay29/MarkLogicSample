'use strict';
module.exports = function(app) {
    var search = require('../controllers/searchController');

    app.route('/search')
        .get(search.query);

};