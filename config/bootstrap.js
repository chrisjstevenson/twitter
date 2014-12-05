/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var express = require('../node_modules/sails/node_modules/express');

module.exports.http = {
  customMiddleware: function (app) {
      app.use(express.compress());
      app.use('/assets', express.static(__dirname + '/../assets/'));
  }
};

module.exports.bootstrap = function(cb) {
    cb();
};
