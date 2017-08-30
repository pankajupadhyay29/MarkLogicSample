'use strict';

var marklogic = require('marklogic');
var my = require('../../my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');

exports.query = function(req, res) {
    const pageNumber = parseInt(req.query.pageNumber);
    const pageSize = parseInt(req.query.pageSize);
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;

    var qb = marklogic.queryBuilder;
    const query = db.documents.query(
        qb.where(
            qb.byExample({ text: { $word: req.query.text } })
        )
        .slice(start, end)
        .withOptions({ categories: 'content', metrics: true })
    )

    query.result(function(response) {
        const metrics = response[0]
        const totalCount = metrics.total;

        if (totalCount === 0) {
            return res.send({ totalCount: 0, data: [] });
        }

        const results = response.slice(1)

        const data = results.map((document) => {
            return { url: document.uri, text: document.content.text.substring(0, 100) };
        });

        res.send({ totalCount, data });
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