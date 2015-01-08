var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./utils');
var fs = require('fs');
var url = require('url');
// require more modules/folders here!
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.handleRequest = function (req, res) {
  console.log("Serving request type " + req.method + " for url " + req.url);
  if (req.method === "GET"){
    var headers = defaultCorsHeaders;
    if(req.url === '/' || req.url === "/index.html"){
      var indexHtml;
      //console.log("index.html requested/sent");
      res.writeHead(200, headers);
      fs.readFile(__dirname + '/public/index.html', function (err, data) {
        //console.log(JSON.stringify(data));
        if (err) { throw err; }
        indexHtml = data;
        res.end(indexHtml);
        // console.log(indexHtml);
      });
      //console.log(indexHtml);
    } else if (req.url === '/styles.css'){
      var stylesCss;
      //console.log("styles.css requested/sent");
      headers['Content-Type'] = 'text/css';
      res.writeHead(200, headers);
      fs.readFile(__dirname + '/public/styles.css', function(err, data){
        if (err) { throw err; }
        stylesCss = data;
        res.end(stylesCss);
      });
    } else {
      var parsedURL = url.parse(req.url);
      var fixtureName = parsedURL.pathname;
      res.writeHead(200, headers);
      var fixturePath = archive.paths.archivedSites + fixtureName;
      console.log(fixturePath);
      res.end(fixturePath);
    }
  } else if (req.method === "POST"){
    console.log("Serving request type " + req.method + " for url " + req.url);
    var parsedURL = url.parse(req.url);
    console.log(parsedURL);
    console.log(parsedURL.pathname);
  }
  // Is the user input a URL?
  // validateURL()
  //
  // If so,
    //  check if URL already exists in sites.txt => readListOfUrls && isUrlInList
      // if it exists, serve up the archived page by that URL => if isUrlInList then downloadUrls which sends the archived file to user*
      // if it doesn't,
        // redirect user to loading page & add the URL to sites.txt => addUrlToList

  // In the background, every minute,
    // cron is checking that every URL in sites.txt has a corresponding archived page => readListOfUrls & isURLArchived
      // If a URL doesn't have an archived page, then have htmlfetcher scrape the HTML code of the URL => run htmlfetcher.js script
  // If user input is not a URL, throw an error


  //res.end('./public/index.html');
};


