
/*
 * GET home page.
 */

//exports.index = function(req, res){

        // mongo
        var mongoose = require('mongoose');
        //使用するDBへ接続
        mongoose.connect('mongodb://localhost/testDB5');
        var kinect = mongoose.Schema;

        //kinect用データのスキーマ定義
        var clothes = mongoose.model('test1', new kinect({ 
            name: String,
            price: String,
            category: String,
            size: [{
                SML: String,
                kitake: Number,
                katahaba: Number,
                mihaba: Number,
                sodetake: Number 
            }],
            images: [String],
            brand: String,
            url: String
        })
        );
    
        var userDataMin = 40;
        var userDataMax = userDataMin + 4;

        var clothData = new Array();
        var dataExport = false;
        var fugafuga = [];

//console.log(clothes);

        clothes.find ({}, function(err, docs) {
            if (err) throw err;
            for (var i = 0; i < docs.length; i++) {
                for (var j = 0; j < docs[i].size.length; j++) {
                    if (docs[i].size[j].katahaba <= userDataMax && userDataMin <=docs[i].size[j].katahaba) {
                        //clothData.push(docs[i]);
                        clothData.push({
                            name:docs[i].images[0],
                            data:docs[i].name
                        });
                    }
                }
            }
        });




exports.index = function(req, res){
    res.render('hogehoge', { num: clothData.length, data:'fuck',list: clothData });
};



/*
  var arr = require('./test.js');
  var list = arr.photos;
  var num = list.length;
console.log(arr);
var unko = 'fuck';

  res.render('hogehoge', { num: num,
                           list: list, 
                           data:unko
                         });
*/
//};


