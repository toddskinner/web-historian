var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var fileContents;
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),   //takes you to files associated with our own site
  'archivedSites' : path.join(__dirname, '../archives/sites'),  //takes you to the saved HTML of each archived site
  'list' : path.join(__dirname, '../archives/sites.txt') //takes you to list of archived sites
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  fileContents = fs.readFile(path.list, 'utf8');
  return fileContents;
};  // read sites.txt

exports.isUrlInList = function(fileContents, targetURL){
  JSON.stringify(fileContents).split('/n')


  //check if URL in sites.txt
};

exports.addUrlToList = function(){
};  //if URL not in list, then add to list

exports.isURLArchived = function(){
};  // not sure, but probably checking if archived HTML page exists

exports.downloadUrls = function(){
};  // go grab the file requested by the user
