var fs = require('fs');
var fdd = require('./index');
// fs.readFile(__dirname + '/inpsut.txt', 'utf8', function (err, content) {
console.log(fdd);


// })

var text = 'hii this is new file'
fs.writeFile(__dirname + '/input.txt', text, { encoding: "utf8",flag:"w", mode: 0o666 },function(err,content) {
    if (err) {
        console.log(err);

    } else { 
       var cc=  fs.readFileSync('input.txt','utf8')
        console.log(cc);
    }
}, )
// var ff = fs.writeFileSync('./new.txt', 'hii hii hiih', { encoding: 'utf8', flag: "a",
//      })

// var fdd = fs.readFileSync('./new.txt', { encoding: 'utf8', })

// fs.unlinkSync(__dirname+'/new.txt');

