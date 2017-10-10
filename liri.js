var keys = require('./keys.js')

var Twitter = require('twitter');

var client = new Twitter(keys)

var params = { screen_name: 'grassisgreen77' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = 0; i < 10; i++) {
            console.log(tweets[i].text);
        }

    }
});