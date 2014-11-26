var request = require('request'),
    OAuth = require('OAuth');

var defaultOptions = {
    json: true
}

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'WJE4p30KjGiaNNBjtJ5RkhpYY',
    'mXGFHaG5tHrNJCUZ4kL76aNqv4td0hmQfquCD2PLWc1LZSdABx',
    '1.0A',
    'null',
    'HMAC-SHA1'
);

module.exports.timeline = function(tweetCallback) {

    oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        '13948672-y0DSr3MxY86qDLZKxqXXn4W3DHmlm7pXUX1egF5ON',
        '2eTWJAVAsKHi96N21zEkdsBT2RobJYbLNejUOwBnvlLdF',
        function(error, data, res){
            if (error) console.error(error);
            tweetCallback(data);
        });

}