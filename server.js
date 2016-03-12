var http = require('http');
var fs = require('fs');

function onRequest(request, response) {

    if ("/" == request.url) {
        staticFiles("index.html", "views", "text/html", response);
    }

    if ("/elevatorJS.js" == request.url) {
        staticFiles("elevatorJS.js", "public", "text/javascript", response);
    }

    if ("/elevatorApp.js" == request.url) {
        staticFiles("elevatorApp.js", "controller", "text/javascript", response);
    }

    if ("/elevatorCSS.css" == request.url) {
        staticFiles("elevatorCSS.css", "public", "Stylesheet", response);
    }

    if ("/angular.min.js" == request.url) {
        staticFiles("angular.min.js", "public", "text/javascript", response);
    }

    if ("/jquery-1.6.4.min.js" == request.url) {
        staticFiles("jquery-1.6.4.min.js", "public", "text/javascript", response);
    }

    if ("/bootstrap.min.css" == request.url) {
        staticFiles("bootstrap.min.css", "public", "Stylesheet", response);
    }

    if ("/bootstrap-theme.min.css" == request.url) {
        staticFiles("bootstrap-theme.min.css", "public", "Stylesheet", response);
    }
}

http.createServer(onRequest).listen(9000);

function staticFiles(fileName, staticFolderName, type, resp) {
    filename = "../angularApp/app/" + staticFolderName +"/" + fileName;
    resp.writeHead(200, { "Content-Type": type });
    fs.readFile(filename, "utf8", function(err, data) {
        if (err) {
            throw err;
        }
        resp.write(data);
        resp.end();
    });
}
