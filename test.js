const fs = require('fs');


var image = ["0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111000000000000000000000000000011001111011100000000000000000000000000001100010000100000000000000000000000000001111010010110000000000000000000000000000111111111001000000000000000000000000000100011111111100000000000000000000000000000000011111110000000000000000000000000000000000000010000000000000000000000000000001111000000000000000000000000000000000011111110111000000000000000000000000000000011111011110000000000000000000000000000000000111111000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]



//var imgdata = JSON.parse(image);
// console.log(imgdata);

imbuffer = new Buffer.from(image);
console.log(imbuffer);


fs.writeFileSync("temp.jpeg", imbuffer);
console.log("complete");