const express = require('express');
const Router = express.Router();
const model = require('./index');
const Test = model.getModel('test');

// 查询
Router.get('/list', function(req, res){
    Test.find(req.query, function(err, doc){
        // console.log(doc);
        return res.json({
            code: 0,
            msg: 'success',
            data: doc
        });
    })
});

// 单体查询
Router.post('/find', function(req, res){
    const { id } = req.body;
    Test.findOne({ id }, function(err, doc){
        if(err){
            return res.json({
                code: 1,
                msg: '查询出错',
                data: null
            });
        }
        return res.json({
            code: 0, 
            msg: 'success',
            data: doc
        })
    });
})

// 添加
Router.post('/add', function(req, res){
    const { id, title, content, } = req.body;
    Test.findOne({ id }, function(err, doc){
        if(doc){
            return res.json({code: 1, msg: 'id重复'})
        }
    });
    Test.create({id, title, content}, function(err, doc){
        if(err){
            return res.json({code: 1, msg: 'server报错'})
        }
        return res.json({code: 0, msg: 'success'})
    })
});

// 删除
Router.post('/delete', function(req, res){
    //{ n: 1, ok: 1, deletedCount: 1 }
    const { body } = req;
    Test.remove(body, function(err, doc){
        if(err){
            return res.json({
                code: 1,
                msg: '删除失败'
            })
        }
        if(doc.ok == 1){
            return res.json({
                code: 0,
                msg: 'success',
                data: null
            })
        }
    })
});

// 更新
Router.post('/update', function(req, res){
    Test.update({}, function(err, doc){
        console.log(doc);
    })
});

Router.get('/query', function(req, res){
    Test.findOne({}, function(err, doc){
        console.log(doc);
    })
})
module.exports = Router;


