// initialize mongodb
const fs = require('fs');
const Pair = require('../server/models/pair');
const TokenBasic = require('../server/models/token_basic');
var configDB = require('../server/config/database');
const mongoose = require('mongoose');
console.log( configDB.url )
mongoose.connect(configDB.url, {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => { console.log('MongoDB is connected') })
.catch(err => {
  console.log('MongoDB connection unsuccessful');
  console.log(err)
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let missing = [];
let indexes = [];
( async () => {


    let pairs = await Pair.find()
    for( let i = 0;  i < pairs.length; i++ ){  
        if( i%1000 == 0 ) console.log( i );
        let pair = pairs[i];
        indexes.push(pair.index);
    }
    indexes.sort(function(a, b) {
        return a - b;
    });
    for(var i = 1; i < indexes.length; i++) {
        let index = indexes[i];
        if(index - indexes[i-1] != 1) {
                console.log(`MISSING: ${index} | ${indexes[i-1]} ` );
                while( index - indexes[i-1] != 1 ){
                    index --;
                    missing.push( index )
                }
        }
    }
    console.log(`TOTAL MISSING: ${missing.length}`);
    fs.writeFileSync('./missing.json', JSON.stringify(missing), 'utf-8');
    console.log('done')

       
})();





