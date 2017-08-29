'use strict';

var marklogic = require('marklogic');
var my = require('./my-connection');
var db = marklogic.createDatabaseClient(my.connInfo);
var _ = require('lodash');

exports.query = function(req, res) {
    const pageNumber = parseInt(req.query.pageNumber);
    const pageSize = parseInt(req.query.pageSize);
    const start = (pageNumber - 1) * pageSize;

    var qb = marklogic.queryBuilder;
    const query = db.documents.query(
        qb.where(
            //qb.byExample({ content: { text: { $word: req.query.text } } })
            qb.byExample({ text: { $word: req.query.text } })
            //qb.parsedFrom('java')
        )
    )

    query.result(function(results) {

        /*For testing pagination
        const docs = [];
        for (let i = 0; i <= 350; i++) {
            docs.push({ uri: `url-${i}`, content: { text: `textasdfas asdfalhdfahj asdflhkjfas aksdhfjkas akhafsk asdfhjkas ${i}` } });
        }
        */
        const end = start + pageSize;
        const totalCount = results.length;

        if (!results || !results.length) {
            return res.send({ totalCount: 0, data: [] });
        }

        // ToDo : this query needs to optimise to get the document of the current page only
        const data = results.slice(start, end).map((document) => {
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