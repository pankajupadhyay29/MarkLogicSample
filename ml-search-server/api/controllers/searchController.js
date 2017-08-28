'use strict';

var marklogic = require('marklogic');
var my = require('./my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');

exports.query = function(req, res) {
    const pageNumber = req.query.page_no;
    const pageSize = req.query.page_size;
    const start = (pageNumber - 1) * pageSize;

    var qb = marklogic.queryBuilder;
    const query = db.documents.query(
        qb.where(qb.byExample({ tags: req.query.text }))
    )
    query.result(function(documents) {
        const end = start + pageSize;
        // ToDo : this query needs to optimise to get the document of the current page only      
        const data = _.slice(documents, start, start + pageSize).map((document) => {
            return { url: document.uri, text: document.content.text.substring(0, 100) };
        })

        res.send({ totalCounts: documents.length, data: data });
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });
}
exports.view = function(req, res) {
    var qb = marklogic.queryBuilder;
    db.documents.read(req.query.url).result(function(documents) {
        res.send(documents);
    }, function(error) {
        res.send(JSON.stringify(error, null, 2));
    });

}