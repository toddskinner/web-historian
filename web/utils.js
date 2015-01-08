var headers = {
  'Content-Type': 'application/json'
};

exports.sendResponse = function(res, data, statusCode){
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);
  res.end(archive.paths.list);
};

exports.collectURL = function(request, callback){
  var targetURL = "";
  request.on('data', function(chunk){
    targetURL += chunk;
  });
  request.on('end', function(){
    callback( JSON.parse(targetURL) );
  });
};

exports.validateURL = function(){

};

