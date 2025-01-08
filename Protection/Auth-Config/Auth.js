const exJwt = require('express-jwt');
const secret = process.env.Secret

function jwtCheck(){
    return exJwt({
        secret: secret,
        algorithms: ['HS256']
    });
}

function jwtAuth(){
    return exJwt({
        secret: secret,
        algorithms: ['HS256'],
        isRevoked: revoke
    });
}

async function revoke(req, payload, done){
    if(!payload.role == "Admin"){
        done(null, true);
    }
    done(null, false);
}

module.exports = { jwtCheck, jwtAuth };