const request = require('request');

exports.handler = function(event, context, callback) {
  event.queryStringParameters.api_key = process.env.FLICKR_API_KEY;

  request.get({
    uri: 'https://api.flickr.com/services/rest/',
    qs: event.queryStringParameters
  }, (err, res, body) => {
    if (err) {
      // fail gracefully?
      console.log(err);
    }
    callback(null, {
      statusCode: 200,
      body
    });
  });
}