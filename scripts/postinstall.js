let exec = require('child_process').exec;
let os = require('os');

console.log(os.platform);
if (os.platform === 'darwin') {
    exec("unzip ../ios/libs/TwilioSDK/Libraries/libTwilioClient.a.zip -d ../ios/libs/TwilioSDK/Libraries/", function(err, stdout, stderr) {
        if (err !== null) {
            console.log('exec error: ' + error);
        }
    });
}
