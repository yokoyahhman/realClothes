
module.exports = {

    photos : (function () {

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
    
        var userDataMin = 36;
        var userDataMax = userDataMin + 4;

        var clothData = new Array();
        var dataExport = false;
        var fugafuga = [];

//console.log(clothes);

        clothes.find ({}, function(err, docs) {
            if (err) throw err;
 //console.log(docs);
            for (var i = 0; i < docs.length; i++) {
                for (var j = 0; j < docs[i].size.length; j++) {
                    if (docs[i].size[j].katahaba <= userDataMax && userDataMin <=docs[i].size[j].katahaba) {
                        clothData.push(docs[i]);
                    }
                }
            }
        });

//console.log(clothData);
return clothData;

        var arr = [{name:'/images/img_01.png', data:'hoge'},
                   {name:'/images/img_00.png', data:'fuga'},
                   {name:'/images/img_02.png', data:'mofu'},
                   {name:'/images/img_03.png', data:'moga'},
                   {name:'/images/img_04.png', data:'moge'},
                   {name:'/images/img_05.png', data:'hage'},
                   {name:'/images/img_00.png', data:'moga'},
                   {name:'/images/img_01.png', data:'mofu'},
                   {name:'/images/img_02.png', data:'moge'},
                   {name:'/images/img_03.png', data:'hoge'},
                   {name:'/images/img_04.png', data:'hage'},
                   {name:'/images/img_05.png', data:'fuga'}];

//        var arr = [];
        return arr;
    })()
};
