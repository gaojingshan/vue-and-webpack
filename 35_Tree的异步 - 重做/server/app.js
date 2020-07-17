const express = require('express');
const url = require('url');

const app = express();
app.get('/info', (req, res) => {
    var m = url.parse(req.url, true).query.m;
    if (m == undefined || m == '') {
        res.json({
            arr: [
                {
                    qid: '010',
                    qname: '北京分公司'
                },
                {
                    qid: '020',
                    qname: '上海分公司'
                },

            ]
        })
    } else if (m == '010') {
        res.json({
            arr: [
                {
                    bid: '1001',
                    bname: '行政部'
                },
                {
                    bid: '1002',
                    bname: '人事部'
                },
                {
                    bid: '1003',
                    bname: '研发部'
                },
            ]
        })
    } else if (m == '1001') {
        res.json({
            arr: [
                {
                    rid: '19001',
                    rname: '小红'
                },
                {
                    rid: '19002',
                    rname: '小程'
                },
                {
                    rid: '19003',
                    rname: '小黄'
                },
                {
                    rid: '19004',
                    rname: '小绿'
                },

            ]
        })
    } else if (m == '1002') {
        res.json({
            arr: [
                {
                    rid: '19005',
                    rname: '小青'
                },
                {
                    rid: '19006',
                    rname: '小蓝'
                }
            ]
        })
    } else if (m == '1003') {
        res.json({
            arr: [
                {
                    rid: '19007',
                    rname: '小紫'
                },
                {
                    rid: '19008',
                    rname: '小花'
                },
                {
                    rid: '19009',
                    rname: '白云'
                },
            ]
        })
    } else if (m == '020') {
        res.json({
            arr: [
                {
                    bid: '2001',
                    bname: '行政部'
                },
                {
                    bid: '2002',
                    bname: '研发部'
                },
            ]
        })
    } else if (m == '2001') {
        res.json({
            arr: [
                {
                    rid: '18001',
                    rname: '小小白'
                },
                {
                    rid: '18002',
                    rname: '小小彬'
                },
                {
                    rid: '18003',
                    rname: '小小'
                },
            ]
        })
    } else if (m == '2002') {
        res.json({
            arr: [
                {
                    rid: '18007',
                    rname: '大斌'
                },
                {
                    rid: '18008',
                    rname: '大名'
                },
                {
                    rid: '18009',
                    rname: '黑土'
                },
            ]
        })
    }

})
app.listen(3000);