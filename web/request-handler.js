var path = require('path');
var archive = require('../helpers/archive-helpers');
var utils = require('./utils');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.url === '/'){
    pathObj['/'];
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

  var pathObj = {
   '/' : subroutines();
   };

  var subroutines = function(){

  };

  //res.end(archive.paths.list);
};


