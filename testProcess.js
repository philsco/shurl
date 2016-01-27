
// GOOD : /^(http(s)?:\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]+$/

var mongoose = require('mongoose');

var urlString = 'mongodb://'+process.env.MONGOLAB_USER+':'+process.env.MONGOLAB_PASS+'@ds033145.mongolab.com:33145/fcc_challenges';

mongoose.connect(urlString, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to the database : '+ err);
      } else {
        var shurlSchema = new mongoose.Schema({
        original: {type: String, trim: true},
        shurl: {type: String, trim: true}
        }); 
        
        var master = new RegExp(/^(http(s)?:\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]+$/);
        
        if (master.test(process.argv[2])) {
            
        }
//        console.log(master.test(process.argv[2]));
//        /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(learnRegExp.arguments[0])
//        console.log(process.argv[2]);
      }
    });
    






