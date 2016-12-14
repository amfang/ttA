/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com

var exec = require('child_process').exec;
var cmdStr = 'nohup ./ssserver &';
exec(cmdStr, function(err,stdout,stderr){
  if(err) {
    console.log('ssserver exec error:'+stderr);
  }
});
