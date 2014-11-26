/**
* Tweet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*
*   https://dev.twitter.com/rest/reference/get/statuses/home_timeline
*/

module.exports = {

  attributes: {
    id: {

    },
    user: {
        type: 'string',
        maxLength: 30,
        minLength: 2,
        required: true
    },
    text: {
        type: 'string',
        maxLength: 46,
        minLength: 0,
        required: true
    },
    created_at: {
        type: 'string',
        maxLength: 30,
        minLength: 1,
        required: true
    }
  }
};

