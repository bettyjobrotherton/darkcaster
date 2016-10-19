var mySecretPassphrase = process.env.PASSPHRASE || require('../config.js').secretPassphrase;

function authorize(request, response, next){
  var secretPassphrase = request.headers.secret;

  if(!secretPassphrase || secretPassphrase !== mySecretPassphrase){
    response.status(403).json({
      msg: 'You are not authorized'
    });
  } else {
    next();
  }
}

module.exports = authorize;
