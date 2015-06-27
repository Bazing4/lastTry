// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '922608617799776', // your App ID
        'clientSecret'  : '6aaf2ad06b8fd42a8adaa31ba9ac1fe5', // your App Secret
        'callbackURL'   : 'http://lasttry-lasttry.rhcloud.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'BBRtpvAtQs27VaNU03e6YYxTD',
        'consumerSecret'    : 'jekQIU2hy4u8MeR5UsXKFRDz4WGdMTECqZrrqmzqXZovBbETZL',
        'callbackURL'       : 'http://lasttry-lasttry.rhcloud.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '890401297810-db616jo1jvi3ss02ug7mudjv59gjsfej.apps.googleusercontent.com',
        'clientSecret'  : 'x2PsN21NR1qdTovz0EsQ4DC6',
        'callbackURL'   : 'http://lasttry-lasttry.rhcloud.com/auth/google/callback'
    }

};
