/**
 * TweetController
 *
 * @description :: Server-side logic for managing tweets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var twitterService = require('../services/twitterService');

module.exports.timeline = function (req, res) {
    twitterService.timeline(function (tweets) {
      if (!tweets) return res.serverError(error);

      res.ok(tweets);
    });
};
