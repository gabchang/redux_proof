var express        = require('express'),
    app            = express(),
    logger         = require('bunyan-request-logger'),
    noCache        = require('connect-cache-control'),
    errorHandler   = require('express-error-handler'),
    http           = require('http'),
    log            = logger(),
    port           = 3000;


app.use(log.requestLogger());
app.get('/log.gif', noCache, log.route());
app.use(express.static('public'));

app.use( log.errorLogger() );

var server = http.createServer(app);
app.use( errorHandler({server: server}) );

server.listen(port, function () {
  console.log('Example app listening at http://localhost:%s', port);
});
