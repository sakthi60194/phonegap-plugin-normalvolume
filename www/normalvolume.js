var exec = require('cordova/exec');

module.exports = {

    setSystemVolume: function(volume) {
        exec(null, null, "NormalVolume", "setNormalVolume", [volume]);
    },
};