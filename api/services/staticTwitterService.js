var request = require('request');

var defaultOptions = {
    json: true,
    url: 'http://localhost:1337/tweet'
}

module.exports.timeline = function(tweetCallback) {
    request(defaultOptions, function (error, response, body) {
       if (error || response.statusCode != 200) {
           sails.log.error({ message: 'get tweets', error: error});
       }
        tweetCallback(body);
    });
}