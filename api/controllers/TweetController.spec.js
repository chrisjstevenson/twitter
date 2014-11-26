var assert = require('assert'),
    request = require('request'),
    host = "http://localhost:1337/";

function validateTweet(tweet){
    assert.equal(true, tweet.user !== undefined);
    assert.equal(true, tweet.text !== undefined);
    assert.equal(true, tweet.created_at !== undefined);
}

describe('TweetController', function() {
    var url = host + 'tweet';

    describe('GET', function() {

        it('should return 200', function (done) {
           request(url, function (error, res, body) {
              assert.equal(200, res.statusCode);
              done();
           });
        });


        it('should return Tweet model array', function(done){
           request(url, function (error, res, body) {
             var tweets = JSON.parse(body);
             assert.equal(true, tweets[0].text !== undefined);
             done();
           });
        });

        it('should return Tweet attributes', function(done){
           request(url, function(errr, res, body) {
              var tweets = JSON.parse(body);
              validateTweet(tweets[0]);
              done();
           });
        });

    });
})