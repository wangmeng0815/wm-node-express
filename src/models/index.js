const mongoose = require('mongoose');
const config = require('../config');
// 链接mongo 并且使用json_data这个集合(没有的话 会自动新建)
const { DB_URL } = config;
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo connect success 🦢 👌');
})

const models = {
    test: {
        'id': { type: Number, require: true },
        'title': { type: String, require: true},
        'content': {type: String}
    }
}

for(var m in models){
    mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name);
    }
}

